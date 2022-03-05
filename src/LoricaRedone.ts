import { on, printConsole, Form, Game, Message, Actor, ObjectReference, Spell, Debug, Utility, hooks, once, FormList, Keyword, MagicEffect } from  "skyrimPlatform";
import { SetIntValue, GetIntValue, FormListHas, GetFloatValue, FormListAdd, UnsetIntValue, AdjustIntValue, FormListCount, FormListRemove, FormListGet } from  "@skyrim-platform/papyrus-util/StorageUtil";
import { FormListHas as UpkeepListHas } from  "@skyrim-platform/papyrus-util/JsonUtil";
import { IntToString, HasActiveSpell, GetAllSpells, GivePlayerSpellBook } from  "@skyrim-platform/po3-papyrus-extender/PO3_SKSEFunctions";
import { pl, juKeys, suKeys, UIUpdateDebuffMeter, FormToString } from "./YM_Lorica_Shared"
import { mainCompat } from "./YM_Lorica_Compat"
import { mainUtilitySpells } from "./YM_Lorica_UtilitySpells"
import { mainMCM } from "./YM_Lorica_MCM"
import { fchmod } from "fs";
import { debug } from "util";

mainMCM();
mainUtilitySpells();
//---------------------------------COMPATIBILITY SECTION---------------------------------------------
on('loadGame', () => { 
	var allspells:Spell[]
	allspells = GetAllSpells(null, true);
	if ( GetIntValue(null, suKeys.iCompatAllSpells) != allspells.length ) { mainCompat(); };
});
on('scriptInit', (event) => { 
	var allspells:Spell[]
	allspells = GetAllSpells(null, true);
	if ( GetIntValue(null, suKeys.iCompatAllSpells) != allspells.length && !GetIntValue(null, suKeys.bCompatInitialized) ) { mainCompat(); };
});
once('update', () => {
	// GivePlayerSpellBook(); // debug option
})
// --------------------------------DUAL CAST CHECK----------------------------
// hook into dual cast magic animation to doubly check if spell was dual cast [check]
// getEquippedSpell(0) == left hand
// getEquippedSpell(1) == right hand
let bDualCast = false
let bUpkeepCast = false
var fChargeTimerR: number = 0
var fChargeTimerL: number = 0
var Spellduration: number = 0
hooks.sendAnimationEvent.add({
	enter(ctx) {
		let animEvent = ctx.animEventName.toLowerCase()
		// printConsole(animEvent);
		if (animEvent.includes("dualmagic")) { 
			once('update', () => {
				const equippedRight = Form.from(Game.getPlayer().getEquippedSpell(1));
				if ( !equippedRight ) { return; };
				const sDualCast = "LoricaRedone" + equippedRight.getName() + "DualCast";
				if ( !equippedRight || !sDualCast ) { return; };

				if ( bDualCast ) {
					SetIntValue(null, sDualCast, 1);
					// printConsole('sendAnimationEvent:: dual cast check: ' + GetIntValue(null, sDualCast, 0));
				}
			});
		}
		// ----------------------------------------cast charge stuff----------------------------------------
		const isInWrongLists = function (spell: Form) {
			if ( !UpkeepListHas(juKeys.path, suKeys.formUpkeepList, spell) || FormListHas(null, suKeys.formAppliedList, spell) ) {
				return true; 
			}
		}
		if (animEvent.includes("spellready") ) { 
			const SpellDurationBlock = function (spellHand: String, timer: number, flag: boolean, duration: number) {
				let equipped: Form
				let eventName: string = ''
				
				if ( spellHand.toLowerCase() == 'left') { equipped = Form.from(Game.getPlayer().getEquippedSpell(0)); eventName = 'mlh'; }
				if ( spellHand.toLowerCase() == 'right') { equipped = Form.from(Game.getPlayer().getEquippedSpell(1)); eventName = 'mrh'; }
				if ( isInWrongLists(equipped!) ) { timer = 0; flag = false; return };
				
				if ( animEvent.includes(eventName) ) { 
					on('update', () => { 
						if ( spellHand.toLowerCase() == 'left') { equipped = Form.from(Game.getPlayer().getEquippedSpell(0)) }
						if ( spellHand.toLowerCase() == 'right') { equipped = Form.from(Game.getPlayer().getEquippedSpell(1)) }
						if ( isInWrongLists(equipped!) ) { timer = 0; flag = false; return };
						if ( flag ) { 
							timer++
							duration = SetDuration( timer, equipped);
							if ( (timer / 60) > 300 ) {flag = false; timer = 0; }
						}
					})
				}
			}
			once('update', () => {
				bUpkeepCast = true;
				printConsole(fChargeTimerL)
				SpellDurationBlock('left', fChargeTimerL, bUpkeepCast, Spellduration)
				SpellDurationBlock('right', fChargeTimerR, bUpkeepCast, Spellduration)
			})
		}
		if (animEvent.includes("spellrelease") || animEvent.includes('equipped_event') || animEvent.includes('unequip') ) { bUpkeepCast = false; fChargeTimerL = 0;fChargeTimerR = 0; }
		if (animEvent.includes("spellrelease") ) { 
			once('update', () => {
				let left = Form.from(Game.getPlayer().getEquippedSpell(0)); 
				let right = Form.from(Game.getPlayer().getEquippedSpell(1));
				if ( !isInWrongLists(left) || !isInWrongLists(right) )	{MessageDurationResult(Spellduration)}
			})
		}
			
	},
	leave(ctx) {}
},  0x14, 0x14); // filter out non-player events

