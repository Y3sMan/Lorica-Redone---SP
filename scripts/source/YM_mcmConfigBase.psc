Scriptname YM_mcmConfigBase extends MCM_ConfigBase

import utility
import StorageUtil
import PapyrusUtil
import PO3_SKSEFunctions
import JsonUtil
import ModEvent

;; -----------------------PROPERTIES AND VARIABLES---------------------------------------------------------

GlobalVariable Property AIX_UpkeepOn Auto

MagicEffect Property togglespellDamageMagickaDummy Auto

Actor Property PlayerREF Auto

FormList Property AIX_UpkeepSpellList Auto ; List of all applicable spells
FormList Property AIX_UpkeepAppliedList Auto ; List of currently applied spells
FormList Property AIX_UpkeepBlacklist Auto
FormList Property AIX_UpkeepCustomList Auto

int property pSelectedSpellWhitelist auto
int property pSelectedSpellBlacklist auto
int property pSelectedUtilityWhitelist auto
int property pSelectedUtilityBlacklist auto
int property pSelectedEditSpellList auto
int property pSelectedEditSpell auto
string property pWhitelistUserInput auto
string property pUtilityUserInput auto


; string property iSelectedSpellWhitelist auto

string ConnectionName = "YM_Lorica_MCM"

bool bUpdateDebuffs = False


quest property YM_Lorica_AddSpells auto

; PapyrusUtil variables
string pfUpkeepSpellList = "Upkeep Spells"
string pfSpellBlacklist = "Spells Blacklisted from Lorica"
string pAppliedSpells = "Spells Currently Applied"
string pCostList = "Individual Upkeep Cost of all Maintained Spells"
string pDebuffMin = "Minimum Debuff Cost"
string pCumulativeFraction = "Number to mult magnitude by"
string pExclusionList = "Spells to exclude from first dispel"
string pfCostMultiplier = "Spell Debuff Cost Multiplier"
string pfRitualCostMultiplier = "Ritual Spell Debuff Cost Multiplier"
string piExperienceRefreshRate = "Experience Refresh Rate"
string pfExperienceMult = "Experience Multiplier"
string pbSustainedMagicMode = "Sustained Magic Mode Toggle"

;JsonUtil Filepaths
string jFilePathSpellList = "../Lorica Redone/SpellList"

string lastInput = ""

;; -----------------------EVENTS---------------------------------------------------------


; function OnOpenMCM()
    ; int handle = ModEvent.Create("Lorica_OnOpenMCM")
    ; if (handle)
        ; ModEvent.Send(handle)
    ; endIf
; EndFunction

; event oninit()
	; RegisterForModEvent("Lorica_OnOpenMCM", "MCMOpen")
; endEvent

; event onplayerloadgame()
	; RegisterForModEvent("Lorica_OnOpenMCM", "MCMOpen")
; endEvent


Event OnPageSelect(string a_page)
	StorageUtil.UnsetStringValue(none, "YM.Lorica.Menu.Upkeep.Input")
	StorageUtil.UnsetStringValue(none, "YM.Lorica.Menu.Utility.Input")
	int handle = ModEvent.Create("LoricaRedone_Menu_Upkeep_Input_Clear")
	if handle
		ModEvent.Send(handle)
	else
	
	endif
	SetMyMenuOptions()
EndEvent

event OnConfigInit()
	; SetModSettingBool("bLoricaOn", "true")
	SetModSettingBool("bAutoCompatibility:Main", GetModSettingBool("bAutoCompatibility:Main"))
	SetModSettingFloat("fCostMultiplier:Main", GetModSettingFloat("fCostMultiplier:Main"))
	SetModSettingFloat("fRitualCostMultiplier:Main", GetModSettingFloat("fRitualCostMultiplier:Main"))
	SetModSettingInt("iExperienceRefreshRate:Main", GetModSettingInt("iExperienceRefreshRate:Main"))
	SetModSettingFloat("fExperienceMult:Main", GetModSettingFloat("fExperienceMult:Main"))
	SetModSettingInt("iMinCost:Main", GetModSettingInt("iMinCost:Main"))
	SetModSettingFloat("fCumMinPenalty:Main", GetModSettingFloat("fCumMinPenalty:Main"))
	SetModSettingBool("bSustainedMagicMode:Optional", GetModSettingBool("bSustainedMagicMode:Optional"))
	lastInput = GetModSettingString("sInputUpkeep:Upkeep")
endEvent

