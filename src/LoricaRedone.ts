import { on, printConsole, Form, Game, Spell, Debug, Utility, hooks, once, FormList, browser } from  "skyrimPlatform";
import { SetIntValue, GetIntValue, FormListHas, GetFloatValue, FormListAdd, UnsetIntValue, AdjustIntValue, FormListCount, FormListRemove, FormListGet } from  "@skyrim-platform/papyrus-util/StorageUtil";
import { FormListHas as UpkeepListHas } from  "@skyrim-platform/papyrus-util/JsonUtil";
import { IntToString, HasActiveSpell, GetAllSpells, GivePlayerSpellBook } from  "@skyrim-platform/po3-papyrus-extender/PO3_SKSEFunctions";
import { pl, juKeys, suKeys, UIUpdateDebuffMeter } from "./YM_Lorica_Shared"
import { mainCompat } from "./YM_Lorica_Compat"
import { mainUtilitySpells } from "./YM_Lorica_UtilitySpells"
import { mainMCM } from "./YM_Lorica_MCM"

mainMCM();
mainUtilitySpells();
let bCharging = 1
//---------------------------------COMPATIBILITY SECTION---------------------------------------------
on('loadGame', () => { 
	var allspells:Spell[]
	allspells = GetAllSpells(null, true);
	if ( GetIntValue(null, suKeys.iCompatAllSpells) != allspells.length ) { mainCompat(); };
});
once('scriptInit', () => { 
	var allspells:Spell[]
	allspells = GetAllSpells(null, true);
	if ( GetIntValue(null, suKeys.iCompatAllSpells) != allspells.length && !GetIntValue(null, suKeys.bCompatInitialized) ) { mainCompat(); };
});
once('update', () => {
	// GivePlayerSpellBook(); // debug option
	bCharging = GetIntValue(null, suKeys.bChargingEnable, 1)
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
				const equippedRight = Form.from(Game.getPlayer()!.getEquippedSpell(1));
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
		if ( bCharging == 1) {
			if (animEvent.includes("spellready") ) { 
				once('update', () => {
					bUpkeepCast = true;
					fChargeTimerL = 0
					fChargeTimerR = 0
					const equippedLeft = Form.from(Game.getPlayer().getEquippedSpell(0));
					const equippedRight = Form.from(Game.getPlayer().getEquippedSpell(1));
					if ( animEvent.includes('mlh') ) { 
						if ( !UpkeepListHas(juKeys.path, suKeys.formUpkeepList, equippedLeft) || FormListHas(null, suKeys.formAppliedList, equippedLeft) ) { bUpkeepCast = false; ; fChargeTimerR = 0; return; }
							on('update', () => { 
								if ( bUpkeepCast ) { 
									const w = async () => {
										await Utility.wait(0.5)
										Debug.notification('Spell is charging!')
										fChargeTimerL++
									}
									w()
									const equippedLeft = Form.from(Game.getPlayer().getEquippedSpell(0));
									Spellduration = SetDuration( fChargeTimerL, equippedLeft);
									if ( (fChargeTimerL / 60) > 300 ) {bUpkeepCast = false; fChargeTimerL = 0; }
								}
							})
					}
					if ( animEvent.includes('mrh') ) {
						if ( !UpkeepListHas(juKeys.path, suKeys.formUpkeepList, equippedRight) || FormListHas(null, suKeys.formAppliedList, equippedRight) ) { bUpkeepCast = false; fChargeTimerR = 0; return; }
						on('update', () => { 
							if ( bUpkeepCast ) { 
								const w = async () => {
									await Utility.wait(0.5)
									Debug.notification('Spell is charging!')
									fChargeTimerR++
								}
								w()
								const equippedRight = Form.from(Game.getPlayer().getEquippedSpell(1));
								Spellduration = SetDuration( fChargeTimerR, equippedRight);
								if ( (fChargeTimerR / 60) > 300 ) {bUpkeepCast = false; fChargeTimerR = 0; }
							}	
						})
					}
				})
			}
			if (animEvent.includes("spellrelease") || animEvent.includes('equipped_event') || animEvent.includes('unequip') ) { bUpkeepCast = false; fChargeTimerL = 0;fChargeTimerR = 0; }
			if (animEvent.includes("spellrelease") ) { 
				once('update', () => {
					let left = Form.from(Game.getPlayer().getEquippedSpell(0)); 
					let right = Form.from(Game.getPlayer().getEquippedSpell(1));
					if ( animEvent.includes('mrh') ) {if (!isInWrongLists(right)) {MessageDurationResult(Spellduration)}}
					if ( animEvent.includes('mlh') ) {if ( !isInWrongLists(left)) {MessageDurationResult(Spellduration)}} 
				})
			}
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
	// equation ( charge_time is seconds spell needs to be charged to reach max spell duration )
	// 				 {	6.4e-4 * (x+20)^2	0 <= x <= 100
	// charge_time = |	
	// 				 {	10					x >= 100
	let User_Pref_Solution = GetIntValue(null, suKeys.iChargeCostSolution, 20)
	let User_Pref_Upper_Bound = GetIntValue(null, suKeys.iChargeDurationUpperBound, 10)
	let User_Pref_Cost_Asymptote = GetIntValue(null, suKeys.iChargeCostAsymptote, 100)

	const fCost = Spell.from(spell).getEffectiveMagickaCost(pl());
	let charge_time = 0
	let solution = User_Pref_Solution // solution to the first part of the step function, this 'fCost + 40**2' is of course -40. A spell costing 40 or below has to charge
	let upper_step = User_Pref_Upper_Bound

	if ( fCost >= 0 && fCost < User_Pref_Cost_Asymptote ) { charge_time = 6.4e-4 * ((fCost - solution)**2) } 
	if ( fCost <= solution || upper_step == 0 ) { charge_time = 0; return charge_time } // first step function to bound system to constant min y i.e. less than your min cost charge_time = 0
	if ( fCost >= User_Pref_Cost_Asymptote ) { charge_time = upper_step;} // the max any spell should charge is 10 seconds; second step function to bound the system to some constant y
	return Math.ceil(charge_time)
}

const Duration_V_ChargeTime = function (charge_timer: number, spell: Form) {
	// equation
	// duration is in minutes, and is converted to seconds
	// duration = (108)*charge_time + 1		0 <= charge_time <= 5 minutes
	// duration = 10						charge_time >= 5 minutes
	// input charge_timer ( in seconds) should be the charge timer in the loop, NOT the calculated number from the equation ChargeTime_V_Cost_Equation
	let User_Pref_Max_Dur = GetIntValue(null, suKeys.iChargeMaxDuration, 600) * 60 // mult. by 60 to convert minutes to seconds
	let User_Pref_Upper_Bound = GetIntValue(null, suKeys.iChargeDurationUpperBound, 10)
	let slope = (User_Pref_Max_Dur - 60) / User_Pref_Upper_Bound

	let charge_calculated = ChargeTime_V_Cost_Equation(spell)
	charge_timer /= 60 // divide by 60 as the timer increments 60 times a second
	if ( charge_timer >= charge_calculated ){ return User_Pref_Max_Dur }
	
	const duration =  ((slope)*charge_timer + 60)
	if ( duration < User_Pref_Max_Dur ) { return Math.round(duration) }
	if ( duration >= User_Pref_Max_Dur ) { return User_Pref_Max_Dur }
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
	const formlistApplied = FormList.from(Game.getFormFromFile(0x001D63, "Lorica Redone.esp"))
	printConsole(formlistApplied?.hasForm(castspell))
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
		const formlistApplied = FormList.from(Game.getFormFromFile(0x001D63, "Lorica Redone.esp"))
		FormListRemove(null, suKeys.formAppliedList, spell!, false) ;// remove form from applied spells list
		formlistApplied.removeAddedForm(spell!);
		pl().dispelSpell(Spell.from(spell));
	}
	
	// printConsole("ToggleSpell:: running")
	option = option.toLowerCase()

	const spellCum =  Spell.from(Game.getFormFromFile(0x1A33, "Lorica Redone.esp")) // the spell responsible for the Cumulative penalty
	const spellUpkeep =  Spell.from(Game.getFormFromFile(0x1c40, "Lorica Redone.esp")) // the spell responsible for the Total Upkeep penalty
	
	const formlistApplied = FormList.from(Game.getFormFromFile(0x001D63, "Lorica Redone.esp"))

	const spellstring = IntToString(spell?.getFormID()!, true) // exclamation mark assures compiler that variable will be there
	let fMag = GetFloatValue(null, spellstring, 0);
	let iCum = Math.floor(fMag * (GetFloatValue(null, suKeys.fCumFraction, 0.20))); // get the cumulative increase from the argument spell, rounded down
	// remove upkeep and cumulative spells for adjustment
	pl()!.removeSpell(spellCum);
	pl()!.removeSpell(spellUpkeep);
	// get currently equipped spells to check for dual-cast
	const equippedLeft = Form.from( Game.getPlayer()!.getEquippedSpell(0));
	const equippedRight = Form.from(Game.getPlayer()!.getEquippedSpell(1));
	const sDualCast = "LoricaRedone" + equippedRight!.getName() + "DualCast";
	if (option.includes("on")){
		FormListAdd(null, suKeys.formAppliedList, spell!, true); // add form to list of applied spells
		// formlistApplied!.addForm(spell!);
		try {
			
			if (equippedRight!.getFormID() == equippedLeft!.getFormID() && GetIntValue(null, sDualCast, 0) == 1){
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
		if ( iCumTotal > 0 ){ iCum *= -1; };
		if ( iUpkeepTotal > 0 ){ fMag *= -1; };
		// a last resort if-block to make sure nothing weird happens
		if ( iCumTotal - iCum < iCumTotal || iUpkeepTotal - fMag < iUpkeepTotal ){ fMag = 0; iCum = 0; };
	};
	if (option == "reset"){ fMag = 0; iCum = 0; };
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


