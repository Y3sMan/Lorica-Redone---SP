import { on, printConsole, Form, Game, Message, Actor, ObjectReference, Spell, Debug, Utility, Ui, writeLogs } from  "skyrimPlatform";
import { AddMagicEffectToSpell, GetActorValueModifier, IntToString } from  "@skyrim-platform/po3-papyrus-extender/PO3_SKSEFunctions";


export function FormToString(akForm: Form) : string {
	const formid = akForm.getFormID();
	const formstring = IntToString(formid, true);
	return formstring
};

export function pl() {
		return Game.getPlayer();
}

export function traceLog(functionName: string, msg: string = "", stackIndent: number = 0) {
    let sBaseIndent = "";
    while (stackIndent > 0) {
        sBaseIndent = sBaseIndent + "  ";
        stackIndent--;
    }
    let result = sBaseIndent + "Lorica_Redone" + "::" + functionName
    if (msg != "") {
        result = result + " -> ";
    }
    Debug.trace(result + msg, 0);
}

export function log(message: any){
	const t = new Date().toLocaleString();
	let msg = t + ' :: ' + message
	writeLogs("LoricaRedone", msg)
}


export enum suKeys {
	main = "LoricaRedone",
	iCostList = "Individual Upkeep Cost of all Maintained Spells",
	formUpkeepList = "Upkeep Spells",
	formBlackList = "Spells Blacklisted from Lorica",
	formAppliedList = "Spells Currently Applied",
	iCumTotal = "Total Cumulative Penalty",
	fCumFraction = "Number to mult magnitude by",
	iUpkeepTotal = "Total Debuffs",
	bSustainedMagic = "Sustained Magic Mode Toggle",
	formExclusionList = "Spells to exclude from first dispel",
	fUpkeepMult = "Spell Debuff Cost Multiplier",
	bDualCast = "Dual Cast Flag",
	fRitualMult = "Ritual Spell Debuff Cost Multiplier",
	fCostMult = "Spell Debuff Cost Multiplier",
	iDebuffMin = "Minimum Debuff Cost",
	bCompatInitialized = "YM.Lorica.Compat.Init",
	iCompatAllSpells = "YM.Lorica.Compat.AllSpells",
	MCM_Enum_Upkeep = "YM.Lorica.MCM.Enum.Upkeep",
	MCM_Enum_Blacklist = "YM.Lorica.MCM.Enum.Blacklist",
	MCM_Enum_Utility = "YM.Lorica.MCM.Enum.Exclusion",

	iChargeMaxDuration = 'YM.LORICA.CHARGE.DURATION.MAX', // max any spell should last, in minutes
	iChargeDurationUpperBound = 'YM.LORICA.CHARGE.DURATION.UPPERBOUND', // Max any spell should have to charge, in seconds
	iChargeCostSolution = 'YM.LORICA.CHARGE.DURATION.SOLUTION',
	iChargeCostAsymptote = 'YM.LORICA.CHARGE.DURATION.ASYMPTOTE', // the upper cost limit where the 3rd step takes over (i.e. the charge time levels out)
	bChargingEnable = 'YM.LORICA.CHARGE.ENABLE'
};

export enum juKeys {
	path =  "../Lorica Redone/SpellList"
};

import { GetIntValue } from  "@skyrim-platform/papyrus-util/StorageUtil";

export function UIUpdateDebuffMeter() {
	const fManaMaxRemaining = pl().getBaseActorValue("magicka") + GetActorValueModifier(pl(), 0, "magicka")
	const fMax = fManaMaxRemaining + GetIntValue(null, suKeys.iUpkeepTotal) + GetIntValue(null, suKeys.iCumTotal);
	const fPercent = 100 - ( ( fManaMaxRemaining /  fMax) * 100 )
	Ui.invokeFloat("HUD Menu", "_root.HUDMovieBaseInstance.SetExhaustionPenaltyMeter", fPercent)
};