import { on, once, printConsole, Form, Game, Input, DxScanCode, browser, hooks, settings, writeLogs } from  "skyrimPlatform";
import { StringListAdd, SetStringValue, GetStringValue, SetIntValue, GetIntValue, StringListCopy, StringListToArray, StringListClear, debug_GetStringListKey } from "@skyrim-platform/papyrus-util/StorageUtil";
import { FormListToArray } from  "@skyrim-platform/papyrus-util/JsonUtil";
import { juKeys, suKeys } from "./YM_Lorica_Shared"
import { UpdateAllSpells } from "./YM_Lorica_Compat";

let focused = false;
let close = false

export let mainMCM = () => {

	 on('menuClose', (event) => { SetIntValue(null, "YM.Lorica.MCM.MenuFlag", 0) }); 
	on('menuOpen', () => {
		if ( GetIntValue(null, "YM.Lorica.MCM.MenuOpenFlag", 0) == 1) { 
			once('update', () => { SetIntValue(null, "YM.Lorica.MCM.MenuOpenFlag", 0) });
		};
	})
	once('update', () => {
		printConsole('mcm.update')
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
				"OnQueuedChange"
			);
		// ListCompile()
	});

	hooks.sendPapyrusEvent.add(
		{
			enter(ctx) {
				printConsole('modevent.onloricaOpen')
				printConsole(`${ctx.papyrusEventName} has been caught`)
				// SetIntValue(null, "YM.Lorica.MCM.MenuOpenFlag", 1)
				FillMCMOptions()
			},
		},
		0x14,
		0x14,
		'OnLoricaOpen'
		);
		hooks.sendPapyrusEvent.add(
			{
				enter(ctx) {
				printConsole('modevent.oninputclear')
				printConsole(`${ctx.papyrusEventName} has been caught`)
				// SetIntValue(null, "YM.Lorica.MCM.MenuOpenFlag", 1)
				FillMCMOptions()
			},
		},
		0x14,
		0x14,
		'OnInputClear'
		);
		hooks.sendPapyrusEvent.add(
			{
				enter(ctx) {
				printConsole('modevent.onqueuedchange')
				printConsole(`${ctx.papyrusEventName} has been caught`)
				once('menuClose', () => {
					UpdateAllSpells()
				})
		 	},
		},
		0x14,
		0x14,
		'OnQueuedChange'
	  );
	//   event for when player inputs in the Upkeep search option; filters the enum menus accordingly
	  hooks.sendPapyrusEvent.add(
		{
			enter(ctx) {
				printConsole('onupkeepinput')
				printConsole(`${ctx.papyrusEventName} has been caught`)
				FilterMCMOptions(GetStringValue(null, "YM.Lorica.Menu.Upkeep.Input", ''))
		 	},
		},
		0x14,
		0x14,
		'OnUpkeepInput'
	  );
}

import { log } from './YM_Lorica_Shared'
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

