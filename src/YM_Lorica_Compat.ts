import { Actor, on, printConsole, Form, Game, Spell, Debug, once, FormList, Keyword, MagicEffect, PapyrusObject } from  "skyrimPlatform";
import { AddMagicEffectToSpell, GetEffectArchetypeAsInt, GetAllSpells, RemoveMagicEffectFromSpell, GivePlayerSpellBook, RemoveEffectItemFromSpell } from  "@skyrim-platform/po3-papyrus-extender/PO3_SKSEFunctions";
import { pl, juKeys, suKeys, FormToString } from "./YM_Lorica_Shared"
import { FormListAdd, FormListCount, Save, FormListGet, FormListRemove, FormListHas, FormListToArray as UpkeepArray, IntListAdd, IntListToArray } from  "@skyrim-platform/papyrus-util/JsonUtil";
import { debug_GetIntKey, GetFloatValue, GetIntValue, SetFloatValue, SetIntValue } from "@skyrim-platform/papyrus-util/StorageUtil";
import { Utility } from "@skyrim-platform/skyrim-platform";
import { debug } from "console";
import { CreateWidgets, DestroyLoricaTexts } from "./LoricaRedone";
import { DispelSpells } from "./YM_Lorica_UtilitySpells";

// this is basically our default init stuff
export let mainCompat = () => {
	// --------------------------COMPATABILITY SECTION-------------------------------------------
	once('update', () => {
		// if ( GetIntValue(null, suKeys.bCompatInitialized, 0) == 0 ) {
			const formlistUpkeep = FormList.from(Game.getFormFromFile(0xD62, "Lorica Redone.esp"))
			Game.setGameSettingFloat("fMagicLesserPowerCooldownTimer", 0.01); // make lesser powers spammable, to enable spamming the dispel power
			// if ( !formlistUpkeep ) { return; };

			// check if the AutoCompat setting is enabled before proceeding; if disabled, all spells need to be manually added
			if (GetIntValue(null, suKeys.bAutoCompatibility, 1) == 0) { 
				var allspells:Spell[]
				allspells = GetAllSpells(null, true); // GetAllSpells(Keyword[] akKeywords = None, bool abIsPlayable = false)
				SetIntValue(null, suKeys.iCompatAllSpells, allspells.length)
				formlistUpkeep?.revert();
				// -----------------Add all appropriate spells to Lorica----------------------------------------------
				for ( let i = 0; i < allspells.length; i++ ) {
					const formSpell = Form.from(allspells[i]);
					
					if ( !FormListHas(juKeys.path, suKeys.formBlackList, formSpell) ) {
						if ( isRightSpellType(formSpell!) ) {
							IntListAdd(juKeys.path, suKeys.formUpkeepList, formSpell?.getFormID(), false)
							FormListAdd(juKeys.path, suKeys.formUpkeepList, formSpell, false);
							// formlistUpkeep?.addForm(formSpell);
						};
					};
				};
			}
			
			SetIntValue(null, suKeys.bChargingEnable, 1)
			SetIntValue(null, suKeys.iChargeCostAsymptote, 100)
			SetIntValue(null, suKeys.iChargeCostSolution, 20)
			SetIntValue(null, suKeys.iChargeDurationUpperBound, 10)
			SetIntValue(null, suKeys.iChargeMaxDuration, 10)

			Save(juKeys.path)
			
			UpdateAllSpells()
			SetIntValue(null, suKeys.bCompatInitialized, 1)
			printConsole("Lorica Redone started");
	}); 
}

export function UpdateAllSpells() { SetCosts('all'); CleanUp() }

function CleanUp(){
	let allspells = UpkeepArray(juKeys.path, suKeys.formUpkeepList)
	const isInBlacklist = function (spell: Form ) { if ( FormListHas(juKeys.path, suKeys.formBlackList, spell) ) { return true }}
	for ( let i = 0; i < allspells.length; i++ ) {
		let f = allspells[i]
		if ( isInBlacklist(f) ) { FormListRemove(juKeys.path, suKeys.formUpkeepList, f, true); RemoveDescription(f); };
	}
}

