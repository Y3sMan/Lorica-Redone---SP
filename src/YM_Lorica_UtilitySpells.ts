import { on, printConsole, Form, Game, Message, Actor, ObjectReference, Spell, Debug, Utility, hooks, once, FormList, Keyword, MagicEffect } from  "@skyrim-platform/skyrim-platform";
import { FormListAdd, Save, FormListRemove, FormListHas } from  "@skyrim-platform/papyrus-util/JsonUtil";
import { GetFloatValue, GetIntValue, SetFloatValue, FormListCount, FormListGet } from   "@skyrim-platform/papyrus-util/StorageUtil";
import { pl, juKeys, suKeys, FormToString } from "./YM_Lorica_Shared";
import { ToggleSpell } from "./LoricaRedone";
import { SetCosts } from "./YM_Lorica_Compat";



export function DispelSpells(option: string) {
	printConsole(`DispelSpells:: FormListCount(null, suKeys.formAppliedList) => ${FormListCount(null, suKeys.formAppliedList)}`)
	for ( let i = 0; i < FormListCount(null, suKeys.formAppliedList); i++ ) { 
		const F = FormListGet(null, suKeys.formAppliedList, i);
		if ( !F ) { return; };
		// if ( !ju.FormListHas(juKeys.path, suKeys.formExclusionList, F) && option.toUpperCase() == "EXCLUDE" || option.toUpperCase() == "ALL" ) { continue; };
		ToggleSpell("off", F)
	};
};

export let mainUtilitySpells = () => {
	let i = 0
	let flag = false
	on('effectStart', (event) => { 
		const mgefDispel = Game.getFormFromFile(0x181A, "Lorica Redone.esp").getFormID();
		if ( event.effect.getFormID() == mgefDispel ) { 
			
			
			flag = true; 
			once('update', () => {
				if ( flag ) { i++; DispelSpells("EXCLUDE"); };
				if ( i > 300 ) { i = 0; flag = false; };
			});
		}
		if ( event.effect.getFormID() == mgefDispel && i < 300 && i > 0 ) { 
			
			// DispelSpells("ALL"); i = 0; flag = false; 
		
		};
		
		// when 'Add Spell' is triggered
		const mgefAddspell = Game.getFormFromFile(0x001822, "Lorica Redone.esp").getFormID();
		if ( event.effect.getFormID() == mgefAddspell ) { 
			const left = Form.from(Game.getPlayer().getEquippedSpell(0));
			const right = Form.from(Game.getPlayer().getEquippedSpell(1));
			SetCosts("single", left);
			SetCosts("single", right);
			printConsole("mainAddSpellspell:: it worked"); 
		
		};
	});
};


