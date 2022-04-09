import { on, printConsole, Form, Game } from  "@skyrim-platform/skyrim-platform";
import { FormListHas } from  "@skyrim-platform/papyrus-util/JsonUtil";
import { FormListCount, FormListGet } from   "@skyrim-platform/papyrus-util/StorageUtil";
import { juKeys, suKeys } from "./YM_Lorica_Shared";
import { ToggleSpell } from "./LoricaRedone";
import { SetCosts } from "./YM_Lorica_Compat";



export function DispelSpells(option: string = '') {
	for ( let i = 0; i < FormListCount(null, suKeys.formAppliedList); i++ ) { 
		const F = FormListGet(null, suKeys.formAppliedList, i);
		if ( FormListHas(juKeys.path, suKeys.formExclusionList, F) && option.toLowerCase() == 'exclusive') { continue;}
		ToggleSpell("off", F)
	}
};

export let mainUtilitySpells = () => {
	let i = 0
	let flag = false
	on('effectStart', (event) => { 
		printConsole('utility.effectstart')
		const mgefDispel = Game.getFormFromFile(0x181A, "Lorica Redone.esp")?.getFormID();
		// -----------------DISPEL--------------------------------------------------------------
		if ( event.effect.getFormID() == mgefDispel ) { flag = true; DispelSpells('exclusive'); }
		if ( event.effect.getFormID() == mgefDispel && i < 300 && i > 0 ) { i = 0; flag = false; DispelSpells("ALL"); };
		// -------DISPEL TIMER-----------------------------------
		on('update', () => {
			printConsole('utility.effectstart.update')
			if ( flag ) { i++; };
			if ( i > 300 ) { i = 0; flag = false; };
		});
		// ------------when 'Add Spell' is triggered-----------------------------------------
		const mgefAddspell = Game.getFormFromFile(0x001822, "Lorica Redone.esp")?.getFormID();
		if ( event.effect.getFormID() == mgefAddspell ) { 
			const left = Form.from(Game.getPlayer()?.getEquippedSpell(0)) 
			const right = Form.from(Game.getPlayer()?.getEquippedSpell(1))
			if ( !left || !right ){ return; };
			SetCosts("single", left);
			SetCosts("single", right);
			// printConsole("mainAddSpellspell:: it worked"); 
		};
	});
	
};