Event OnConfigOpen()
	SetMyMenuOptions()
	; OnOpenMCM()
	; SkyrimPlatformBridge.SendEvent("MenuOpen", ConnectionName)
	int handle = ModEvent.Create("LoricaRedone_Menu_Open")
	if handle
		ModEvent.Send(handle)
	else
	
	endif
EndEvent

Event OnConfigClose()
	if bUpdateDebuffs
		; debug.notification("Recalculating debuffs")
		; JsonUtil.Save(jFilePathSpellList)
		; AIX_UpkeepQuest.SetAllSpellDebuffCosts()
		; SkyrimPlatformBridge.SendEvent("Update Debuffs", ConnectionName)
		; StorageUtil.SetIntValue(none, "YM.Lorica.MCM.Debuff.Update", 1)
		int handle = ModEvent.Create("LoricaRedone_Menu_Close_Update")
		if handle
			ModEvent.Send(handle)
		else
		
		endif
	endif
	bUpdateDebuffs = False
	; StorageUtil.SetIntValue(none, "YM.Lorica.MCM.MenuFlag", 0)
	
EndEvent

Event OnSettingChange(string a_ID)
	if a_ID == "fCostMultiplier:Main"
		StorageUtil.SetFloatValue(none, pfCostMultiplier, GetModSettingFloat("fCostMultiplier:Main"))
		; debug.trace("the mult is " + GetModSettingFloat("fCostMultiplier:Main"))
		bUpdateDebuffs = True
	elseif a_ID == "fRitualCostMultiplier:Main"
		StorageUtil.SetFloatValue(none, pfRitualCostMultiplier, GetModSettingFloat("fRitualCostMultiplier:Main"))
		bUpdateDebuffs = True
	elseif a_ID == "iExperienceRefreshRate:Main"
		StorageUtil.SetIntValue(none, piExperienceRefreshRate, GetModSettingInt("iExperienceRefreshRate:Main"))
		bUpdateDebuffs = True
	elseif a_ID == "fExperienceMult:Main"
		StorageUtil.SetFloatValue(none, pfExperienceMult, GetModSettingFloat("fExperienceMult:Main"))
		bUpdateDebuffs = True
	elseif a_ID == "iMinCost:Main"
		StorageUtil.SetintValue(none, pDebuffMin, GetModSettingInt("iMinCost:Main"))
		bUpdateDebuffs = True
	elseif a_ID == "fCumMinPenalty:Main"
		StorageUtil.SetFloatValue(none, pCumulativeFraction, GetModSettingFloat("fCumMinPenalty:Main"))
		bUpdateDebuffs = True
	elseif a_ID == "iSelectedSpellWhitelist"
		EnumOptionSelect("whitelist", pSelectedSpellWhitelist)
	elseif a_ID == "iSelectedSpellBlacklist"
		EnumOptionSelect("blacklist", pSelectedSpellBlacklist)
	elseif a_ID == "iSelectedUtilityWhitelist"
		EnumOptionSelect("utilitylist", pSelectedUtilityWhitelist)
	elseif a_ID == "iSelectedUtilityBlacklist"
		EnumOptionSelect("upkeeplist", pSelectedUtilityBlacklist)
	elseif a_ID == "bLoricaOn"
		if AIX_UpkeepOn.GetValue() <= 0
			YM_Lorica_AddSpells.Stop()
		else
			YM_Lorica_AddSpells.Start()
		endif
	elseif a_ID == "bSustainedMagicMode:Optional"
		; SustainedMagicModeToggle()
	elseif a_ID == "iSelectedEditSpellList"
		EnumOptionSelect("editlist", pSelectedEditSpellList)
	elseif a_ID == "iSelectedEditSpellList"
		; string[] saSpell = utility.CreateStringArray(2)
		; saSpell[0] = AIX_UpkeepQuest.FormToString(JsonUtil.FormListGet(jFilePathSpellList, pSelectedEditSpellList))
		; saSpell[1] = "Cost_Mult"
		; string sSpellandMult = PapyrusUtil.StringJoin(saSpell, ".")
		; JsonUtil.SetFloatValue(jFilePathSpellList, sSpellandMult, 
	elseif a_ID == "bSearchButton:Upkeep"
		SetModSettingBool("bSearchButton:Upkeep", false)
		StorageUtil.SetStringValue(none, "YM.Lorica.Menu.Upkeep.Input", pWhitelistUserInput)
		int handle = ModEvent.Create("LoricaRedone_Menu_Upkeep_Input")
		if handle
			ModEvent.Send(handle)
		else
		
		endif
		SetMyMenuOptions()
	elseif a_ID == "bSearchClear:Upkeep"
		SetModSettingBool("bSearchButton:Upkeep", false)
		StorageUtil.UnsetStringValue(none, "YM.Lorica.Menu.Upkeep.Input")
		int handle = ModEvent.Create("LoricaRedone_Menu_Upkeep_Input_Clear")
		if handle
			ModEvent.Send(handle)
		else
		
		endif
		SetMyMenuOptions()
	endif
	SetMyMenuOptions()
	RefreshMenu()
EndEvent


;; -----------------------FUNCTIONS---------------------------------------------------------


function SetMyMenuOptions()	
	string[] a = CreateStringArray(StorageUtil.StringListCount(none,"YM.Lorica.MCM.Enum.Upkeep"))
	a =	StorageUtil.StringListToArray(none, "YM.Lorica.MCM.Enum.Upkeep")

	SetMenuOptions("iSelectedSpellWhitelist", a)
	SetMenuOptions("iSelectedUtilityBlacklist", a)
	
	a = CreateStringArray(StorageUtil.StringListCount(none,"YM.Lorica.MCM.Enum.Blacklist"))
	a =	StorageUtil.StringListToArray(none, "YM.Lorica.MCM.Enum.Blacklist")
	SetMenuOptions("iSelectedSpellBlacklist", a)
	
	a = CreateStringArray(StorageUtil.StringListCount(none,"YM.Lorica.MCM.Enum.Exclusion"))
	a = StorageUtil.StringListToArray(none, "YM.Lorica.MCM.Enum.Exclusion")
	SetMenuOptions("iSelectedUtilityWhitelist", a)
	
endfunction

function EnumOptionSelect(string a_option, int a_index)
; a_index == 0 is always "No Change"
	if a_index != 0
		; a_index -= 1
		; remove something from whitelist, add to main blacklist	
		if a_option == "whitelist"
			string sSpell = StorageUtil.StringListPluck(none, "YM.Lorica.MCM.Enum.Upkeep", a_index, "None")
			StorageUtil.StringListAdd(none, "YM.Lorica.MCM.Enum.Blacklist", sSpell)
			int id = StorageUtil.GetIntValue(none, sSpell, 0)
			form fSpell = Game.getForm(id)
			JsonUtil.FormListAdd(jFilePathSpellList, pfSpellBlacklist, fSpell, true)
			JsonUtil.FormListRemove(jFilePathSpellList, pfUpkeepSpellList, fSpell, true)
			bUpdateDebuffs = True
		; remove something from blacklist, add to main whitelist
		elseif a_option == "blacklist"
			string sSpell = StorageUtil.StringListPluck(none, "YM.Lorica.MCM.Enum.Blacklist", a_index, "None")
			StorageUtil.StringListAdd(none, "YM.Lorica.MCM.Enum.Upkeep", sSpell)
			int id = StorageUtil.GetIntValue(none, sSpell, 0)
			form fSpell = Game.getForm(id)
			JsonUtil.FormListAdd(jFilePathSpellList, pfUpkeepSpellList, fSpell, true)
			JsonUtil.FormListRemove(jFilePathSpellList, pfSpellBlacklist, fSpell, true)
			bUpdateDebuffs = True
		; remove something from the utility list
		elseif a_option == "utilitylist"
			string sSpell = StorageUtil.StringListPluck(none, "YM.Lorica.MCM.Enum.Exclusion", a_index, "None")
			StorageUtil.StringListRemove(none, "YM.Lorica.MCM.Enum.Exclusion", sSpell)
			int id = StorageUtil.GetIntValue(none, sSpell, 0)
			form fSpell = Game.getForm(id)
			JsonUtil.FormListRemove(jFilePathSpellList, pExclusionList, fSpell, true)
		; add something from main whitelist to utility list
		elseif a_option == "upkeeplist"
			string sSpell = StorageUtil.StringListGet(none, "YM.Lorica.MCM.Enum.Upkeep", a_index)
			int id = StorageUtil.GetIntValue(none, sSpell, 0)
			form fSpell = Game.getForm(id)
			StorageUtil.StringListAdd(none, "YM.Lorica.MCM.Enum.Exclusion", sSpell)
			JsonUtil.FormListAdd(jFilePathSpellList, pExclusionList, fSpell)
		elseif a_option == "editlist"
			bUpdateDebuffs = True
			
		endif
		JsonUtil.Save(jFilePathSpellList)
	endif
endFunction

; function AddSpellToLorica()
	; if !CheckForActives()
		; spell _equippedRight = PlayerREF.GetEquippedSpell(1)
		; spell _equippedLeft = PlayerREF.GetEquippedSpell(0)
		; ; AIX_UpkeepQuest.Log("AddSpells, Left: ", _equippedLeft + " and Right: " + _equippedRight)
		; MagicEffect meLeft = (_equippedLeft.GetNthEffectMagicEffect(0))
		; MagicEffect meRight = (_equippedRight.GetNthEffectMagicEffect(0))
		; if meLeft.GetCastingType() == 1 && (_equippedLeft as spell).GetNthEffectDuration(0) > 0
			; JsonUtil.FormListAdd(jFilePathSpellList, pfUpkeepSpellList,  _equippedLeft as form, false)
			; AIX_UpkeepSpellList.AddForm(_equippedLeft)
			; ; AIX_UpkeepQuest.SetSpellDebuffCost(_equippedLeft as form)
		; endif
		; if meRight.GetCastingType() == 1 && (_equippedRight as spell).GetNthEffectDuration(0) > 0
			; JsonUtil.FormListAdd(jFilePathSpellList, pfUpkeepSpellList, _equippedRight as form, false)
			; JsonUtil.Save(jFilePathSpellList)
			; AIX_UpkeepSpellList.AddForm(_equippedRight)
			; ; AIX_UpkeepQuest.SetSpellDebuffCost(_equippedRight as form)
		; endif
		; AIX_UpkeepSpellList.Revert()
		; AIX_UpkeepSpellList.AddForms((JsonUtil.FormListToArray(jFilePathSpellList, pfUpkeepSpellList)))
		; ; AIX_UpkeepQuest.AddDebuffs()
	; endif
; endfunction


; function RefreshDebuffs()
	; AIX_UpkeepQuest.SetAllSpellDebuffCosts()
	; AIX_UpkeepQuest.AddDebuffs()
; endfunction

; function ResetActiveToggledSpells()
	; int happy = 0
	; while happy < StorageUtil.FormListCount(none, pAppliedSpells)
		; PlayerREF.DispelSpell(StorageUtil.FormListGet(none,pAppliedSpells, happy) as Spell)
		; happy += 1
	; endWhile
	; StorageUtil.IntListClear(none, pCostList)
; endfunction

; function EmergencyDispel()
	; PlayerREF.DispelAllSpells()
	; StorageUtil.FormListClear(none, pAppliedSpells)
	; StorageUtil.IntListClear(none, pCostList)
; endfunction

; function ResetBlackList()
	; if !CheckForActives()
		; form[] temp = utility.CreateFormArray(128)
		; temp = (PapyrusUtil.MergeFormArray((AIX_UpkeepBlacklist.ToArray()), (JsonUtil.FormListToArray(jFilePathSpellList, pfUpkeepSpellList)), true))
		; JsonUtil.FormListCopy(jFilePathSpellList, pfUpkeepSpellList, temp)
		; AIX_UpkeepSpellList.AddForms((JsonUtil.FormListToArray(jFilePathSpellList, pfUpkeepSpellList)))
		; AIX_UpkeepBlacklist.Revert()
	; endif
; endfunction

; function SustainedMagicModeToggle()
	; StorageUtil.SetIntValue(none, pbSustainedMagicMode, GetModSettingBool("bSustainedMagicMode:Optional") as int)
	; if GetModSettingBool("bSustainedMagicMode:Optional")
		; AIX_UpkeepAppliedList.revert()
		; AIX_UpkeepAppliedList.AddForms(JsonUtil.FormListToArray(jFilePathSpellList, pfUpkeepSpellList))
	; else
		; AIX_UpkeepAppliedList.Revert()
		; AIX_UpkeepAppliedList.AddForms(StorageUtil.FormListToArray(none, pAppliedSpells))
	; endif
; endfunction

; bool function CheckForActives()
	; MagicEffect[] meActives = new MagicEffect[128]
	; meActives = GetActiveEffects(PlayerREF, false)
	; bool _flag
	; debug.trace("is it here? " + meActives.find(togglespellDamageMagickaDummy))
	; if meActives.Find(togglespellDamageMagickaDummy) > 0
		; _flag = True
	; endif
	; return _flag
; endFunction