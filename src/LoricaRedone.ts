import { on, printConsole, Form, Game, Spell, Utility, hooks, once, FormList, browser, destroyAllTexts} from  "skyrimPlatform"
import { SetIntValue, GetIntValue, FormListHas, GetFloatValue, FormListAdd, UnsetIntValue, AdjustIntValue, FormListCount, FormListRemove, FormListGet } from  "@skyrim-platform/papyrus-util/StorageUtil";
import { FormListHas as UpkeepListHas } from  "@skyrim-platform/papyrus-util/JsonUtil";
import { IntToString, HasActiveSpell, GetAllSpells } from  "@skyrim-platform/po3-papyrus-extender/PO3_SKSEFunctions";
import { pl, juKeys, suKeys, UIUpdateDebuffMeter } from "./YM_Lorica_Shared"
import { mainCompat } from "./YM_Lorica_Compat"
import { mainUtilitySpells } from "./YM_Lorica_UtilitySpells"
import { mainMCM, SetPapyrusUtilOptions } from "./YM_Lorica_MCM"
import * as wt from "./spTextUtils"

mainMCM();
mainUtilitySpells();
let bCharging = 1
let modname = "LoricaRedone"
// -------------------------------TEXTS--------------------------------------------------------------
// ------Widget Variables--------------------
browser.setVisible(true)
// let x_widget: number = 1000
// let y_widget: number = 1000
const colors = {
	'white': [1,1,1,1],
	'blue': [0, 0.5, 1, 1]
}
let left_widget: wt.spText
let right_widget: wt.spText
// ----------functions ---------------------
export function CreateWidgets() {
	SetPapyrusUtilOptions()
	let x_widget = GetIntValue(null, "YM.LORICA.CHARGE.WIDGET.X", 1000)
	let y_widget = GetIntValue(null, "YM.LORICA.CHARGE.WIDGET.Y", 1000)
	if ( GetIntValue(null, suKeys.bChargingEnable, 1) == 0) {return;}
	// if (left_widget || right_widget ) {return;}
	bCharging = 1
	left_widget = new wt.spText(x_widget, y_widget, 'Left Charge', colors['blue'], undefined, modname)
	right_widget = new wt.spText(x_widget * 2, y_widget, 'Right Charge', colors['blue'], undefined, modname)
}
export const DestroyLoricaTexts = function () {
	bCharging = 0
	wt.spText.destroyAllModTexts(modname)
}
export const fadeout = async () => {
	if ( GetIntValue(null, suKeys.bChargingEnable, 1) == 0) {return;}
	await Utility.wait(3.0);
	left_widget.setAlpha(0)
	right_widget.setAlpha(0)
}
export const fadein = async (time: number) => {
	if ( GetIntValue(null, suKeys.bChargingEnable, 1) == 0) {return;}
	await Utility.wait(time);
	left_widget.setAlpha(1)
	right_widget.setAlpha(1)
}
// ---------------------------------COMPATIBILITY SECTION---------------------------------------------
const spellCompatCheck = function () {
	var allspells: Spell[]
	allspells = GetAllSpells(null, true);
	if ( GetIntValue(null, suKeys.iCompatAllSpells) != allspells.length && !GetIntValue(null, suKeys.bCompatInitialized) ) { mainCompat(); };
}

on('loadGame', () => { printConsole('loadgame') ;spellCompatCheck() });
once('skyrimLoaded', () => { 
	printConsole('skyrimLoaded') 
	// let charge_indicator:number = createText(100, 100, 'test', [0,0.5,1,1])
	// SetIntValue(null, '.LoricaRedone.widgets.charging.id', charge_indicator)

});
once('scriptInit', () => { spellCompatCheck() });
once('update', () => {
	// x_widget = GetIntValue(null, "YM.LORICA.CHARGE.WIDGET.X", 1000)
	// y_widget = GetIntValue(null, "YM.LORICA.CHARGE.WIDGET.Y", 1000)
	// if ( !GetIntValue(null, suKeys.bCompatInitialized) ) { return;}
	// GivePlayerSpellBook(); // debug option
	mainCompat()
	// spellCompatCheck()
	destroyAllTexts()
	CreateWidgets()
	DestroyLoricaTexts()
	CreateWidgets()
	fadeout()
	bCharging = GetIntValue(null, suKeys.bChargingEnable, 1)
})
on('menuOpen', () => {
	fadeout()
});
// --------------------------------DUAL CAST CHECK----------------------------
// hook into dual cast magic animation to doubly check if spell was dual cast [check]
// getEquippedSpell(0) == left hand
// getEquippedSpell(1) == right hand
let bDualCast = false
let bUpkeepCastL = false
let bUpkeepCastR = false
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
		const WidgetHandSet = function (widget: wt.spText, duration: number) {
			let max = GetIntValue(null, suKeys.iChargeMaxDuration, 600) * 60 / 100
			bCharging = GetIntValue(null, suKeys.bChargingEnable, 1)
			if (bCharging == 0) {return;}
			// widget.setColor([ 1,1, 1, 1 ])
			widget.setAlpha(1)
			widget.setText(`${Math.round(duration / max)}%`)
		}
		if (bCharging == 0) {return;}
		if (animEvent.includes("spellready") ) { 
			once('update', () => {
				bCharging = GetIntValue(null, suKeys.bChargingEnable, 1)
				if (bCharging == 0) {return;}
				const equippedLeft = Form.from(Game.getPlayer().getEquippedSpell(0));
				const equippedRight = Form.from(Game.getPlayer().getEquippedSpell(1));
				if ( animEvent.includes('mlh') ) { 
					fChargeTimerL = 0
					bUpkeepCastL = true;
					if ( isInWrongLists(equippedLeft) ) { bUpkeepCastL = false; ; fChargeTimerL = 0; return; }
					on('update', () => { 
						if ( bUpkeepCastL ) { 
							const w = async (duration: number) => {
								await Utility.wait(0.5)
								// Debug.notification('Spell is charging!')
								fChargeTimerL++
							}
							const equippedLeft = Form.from(Game.getPlayer().getEquippedSpell(0));
							Spellduration = SetDuration( fChargeTimerL, equippedLeft);
							WidgetHandSet(left_widget, Spellduration)
							w(Spellduration)
							if ( (fChargeTimerL / 60) > 300 ) {bUpkeepCastL = false; fChargeTimerL = 0; }
						}
					})
				}
				if ( animEvent.includes('mrh') ) {
					fChargeTimerR = 0
					bUpkeepCastR = true;
					if ( isInWrongLists(equippedRight) ) { bUpkeepCastR = false; fChargeTimerR = 0; return; }
					on('update', () => { 
						if ( bUpkeepCastR ) { 
							const w = async (duration: number) => {
								await Utility.wait(0.5)
								// Debug.notification('Spell is charging!')
								fChargeTimerR++
							}
							const equippedRight = Form.from(Game.getPlayer().getEquippedSpell(1));
							Spellduration = SetDuration( fChargeTimerR, equippedRight);
							WidgetHandSet(right_widget, Spellduration)
							w(Spellduration)
							if ( (fChargeTimerR / 60) > 300 ) {bUpkeepCastR = false; fChargeTimerR = 0; }
						}	
					})
				}
			})
		}
		if (animEvent.includes("spellrelease") || animEvent.includes('equipped_event') || animEvent.includes('unequip') ) { 
			bUpkeepCastL = false; bUpkeepCastR = false; fChargeTimerL = 0;fChargeTimerR = 0; 
			once('update', () =>{
				bCharging = GetIntValue(null, suKeys.bChargingEnable, 1)
				if (bCharging == 0) {return;}
				const w = async () => {
					await Utility.wait(2.0)
					// let lwidget = GetIntValue(null, '.LoricaRedone.widgets.charging.left.id')
					// let rwidget = GetIntValue(null, '.LoricaRedone.widgets.charging.right.id')
					let color: number[] = right_widget.getColor()
					color[3] = 0
					right_widget.setColor(color)
					left_widget.setColor(color)
				}
				w()
			});
		}
	},
	leave(ctx) {}
},  0x14, 0x14); // filter out non-player events

