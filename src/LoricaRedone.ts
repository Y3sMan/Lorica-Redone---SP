import { on, printConsole, Form, Game, Message, Actor, ObjectReference, Spell, Debug, Utility, hooks, once, FormList, Keyword, MagicEffect } from  "skyrimPlatform";
import { SetIntValue, GetIntValue, FormListHas, GetFloatValue, FormListAdd, UnsetIntValue, AdjustIntValue, FormListCount, FormListRemove, FormListGet } from  "@skyrim-platform/papyrus-util/StorageUtil";
import { FormListHas as UpkeepListHas } from  "@skyrim-platform/papyrus-util/JsonUtil";
import { IntToString, HasActiveSpell, GetAllSpells, GivePlayerSpellBook } from  "@skyrim-platform/po3-papyrus-extender/PO3_SKSEFunctions";
import { pl, juKeys, suKeys, UIUpdateDebuffMeter } from "./YM_Lorica_Shared"
import { mainCompat } from "./YM_Lorica_Compat"
import { mainUtilitySpells } from "./YM_Lorica_UtilitySpells"
import { mainMCM } from "./YM_Lorica_MCM"

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
let bDualCast = false
hooks.sendAnimationEvent.add({
	enter(ctx) {
		if (ctx.animEventName.toUpperCase().includes("DUALMAGIC")) { bDualCast = true; }
		else { bDualCast = false; }
		once('update', () => {
			const equippedRight = Form.from(Game.getPlayer().getEquippedSpell(1));
			if ( !equippedRight ) { return; };
			const sDualCast = "LoricaRedone" + equippedRight.getName() + "DualCast";
			if ( !equippedRight || !sDualCast ) { return; };

			if ( bDualCast ) {
				SetIntValue(null, sDualCast, 1);
				printConsole('sendAnimationEvent:: dual cast check: ' + GetIntValue(null, sDualCast, 0));
			}
			// else { SetIntValue(null, sDualCast, 0); }	
		});
	},
	leave(ctx) {
		
	}
},  0x14, 0x14); // filter out non-player events

//---------------------------MAIN--------------------------------------------
on('spellCast', (event) => {
	printConsole("hello");
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
	
	printConsole("ToggleSpell:: running")
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
				printConsole('ToggleSpell: dualcast check => Good!');
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
	printConsole(` newUpkeep: ${newUpkeep}\n newCum: ${newCum}`)
	
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
		if ( !badded ) { printConsole("failed"); }; 
		
	}
	addingspells();
	
	UIUpdateDebuffMeter();
	printConsole(`ToggleSpell Has => ${FormListHas(null, suKeys.formAppliedList, spell!)}`)
};


