import { on, once, printConsole, Form, Game, Message, Actor, ObjectReference, Spell, Debug, Utility, hooks } from  "skyrimPlatform";
import { FormListCount, FormListGet, GetIntValue, SetIntValue, StringListCopy, StringListAdd } from "@skyrim-platform/papyrus-util/StorageUtil";
import { GetDiffString } from "@skyrim-platform/papyrus-util/PapyrusUtil";
import { FormListToArray } from  "@skyrim-platform/papyrus-util/JsonUtil";
import { pl, juKeys, suKeys } from "./YM_Lorica_Shared"
import { SetCosts } from "./YM_Lorica_Compat";
import { SetMenuOptions } from "../../modules/MCMHelper/MCM_ConfigBase"



export let mainMCM = () => {

	on('menuClose', (event) => {
		if ( GetIntValue(null, "YM.Lorica.MCM.MenuFlag", 0) == 0 ) { 
			if ( GetIntValue(null, "YM.Lorica.MCM.Debuff.Update", 0) == 1 ) { 
				once('update', () => {
					const oldupkeep = StringListToArray(null, "YM.Lorica.MCM.Enum.Upkeep")
					FormsToStringNames(FormListToArray(juKeys.path, suKeys.formUpkeepList), "YM.Lorica.MCM.Enum.Upkeep")
					const newupkeep = StringListToArray(null, "YM.Lorica.MCM.Enum.Upkeep")
					// if ( GetDiffString(newupkeep, oldupkeep, true, false).length != 0 ) {
					if ( GetIntValue(null, "YM.Lorica.MCM.Debuff.Update", 0) == 1 ) {
						printConsole("MENUCLOSE:: => UPDATING ");
						SetCosts("all");
						SetIntValue(null, "YM.Lorica.MCM.Debuff.Update", 0);
					};
				});
				
			};	
		};
		
	});
	
	once('update', () => {
		FillMCMOptions();
		SetCosts("all")
	});
}

import { StringListToArray} from "@skyrim-platform/papyrus-util/StorageUtil";

var FormsToStringNames = (forms: Form[], key: string) => {
	const first = "No Changes"
	StringListAdd(null, key, first)
	forms.forEach(form => { 
		if ( !form ) { return; };
		const name: string = form.getName();
		if ( !name ) { return; };
		// names.push(name); // this was our error! an array doesn't like being pushed into another array
		StringListAdd(null, key, name)
	}); 
}

function FillMCMOptions () {
	
	var a: Form[] 
		
	a = FormListToArray(juKeys.path, suKeys.formUpkeepList)
	FormsToStringNames(a, "YM.Lorica.MCM.Enum.Upkeep")
	printConsole(StringListToArray(null, "YM.Lorica.MCM.Enum.Upkeep"))
	// SetMenuOptions("iSelectedSpellWhitelist", main(a))

	
	a = FormListToArray(juKeys.path, suKeys.formBlackList)
	FormsToStringNames(a, "YM.Lorica.MCM.Enum.Blacklist")

	a = FormListToArray(juKeys.path, suKeys.formExclusionList)
	FormsToStringNames(a, "YM.Lorica.MCM.Enum.Exclusion")
};