const ChargeTime_V_Cost_Equation = function (spell: Form) {
	// equation ( charge_time is seconds spell needs to be charged to reach max spell duration in minutes )
	// 				 {	(1/9)*iChargeCostSolution - ichargeCostSolution		0 <= x <= iChargeCostAsymptote
	// charge_time = |	
	// 				 {	iChargeDurationUpperBound				x >= iChargeCostAsymptote
	let User_Pref_Solution = GetIntValue(null, suKeys.iChargeCostSolution, 20)
	let User_Pref_Upper_Bound = GetIntValue(null, suKeys.iChargeDurationUpperBound, 10)
	let User_Pref_Cost_Asymptote = GetIntValue(null, suKeys.iChargeCostAsymptote, 100)

	const fCost = Spell.from(spell).getEffectiveMagickaCost(pl());
	let charge_time = 0
	let solution = User_Pref_Solution // solution to the first part of the step function, this 'fCost + 40**2' is of course -40. A spell costing 40 or below has to charge
	let upper_step = User_Pref_Upper_Bound
	let slope = ( User_Pref_Upper_Bound ) / ( User_Pref_Cost_Asymptote - solution)

	if ( fCost >= 0 && fCost < User_Pref_Cost_Asymptote ) { charge_time = slope * fCost - solution } 
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
	let slope = (User_Pref_Max_Dur - 60) / User_Pref_Upper_Bound // subtract by 60 since the lowest duration allowed is 60 seconds (one minute)

	let charge_calculated = ChargeTime_V_Cost_Equation(spell)
	charge_timer /= 60 // divide by 60 as the timer increments 60 times a second
	if ( charge_timer >= charge_calculated ){ return User_Pref_Max_Dur }
	
	const duration =  ((slope)*charge_timer + 60) // y-intercept of this equation is 60 seconds (one minute), the min
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
	// printConsole(formlistApplied?.hasForm(castspell))
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
	let e = 'effectFinish started:: '
	// printConsole(e)
	if (event.caster.getBaseObject() != pl()?.getBaseObject()) {
		return;
	}
	// printConsole(e + 'passed first condition')
	for (let i = 0; i < FormListCount(null, suKeys.formAppliedList); i++) {
		const F = FormListGet(null, suKeys.formAppliedList, i)
		const S = Spell.from(F)
		const E = S?.getMagicEffects()
		if ( !E?.includes(event.effect)) {return;}
		// printConsole(e + 'passed second condition')
		if (!HasActiveSpell(pl(), S)) {
			ToggleSpell("off", F);
			UIUpdateDebuffMeter()
		};
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
	var sDualCast: string = ''
	if ( equippedRight ) { sDualCast = "LoricaRedone" + equippedRight?.getName() + "DualCast"; }
	else if ( equippedLeft ) { sDualCast = "LoricaRedone" + equippedLeft?.getName() + "DualCast"; }
	if (option.includes("on")){
		FormListAdd(null, suKeys.formAppliedList, spell!, true); // add form to list of applied spells
		formlistApplied!.addForm(spell!);
		try {
			
			if (equippedRight!.getFormID() == equippedLeft!.getFormID() && GetIntValue(null, sDualCast!, 0) == 1){
				// printConsole('ToggleSpell: dualcast check => Good!');
				fMag *= 2
				iCum *= 2
				SetIntValue(null, sDualCast!, 1)
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