function MessageDurationResult(duration: number) {
	duration /= 60
	duration = Math.floor(duration)
	// if ( duration > 0 && duration < 7 ) { }
	const w =async () => {
		await Utility.wait(0.2)
		Debug.notification(`Spell has been charged enough to last ${duration} minutes!`) 
	}
	w()
}

const ChargeTime_V_Cost_Equation = function (spell: Form) {
	const fCost = Spell.from(spell).getEffectiveMagickaCost(pl());
	// equation ( charge_time is seconds spell needs to be charged to reach max spell duration )
	// 				 {	6.4e-4 * (x-10)^2	0 <= x <= 100
	// charge_time = |	
	// 				 {	5					x >= 100
	let charge_time = 0
	if ( fCost >= 0 && fCost < 100 ) { charge_time = 6.4e-4 * (fCost - 10)**2 }
	if ( fCost >= 100 ) { charge_time = 5;}
	return Math.floor(charge_time)
}

const Duration_V_ChargeTime = function (charge_timer: number, spell: Form) {
	let charge_calculated = ChargeTime_V_Cost_Equation(spell)
	// printConsole(charge_calculated)
	// equation
	// duration is in minutes, and is converted to seconds
	// duration = (9/5)*charge_time + 1		0 <= charge_time <= 5 minutes
	// duration = 10						charge_time >= 5 minutes
	// input charge_timer ( in seconds) should be the charge timer in the loop, NOT the calculated number from the equation ChargeTime_V_Cost_Equation
	charge_timer /= 60 // divide by 60 as the timer increments 60 times a second
	if ( charge_timer > 5 ) { return 600; }
	if ( charge_timer >= charge_calculated ){ return 600 }
	
	const duration =  ((9/5)*charge_timer + 2) * 60
	// printConsole(cha)
	if ( duration < 600 ) { return duration }
	if ( duration >= 600 ) { return 600 }
	// return
}

function SetDuration(charge_timer: number, spell: Form) {
	let duration: number = Duration_V_ChargeTime(charge_timer, spell)
	let s = Spell.from(spell)
	s.setNthEffectDuration(0, duration)
	return duration
}
//---------------------------MAIN--------------------------------------------
on('spellCast', (event) => {
	// const caster = Actor.from(event.caster.getBaseObject()) // event castor as Actor
	const castspell = Form.from(event.spell) // event spell as Form
	// const formlistApplied = FormList.from(Game.getFormFromFile(0x001D63, "Lorica Redone.esp"))
	// printConsole(`AppliedList Has => ${FormListHas(null, suKeys.formAppliedList, castspell)}`)
	
	if ( !castspell ) { return; };
	// if the spell is in the blacklist or isn't in the upkeep list, just stop
	if (UpkeepListHas(juKeys.path, suKeys.formBlackList, castspell) || !UpkeepListHas(juKeys.path, suKeys.formUpkeepList, castspell)){return;}; 
	
	// main toggle if-block
	if (!FormListHas(null, suKeys.formAppliedList, castspell)){ ToggleSpell('on', castspell); }
	else { ToggleSpell('off', castspell); };
	
});
// ----------------------------------------CLEANUP------------------------------------------
on('effectFinish', (event) => { 
	for ( let i = 0; i < FormListCount(null, suKeys.formAppliedList); i++ ) {
		const F = FormListGet(null, suKeys.formAppliedList, i)
		const S = Spell.from(F)
		if ( !HasActiveSpell(pl(), S) ) { ToggleSpell("off", F); UIUpdateDebuffMeter() };
	};
});

// -------------------------------------FUNCTIONS----------------------------------------------------------------

