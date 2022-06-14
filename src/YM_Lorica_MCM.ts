import { once, Form, Game, hooks, printConsole } from  "skyrimPlatform";
import { StringListAdd, GetStringValue, SetIntValue, GetIntValue, StringListToArray, StringListClear, UnsetStringValue, StringListPluck, StringListGet, SetFloatValue, SetStringValue, GetFloatValue } from "@skyrim-platform/papyrus-util/StorageUtil";
import { FormListAdd, FormListRemove, FormListToArray, Save } from  "@skyrim-platform/papyrus-util/JsonUtil";
import { juKeys, suKeys } from "./YM_Lorica_Shared"
import { DisableLorica, EnableLorica, RemoveSpells, UpdateAllSpells } from "./YM_Lorica_Compat";
import {CreateWidgets, DestroyLoricaTexts, fadein} from "./LoricaRedone"
import * as mcm from "@skyrim-platform/mcm-helper/MCM"
import * as sp from 'skyrimPlatform'
import { Utility } from "@skyrim-platform/skyrim-platform";

const modname = 'Lorica Redone'
const ModEvent = (sp as any).ModEvent
const RefreshMCM = function () {
	once('update', () => {
		const handle = ModEvent.Create('YM.LORICA.REFRESH')
		ModEvent.PushString(handle, 'Refresh')
		ModEvent.Send(handle)
	});
}
const SetMenuOptions = function () {
	once('update', () => {
		const handle = ModEvent.Create('YM.LORICA.REFRESH')
		ModEvent.PushString(handle, 'SetMenuOptions')
		ModEvent.Send(handle)
	});
	RefreshMCM()
}