const isRightSpellType = (akForm: Form): boolean => {
	/* 
	BoundWeapon    = 17
	SummonCreature = 18
	Reanimate      = 22

	Casting Types:
	Constant = 0
	FF = 1
	Conc = 2

	Delivery Type:
	Self = 0
	Contact = 1
	Aimed = 2
	Target Actor = 3
	Target Location = 4
	*/
	const Archetype = (akForm: Form): number => { const E = Spell.from(akForm)!.getNthEffectMagicEffect(0); return GetEffectArchetypeAsInt(E) }
	const Duration = (akForm: Form): number => { const E = Spell.from(akForm)!.getNthEffectMagicEffect(0); return  Spell.from(akForm)!.getNthEffectDuration(0) }
	
	const Effect = Spell.from(akForm)!.getNthEffectMagicEffect(0);
	const iDeliveryType = Effect!.getDeliveryType();
	const iCastType = Effect!.getCastingType();
	const name: string = Effect!.getName()
	 
/* only include spells that target 'self' and are 'fire and forget'; if they are 'fire and forget' and 'aimed,' only include 'conjuration' spells
	=> FF and Self Spells;	FF and Aimed spells and Renaimate spells; FF and Target Location and Summon spells			
*/
	if ( name.toLowerCase().includes('npc')) {return false;}
	if ( 
		   iCastType == 1 && iDeliveryType == 0 && Duration(akForm) > 1
		|| iCastType == 1 && iDeliveryType == 2 && Archetype(akForm) == 22 
		|| iCastType == 1 && iDeliveryType == 4 && Archetype(akForm) == 18 
		) 
		{ return true } 
	else { return false } 
 };

// main function to incorporate spells into lorica
export function SetCosts(option: string, akspell?: Form) {
	// if ( !akspell ) { Debug.notification("something went wrong"); return; }
	const keywordRitual = Keyword.from(Game.getFormEx(0x806e1))
	let flag: boolean = false
	once('update', () => {
		if (GetIntValue(null, suKeys.bModOn, 1) == 0) {flag = true}
	})
	if (flag) {return 'Lorica Redone is disabled'}
	const main = function ( spell: Form ) {
		if ( !spell ) { return; };
		let iMag = 0;
		const sSpell = FormToString(spell);
		const fCost = Spell.from(spell)!.getEffectiveMagickaCost(pl());
		
		if ( spell.hasKeyword(keywordRitual) ) { iMag =  fCost * GetFloatValue(null, suKeys.fRitualMult, 0.5); }
		else { 
			iMag = fCost * GetFloatValue(null, suKeys.fCostMult, 0.5);
			// printConsole("SETCOSTS:: GetFloatValue(null, suKeys.fCostMult, 0.5) => " + GetFloatValue(null, suKeys.fCostMult, 0.5))
		}
		
		const fMin = GetIntValue(null, suKeys.iDebuffMin, 15);
		
		iMag = Math.floor(iMag)
		if ( iMag < fMin ) { iMag = fMin; }
		// RemoveDescription(spell)
		SetFloatValue(null, sSpell, iMag);
		AddDescription(spell, iMag);
		SaveDuration(spell)
	};
	// const CleanUp = function ( spell: Form ) {  }
	// if ( isInBlacklist(akspell!) ) { }
	if ( option.toLowerCase().includes("all") ) {
		Debug.notification("Adding or reapplying debuffs to spells");
		for ( let i = 0; i < FormListCount(juKeys.path, suKeys.formUpkeepList); i++) {
			const formspell = FormListGet(juKeys.path, suKeys.formUpkeepList, i);
			if ( !formspell || !isRightSpellType(formspell) ) { return; };
			main(formspell);
		};
		Debug.notification("Finished adding or reapplying debuffs to spells");
	};
	if ( option == "single" ) {
		Debug.notification("Adding or reapplying debuffs to spells");
		if ( isRightSpellType(akspell!) ) { main(akspell!); };
		Debug.notification("Finished adding or reapplying debuffs to spells");
	};
	
	// remove null entries from spell lists
	FormListRemove(juKeys.path, suKeys.formUpkeepList, null, true);
	FormListRemove(juKeys.path, suKeys.formBlackList, null, true);
	FormListRemove(juKeys.path, suKeys.formExclusionList, null, true);
	Save(juKeys.path);
};

// add custom dummy magic effect to spells, with descriptions detailing debuff cost for each spell
function AddDescription(spell: Form, iMag: number) {
	RemoveDescription(spell)

	// dummy mgef's to hold custom description
	const dummySelf = MagicEffect.from(Game.getFormFromFile(0x001C41, "Lorica Redone.esp"));
	const dummyAimed = MagicEffect.from(Game.getFormFromFile(0x001E53, "Lorica Redone.esp"));
	const dummyTargetLocation = MagicEffect.from(Game.getFormFromFile(0x001E54, "Lorica Redone.esp"));
	
	// longest a spell/mgef can last in skyrim; a whole day I believe, in seconds
	const longtime = 84600;
	const S = Spell.from(spell)

	const Effect = S.getNthEffectMagicEffect(0);
	const iDeliveryType = Effect.getDeliveryType();

	
	
	if ( iDeliveryType == 0 ) { AddMagicEffectToSpell(S, dummySelf, iMag, 0, longtime, 0) }; // '0' is target self
	if ( iDeliveryType == 2 ) { AddMagicEffectToSpell(S, dummyAimed, iMag, 0, longtime, 0) }; // '2' is aimed
	if ( iDeliveryType == 4 ) { AddMagicEffectToSpell(S, dummyTargetLocation, iMag, 0, longtime, 0) }; // '4' is target location	
};

