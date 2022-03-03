import { on, once, printConsole, Form, Game, Input, DxScanCode, browser, hooks, settings, writeLogs } from  "skyrimPlatform";
import { StringListAdd, SetStringValue, GetStringValue, SetIntValue, GetIntValue, StringListCopy, StringListToArray, StringListClear, debug_GetStringListKey } from "@skyrim-platform/papyrus-util/StorageUtil";
import { FormListToArray } from  "@skyrim-platform/papyrus-util/JsonUtil";
import { juKeys, suKeys } from "./YM_Lorica_Shared"
import { UpdateAllSpells } from "./YM_Lorica_Compat";

let focused = false;
let close = false

browser.loadUrl("file:///Data/Platform/UI/lorica-menu.html"); 
export let mainMCM = () => {

	 on('menuClose', (event) => {
		// if ( GetIntValue(null, "YM.Lorica.MCM.MenuFlag", 0) == 0 ) { 
		// 	if ( GetIntValue(null, "YM.Lorica.MCM.Debuff.Update", 0) == 1 ) { 
		// 		once('update', () => {
		// 			const oldupkeep = StringListToArray(null, "YM.Lorica.MCM.Enum.Upkeep")
		// 			FormsToStringNames(FormListToArray(juKeys.path, suKeys.formUpkeepList), "YM.Lorica.MCM.Enum.Upkeep")
		// 			const newupkeep = StringListToArray(null, "YM.Lorica.MCM.Enum.Upkeep")
		// 			// if ( GetDiffString(newupkeep, oldupkeep, true, false).length != 0 ) {
			// 			if ( GetIntValue(null, "YM.Lorica.MCM.Debuff.Update", 0) == 1 ) {
				// 				printConsole("MENUCLOSE:: => UPDATING ");
				// 				SetIntValue(null, "YM.Lorica.MCM.Debuff.Update", 0);
				// 			};
				// 		});
				
				// 	};	
				// };
				
		SetIntValue(null, "YM.Lorica.MCM.MenuFlag", 0)
	}); 
	on('menuOpen', () => {
		if ( GetIntValue(null, "YM.Lorica.MCM.MenuOpenFlag", 0) == 1) { 
			once('update', () => { SetIntValue(null, "YM.Lorica.MCM.MenuOpenFlag", 0) });
		};
	})
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
				"OnQueuedChange"
			);
		// ListCompile()
	});
	on('update', () => {
		// if (Input.isKeyPressed(DxScanCode.Q)){
		// 	Game.forceFirstPerson();
		// 	browser.setFocused(true);
		// 	focused = true
		// 	browser.setVisible(true);
		// 	w();
		// }
		// if (focused && Input.isKeyPressed(DxScanCode.Escape) || close) {
		// 	browser.setFocused(false);
		// 	focused = false
		// 	browser.setVisible(false);
		// 	close = false
			
		// }
		
	});
	hooks.sendPapyrusEvent.add(
		{
			enter(ctx) {
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

// function UpdateLists() {
// 	let list = FormListToArray(juKeys.path, suKeys.formUpkeepList)
// 	let changes = StringListToArray(null, "YM.Lorica.MCM.Changes.Upkeep")
// 	let i = 0
// 	list.forEach(form => {
// 		if ( form.getName() == changes[i]) {
			
// 		}
// 		i++
// 	})
// }

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

function FillMenuOptions () {
	var a: Form[] 
	var options: String[] | undefined

	
	a = FormListToArray(juKeys.path, suKeys.formUpkeepList)
	// settings["example"]["setting_UpkeepWhiteList"] = JSON.stringify(["what the fuck"], undefined, 2)
	
	
	let menu = settings["example"];
	const t = new Date().toLocaleString();
	let msg = t + menu
	writeLogs("LoricaRedone", msg)
	
	// const filename = '../Plugins/example-settings.txt'
	// const filepathSPCM = `Data/Platform/SPCM/${filename.replace('-settings.txt', '.json')}`;
	// let jsonSPCM = JSON.parse(ReadFromFile(filepathSPCM));
	// Debug.trace(JSON.stringify(jsonSPCM), 1)`
	// WriteToFile(filename, menu, false, false)
	// printConsole(menu)
	
};


const FormListToNameList = function ( formlist: Form[] ) {
	let stringlist: String[] = ['No Changes']
	formlist.forEach(form => {
		if ( !form ){return;};
		let name: string = form.getName() + ` - ${form.getFormID()}`;
		if ( !name){return;};
		stringlist.push(name);
	});
	return stringlist
};

const ListCompile = function () {
	const upkeep = FormListToNameList(FormListToArray(juKeys.path, suKeys.formUpkeepList))
	const blacklist = FormListToNameList(FormListToArray(juKeys.path, suKeys.formBlackList))
	const utilitylist = FormListToNameList(FormListToArray(juKeys.path, suKeys.formExclusionList))
	const lists = [upkeep, blacklist]
	for ( var l = 0; l < lists.length; l++ ) {
		let list = lists[l]
		for ( var s = 0; s < list.length; s++) {
			let spell = list[s]
			if (blacklist.includes(spell)) { SetIntValue(null, `Lorica.Upkeep.${spell}`, 1);};}; 
		}
	// const differences_upkeep = upkeep.filter(x => !blacklist.includes(x))
	const differences_utility = upkeep.filter(x => !utilitylist.includes(x))
	
}
const w = async () => {
	await focused
	const list = 'spellList'.toUpperCase()
	let strings: String[] 
	strings = FormListToNameList(FormListToArray(juKeys.path, suKeys.formUpkeepList))
	const uniqueStrings = Array.from(new Set(strings))
	for ( var s = 0; s < strings.length; s++) {
		let spell = uniqueStrings[s];
		let status = 0
		if ( GetIntValue(null, `Lorica.Upkeep.${s}`, 0) == 1 ) {	status = 1 }
		// status is a 1x2 matrix/array to showcase each spell's status, whether it's in [upkeep,blacklist] which is represented as [ 1 0 ] with 1=True and 0=False
		browser.executeJavaScript(`AddSpellOptions('${spell}', ${status})`); 
	}
}