export const SetPapyrusUtilOptions = function () {
	SetIntValue(null, "YM.LORICA.CHARGE.DURATION.MAX", mcm.GetModSettingInt(modname, "iChargeMaxDuration:Charge"))
	SetIntValue(null, "YM.LORICA.CHARGE.DURATION.SOLUTION", mcm.GetModSettingInt(modname, "iChargeCostSolution:Charge"))
	SetIntValue(null, "YM.LORICA.CHARGE.DURATION.UPPERBOUND", mcm.GetModSettingInt(modname, "iChargeTimeMax:Charge"))
	SetIntValue(null, "YM.LORICA.CHARGE.DURATION.ASYMPTOTE", mcm.GetModSettingInt(modname, "iChargeCostMax:Charge"))
	let c = SetIntValue(null, "YM.LORICA.CHARGE.ENABLE", mcm.GetModSettingBool(modname, "bSpellChargingEnable:Charge") ? 1:0)
	let x = SetIntValue(null, "YM.LORICA.CHARGE.WIDGET.X", mcm.GetModSettingInt(modname, "iWidgetX:Charge"))
	let y = SetIntValue(null, "YM.LORICA.CHARGE.WIDGET.Y", mcm.GetModSettingInt(modname, "iWidgetY:Charge"))
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
				"LoricaRedone_MCM_PageSelect", 
				"OnPageSelect"
			);
			player.registerForModEvent(
				"LoricaRedone_Menu_Upkeep_Input_Clear", 
				"OnInputClear"
			);
			player.registerForModEvent(
				"LoricaRedone_Menu_Close_Update", 
				"OnLoricaClose"
			);
			player.registerForModEvent(
				"YM.LORICA.SETTING_CHANGED", 
				"OnSettingChanged"
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
	hooks.sendPapyrusEvent.add( {
			enter(ctx) {
				fadein(0.1)
				FillMCMOptions()
				// wait for the menu to close
				once('menuClose', () => {
					// the reason the conditonals are swapped is because somehow the variables get swapped when casting from MCM Helper's ModSetting to Papyrus as an Int
					SetPapyrusUtilOptions()
					UnsetStringValue(null, "YM.Lorica.Menu.Upkeep.Input")
					UnsetStringValue(null, "YM.Lorica.Menu.Utility.Input")

					if (GetIntValue(null, suKeys.bModOn, 1) == 0) {
						DisableLorica()
						return
					}
					if (GetIntValue(null, suKeys.bModOn, 1) == 1) { EnableLorica() }
					
					if ( GetIntValue(null, suKeys.bMCMflag, 0) == 1 && GetIntValue(null, suKeys.bModOn, 1) == 1) {UpdateAllSpells();}
					SetIntValue(null, suKeys.bMCMflag, 0)
					
				})
			},
		},
		0x14,
		0x14,
		'OnLoricaOpen' || 'OnInputClear'
	);
	// Event for when a page is selected
	hooks.sendPapyrusEvent.add(
	{
		enter(ctx) {
			printConsole(`${ctx.papyrusEventName} has been caught`)
			// FilterMCMOptions(GetStringValue(null, "YM.Lorica.Menu.Upkeep.Input", ''))
			FillMCMOptions()
		},
	},
	0x14,
	0x14,
	'OnPageSelect'
	);
	// Event that fires when one of Lorica's mcm settings changes
	hooks.sendPapyrusEvent.add({
		enter(ctx) {
			printConsole(`${ctx.papyrusEventName} has been caught`)
			once('update', () => {
				const setting = GetStringValue(null, 'YM.LoricaRedone.SETTING_CHANGED')
				printConsole(setting)
				// if (setting.toLowerCase().includes('search') || setting.toLowerCase().includes('list')) {return;}
				var value 
				var e: number | string = 1 
				if ( setting.toLowerCase().includes('list') ) {
					value = mcm.GetModSettingInt(modname, setting) 
					if (value == 0) {return;}
					const mainKey = "YM.Lorica.MCM.Enum."
					// const blacklist_whitelist = function (list: string) {
					// 	let key = ''
					// 	if (list.toLowerCase().includes('white')) {
					// 		list	
					// 	}
					// 	// const selected = StringListPluck(null, )
					// }
					const selected = StringListPluck(null, mainKey + 'Upkeep', value, 'None')
					StringListAdd(null, mainKey + 'Blacklist', selected)
					// const f = Game.getFormEx(GetIntValue(null, selected, -1)) 
					// FormListAdd(juKeys.path, suKeys.formBlackList, f, true)
					// FormListRemove(juKeys.path, suKeys.formUpkeepList, f, true)
					// if (value == 0) { return; }
					// if (value != 0) {value++}
				}
				else if (setting[0] == 'f'){
					value = mcm.GetModSettingFloat(modname, setting) 
					printConsole( SetFloatValue(null, Settings_to_Keys[setting], value) )
				}
				else if (setting[0] == 'b'){
					value = mcm.GetModSettingBool(modname, setting) ? 1:0
					printConsole( SetIntValue(null, Settings_to_Keys[setting], value) )
				}
				else if (setting[0] == 'i'){
					value = mcm.GetModSettingInt(modname, setting) 
					// @ts-ignore
					printConsole( SetIntValue(null, Settings_to_Keys[setting], value) )
				}
				else if (setting[0] == 's'){
					value = mcm.GetModSettingString(modname, setting) 
					// @ts-ignore
					if (setting.toLowerCase().includes('ssearch')){
						FilterMCMOptions(value)
					}
					// SetStringValue(null, Settings_to_Keys[setting], value)
				}
				printConsole(`The changed setting is ${setting} and its new value is ${value}`)
				// @ts-ignore 
				// SetFloatValue(null, Settings_to_Keys[setting], value ) 
				SetIntValue(null, suKeys.bMCMflag, 1)
			});
			SetMenuOptions()
			RefreshMCM()
		},
	},
	0x14,
	0x14,
	'OnSettingChanged'
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
	SetMenuOptions()
	RefreshMCM()
	// printConsole('refreshmenu has been sent')
};

// Function to clear and refill the mcm menu lists according to a filter criteria
function FilterMCMOptions (query: String) {
	if ( !query ) { query = '';};
	// FillMCMOptions()
	const mainKey = "YM.Lorica.MCM.Enum."
	let keys = [ "Upkeep", "Blacklist", "Exclusion" ]
	keys.forEach(key => {
		key = mainKey + key
		let filtered = FilterOptions(StringListToArray(null, key), query)
		filtered.unshift('No Changes')
		StringListClear(null, key)
		filtered.forEach(f => {
			StringListAdd(null, key, f, false)
		})
	})
	SetMenuOptions()
}

function FilterOptions (arr, query) {
	return arr.filter(function(el) {
		return el.toLowerCase().indexOf(query.toLowerCase()) !== -1
	})
}

enum Settings_to_Keys {
	"bAutoCompatibility:Main" = suKeys.bAutoCompatibility,
	"fCostMultiplier:Main" = suKeys.fCostMult,
	"fRitualCostMultiplier:Main" = suKeys.fRitualMult,
	"iExperienceRefreshRate:Main" = suKeys.iExperienceRefreshRate,
	"fExperienceMult:Main" = suKeys.fExperienceMult,
	"iMinCost:Main" = suKeys.iDebuffMin,
	"bSpellChargingEnable:Charge" = suKeys.bChargingEnable,
	"iChargeMaxDuration:Charge" = suKeys.iChargeMaxDuration,
	"iChargeCostSolution:Charge" = suKeys.iChargeCostSolution,
	"iChargeTimeMax:Charge" = suKeys.iChargeMaxDuration,
	"iChargeCostMax:Charge" = suKeys.iChargeCostAsymptote,
	"iWidgetX:Charge" = suKeys.iWidgetX,
	"iWidgetY:Charge" = suKeys.iWidgetY, 
	"bSustainedMagicMode:Optional" = suKeys.bSustainedMagic,
	// "bSearchButton" = suKeys.
	// "sSearch"
	// "bSearchClear"

}
enum Setting_to_List {
	'iSelectedSpellWhitelist:Lists' = 'Upkeep',
	'iSelectedSpellBlacklist:Lists' = 'Blacklist',
	'iSelectedUtilityWhitelist:Lists' = 'Exclusion',
	// 'iSelectedUtilityBlacklist:Lists' = 'Upkeep',
}