function RemoveDescription(akSpell: Form | Spell) {
	const S = Spell.from(akSpell)
	if ( !S ) { printConsole(`RemoveDescription:: Failed => ${akSpell} failed`); return}
	for ( var i = 0; i < S.getNumEffects(); i++ ) { 
		if (  S.getNthEffectMagicEffect(i)?.getName().toLowerCase().includes('sustain spell') )  { 
			// RemoveMagicEffectFromSpell(S, removeeffect, removeMag, 0, removeDur  );
			RemoveEffectItemFromSpell(S, S, i)
			// printConsole(`${S?.getName()} was removed`)
		}};
}

function RemoveAllSpellModifications() {
	for ( let i = 0; i < FormListCount(juKeys.path, suKeys.formUpkeepList); i++) {
		const formspell = FormListGet(juKeys.path, suKeys.formUpkeepList, i);
		if ( !formspell || !isRightSpellType(formspell) ) { return; };
		RemoveDescription(formspell)
		RevertDurationMod(formspell)
	};
}
function RemoveLoricaSpellsFromPlayer() {
	once('update', () => {
		const spellCum =  Spell.from(Game.getFormFromFile(0xA33, "Lorica Redone.esp")) // the spell responsible for the Cumulative penalty
		const spellUpkeep =  Spell.from(Game.getFormFromFile(0xc40, "Lorica Redone.esp")) // the spell responsible for the Total Upkeep penalty
		const spellDispel = Game.getFormFromFile(0x81b, "Lorica Redone.esp");
		const spellAddSpell = Game.getFormFromFile(0x821, "Lorica Redone.esp");
		
		const formlistApplied = FormList.from(Game.getFormFromFile(0x001D63, "Lorica Redone.esp"))
	
		pl()!.removeSpell(spellCum);
		pl()!.removeSpell(spellUpkeep);
		pl()!.removeSpell(Spell.from( spellDispel ));
		pl()!.removeSpell(Spell.from( spellAddSpell ));
	
		spellCum.setNthEffectMagnitude(0, 0);
		spellUpkeep.setNthEffectMagnitude(0, 0);
	})
}

export function DisableLorica() {
	DispelSpells('all')
	DestroyLoricaTexts()
	RemoveAllSpellModifications()
	RemoveLoricaSpellsFromPlayer()
	Debug.notification('Lorica Redone Has Been Disabled')
}
export function EnableLorica() {
	const addingspells = async () => {
		await Utility.wait(0.1)
		const spellCum =  Spell.from(Game.getFormFromFile(0xA33, "Lorica Redone.esp")) // the spell responsible for the Cumulative penalty
		const spellUpkeep =  Spell.from(Game.getFormFromFile(0xc40, "Lorica Redone.esp")) // the spell responsible for the Total Upkeep penalty
		const spellDispel = Spell.from( Game.getFormFromFile(0x81b, "Lorica Redone.esp") );
		const spellAddSpell = Spell.from( Game.getFormFromFile(0x821, "Lorica Redone.esp") );
		
		const formlistApplied = FormList.from(Game.getFormFromFile(0x001D63, "Lorica Redone.esp"))
		const player: Actor = pl()
		// check if player already has the spells, i.e. whether lorica is already enabled
		if (player.hasSpell(spellCum) && player.hasSpell(spellUpkeep) && player.hasSpell(spellDispel) && player.hasSpell(spellAddSpell)) {return;}
		player.addSpell(spellCum, false);
		player.addSpell(spellDispel, false);
		player.addSpell(spellUpkeep, false);
		player.addSpell(spellAddSpell, false);
		
	}
	pl()?.dispelAllSpells()
	addingspells();
	UpdateAllSpells()
	CreateWidgets()
}
function SaveDuration(akSpell: Form) {
	if (!akSpell) {return;}
	const dur: number = Spell.from(akSpell)!.getNthEffectDuration(0)
	SetFloatValue(null, `YM.LORICA.${akSpell.getFormID()}.Duration.`, dur )

}
function RevertDurationMod(akSpell: Form) {
	if (!akSpell) {return;}
	const dur: number = GetFloatValue(null, `YM.LORICA.${akSpell.getFormID()}.Duration.`)
	Spell.from(akSpell)?.setNthEffectDuration(0, dur)
}