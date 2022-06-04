import { once, Form, Game, hooks } from  "skyrimPlatform";
import { StringListAdd, GetStringValue, SetIntValue, GetIntValue, StringListToArray, StringListClear } from "@skyrim-platform/papyrus-util/StorageUtil";
import { FormListToArray } from  "@skyrim-platform/papyrus-util/JsonUtil";
import { juKeys, suKeys } from "./YM_Lorica_Shared"
import { UpdateAllSpells } from "./YM_Lorica_Compat";
import {CreateWidgets, DestroyLoricaTexts, fadein} from "./LoricaRedone"
import {GetModSettingBool, GetModSettingInt} from "@skyrim-platform/mcm-helper/MCM"

export const SetPapyrusUtilOptions = function () {
	SetIntValue(null, "YM.LORICA.CHARGE.DURATION.MAX", GetModSettingInt('Lorica Redone', "iChargeMaxDuration:Charge"))
	SetIntValue(null, "YM.LORICA.CHARGE.DURATION.SOLUTION", GetModSettingInt('Lorica Redone', "iChargeCostSolution:Charge"))
	SetIntValue(null, "YM.LORICA.CHARGE.DURATION.UPPERBOUND", GetModSettingInt('Lorica Redone', "iChargeTimeMax:Charge"))
	SetIntValue(null, "YM.LORICA.CHARGE.DURATION.ASYMPTOTE", GetModSettingInt('Lorica Redone', "iChargeCostMax:Charge"))
	let c = SetIntValue(null, "YM.LORICA.CHARGE.ENABLE", GetModSettingBool('Lorica Redone', "bSpellChargingEnable:Charge") ? 1:0)
	let x = SetIntValue(null, "YM.LORICA.CHARGE.WIDGET.X", GetModSettingInt('Lorica Redone', "iWidgetX:Charge"))
	let y = SetIntValue(null, "YM.LORICA.CHARGE.WIDGET.Y", GetModSettingInt('Lorica Redone', "iWidgetY:Charge"))
	// printConsole(`SetPapyrusUtilOptions:: => x:: ${x} and y:: ${y}`)
}
export let mainMCM = () => {
	once('update', () => {
		const player = Game.getPlayer();
		if (player) {
			player.registerForModEvent(
				"LoricaRedone_Menu_Open", 
				"OnLoricaOpen"
			);}
			player.registerForModEvent(
				"LoricaRedone_Menu_Upkeep_Input", 
				"OnUpkeepInput"
			);
			player.registerForModEvent(
				"LoricaRedone_Menu_Upkeep_Input_Clear", 
				"OnInputClear"
			);
			player.registerForModEvent(
				"LoricaRedone_Menu_Close_Update", 
				"OnLoricaClose"
			);
			SetPapyrusUtilOptions()
		// ListCompile()
	});
	once('newGame', () => {
		SetPapyrusUtilOptions()
	});
	once('loadGame', () => {
		SetPapyrusUtilOptions()
	});
	// Event for when Lorica's menu opens
	hooks.sendPapyrusEvent.add(
		{
			enter(ctx) {
				fadein(0.1)
				FillMCMOptions()
				// wait for the menu to close
				once('menuClose', () => {
					// const bcharging: number = GetModSettingBool('LoricaRedone',"bSpellChargingEnable:Charge") ? 0 : 1
					// printConsole( SetIntValue(null, suKeys.bChargingEnable, bcharging) )
					// the reason the condiitonals are swapped is because somehow the variables get swapped when casting from MCM Helper's ModSetting to Papyrus as an Int
					SetPapyrusUtilOptions()
					if ( GetIntValue(null, suKeys.bChargingEnable, 1) == 0) {
						// printConsole('Destroying widgets')
						DestroyLoricaTexts()
					}
					if ( GetIntValue(null, suKeys.bChargingEnable, 1) == 1) {
						// printConsole('Creating widgets')
						DestroyLoricaTexts()
						CreateWidgets()	
					}
					if ( GetIntValue(null, "YM.LORICA.MCM.UPDATE", 0) == 1) {UpdateAllSpells();}
					SetIntValue(null, "YM.LORICA.MCM.UPDATE", 0)
					
				})
			},
		},
		0x14,
		0x14,
		'OnLoricaOpen' || 'OnInputClear'
	);
	// Event to handle filtering the menu options
	hooks.sendPapyrusEvent.add(
	{
		enter(ctx) {
			// printConsole(`${ctx.papyrusEventName} has been caught`)
			FilterMCMOptions(GetStringValue(null, "YM.Lorica.Menu.Upkeep.Input", ''))
		},
	},
	0x14,
	0x14,
	'OnUpkeepInput'
	);
}

var FormsToStringNames = (forms: Form[], key: string) => {
	let stringlist: string[] = ['No Changes']
	if (!forms){return;};
	StringListClear(null, key)
	StringListAdd(null, key, 'No Changes')
	forms.forEach(form => {
		if ( !form ){return;};
		let name: string = form.getName();
		if ( !name){return;};
		let id = form.getFormID(); 
		if ( !id ){return;};
		StringListAdd(null, key, name)
		SetIntValue(null, name, id)
		stringlist.push(name);
	});
	return stringlist
};

function FillMCMOptions () {
	
	var a: Form[] 
	
	a = FormListToArray(juKeys.path, suKeys.formUpkeepList)
	let b = FormsToStringNames(a, "YM.Lorica.MCM.Enum.Upkeep")
	
	a = FormListToArray(juKeys.path, suKeys.formBlackList)
	FormsToStringNames(a, "YM.Lorica.MCM.Enum.Blacklist")
	
	a = FormListToArray(juKeys.path, suKeys.formExclusionList)
	FormsToStringNames(a, "YM.Lorica.MCM.Enum.Exclusion")
};

// Function to clear and refill the mcm menu lists according to a filter criteria
function FilterMCMOptions (query: String) {
	if ( !query ) { query = '';};
	// FillMCMOptions()
	let keys = [ "YM.Lorica.MCM.Enum.Upkeep", "YM.Lorica.MCM.Enum.Blacklist", "YM.Lorica.MCM.Enum.Exclusion" ]
	keys.forEach(key => {
		let filtered = FilterOptions(StringListToArray(null, key), query)
		filtered.unshift('No Changes')
		StringListClear(null, key)
		filtered.forEach(f => {
			StringListAdd(null, key, f, false)
		})
	})

}

function FilterOptions (arr, query) {
	return arr.filter(function(el) {
		return el.toLowerCase().indexOf(query.toLowerCase()) !== -1
	})
}