export function ToggleSpell(option: string, spell?: Form) { // variable name succeeded by a ? makes the argument optional
	const Remove = function (spell: Form) { 
		FormListRemove(null, suKeys.formAppliedList, spell!, false) ;// remove form from applied spells list
		formlistApplied.removeAddedForm(spell!);
		pl().dispelSpell(Spell.from(spell));
	}
	
	// printConsole("ToggleSpell:: running")
	option = option.toLowerCase()

	const spellCum =  Spell.from(Game.getFormFromFile(0x1A33, "Lorica Redone.esp")) // the spell responsible for the Cumulative penalty
	const spellUpkeep =  Spell.from(Game.getFormFromFile(0x1c40, "Lorica Redone.esp")) // the spell responsible for the Total Upkeep penalty
	
	const formlistApplied = FormList.from(Game.getFormFromFile(0x001D63, "Lorica Redone.esp"))

	const spellstring = IntToString(spell?.getFormID(), true) // exclamation mark assures compiler that variable will be there
	let fMag = GetFloatValue(null, spellstring, 0);
	let iCum = Math.floor(fMag * (GetFloatValue(null, suKeys.fCumFraction, 0.20))); // get the cumulative increase from the argument spell, rounded down
	// remove upkeep and cumulative spells for adjustment
	pl().removeSpell(spellCum);
	pl().removeSpell(spellUpkeep);
	// get currently equipped spells to check for dual-cast
	const equippedLeft = Form.from( Game.getPlayer().getEquippedSpell(0));
	const equippedRight = Form.from(Game.getPlayer().getEquippedSpell(1));
	const sDualCast = "LoricaRedone" + equippedRight.getName() + "DualCast";
	if (option.includes("on")){
		FormListAdd(null, suKeys.formAppliedList, spell!, true); // add form to list of applied spells
		formlistApplied.addForm(spell!);
		try {
			
			if (equippedRight.getFormID() == equippedLeft.getFormID() && GetIntValue(null, sDualCast, 0) == 1){
				// printConsole('ToggleSpell: dualcast check => Good!');
				fMag *= 2
				iCum *= 2
				SetIntValue(null, sDualCast, 1)
			}
		}
		catch (error) {};
	};
	if (option == "off"){
		Remove(spell!)
		// dual cast check
		if ( GetIntValue(null, sDualCast, 0) != 0 ) {
			fMag *= 2;
			iCum *= 2;
			UnsetIntValue(null, sDualCast);
		};
		// failsafe if-blocks
		const iCumTotal = GetIntValue(null, suKeys.iCumTotal, 0); // teehee 'cumtotal'
		const iUpkeepTotal = GetIntValue(null, suKeys.iUpkeepTotal, 0);
		if ( iCumTotal > 0 ){
			iCum *= -1;
		};
		if ( iUpkeepTotal > 0 ){
			fMag *= -1;
		};
		// a last resort if-block to make sure nothing weird happens
		if ( iCumTotal - iCum < iCumTotal || iUpkeepTotal - fMag < iUpkeepTotal ){
			fMag = 0;
			iCum = 0;
		};
	};
	if (option == "reset"){
		fMag = 0;
		iCum = 0;
	};
	if (option == "zero" || FormListCount(null, suKeys.formAppliedList) == 0){
		SetIntValue(null, suKeys.iCumTotal, 0);
		SetIntValue(null, suKeys.iUpkeepTotal, 0);
		fMag = 0;
		iCum = 0;
	};
	const newUpkeep = AdjustIntValue(null, suKeys.iUpkeepTotal, fMag);
	const newCum = AdjustIntValue(null, suKeys.iCumTotal, iCum);
	// printConsole(` newUpkeep: ${newUpkeep}\n newCum: ${newCum}`)
	
	if ( newUpkeep  < 0 ){ SetIntValue(null, suKeys.iUpkeepTotal, 0); };
	if ( newCum < 0 ) { SetIntValue(null, suKeys.iCumTotal, 0); };
	// incase something messes up, and there's some leftover penalties, despite having no spells active
	if ( newUpkeep > 0 && FormListCount(null, suKeys.formAppliedList) == 0 ) {  SetIntValue(null, suKeys.iUpkeepTotal, 0); SetIntValue(null, suKeys.iCumTotal, 0);};
	
	spellCum.setNthEffectMagnitude(0, newCum);
	spellUpkeep.setNthEffectMagnitude(0, newUpkeep);
	
	const addingspells = async () => {
		await Utility.wait(0.1)
		const spellUpkeep =  Spell.from(Game.getFormFromFile(0x001c40, "Lorica Redone.esp")) 
		const spellCum =  Spell.from(Game.getFormFromFile(0x001A33, "Lorica Redone.esp")) 
		const badded = pl().addSpell(spellUpkeep, false);
		pl().addSpell(spellCum, false);
		// if ( !badded ) { printConsole("failed"); }; 
		
	}
	addingspells();
	
	UIUpdateDebuffMeter();
	// printConsole(`ToggleSpell Has => ${FormListHas(null, suKeys.formAppliedList, spell!)}`)
};


