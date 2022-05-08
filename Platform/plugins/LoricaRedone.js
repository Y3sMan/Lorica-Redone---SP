/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToggleSpell": () => (/* binding */ ToggleSpell)
/* harmony export */ });
/* harmony import */ var _skyrim_platform_skyrim_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _skyrim_platform_skyrim_platform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_skyrim_platform_skyrim_platform__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _skyrim_platform_papyrus_util_StorageUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _skyrim_platform_papyrus_util_JsonUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _skyrim_platform_po3_papyrus_extender_PO3_SKSEFunctions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var _YM_Lorica_Shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);
/* harmony import */ var _YM_Lorica_Compat__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6);
/* harmony import */ var _YM_Lorica_UtilitySpells__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7);
/* harmony import */ var _YM_Lorica_MCM__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








(0,_YM_Lorica_MCM__WEBPACK_IMPORTED_MODULE_7__.mainMCM)();
(0,_YM_Lorica_UtilitySpells__WEBPACK_IMPORTED_MODULE_6__.mainUtilitySpells)();
var bCharging = 1;
//---------------------------------COMPATIBILITY SECTION---------------------------------------------
var spellCompatCheck = function () {
    var allspells;
    allspells = (0,_skyrim_platform_po3_papyrus_extender_PO3_SKSEFunctions__WEBPACK_IMPORTED_MODULE_3__.GetAllSpells)(null, true);
    if ((0,_skyrim_platform_papyrus_util_StorageUtil__WEBPACK_IMPORTED_MODULE_1__.GetIntValue)(null, _YM_Lorica_Shared__WEBPACK_IMPORTED_MODULE_4__.suKeys.iCompatAllSpells) != allspells.length && !(0,_skyrim_platform_papyrus_util_StorageUtil__WEBPACK_IMPORTED_MODULE_1__.GetIntValue)(null, _YM_Lorica_Shared__WEBPACK_IMPORTED_MODULE_4__.suKeys.bCompatInitialized)) {
        (0,_YM_Lorica_Compat__WEBPACK_IMPORTED_MODULE_5__.mainCompat)();
    }
    ;
};
(0,_skyrim_platform_skyrim_platform__WEBPACK_IMPORTED_MODULE_0__.on)('loadGame', function () { (0,_skyrim_platform_skyrim_platform__WEBPACK_IMPORTED_MODULE_0__.printConsole)('loadgame'); spellCompatCheck(); });
(0,_skyrim_platform_skyrim_platform__WEBPACK_IMPORTED_MODULE_0__.on)('newGame', function () { (0,_skyrim_platform_skyrim_platform__WEBPACK_IMPORTED_MODULE_0__.printConsole)('newgame'); spellCompatCheck(); });
(0,_skyrim_platform_skyrim_platform__WEBPACK_IMPORTED_MODULE_0__.once)('skyrimLoaded', function () {
    // printConsole('skyrimLoaded') 
    // let charge_indicator:number = createText(100, 100, 'test', [0,0.5,1,1])
    // SetIntValue(null, '.LoricaRedone.widgets.charging.id', charge_indicator)
});
(0,_skyrim_platform_skyrim_platform__WEBPACK_IMPORTED_MODULE_0__.once)('scriptInit', function () { spellCompatCheck(); });
(0,_skyrim_platform_skyrim_platform__WEBPACK_IMPORTED_MODULE_0__.once)('update', function () {
    // if ( !GetIntValue(null, suKeys.bCompatInitialized) ) { return;}
    // GivePlayerSpellBook(); // debug option
    (0,_YM_Lorica_Compat__WEBPACK_IMPORTED_MODULE_5__.mainCompat)();
    // spellCompatCheck()
    var lcharge_indicator = (0,_skyrim_platform_skyrim_platform__WEBPACK_IMPORTED_MODULE_0__.createText)(1000, 1000, 'test', [0, 0.5, 1, 1]);
    var rcharge_indicator = (0,_skyrim_platform_skyrim_platform__WEBPACK_IMPORTED_MODULE_0__.createText)(1300, 1000, 'test', [0, 0.5, 1, 1]);
    (0,_skyrim_platform_papyrus_util_StorageUtil__WEBPACK_IMPORTED_MODULE_1__.SetIntValue)(null, '.LoricaRedone.widgets.charging.left.id', lcharge_indicator);
    (0,_skyrim_platform_papyrus_util_StorageUtil__WEBPACK_IMPORTED_MODULE_1__.SetIntValue)(null, '.LoricaRedone.widgets.charging.right.id', rcharge_indicator);
    bCharging = (0,_skyrim_platform_papyrus_util_StorageUtil__WEBPACK_IMPORTED_MODULE_1__.GetIntValue)(null, _YM_Lorica_Shared__WEBPACK_IMPORTED_MODULE_4__.suKeys.bChargingEnable, 1);
});
// --------------------------------DUAL CAST CHECK----------------------------
// hook into dual cast magic animation to doubly check if spell was dual cast [check]
// getEquippedSpell(0) == left hand
// getEquippedSpell(1) == right hand
var bDualCast = false;
var bUpkeepCast = false;
var fChargeTimerR = 0;
var fChargeTimerL = 0;
var Spellduration = 0;
_skyrim_platform_skyrim_platform__WEBPACK_IMPORTED_MODULE_0__.hooks.sendAnimationEvent.add({
    enter: function (ctx) {
        var _this = this;
        var animEvent = ctx.animEventName.toLowerCase();
        // printConsole(animEvent);
        if (animEvent.includes("dualmagic")) {
            (0,_skyrim_platform_skyrim_platform__WEBPACK_IMPORTED_MODULE_0__.once)('update', function () {
                var equippedRight = _skyrim_platform_skyrim_platform__WEBPACK_IMPORTED_MODULE_0__.Form.from(_skyrim_platform_skyrim_platform__WEBPACK_IMPORTED_MODULE_0__.Game.getPlayer().getEquippedSpell(1));
                if (!equippedRight) {
                    return;
                }
                ;
                var sDualCast = "LoricaRedone" + equippedRight.getName() + "DualCast";
                if (!equippedRight || !sDualCast) {
                    return;
                }
                ;
                if (bDualCast) {
                    (0,_skyrim_platform_papyrus_util_StorageUtil__WEBPACK_IMPORTED_MODULE_1__.SetIntValue)(null, sDualCast, 1);
                    // printConsole('sendAnimationEvent:: dual cast check: ' + GetIntValue(null, sDualCast, 0));
                }
            });
        }
        // ----------------------------------------cast charge stuff----------------------------------------
        var isInWrongLists = function (spell) {
            if (!(0,_skyrim_platform_papyrus_util_JsonUtil__WEBPACK_IMPORTED_MODULE_2__.FormListHas)(_YM_Lorica_Shared__WEBPACK_IMPORTED_MODULE_4__.juKeys.path, _YM_Lorica_Shared__WEBPACK_IMPORTED_MODULE_4__.suKeys.formUpkeepList, spell) || (0,_skyrim_platform_papyrus_util_StorageUtil__WEBPACK_IMPORTED_MODULE_1__.FormListHas)(null, _YM_Lorica_Shared__WEBPACK_IMPORTED_MODULE_4__.suKeys.formAppliedList, spell)) {
                return true;
            }
        };
        var WidgetSet = function (duration, hand) {
            hand = hand.toLowerCase();
            var widget = (0,_skyrim_platform_papyrus_util_StorageUtil__WEBPACK_IMPORTED_MODULE_1__.GetIntValue)(null, ".LoricaRedone.widgets.charging.".concat(hand, ".id"));
            var max = (0,_skyrim_platform_papyrus_util_StorageUtil__WEBPACK_IMPORTED_MODULE_1__.GetIntValue)(null, _YM_Lorica_Shared__WEBPACK_IMPORTED_MODULE_4__.suKeys.iChargeMaxDuration, 600) * 60 / 100;
            (0,_skyrim_platform_skyrim_platform__WEBPACK_IMPORTED_MODULE_0__.setTextColor)(widget, [0, 0.5, 1, 1]);
            (0,_skyrim_platform_skyrim_platform__WEBPACK_IMPORTED_MODULE_0__.setTextString)(widget, "".concat(Math.round(duration / max), "%"));
        };
        if (bCharging == 1) {
            if (animEvent.includes("spellready")) {
                (0,_skyrim_platform_skyrim_platform__WEBPACK_IMPORTED_MODULE_0__.once)('update', function () {
                    bUpkeepCast = true;
                    fChargeTimerL = 0;
                    fChargeTimerR = 0;
                    var equippedLeft = _skyrim_platform_skyrim_platform__WEBPACK_IMPORTED_MODULE_0__.Form.from(_skyrim_platform_skyrim_platform__WEBPACK_IMPORTED_MODULE_0__.Game.getPlayer().getEquippedSpell(0));
                    var equippedRight = _skyrim_platform_skyrim_platform__WEBPACK_IMPORTED_MODULE_0__.Form.from(_skyrim_platform_skyrim_platform__WEBPACK_IMPORTED_MODULE_0__.Game.getPlayer().getEquippedSpell(1));
                    if (animEvent.includes('mlh')) {
                        if (isInWrongLists(equippedLeft)) {
                            bUpkeepCast = false;
                            ;
                            fChargeTimerL = 0;
                            return;
                        }
                        (0,_skyrim_platform_skyrim_platform__WEBPACK_IMPORTED_MODULE_0__.on)('update', function () {
                            if (bUpkeepCast) {
                                var w = function (duration) { return __awaiter(_this, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0: return [4 /*yield*/, _skyrim_platform_skyrim_platform__WEBPACK_IMPORTED_MODULE_0__.Utility.wait(0.5)
                                                // Debug.notification('Spell is charging!')
                                            ];
                                            case 1:
                                                _a.sent();
                                                // Debug.notification('Spell is charging!')
                                                WidgetSet(duration, 'left');
                                                fChargeTimerL++;
                                                return [2 /*return*/];
                                        }
                                    });
                                }); };
                                var equippedLeft_1 = _skyrim_platform_skyrim_platform__WEBPACK_IMPORTED_MODULE_0__.Form.from(_skyrim_platform_skyrim_platform__WEBPACK_IMPORTED_MODULE_0__.Game.getPlayer().getEquippedSpell(0));
                                Spellduration = SetDuration(fChargeTimerL, equippedLeft_1);
                                w(Spellduration);
                                if ((fChargeTimerL / 60) > 300) {
                                    bUpkeepCast = false;
                                    fChargeTimerL = 0;
                                }
                            }
                        });
                    }
                    if (animEvent.includes('mrh')) {
                        if (isInWrongLists(equippedRight)) {
                            bUpkeepCast = false;
                            fChargeTimerR = 0;
                            return;
                        }
                        (0,_skyrim_platform_skyrim_platform__WEBPACK_IMPORTED_MODULE_0__.on)('update', function () {
                            if (bUpkeepCast) {
                                var w = function (duration) { return __awaiter(_this, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0: return [4 /*yield*/, _skyrim_platform_skyrim_platform__WEBPACK_IMPORTED_MODULE_0__.Utility.wait(0.5)
                                                // Debug.notification('Spell is charging!')
                                            ];
                                            case 1:
                                                _a.sent();
                                                // Debug.notification('Spell is charging!')
                                                WidgetSet(Spellduration, 'right');
                                                fChargeTimerR++;
                                                return [2 /*return*/];
                                        }
                                    });
                                }); };
                                var equippedRight_1 = _skyrim_platform_skyrim_platform__WEBPACK_IMPORTED_MODULE_0__.Form.from(_skyrim_platform_skyrim_platform__WEBPACK_IMPORTED_MODULE_0__.Game.getPlayer().getEquippedSpell(1));
                                Spellduration = SetDuration(fChargeTimerR, equippedRight_1);
                                w(Spellduration);
                                if ((fChargeTimerR / 60) > 300) {
                                    bUpkeepCast = false;
                                    fChargeTimerR = 0;
                                }
                            }
                        });
                    }
                });
            }
            if (animEvent.includes("spellrelease") || animEvent.includes('equipped_event') || animEvent.includes('unequip')) {
                bUpkeepCast = false;
                fChargeTimerL = 0;
                fChargeTimerR = 0;
                (0,_skyrim_platform_skyrim_platform__WEBPACK_IMPORTED_MODULE_0__.once)('update', function () {
                    var w = function () { return __awaiter(_this, void 0, void 0, function () {
                        var lwidget, rwidget, color;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, _skyrim_platform_skyrim_platform__WEBPACK_IMPORTED_MODULE_0__.Utility.wait(2.0)];
                                case 1:
                                    _a.sent();
                                    (0,_skyrim_platform_skyrim_platform__WEBPACK_IMPORTED_MODULE_0__.printConsole)('fadeout started');
                                    lwidget = (0,_skyrim_platform_papyrus_util_StorageUtil__WEBPACK_IMPORTED_MODULE_1__.GetIntValue)(null, '.LoricaRedone.widgets.charging.left.id');
                                    rwidget = (0,_skyrim_platform_papyrus_util_StorageUtil__WEBPACK_IMPORTED_MODULE_1__.GetIntValue)(null, '.LoricaRedone.widgets.charging.right.id');
                                    color = (0,_skyrim_platform_skyrim_platform__WEBPACK_IMPORTED_MODULE_0__.getTextColor)(rwidget);
                                    color[3] = 0;
                                    (0,_skyrim_platform_skyrim_platform__WEBPACK_IMPORTED_MODULE_0__.setTextColor)(lwidget, color);
                                    (0,_skyrim_platform_skyrim_platform__WEBPACK_IMPORTED_MODULE_0__.setTextColor)(rwidget, color);
                                    return [2 /*return*/];
                            }
                        });
                    }); };
                    w();
                });
            }
            if (animEvent.includes("spellrelease")) {
                (0,_skyrim_platform_skyrim_platform__WEBPACK_IMPORTED_MODULE_0__.once)('update', function () {
                    var left = _skyrim_platform_skyrim_platform__WEBPACK_IMPORTED_MODULE_0__.Form.from(_skyrim_platform_skyrim_platform__WEBPACK_IMPORTED_MODULE_0__.Game.getPlayer().getEquippedSpell(0));
                    var right = _skyrim_platform_skyrim_platform__WEBPACK_IMPORTED_MODULE_0__.Form.from(_skyrim_platform_skyrim_platform__WEBPACK_IMPORTED_MODULE_0__.Game.getPlayer().getEquippedSpell(1));
                    if (animEvent.includes('mrh') && !isInWrongLists(right)) {
                    }
                    // if ( animEvent.includes('mlh') && !isInWrongLists(left)) {MessageDurationResult(Spellduration)}
                });
            }
        }
    },
    leave: function (ctx) { }
}, 0x14, 0x14); // filter out non-player events
function MessageDurationResult(duration) {
    duration /= 60;
    duration = Math.floor(duration);
    // if ( duration > 0 && duration < 7 ) { }
    // const w =async () => {
    // 	await Utility.wait(0.2)
    // 	Debug.notification(`Spell has been charged enough to last ${duration} minutes!`) 
    // }
    // w()
    var widget = (0,_skyrim_platform_papyrus_util_StorageUtil__WEBPACK_IMPORTED_MODULE_1__.GetIntValue)(null, '.LoricaRedone.widgets.charging.id');
    if (widget == 0) {
        _skyrim_platform_skyrim_platform__WEBPACK_IMPORTED_MODULE_0__.Debug.notification("Widget Failed!\nERROR 403: no widget created\nAttempting to recreate widget");
        (0,_skyrim_platform_skyrim_platform__WEBPACK_IMPORTED_MODULE_0__.once)('update', function () {
            var charge_indicator = (0,_skyrim_platform_skyrim_platform__WEBPACK_IMPORTED_MODULE_0__.createText)(100, 100, 'test', [0, 0.5, 1, 1]);
            (0,_skyrim_platform_papyrus_util_StorageUtil__WEBPACK_IMPORTED_MODULE_1__.SetIntValue)(null, '.LoricaRedone.widgets.charging.id', charge_indicator);
        });
    }
    (0,_skyrim_platform_skyrim_platform__WEBPACK_IMPORTED_MODULE_0__.setTextString)(widget, "0");
}
var ChargeTime_V_Cost_Equation = function (spell) {
    // equation ( charge_time is seconds spell needs to be charged to reach max spell duration )
    // 				 {	6.4e-4 * (x+20)^2	0 <= x <= 100
    // charge_time = |	
    // 				 {	10					x >= 100
    var User_Pref_Solution = (0,_skyrim_platform_papyrus_util_StorageUtil__WEBPACK_IMPORTED_MODULE_1__.GetIntValue)(null, _YM_Lorica_Shared__WEBPACK_IMPORTED_MODULE_4__.suKeys.iChargeCostSolution, 20);
    var User_Pref_Upper_Bound = (0,_skyrim_platform_papyrus_util_StorageUtil__WEBPACK_IMPORTED_MODULE_1__.GetIntValue)(null, _YM_Lorica_Shared__WEBPACK_IMPORTED_MODULE_4__.suKeys.iChargeDurationUpperBound, 10);
    var User_Pref_Cost_Asymptote = (0,_skyrim_platform_papyrus_util_StorageUtil__WEBPACK_IMPORTED_MODULE_1__.GetIntValue)(null, _YM_Lorica_Shared__WEBPACK_IMPORTED_MODULE_4__.suKeys.iChargeCostAsymptote, 100);
    var fCost = _skyrim_platform_skyrim_platform__WEBPACK_IMPORTED_MODULE_0__.Spell.from(spell).getEffectiveMagickaCost((0,_YM_Lorica_Shared__WEBPACK_IMPORTED_MODULE_4__.pl)());
    var charge_time = 0;
    var solution = User_Pref_Solution; // solution to the first part of the step function, this 'fCost + 40**2' is of course -40. A spell costing 40 or below has to charge
    var upper_step = User_Pref_Upper_Bound;
    if (fCost >= 0 && fCost < User_Pref_Cost_Asymptote) {
        charge_time = 6.4e-4 * (Math.pow((fCost - solution), 2));
    }
    if (fCost <= solution || upper_step == 0) {
        charge_time = 0;
        return charge_time;
    } // first step function to bound system to constant min y i.e. less than your min cost charge_time = 0
    if (fCost >= User_Pref_Cost_Asymptote) {
        charge_time = upper_step;
    } // the max any spell should charge is 10 seconds; second step function to bound the system to some constant y
    return Math.ceil(charge_time);
};
var Duration_V_ChargeTime = function (charge_timer, spell) {
    // equation
    // duration is in minutes, and is converted to seconds
    // duration = (108)*charge_time + 1		0 <= charge_time <= 5 minutes
    // duration = 10						charge_time >= 5 minutes
    // input charge_timer ( in seconds) should be the charge timer in the loop, NOT the calculated number from the equation ChargeTime_V_Cost_Equation
    var User_Pref_Max_Dur = (0,_skyrim_platform_papyrus_util_StorageUtil__WEBPACK_IMPORTED_MODULE_1__.GetIntValue)(null, _YM_Lorica_Shared__WEBPACK_IMPORTED_MODULE_4__.suKeys.iChargeMaxDuration, 600) * 60; // mult. by 60 to convert minutes to seconds
    var User_Pref_Upper_Bound = (0,_skyrim_platform_papyrus_util_StorageUtil__WEBPACK_IMPORTED_MODULE_1__.GetIntValue)(null, _YM_Lorica_Shared__WEBPACK_IMPORTED_MODULE_4__.suKeys.iChargeDurationUpperBound, 10);
    var slope = (User_Pref_Max_Dur - 60) / User_Pref_Upper_Bound;
    var charge_calculated = ChargeTime_V_Cost_Equation(spell);
    charge_timer /= 60; // divide by 60 as the timer increments 60 times a second
    if (charge_timer >= charge_calculated) {
        return User_Pref_Max_Dur;
    }
    var duration = ((slope) * charge_timer + 60);
    if (duration < User_Pref_Max_Dur) {
        return Math.round(duration);
    }
    if (duration >= User_Pref_Max_Dur) {
        return User_Pref_Max_Dur;
    }
};
function SetDuration(charge_timer, spell) {
    var duration = Duration_V_ChargeTime(charge_timer, spell);
    var s = _skyrim_platform_skyrim_platform__WEBPACK_IMPORTED_MODULE_0__.Spell.from(spell);
    s.setNthEffectDuration(0, duration);
    return duration;
}
//---------------------------MAIN--------------------------------------------
(0,_skyrim_platform_skyrim_platform__WEBPACK_IMPORTED_MODULE_0__.on)('spellCast', function (event) {
    // const caster = Actor.from(event.caster.getBaseObject()) // event castor as Actor
    var castspell = _skyrim_platform_skyrim_platform__WEBPACK_IMPORTED_MODULE_0__.Form.from(event.spell); // event spell as Form
    var formlistApplied = _skyrim_platform_skyrim_platform__WEBPACK_IMPORTED_MODULE_0__.FormList.from(_skyrim_platform_skyrim_platform__WEBPACK_IMPORTED_MODULE_0__.Game.getFormFromFile(0x001D63, "Lorica Redone.esp"));
    (0,_skyrim_platform_skyrim_platform__WEBPACK_IMPORTED_MODULE_0__.printConsole)(formlistApplied === null || formlistApplied === void 0 ? void 0 : formlistApplied.hasForm(castspell));
    // printConsole(`AppliedList Has => ${FormListHas(null, suKeys.formAppliedList, castspell)}`)
    if (!castspell) {
        return;
    }
    ;
    // if the spell is in the blacklist or isn't in the upkeep list, just stop
    if ((0,_skyrim_platform_papyrus_util_JsonUtil__WEBPACK_IMPORTED_MODULE_2__.FormListHas)(_YM_Lorica_Shared__WEBPACK_IMPORTED_MODULE_4__.juKeys.path, _YM_Lorica_Shared__WEBPACK_IMPORTED_MODULE_4__.suKeys.formBlackList, castspell) || !(0,_skyrim_platform_papyrus_util_JsonUtil__WEBPACK_IMPORTED_MODULE_2__.FormListHas)(_YM_Lorica_Shared__WEBPACK_IMPORTED_MODULE_4__.juKeys.path, _YM_Lorica_Shared__WEBPACK_IMPORTED_MODULE_4__.suKeys.formUpkeepList, castspell)) {
        return;
    }
    ;
    // main toggle if-block
    if (!(0,_skyrim_platform_papyrus_util_StorageUtil__WEBPACK_IMPORTED_MODULE_1__.FormListHas)(null, _YM_Lorica_Shared__WEBPACK_IMPORTED_MODULE_4__.suKeys.formAppliedList, castspell)) {
        ToggleSpell('on', castspell);
    }
    else {
        ToggleSpell('off', castspell);
    }
    ;
});
// ----------------------------------------CLEANUP------------------------------------------
(0,_skyrim_platform_skyrim_platform__WEBPACK_IMPORTED_MODULE_0__.on)('effectFinish', function (event) {
    for (var i = 0; i < (0,_skyrim_platform_papyrus_util_StorageUtil__WEBPACK_IMPORTED_MODULE_1__.FormListCount)(null, _YM_Lorica_Shared__WEBPACK_IMPORTED_MODULE_4__.suKeys.formAppliedList); i++) {
        var F = (0,_skyrim_platform_papyrus_util_StorageUtil__WEBPACK_IMPORTED_MODULE_1__.FormListGet)(null, _YM_Lorica_Shared__WEBPACK_IMPORTED_MODULE_4__.suKeys.formAppliedList, i);
        var S = _skyrim_platform_skyrim_platform__WEBPACK_IMPORTED_MODULE_0__.Spell.from(F);
        if (!(0,_skyrim_platform_po3_papyrus_extender_PO3_SKSEFunctions__WEBPACK_IMPORTED_MODULE_3__.HasActiveSpell)((0,_YM_Lorica_Shared__WEBPACK_IMPORTED_MODULE_4__.pl)(), S)) {
            ToggleSpell("off", F);
            (0,_YM_Lorica_Shared__WEBPACK_IMPORTED_MODULE_4__.UIUpdateDebuffMeter)();
        }
        ;
    }
    ;
});
// -------------------------------------FUNCTIONS----------------------------------------------------------------
function ToggleSpell(option, spell) {
    var _this = this;
    var Remove = function (spell) {
        var formlistApplied = _skyrim_platform_skyrim_platform__WEBPACK_IMPORTED_MODULE_0__.FormList.from(_skyrim_platform_skyrim_platform__WEBPACK_IMPORTED_MODULE_0__.Game.getFormFromFile(0x001D63, "Lorica Redone.esp"));
        (0,_skyrim_platform_papyrus_util_StorageUtil__WEBPACK_IMPORTED_MODULE_1__.FormListRemove)(null, _YM_Lorica_Shared__WEBPACK_IMPORTED_MODULE_4__.suKeys.formAppliedList, spell, false); // remove form from applied spells list
        formlistApplied.removeAddedForm(spell);
        (0,_YM_Lorica_Shared__WEBPACK_IMPORTED_MODULE_4__.pl)().dispelSpell(_skyrim_platform_skyrim_platform__WEBPACK_IMPORTED_MODULE_0__.Spell.from(spell));
    };
    // printConsole("ToggleSpell:: running")
    option = option.toLowerCase();
    var spellCum = _skyrim_platform_skyrim_platform__WEBPACK_IMPORTED_MODULE_0__.Spell.from(_skyrim_platform_skyrim_platform__WEBPACK_IMPORTED_MODULE_0__.Game.getFormFromFile(0x1A33, "Lorica Redone.esp")); // the spell responsible for the Cumulative penalty
    var spellUpkeep = _skyrim_platform_skyrim_platform__WEBPACK_IMPORTED_MODULE_0__.Spell.from(_skyrim_platform_skyrim_platform__WEBPACK_IMPORTED_MODULE_0__.Game.getFormFromFile(0x1c40, "Lorica Redone.esp")); // the spell responsible for the Total Upkeep penalty
    var formlistApplied = _skyrim_platform_skyrim_platform__WEBPACK_IMPORTED_MODULE_0__.FormList.from(_skyrim_platform_skyrim_platform__WEBPACK_IMPORTED_MODULE_0__.Game.getFormFromFile(0x001D63, "Lorica Redone.esp"));
    var spellstring = (0,_skyrim_platform_po3_papyrus_extender_PO3_SKSEFunctions__WEBPACK_IMPORTED_MODULE_3__.IntToString)(spell === null || spell === void 0 ? void 0 : spell.getFormID(), true); // exclamation mark assures compiler that variable will be there
    var fMag = (0,_skyrim_platform_papyrus_util_StorageUtil__WEBPACK_IMPORTED_MODULE_1__.GetFloatValue)(null, spellstring, 0);
    var iCum = Math.floor(fMag * ((0,_skyrim_platform_papyrus_util_StorageUtil__WEBPACK_IMPORTED_MODULE_1__.GetFloatValue)(null, _YM_Lorica_Shared__WEBPACK_IMPORTED_MODULE_4__.suKeys.fCumFraction, 0.20))); // get the cumulative increase from the argument spell, rounded down
    // remove upkeep and cumulative spells for adjustment
    (0,_YM_Lorica_Shared__WEBPACK_IMPORTED_MODULE_4__.pl)().removeSpell(spellCum);
    (0,_YM_Lorica_Shared__WEBPACK_IMPORTED_MODULE_4__.pl)().removeSpell(spellUpkeep);
    // get currently equipped spells to check for dual-cast
    var equippedLeft = _skyrim_platform_skyrim_platform__WEBPACK_IMPORTED_MODULE_0__.Form.from(_skyrim_platform_skyrim_platform__WEBPACK_IMPORTED_MODULE_0__.Game.getPlayer().getEquippedSpell(0));
    var equippedRight = _skyrim_platform_skyrim_platform__WEBPACK_IMPORTED_MODULE_0__.Form.from(_skyrim_platform_skyrim_platform__WEBPACK_IMPORTED_MODULE_0__.Game.getPlayer().getEquippedSpell(1));
    var sDualCast;
    if (equippedRight) {
        sDualCast = "LoricaRedone" + (equippedRight === null || equippedRight === void 0 ? void 0 : equippedRight.getName()) + "DualCast";
    }
    else if (equippedLeft) {
        sDualCast = "LoricaRedone" + (equippedLeft === null || equippedLeft === void 0 ? void 0 : equippedLeft.getName()) + "DualCast";
    }
    if (option.includes("on")) {
        (0,_skyrim_platform_papyrus_util_StorageUtil__WEBPACK_IMPORTED_MODULE_1__.FormListAdd)(null, _YM_Lorica_Shared__WEBPACK_IMPORTED_MODULE_4__.suKeys.formAppliedList, spell, true); // add form to list of applied spells
        formlistApplied.addForm(spell);
        try {
            if (equippedRight.getFormID() == equippedLeft.getFormID() && (0,_skyrim_platform_papyrus_util_StorageUtil__WEBPACK_IMPORTED_MODULE_1__.GetIntValue)(null, sDualCast, 0) == 1) {
                // printConsole('ToggleSpell: dualcast check => Good!');
                fMag *= 2;
                iCum *= 2;
                (0,_skyrim_platform_papyrus_util_StorageUtil__WEBPACK_IMPORTED_MODULE_1__.SetIntValue)(null, sDualCast, 1);
            }
        }
        catch (error) { }
        ;
    }
    ;
    if (option == "off") {
        Remove(spell);
        // dual cast check
        if ((0,_skyrim_platform_papyrus_util_StorageUtil__WEBPACK_IMPORTED_MODULE_1__.GetIntValue)(null, sDualCast, 0) != 0) {
            fMag *= 2;
            iCum *= 2;
            (0,_skyrim_platform_papyrus_util_StorageUtil__WEBPACK_IMPORTED_MODULE_1__.UnsetIntValue)(null, sDualCast);
        }
        ;
        // failsafe if-blocks
        var iCumTotal = (0,_skyrim_platform_papyrus_util_StorageUtil__WEBPACK_IMPORTED_MODULE_1__.GetIntValue)(null, _YM_Lorica_Shared__WEBPACK_IMPORTED_MODULE_4__.suKeys.iCumTotal, 0); // teehee 'cumtotal'
        var iUpkeepTotal = (0,_skyrim_platform_papyrus_util_StorageUtil__WEBPACK_IMPORTED_MODULE_1__.GetIntValue)(null, _YM_Lorica_Shared__WEBPACK_IMPORTED_MODULE_4__.suKeys.iUpkeepTotal, 0);
        if (iCumTotal > 0) {
            iCum *= -1;
        }
        ;
        if (iUpkeepTotal > 0) {
            fMag *= -1;
        }
        ;
        // a last resort if-block to make sure nothing weird happens
        if (iCumTotal - iCum < iCumTotal || iUpkeepTotal - fMag < iUpkeepTotal) {
            fMag = 0;
            iCum = 0;
        }
        ;
    }
    ;
    if (option == "reset") {
        fMag = 0;
        iCum = 0;
    }
    ;
    if (option == "zero" || (0,_skyrim_platform_papyrus_util_StorageUtil__WEBPACK_IMPORTED_MODULE_1__.FormListCount)(null, _YM_Lorica_Shared__WEBPACK_IMPORTED_MODULE_4__.suKeys.formAppliedList) == 0) {
        (0,_skyrim_platform_papyrus_util_StorageUtil__WEBPACK_IMPORTED_MODULE_1__.SetIntValue)(null, _YM_Lorica_Shared__WEBPACK_IMPORTED_MODULE_4__.suKeys.iCumTotal, 0);
        (0,_skyrim_platform_papyrus_util_StorageUtil__WEBPACK_IMPORTED_MODULE_1__.SetIntValue)(null, _YM_Lorica_Shared__WEBPACK_IMPORTED_MODULE_4__.suKeys.iUpkeepTotal, 0);
        fMag = 0;
        iCum = 0;
    }
    ;
    var newUpkeep = (0,_skyrim_platform_papyrus_util_StorageUtil__WEBPACK_IMPORTED_MODULE_1__.AdjustIntValue)(null, _YM_Lorica_Shared__WEBPACK_IMPORTED_MODULE_4__.suKeys.iUpkeepTotal, fMag);
    var newCum = (0,_skyrim_platform_papyrus_util_StorageUtil__WEBPACK_IMPORTED_MODULE_1__.AdjustIntValue)(null, _YM_Lorica_Shared__WEBPACK_IMPORTED_MODULE_4__.suKeys.iCumTotal, iCum);
    // printConsole(` newUpkeep: ${newUpkeep}\n newCum: ${newCum}`)
    if (newUpkeep < 0) {
        (0,_skyrim_platform_papyrus_util_StorageUtil__WEBPACK_IMPORTED_MODULE_1__.SetIntValue)(null, _YM_Lorica_Shared__WEBPACK_IMPORTED_MODULE_4__.suKeys.iUpkeepTotal, 0);
    }
    ;
    if (newCum < 0) {
        (0,_skyrim_platform_papyrus_util_StorageUtil__WEBPACK_IMPORTED_MODULE_1__.SetIntValue)(null, _YM_Lorica_Shared__WEBPACK_IMPORTED_MODULE_4__.suKeys.iCumTotal, 0);
    }
    ;
    // incase something messes up, and there's some leftover penalties, despite having no spells active
    if (newUpkeep > 0 && (0,_skyrim_platform_papyrus_util_StorageUtil__WEBPACK_IMPORTED_MODULE_1__.FormListCount)(null, _YM_Lorica_Shared__WEBPACK_IMPORTED_MODULE_4__.suKeys.formAppliedList) == 0) {
        (0,_skyrim_platform_papyrus_util_StorageUtil__WEBPACK_IMPORTED_MODULE_1__.SetIntValue)(null, _YM_Lorica_Shared__WEBPACK_IMPORTED_MODULE_4__.suKeys.iUpkeepTotal, 0);
        (0,_skyrim_platform_papyrus_util_StorageUtil__WEBPACK_IMPORTED_MODULE_1__.SetIntValue)(null, _YM_Lorica_Shared__WEBPACK_IMPORTED_MODULE_4__.suKeys.iCumTotal, 0);
    }
    ;
    spellCum.setNthEffectMagnitude(0, newCum);
    spellUpkeep.setNthEffectMagnitude(0, newUpkeep);
    var addingspells = function () { return __awaiter(_this, void 0, void 0, function () {
        var spellUpkeep, spellCum, badded;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, _skyrim_platform_skyrim_platform__WEBPACK_IMPORTED_MODULE_0__.Utility.wait(0.1)];
                case 1:
                    _a.sent();
                    spellUpkeep = _skyrim_platform_skyrim_platform__WEBPACK_IMPORTED_MODULE_0__.Spell.from(_skyrim_platform_skyrim_platform__WEBPACK_IMPORTED_MODULE_0__.Game.getFormFromFile(0x001c40, "Lorica Redone.esp"));
                    spellCum = _skyrim_platform_skyrim_platform__WEBPACK_IMPORTED_MODULE_0__.Spell.from(_skyrim_platform_skyrim_platform__WEBPACK_IMPORTED_MODULE_0__.Game.getFormFromFile(0x001A33, "Lorica Redone.esp"));
                    badded = (0,_YM_Lorica_Shared__WEBPACK_IMPORTED_MODULE_4__.pl)().addSpell(spellUpkeep, false);
                    (0,_YM_Lorica_Shared__WEBPACK_IMPORTED_MODULE_4__.pl)().addSpell(spellCum, false);
                    return [2 /*return*/];
            }
        });
    }); };
    addingspells();
    (0,_YM_Lorica_Shared__WEBPACK_IMPORTED_MODULE_4__.UIUpdateDebuffMeter)();
    // printConsole(`ToggleSpell Has => ${FormListHas(null, suKeys.formAppliedList, spell!)}`)
}
;


/***/ }),
/* 1 */
/***/ ((module) => {

module.exports = skyrimPlatform;

/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetIntValue": () => (/* binding */ SetIntValue),
/* harmony export */   "SetFloatValue": () => (/* binding */ SetFloatValue),
/* harmony export */   "SetStringValue": () => (/* binding */ SetStringValue),
/* harmony export */   "SetFormValue": () => (/* binding */ SetFormValue),
/* harmony export */   "UnsetIntValue": () => (/* binding */ UnsetIntValue),
/* harmony export */   "UnsetFloatValue": () => (/* binding */ UnsetFloatValue),
/* harmony export */   "UnsetStringValue": () => (/* binding */ UnsetStringValue),
/* harmony export */   "UnsetFormValue": () => (/* binding */ UnsetFormValue),
/* harmony export */   "HasIntValue": () => (/* binding */ HasIntValue),
/* harmony export */   "HasFloatValue": () => (/* binding */ HasFloatValue),
/* harmony export */   "HasStringValue": () => (/* binding */ HasStringValue),
/* harmony export */   "HasFormValue": () => (/* binding */ HasFormValue),
/* harmony export */   "GetIntValue": () => (/* binding */ GetIntValue),
/* harmony export */   "GetFloatValue": () => (/* binding */ GetFloatValue),
/* harmony export */   "GetStringValue": () => (/* binding */ GetStringValue),
/* harmony export */   "GetFormValue": () => (/* binding */ GetFormValue),
/* harmony export */   "PluckIntValue": () => (/* binding */ PluckIntValue),
/* harmony export */   "PluckFloatValue": () => (/* binding */ PluckFloatValue),
/* harmony export */   "PluckStringValue": () => (/* binding */ PluckStringValue),
/* harmony export */   "PluckFormValue": () => (/* binding */ PluckFormValue),
/* harmony export */   "AdjustIntValue": () => (/* binding */ AdjustIntValue),
/* harmony export */   "AdjustFloatValue": () => (/* binding */ AdjustFloatValue),
/* harmony export */   "IntListAdd": () => (/* binding */ IntListAdd),
/* harmony export */   "FloatListAdd": () => (/* binding */ FloatListAdd),
/* harmony export */   "StringListAdd": () => (/* binding */ StringListAdd),
/* harmony export */   "FormListAdd": () => (/* binding */ FormListAdd),
/* harmony export */   "IntListGet": () => (/* binding */ IntListGet),
/* harmony export */   "FloatListGet": () => (/* binding */ FloatListGet),
/* harmony export */   "StringListGet": () => (/* binding */ StringListGet),
/* harmony export */   "FormListGet": () => (/* binding */ FormListGet),
/* harmony export */   "IntListSet": () => (/* binding */ IntListSet),
/* harmony export */   "FloatListSet": () => (/* binding */ FloatListSet),
/* harmony export */   "StringListSet": () => (/* binding */ StringListSet),
/* harmony export */   "FormListSet": () => (/* binding */ FormListSet),
/* harmony export */   "IntListPluck": () => (/* binding */ IntListPluck),
/* harmony export */   "FloatListPluck": () => (/* binding */ FloatListPluck),
/* harmony export */   "StringListPluck": () => (/* binding */ StringListPluck),
/* harmony export */   "FormListPluck": () => (/* binding */ FormListPluck),
/* harmony export */   "IntListShift": () => (/* binding */ IntListShift),
/* harmony export */   "FloatListShift": () => (/* binding */ FloatListShift),
/* harmony export */   "StringListShift": () => (/* binding */ StringListShift),
/* harmony export */   "FormListShift": () => (/* binding */ FormListShift),
/* harmony export */   "IntListPop": () => (/* binding */ IntListPop),
/* harmony export */   "FloatListPop": () => (/* binding */ FloatListPop),
/* harmony export */   "StringListPop": () => (/* binding */ StringListPop),
/* harmony export */   "FormListPop": () => (/* binding */ FormListPop),
/* harmony export */   "IntListAdjust": () => (/* binding */ IntListAdjust),
/* harmony export */   "FloatListAdjust": () => (/* binding */ FloatListAdjust),
/* harmony export */   "IntListInsert": () => (/* binding */ IntListInsert),
/* harmony export */   "FloatListInsert": () => (/* binding */ FloatListInsert),
/* harmony export */   "StringListInsert": () => (/* binding */ StringListInsert),
/* harmony export */   "FormListInsert": () => (/* binding */ FormListInsert),
/* harmony export */   "IntListRemove": () => (/* binding */ IntListRemove),
/* harmony export */   "FloatListRemove": () => (/* binding */ FloatListRemove),
/* harmony export */   "StringListRemove": () => (/* binding */ StringListRemove),
/* harmony export */   "FormListRemove": () => (/* binding */ FormListRemove),
/* harmony export */   "IntListClear": () => (/* binding */ IntListClear),
/* harmony export */   "FloatListClear": () => (/* binding */ FloatListClear),
/* harmony export */   "StringListClear": () => (/* binding */ StringListClear),
/* harmony export */   "FormListClear": () => (/* binding */ FormListClear),
/* harmony export */   "IntListRemoveAt": () => (/* binding */ IntListRemoveAt),
/* harmony export */   "FloatListRemoveAt": () => (/* binding */ FloatListRemoveAt),
/* harmony export */   "StringListRemoveAt": () => (/* binding */ StringListRemoveAt),
/* harmony export */   "FormListRemoveAt": () => (/* binding */ FormListRemoveAt),
/* harmony export */   "IntListCount": () => (/* binding */ IntListCount),
/* harmony export */   "FloatListCount": () => (/* binding */ FloatListCount),
/* harmony export */   "StringListCount": () => (/* binding */ StringListCount),
/* harmony export */   "FormListCount": () => (/* binding */ FormListCount),
/* harmony export */   "IntListCountValue": () => (/* binding */ IntListCountValue),
/* harmony export */   "FloatListCountValue": () => (/* binding */ FloatListCountValue),
/* harmony export */   "StringListCountValue": () => (/* binding */ StringListCountValue),
/* harmony export */   "FormListCountValue": () => (/* binding */ FormListCountValue),
/* harmony export */   "IntListFind": () => (/* binding */ IntListFind),
/* harmony export */   "FloatListFind": () => (/* binding */ FloatListFind),
/* harmony export */   "StringListFind": () => (/* binding */ StringListFind),
/* harmony export */   "FormListFind": () => (/* binding */ FormListFind),
/* harmony export */   "IntListHas": () => (/* binding */ IntListHas),
/* harmony export */   "FloatListHas": () => (/* binding */ FloatListHas),
/* harmony export */   "StringListHas": () => (/* binding */ StringListHas),
/* harmony export */   "FormListHas": () => (/* binding */ FormListHas),
/* harmony export */   "IntListSort": () => (/* binding */ IntListSort),
/* harmony export */   "FloatListSort": () => (/* binding */ FloatListSort),
/* harmony export */   "StringListSort": () => (/* binding */ StringListSort),
/* harmony export */   "FormListSort": () => (/* binding */ FormListSort),
/* harmony export */   "IntListSlice": () => (/* binding */ IntListSlice),
/* harmony export */   "FloatListSlice": () => (/* binding */ FloatListSlice),
/* harmony export */   "StringListSlice": () => (/* binding */ StringListSlice),
/* harmony export */   "FormListSlice": () => (/* binding */ FormListSlice),
/* harmony export */   "IntListResize": () => (/* binding */ IntListResize),
/* harmony export */   "FloatListResize": () => (/* binding */ FloatListResize),
/* harmony export */   "StringListResize": () => (/* binding */ StringListResize),
/* harmony export */   "FormListResize": () => (/* binding */ FormListResize),
/* harmony export */   "IntListCopy": () => (/* binding */ IntListCopy),
/* harmony export */   "FloatListCopy": () => (/* binding */ FloatListCopy),
/* harmony export */   "StringListCopy": () => (/* binding */ StringListCopy),
/* harmony export */   "FormListCopy": () => (/* binding */ FormListCopy),
/* harmony export */   "IntListToArray": () => (/* binding */ IntListToArray),
/* harmony export */   "FloatListToArray": () => (/* binding */ FloatListToArray),
/* harmony export */   "StringListToArray": () => (/* binding */ StringListToArray),
/* harmony export */   "FormListToArray": () => (/* binding */ FormListToArray),
/* harmony export */   "FormListFilterByTypes": () => (/* binding */ FormListFilterByTypes),
/* harmony export */   "FormListFilterByType": () => (/* binding */ FormListFilterByType),
/* harmony export */   "CountIntValuePrefix": () => (/* binding */ CountIntValuePrefix),
/* harmony export */   "CountFloatValuePrefix": () => (/* binding */ CountFloatValuePrefix),
/* harmony export */   "CountStringValuePrefix": () => (/* binding */ CountStringValuePrefix),
/* harmony export */   "CountFormValuePrefix": () => (/* binding */ CountFormValuePrefix),
/* harmony export */   "CountIntListPrefix": () => (/* binding */ CountIntListPrefix),
/* harmony export */   "CountFloatListPrefix": () => (/* binding */ CountFloatListPrefix),
/* harmony export */   "CountStringListPrefix": () => (/* binding */ CountStringListPrefix),
/* harmony export */   "CountFormListPrefix": () => (/* binding */ CountFormListPrefix),
/* harmony export */   "CountAllPrefix": () => (/* binding */ CountAllPrefix),
/* harmony export */   "CountObjIntValuePrefix": () => (/* binding */ CountObjIntValuePrefix),
/* harmony export */   "CountObjFloatValuePrefix": () => (/* binding */ CountObjFloatValuePrefix),
/* harmony export */   "CountObjStringValuePrefix": () => (/* binding */ CountObjStringValuePrefix),
/* harmony export */   "CountObjFormValuePrefix": () => (/* binding */ CountObjFormValuePrefix),
/* harmony export */   "CountObjIntListPrefix": () => (/* binding */ CountObjIntListPrefix),
/* harmony export */   "CountObjFloatListPrefix": () => (/* binding */ CountObjFloatListPrefix),
/* harmony export */   "CountObjStringListPrefix": () => (/* binding */ CountObjStringListPrefix),
/* harmony export */   "CountObjFormListPrefix": () => (/* binding */ CountObjFormListPrefix),
/* harmony export */   "CountAllObjPrefix": () => (/* binding */ CountAllObjPrefix),
/* harmony export */   "ClearIntValuePrefix": () => (/* binding */ ClearIntValuePrefix),
/* harmony export */   "ClearFloatValuePrefix": () => (/* binding */ ClearFloatValuePrefix),
/* harmony export */   "ClearStringValuePrefix": () => (/* binding */ ClearStringValuePrefix),
/* harmony export */   "ClearFormValuePrefix": () => (/* binding */ ClearFormValuePrefix),
/* harmony export */   "ClearIntListPrefix": () => (/* binding */ ClearIntListPrefix),
/* harmony export */   "ClearFloatListPrefix": () => (/* binding */ ClearFloatListPrefix),
/* harmony export */   "ClearStringListPrefix": () => (/* binding */ ClearStringListPrefix),
/* harmony export */   "ClearFormListPrefix": () => (/* binding */ ClearFormListPrefix),
/* harmony export */   "ClearAllPrefix": () => (/* binding */ ClearAllPrefix),
/* harmony export */   "ClearObjIntValuePrefix": () => (/* binding */ ClearObjIntValuePrefix),
/* harmony export */   "ClearObjFloatValuePrefix": () => (/* binding */ ClearObjFloatValuePrefix),
/* harmony export */   "ClearObjStringValuePrefix": () => (/* binding */ ClearObjStringValuePrefix),
/* harmony export */   "ClearObjFormValuePrefix": () => (/* binding */ ClearObjFormValuePrefix),
/* harmony export */   "ClearObjIntListPrefix": () => (/* binding */ ClearObjIntListPrefix),
/* harmony export */   "ClearObjFloatListPrefix": () => (/* binding */ ClearObjFloatListPrefix),
/* harmony export */   "ClearObjStringListPrefix": () => (/* binding */ ClearObjStringListPrefix),
/* harmony export */   "ClearObjFormListPrefix": () => (/* binding */ ClearObjFormListPrefix),
/* harmony export */   "ClearAllObjPrefix": () => (/* binding */ ClearAllObjPrefix),
/* harmony export */   "debug_DeleteValues": () => (/* binding */ debug_DeleteValues),
/* harmony export */   "debug_DeleteAllValues": () => (/* binding */ debug_DeleteAllValues),
/* harmony export */   "debug_Cleanup": () => (/* binding */ debug_Cleanup),
/* harmony export */   "debug_AllIntObjs": () => (/* binding */ debug_AllIntObjs),
/* harmony export */   "debug_AllFloatObjs": () => (/* binding */ debug_AllFloatObjs),
/* harmony export */   "debug_AllStringObjs": () => (/* binding */ debug_AllStringObjs),
/* harmony export */   "debug_AllFormObjs": () => (/* binding */ debug_AllFormObjs),
/* harmony export */   "debug_AllIntListObjs": () => (/* binding */ debug_AllIntListObjs),
/* harmony export */   "debug_AllFloatListObjs": () => (/* binding */ debug_AllFloatListObjs),
/* harmony export */   "debug_AllStringListObjs": () => (/* binding */ debug_AllStringListObjs),
/* harmony export */   "debug_AllFormListObjs": () => (/* binding */ debug_AllFormListObjs),
/* harmony export */   "debug_AllObjIntKeys": () => (/* binding */ debug_AllObjIntKeys),
/* harmony export */   "debug_AllObjFloatKeys": () => (/* binding */ debug_AllObjFloatKeys),
/* harmony export */   "debug_AllObjStringKeys": () => (/* binding */ debug_AllObjStringKeys),
/* harmony export */   "debug_AllObjFormKeys": () => (/* binding */ debug_AllObjFormKeys),
/* harmony export */   "debug_AllObjIntListKeys": () => (/* binding */ debug_AllObjIntListKeys),
/* harmony export */   "debug_AllObjFloatListKeys": () => (/* binding */ debug_AllObjFloatListKeys),
/* harmony export */   "debug_AllObjStringListKeys": () => (/* binding */ debug_AllObjStringListKeys),
/* harmony export */   "debug_AllObjFormListKeys": () => (/* binding */ debug_AllObjFormListKeys),
/* harmony export */   "debug_GetIntObjectCount": () => (/* binding */ debug_GetIntObjectCount),
/* harmony export */   "debug_GetFloatObjectCount": () => (/* binding */ debug_GetFloatObjectCount),
/* harmony export */   "debug_GetStringObjectCount": () => (/* binding */ debug_GetStringObjectCount),
/* harmony export */   "debug_GetFormObjectCount": () => (/* binding */ debug_GetFormObjectCount),
/* harmony export */   "debug_GetIntListObjectCount": () => (/* binding */ debug_GetIntListObjectCount),
/* harmony export */   "debug_GetFloatListObjectCount": () => (/* binding */ debug_GetFloatListObjectCount),
/* harmony export */   "debug_GetStringListObjectCount": () => (/* binding */ debug_GetStringListObjectCount),
/* harmony export */   "debug_GetFormListObjectCount": () => (/* binding */ debug_GetFormListObjectCount),
/* harmony export */   "debug_GetIntObject": () => (/* binding */ debug_GetIntObject),
/* harmony export */   "debug_GetFloatObject": () => (/* binding */ debug_GetFloatObject),
/* harmony export */   "debug_GetStringObject": () => (/* binding */ debug_GetStringObject),
/* harmony export */   "debug_GetFormObject": () => (/* binding */ debug_GetFormObject),
/* harmony export */   "debug_GetIntListObject": () => (/* binding */ debug_GetIntListObject),
/* harmony export */   "debug_GetFloatListObject": () => (/* binding */ debug_GetFloatListObject),
/* harmony export */   "debug_GetStringListObject": () => (/* binding */ debug_GetStringListObject),
/* harmony export */   "debug_GetFormListObject": () => (/* binding */ debug_GetFormListObject),
/* harmony export */   "debug_GetIntKeysCount": () => (/* binding */ debug_GetIntKeysCount),
/* harmony export */   "debug_GetFloatKeysCount": () => (/* binding */ debug_GetFloatKeysCount),
/* harmony export */   "debug_GetStringKeysCount": () => (/* binding */ debug_GetStringKeysCount),
/* harmony export */   "debug_GetFormKeysCount": () => (/* binding */ debug_GetFormKeysCount),
/* harmony export */   "debug_GetIntListKeysCount": () => (/* binding */ debug_GetIntListKeysCount),
/* harmony export */   "debug_GetFloatListKeysCount": () => (/* binding */ debug_GetFloatListKeysCount),
/* harmony export */   "debug_GetStringListKeysCount": () => (/* binding */ debug_GetStringListKeysCount),
/* harmony export */   "debug_GetFormListKeysCount": () => (/* binding */ debug_GetFormListKeysCount),
/* harmony export */   "debug_GetIntKey": () => (/* binding */ debug_GetIntKey),
/* harmony export */   "debug_GetFloatKey": () => (/* binding */ debug_GetFloatKey),
/* harmony export */   "debug_GetStringKey": () => (/* binding */ debug_GetStringKey),
/* harmony export */   "debug_GetFormKey": () => (/* binding */ debug_GetFormKey),
/* harmony export */   "debug_GetIntListKey": () => (/* binding */ debug_GetIntListKey),
/* harmony export */   "debug_GetFloatListKey": () => (/* binding */ debug_GetFloatListKey),
/* harmony export */   "debug_GetStringListKey": () => (/* binding */ debug_GetStringListKey),
/* harmony export */   "debug_GetFormListKey": () => (/* binding */ debug_GetFormListKey),
/* harmony export */   "FileSetIntValue": () => (/* binding */ FileSetIntValue),
/* harmony export */   "FileSetFloatValue": () => (/* binding */ FileSetFloatValue),
/* harmony export */   "FileSetStringValue": () => (/* binding */ FileSetStringValue),
/* harmony export */   "FileSetFormValue": () => (/* binding */ FileSetFormValue),
/* harmony export */   "FileAdjustIntValue": () => (/* binding */ FileAdjustIntValue),
/* harmony export */   "FileAdjustFloatValue": () => (/* binding */ FileAdjustFloatValue),
/* harmony export */   "FileUnsetIntValue": () => (/* binding */ FileUnsetIntValue),
/* harmony export */   "FileUnsetFloatValue": () => (/* binding */ FileUnsetFloatValue),
/* harmony export */   "FileUnsetStringValue": () => (/* binding */ FileUnsetStringValue),
/* harmony export */   "FileUnsetFormValue": () => (/* binding */ FileUnsetFormValue),
/* harmony export */   "FileHasIntValue": () => (/* binding */ FileHasIntValue),
/* harmony export */   "FileHasFloatValue": () => (/* binding */ FileHasFloatValue),
/* harmony export */   "FileHasStringValue": () => (/* binding */ FileHasStringValue),
/* harmony export */   "FileHasFormValue": () => (/* binding */ FileHasFormValue),
/* harmony export */   "FileGetIntValue": () => (/* binding */ FileGetIntValue),
/* harmony export */   "FileGetFloatValue": () => (/* binding */ FileGetFloatValue),
/* harmony export */   "FileGetStringValue": () => (/* binding */ FileGetStringValue),
/* harmony export */   "FileGetFormValue": () => (/* binding */ FileGetFormValue),
/* harmony export */   "FileIntListAdd": () => (/* binding */ FileIntListAdd),
/* harmony export */   "FileFloatListAdd": () => (/* binding */ FileFloatListAdd),
/* harmony export */   "FileStringListAdd": () => (/* binding */ FileStringListAdd),
/* harmony export */   "FileFormListAdd": () => (/* binding */ FileFormListAdd),
/* harmony export */   "FileIntListAdjust": () => (/* binding */ FileIntListAdjust),
/* harmony export */   "FileFloatListAdjust": () => (/* binding */ FileFloatListAdjust),
/* harmony export */   "FileIntListRemove": () => (/* binding */ FileIntListRemove),
/* harmony export */   "FileFloatListRemove": () => (/* binding */ FileFloatListRemove),
/* harmony export */   "FileStringListRemove": () => (/* binding */ FileStringListRemove),
/* harmony export */   "FileFormListRemove": () => (/* binding */ FileFormListRemove),
/* harmony export */   "FileIntListGet": () => (/* binding */ FileIntListGet),
/* harmony export */   "FileFloatListGet": () => (/* binding */ FileFloatListGet),
/* harmony export */   "FileStringListGet": () => (/* binding */ FileStringListGet),
/* harmony export */   "FileFormListGet": () => (/* binding */ FileFormListGet),
/* harmony export */   "FileIntListSet": () => (/* binding */ FileIntListSet),
/* harmony export */   "FileFloatListSet": () => (/* binding */ FileFloatListSet),
/* harmony export */   "FileStringListSet": () => (/* binding */ FileStringListSet),
/* harmony export */   "FileFormListSet": () => (/* binding */ FileFormListSet),
/* harmony export */   "FileIntListClear": () => (/* binding */ FileIntListClear),
/* harmony export */   "FileFloatListClear": () => (/* binding */ FileFloatListClear),
/* harmony export */   "FileStringListClear": () => (/* binding */ FileStringListClear),
/* harmony export */   "FileFormListClear": () => (/* binding */ FileFormListClear),
/* harmony export */   "FileIntListRemoveAt": () => (/* binding */ FileIntListRemoveAt),
/* harmony export */   "FileFloatListRemoveAt": () => (/* binding */ FileFloatListRemoveAt),
/* harmony export */   "FileStringListRemoveAt": () => (/* binding */ FileStringListRemoveAt),
/* harmony export */   "FileFormListRemoveAt": () => (/* binding */ FileFormListRemoveAt),
/* harmony export */   "FileIntListInsert": () => (/* binding */ FileIntListInsert),
/* harmony export */   "FileFloatListInsert": () => (/* binding */ FileFloatListInsert),
/* harmony export */   "FileStringListInsert": () => (/* binding */ FileStringListInsert),
/* harmony export */   "FileFormListInsert": () => (/* binding */ FileFormListInsert),
/* harmony export */   "FileIntListCount": () => (/* binding */ FileIntListCount),
/* harmony export */   "FileFloatListCount": () => (/* binding */ FileFloatListCount),
/* harmony export */   "FileStringListCount": () => (/* binding */ FileStringListCount),
/* harmony export */   "FileFormListCount": () => (/* binding */ FileFormListCount),
/* harmony export */   "FileIntListFind": () => (/* binding */ FileIntListFind),
/* harmony export */   "FileFloatListFind": () => (/* binding */ FileFloatListFind),
/* harmony export */   "FileStringListFind": () => (/* binding */ FileStringListFind),
/* harmony export */   "FileFormListFind": () => (/* binding */ FileFormListFind),
/* harmony export */   "FileIntListHas": () => (/* binding */ FileIntListHas),
/* harmony export */   "FileFloatListHas": () => (/* binding */ FileFloatListHas),
/* harmony export */   "FileStringListHas": () => (/* binding */ FileStringListHas),
/* harmony export */   "FileFormListHas": () => (/* binding */ FileFormListHas),
/* harmony export */   "FileIntListSlice": () => (/* binding */ FileIntListSlice),
/* harmony export */   "FileFloatListSlice": () => (/* binding */ FileFloatListSlice),
/* harmony export */   "FileStringListSlice": () => (/* binding */ FileStringListSlice),
/* harmony export */   "FileFormListSlice": () => (/* binding */ FileFormListSlice),
/* harmony export */   "FileIntListResize": () => (/* binding */ FileIntListResize),
/* harmony export */   "FileFloatListResize": () => (/* binding */ FileFloatListResize),
/* harmony export */   "FileStringListResize": () => (/* binding */ FileStringListResize),
/* harmony export */   "FileFormListResize": () => (/* binding */ FileFormListResize),
/* harmony export */   "FileIntListCopy": () => (/* binding */ FileIntListCopy),
/* harmony export */   "FileFloatListCopy": () => (/* binding */ FileFloatListCopy),
/* harmony export */   "FileStringListCopy": () => (/* binding */ FileStringListCopy),
/* harmony export */   "FileFormListCopy": () => (/* binding */ FileFormListCopy),
/* harmony export */   "debug_SaveFile": () => (/* binding */ debug_SaveFile),
/* harmony export */   "debug_FileGetIntKeysCount": () => (/* binding */ debug_FileGetIntKeysCount),
/* harmony export */   "debug_FileGetFloatKeysCount": () => (/* binding */ debug_FileGetFloatKeysCount),
/* harmony export */   "debug_FileGetStringKeysCount": () => (/* binding */ debug_FileGetStringKeysCount),
/* harmony export */   "debug_FileGetIntListKeysCount": () => (/* binding */ debug_FileGetIntListKeysCount),
/* harmony export */   "debug_FileGetFloatListKeysCount": () => (/* binding */ debug_FileGetFloatListKeysCount),
/* harmony export */   "debug_FileGetStringListKeysCount": () => (/* binding */ debug_FileGetStringListKeysCount),
/* harmony export */   "debug_FileGetIntKey": () => (/* binding */ debug_FileGetIntKey),
/* harmony export */   "debug_FileGetFloatKey": () => (/* binding */ debug_FileGetFloatKey),
/* harmony export */   "debug_FileGetStringKey": () => (/* binding */ debug_FileGetStringKey),
/* harmony export */   "debug_FileGetIntListKey": () => (/* binding */ debug_FileGetIntListKey),
/* harmony export */   "debug_FileGetFloatListKey": () => (/* binding */ debug_FileGetFloatListKey),
/* harmony export */   "debug_FileGetStringListKey": () => (/* binding */ debug_FileGetStringListKey),
/* harmony export */   "debug_FileDeleteAllValues": () => (/* binding */ debug_FileDeleteAllValues),
/* harmony export */   "debug_SetDebugMode": () => (/* binding */ debug_SetDebugMode),
/* harmony export */   "ImportFile": () => (/* binding */ ImportFile),
/* harmony export */   "ExportFile": () => (/* binding */ ExportFile)
/* harmony export */ });
/* harmony import */ var skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var skyrimPlatform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__);
/*
==============================================
Typescript definitions for v4.2
==============================================

This file was automatically generated by Papyrus-2-Typescript.exe
https://github.com/CarlosLeyvaAyala/Papyrus-2-Typescript

The program has no way to know the intention of the humans that made
the scripts, so it's always advisable to manually check all generated
files to make sure everything is declared as it should.

Take note the program assumes this script exists in some subfolder
to the folder where `skyrimPlatform.ts` is found, otherwise you'll get
"Cannot find module..." type of errors.

If you want to have this script in some other place, just change the
relative path of each `import`.
*/

var sn = skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.StorageUtil;
/** MOD AUTHORS, READ!

    This script contains functions for saving and loading any amount of int, float, form and string values
    by name on a form or globally. These values can be accessed and changed from any mod which allows
    mods to become compatible with each other without adding any requirements to the other mod or its version
    other than this plugin.

    Values will stay on forms or globally until they are Unset or Cleared in case of lists. If value
    is set on a form and the object is deleted then THE value will be removed when saving game.
    If you are done with using a certain variable you should use Unset or Clear function to remove them
    but it is not required.

    Saving MCM config values here would allow other mods to change your mod settings which may
    be useful. It should also allow you to change MCM config script without worrying about versioning
    since there are no new variables in the script itself.

    Functions that start with File in the name will save values to a separate file, so that you can
    access the same values from all savegames. This may be useful for configuration settings.
   (FILE FUNCTIONS ARE DEPRECATED! USE JSONUTIL.PSC INSTEAD)

    Saved values take very little memory - expect to use less than 500 KB of physical memory even when
    setting thousands of values.

    Value names are not case sensitive, that means GetIntValue(none, "abc") == GetIntValue(none, "aBC").

    All values are separated from each other by type! That means SetIntValue(none, "abc", 1) and
    SetFloatValue(none, "abc", 2.0) create separate entries and aren't affected by each other.
    StorageUtil.SetIntValue(none, "myValue", 1)
    StorageUtil.SetFloatValue(none, "myValue", 5.0)
    int value = StorageUtil.GetIntValue(none, "myValue")
    value == 1 ; true
    value == 5 ; false

    When choosing names for variables try to remember that all mods access the same storage, so if you
    create a variable with name "Name" then many other mods could use the same variable but in different
    ways that lead to unwanted behavior. It is recommended to prefix the variable with your mod name,
    that way you can be sure nobody else will try to use the same variable in their mod. For example
    realistic needs and diseases might set hunger as "rnd_hungervalue".

    You can also use this storage to make your mod functions available to other mods, for example if
    your mod has a function that sets an Actor to be invisible you could add a script that checks:
    int i = StorageUtil.FormListCount(none, "MakeInvisible")
    while(i > 0)
        i--
        Actor make = StorageUtil.FormListGet(none, "MakeInvisible", i) as Actor
        if(make)
            MyScriptFunction(make)
        endif
        StorageUtil.FormListRemoveAt(none, "MakeInvisible", i)
    endwhile
    And the other mod could write:
    StorageUtil.FormListAdd(none, "MakeInvisible", myActor)
    to make someone invisible using your mod. But if your mod isn't present then nothing happens.
    This is just an example, I'm sure you can find better ways to implement compatibility, it would
    help to include a documentation for other modders if you do.
/**





/**
    Storage functions - values in save game file. */
/** Set int/float/string/Form value globally or on any form by name and return
   the value passed, or as uninitialized variable if invalid keys given.

   ObjKey: form to save on. Set none to save globally.
   KeyName: name of value.
   value: value to set to the given keys. If zero, empty, or none are given, the key will be unset. */
var SetIntValue = function (ObjKey, KeyName, value) { return sn.SetIntValue(ObjKey, KeyName, value); };
var SetFloatValue = function (ObjKey, KeyName, value) { return sn.SetFloatValue(ObjKey, KeyName, value); };
var SetStringValue = function (ObjKey, KeyName, value) { return sn.SetStringValue(ObjKey, KeyName, value); };
var SetFormValue = function (ObjKey, KeyName, value) { return sn.SetFormValue(ObjKey, KeyName, value); };
/** Remove a previously set int/float/string/Form value on an form or globally and
if successful. This will return false if value didn't exist.

   ObjKey: form to remove from. Set none to remove global value.
   KeyName: name of value. */
var UnsetIntValue = function (ObjKey, KeyName) { return sn.UnsetIntValue(ObjKey, KeyName); };
var UnsetFloatValue = function (ObjKey, KeyName) { return sn.UnsetFloatValue(ObjKey, KeyName); };
var UnsetStringValue = function (ObjKey, KeyName) { return sn.UnsetStringValue(ObjKey, KeyName); };
var UnsetFormValue = function (ObjKey, KeyName) { return sn.UnsetFormValue(ObjKey, KeyName); };
/** Check if int/float/string/Form value has been set on form or globally.

   ObjKey: form to check on. Set none to check global value.
   KeyName: name of value. */
var HasIntValue = function (ObjKey, KeyName) { return sn.HasIntValue(ObjKey, KeyName); };
var HasFloatValue = function (ObjKey, KeyName) { return sn.HasFloatValue(ObjKey, KeyName); };
var HasStringValue = function (ObjKey, KeyName) { return sn.HasStringValue(ObjKey, KeyName); };
var HasFormValue = function (ObjKey, KeyName) { return sn.HasFormValue(ObjKey, KeyName); };
/** Get previously saved int/float/string/Form value on form or globally.

   ObjKey: form to get from. Set none to get global value.
   KeyName: name of value.
   [optional] missing: if value has not been set, return this value instead. */
var GetIntValue = function (ObjKey, KeyName, missing) {
    if (missing === void 0) { missing = 0; }
    return sn.GetIntValue(ObjKey, KeyName, missing);
};
var GetFloatValue = function (ObjKey, KeyName, missing) {
    if (missing === void 0) { missing = 0.0; }
    return sn.GetFloatValue(ObjKey, KeyName, missing);
};
var GetStringValue = function (ObjKey, KeyName, missing) {
    if (missing === void 0) { missing = ""; }
    return sn.GetStringValue(ObjKey, KeyName, missing);
};
var GetFormValue = function (ObjKey, KeyName, missing) {
    if (missing === void 0) { missing = null; }
    return sn.GetFormValue(ObjKey, KeyName, missing);
};
/** Plucks a previously saved int/float/string/Form value on form or globally.
   Returning the value stored, then removing it from storage.

   ObjKey: form to pluck from. Set none to get global value.
   KeyName: name of value.
   [optional] missing: if value has not been set, return this value instead. */
var PluckIntValue = function (ObjKey, KeyName, missing) {
    if (missing === void 0) { missing = 0; }
    return sn.PluckIntValue(ObjKey, KeyName, missing);
};
var PluckFloatValue = function (ObjKey, KeyName, missing) {
    if (missing === void 0) { missing = 0.0; }
    return sn.PluckFloatValue(ObjKey, KeyName, missing);
};
var PluckStringValue = function (ObjKey, KeyName, missing) {
    if (missing === void 0) { missing = ""; }
    return sn.PluckStringValue(ObjKey, KeyName, missing);
};
var PluckFormValue = function (ObjKey, KeyName, missing) {
    if (missing === void 0) { missing = null; }
    return sn.PluckFormValue(ObjKey, KeyName, missing);
};
/** Get previously saved int/float/string/Form value on form or globally.

   ObjKey: form to get from. Set none to get global value.
   KeyName: name of value.
   amount: +/- the amount to adjust the current value by

   given keys will be initialized to given amount if it does not exist */
var AdjustIntValue = function (ObjKey, KeyName, amount) { return sn.AdjustIntValue(ObjKey, KeyName, amount); };
var AdjustFloatValue = function (ObjKey, KeyName, amount) { return sn.AdjustFloatValue(ObjKey, KeyName, amount); };
/** Add an int/float/string/Form to a list on form or globally and return
   the value's new index. Index can be -1 if we were unable to add
   the value.

   ObjKey: form to add to. Set none to add global value.
   KeyName: name of value.
   value: value to add.
   [optional] allowDuplicate: allow adding value to list if this value already exists in the list. */
var IntListAdd = function (ObjKey, KeyName, value, allowDuplicate) {
    if (allowDuplicate === void 0) { allowDuplicate = true; }
    return sn.IntListAdd(ObjKey, KeyName, value, allowDuplicate);
};
var FloatListAdd = function (ObjKey, KeyName, value, allowDuplicate) {
    if (allowDuplicate === void 0) { allowDuplicate = true; }
    return sn.FloatListAdd(ObjKey, KeyName, value, allowDuplicate);
};
var StringListAdd = function (ObjKey, KeyName, value, allowDuplicate) {
    if (allowDuplicate === void 0) { allowDuplicate = true; }
    return sn.StringListAdd(ObjKey, KeyName, value, allowDuplicate);
};
var FormListAdd = function (ObjKey, KeyName, value, allowDuplicate) {
    if (allowDuplicate === void 0) { allowDuplicate = true; }
    return sn.FormListAdd(ObjKey, KeyName, value, allowDuplicate);
};
/** Get a value from list by index on form or globally.
   This will return 0 as value if there was a problem.

   ObjKey: form to get value on. Set none to get global list value.
   KeyName: name of list.
   index: index of value in the list. */
var IntListGet = function (ObjKey, KeyName, index) { return sn.IntListGet(ObjKey, KeyName, index); };
var FloatListGet = function (ObjKey, KeyName, index) { return sn.FloatListGet(ObjKey, KeyName, index); };
var StringListGet = function (ObjKey, KeyName, index) { return sn.StringListGet(ObjKey, KeyName, index); };
var FormListGet = function (ObjKey, KeyName, index) { return sn.FormListGet(ObjKey, KeyName, index); };
/** Set a value in list by index on form or globally.
   This will return the previous value or 0 if there was a problem.

   ObjKey: form to set value on. Set none to set global list value.
   KeyName: name of list.
   index: index of value in the list.
   value: value to set to. */
var IntListSet = function (ObjKey, KeyName, index, value) { return sn.IntListSet(ObjKey, KeyName, index, value); };
var FloatListSet = function (ObjKey, KeyName, index, value) { return sn.FloatListSet(ObjKey, KeyName, index, value); };
var StringListSet = function (ObjKey, KeyName, index, value) { return sn.StringListSet(ObjKey, KeyName, index, value); };
var FormListSet = function (ObjKey, KeyName, index, value) { return sn.FormListSet(ObjKey, KeyName, index, value); };
/** Plucks a value from list by index on form or globally.
   The index is removed from the list's storage after returning it's value.

   ObjKey: form to pluck value from. Set none to get global list value.
   KeyName: name of list.
   index: index of value in the list.
   [optional] missing: if index has not been set, return this value instead. */
var IntListPluck = function (ObjKey, KeyName, index, missing) { return sn.IntListPluck(ObjKey, KeyName, index, missing); };
var FloatListPluck = function (ObjKey, KeyName, index, missing) { return sn.FloatListPluck(ObjKey, KeyName, index, missing); };
var StringListPluck = function (ObjKey, KeyName, index, missing) { return sn.StringListPluck(ObjKey, KeyName, index, missing); };
var FormListPluck = function (ObjKey, KeyName, index, missing) { return sn.FormListPluck(ObjKey, KeyName, index, missing); };
/** Gets the value of the very first element in a list, and subsequently removes the index afterward.

   ObjKey: form to shift value from. Set none to get global list value.
   KeyName: name of list to shift it's first value from. */
var IntListShift = function (ObjKey, KeyName) { return sn.IntListShift(ObjKey, KeyName); };
var FloatListShift = function (ObjKey, KeyName) { return sn.FloatListShift(ObjKey, KeyName); };
var StringListShift = function (ObjKey, KeyName) { return sn.StringListShift(ObjKey, KeyName); };
var FormListShift = function (ObjKey, KeyName) { return sn.FormListShift(ObjKey, KeyName); };
/** Gets the value of the very last element in a list, and subsequently removes the index afterward.

   ObjKey: form to pop value from. Set none to get global list value.
   KeyName: name of list to pop off it's last value. */
var IntListPop = function (ObjKey, KeyName) { return sn.IntListPop(ObjKey, KeyName); };
var FloatListPop = function (ObjKey, KeyName) { return sn.FloatListPop(ObjKey, KeyName); };
var StringListPop = function (ObjKey, KeyName) { return sn.StringListPop(ObjKey, KeyName); };
var FormListPop = function (ObjKey, KeyName) { return sn.FormListPop(ObjKey, KeyName); };
/** Adjust the existing value of a list by the given amount.

   ObjKey: form to set value on. Set none to set global list value.
   KeyName: name of list.
   index: index of value in the list.
   amount: +/- the amount to adjust the lists current index value by.

s 0 if index does not exists */
var IntListAdjust = function (ObjKey, KeyName, index, amount) { return sn.IntListAdjust(ObjKey, KeyName, index, amount); };
var FloatListAdjust = function (ObjKey, KeyName, index, amount) { return sn.FloatListAdjust(ObjKey, KeyName, index, amount); };
/** Insert an int/float/string/Form to a list on form or globally and return
   if successful.

   ObjKey: form to add to. Set none to add global value.
   KeyName: name of value.
   index: position in list to put the value. 0 is first entry in list.
   value: value to add. */
var IntListInsert = function (ObjKey, KeyName, index, value) { return sn.IntListInsert(ObjKey, KeyName, index, value); };
var FloatListInsert = function (ObjKey, KeyName, index, value) { return sn.FloatListInsert(ObjKey, KeyName, index, value); };
var StringListInsert = function (ObjKey, KeyName, index, value) { return sn.StringListInsert(ObjKey, KeyName, index, value); };
var FormListInsert = function (ObjKey, KeyName, index, value) { return sn.FormListInsert(ObjKey, KeyName, index, value); };
/** Remove a previously added int/float/string/Form value from a list on form
   or globally and return how many instances of this value were removed.

   ObjKey: form to remove from. Set none to remove global value.
   KeyName: name of value.
   value: value to remove.
   [optional] allowInstances: remove all instances of this value in a list. */
var IntListRemove = function (ObjKey, KeyName, value, allInstances) {
    if (allInstances === void 0) { allInstances = false; }
    return sn.IntListRemove(ObjKey, KeyName, value, allInstances);
};
var FloatListRemove = function (ObjKey, KeyName, value, allInstances) {
    if (allInstances === void 0) { allInstances = false; }
    return sn.FloatListRemove(ObjKey, KeyName, value, allInstances);
};
var StringListRemove = function (ObjKey, KeyName, value, allInstances) {
    if (allInstances === void 0) { allInstances = false; }
    return sn.StringListRemove(ObjKey, KeyName, value, allInstances);
};
var FormListRemove = function (ObjKey, KeyName, value, allInstances) {
    if (allInstances === void 0) { allInstances = false; }
    return sn.FormListRemove(ObjKey, KeyName, value, allInstances);
};
/** Clear a list of values (unset) on an form or globally and
the previous size of list.

   ObjKey: form to clear on. Set none to clear global list.
   KeyName: name of list. */
var IntListClear = function (ObjKey, KeyName) { return sn.IntListClear(ObjKey, KeyName); };
var FloatListClear = function (ObjKey, KeyName) { return sn.FloatListClear(ObjKey, KeyName); };
var StringListClear = function (ObjKey, KeyName) { return sn.StringListClear(ObjKey, KeyName); };
var FormListClear = function (ObjKey, KeyName) { return sn.FormListClear(ObjKey, KeyName); };
/** Remove a value from list by index on form or globally and
if we were successful in doing so.

   ObjKey: form to remove from. Set none to remove global value.
   KeyName: name of list.
   index: index of value in the list. */
var IntListRemoveAt = function (ObjKey, KeyName, index) { return sn.IntListRemoveAt(ObjKey, KeyName, index); };
var FloatListRemoveAt = function (ObjKey, KeyName, index) { return sn.FloatListRemoveAt(ObjKey, KeyName, index); };
var StringListRemoveAt = function (ObjKey, KeyName, index) { return sn.StringListRemoveAt(ObjKey, KeyName, index); };
var FormListRemoveAt = function (ObjKey, KeyName, index) { return sn.FormListRemoveAt(ObjKey, KeyName, index); };
/** Get size of a list on form or globally.

   ObjKey: form to check on. Set none to check global list.
   KeyName: name of list. */
var IntListCount = function (ObjKey, KeyName) { return sn.IntListCount(ObjKey, KeyName); };
var FloatListCount = function (ObjKey, KeyName) { return sn.FloatListCount(ObjKey, KeyName); };
var StringListCount = function (ObjKey, KeyName) { return sn.StringListCount(ObjKey, KeyName); };
var FormListCount = function (ObjKey, KeyName) { return sn.FormListCount(ObjKey, KeyName); };
/** Get the number of occurrences of a specific value within a list.

   ObjKey: form to check on. Set none to check global list.
   KeyName: name of list.
   value: value to look for.
   [optional] exclude: if true, function will return number of elements NOT equal to value. */
var IntListCountValue = function (ObjKey, KeyName, value, exclude) {
    if (exclude === void 0) { exclude = false; }
    return sn.IntListCountValue(ObjKey, KeyName, value, exclude);
};
var FloatListCountValue = function (ObjKey, KeyName, value, exclude) {
    if (exclude === void 0) { exclude = false; }
    return sn.FloatListCountValue(ObjKey, KeyName, value, exclude);
};
var StringListCountValue = function (ObjKey, KeyName, value, exclude) {
    if (exclude === void 0) { exclude = false; }
    return sn.StringListCountValue(ObjKey, KeyName, value, exclude);
};
var FormListCountValue = function (ObjKey, KeyName, value, exclude) {
    if (exclude === void 0) { exclude = false; }
    return sn.FormListCountValue(ObjKey, KeyName, value, exclude);
};
/** Find a value in list on form or globally and return its
   index or -1 if value was not found.

   ObjKey: form to find value on. Set none to find global list value.
   KeyName: name of list.
   value: value to search. */
var IntListFind = function (ObjKey, KeyName, value) { return sn.IntListFind(ObjKey, KeyName, value); };
var FloatListFind = function (ObjKey, KeyName, value) { return sn.FloatListFind(ObjKey, KeyName, value); };
var StringListFind = function (ObjKey, KeyName, value) { return sn.StringListFind(ObjKey, KeyName, value); };
var FormListFind = function (ObjKey, KeyName, value) { return sn.FormListFind(ObjKey, KeyName, value); };
/** Find if a value in list on form or globally exists, true if it exists,
   false if it doesn't.

   ObjKey: form to find value on. Set none to find global list value.
   KeyName: name of list.
   value: value to search. */
var IntListHas = function (ObjKey, KeyName, value) { return sn.IntListHas(ObjKey, KeyName, value); };
var FloatListHas = function (ObjKey, KeyName, value) { return sn.FloatListHas(ObjKey, KeyName, value); };
var StringListHas = function (ObjKey, KeyName, value) { return sn.StringListHas(ObjKey, KeyName, value); };
var FormListHas = function (ObjKey, KeyName, value) { return sn.FormListHas(ObjKey, KeyName, value); };
/** Sort an int/float/string/Form list by values in ascending order.

   ObjKey: form to sort on. Set none for global value.
   KeyName: name of value. */
var IntListSort = function (ObjKey, KeyName) { return sn.IntListSort(ObjKey, KeyName); };
var FloatListSort = function (ObjKey, KeyName) { return sn.FloatListSort(ObjKey, KeyName); };
var StringListSort = function (ObjKey, KeyName) { return sn.StringListSort(ObjKey, KeyName); };
var FormListSort = function (ObjKey, KeyName) { return sn.FormListSort(ObjKey, KeyName); };
/** Fills the given input array with the values of the list on form or globally,
   will fill the array until either the array or list runs out of valid indexes

   ObjKey: form to find value on. Set none to find global list value.
   KeyName: name of list.
   slice[]: an initialized array set to the slice size you want, i.e. int[] slice = new int[10]
   [optional] startIndex: the starting list index you want to start filling your slice array with */
var IntListSlice = function (ObjKey, KeyName, slice, startIndex) {
    if (startIndex === void 0) { startIndex = 0; }
    return sn.IntListSlice(ObjKey, KeyName, slice, startIndex);
};
var FloatListSlice = function (ObjKey, KeyName, slice, startIndex) {
    if (startIndex === void 0) { startIndex = 0; }
    return sn.FloatListSlice(ObjKey, KeyName, slice, startIndex);
};
var StringListSlice = function (ObjKey, KeyName, slice, startIndex) {
    if (startIndex === void 0) { startIndex = 0; }
    return sn.StringListSlice(ObjKey, KeyName, slice, startIndex);
};
var FormListSlice = function (ObjKey, KeyName, slice, startIndex) {
    if (startIndex === void 0) { startIndex = 0; }
    return sn.FormListSlice(ObjKey, KeyName, slice, startIndex);
};
/** Sizes the given list to a set number of elements. If the list exists already it will be truncated
   when given fewer elements, or resized to the appropriate length with the filler argument being used as
   the default values

   Returns the number of elements truncated (signed) or added (unsigned) onto the list.

   ObjKey: form to find value on. Set none to find global list value.
   KeyName: name of list.
   toLength: The size you want to change the list to. Max length when using this function is 500.
   [optional] filler: When adding empty elements to the list this will be used as the default value */
var IntListResize = function (ObjKey, KeyName, toLength, filler) {
    if (filler === void 0) { filler = 0; }
    return sn.IntListResize(ObjKey, KeyName, toLength, filler);
};
var FloatListResize = function (ObjKey, KeyName, toLength, filler) {
    if (filler === void 0) { filler = 0.0; }
    return sn.FloatListResize(ObjKey, KeyName, toLength, filler);
};
var StringListResize = function (ObjKey, KeyName, toLength, filler) {
    if (filler === void 0) { filler = ""; }
    return sn.StringListResize(ObjKey, KeyName, toLength, filler);
};
var FormListResize = function (ObjKey, KeyName, toLength, filler) {
    if (filler === void 0) { filler = null; }
    return sn.FormListResize(ObjKey, KeyName, toLength, filler);
};
/** Creates a copy of array on the given storage list at the given object+key,
   overwriting any list that might already exists.

   Returns true on success.

   ObjKey: form to find value on. Set none to find global list value.
   KeyName: name of list.
   copy[]: The papyrus array with the content you wish to copy over into StorageUtil
   [optional] filler: When adding empty elements to the list this will be used as the default value */
var IntListCopy = function (ObjKey, KeyName, copy) { return sn.IntListCopy(ObjKey, KeyName, copy); };
var FloatListCopy = function (ObjKey, KeyName, copy) { return sn.FloatListCopy(ObjKey, KeyName, copy); };
var StringListCopy = function (ObjKey, KeyName, copy) { return sn.StringListCopy(ObjKey, KeyName, copy); };
var FormListCopy = function (ObjKey, KeyName, copy) { return sn.FormListCopy(ObjKey, KeyName, copy); };
/** Outputs the values currently stored by the given object+key.

   Returns a new array containing the values.

   ObjKey: form to find value on. Set none to find global list value.
   KeyName: name of list. */
var IntListToArray = function (ObjKey, KeyName) { return sn.IntListToArray(ObjKey, KeyName); };
var FloatListToArray = function (ObjKey, KeyName) { return sn.FloatListToArray(ObjKey, KeyName); };
var StringListToArray = function (ObjKey, KeyName) { return sn.StringListToArray(ObjKey, KeyName); };
var FormListToArray = function (ObjKey, KeyName) { return sn.FormListToArray(ObjKey, KeyName); };
/** Returns array of forms from list that have (or optionally don't have) the specified form types.
   For valid list of form types, see FormType.psc or http://www.creationkit.com/GetType_-_Form

   ObjKey: form to find value on. Set none to find global list value.
   KeyName: name of list.
   FormTypeIDs[]: The int papyrus array with all the form types you wish to filter for
   [optional] ReturnMatching: By default, TRUE, the output Form[] array will contain forms from list that match the form types
                              If set to FALSE, inverts the resulting array with forms that have a type that DO NOT match. */
var FormListFilterByTypes = function (ObjKey, KeyName, FormTypeIDs, ReturnMatching) {
    if (ReturnMatching === void 0) { ReturnMatching = true; }
    return sn.FormListFilterByTypes(ObjKey, KeyName, FormTypeIDs, ReturnMatching);
};
// Convenience version of FormListFilterByTypes() for when only getting a single type.
var FormListFilterByType = function (ObjKey, KeyName, FormTypeID, ReturnMatching) {
    if (ReturnMatching === void 0) { ReturnMatching = true; }
    return sn.FormListFilterByType(ObjKey, KeyName, FormTypeID, ReturnMatching);
};
/** Counts each type of of any KeyName that starts with a given string prefix on all objects.

   PrefixKey: The string a KeyName must start with to be counted. Cannot be empty. */
var CountIntValuePrefix = function (PrefixKey) { return sn.CountIntValuePrefix(PrefixKey); };
var CountFloatValuePrefix = function (PrefixKey) { return sn.CountFloatValuePrefix(PrefixKey); };
var CountStringValuePrefix = function (PrefixKey) { return sn.CountStringValuePrefix(PrefixKey); };
var CountFormValuePrefix = function (PrefixKey) { return sn.CountFormValuePrefix(PrefixKey); };
var CountIntListPrefix = function (PrefixKey) { return sn.CountIntListPrefix(PrefixKey); };
var CountFloatListPrefix = function (PrefixKey) { return sn.CountFloatListPrefix(PrefixKey); };
var CountStringListPrefix = function (PrefixKey) { return sn.CountStringListPrefix(PrefixKey); };
var CountFormListPrefix = function (PrefixKey) { return sn.CountFormListPrefix(PrefixKey); };
// Performs all of the above prefix counts in one go.
var CountAllPrefix = function (PrefixKey) { return sn.CountAllPrefix(PrefixKey); };
/** Counts each type of of any KeyName that starts with a given string prefix on all objects.

   ObjKey: form to perform the prefix count on.
   PrefixKey: The string a KeyName must start with to be counted. Cannot be empty. */
var CountObjIntValuePrefix = function (ObjKey, PrefixKey) { return sn.CountObjIntValuePrefix(ObjKey, PrefixKey); };
var CountObjFloatValuePrefix = function (ObjKey, PrefixKey) { return sn.CountObjFloatValuePrefix(ObjKey, PrefixKey); };
var CountObjStringValuePrefix = function (ObjKey, PrefixKey) { return sn.CountObjStringValuePrefix(ObjKey, PrefixKey); };
var CountObjFormValuePrefix = function (ObjKey, PrefixKey) { return sn.CountObjFormValuePrefix(ObjKey, PrefixKey); };
var CountObjIntListPrefix = function (ObjKey, PrefixKey) { return sn.CountObjIntListPrefix(ObjKey, PrefixKey); };
var CountObjFloatListPrefix = function (ObjKey, PrefixKey) { return sn.CountObjFloatListPrefix(ObjKey, PrefixKey); };
var CountObjStringListPrefix = function (ObjKey, PrefixKey) { return sn.CountObjStringListPrefix(ObjKey, PrefixKey); };
var CountObjFormListPrefix = function (ObjKey, PrefixKey) { return sn.CountObjFormListPrefix(ObjKey, PrefixKey); };
// Performs all of the above prefix counts in one go.
var CountAllObjPrefix = function (ObjKey, PrefixKey) { return sn.CountAllObjPrefix(ObjKey, PrefixKey); };
/** Clears each type of of any KeyName that starts with a given string prefix on all objects.
   Returns the number of values/lists that were unset.

   PrefixKey: The string a KeyName must start with to be cleared. Cannot be empty. */
var ClearIntValuePrefix = function (PrefixKey) { return sn.ClearIntValuePrefix(PrefixKey); };
var ClearFloatValuePrefix = function (PrefixKey) { return sn.ClearFloatValuePrefix(PrefixKey); };
var ClearStringValuePrefix = function (PrefixKey) { return sn.ClearStringValuePrefix(PrefixKey); };
var ClearFormValuePrefix = function (PrefixKey) { return sn.ClearFormValuePrefix(PrefixKey); };
var ClearIntListPrefix = function (PrefixKey) { return sn.ClearIntListPrefix(PrefixKey); };
var ClearFloatListPrefix = function (PrefixKey) { return sn.ClearFloatListPrefix(PrefixKey); };
var ClearStringListPrefix = function (PrefixKey) { return sn.ClearStringListPrefix(PrefixKey); };
var ClearFormListPrefix = function (PrefixKey) { return sn.ClearFormListPrefix(PrefixKey); };
// Performs all of the above prefix clears in one go.
var ClearAllPrefix = function (PrefixKey) { return sn.ClearAllPrefix(PrefixKey); };
/** Clears each type of of any KeyName that starts with a given string prefix on specific objects.
   Returns the number of values/lists that were unset.

   ObjKey: form to perform the prefix clear on.
   PrefixKey: The string a KeyName must start with to be cleared. Cannot be empty. */
var ClearObjIntValuePrefix = function (ObjKey, PrefixKey) { return sn.ClearObjIntValuePrefix(ObjKey, PrefixKey); };
var ClearObjFloatValuePrefix = function (ObjKey, PrefixKey) { return sn.ClearObjFloatValuePrefix(ObjKey, PrefixKey); };
var ClearObjStringValuePrefix = function (ObjKey, PrefixKey) { return sn.ClearObjStringValuePrefix(ObjKey, PrefixKey); };
var ClearObjFormValuePrefix = function (ObjKey, PrefixKey) { return sn.ClearObjFormValuePrefix(ObjKey, PrefixKey); };
var ClearObjIntListPrefix = function (ObjKey, PrefixKey) { return sn.ClearObjIntListPrefix(ObjKey, PrefixKey); };
var ClearObjFloatListPrefix = function (ObjKey, PrefixKey) { return sn.ClearObjFloatListPrefix(ObjKey, PrefixKey); };
var ClearObjStringListPrefix = function (ObjKey, PrefixKey) { return sn.ClearObjStringListPrefix(ObjKey, PrefixKey); };
var ClearObjFormListPrefix = function (ObjKey, PrefixKey) { return sn.ClearObjFormListPrefix(ObjKey, PrefixKey); };
// Performs all of the above prefix clears in one go.
var ClearAllObjPrefix = function (ObjKey, PrefixKey) { return sn.ClearAllObjPrefix(ObjKey, PrefixKey); };
/** Debug functions - can be helpful to find problems or for development. */
var debug_DeleteValues = function (ObjKey) { return sn.debug_DeleteValues(ObjKey); };
var debug_DeleteAllValues = function () { return sn.debug_DeleteAllValues(); };
var debug_Cleanup = function () { return sn.debug_Cleanup(); };
var debug_AllIntObjs = function () { return sn.debug_AllIntObjs(); };
var debug_AllFloatObjs = function () { return sn.debug_AllFloatObjs(); };
var debug_AllStringObjs = function () { return sn.debug_AllStringObjs(); };
var debug_AllFormObjs = function () { return sn.debug_AllFormObjs(); };
var debug_AllIntListObjs = function () { return sn.debug_AllIntListObjs(); };
var debug_AllFloatListObjs = function () { return sn.debug_AllFloatListObjs(); };
var debug_AllStringListObjs = function () { return sn.debug_AllStringListObjs(); };
var debug_AllFormListObjs = function () { return sn.debug_AllFormListObjs(); };
var debug_AllObjIntKeys = function (ObjKey) { return sn.debug_AllObjIntKeys(ObjKey); };
var debug_AllObjFloatKeys = function (ObjKey) { return sn.debug_AllObjFloatKeys(ObjKey); };
var debug_AllObjStringKeys = function (ObjKey) { return sn.debug_AllObjStringKeys(ObjKey); };
var debug_AllObjFormKeys = function (ObjKey) { return sn.debug_AllObjFormKeys(ObjKey); };
var debug_AllObjIntListKeys = function (ObjKey) { return sn.debug_AllObjIntListKeys(ObjKey); };
var debug_AllObjFloatListKeys = function (ObjKey) { return sn.debug_AllObjFloatListKeys(ObjKey); };
var debug_AllObjStringListKeys = function (ObjKey) { return sn.debug_AllObjStringListKeys(ObjKey); };
var debug_AllObjFormListKeys = function (ObjKey) { return sn.debug_AllObjFormListKeys(ObjKey); };
var debug_GetIntObjectCount = function () { return sn.debug_GetIntObjectCount(); };
var debug_GetFloatObjectCount = function () { return sn.debug_GetFloatObjectCount(); };
var debug_GetStringObjectCount = function () { return sn.debug_GetStringObjectCount(); };
var debug_GetFormObjectCount = function () { return sn.debug_GetFormObjectCount(); };
var debug_GetIntListObjectCount = function () { return sn.debug_GetIntListObjectCount(); };
var debug_GetFloatListObjectCount = function () { return sn.debug_GetFloatListObjectCount(); };
var debug_GetStringListObjectCount = function () { return sn.debug_GetStringListObjectCount(); };
var debug_GetFormListObjectCount = function () { return sn.debug_GetFormListObjectCount(); };
var debug_GetIntObject = function (index) { return sn.debug_GetIntObject(index); };
var debug_GetFloatObject = function (index) { return sn.debug_GetFloatObject(index); };
var debug_GetStringObject = function (index) { return sn.debug_GetStringObject(index); };
var debug_GetFormObject = function (index) { return sn.debug_GetFormObject(index); };
var debug_GetIntListObject = function (index) { return sn.debug_GetIntListObject(index); };
var debug_GetFloatListObject = function (index) { return sn.debug_GetFloatListObject(index); };
var debug_GetStringListObject = function (index) { return sn.debug_GetStringListObject(index); };
var debug_GetFormListObject = function (index) { return sn.debug_GetFormListObject(index); };
var debug_GetIntKeysCount = function (ObjKey) { return sn.debug_GetIntKeysCount(ObjKey); };
var debug_GetFloatKeysCount = function (ObjKey) { return sn.debug_GetFloatKeysCount(ObjKey); };
var debug_GetStringKeysCount = function (ObjKey) { return sn.debug_GetStringKeysCount(ObjKey); };
var debug_GetFormKeysCount = function (ObjKey) { return sn.debug_GetFormKeysCount(ObjKey); };
var debug_GetIntListKeysCount = function (ObjKey) { return sn.debug_GetIntListKeysCount(ObjKey); };
var debug_GetFloatListKeysCount = function (ObjKey) { return sn.debug_GetFloatListKeysCount(ObjKey); };
var debug_GetStringListKeysCount = function (ObjKey) { return sn.debug_GetStringListKeysCount(ObjKey); };
var debug_GetFormListKeysCount = function (ObjKey) { return sn.debug_GetFormListKeysCount(ObjKey); };
var debug_GetIntKey = function (ObjKey, index) { return sn.debug_GetIntKey(ObjKey, index); };
var debug_GetFloatKey = function (ObjKey, index) { return sn.debug_GetFloatKey(ObjKey, index); };
var debug_GetStringKey = function (ObjKey, index) { return sn.debug_GetStringKey(ObjKey, index); };
var debug_GetFormKey = function (ObjKey, index) { return sn.debug_GetFormKey(ObjKey, index); };
var debug_GetIntListKey = function (ObjKey, index) { return sn.debug_GetIntListKey(ObjKey, index); };
var debug_GetFloatListKey = function (ObjKey, index) { return sn.debug_GetFloatListKey(ObjKey, index); };
var debug_GetStringListKey = function (ObjKey, index) { return sn.debug_GetStringListKey(ObjKey, index); };
var debug_GetFormListKey = function (ObjKey, index) { return sn.debug_GetFormListKey(ObjKey, index); };
/** Storage functions - separate file. These are shared in all save games. Values are loaded and saved
   when savegame is loaded or saved.

   DEPRECATED v2.9: Replaced by JsonUtil functions. Existing functions here have been proxied to a shared
   json file to maintain compatibility. */
var FileSetIntValue = function (KeyName, value) { return sn.FileSetIntValue(KeyName, value); };
var FileSetFloatValue = function (KeyName, value) { return sn.FileSetFloatValue(KeyName, value); };
var FileSetStringValue = function (KeyName, value) { return sn.FileSetStringValue(KeyName, value); };
var FileSetFormValue = function (KeyName, value) { return sn.FileSetFormValue(KeyName, value); };
var FileAdjustIntValue = function (KeyName, amount) { return sn.FileAdjustIntValue(KeyName, amount); };
var FileAdjustFloatValue = function (KeyName, amount) { return sn.FileAdjustFloatValue(KeyName, amount); };
var FileUnsetIntValue = function (KeyName) { return sn.FileUnsetIntValue(KeyName); };
var FileUnsetFloatValue = function (KeyName) { return sn.FileUnsetFloatValue(KeyName); };
var FileUnsetStringValue = function (KeyName) { return sn.FileUnsetStringValue(KeyName); };
var FileUnsetFormValue = function (KeyName) { return sn.FileUnsetFormValue(KeyName); };
var FileHasIntValue = function (KeyName) { return sn.FileHasIntValue(KeyName); };
var FileHasFloatValue = function (KeyName) { return sn.FileHasFloatValue(KeyName); };
var FileHasStringValue = function (KeyName) { return sn.FileHasStringValue(KeyName); };
var FileHasFormValue = function (KeyName) { return sn.FileHasFormValue(KeyName); };
var FileGetIntValue = function (KeyName, missing) {
    if (missing === void 0) { missing = 0; }
    return sn.FileGetIntValue(KeyName, missing);
};
var FileGetFloatValue = function (KeyName, missing) {
    if (missing === void 0) { missing = 0.0; }
    return sn.FileGetFloatValue(KeyName, missing);
};
var FileGetStringValue = function (KeyName, missing) {
    if (missing === void 0) { missing = ""; }
    return sn.FileGetStringValue(KeyName, missing);
};
var FileGetFormValue = function (KeyName, missing) {
    if (missing === void 0) { missing = null; }
    return sn.FileGetFormValue(KeyName, missing);
};
var FileIntListAdd = function (KeyName, value, allowDuplicate) {
    if (allowDuplicate === void 0) { allowDuplicate = true; }
    return sn.FileIntListAdd(KeyName, value, allowDuplicate);
};
var FileFloatListAdd = function (KeyName, value, allowDuplicate) {
    if (allowDuplicate === void 0) { allowDuplicate = true; }
    return sn.FileFloatListAdd(KeyName, value, allowDuplicate);
};
var FileStringListAdd = function (KeyName, value, allowDuplicate) {
    if (allowDuplicate === void 0) { allowDuplicate = true; }
    return sn.FileStringListAdd(KeyName, value, allowDuplicate);
};
var FileFormListAdd = function (KeyName, value, allowDuplicate) {
    if (allowDuplicate === void 0) { allowDuplicate = true; }
    return sn.FileFormListAdd(KeyName, value, allowDuplicate);
};
var FileIntListAdjust = function (KeyName, index, amount) { return sn.FileIntListAdjust(KeyName, index, amount); };
var FileFloatListAdjust = function (KeyName, index, amount) { return sn.FileFloatListAdjust(KeyName, index, amount); };
var FileIntListRemove = function (KeyName, value, allInstances) {
    if (allInstances === void 0) { allInstances = false; }
    return sn.FileIntListRemove(KeyName, value, allInstances);
};
var FileFloatListRemove = function (KeyName, value, allInstances) {
    if (allInstances === void 0) { allInstances = false; }
    return sn.FileFloatListRemove(KeyName, value, allInstances);
};
var FileStringListRemove = function (KeyName, value, allInstances) {
    if (allInstances === void 0) { allInstances = false; }
    return sn.FileStringListRemove(KeyName, value, allInstances);
};
var FileFormListRemove = function (KeyName, value, allInstances) {
    if (allInstances === void 0) { allInstances = false; }
    return sn.FileFormListRemove(KeyName, value, allInstances);
};
var FileIntListGet = function (KeyName, index) { return sn.FileIntListGet(KeyName, index); };
var FileFloatListGet = function (KeyName, index) { return sn.FileFloatListGet(KeyName, index); };
var FileStringListGet = function (KeyName, index) { return sn.FileStringListGet(KeyName, index); };
var FileFormListGet = function (KeyName, index) { return sn.FileFormListGet(KeyName, index); };
var FileIntListSet = function (KeyName, index, value) { return sn.FileIntListSet(KeyName, index, value); };
var FileFloatListSet = function (KeyName, index, value) { return sn.FileFloatListSet(KeyName, index, value); };
var FileStringListSet = function (KeyName, index, value) { return sn.FileStringListSet(KeyName, index, value); };
var FileFormListSet = function (KeyName, index, value) { return sn.FileFormListSet(KeyName, index, value); };
var FileIntListClear = function (KeyName) { return sn.FileIntListClear(KeyName); };
var FileFloatListClear = function (KeyName) { return sn.FileFloatListClear(KeyName); };
var FileStringListClear = function (KeyName) { return sn.FileStringListClear(KeyName); };
var FileFormListClear = function (KeyName) { return sn.FileFormListClear(KeyName); };
var FileIntListRemoveAt = function (KeyName, index) { return sn.FileIntListRemoveAt(KeyName, index); };
var FileFloatListRemoveAt = function (KeyName, index) { return sn.FileFloatListRemoveAt(KeyName, index); };
var FileStringListRemoveAt = function (KeyName, index) { return sn.FileStringListRemoveAt(KeyName, index); };
var FileFormListRemoveAt = function (KeyName, index) { return sn.FileFormListRemoveAt(KeyName, index); };
var FileIntListInsert = function (KeyName, index, value) { return sn.FileIntListInsert(KeyName, index, value); };
var FileFloatListInsert = function (KeyName, index, value) { return sn.FileFloatListInsert(KeyName, index, value); };
var FileStringListInsert = function (KeyName, index, value) { return sn.FileStringListInsert(KeyName, index, value); };
var FileFormListInsert = function (KeyName, index, value) { return sn.FileFormListInsert(KeyName, index, value); };
var FileIntListCount = function (KeyName) { return sn.FileIntListCount(KeyName); };
var FileFloatListCount = function (KeyName) { return sn.FileFloatListCount(KeyName); };
var FileStringListCount = function (KeyName) { return sn.FileStringListCount(KeyName); };
var FileFormListCount = function (KeyName) { return sn.FileFormListCount(KeyName); };
var FileIntListFind = function (KeyName, value) { return sn.FileIntListFind(KeyName, value); };
var FileFloatListFind = function (KeyName, value) { return sn.FileFloatListFind(KeyName, value); };
var FileStringListFind = function (KeyName, value) { return sn.FileStringListFind(KeyName, value); };
var FileFormListFind = function (KeyName, value) { return sn.FileFormListFind(KeyName, value); };
var FileIntListHas = function (KeyName, value) { return sn.FileIntListHas(KeyName, value); };
var FileFloatListHas = function (KeyName, value) { return sn.FileFloatListHas(KeyName, value); };
var FileStringListHas = function (KeyName, value) { return sn.FileStringListHas(KeyName, value); };
var FileFormListHas = function (KeyName, value) { return sn.FileFormListHas(KeyName, value); };
var FileIntListSlice = function (KeyName, slice, startIndex) {
    if (startIndex === void 0) { startIndex = 0; }
    return sn.FileIntListSlice(KeyName, slice, startIndex);
};
var FileFloatListSlice = function (KeyName, slice, startIndex) {
    if (startIndex === void 0) { startIndex = 0; }
    return sn.FileFloatListSlice(KeyName, slice, startIndex);
};
var FileStringListSlice = function (KeyName, slice, startIndex) {
    if (startIndex === void 0) { startIndex = 0; }
    return sn.FileStringListSlice(KeyName, slice, startIndex);
};
var FileFormListSlice = function (KeyName, slice, startIndex) {
    if (startIndex === void 0) { startIndex = 0; }
    return sn.FileFormListSlice(KeyName, slice, startIndex);
};
var FileIntListResize = function (KeyName, toLength, filler) {
    if (filler === void 0) { filler = 0; }
    return sn.FileIntListResize(KeyName, toLength, filler);
};
var FileFloatListResize = function (KeyName, toLength, filler) {
    if (filler === void 0) { filler = 0.0; }
    return sn.FileFloatListResize(KeyName, toLength, filler);
};
var FileStringListResize = function (KeyName, toLength, filler) {
    if (filler === void 0) { filler = ""; }
    return sn.FileStringListResize(KeyName, toLength, filler);
};
var FileFormListResize = function (KeyName, toLength, filler) {
    if (filler === void 0) { filler = null; }
    return sn.FileFormListResize(KeyName, toLength, filler);
};
var FileIntListCopy = function (KeyName, copy) { return sn.FileIntListCopy(KeyName, copy); };
var FileFloatListCopy = function (KeyName, copy) { return sn.FileFloatListCopy(KeyName, copy); };
var FileStringListCopy = function (KeyName, copy) { return sn.FileStringListCopy(KeyName, copy); };
var FileFormListCopy = function (KeyName, copy) { return sn.FileFormListCopy(KeyName, copy); };
var debug_SaveFile = function () { return sn.debug_SaveFile(); };
/** Currently no longer implemented, unknown if/when they will return. */
var debug_FileGetIntKeysCount = function () { return sn.debug_FileGetIntKeysCount(); };
0;
var debug_FileGetFloatKeysCount = function () { return sn.debug_FileGetFloatKeysCount(); };
0;
var debug_FileGetStringKeysCount = function () { return sn.debug_FileGetStringKeysCount(); };
0;
var debug_FileGetIntListKeysCount = function () { return sn.debug_FileGetIntListKeysCount(); };
0;
var debug_FileGetFloatListKeysCount = function () { return sn.debug_FileGetFloatListKeysCount(); };
0;
var debug_FileGetStringListKeysCount = function () { return sn.debug_FileGetStringListKeysCount(); };
0;
var debug_FileGetIntKey = function (index) { return sn.debug_FileGetIntKey(index); };
"";
var debug_FileGetFloatKey = function (index) { return sn.debug_FileGetFloatKey(index); };
"";
var debug_FileGetStringKey = function (index) { return sn.debug_FileGetStringKey(index); };
"";
var debug_FileGetIntListKey = function (index) { return sn.debug_FileGetIntListKey(index); };
"";
var debug_FileGetFloatListKey = function (index) { return sn.debug_FileGetFloatListKey(index); };
"";
var debug_FileGetStringListKey = function (index) { return sn.debug_FileGetStringListKey(index); };
"";
var debug_FileDeleteAllValues = function () { return sn.debug_FileDeleteAllValues(); };
var debug_SetDebugMode = function (enabled) { return sn.debug_SetDebugMode(enabled); };
var ImportFile = function (fileName, restrictKey, restrictType, restrictForm, restrictGlobal, keyContains) {
    if (restrictKey === void 0) { restrictKey = ""; }
    if (restrictType === void 0) { restrictType = -1; }
    if (restrictForm === void 0) { restrictForm = null; }
    if (restrictGlobal === void 0) { restrictGlobal = false; }
    if (keyContains === void 0) { keyContains = false; }
    return sn.ImportFile(fileName, restrictKey, restrictType, restrictForm, restrictGlobal, keyContains);
};
false;
var ExportFile = function (fileName, restrictKey, restrictType, restrictForm, restrictGlobal, keyContains, append) {
    if (restrictKey === void 0) { restrictKey = ""; }
    if (restrictType === void 0) { restrictType = -1; }
    if (restrictForm === void 0) { restrictForm = null; }
    if (restrictGlobal === void 0) { restrictGlobal = false; }
    if (keyContains === void 0) { keyContains = false; }
    if (append === void 0) { append = true; }
    return sn.ExportFile(fileName, restrictKey, restrictType, restrictForm, restrictGlobal, keyContains, append);
};
false;


/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Load": () => (/* binding */ Load),
/* harmony export */   "Save": () => (/* binding */ Save),
/* harmony export */   "Unload": () => (/* binding */ Unload),
/* harmony export */   "IsPendingSave": () => (/* binding */ IsPendingSave),
/* harmony export */   "IsGood": () => (/* binding */ IsGood),
/* harmony export */   "GetErrors": () => (/* binding */ GetErrors),
/* harmony export */   "JsonInFolder": () => (/* binding */ JsonInFolder),
/* harmony export */   "JsonExists": () => (/* binding */ JsonExists),
/* harmony export */   "SetIntValue": () => (/* binding */ SetIntValue),
/* harmony export */   "SetFloatValue": () => (/* binding */ SetFloatValue),
/* harmony export */   "SetStringValue": () => (/* binding */ SetStringValue),
/* harmony export */   "SetFormValue": () => (/* binding */ SetFormValue),
/* harmony export */   "GetIntValue": () => (/* binding */ GetIntValue),
/* harmony export */   "GetFloatValue": () => (/* binding */ GetFloatValue),
/* harmony export */   "GetStringValue": () => (/* binding */ GetStringValue),
/* harmony export */   "GetFormValue": () => (/* binding */ GetFormValue),
/* harmony export */   "UnsetIntValue": () => (/* binding */ UnsetIntValue),
/* harmony export */   "UnsetFloatValue": () => (/* binding */ UnsetFloatValue),
/* harmony export */   "UnsetStringValue": () => (/* binding */ UnsetStringValue),
/* harmony export */   "UnsetFormValue": () => (/* binding */ UnsetFormValue),
/* harmony export */   "HasIntValue": () => (/* binding */ HasIntValue),
/* harmony export */   "HasFloatValue": () => (/* binding */ HasFloatValue),
/* harmony export */   "HasStringValue": () => (/* binding */ HasStringValue),
/* harmony export */   "HasFormValue": () => (/* binding */ HasFormValue),
/* harmony export */   "IntListAdd": () => (/* binding */ IntListAdd),
/* harmony export */   "FloatListAdd": () => (/* binding */ FloatListAdd),
/* harmony export */   "StringListAdd": () => (/* binding */ StringListAdd),
/* harmony export */   "FormListAdd": () => (/* binding */ FormListAdd),
/* harmony export */   "IntListGet": () => (/* binding */ IntListGet),
/* harmony export */   "FloatListGet": () => (/* binding */ FloatListGet),
/* harmony export */   "StringListGet": () => (/* binding */ StringListGet),
/* harmony export */   "FormListGet": () => (/* binding */ FormListGet),
/* harmony export */   "IntListSet": () => (/* binding */ IntListSet),
/* harmony export */   "FloatListSet": () => (/* binding */ FloatListSet),
/* harmony export */   "StringListSet": () => (/* binding */ StringListSet),
/* harmony export */   "FormListSet": () => (/* binding */ FormListSet),
/* harmony export */   "IntListRemove": () => (/* binding */ IntListRemove),
/* harmony export */   "FloatListRemove": () => (/* binding */ FloatListRemove),
/* harmony export */   "StringListRemove": () => (/* binding */ StringListRemove),
/* harmony export */   "FormListRemove": () => (/* binding */ FormListRemove),
/* harmony export */   "IntListInsertAt": () => (/* binding */ IntListInsertAt),
/* harmony export */   "FloatListInsertAt": () => (/* binding */ FloatListInsertAt),
/* harmony export */   "StringListInsertAt": () => (/* binding */ StringListInsertAt),
/* harmony export */   "FormListInsertAt": () => (/* binding */ FormListInsertAt),
/* harmony export */   "IntListRemoveAt": () => (/* binding */ IntListRemoveAt),
/* harmony export */   "FloatListRemoveAt": () => (/* binding */ FloatListRemoveAt),
/* harmony export */   "StringListRemoveAt": () => (/* binding */ StringListRemoveAt),
/* harmony export */   "FormListRemoveAt": () => (/* binding */ FormListRemoveAt),
/* harmony export */   "IntListClear": () => (/* binding */ IntListClear),
/* harmony export */   "FloatListClear": () => (/* binding */ FloatListClear),
/* harmony export */   "StringListClear": () => (/* binding */ StringListClear),
/* harmony export */   "FormListClear": () => (/* binding */ FormListClear),
/* harmony export */   "IntListCount": () => (/* binding */ IntListCount),
/* harmony export */   "FloatListCount": () => (/* binding */ FloatListCount),
/* harmony export */   "StringListCount": () => (/* binding */ StringListCount),
/* harmony export */   "FormListCount": () => (/* binding */ FormListCount),
/* harmony export */   "IntListCountValue": () => (/* binding */ IntListCountValue),
/* harmony export */   "FloatListCountValue": () => (/* binding */ FloatListCountValue),
/* harmony export */   "StringListCountValue": () => (/* binding */ StringListCountValue),
/* harmony export */   "FormListCountValue": () => (/* binding */ FormListCountValue),
/* harmony export */   "IntListFind": () => (/* binding */ IntListFind),
/* harmony export */   "FloatListFind": () => (/* binding */ FloatListFind),
/* harmony export */   "StringListFind": () => (/* binding */ StringListFind),
/* harmony export */   "FormListFind": () => (/* binding */ FormListFind),
/* harmony export */   "IntListHas": () => (/* binding */ IntListHas),
/* harmony export */   "FloatListHas": () => (/* binding */ FloatListHas),
/* harmony export */   "StringListHas": () => (/* binding */ StringListHas),
/* harmony export */   "FormListHas": () => (/* binding */ FormListHas),
/* harmony export */   "IntListSlice": () => (/* binding */ IntListSlice),
/* harmony export */   "FloatListSlice": () => (/* binding */ FloatListSlice),
/* harmony export */   "StringListSlice": () => (/* binding */ StringListSlice),
/* harmony export */   "FormListSlice": () => (/* binding */ FormListSlice),
/* harmony export */   "IntListResize": () => (/* binding */ IntListResize),
/* harmony export */   "FloatListResize": () => (/* binding */ FloatListResize),
/* harmony export */   "StringListResize": () => (/* binding */ StringListResize),
/* harmony export */   "FormListResize": () => (/* binding */ FormListResize),
/* harmony export */   "IntListCopy": () => (/* binding */ IntListCopy),
/* harmony export */   "FloatListCopy": () => (/* binding */ FloatListCopy),
/* harmony export */   "StringListCopy": () => (/* binding */ StringListCopy),
/* harmony export */   "FormListCopy": () => (/* binding */ FormListCopy),
/* harmony export */   "IntListToArray": () => (/* binding */ IntListToArray),
/* harmony export */   "FloatListToArray": () => (/* binding */ FloatListToArray),
/* harmony export */   "StringListToArray": () => (/* binding */ StringListToArray),
/* harmony export */   "FormListToArray": () => (/* binding */ FormListToArray),
/* harmony export */   "AdjustIntValue": () => (/* binding */ AdjustIntValue),
/* harmony export */   "AdjustFloatValue": () => (/* binding */ AdjustFloatValue),
/* harmony export */   "IntListAdjust": () => (/* binding */ IntListAdjust),
/* harmony export */   "FloatListAdjust": () => (/* binding */ FloatListAdjust),
/* harmony export */   "CountIntValuePrefix": () => (/* binding */ CountIntValuePrefix),
/* harmony export */   "CountFloatValuePrefix": () => (/* binding */ CountFloatValuePrefix),
/* harmony export */   "CountStringValuePrefix": () => (/* binding */ CountStringValuePrefix),
/* harmony export */   "CountFormValuePrefix": () => (/* binding */ CountFormValuePrefix),
/* harmony export */   "CountIntListPrefix": () => (/* binding */ CountIntListPrefix),
/* harmony export */   "CountFloatListPrefix": () => (/* binding */ CountFloatListPrefix),
/* harmony export */   "CountStringListPrefix": () => (/* binding */ CountStringListPrefix),
/* harmony export */   "CountFormListPrefix": () => (/* binding */ CountFormListPrefix),
/* harmony export */   "CountAllPrefix": () => (/* binding */ CountAllPrefix),
/* harmony export */   "SetPathIntValue": () => (/* binding */ SetPathIntValue),
/* harmony export */   "SetPathFloatValue": () => (/* binding */ SetPathFloatValue),
/* harmony export */   "SetPathStringValue": () => (/* binding */ SetPathStringValue),
/* harmony export */   "SetPathFormValue": () => (/* binding */ SetPathFormValue),
/* harmony export */   "SetRawPathValue": () => (/* binding */ SetRawPathValue),
/* harmony export */   "GetPathIntValue": () => (/* binding */ GetPathIntValue),
/* harmony export */   "GetPathFloatValue": () => (/* binding */ GetPathFloatValue),
/* harmony export */   "GetPathStringValue": () => (/* binding */ GetPathStringValue),
/* harmony export */   "GetPathFormValue": () => (/* binding */ GetPathFormValue),
/* harmony export */   "GetPathBoolValue": () => (/* binding */ GetPathBoolValue),
/* harmony export */   "PathIntElements": () => (/* binding */ PathIntElements),
/* harmony export */   "PathFloatElements": () => (/* binding */ PathFloatElements),
/* harmony export */   "PathStringElements": () => (/* binding */ PathStringElements),
/* harmony export */   "PathFormElements": () => (/* binding */ PathFormElements),
/* harmony export */   "FindPathIntElement": () => (/* binding */ FindPathIntElement),
/* harmony export */   "FindPathFloatElement": () => (/* binding */ FindPathFloatElement),
/* harmony export */   "FindPathStringElement": () => (/* binding */ FindPathStringElement),
/* harmony export */   "FindPathFormElement": () => (/* binding */ FindPathFormElement),
/* harmony export */   "PathCount": () => (/* binding */ PathCount),
/* harmony export */   "PathMembers": () => (/* binding */ PathMembers),
/* harmony export */   "CanResolvePath": () => (/* binding */ CanResolvePath),
/* harmony export */   "IsPathString": () => (/* binding */ IsPathString),
/* harmony export */   "IsPathNumber": () => (/* binding */ IsPathNumber),
/* harmony export */   "IsPathForm": () => (/* binding */ IsPathForm),
/* harmony export */   "IsPathBool": () => (/* binding */ IsPathBool),
/* harmony export */   "IsPathArray": () => (/* binding */ IsPathArray),
/* harmony export */   "IsPathObject": () => (/* binding */ IsPathObject),
/* harmony export */   "SetPathIntArray": () => (/* binding */ SetPathIntArray),
/* harmony export */   "SetPathFloatArray": () => (/* binding */ SetPathFloatArray),
/* harmony export */   "SetPathStringArray": () => (/* binding */ SetPathStringArray),
/* harmony export */   "SetPathFormArray": () => (/* binding */ SetPathFormArray),
/* harmony export */   "ClearPath": () => (/* binding */ ClearPath),
/* harmony export */   "ClearPathIndex": () => (/* binding */ ClearPathIndex),
/* harmony export */   "ClearAll": () => (/* binding */ ClearAll)
/* harmony export */ });
/* harmony import */ var skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var skyrimPlatform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__);
/*
==============================================
Typescript definitions for v4.2
==============================================

This file was automatically generated by Papyrus-2-Typescript.exe
https://github.com/CarlosLeyvaAyala/Papyrus-2-Typescript

The program has no way to know the intention of the humans that made
the scripts, so it's always advisable to manually check all generated
files to make sure everything is declared as it should.

Take note the program assumes this script exists in some subfolder
to the folder where `skyrimPlatform.ts` is found, otherwise you'll get
"Cannot find module..." type of errors.

If you want to have this script in some other place, just change the
relative path of each `import`.
*/

var sn = skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.JsonUtil;
/** MOD AUTHORS, READ!

    These functions all work in exactly the same way as their StorageUtil.psc equivalents. See them for usage docs.

    The important difference between these functions and the ones on StorageUtil.psc, is that instead of giving "Form ObjKey"
    argument for the location to save the data, you give it a "string FileName" argument, pointing to an external JSON formatted file.

    These files will be saved/loaded in JSON format, and the starting location for the files to save/load from is as follows:

        data/skse/plugins/StorageUtilData/


    Some important notes on usage to keep in mind:

    - You may specific a folder path in the filename, i.e. "../MyData/config" will save to data/skse/plugins/MyData/config.json

    - If not given in the filename argument, the filename will have the extension .json appended to it automatically when used.

    - You do not need to call Load() or Save() manually unless you have a specific need to.

    - When the player saves their game any modified file will be automatically saved, written to, or created if it does not exist.

    - When the player loads another save without saving themselves or the Save() function having been manually called by a script,
      the loaded data will be discarded and revert back to whatever the contents of the current saved file are. */
var Load = function (FileName) { return sn.Load(FileName); };
var Save = function (FileName, minify) {
    if (minify === void 0) { minify = false; }
    return sn.Save(FileName, minify);
};
var Unload = function (FileName, saveChanges, minify) {
    if (saveChanges === void 0) { saveChanges = true; }
    if (minify === void 0) { minify = false; }
    return sn.Unload(FileName, saveChanges, minify);
};
// Check if given file has had any changes to it they haven't yet been saved
var IsPendingSave = function (FileName) { return sn.IsPendingSave(FileName); };
// Check if the given file was succesfully loaded and has no json parser errors
var IsGood = function (FileName) { return sn.IsGood(FileName); };
// Get a formatted error string of any json parser errors on a file, returns as empty string if no errors.
var GetErrors = function (FileName) { return sn.GetErrors(FileName); };
// Returns a list of all filenames in a given folder that end in .json
var JsonInFolder = function (folderPath) { return sn.JsonInFolder(folderPath); };
// Check if a json file exists or not
var JsonExists = function (FileName) { return sn.JsonExists(FileName); };
// See StorageUtil.psc for equivalent function usage instructions
var SetIntValue = function (FileName, KeyName, value) { return sn.SetIntValue(FileName, KeyName, value); };
var SetFloatValue = function (FileName, KeyName, value) { return sn.SetFloatValue(FileName, KeyName, value); };
var SetStringValue = function (FileName, KeyName, value) { return sn.SetStringValue(FileName, KeyName, value); };
var SetFormValue = function (FileName, KeyName, value) { return sn.SetFormValue(FileName, KeyName, value); };
var GetIntValue = function (FileName, KeyName, missing) {
    if (missing === void 0) { missing = 0; }
    return sn.GetIntValue(FileName, KeyName, missing);
};
var GetFloatValue = function (FileName, KeyName, missing) {
    if (missing === void 0) { missing = 0.0; }
    return sn.GetFloatValue(FileName, KeyName, missing);
};
var GetStringValue = function (FileName, KeyName, missing) {
    if (missing === void 0) { missing = ""; }
    return sn.GetStringValue(FileName, KeyName, missing);
};
var GetFormValue = function (FileName, KeyName, missing) {
    if (missing === void 0) { missing = null; }
    return sn.GetFormValue(FileName, KeyName, missing);
};
var UnsetIntValue = function (FileName, KeyName) { return sn.UnsetIntValue(FileName, KeyName); };
var UnsetFloatValue = function (FileName, KeyName) { return sn.UnsetFloatValue(FileName, KeyName); };
var UnsetStringValue = function (FileName, KeyName) { return sn.UnsetStringValue(FileName, KeyName); };
var UnsetFormValue = function (FileName, KeyName) { return sn.UnsetFormValue(FileName, KeyName); };
var HasIntValue = function (FileName, KeyName) { return sn.HasIntValue(FileName, KeyName); };
var HasFloatValue = function (FileName, KeyName) { return sn.HasFloatValue(FileName, KeyName); };
var HasStringValue = function (FileName, KeyName) { return sn.HasStringValue(FileName, KeyName); };
var HasFormValue = function (FileName, KeyName) { return sn.HasFormValue(FileName, KeyName); };
var IntListAdd = function (FileName, KeyName, value, allowDuplicate) {
    if (allowDuplicate === void 0) { allowDuplicate = true; }
    return sn.IntListAdd(FileName, KeyName, value, allowDuplicate);
};
var FloatListAdd = function (FileName, KeyName, value, allowDuplicate) {
    if (allowDuplicate === void 0) { allowDuplicate = true; }
    return sn.FloatListAdd(FileName, KeyName, value, allowDuplicate);
};
var StringListAdd = function (FileName, KeyName, value, allowDuplicate) {
    if (allowDuplicate === void 0) { allowDuplicate = true; }
    return sn.StringListAdd(FileName, KeyName, value, allowDuplicate);
};
var FormListAdd = function (FileName, KeyName, value, allowDuplicate) {
    if (allowDuplicate === void 0) { allowDuplicate = true; }
    return sn.FormListAdd(FileName, KeyName, value, allowDuplicate);
};
var IntListGet = function (FileName, KeyName, index) { return sn.IntListGet(FileName, KeyName, index); };
var FloatListGet = function (FileName, KeyName, index) { return sn.FloatListGet(FileName, KeyName, index); };
var StringListGet = function (FileName, KeyName, index) { return sn.StringListGet(FileName, KeyName, index); };
var FormListGet = function (FileName, KeyName, index) { return sn.FormListGet(FileName, KeyName, index); };
var IntListSet = function (FileName, KeyName, index, value) { return sn.IntListSet(FileName, KeyName, index, value); };
var FloatListSet = function (FileName, KeyName, index, value) { return sn.FloatListSet(FileName, KeyName, index, value); };
var StringListSet = function (FileName, KeyName, index, value) { return sn.StringListSet(FileName, KeyName, index, value); };
var FormListSet = function (FileName, KeyName, index, value) { return sn.FormListSet(FileName, KeyName, index, value); };
var IntListRemove = function (FileName, KeyName, value, allInstances) {
    if (allInstances === void 0) { allInstances = true; }
    return sn.IntListRemove(FileName, KeyName, value, allInstances);
};
var FloatListRemove = function (FileName, KeyName, value, allInstances) {
    if (allInstances === void 0) { allInstances = true; }
    return sn.FloatListRemove(FileName, KeyName, value, allInstances);
};
var StringListRemove = function (FileName, KeyName, value, allInstances) {
    if (allInstances === void 0) { allInstances = true; }
    return sn.StringListRemove(FileName, KeyName, value, allInstances);
};
var FormListRemove = function (FileName, KeyName, value, allInstances) {
    if (allInstances === void 0) { allInstances = true; }
    return sn.FormListRemove(FileName, KeyName, value, allInstances);
};
var IntListInsertAt = function (FileName, KeyName, index, value) { return sn.IntListInsertAt(FileName, KeyName, index, value); };
var FloatListInsertAt = function (FileName, KeyName, index, value) { return sn.FloatListInsertAt(FileName, KeyName, index, value); };
var StringListInsertAt = function (FileName, KeyName, index, value) { return sn.StringListInsertAt(FileName, KeyName, index, value); };
var FormListInsertAt = function (FileName, KeyName, index, value) { return sn.FormListInsertAt(FileName, KeyName, index, value); };
var IntListRemoveAt = function (FileName, KeyName, index) { return sn.IntListRemoveAt(FileName, KeyName, index); };
var FloatListRemoveAt = function (FileName, KeyName, index) { return sn.FloatListRemoveAt(FileName, KeyName, index); };
var StringListRemoveAt = function (FileName, KeyName, index) { return sn.StringListRemoveAt(FileName, KeyName, index); };
var FormListRemoveAt = function (FileName, KeyName, index) { return sn.FormListRemoveAt(FileName, KeyName, index); };
var IntListClear = function (FileName, KeyName) { return sn.IntListClear(FileName, KeyName); };
var FloatListClear = function (FileName, KeyName) { return sn.FloatListClear(FileName, KeyName); };
var StringListClear = function (FileName, KeyName) { return sn.StringListClear(FileName, KeyName); };
var FormListClear = function (FileName, KeyName) { return sn.FormListClear(FileName, KeyName); };
var IntListCount = function (FileName, KeyName) { return sn.IntListCount(FileName, KeyName); };
var FloatListCount = function (FileName, KeyName) { return sn.FloatListCount(FileName, KeyName); };
var StringListCount = function (FileName, KeyName) { return sn.StringListCount(FileName, KeyName); };
var FormListCount = function (FileName, KeyName) { return sn.FormListCount(FileName, KeyName); };
var IntListCountValue = function (FileName, KeyName, value, exclude) {
    if (exclude === void 0) { exclude = false; }
    return sn.IntListCountValue(FileName, KeyName, value, exclude);
};
var FloatListCountValue = function (FileName, KeyName, value, exclude) {
    if (exclude === void 0) { exclude = false; }
    return sn.FloatListCountValue(FileName, KeyName, value, exclude);
};
var StringListCountValue = function (FileName, KeyName, value, exclude) {
    if (exclude === void 0) { exclude = false; }
    return sn.StringListCountValue(FileName, KeyName, value, exclude);
};
var FormListCountValue = function (FileName, KeyName, value, exclude) {
    if (exclude === void 0) { exclude = false; }
    return sn.FormListCountValue(FileName, KeyName, value, exclude);
};
var IntListFind = function (FileName, KeyName, value) { return sn.IntListFind(FileName, KeyName, value); };
var FloatListFind = function (FileName, KeyName, value) { return sn.FloatListFind(FileName, KeyName, value); };
var StringListFind = function (FileName, KeyName, value) { return sn.StringListFind(FileName, KeyName, value); };
var FormListFind = function (FileName, KeyName, value) { return sn.FormListFind(FileName, KeyName, value); };
var IntListHas = function (FileName, KeyName, value) { return sn.IntListHas(FileName, KeyName, value); };
var FloatListHas = function (FileName, KeyName, value) { return sn.FloatListHas(FileName, KeyName, value); };
var StringListHas = function (FileName, KeyName, value) { return sn.StringListHas(FileName, KeyName, value); };
var FormListHas = function (FileName, KeyName, value) { return sn.FormListHas(FileName, KeyName, value); };
var IntListSlice = function (FileName, KeyName, slice, startIndex) {
    if (startIndex === void 0) { startIndex = 0; }
    return sn.IntListSlice(FileName, KeyName, slice, startIndex);
};
var FloatListSlice = function (FileName, KeyName, slice, startIndex) {
    if (startIndex === void 0) { startIndex = 0; }
    return sn.FloatListSlice(FileName, KeyName, slice, startIndex);
};
var StringListSlice = function (FileName, KeyName, slice, startIndex) {
    if (startIndex === void 0) { startIndex = 0; }
    return sn.StringListSlice(FileName, KeyName, slice, startIndex);
};
var FormListSlice = function (FileName, KeyName, slice, startIndex) {
    if (startIndex === void 0) { startIndex = 0; }
    return sn.FormListSlice(FileName, KeyName, slice, startIndex);
};
var IntListResize = function (FileName, KeyName, toLength, filler) {
    if (filler === void 0) { filler = 0; }
    return sn.IntListResize(FileName, KeyName, toLength, filler);
};
var FloatListResize = function (FileName, KeyName, toLength, filler) {
    if (filler === void 0) { filler = 0.0; }
    return sn.FloatListResize(FileName, KeyName, toLength, filler);
};
var StringListResize = function (FileName, KeyName, toLength, filler) {
    if (filler === void 0) { filler = ""; }
    return sn.StringListResize(FileName, KeyName, toLength, filler);
};
var FormListResize = function (FileName, KeyName, toLength, filler) {
    if (filler === void 0) { filler = null; }
    return sn.FormListResize(FileName, KeyName, toLength, filler);
};
var IntListCopy = function (FileName, KeyName, copy) { return sn.IntListCopy(FileName, KeyName, copy); };
var FloatListCopy = function (FileName, KeyName, copy) { return sn.FloatListCopy(FileName, KeyName, copy); };
var StringListCopy = function (FileName, KeyName, copy) { return sn.StringListCopy(FileName, KeyName, copy); };
var FormListCopy = function (FileName, KeyName, copy) { return sn.FormListCopy(FileName, KeyName, copy); };
var IntListToArray = function (FileName, KeyName) { return sn.IntListToArray(FileName, KeyName); };
var FloatListToArray = function (FileName, KeyName) { return sn.FloatListToArray(FileName, KeyName); };
var StringListToArray = function (FileName, KeyName) { return sn.StringListToArray(FileName, KeyName); };
var FormListToArray = function (FileName, KeyName) { return sn.FormListToArray(FileName, KeyName); };
var AdjustIntValue = function (FileName, KeyName, amount) { return sn.AdjustIntValue(FileName, KeyName, amount); };
var AdjustFloatValue = function (FileName, KeyName, amount) { return sn.AdjustFloatValue(FileName, KeyName, amount); };
var IntListAdjust = function (FileName, KeyName, index, amount) { return sn.IntListAdjust(FileName, KeyName, index, amount); };
var FloatListAdjust = function (FileName, KeyName, index, amount) { return sn.FloatListAdjust(FileName, KeyName, index, amount); };
var CountIntValuePrefix = function (FileName, PrefixKey) { return sn.CountIntValuePrefix(FileName, PrefixKey); };
var CountFloatValuePrefix = function (FileName, PrefixKey) { return sn.CountFloatValuePrefix(FileName, PrefixKey); };
var CountStringValuePrefix = function (FileName, PrefixKey) { return sn.CountStringValuePrefix(FileName, PrefixKey); };
var CountFormValuePrefix = function (FileName, PrefixKey) { return sn.CountFormValuePrefix(FileName, PrefixKey); };
var CountIntListPrefix = function (FileName, PrefixKey) { return sn.CountIntListPrefix(FileName, PrefixKey); };
var CountFloatListPrefix = function (FileName, PrefixKey) { return sn.CountFloatListPrefix(FileName, PrefixKey); };
var CountStringListPrefix = function (FileName, PrefixKey) { return sn.CountStringListPrefix(FileName, PrefixKey); };
var CountFormListPrefix = function (FileName, PrefixKey) { return sn.CountFormListPrefix(FileName, PrefixKey); };
var CountAllPrefix = function (FileName, PrefixKey) { return sn.CountAllPrefix(FileName, PrefixKey); };
// Experimental custom json formatting handlers. Paths are resolved using typical json syntax.
// The path will be created as necessary when setting data and the path does not yet exists.
// examples:
// 	JSON File: /** "foo": /** "bar": [3, 10, 7] */ */
//   Function: GetPathIntValue("filename.json", ".foo.bar[1]")
//   Return: 10
var SetPathIntValue = function (FileName, Path, value) { return sn.SetPathIntValue(FileName, Path, value); };
var SetPathFloatValue = function (FileName, Path, value) { return sn.SetPathFloatValue(FileName, Path, value); };
var SetPathStringValue = function (FileName, Path, value) { return sn.SetPathStringValue(FileName, Path, value); };
var SetPathFormValue = function (FileName, Path, value) { return sn.SetPathFormValue(FileName, Path, value); };
var SetRawPathValue = function (FileName, Path, RawJSON) { return sn.SetRawPathValue(FileName, Path, RawJSON); };
var GetPathIntValue = function (FileName, Path, missing) {
    if (missing === void 0) { missing = 0; }
    return sn.GetPathIntValue(FileName, Path, missing);
};
var GetPathFloatValue = function (FileName, Path, missing) {
    if (missing === void 0) { missing = 0.0; }
    return sn.GetPathFloatValue(FileName, Path, missing);
};
var GetPathStringValue = function (FileName, Path, missing) {
    if (missing === void 0) { missing = ""; }
    return sn.GetPathStringValue(FileName, Path, missing);
};
var GetPathFormValue = function (FileName, Path, missing) {
    if (missing === void 0) { missing = null; }
    return sn.GetPathFormValue(FileName, Path, missing);
};
var GetPathBoolValue = function (FileName, Path, missing) {
    if (missing === void 0) { missing = false; }
    return sn.GetPathBoolValue(FileName, Path, missing);
};
var PathIntElements = function (FileName, Path, invalidType) {
    if (invalidType === void 0) { invalidType = 0; }
    return sn.PathIntElements(FileName, Path, invalidType);
};
var PathFloatElements = function (FileName, Path, invalidType) {
    if (invalidType === void 0) { invalidType = 0.0; }
    return sn.PathFloatElements(FileName, Path, invalidType);
};
var PathStringElements = function (FileName, Path, invalidType) {
    if (invalidType === void 0) { invalidType = ""; }
    return sn.PathStringElements(FileName, Path, invalidType);
};
var PathFormElements = function (FileName, Path, invalidType) {
    if (invalidType === void 0) { invalidType = null; }
    return sn.PathFormElements(FileName, Path, invalidType);
};
var FindPathIntElement = function (FileName, Path, toFind) { return sn.FindPathIntElement(FileName, Path, toFind); };
var FindPathFloatElement = function (FileName, Path, toFind) { return sn.FindPathFloatElement(FileName, Path, toFind); };
var FindPathStringElement = function (FileName, Path, toFind) { return sn.FindPathStringElement(FileName, Path, toFind); };
var FindPathFormElement = function (FileName, Path, toFind) { return sn.FindPathFormElement(FileName, Path, toFind); };
var PathCount = function (FileName, Path) { return sn.PathCount(FileName, Path); };
var PathMembers = function (FileName, Path) { return sn.PathMembers(FileName, Path); };
var CanResolvePath = function (FileName, Path) { return sn.CanResolvePath(FileName, Path); };
var IsPathString = function (FileName, Path) { return sn.IsPathString(FileName, Path); };
var IsPathNumber = function (FileName, Path) { return sn.IsPathNumber(FileName, Path); };
var IsPathForm = function (FileName, Path) { return sn.IsPathForm(FileName, Path); };
var IsPathBool = function (FileName, Path) { return sn.IsPathBool(FileName, Path); };
var IsPathArray = function (FileName, Path) { return sn.IsPathArray(FileName, Path); };
var IsPathObject = function (FileName, Path) { return sn.IsPathObject(FileName, Path); };
var SetPathIntArray = function (FileName, Path, arr, append) {
    if (append === void 0) { append = false; }
    return sn.SetPathIntArray(FileName, Path, arr, append);
};
var SetPathFloatArray = function (FileName, Path, arr, append) {
    if (append === void 0) { append = false; }
    return sn.SetPathFloatArray(FileName, Path, arr, append);
};
var SetPathStringArray = function (FileName, Path, arr, append) {
    if (append === void 0) { append = false; }
    return sn.SetPathStringArray(FileName, Path, arr, append);
};
var SetPathFormArray = function (FileName, Path, arr, append) {
    if (append === void 0) { append = false; }
    return sn.SetPathFormArray(FileName, Path, arr, append);
};
var ClearPath = function (FileName, Path) { return sn.ClearPath(FileName, Path); };
var ClearPathIndex = function (FileName, Path, Index) { return sn.ClearPathIndex(FileName, Path, Index); };
// Debug use
var ClearAll = function (FileName) { return sn.ClearAll(FileName); };


/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IsScriptAttachedToActiveEffect": () => (/* binding */ IsScriptAttachedToActiveEffect),
/* harmony export */   "GetActiveEffects": () => (/* binding */ GetActiveEffects),
/* harmony export */   "GetActorAlpha": () => (/* binding */ GetActorAlpha),
/* harmony export */   "GetActorRefraction": () => (/* binding */ GetActorRefraction),
/* harmony export */   "GetActorState": () => (/* binding */ GetActorState),
/* harmony export */   "GetActorSoulSize": () => (/* binding */ GetActorSoulSize),
/* harmony export */   "GetActorValueModifier": () => (/* binding */ GetActorValueModifier),
/* harmony export */   "GetCriticalStage": () => (/* binding */ GetCriticalStage),
/* harmony export */   "GetCombatAllies": () => (/* binding */ GetCombatAllies),
/* harmony export */   "GetCombatTargets": () => (/* binding */ GetCombatTargets),
/* harmony export */   "GetCommandedActors": () => (/* binding */ GetCommandedActors),
/* harmony export */   "GetCommandingActor": () => (/* binding */ GetCommandingActor),
/* harmony export */   "GetHairColor": () => (/* binding */ GetHairColor),
/* harmony export */   "GetHeadPartTextureSet": () => (/* binding */ GetHeadPartTextureSet),
/* harmony export */   "GetLocalGravityActor": () => (/* binding */ GetLocalGravityActor),
/* harmony export */   "GetObjectUnderFeet": () => (/* binding */ GetObjectUnderFeet),
/* harmony export */   "GetRunningPackage": () => (/* binding */ GetRunningPackage),
/* harmony export */   "GetSkinColor": () => (/* binding */ GetSkinColor),
/* harmony export */   "GetTimeDead": () => (/* binding */ GetTimeDead),
/* harmony export */   "GetTimeOfDeath": () => (/* binding */ GetTimeOfDeath),
/* harmony export */   "HasActiveSpell": () => (/* binding */ HasActiveSpell),
/* harmony export */   "HasDeferredKill": () => (/* binding */ HasDeferredKill),
/* harmony export */   "HasMagicEffectWithArchetype": () => (/* binding */ HasMagicEffectWithArchetype),
/* harmony export */   "HasSkin": () => (/* binding */ HasSkin),
/* harmony export */   "IsActorInWater": () => (/* binding */ IsActorInWater),
/* harmony export */   "IsActorUnderwater": () => (/* binding */ IsActorUnderwater),
/* harmony export */   "IsLimbGone": () => (/* binding */ IsLimbGone),
/* harmony export */   "IsQuadruped": () => (/* binding */ IsQuadruped),
/* harmony export */   "IsSoulTrapped": () => (/* binding */ IsSoulTrapped),
/* harmony export */   "AddAllEquippedItemsToArray": () => (/* binding */ AddAllEquippedItemsToArray),
/* harmony export */   "AddBasePerk": () => (/* binding */ AddBasePerk),
/* harmony export */   "AddBaseSpell": () => (/* binding */ AddBaseSpell),
/* harmony export */   "BlendColorWithSkinTone": () => (/* binding */ BlendColorWithSkinTone),
/* harmony export */   "DecapitateActor": () => (/* binding */ DecapitateActor),
/* harmony export */   "FreezeActor": () => (/* binding */ FreezeActor),
/* harmony export */   "KillNoWait": () => (/* binding */ KillNoWait),
/* harmony export */   "MixColorWithSkinTone": () => (/* binding */ MixColorWithSkinTone),
/* harmony export */   "RemoveAddedSpells": () => (/* binding */ RemoveAddedSpells),
/* harmony export */   "RemoveBasePerk": () => (/* binding */ RemoveBasePerk),
/* harmony export */   "RemoveBaseSpell": () => (/* binding */ RemoveBaseSpell),
/* harmony export */   "ReplaceArmorTextureSet": () => (/* binding */ ReplaceArmorTextureSet),
/* harmony export */   "ReplaceFaceTextureSet": () => (/* binding */ ReplaceFaceTextureSet),
/* harmony export */   "ReplaceSkinTextureSet": () => (/* binding */ ReplaceSkinTextureSet),
/* harmony export */   "ResetActor3D": () => (/* binding */ ResetActor3D),
/* harmony export */   "SetActorRefraction": () => (/* binding */ SetActorRefraction),
/* harmony export */   "SetHairColor": () => (/* binding */ SetHairColor),
/* harmony export */   "SetHeadPartAlpha": () => (/* binding */ SetHeadPartAlpha),
/* harmony export */   "SetHeadPartTextureSet": () => (/* binding */ SetHeadPartTextureSet),
/* harmony export */   "SetLinearVelocity": () => (/* binding */ SetLinearVelocity),
/* harmony export */   "SetLocalGravityActor": () => (/* binding */ SetLocalGravityActor),
/* harmony export */   "SetSkinAlpha": () => (/* binding */ SetSkinAlpha),
/* harmony export */   "SetSkinColor": () => (/* binding */ SetSkinColor),
/* harmony export */   "SetSoulTrapped": () => (/* binding */ SetSoulTrapped),
/* harmony export */   "ToggleHairWigs": () => (/* binding */ ToggleHairWigs),
/* harmony export */   "UnequipAllOfType": () => (/* binding */ UnequipAllOfType),
/* harmony export */   "GetDeathItem": () => (/* binding */ GetDeathItem),
/* harmony export */   "GetNthPerk": () => (/* binding */ GetNthPerk),
/* harmony export */   "GetPerkCount": () => (/* binding */ GetPerkCount),
/* harmony export */   "SetDeathItem": () => (/* binding */ SetDeathItem),
/* harmony export */   "IsScriptAttachedToAlias": () => (/* binding */ IsScriptAttachedToAlias),
/* harmony export */   "GetFootstepSet": () => (/* binding */ GetFootstepSet),
/* harmony export */   "SetFootstepSet": () => (/* binding */ SetFootstepSet),
/* harmony export */   "AddActorToArray": () => (/* binding */ AddActorToArray),
/* harmony export */   "AddStringToArray": () => (/* binding */ AddStringToArray),
/* harmony export */   "ArrayStringCount": () => (/* binding */ ArrayStringCount),
/* harmony export */   "SortArrayString": () => (/* binding */ SortArrayString),
/* harmony export */   "GetSortedActorNames": () => (/* binding */ GetSortedActorNames),
/* harmony export */   "GetSortedNPCNames": () => (/* binding */ GetSortedNPCNames),
/* harmony export */   "ClearReadFlag": () => (/* binding */ ClearReadFlag),
/* harmony export */   "SetReadFlag": () => (/* binding */ SetReadFlag),
/* harmony export */   "GetCellNorthRotation": () => (/* binding */ GetCellNorthRotation),
/* harmony export */   "GetLightingTemplate": () => (/* binding */ GetLightingTemplate),
/* harmony export */   "SetLightingTemplate": () => (/* binding */ SetLightingTemplate),
/* harmony export */   "SetCellNorthRotation": () => (/* binding */ SetCellNorthRotation),
/* harmony export */   "GivePlayerSpellBook": () => (/* binding */ GivePlayerSpellBook),
/* harmony export */   "DumpAnimationVariables": () => (/* binding */ DumpAnimationVariables),
/* harmony export */   "CanActorBeDetected": () => (/* binding */ CanActorBeDetected),
/* harmony export */   "CanActorDetect": () => (/* binding */ CanActorDetect),
/* harmony export */   "ForceActorDetection": () => (/* binding */ ForceActorDetection),
/* harmony export */   "ForceActorDetecting": () => (/* binding */ ForceActorDetecting),
/* harmony export */   "IsDetectedByAnyone": () => (/* binding */ IsDetectedByAnyone),
/* harmony export */   "PreventActorDetection": () => (/* binding */ PreventActorDetection),
/* harmony export */   "PreventActorDetecting": () => (/* binding */ PreventActorDetecting),
/* harmony export */   "ResetActorDetection": () => (/* binding */ ResetActorDetection),
/* harmony export */   "ResetActorDetecting": () => (/* binding */ ResetActorDetecting),
/* harmony export */   "GetAddonModels": () => (/* binding */ GetAddonModels),
/* harmony export */   "GetEffectShaderTotalCount": () => (/* binding */ GetEffectShaderTotalCount),
/* harmony export */   "IsEffectShaderFlagSet": () => (/* binding */ IsEffectShaderFlagSet),
/* harmony export */   "GetMembraneFillTexture": () => (/* binding */ GetMembraneFillTexture),
/* harmony export */   "GetMembraneHolesTexture": () => (/* binding */ GetMembraneHolesTexture),
/* harmony export */   "GetMembranePaletteTexture": () => (/* binding */ GetMembranePaletteTexture),
/* harmony export */   "GetParticleFullCount": () => (/* binding */ GetParticleFullCount),
/* harmony export */   "GetParticlePaletteTexture": () => (/* binding */ GetParticlePaletteTexture),
/* harmony export */   "GetParticleShaderTexture": () => (/* binding */ GetParticleShaderTexture),
/* harmony export */   "GetParticlePersistentCount": () => (/* binding */ GetParticlePersistentCount),
/* harmony export */   "ClearEffectShaderFlag": () => (/* binding */ ClearEffectShaderFlag),
/* harmony export */   "SetAddonModels": () => (/* binding */ SetAddonModels),
/* harmony export */   "SetEffectShaderFlag": () => (/* binding */ SetEffectShaderFlag),
/* harmony export */   "SetMembraneColorKeyData": () => (/* binding */ SetMembraneColorKeyData),
/* harmony export */   "SetMembraneFillTexture": () => (/* binding */ SetMembraneFillTexture),
/* harmony export */   "SetMembraneHolesTexture": () => (/* binding */ SetMembraneHolesTexture),
/* harmony export */   "SetMembranePaletteTexture": () => (/* binding */ SetMembranePaletteTexture),
/* harmony export */   "SetParticleColorKeyData": () => (/* binding */ SetParticleColorKeyData),
/* harmony export */   "SetParticleFullCount": () => (/* binding */ SetParticleFullCount),
/* harmony export */   "SetParticlePaletteTexture": () => (/* binding */ SetParticlePaletteTexture),
/* harmony export */   "SetParticlePersistentCount": () => (/* binding */ SetParticlePersistentCount),
/* harmony export */   "SetParticleShaderTexture": () => (/* binding */ SetParticleShaderTexture),
/* harmony export */   "GetEnchantmentType": () => (/* binding */ GetEnchantmentType),
/* harmony export */   "AddMagicEffectToEnchantment": () => (/* binding */ AddMagicEffectToEnchantment),
/* harmony export */   "AddEffectItemToEnchantment": () => (/* binding */ AddEffectItemToEnchantment),
/* harmony export */   "RemoveMagicEffectFromEnchantment": () => (/* binding */ RemoveMagicEffectFromEnchantment),
/* harmony export */   "RemoveEffectItemFromEnchantment": () => (/* binding */ RemoveEffectItemFromEnchantment),
/* harmony export */   "GetDeathEffectType": () => (/* binding */ GetDeathEffectType),
/* harmony export */   "RemoveEffectsNotOfType": () => (/* binding */ RemoveEffectsNotOfType),
/* harmony export */   "SendFECResetEvent": () => (/* binding */ SendFECResetEvent),
/* harmony export */   "EvaluateConditionList": () => (/* binding */ EvaluateConditionList),
/* harmony export */   "ClearRecordFlag": () => (/* binding */ ClearRecordFlag),
/* harmony export */   "GetConditionList": () => (/* binding */ GetConditionList),
/* harmony export */   "GetFormEditorID": () => (/* binding */ GetFormEditorID),
/* harmony export */   "IsFormInMod": () => (/* binding */ IsFormInMod),
/* harmony export */   "IsGeneratedForm": () => (/* binding */ IsGeneratedForm),
/* harmony export */   "IsRecordFlagSet": () => (/* binding */ IsRecordFlagSet),
/* harmony export */   "IsScriptAttachedToForm": () => (/* binding */ IsScriptAttachedToForm),
/* harmony export */   "SetRecordFlag": () => (/* binding */ SetRecordFlag),
/* harmony export */   "AddKeywordToForm": () => (/* binding */ AddKeywordToForm),
/* harmony export */   "MarkItemAsFavorite": () => (/* binding */ MarkItemAsFavorite),
/* harmony export */   "ReplaceKeywordOnForm": () => (/* binding */ ReplaceKeywordOnForm),
/* harmony export */   "RemoveKeywordOnForm": () => (/* binding */ RemoveKeywordOnForm),
/* harmony export */   "UnmarkItemAsFavorite": () => (/* binding */ UnmarkItemAsFavorite),
/* harmony export */   "GetFurnitureType": () => (/* binding */ GetFurnitureType),
/* harmony export */   "GetAllEnchantments": () => (/* binding */ GetAllEnchantments),
/* harmony export */   "GetAllForms": () => (/* binding */ GetAllForms),
/* harmony export */   "GetAllRaces": () => (/* binding */ GetAllRaces),
/* harmony export */   "GetAllSpells": () => (/* binding */ GetAllSpells),
/* harmony export */   "GetActorsByProcessingLevel": () => (/* binding */ GetActorsByProcessingLevel),
/* harmony export */   "GetAllFormsInMod": () => (/* binding */ GetAllFormsInMod),
/* harmony export */   "GetAllEnchantmentsInMod": () => (/* binding */ GetAllEnchantmentsInMod),
/* harmony export */   "GetAllRacesInMod": () => (/* binding */ GetAllRacesInMod),
/* harmony export */   "GetAllSpellsInMod": () => (/* binding */ GetAllSpellsInMod),
/* harmony export */   "GetAttachedCells": () => (/* binding */ GetAttachedCells),
/* harmony export */   "GetFormFromEditorID": () => (/* binding */ GetFormFromEditorID),
/* harmony export */   "GetGameSettingBool": () => (/* binding */ GetGameSettingBool),
/* harmony export */   "GetGodMode": () => (/* binding */ GetGodMode),
/* harmony export */   "GetLocalGravity": () => (/* binding */ GetLocalGravity),
/* harmony export */   "GetNumActorsInHigh": () => (/* binding */ GetNumActorsInHigh),
/* harmony export */   "GetPlayerFollowers": () => (/* binding */ GetPlayerFollowers),
/* harmony export */   "IsPluginFound": () => (/* binding */ IsPluginFound),
/* harmony export */   "IsSurvivalModeActive": () => (/* binding */ IsSurvivalModeActive),
/* harmony export */   "SetLocalGravity": () => (/* binding */ SetLocalGravity),
/* harmony export */   "GetHazardArt": () => (/* binding */ GetHazardArt),
/* harmony export */   "GetHazardIMOD": () => (/* binding */ GetHazardIMOD),
/* harmony export */   "GetHazardIMODRadius": () => (/* binding */ GetHazardIMODRadius),
/* harmony export */   "GetHazardIPDS": () => (/* binding */ GetHazardIPDS),
/* harmony export */   "GetHazardLifetime": () => (/* binding */ GetHazardLifetime),
/* harmony export */   "GetHazardLight": () => (/* binding */ GetHazardLight),
/* harmony export */   "GetHazardLimit": () => (/* binding */ GetHazardLimit),
/* harmony export */   "GetHazardRadius": () => (/* binding */ GetHazardRadius),
/* harmony export */   "GetHazardSound": () => (/* binding */ GetHazardSound),
/* harmony export */   "GetHazardSpell": () => (/* binding */ GetHazardSpell),
/* harmony export */   "GetHazardTargetInterval": () => (/* binding */ GetHazardTargetInterval),
/* harmony export */   "IsHazardFlagSet": () => (/* binding */ IsHazardFlagSet),
/* harmony export */   "ClearHazardFlag": () => (/* binding */ ClearHazardFlag),
/* harmony export */   "SetHazardArt": () => (/* binding */ SetHazardArt),
/* harmony export */   "SetHazardFlag": () => (/* binding */ SetHazardFlag),
/* harmony export */   "SetHazardIMOD": () => (/* binding */ SetHazardIMOD),
/* harmony export */   "SetHazardIMODRadius": () => (/* binding */ SetHazardIMODRadius),
/* harmony export */   "SetHazardIPDS": () => (/* binding */ SetHazardIPDS),
/* harmony export */   "SetHazardLifetime": () => (/* binding */ SetHazardLifetime),
/* harmony export */   "SetHazardLight": () => (/* binding */ SetHazardLight),
/* harmony export */   "SetHazardLimit": () => (/* binding */ SetHazardLimit),
/* harmony export */   "SetHazardRadius": () => (/* binding */ SetHazardRadius),
/* harmony export */   "SetHazardSound": () => (/* binding */ SetHazardSound),
/* harmony export */   "SetHazardSpell": () => (/* binding */ SetHazardSpell),
/* harmony export */   "SetHazardTargetInterval": () => (/* binding */ SetHazardTargetInterval),
/* harmony export */   "GetLightColor": () => (/* binding */ GetLightColor),
/* harmony export */   "GetLightFade": () => (/* binding */ GetLightFade),
/* harmony export */   "GetLightFOV": () => (/* binding */ GetLightFOV),
/* harmony export */   "GetLightRadius": () => (/* binding */ GetLightRadius),
/* harmony export */   "GetLightRGB": () => (/* binding */ GetLightRGB),
/* harmony export */   "GetLightShadowDepthBias": () => (/* binding */ GetLightShadowDepthBias),
/* harmony export */   "GetLightType": () => (/* binding */ GetLightType),
/* harmony export */   "SetLightColor": () => (/* binding */ SetLightColor),
/* harmony export */   "SetLightFade": () => (/* binding */ SetLightFade),
/* harmony export */   "SetLightFOV": () => (/* binding */ SetLightFOV),
/* harmony export */   "SetLightRadius": () => (/* binding */ SetLightRadius),
/* harmony export */   "SetLightRGB": () => (/* binding */ SetLightRGB),
/* harmony export */   "SetLightShadowDepthBias": () => (/* binding */ SetLightShadowDepthBias),
/* harmony export */   "SetLightType": () => (/* binding */ SetLightType),
/* harmony export */   "GetParentLocation": () => (/* binding */ GetParentLocation),
/* harmony export */   "SetParentLocation": () => (/* binding */ SetParentLocation),
/* harmony export */   "GetAssociatedForm": () => (/* binding */ GetAssociatedForm),
/* harmony export */   "GetEffectArchetypeAsInt": () => (/* binding */ GetEffectArchetypeAsInt),
/* harmony export */   "GetEffectArchetypeAsString": () => (/* binding */ GetEffectArchetypeAsString),
/* harmony export */   "GetPrimaryActorValue": () => (/* binding */ GetPrimaryActorValue),
/* harmony export */   "GetSecondaryActorValue": () => (/* binding */ GetSecondaryActorValue),
/* harmony export */   "GetMagicEffectSound": () => (/* binding */ GetMagicEffectSound),
/* harmony export */   "SetAssociatedForm": () => (/* binding */ SetAssociatedForm),
/* harmony export */   "SetMagicEffectSound": () => (/* binding */ SetMagicEffectSound),
/* harmony export */   "AddAllItemsToArray": () => (/* binding */ AddAllItemsToArray),
/* harmony export */   "AddAllItemsToList": () => (/* binding */ AddAllItemsToList),
/* harmony export */   "AddItemsOfTypeToArray": () => (/* binding */ AddItemsOfTypeToArray),
/* harmony export */   "AddItemsOfTypeToList": () => (/* binding */ AddItemsOfTypeToList),
/* harmony export */   "FindAllReferencesOfFormType": () => (/* binding */ FindAllReferencesOfFormType),
/* harmony export */   "FindAllReferencesWithKeyword": () => (/* binding */ FindAllReferencesWithKeyword),
/* harmony export */   "FindAllReferencesOfType": () => (/* binding */ FindAllReferencesOfType),
/* harmony export */   "FindFirstItemInList": () => (/* binding */ FindFirstItemInList),
/* harmony export */   "GetActivateChildren": () => (/* binding */ GetActivateChildren),
/* harmony export */   "GetActiveGamebryoAnimation": () => (/* binding */ GetActiveGamebryoAnimation),
/* harmony export */   "GetActorCause": () => (/* binding */ GetActorCause),
/* harmony export */   "GetAllArtObjects": () => (/* binding */ GetAllArtObjects),
/* harmony export */   "GetAllEffectShaders": () => (/* binding */ GetAllEffectShaders),
/* harmony export */   "GetClosestActorFromRef": () => (/* binding */ GetClosestActorFromRef),
/* harmony export */   "GetEffectShaderDuration": () => (/* binding */ GetEffectShaderDuration),
/* harmony export */   "GetDoorDestination": () => (/* binding */ GetDoorDestination),
/* harmony export */   "GetLinkedChildren": () => (/* binding */ GetLinkedChildren),
/* harmony export */   "GetMagicEffectSource": () => (/* binding */ GetMagicEffectSource),
/* harmony export */   "GetMaterialType": () => (/* binding */ GetMaterialType),
/* harmony export */   "GetMotionType": () => (/* binding */ GetMotionType),
/* harmony export */   "GetRandomActorFromRef": () => (/* binding */ GetRandomActorFromRef),
/* harmony export */   "GetQuestItems": () => (/* binding */ GetQuestItems),
/* harmony export */   "GetRefAliases": () => (/* binding */ GetRefAliases),
/* harmony export */   "GetStoredSoulSize": () => (/* binding */ GetStoredSoulSize),
/* harmony export */   "HasArtObject": () => (/* binding */ HasArtObject),
/* harmony export */   "HasEffectShader": () => (/* binding */ HasEffectShader),
/* harmony export */   "HasNiExtraData": () => (/* binding */ HasNiExtraData),
/* harmony export */   "IsLoadDoor": () => (/* binding */ IsLoadDoor),
/* harmony export */   "IsQuestItem": () => (/* binding */ IsQuestItem),
/* harmony export */   "IsVIP": () => (/* binding */ IsVIP),
/* harmony export */   "ApplyMaterialShader": () => (/* binding */ ApplyMaterialShader),
/* harmony export */   "AddKeywordToRef": () => (/* binding */ AddKeywordToRef),
/* harmony export */   "MoveToNearestNavmeshLocation": () => (/* binding */ MoveToNearestNavmeshLocation),
/* harmony export */   "RemoveKeywordFromRef": () => (/* binding */ RemoveKeywordFromRef),
/* harmony export */   "ReplaceKeywordOnRef": () => (/* binding */ ReplaceKeywordOnRef),
/* harmony export */   "PlayDebugShader": () => (/* binding */ PlayDebugShader),
/* harmony export */   "ScaleObject3D": () => (/* binding */ ScaleObject3D),
/* harmony export */   "SetBaseObject": () => (/* binding */ SetBaseObject),
/* harmony export */   "SetCollisionLayer": () => (/* binding */ SetCollisionLayer),
/* harmony export */   "SetDoorDestination": () => (/* binding */ SetDoorDestination),
/* harmony export */   "SetEffectShaderDuration": () => (/* binding */ SetEffectShaderDuration),
/* harmony export */   "SetLinkedRef": () => (/* binding */ SetLinkedRef),
/* harmony export */   "SetMaterialType": () => (/* binding */ SetMaterialType),
/* harmony export */   "SetupBodyPartGeometry": () => (/* binding */ SetupBodyPartGeometry),
/* harmony export */   "SetShaderType": () => (/* binding */ SetShaderType),
/* harmony export */   "StopAllShaders": () => (/* binding */ StopAllShaders),
/* harmony export */   "StopArtObject": () => (/* binding */ StopArtObject),
/* harmony export */   "ToggleChildNode": () => (/* binding */ ToggleChildNode),
/* harmony export */   "UpdateHitEffectArtNode": () => (/* binding */ UpdateHitEffectArtNode),
/* harmony export */   "GetPackageType": () => (/* binding */ GetPackageType),
/* harmony export */   "GetPackageIdles": () => (/* binding */ GetPackageIdles),
/* harmony export */   "AddPackageIdle": () => (/* binding */ AddPackageIdle),
/* harmony export */   "RemovePackageIdle": () => (/* binding */ RemovePackageIdle),
/* harmony export */   "GetPapyrusExtenderVersion": () => (/* binding */ GetPapyrusExtenderVersion),
/* harmony export */   "AddMagicEffectToPotion": () => (/* binding */ AddMagicEffectToPotion),
/* harmony export */   "AddEffectItemToPotion": () => (/* binding */ AddEffectItemToPotion),
/* harmony export */   "RemoveMagicEffectFromPotion": () => (/* binding */ RemoveMagicEffectFromPotion),
/* harmony export */   "RemoveEffectItemFromPotion": () => (/* binding */ RemoveEffectItemFromPotion),
/* harmony export */   "GetProjectileGravity": () => (/* binding */ GetProjectileGravity),
/* harmony export */   "GetProjectileImpactForce": () => (/* binding */ GetProjectileImpactForce),
/* harmony export */   "GetProjectileRange": () => (/* binding */ GetProjectileRange),
/* harmony export */   "GetProjectileSpeed": () => (/* binding */ GetProjectileSpeed),
/* harmony export */   "GetProjectileType": () => (/* binding */ GetProjectileType),
/* harmony export */   "SetProjectileGravity": () => (/* binding */ SetProjectileGravity),
/* harmony export */   "SetProjectileImpactForce": () => (/* binding */ SetProjectileImpactForce),
/* harmony export */   "SetProjectileRange": () => (/* binding */ SetProjectileRange),
/* harmony export */   "SetProjectileSpeed": () => (/* binding */ SetProjectileSpeed),
/* harmony export */   "AddMagicEffectToScroll": () => (/* binding */ AddMagicEffectToScroll),
/* harmony export */   "AddEffectItemToScroll": () => (/* binding */ AddEffectItemToScroll),
/* harmony export */   "RemoveMagicEffectFromScroll": () => (/* binding */ RemoveMagicEffectFromScroll),
/* harmony export */   "RemoveEffectItemFromScroll": () => (/* binding */ RemoveEffectItemFromScroll),
/* harmony export */   "SetSoundDescriptor": () => (/* binding */ SetSoundDescriptor),
/* harmony export */   "GetSpellType": () => (/* binding */ GetSpellType),
/* harmony export */   "AddMagicEffectToSpell": () => (/* binding */ AddMagicEffectToSpell),
/* harmony export */   "AddEffectItemToSpell": () => (/* binding */ AddEffectItemToSpell),
/* harmony export */   "RemoveMagicEffectFromSpell": () => (/* binding */ RemoveMagicEffectFromSpell),
/* harmony export */   "RemoveEffectItemFromSpell": () => (/* binding */ RemoveEffectItemFromSpell),
/* harmony export */   "SetSpellCastingType": () => (/* binding */ SetSpellCastingType),
/* harmony export */   "SetSpellDeliveryType": () => (/* binding */ SetSpellDeliveryType),
/* harmony export */   "IntToString": () => (/* binding */ IntToString),
/* harmony export */   "StringToInt": () => (/* binding */ StringToInt),
/* harmony export */   "GetMenuContainer": () => (/* binding */ GetMenuContainer),
/* harmony export */   "GenerateRandomFloat": () => (/* binding */ GenerateRandomFloat),
/* harmony export */   "GenerateRandomInt": () => (/* binding */ GenerateRandomInt),
/* harmony export */   "GetSystemTime": () => (/* binding */ GetSystemTime),
/* harmony export */   "GetArtObject": () => (/* binding */ GetArtObject),
/* harmony export */   "GetArtObjectTotalCount": () => (/* binding */ GetArtObjectTotalCount),
/* harmony export */   "SetArtObject": () => (/* binding */ SetArtObject),
/* harmony export */   "GetWindSpeedAsFloat": () => (/* binding */ GetWindSpeedAsFloat),
/* harmony export */   "GetWindSpeedAsInt": () => (/* binding */ GetWindSpeedAsInt),
/* harmony export */   "GetWeatherType": () => (/* binding */ GetWeatherType)
/* harmony export */ });
/* harmony import */ var skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var skyrimPlatform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__);
/*
==============================================
Typescript definitions for v4.5.5
==============================================

This file was automatically generated by Papyrus-2-Typescript.exe
https://github.com/CarlosLeyvaAyala/Papyrus-2-Typescript

The program has no way to know the intention of the humans that made
the scripts, so it's always advisable to manually check all generated
files to make sure everything is declared as it should.

Take note the program assumes this script exists in some subfolder
to the folder where `skyrimPlatform.ts` is found, otherwise you'll get
"Cannot find module..." type of errors.

If you want to have this script in some other place, just change the
relative path of each `import`.
*/

var sn = skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.PO3_SKSEFunctions;
//----------------------------------------------------------------------------------------------------------
//ACTIVE EFFECT
//----------------------------------------------------------------------------------------------------------
//returns whether the activeEffect has script attached. If scriptName is empty, it will return if the activeEffect has any non-base scripts attached
var IsScriptAttachedToActiveEffect = function (akActiveEffect, asScriptName) { return sn.IsScriptAttachedToActiveEffect(akActiveEffect, asScriptName); };
//----------------------------------------------------------------------------------------------------------
//ACTORS
//----------------------------------------------------------------------------------------------------------
//-------
//GETTERS
//-------
//Gets all magiceffects currently on the actor. Filters out inactive and hideinui spells.
var GetActiveEffects = function (akActor, abShowInactive) {
    if (abShowInactive === void 0) { abShowInactive = false; }
    return sn.GetActiveEffects(akActor, abShowInactive);
};
var GetActorAlpha = function (akActor) {
    return sn.GetActorAlpha(akActor);
};
var GetActorRefraction = function (akActor) {
    return sn.GetActorRefraction(akActor);
};
/** ACTOR STATE
        Alive = 0
        Dying = 1
        Dead = 2
        Unconscious = 3
        Reanimate = 4
        Recycle = 5
        Restrained = 6
        EssentialDown = 7
        Bleedout = 8 */
//Gets actor state
var GetActorState = function (akActor) {
    return sn.GetActorState(akActor);
};
//Gets actor soul size
var GetActorSoulSize = function (akActor) {
    return sn.GetActorSoulSize(akActor);
};
//Gets actor value modifier. 0 - permanent, 1 - temporary, 2 - damage
var GetActorValueModifier = function (akActor, aiModifier, asActorValue) { return sn.GetActorValueModifier(akActor, aiModifier, asActorValue); };
//Gets actor critical stage
var GetCriticalStage = function (akActor) {
    return sn.GetCriticalStage(akActor);
};
//Gets all allies of the actor, if in combat
var GetCombatAllies = function (akActor) {
    return sn.GetCombatAllies(akActor);
};
//Gets all targets of the actor, if in combat
var GetCombatTargets = function (akActor) {
    return sn.GetCombatTargets(akActor);
};
//Gets all current summons commanded by this actor
var GetCommandedActors = function (akActor) { return sn.GetCommandedActors(akActor); };
//Gets the owner of summoned actor
var GetCommandingActor = function (akActor) { return sn.GetCommandingActor(akActor); };
//Gets current hair color on actor. Fails if hair headpart doesn't exist
var GetHairColor = function (akActor) { return sn.GetHairColor(akActor); };
//Gets textureset belonging to headpart, if any.
var GetHeadPartTextureSet = function (akActor, aiType) { return sn.GetHeadPartTextureSet(akActor, aiType); };
//Gets the actor's local gravity.
var GetLocalGravityActor = function (akActor) { return sn.GetLocalGravityActor(akActor); };
//Gets object under actor's feet (eg. table). Does not work if the player is standing on the ground.
var GetObjectUnderFeet = function (akActor) { return sn.GetObjectUnderFeet(akActor); };
//Gets actual current package on actor, including internal packages used by the game (see GetPackageType below)
var GetRunningPackage = function (akActor) { return sn.GetRunningPackage(akActor); };
//Gets current skin color on actor.
var GetSkinColor = function (akActor) { return sn.GetSkinColor(akActor); };
//Similar to GetTimeDead console command. Returns 0.0 if actor is alive
var GetTimeDead = function (akActor) {
    return sn.GetTimeDead(akActor);
};
//Returns time of death in game days passed
var GetTimeOfDeath = function (akActor) {
    return sn.GetTimeOfDeath(akActor);
};
//HasSpell but checks if the spell is present on the actor (i.e active and not dispelled)
var HasActiveSpell = function (akActor, akSpell) { return sn.HasActiveSpell(akActor, akSpell); };
//Returns whether the actor is in deferred kill mode
var HasDeferredKill = function (akActor) {
    return sn.HasDeferredKill(akActor);
};
//Checks if activemagiceffect with given archetype is present on actor. Archetype MUST be typed as given below.
var HasMagicEffectWithArchetype = function (akActor, asArchetype) { return sn.HasMagicEffectWithArchetype(akActor, asArchetype); };
//Returns if the actor has skin/armor with skin present
var HasSkin = function (akActor, akArmorToCheck) { return sn.HasSkin(akActor, akArmorToCheck); };
//Returns whether the actor is in cell water or lava
var IsActorInWater = function (akActor) {
    return sn.IsActorInWater(akActor);
};
//Returns whether the actor is underwater
var IsActorUnderwater = function (akActor) {
    return sn.IsActorUnderwater(akActor);
};
/** LIMB
        None = -1
        Torso = 0
        Head = 1 */
//Returns whether limb is gone (i.e, the head, but adding the whole enum in case someone expands the dismemberment system in the future)
var IsLimbGone = function (akActor, aiLimb) { return sn.IsLimbGone(akActor, aiLimb); };
//Returns whether the actor is a quadruped
var IsQuadruped = function (akActor) {
    return sn.IsQuadruped(akActor);
};
//Returns whether target is soul trapped / capable of being soul trapped successfully (if using mods that bypass vanilla soul trap system).
var IsSoulTrapped = function (akActor) {
    return sn.IsSoulTrapped(akActor);
};
//-------
//SETTERS
//-------
//Adds all equipped items to array
var AddAllEquippedItemsToArray = function (akActor) { return sn.AddAllEquippedItemsToArray(akActor); };
//Adds perks to the actorbase, works on leveled actors/unique NPCs. Function serializes data to skse cosave, so perks are applied correctly on loading/reloading saves.
var AddBasePerk = function (akActor, akPerk) { return sn.AddBasePerk(akActor, akPerk); };
//Adds spells to actorbase, works on player/leveled actors/unique NPCs. Function serializes data to skse cosave, so spells are applied correctly on loading/reloading saves.
var AddBaseSpell = function (akActor, akSpell) { return sn.AddBaseSpell(akActor, akSpell); };
/** BLEND MODES
        Darken = 0
        Multiply = 1
        ColorBurn = 2
        LinearBurn = 3
        DarkerColor = 4
        Lighten = 5
        Screen = 6
        ColorDodge = 7
        LinearDodge = 8
        LighterColor = 9
        Overlay = 10
        SoftLight = 11
        HardLight = 12
        VividLight = 13
        LinearLight = 14
        PinLight = 15
        HardMix = 16
        Difference = 17
        Exclusion = 18
        Subtract = 19
        Divide = 20 */
//Blends existing skin color with specified color, using photoshop blend formulas, with alpha (opacity).
//If true, autoLuminance calculates skin tone relative luminance. The opacity value is then used as a multiplier on top of that, final value is clamped to 0-1
//If false, only opacity will be used. Recommend to use autoluminance because colors will not blend well for all skin tones using flat values.
var BlendColorWithSkinTone = function (akActor, akColor, aiBlendMode, abAutoLuminance, afOpacity) {
    return sn.BlendColorWithSkinTone(akActor, akColor, aiBlendMode, abAutoLuminance, afOpacity);
};
//Decapitates living and dead actors. Living actors will not die when this is called!
var DecapitateActor = function (akActor) {
    return sn.DecapitateActor(akActor);
};
//0 - EnableAI + toggling record hits flags so they don't go flying 300 feet when unfrozen.
//1 - Paralyzes actor, even when dead.
var FreezeActor = function (akActor, type, abFreeze) { return sn.FreezeActor(akActor, type, abFreeze); };
//Quick and dirty hack to instantly kill the actor and set as dead.
var KillNoWait = function (akActor) {
    return sn.KillNoWait(akActor);
};
//DEPRECIATED
//Blends existing skin color with specified color.
//True - intensity is manually calculated using percentage 0-1.0, False - automatically calculated using skin tone luminance
var MixColorWithSkinTone = function (akActor, akColor, abManualMode, afPercentage) {
    return sn.MixColorWithSkinTone(akActor, akColor, abManualMode, afPercentage);
};
//Batch added spell removal, filtered by optional mod name, and keyword array (matching any keyword or all of them)
var RemoveAddedSpells = function (akActor, modName, keywords, abMatchAll) { return sn.RemoveAddedSpells(akActor, modName, keywords, abMatchAll); };
//Removes perks from the actorbase
//Perk effects may not be removed from unique actors, more testing required.
//Function serializes data to skse cosave, so perks are applied correctly on loading/reloading saves.
var RemoveBasePerk = function (akActor, akPerk) { return sn.RemoveBasePerk(akActor, akPerk); };
//Removes spells from the actorbase, works on player/leveled actors/unique NPCs. Function serializes data to skse cosave, so spells are applied correctly on loading/reloading saves.
var RemoveBaseSpell = function (akActor, akSpell) { return sn.RemoveBaseSpell(akActor, akSpell); };
//Replaces specified source textureset on worn armor with target textureset. Lasts for one single gaming session.
//If texture type is -1, the entire textureset is replaced, otherwise the texture map specified at [textureType] index is replaced (diffuse is 0, normal is 1...)
var ReplaceArmorTextureSet = function (akActor, akArmor, akSourceTXST, akTargetTXST, aiTextureType) {
    if (aiTextureType === void 0) { aiTextureType = -1; }
    return sn.ReplaceArmorTextureSet(akActor, akArmor, akSourceTXST, akTargetTXST, aiTextureType);
};
//Replaces face textureset. Lasts one gaming session. Can be applied to non-unique actors.
//If texture type is -1, the entire textureset is replaced, otherwise the texture map specified at [textureType] index is replaced. Replacing the entire textureset may cause a visible neckseam.
var ReplaceFaceTextureSet = function (akActor, akMaleTXST, akFemaleTXST, aiTextureType) {
    if (aiTextureType === void 0) { aiTextureType = -1; }
    return sn.ReplaceFaceTextureSet(akActor, akMaleTXST, akFemaleTXST, aiTextureType);
};
//Replaces skin textureset for given slotmask (ie. body/hand). Lasts one gaming session. Has to be reapplied when re-equipping armor.
//If texture type is -1, the entire textureset is replaced, otherwise the texture map specified at [textureType] index is replaced.
var ReplaceSkinTextureSet = function (akActor, akMaleTXST, akFemaleTXST, aiSlotMask, aiTextureType) {
    if (aiTextureType === void 0) { aiTextureType = -1; }
    return sn.ReplaceSkinTextureSet(akActor, akMaleTXST, akFemaleTXST, aiSlotMask, aiTextureType);
};
//Checks for NiExtraData nodes on actor - PO3_TINT/PO3_ALPHA/PO3_TXST/PO3_TOGGLE/PO3_SHADER
//Stops all effect shaders and
//PO3_TINT - resets tint, rebuilds facegen if actor is player
//PO3_ALPHA - resets skin alpha
//PO3_TXST - resets texturesets with texturepaths containing folderName
//PO3_TOGGLE - unhides all children of nodes that were written to the extraData
//PO3_SHADER - recreates the original shader type (as close as possible, projectedUV params are not restored)
var ResetActor3D = function (akActor, asFolderName) { return sn.ResetActor3D(akActor, asFolderName); };
//0.0 disables refraction, 1.0 is max refraction
var SetActorRefraction = function (akActor, afRefraction) { return sn.SetActorRefraction(akActor, afRefraction); };
//Sets hair color on actor. Changes may persist throughout gaming session, even when reloading previous saves.
var SetHairColor = function (akActor, akColor) { return sn.SetHairColor(akActor, akColor); };
//Sets headpart's mesh alpha. Doesn't work for some hair types and heterochromic eyes
var SetHeadPartAlpha = function (akActor, aiPartType, afAlpha) { return sn.SetHeadPartAlpha(akActor, aiPartType, afAlpha); };
//Sets textureset belonging to headpart, if any.
var SetHeadPartTextureSet = function (akActor, headpartTXST, aiType) { return sn.SetHeadPartTextureSet(akActor, headpartTXST, aiType); };
//Sets velocity of the actor. May not take place immediately.
var SetLinearVelocity = function (akActor, afX, afY, afZ) { return sn.SetLinearVelocity(akActor, afX, afY, afZ); };
//Sets local gravity of the actor. Negative values will cause them to fly. May not take place immediately.
var SetLocalGravityActor = function (akActor, afValue, abDisableGravityOnGround) { return sn.SetLocalGravityActor(akActor, afValue, abDisableGravityOnGround); };
//Sets alpha on face, base skin form and armor meshes with visible skin. Has to be re-applied when armor is un/re-equipped.
var SetSkinAlpha = function (akActor, afAlpha) { return sn.SetSkinAlpha(akActor, afAlpha); };
//Sets skin color (face and body). Has to be re-applied when armor is un/re-equipped.
var SetSkinColor = function (akActor, akColor) { return sn.SetSkinColor(akActor, akColor); };
//Sets the flag used by the game to determine soul trapped NPCs
var SetSoulTrapped = function (akActor, abTrapped) { return sn.SetSoulTrapped(akActor, abTrapped); };
//Toggles any hair wigs (geometry with hair shader) found on slots Hair/LongHair
var ToggleHairWigs = function (akActor, abDisable) { return sn.ToggleHairWigs(akActor, abDisable); };
/** ARMOR TYPE
        Light = 0
        Heavy = 1
        Clothing = 2 */
//Unequips all armor of type, optionally skipping biped slots.
var UnequipAllOfType = function (akActor, afArmorType, aiSlotsToSkip) { return sn.UnequipAllOfType(akActor, afArmorType, aiSlotsToSkip); };
//----------------------------------------------------------------------------------------------------------
//ACTORBASE
//----------------------------------------------------------------------------------------------------------
//-------
//GETTERS
//-------
//Gets npc death item
var GetDeathItem = function (akBase) { return sn.GetDeathItem(akBase); };
//Get actorbase perk at nth index
var GetNthPerk = function (akBase, aiIndex) { return sn.GetNthPerk(akBase, aiIndex); };
//Get total actorbase perk count
var GetPerkCount = function (akBase) {
    return sn.GetPerkCount(akBase);
};
//-------
//SETTERS
//-------
//Sets npc death item. Can be None.
var SetDeathItem = function (akBase, akLeveledItem) { return sn.SetDeathItem(akBase, akLeveledItem); };
//----------------------------------------------------------------------------------------------------------
//ALIAS
//----------------------------------------------------------------------------------------------------------
//returns whether the form has script attached. If scriptName is empty, it will return if the alias has any non-base scripts attached
var IsScriptAttachedToAlias = function (akAlias, asScriptName) { return sn.IsScriptAttachedToAlias(akAlias, asScriptName); };
//----------------------------------------------------------------------------------------------------------
//ARMOR/ADDONS
//----------------------------------------------------------------------------------------------------------
//Gets armor addon's footstep set
var GetFootstepSet = function (akArma) { return sn.GetFootstepSet(akArma); };
//Sets armor addon's footstep set
var SetFootstepSet = function (akArma, akFootstepSet) { return sn.SetFootstepSet(akArma, akFootstepSet); };
//----------------------------------------------------------------------------------------------------------
//ARRAYS
//----------------------------------------------------------------------------------------------------------
//Adds actor to array. Modifies array directly, it must be initialized!
var AddActorToArray = function (akActor, actorArray) { return sn.AddActorToArray(akActor, actorArray); };
//Adds string to array. Modifies array directly, it must be initialized!
var AddStringToArray = function (asString, asStrings) { return sn.AddStringToArray(asString, asStrings); };
//Counts how many instances of a string are in an array.
var ArrayStringCount = function (asString, asStrings) { return sn.ArrayStringCount(asString, asStrings); };
//Alphabetically sorts and returns truncated sring array.
var SortArrayString = function (asStrings) {
    return sn.SortArrayString(asStrings);
};
//Gets name array of all the actors in the area, sorted alphabetically. Generic actors are merged (ie. 3 Whiterun Guard(s)). Filter keyword optional
var GetSortedActorNames = function (akKeyword, asPlural, abInvertKeyword) {
    if (asPlural === void 0) { asPlural = "(s)"; }
    return sn.GetSortedActorNames(akKeyword, asPlural, abInvertKeyword);
};
//Gets name array of NPCs, sorted alphabetically. Generic actors are merged (ie. 3 Whiterun Guard(s)).
var GetSortedNPCNames = function (aiActorBases, asPlural) {
    if (asPlural === void 0) { asPlural = "(s)"; }
    return sn.GetSortedNPCNames(aiActorBases, asPlural);
};
//----------------------------------------------------------------------------------------------------------
//BOOK
//----------------------------------------------------------------------------------------------------------
//Clears read flag (and writes it to the save).
var ClearReadFlag = function (akBook) {
    return sn.ClearReadFlag(akBook);
};
//Sets read flag (and writes it to the save).
var SetReadFlag = function (akBook) {
    return sn.SetReadFlag(akBook);
};
//----------------------------------------------------------------------------------------------------------
//CELL
//----------------------------------------------------------------------------------------------------------
//Gets cell north rotation/worldspace north rotation for exterior cells. Rotation is in degrees.
var GetCellNorthRotation = function (akCell) {
    return sn.GetCellNorthRotation(akCell);
};
//Gets cell lighting template
var GetLightingTemplate = function (akCell) { return sn.GetLightingTemplate(akCell); };
//Sets cell lighting template
var SetLightingTemplate = function (akCell, akLightingTemplate) { return sn.SetLightingTemplate(akCell, akLightingTemplate); };
//Sets cell north rotation.
var SetCellNorthRotation = function (akCell, afAngle) { return sn.SetCellNorthRotation(akCell, afAngle); };
//----------------------------------------------------------------------------------------------------------
//DEBUG
//----------------------------------------------------------------------------------------------------------
//Adds all functional spells (ie. spells that can be learned from spell books, and not all 2000+ spells like psb)
var GivePlayerSpellBook = function () { return sn.GivePlayerSpellBook(); };
//Dumps current animation variables to po3_papyrusextender64.log
var DumpAnimationVariables = function (akActor, asAnimationVarPrefix) { return sn.DumpAnimationVariables(akActor, asAnimationVarPrefix); };
//----------------------------------------------------------------------------------------------------------
//DETECTION
//----------------------------------------------------------------------------------------------------------
//Returns whether other NPCs can detect this actor.
//0 -  can't be detected, 1 - normal, 2 -  will always be detected
var CanActorBeDetected = function (akActor) {
    return sn.CanActorBeDetected(akActor);
};
//Returns whether this actor can detect other NPCs.
//0 - can never detect, 1- normal, 2 - will always detect others
var CanActorDetect = function (akActor) {
    return sn.CanActorDetect(akActor);
};
//Force this actor to be detected by other NPCs (actor is always visible).
var ForceActorDetection = function (akActor) {
    return sn.ForceActorDetection(akActor);
};
//Force this actor to always detect their targets
var ForceActorDetecting = function (akActor) {
    return sn.ForceActorDetecting(akActor);
};
//Returns whether this actor is currently detected by other NPCs
var IsDetectedByAnyone = function (akActor) { return sn.IsDetectedByAnyone(akActor); };
//Prevent this actor from being detected by other NPCs (actor is hidden).
var PreventActorDetection = function (akActor) { return sn.PreventActorDetection(akActor); };
//Prevent this actor from detecting other NPCs (actor is blind)
var PreventActorDetecting = function (akActor) { return sn.PreventActorDetecting(akActor); };
//Resets detection state
var ResetActorDetection = function (akActor) {
    return sn.ResetActorDetection(akActor);
};
//Resets detecting state
var ResetActorDetecting = function (akActor) {
    return sn.ResetActorDetecting(akActor);
};
//----------------------------------------------------------------------------------------------------------
//EFFECTSHADER
//----------------------------------------------------------------------------------------------------------
//-------
//GETTERS
//-------
/** EFFECT SHADER FLAGS
        kNoMembraneShader = 0x00000001
        kMembraneGreyscaleColor = 0x00000002
        kMembraneGreyscaleAlpha = 0x00000004
        kNoParticleShader = 0x00000008
        kEdgeEffectInverse = 0x00000010
        kAffectSkinOnly = 0x00000020
        kIgnoreAlpha = 0x00000040
        kProjectUV = 0x00000080
        kIgnoreBaseGeometryAlpha = 0x00000100
        kLighting = 0x00000200
        kNoWeapons = 0x00000400
        kParticleAnimated = 0x00008000
        kParticleGreyscaleColor = 0x00010000
        kParticleGreyscaleAlpha = 0x00020000
        kUseBloodGeometry = 0x01000000 */
//Gets addon models
var GetAddonModels = function (akEffectShader) { return sn.GetAddonModels(akEffectShader); };
//Returns the total number of effect shaders present/present and active (on objects) within the loaded area.
var GetEffectShaderTotalCount = function (akEffectShader, abActive) { return sn.GetEffectShaderTotalCount(akEffectShader, abActive); };
//Is effect shader flag set?
var IsEffectShaderFlagSet = function (akEffectShader, aiFlag) { return sn.IsEffectShaderFlagSet(akEffectShader, aiFlag); };
//Get fill texture
var GetMembraneFillTexture = function (akEffectShader) { return sn.GetMembraneFillTexture(akEffectShader); };
//Get holes texture
var GetMembraneHolesTexture = function (akEffectShader) { return sn.GetMembraneHolesTexture(akEffectShader); };
//Get membrane palette texture
var GetMembranePaletteTexture = function (akEffectShader) { return sn.GetMembranePaletteTexture(akEffectShader); };
//Gets full particle count.
var GetParticleFullCount = function (akEffectShader) { return sn.GetParticleFullCount(akEffectShader); };
//Get particle palette texture
var GetParticlePaletteTexture = function (akEffectShader) { return sn.GetParticlePaletteTexture(akEffectShader); };
//Get particle shader texture
var GetParticleShaderTexture = function (akEffectShader) { return sn.GetParticleShaderTexture(akEffectShader); };
//Gets persistent count.
var GetParticlePersistentCount = function (akEffectShader) { return sn.GetParticlePersistentCount(akEffectShader); };
//-------
//SETTERS
//-------
//Clears effect shader flag.
var ClearEffectShaderFlag = function (akEffectShader, aiFlag) { return sn.ClearEffectShaderFlag(akEffectShader, aiFlag); };
//Gets addon models
var SetAddonModels = function (akEffectShader, akDebris) { return sn.SetAddonModels(akEffectShader, akDebris); };
//Set effect shader flag.
var SetEffectShaderFlag = function (akEffectShader, aiFlag) { return sn.SetEffectShaderFlag(akEffectShader, aiFlag); };
//Set membrane color key
var SetMembraneColorKeyData = function (akEffectShader, aiColorKey, aiRGB, afAlpha, afTime) {
    return sn.SetMembraneColorKeyData(akEffectShader, aiColorKey, aiRGB, afAlpha, afTime);
};
//Set membrane fill texture
var SetMembraneFillTexture = function (akEffectShader, asTextureName) { return sn.SetMembraneFillTexture(akEffectShader, asTextureName); };
//Set membrane holes texture
var SetMembraneHolesTexture = function (akEffectShader, asTextureName) { return sn.SetMembraneHolesTexture(akEffectShader, asTextureName); };
//Set membrane palette texture
var SetMembranePaletteTexture = function (akEffectShader, asTextureName) { return sn.SetMembranePaletteTexture(akEffectShader, asTextureName); };
//Set particle color key
var SetParticleColorKeyData = function (akEffectShader, aiColorKey, aiRGB, afAlpha, afTime) {
    return sn.SetParticleColorKeyData(akEffectShader, aiColorKey, aiRGB, afAlpha, afTime);
};
//Sets full particle count.
var SetParticleFullCount = function (akEffectShader, afParticleCount) { return sn.SetParticleFullCount(akEffectShader, afParticleCount); };
//Set particle shader texture
var SetParticlePaletteTexture = function (akEffectShader, asTextureName) { return sn.SetParticlePaletteTexture(akEffectShader, asTextureName); };
//Sets persistent particle count.
var SetParticlePersistentCount = function (akEffectShader, afParticleCount) { return sn.SetParticlePersistentCount(akEffectShader, afParticleCount); };
//Set particle shader texture
var SetParticleShaderTexture = function (akEffectShader, asTextureName) { return sn.SetParticleShaderTexture(akEffectShader, asTextureName); };
//-----------------------------------------------------------------------------------------------------------
//ENCHANTMENT - see SPELL
//-----------------------------------------------------------------------------------------------------------
//--------
//GETTERS
//--------
/** ENCHANTMENT TYPES
        Enchantment = 6,
        StaffEnchantment = 12 */
//Returns enchantment type. -1 if  is None
var GetEnchantmentType = function (akEnchantment) { return sn.GetEnchantmentType(akEnchantment); };
//--------
//SETTERS
//--------
var AddMagicEffectToEnchantment = function (akEnchantment, akMagicEffect, afMagnitude, aiArea, aiDuration, afCost, asConditionList) {
    if (afCost === void 0) { afCost = 0.0; }
    return sn.AddMagicEffectToEnchantment(akEnchantment, akMagicEffect, afMagnitude, aiArea, aiDuration, afCost, asConditionList);
};
//Adds effectitem from Enchantment to target Enchantment, at given index. Same as above function, but less verbose, and preserves all conditions. Optional cost argument.
var AddEffectItemToEnchantment = function (akEnchantment, akEnchantmentToCopyFrom, aiIndex, afCost) {
    if (afCost === void 0) { afCost = -1.0; }
    return sn.AddEffectItemToEnchantment(akEnchantment, akEnchantmentToCopyFrom, aiIndex, afCost);
};
//Removes magic effect from Enchantment that matches magnitude/area/duration/cost.
var RemoveMagicEffectFromEnchantment = function (akEnchantment, akMagicEffect, afMagnitude, aiArea, aiDuration, afCost) {
    if (afCost === void 0) { afCost = 0.0; }
    return sn.RemoveMagicEffectFromEnchantment(akEnchantment, akMagicEffect, afMagnitude, aiArea, aiDuration, afCost);
};
//Removes effectitem from Enchantment that matches Enchantment at index.
var RemoveEffectItemFromEnchantment = function (akEnchantment, akEnchantmentToMatchFrom, aiIndex) {
    return sn.RemoveEffectItemFromEnchantment(akEnchantment, akEnchantmentToMatchFrom, aiIndex);
};
//----------------------------------------------------------------------------------------------------------
//FEC
//----------------------------------------------------------------------------------------------------------
//FEC function
//returns effect type, effect skill level, and projectile type, of the highest magnitude effect present on the actor
//permanent - SUN, ACID, FIRE, FROST, SHOCK, DRAIN
//temporary - POISON, FEAR
var GetDeathEffectType = function (akActor, type) { return sn.GetDeathEffectType(akActor, type); };
//0 - charred/skeleton
//1 - drained
//2 - poisoned/frightened
//3-  aged
//4 - charred creature
//5 - frozen
var RemoveEffectsNotOfType = function (akActor, aiEffectType) { return sn.RemoveEffectsNotOfType(akActor, aiEffectType); };
// 0 - permanent
// 1 - temporary
// 2 - frozenActor
// 3 - frozenCol
var SendFECResetEvent = function (akActor, aiType, abReset3D) { return sn.SendFECResetEvent(akActor, aiType, abReset3D); };
//----------------------------------------------------------------------------------------------------------
//FORM
//----------------------------------------------------------------------------------------------------------
//-------
//GETTERS
//-------
//Record flags
//https://en.uesp.net/wiki/Skyrim_Mod:Mod_File_Format#Records
//evaluates condition lists for spells/potions/enchantments/mgefs and returns if they can be fullfilled
var EvaluateConditionList = function (akForm, akActionRef, akTargetRef) { return sn.EvaluateConditionList(akForm, akActionRef, akTargetRef); };
//Clear record flag
var ClearRecordFlag = function (akForm, aiFlag) { return sn.ClearRecordFlag(akForm, aiFlag); };
//Builds a list of conditions present on the form. Index is for spells/other forms that have lists with conditions
//Some conditions may be skipped (conditions that require non player references, overly complex conditions involving packages/aliases)
var GetConditionList = function (akForm, aiIndex) {
    if (aiIndex === void 0) { aiIndex = 0; }
    return sn.GetConditionList(akForm, aiIndex);
};
//Get form editorID
var GetFormEditorID = function (akForm) {
    return sn.GetFormEditorID(akForm);
};
//Returns whether the form is part of the mod
var IsFormInMod = function (akForm, asModName) { return sn.IsFormInMod(akForm, asModName); };
//Returns whether the form is temporary (ie. has a formID beginning with FF)
var IsGeneratedForm = function (akForm) {
    return sn.IsGeneratedForm(akForm);
};
//Is record flag set?
var IsRecordFlagSet = function (akForm, aiFlag) { return sn.IsRecordFlagSet(akForm, aiFlag); };
//returns whether the form has script attached. If scriptName is empty, it will return if the form has any non-base scripts attached
var IsScriptAttachedToForm = function (akForm, asScriptName) { return sn.IsScriptAttachedToForm(akForm, asScriptName); };
//Set record flag
var SetRecordFlag = function (akForm, aiFlag) { return sn.SetRecordFlag(akForm, aiFlag); };
//-------
//SETTERS
//-------
//Adds keyword to form. Fails if the form doesn't accept keywords.
var AddKeywordToForm = function (akForm, akKeyword) { return sn.AddKeywordToForm(akForm, akKeyword); };
//Favorites item (must be in inventory) or spell/shout
var MarkItemAsFavorite = function (akForm) {
    return sn.MarkItemAsFavorite(akForm);
};
//Replaces given keyword with new one on form. Only lasts for a single gaming session. [ported from DienesTools].
var ReplaceKeywordOnForm = function (akForm, akKeywordAdd, akKeywordRemove) { return sn.ReplaceKeywordOnForm(akForm, akKeywordAdd, akKeywordRemove); };
//Removes keyword, if present, from form.
var RemoveKeywordOnForm = function (akForm, akKeyword) { return sn.RemoveKeywordOnForm(akForm, akKeyword); };
//Unfavorites item (must be in inventory) or spell/shout
var UnmarkItemAsFavorite = function (akForm) {
    return sn.UnmarkItemAsFavorite(akForm);
};
//----------------------------------------------------------------------------------------------------------
//FURNITURE
//----------------------------------------------------------------------------------------------------------
/** FURNITURE TYPES
        Perch = 0
        Lean = 1
        Sit = 2
        Sleep = 3 */
//Gets furniture type
var GetFurnitureType = function (akFurniture) { return sn.GetFurnitureType(akFurniture); };
//----------------------------------------------------------------------------------------------------------
//GAME
//----------------------------------------------------------------------------------------------------------
//Gets all enchantments from base game + mods, filtered using optional keyword array
var GetAllEnchantments = function (akKeywords) {
    if (akKeywords === void 0) { akKeywords = null; }
    return sn.GetAllEnchantments(akKeywords);
};
//Gets all forms from base game + mods, filtered using formtype and optional keyword array
var GetAllForms = function (aiFormType, akKeywords) {
    if (akKeywords === void 0) { akKeywords = null; }
    return sn.GetAllForms(aiFormType, akKeywords);
};
//Gets all races from base game + mods, filtered using optional keyword array
var GetAllRaces = function (akKeywords) {
    if (akKeywords === void 0) { akKeywords = null; }
    return sn.GetAllRaces(akKeywords);
};
//Gets all spells from base game + mods, filtered using optional keyword array. IsPlayable filters out spells that are not found in spellbooks.
var GetAllSpells = function (akKeywords, abIsPlayable) {
    if (akKeywords === void 0) { akKeywords = null; }
    if (abIsPlayable === void 0) { abIsPlayable = false; }
    return sn.GetAllSpells(akKeywords, abIsPlayable);
};
/** AI PROCESS LEVEL
        HighProcess = 0
        MiddleHighProcess = 1
        MiddleLowProcess = 2
        LowProcess = 3 */
//Gets all actors by AI processing type. https://geck.bethsoft.com/index.php?title=GetActorsByProcessingLevel for more info
var GetActorsByProcessingLevel = function (aiLevel) {
    return sn.GetActorsByProcessingLevel(aiLevel);
};
//Gets all forms added by a specified mod/game esm, filtered using formtype and optional keyword array.
var GetAllFormsInMod = function (asModName, aiFormType, akKeywords) {
    if (akKeywords === void 0) { akKeywords = null; }
    return sn.GetAllFormsInMod(asModName, aiFormType, akKeywords);
};
//Gets all enchantments added by a specified mod/game esm, filtered using optional keyword array.
var GetAllEnchantmentsInMod = function (asModName, akKeywords) {
    if (akKeywords === void 0) { akKeywords = null; }
    return sn.GetAllEnchantmentsInMod(asModName, akKeywords);
};
//Gets all races added by a specified mod/game esm, filtered using optional keyword array.
var GetAllRacesInMod = function (asModName, akKeywords) {
    if (akKeywords === void 0) { akKeywords = null; }
    return sn.GetAllRacesInMod(asModName, akKeywords);
};
//Gets all spells added by a specified mod/game esm, filtered using optional keyword array.
var GetAllSpellsInMod = function (asModName, akKeywords, abIsPlayable) {
    if (akKeywords === void 0) { akKeywords = null; }
    if (abIsPlayable === void 0) { abIsPlayable = false; }
    return sn.GetAllSpellsInMod(asModName, akKeywords, abIsPlayable);
};
//Gets current cell if in interior/attached cells in exterior/sky cells if in worldspace with no attached cells??
var GetAttachedCells = function () { return sn.GetAttachedCells(); };
//Gets form using its editorID
var GetFormFromEditorID = function (asEditorID) { return sn.GetFormFromEditorID(asEditorID); };
//Gets the value of the boolean gamesetting. Returns -1 if gmst is None or not a bool.
var GetGameSettingBool = function (asGameSetting) {
    return sn.GetGameSettingBool(asGameSetting);
};
//Returns whether God Mode is enabled
var GetGodMode = function () { return sn.GetGodMode(); };
//Gets local gravity of the exterior worldspace/interior cell. Default gravity is [0.0, 0.0, -9.81]
var GetLocalGravity = function () { return sn.GetLocalGravity(); };
//Gets how many actors are in high process
var GetNumActorsInHigh = function () { return sn.GetNumActorsInHigh(); };
//Returns all actors that are currently following the player
var GetPlayerFollowers = function () { return sn.GetPlayerFollowers(); };
//Returns whether plugin exists
var IsPluginFound = function (akName) {
    return sn.IsPluginFound(akName);
};
//Returns whether CC Survival Mode is enabled
var IsSurvivalModeActive = function () { return sn.IsSurvivalModeActive(); };
//Sets local gravity (ms-2) of the exterior worldspace/interior cell.
var SetLocalGravity = function (afXAxis, afYAxis, afZAxis) { return sn.SetLocalGravity(afXAxis, afYAxis, afZAxis); };
//----------------------------------------------------------------------------------------------------------
//HAZARD
//----------------------------------------------------------------------------------------------------------
//-------
//GETTERS
//-------
/** HAZARD FLAGS
        None = 0
        PCOnly = 0x00000001
        InheritDuration = 0x00000002
        AlignToNormal = 0x00000004
        InheritRadius = 0x00000008
        DropToGround = 0x00000010 */
//Gets hazard art path, eg. "Effects/MyHazardArt.nif"
var GetHazardArt = function (akHazard) {
    return sn.GetHazardArt(akHazard);
};
//Gets associated IMOD
var GetHazardIMOD = function (akHazard) { return sn.GetHazardIMOD(akHazard); };
//Gets IMOD radius
var GetHazardIMODRadius = function (akHazard) { return sn.GetHazardIMODRadius(akHazard); };
//Gets impact data set
var GetHazardIPDS = function (akHazard) { return sn.GetHazardIPDS(akHazard); };
//Gets hazard lifetime
var GetHazardLifetime = function (akHazard) { return sn.GetHazardLifetime(akHazard); };
//Gets hazard light
var GetHazardLight = function (akHazard) { return sn.GetHazardLight(akHazard); };
//Gets hazard limit
var GetHazardLimit = function (akHazard) {
    return sn.GetHazardLimit(akHazard);
};
//Gets hazard radius
var GetHazardRadius = function (akHazard) {
    return sn.GetHazardRadius(akHazard);
};
//Gets hazard sound
var GetHazardSound = function (akHazard) { return sn.GetHazardSound(akHazard); };
//Gets hazard spell
var GetHazardSpell = function (akHazard) { return sn.GetHazardSpell(akHazard); };
//Gets target interval (duration between casts)
var GetHazardTargetInterval = function (akHazard) { return sn.GetHazardTargetInterval(akHazard); };
//Is hazard flag set?
var IsHazardFlagSet = function (akHazard, aiFlag) { return sn.IsHazardFlagSet(akHazard, aiFlag); };
//-------
//SETTERS
//-------
//Clears hazard flag
var ClearHazardFlag = function (akHazard, aiFlag) { return sn.ClearHazardFlag(akHazard, aiFlag); };
//Sets hazard art path. Does not work on active hazards
var SetHazardArt = function (akHazard, asPath) { return sn.SetHazardArt(akHazard, asPath); };
//Set flag
var SetHazardFlag = function (akHazard, aiFlag) { return sn.SetHazardFlag(akHazard, aiFlag); };
//Sets IMOD
var SetHazardIMOD = function (akHazard, akIMOD) { return sn.SetHazardIMOD(akHazard, akIMOD); };
//Sets IMOD radius
var SetHazardIMODRadius = function (akHazard, afRadius) { return sn.SetHazardIMODRadius(akHazard, afRadius); };
//Sets impact data set
var SetHazardIPDS = function (akHazard, akIPDS) { return sn.SetHazardIPDS(akHazard, akIPDS); };
//Sets hazard lifetime
var SetHazardLifetime = function (akHazard, afLifetime) { return sn.SetHazardLifetime(akHazard, afLifetime); };
//Sets hazard light
var SetHazardLight = function (akHazard, akLight) { return sn.SetHazardLight(akHazard, akLight); };
//Sets hazard limit
var SetHazardLimit = function (akHazard, aiLimit) { return sn.SetHazardLimit(akHazard, aiLimit); };
//Sets hazard radius
var SetHazardRadius = function (akHazard, afRadius) { return sn.SetHazardRadius(akHazard, afRadius); };
//Sets hazard sound
var SetHazardSound = function (akHazard, akSound) { return sn.SetHazardSound(akHazard, akSound); };
//Sets hazard spell
var SetHazardSpell = function (akHazard, akspell) { return sn.SetHazardSpell(akHazard, akspell); };
//Sets hazard interval
var SetHazardTargetInterval = function (akHazard, afInterval) { return sn.SetHazardTargetInterval(akHazard, afInterval); };
//----------------------------------------------------------------------------------------------------------
//LIGHT
//----------------------------------------------------------------------------------------------------------
//-------
//GETTERS
//-------
//Gets light color.
var GetLightColor = function (akLight) { return sn.GetLightColor(akLight); };
//Gets light fade range.
var GetLightFade = function (akLight) {
    return sn.GetLightFade(akLight);
};
//Gets base light FOV.
var GetLightFOV = function (akLight) {
    return sn.GetLightFOV(akLight);
};
//Gets light radius (radius is actually int but changing that would break mods so fixed that in source).
var GetLightRadius = function (akLight) {
    return sn.GetLightRadius(akLight);
};
//Gets light color as RGB array [0-255].
var GetLightRGB = function (akLight) {
    return sn.GetLightRGB(akLight);
};
//Gets depth bias, returns 1 if not set.
var GetLightShadowDepthBias = function (akLightObject) { return sn.GetLightShadowDepthBias(akLightObject); };
/** LIGHT TYPES
        HemiShadow = 1
        Omni = 2
        OmniShadow = 3
        Spot = 4
        SpotShadow = 5 */
//Get light type
var GetLightType = function (akLight) {
    return sn.GetLightType(akLight);
};
//-------
//SETTERS
//-------
//Sets light color.
var SetLightColor = function (akLight, akColorform) { return sn.SetLightColor(akLight, akColorform); };
//Sets light fade range.
var SetLightFade = function (akLight, afRange) { return sn.SetLightFade(akLight, afRange); };
//sets base light FOV.
var SetLightFOV = function (akLight, afFOV) { return sn.SetLightFOV(akLight, afFOV); };
//Sets light radius (minimum light radius is 16) .
var SetLightRadius = function (akLight, afRadius) { return sn.SetLightRadius(akLight, afRadius); };
//Sets light color using RGB array [0-255]. Array must contain 3 elements (r,g,b).
var SetLightRGB = function (akLight, aiRGB) { return sn.SetLightRGB(akLight, aiRGB); };
//sets depth bias on light reference. Creates new depth bias extradata on lights that don't have it set.
var SetLightShadowDepthBias = function (akLightObject, afDepthBias) { return sn.SetLightShadowDepthBias(akLightObject, afDepthBias); };
//Sets light type. Does not persist between sessions.
var SetLightType = function (akLight, aiLightType) { return sn.SetLightType(akLight, aiLightType); };
//----------------------------------------------------------------------------------------------------------
//LOCATION
//----------------------------------------------------------------------------------------------------------
//-------
//GETTERS
//-------
//Get parent location.
var GetParentLocation = function (akLoc) { return sn.GetParentLocation(akLoc); };
//-------
//SETTERS
//-------
//Set parent location.
var SetParentLocation = function (akLoc, akNewLoc) { return sn.SetParentLocation(akLoc, akNewLoc); };
//----------------------------------------------------------------------------------------------------------
//MAGIC EFFECTS
//----------------------------------------------------------------------------------------------------------
//---------
//GETTERS
//---------
//Gets associated form (Light for Light spells, Actor for Summon Creature...), if any
var GetAssociatedForm = function (akMagicEffect) { return sn.GetAssociatedForm(akMagicEffect); };
/** EFFECT ARCHETYPES
        ValueMod = 0
        Script = 1
        Dispel = 2
        CureDisease = 3
        Absorb = 4
        DualValueMod = 5
        Calm = 6
        Demoralize = 7
        Frenzy = 8
        Disarm = 9
        CommandSummoned = 10
        Invisibility = 11
        Light = 12
        Darkness = 13
        NightEye = 14
        Lock = 15
        Open = 16
        BoundWeapon = 17
        SummonCreature = 18
        DetectLife = 19
        Telekinesis = 20
        Paralysis = 21
        Reanimate = 22
        SoulTrap = 23
        TurnUndead = 24
        Guide = 25
        WerewolfFeed = 26
        CureParalysis = 27
        CureAddiction = 28
        CurePoison = 29
        Concussion = 30
        ValueAndParts = 31
        AccumulateMagnitude = 32
        Stagger = 33
        PeakValueMod = 34
        Cloak = 35
        Werewolf = 36
        SlowTime = 37
        Rally = 38
        EnhanceWeapon = 39
        SpawnHazard = 40
        Etherealize = 41
        Banish = 42
        SpawnScriptedRef = 43
        Disguise = 44
        GrabActor = 45
        VampireLord = 46 */
//Gets effect archetype of magiceffect and returns as int (0-46).
var GetEffectArchetypeAsInt = function (akMagicEffect) { return sn.GetEffectArchetypeAsInt(akMagicEffect); };
//Gets effect archetype of magiceffect and returns as String.
var GetEffectArchetypeAsString = function (akMagicEffect) { return sn.GetEffectArchetypeAsString(akMagicEffect); };
//Gets primary actor value as string, if any (FrostResist, SpeedMult).
var GetPrimaryActorValue = function (akMagicEffect) { return sn.GetPrimaryActorValue(akMagicEffect); };
//Gets secondary actor value as string, if any.
var GetSecondaryActorValue = function (akMagicEffect) { return sn.GetSecondaryActorValue(akMagicEffect); };
/** MGEF SOUND TYPES
        Draw/Sheathe = 0
        Charge = 1
        Ready = 2
        Release = 3
        Concentration Cast Loop = 4
        On Hit = 5 */
//Gets Sound attached to index of Sound type specified in magic effect.
var GetMagicEffectSound = function (akMagicEffect, aiType) {
    return sn.GetMagicEffectSound(akMagicEffect, aiType);
};
//-------
//SETTERS
//-------
//Sets associated form (Light for Light spells, Actor for Summon Creature...). Can be None
var SetAssociatedForm = function (akMagicEffect, akForm) { return sn.SetAssociatedForm(akMagicEffect, akForm); };
//Sets sound descriptor attached to index of Sound type specified in magic effect.
var SetMagicEffectSound = function (akMagicEffect, akSoundDescriptor, aiType) { return sn.SetMagicEffectSound(akMagicEffect, akSoundDescriptor, aiType); };
//----------------------------------------------------------------------------------------------------------
//OBJECTREFERENCES
//----------------------------------------------------------------------------------------------------------
//--------
//GETTERS
//--------
//Adds all inventory items to array, filtering out equipped, favourited and quest items.
var AddAllItemsToArray = function (akRef, abNoEquipped, abNoFavorited, abNoQuestItem) {
    if (abNoEquipped === void 0) { abNoEquipped = true; }
    if (abNoFavorited === void 0) { abNoFavorited = false; }
    if (abNoQuestItem === void 0) { abNoQuestItem = false; }
    return sn.AddAllItemsToArray(akRef, abNoEquipped, abNoFavorited, abNoQuestItem);
};
//Adds all inventory items to formlist, filtering out equipped, favourited and quest items.
var AddAllItemsToList = function (akRef, akList, abNoEquipped, abNoFavorited, abNoQuestItem) {
    if (abNoEquipped === void 0) { abNoEquipped = true; }
    if (abNoFavorited === void 0) { abNoFavorited = false; }
    if (abNoQuestItem === void 0) { abNoQuestItem = false; }
    return sn.AddAllItemsToList(akRef, akList, abNoEquipped, abNoFavorited, abNoQuestItem);
};
//Adds inventory items matching formtype to array, filtering out equipped, favourited and quest items.
var AddItemsOfTypeToArray = function (akRef, aiFormType, abNoEquipped, abNoFavorited, abNoQuestItem) {
    if (abNoEquipped === void 0) { abNoEquipped = true; }
    if (abNoFavorited === void 0) { abNoFavorited = false; }
    if (abNoQuestItem === void 0) { abNoQuestItem = false; }
    return sn.AddItemsOfTypeToArray(akRef, aiFormType, abNoEquipped, abNoFavorited, abNoQuestItem);
};
//Adds inventory items matching formtype to formlist, filtering out equipped, favourited and quest items.
var AddItemsOfTypeToList = function (akRef, akList, aiFormType, abNoEquipped, abNoFavorited, abNoQuestItem) {
    if (abNoEquipped === void 0) { abNoEquipped = true; }
    if (abNoFavorited === void 0) { abNoFavorited = false; }
    if (abNoQuestItem === void 0) { abNoQuestItem = false; }
    return sn.AddItemsOfTypeToList(akRef, akList, aiFormType, abNoEquipped, abNoFavorited, abNoQuestItem);
};
//Finds all references of form type in loaded cells, within radius from ref. If afRadius is 0, it will get all references from all attached cells
var FindAllReferencesOfFormType = function (akRef, formType, afRadius) {
    return sn.FindAllReferencesOfFormType(akRef, formType, afRadius);
};
//Find all references with keyword in loaded cells, within radius from ref. If afRadius is 0, it will get all references from all attached cells
var FindAllReferencesWithKeyword = function (akRef, keywordOrList, afRadius, abMatchAll) {
    return sn.FindAllReferencesWithKeyword(akRef, keywordOrList, afRadius, abMatchAll);
};
//Find all references matching base form/in formlist, within radius from ref. If afRadius is 0, it will get all references from all attached cells
var FindAllReferencesOfType = function (akRef, akFormOrList, afRadius) {
    return sn.FindAllReferencesOfType(akRef, akFormOrList, afRadius);
};
//Gets the first item in inventory that exists in formlist.
var FindFirstItemInList = function (akRef, akList) { return sn.FindFirstItemInList(akRef, akList); };
//Gets activate children - see IsActivateChild
var GetActivateChildren = function (akRef) { return sn.GetActivateChildren(akRef); };
//Gets current gamebryo animation
var GetActiveGamebryoAnimation = function (akRef) { return sn.GetActiveGamebryoAnimation(akRef); };
//Gets actor responsible for object.
var GetActorCause = function (akRef) { return sn.GetActorCause(akRef); };
//Get all art objects attached to this object.
var GetAllArtObjects = function (akRef) { return sn.GetAllArtObjects(akRef); };
//Get all effect shaders attached to this object.
var GetAllEffectShaders = function (akRef) { return sn.GetAllEffectShaders(akRef); };
//Gets closest actor to ref (without returning the reference itself).
var GetClosestActorFromRef = function (akRef, abIgnorePlayer) { return sn.GetClosestActorFromRef(akRef, abIgnorePlayer); };
//Gets duration of the effectshader on the ref.
var GetEffectShaderDuration = function (akRef, akShader) { return sn.GetEffectShaderDuration(akRef, akShader); };
//Gets the door which is linked to this load door.
var GetDoorDestination = function (akRef) { return sn.GetDoorDestination(akRef); };
//Gets all refs linked to akRef. Keyword optional.
var GetLinkedChildren = function (akRef, akKeyword) { return sn.GetLinkedChildren(akRef, akKeyword); };
//Gets the source of the magic effect (spell/enchantment/scroll etc) and the caster. Magic effect must be present on the reference.
var GetMagicEffectSource = function (akRef, akEffect) { return sn.GetMagicEffectSource(akRef, akEffect); };
/** MATERIAL TYPES - String
        StoneBroken
        BlockBlade1Hand
        Meat
        CarriageWheel
        MetalLight
        WoodLight
        Snow
        Gravel
        ChainMetal
        Bottle
        Wood
        Ash
        Skin
        BlockBlunt
        DLC1DeerSkin
        Insect
        Barrel
        CeramicMedium
        Basket
        Ice
        GlassStairs
        StoneStairs
        Water
        DraugrSkeleton
        Blade1Hand
        Book
        Carpet
        MetalSolid
        Axe1Hand
        BlockBlade2Hand
        OrganicLarge
        Amulet
        WoodStairs
        Mud
        BoulderSmall
        SnowStairs
        StoneHeavy
        DragonSkeleton
        Trap
        BowsStaves
        Alduin
        BlockBowsStaves
        WoodAsStairs
        SteelGreatSword
        Grass
        BoulderLarge
        StoneAsStairs
        Blade2Hand
        BottleSmall
        BoneActor
        Sand
        MetalHeavy
        DLC1SabreCatPelt
        IceForm
        Dragon
        Blade1HandSmall
        SkinSmall
        PotsPans
        SkinSkeleton
        Blunt1Hand
        StoneStairsBroken
        SkinLarge
        Organic
        Bone
        WoodHeavy
        Chain
        Dirt
        Ghost
        SkinMetalLarge
        BlockAxe
        ArmorLight
        ShieldLight
        Coin
        BlockBlunt2Hand
        ShieldHeavy
        ArmorHeavy
        Arrow
        Glass
        Stone
        WaterPuddle
        Cloth
        SkinMetalSmall
        Ward
        Web
        TrailerSteelSword
        Blunt2Hand
        DLC1SwingingBridge
        BoulderMedium */
//Gets the specified collision shape's havok material types as string array. Returns the first material type if nodeName is empty
var GetMaterialType = function (akRef, asNodeName) {
    if (asNodeName === void 0) { asNodeName = ""; }
    return sn.GetMaterialType(akRef, asNodeName);
};
//Gets the motion type of the object (see vanilla SetMotionType for types). Returns -1 if 3d is not loaded
var GetMotionType = function (akRef) { return sn.GetMotionType(akRef); };
//Gets random actor near ref (without returning the reference itself).
var GetRandomActorFromRef = function (akRef, afRadius, abIgnorePlayer) {
    return sn.GetRandomActorFromRef(akRef, afRadius, abIgnorePlayer);
};
//Gets quest items in this ref's inventory, if any
var GetQuestItems = function (akRef, abNoEquipped, abNoFavorited) {
    if (abNoEquipped === void 0) { abNoEquipped = false; }
    if (abNoFavorited === void 0) { abNoFavorited = false; }
    return sn.GetQuestItems(akRef, abNoEquipped, abNoFavorited);
};
//Get all aliases containing this ref
var GetRefAliases = function (akRef) { return sn.GetRefAliases(akRef); };
//Returns the size of the stored soul in a soulgem objectreference
var GetStoredSoulSize = function (akRef) { return sn.GetStoredSoulSize(akRef); };
//Returns the number of instances of the specified art object (attached using visual effects) on the reference.
var HasArtObject = function (akRef, akArtObject, abActive) {
    if (abActive === void 0) { abActive = false; }
    return sn.HasArtObject(akRef, akArtObject, abActive);
};
//Returns the number of instances of the specified effect shader on the reference.
var HasEffectShader = function (akRef, akShader, abActive) {
    if (abActive === void 0) { abActive = false; }
    return sn.HasEffectShader(akRef, akShader, abActive);
};
//Returns whether the reference has niextradata (attached to root 3D node). Partial matches accepted.
var HasNiExtraData = function (akRef, asName) { return sn.HasNiExtraData(akRef, asName); };
//Is door a load door?
var IsLoadDoor = function (akRef) { return sn.IsLoadDoor(akRef); };
//Is a quest object?
var IsQuestItem = function (akRef) { return sn.IsQuestItem(akRef); };
//Is a VIP (actor that is needed by quest)?
var IsVIP = function (akRef) {
    return sn.IsVIP(akRef);
};
//-------
//SETTERS
//-------
//Applies material shader to reference (doesn't have to be static)
var ApplyMaterialShader = function (akRef, akMatObject, directionalThresholdAngle) {
    return sn.ApplyMaterialShader(akRef, akMatObject, directionalThresholdAngle);
};
//Wrapper function for AddKeywordToForm.
var AddKeywordToRef = function (akRef, akKeyword) { return sn.AddKeywordToRef(akRef, akKeyword); };
//Snaps the object to the nearest navmesh point closest to its current position in the cell.
var MoveToNearestNavmeshLocation = function (akRef) { return sn.MoveToNearestNavmeshLocation(akRef); };
//Wrapper function for RemoveKeywordFromForm.
var RemoveKeywordFromRef = function (akRef, akKeyword) { return sn.RemoveKeywordFromRef(akRef, akKeyword); };
//Wrapper function for ReplaceKeywordOnForm.
var ReplaceKeywordOnRef = function (akRef, akKeywordAdd, akKeywordRemove) { return sn.ReplaceKeywordOnRef(akRef, akKeywordAdd, akKeywordRemove); };
//Plays debug shader on the reference, with normalised RGBA color (or fully white if empty)
var PlayDebugShader = function (akRef, afRGBA) { return sn.PlayDebugShader(akRef, afRGBA); };
//Scales node & collision (bhkBoxShape, bhkSphereShape). Entire nif will be scaled if string is empty. Collision has to be directly attached to named nodes.
//Adds "PO3_SCALE" niextradata to root node.
var ScaleObject3D = function (akRef, asNodeName, afScale) { return sn.ScaleObject3D(akRef, asNodeName, afScale); };
//Sets the base object of this reference and reloads 3D
var SetBaseObject = function (akRef, akBaseObject) { return sn.SetBaseObject(akRef, akBaseObject); };
/** COLLISION LAYERS
        kUnidentified = 0,
        kStatic = 1,
        kAnimStatic = 2,
        kTransparent = 3,
        kClutter = 4,
        kWeapon = 5,
        kProjectile = 6,
        kSpell = 7,
        kBiped = 8,
        kTrees = 9,
        kProps = 10,
        kWater = 11,
        kTrigger = 12,
        kTerrain = 13,
        kTrap = 14,
        kNonCollidable = 15,
        kCloudTrap = 16,
        kGround = 17,
        kPortal = 18,
        kDebrisSmall = 19,
        kDebrisLarge = 20,
        kAcousticSpace = 21,
        kActorZone = 22,
        kProjectileZone = 23,
        kGasTrap = 24,
        kShellCasting = 25,
        kTransparentWall = 26,
        kInvisibleWall = 27,
        kTransparentSmallAnim = 28,
        kClutterLarge = 29,
        kCharController = 30,
        kStairHelper = 31,
        kDeadBip = 32,
        kBipedNoCC = 33,
        kAvoidBox = 34,
        kCollisionBox = 35,
        kCameraSphere = 36,
        kDoorDetection = 37,
        kConeProjectile = 38,
        kCamera = 39,
        kItemPicker = 40,
        kLOS = 41,
        kPathingPick = 42,
        kUnused0 = 43,
        kUnused1 = 44,
        kSpellExplosion = 45,
        kDroppingPick = 46 */
//Sets object 3D root or specified node's collision layer
var SetCollisionLayer = function (akRef, asNodeName, aiCollisionLayer) { return sn.SetCollisionLayer(akRef, asNodeName, aiCollisionLayer); };
//Sets the door as the new linked door
var SetDoorDestination = function (akRef, akDoor) { return sn.SetDoorDestination(akRef, akDoor); };
//Sets effectshader duration. Internal duration is set when the effectshader begins and does not change with time.
var SetEffectShaderDuration = function (akRef, akShader, afTime, abAbsolute) { return sn.SetEffectShaderDuration(akRef, akShader, afTime, abAbsolute); };
//Sets linked ref. Pass None into akTargetRef to unset the linked ref.
var SetLinkedRef = function (akRef, akTargetRef, akKeyword) {
    if (akKeyword === void 0) { akKeyword = null; }
    return sn.SetLinkedRef(akRef, akTargetRef, akKeyword);
};
//Sets havok material type. Use oldMaterial string to select what material you want to change from to (eg. from stone to wood), and nodeName to apply it to the specific node.
//If both are empty, every collision material will be set.
var SetMaterialType = function (akRef, asNewMaterial, asOldMaterial, asNodeName) {
    if (asOldMaterial === void 0) { asOldMaterial = ""; }
    if (asNodeName === void 0) { asNodeName = ""; }
    return sn.SetMaterialType(akRef, asNewMaterial, asOldMaterial, asNodeName);
};
//Copies skin tint color from actorbase to bodyparts nif
var SetupBodyPartGeometry = function (akRef, akActor) { return sn.SetupBodyPartGeometry(akRef, akActor); };
/** SHADER TYPES
        kDefault = 0
        kEnvironmentMap = 1
        kGlowMap = 2
        kParallax = 3
        kFaceGen = 4
        kFaceGenRGBTint = 5
        kHairTint = 6
        kParallaxOcc = 7
        kMultiTexLand = 8
        kLODLand = 9
        kMultilayerParallax = 11
        kTreeAnim = 12
        kMultiIndexTriShapeSnow = 14
        kLODObjectsHD = 15
        kEye = 16
        kCloud = 17
        kLODLandNoise = 18
        kMultiTexLandLODBlend = 19 */
//sets the ref's shader material type ie. default to cubemap
//template needs to be loaded
//if texture type is -1, the reference's entire textureset is replaced using the template's textureset//
//if texture type is 0-9 the template's textureset is still applied but reference's texture at that index will take priority.
//optional diffuse path can be used to filter shapes to apply the shader to, partial matches are accepted like "Draugr.dds"
//limitations - cannot be used on geometry with no normals (ie. body skin meshes)
var SetShaderType = function (akRef, akTemplate, asDiffusePath, aiShaderType, aiTextureType, abNoWeapons, abNoAlphaProperty) {
    return sn.SetShaderType(akRef, akTemplate, asDiffusePath, aiShaderType, aiTextureType, abNoWeapons, abNoAlphaProperty);
};
//Stops ALL effect shaders and art objects (visual effects) currently on this actor
var StopAllShaders = function (akRef) { return sn.StopAllShaders(akRef); };
//Removes all instances of the art object (hit magic effect/visual effect) attached to the reference.
var StopArtObject = function (akRef, akArt) { return sn.StopArtObject(akRef, akArt); };
//Toggles node visibility.
var ToggleChildNode = function (akRef, asNodeName, abDisable) { return sn.ToggleChildNode(akRef, asNodeName, abDisable); };
//Updates node data. Move hit effect art to new node (ie. from "MagicEffectsNode" to "NPC Head [Head]") or update translate, rotate, and scale values.
//Translate and Rotate arrays must have three values in order to work. Rotate uses euler angles in degrees (XYZ). Scale is relative, and is multiplied by existing scale.
//If the hit effect art is removed and reattached, it will revert back to the values in the nif.
var UpdateHitEffectArtNode = function (akRef, akArt, asNewNode, afTranslate, afRotate, afRelativeScale) {
    if (afRelativeScale === void 0) { afRelativeScale = 1.0; }
    return sn.UpdateHitEffectArtNode(akRef, akArt, asNewNode, afTranslate, afRotate, afRelativeScale);
};
//----------------------------------------------------------------------------------------------------------
//PACKAGES
//----------------------------------------------------------------------------------------------------------
//-------
//GETTERS
//-------
/** PACKAGE TYPES
        Find = 0
        Follow = 1
        Escort = 2
        Eat = 3
        Sleep = 4
        Wander = 5
        Travel = 6
        Accompany = 7
        UseItemAt = 8
        Ambush = 9
        FleeNotCombat = 10
        CastMagic = 11
        Sandbox = 12
        Patrol = 13
        Guard = 14
        Dialogue = 15
        UseWeapon = 16
        Find2 = 17
        Package = 18
        PackageTemplate = 19
        Activate = 20
        Alarm = 21
        Flee = 22
        Trespass = 23
        Spectator = 24
        ReactToDead = 25
        GetUpFromChair = 26
        DoNothing = 27
        InGameDialogue = 28
        Surface =  29
        SearchForAttacker = 30
        AvoidPlayer = 31
        ReactToDestroyedObject = 32
        ReactToGrenadeOrMine = 33
        StealWarning = 34
        PickPocketWarning = 35
        MovementBlocked = 36
        VampireFeed = 37
        CannibalFeed = 38 */
//Gets package type. Returns -1 if package is none
var GetPackageType = function (akPackage) {
    return sn.GetPackageType(akPackage);
};
//Gets all idles on this package
var GetPackageIdles = function (akPackage) { return sn.GetPackageIdles(akPackage); };
//-------
//SETTERS
//-------
//Adds idle to the end of the package idle stack, creating it if needed.
var AddPackageIdle = function (akPackage, akIdle) { return sn.AddPackageIdle(akPackage, akIdle); };
//Removes idle from package
var RemovePackageIdle = function (akPackage, akIdle) { return sn.RemovePackageIdle(akPackage, akIdle); };
//----------------------------------------------------------------------------------------------------------
//PAPYRUS EXTENDER
//----------------------------------------------------------------------------------------------------------
//returns current version as int array (major,minor,patch / 4,3,7)
var GetPapyrusExtenderVersion = function () {
    return sn.GetPapyrusExtenderVersion();
};
//-----------------------------------------------------------------------------------------------------------
//POTION - see SPELL
//-----------------------------------------------------------------------------------------------------------
var AddMagicEffectToPotion = function (akPotion, akMagicEffect, afMagnitude, aiArea, aiDuration, afCost, asConditionList) {
    if (afCost === void 0) { afCost = 0.0; }
    return sn.AddMagicEffectToPotion(akPotion, akMagicEffect, afMagnitude, aiArea, aiDuration, afCost, asConditionList);
};
//Adds effectitem from Potion to target Potion, at given index. Same as above function, but less verbose, and preserves all conditions. Optional cost argument.
var AddEffectItemToPotion = function (akPotion, akPotionToCopyFrom, aiIndex, afCost) {
    if (afCost === void 0) { afCost = -1.0; }
    return sn.AddEffectItemToPotion(akPotion, akPotionToCopyFrom, aiIndex, afCost);
};
//Removes magic effect from Potion that matches magnitude/area/duration/cost.
var RemoveMagicEffectFromPotion = function (akPotion, akMagicEffect, afMagnitude, aiArea, aiDuration, afCost) {
    if (afCost === void 0) { afCost = 0.0; }
    return sn.RemoveMagicEffectFromPotion(akPotion, akMagicEffect, afMagnitude, aiArea, aiDuration, afCost);
};
//Removes effectitem from Potion that matches Potion at index.
var RemoveEffectItemFromPotion = function (akPotion, akPotionToMatchFrom, aiIndex) {
    return sn.RemoveEffectItemFromPotion(akPotion, akPotionToMatchFrom, aiIndex);
};
//----------------------------------------------------------------------------------------------------------
//PROJECTILES
//----------------------------------------------------------------------------------------------------------
//--------
//GETTERS
//--------
//Gets projectile gravity (usually 0.0 for non arrow projectiles).
var GetProjectileGravity = function (akProjectile) { return sn.GetProjectileGravity(akProjectile); };
//Gets projectile impact force.
var GetProjectileImpactForce = function (akProjectile) { return sn.GetProjectileImpactForce(akProjectile); };
//Gets projectile range.
var GetProjectileRange = function (akProjectile) { return sn.GetProjectileRange(akProjectile); };
//Gets projectile speed.
var GetProjectileSpeed = function (akProjectile) { return sn.GetProjectileSpeed(akProjectile); };
/** PROJECTILE TYPES
        Missile = 1
        Lobber = 2
        Beam = 3
        Flame = 4
        Cone = 5
        Barrier = 6
        Arrow = 7 */
//Get projectile type. 0 if projectile is None.
var GetProjectileType = function (akProjectile) { return sn.GetProjectileType(akProjectile); };
//-------
//SETTERS
//-------
//Sets projectile gravity.
var SetProjectileGravity = function (akProjectile, afGravity) { return sn.SetProjectileGravity(akProjectile, afGravity); };
//Sets projectile impact force.
var SetProjectileImpactForce = function (akProjectile, afImpactForce) { return sn.SetProjectileImpactForce(akProjectile, afImpactForce); };
//Sets projectile range.
var SetProjectileRange = function (akProjectile, afRange) { return sn.SetProjectileRange(akProjectile, afRange); };
//Sets projectile speed.
var SetProjectileSpeed = function (akProjectile, afSpeed) { return sn.SetProjectileSpeed(akProjectile, afSpeed); };
//-----------------------------------------------------------------------------------------------------------
//SCROLL - see SPELL
//-----------------------------------------------------------------------------------------------------------
var AddMagicEffectToScroll = function (akScroll, akMagicEffect, afMagnitude, aiArea, aiDuration, afCost, asConditionList) {
    if (afCost === void 0) { afCost = 0.0; }
    return sn.AddMagicEffectToScroll(akScroll, akMagicEffect, afMagnitude, aiArea, aiDuration, afCost, asConditionList);
};
//Adds effectitem from Scroll to target Scroll, at given index. Same as above function, but less verbose, and preserves all conditions. Optional cost argument.
var AddEffectItemToScroll = function (akScroll, akScrollToCopyFrom, aiIndex, afCost) {
    if (afCost === void 0) { afCost = -1.0; }
    return sn.AddEffectItemToScroll(akScroll, akScrollToCopyFrom, aiIndex, afCost);
};
//Removes magic effect from Scroll that matches magnitude/area/duration/cost.
var RemoveMagicEffectFromScroll = function (akScroll, akMagicEffect, afMagnitude, aiArea, aiDuration, afCost) {
    if (afCost === void 0) { afCost = 0.0; }
    return sn.RemoveMagicEffectFromScroll(akScroll, akMagicEffect, afMagnitude, aiArea, aiDuration, afCost);
};
//Removes effectitem from Scroll that matches Scroll at index.
var RemoveEffectItemFromScroll = function (akScroll, akScrollToMatchFrom, aiIndex) {
    return sn.RemoveEffectItemFromScroll(akScroll, akScrollToMatchFrom, aiIndex);
};
//-----------------------------------------------------------------------------------------------------------
//SOUND
//-----------------------------------------------------------------------------------------------------------
//Sets sound descriptor attached to the sound.
var SetSoundDescriptor = function (akSound, akSoundDescriptor) { return sn.SetSoundDescriptor(akSound, akSoundDescriptor); };
//-----------------------------------------------------------------------------------------------------------
//SPELL
//-----------------------------------------------------------------------------------------------------------
//--------
//GETTERS
//--------
/** SPELL TYPES
        Spell = 0
        Disease = 1
        Power = 2
        LesserPower = 3
        Ability = 4
        Poison = 5
        Addition = 6
        Voice = 7 */
//Returns spell type. -1 if spell is None
var GetSpellType = function (akSpell) {
    return sn.GetSpellType(akSpell);
};
//--------
//SETTERS
//--------
//ConditionItemObject | Function ID | parameter 1 | parameter 2 | OPCode | float | ANDOR
//conditions which have no parameters (eg. IsSneaking) / take in forms (GetIsRace) work
//conditions which accept int/float/strings are skipped
//Subject	| HasMagicEffectKeyword	| MagicInvisibility		| NONE | == | 0.0 | AND - in game
//Subject 	| HasMagicEffectKeyword	| 0001EA6F ~ Skyrim.esm | NONE | == | 0.0 | AND	- in papyrus
var AddMagicEffectToSpell = function (akSpell, akMagicEffect, afMagnitude, aiArea, aiDuration, afCost, asConditionList) {
    if (afCost === void 0) { afCost = 0.0; }
    return sn.AddMagicEffectToSpell(akSpell, akMagicEffect, afMagnitude, aiArea, aiDuration, afCost, asConditionList);
};
//Adds effectitem from spell to target spell, at given index. Same as above function, but less verbose, and preserves all conditions.
var AddEffectItemToSpell = function (akSpell, akSpellToCopyFrom, aiIndex, afCost) {
    if (afCost === void 0) { afCost = -1.0; }
    return sn.AddEffectItemToSpell(akSpell, akSpellToCopyFrom, aiIndex, afCost);
};
//Removes magic effect from spell that matches magnitude/area/duration/cost.
var RemoveMagicEffectFromSpell = function (akSpell, akMagicEffect, afMagnitude, aiArea, aiDuration, afCost) {
    if (afCost === void 0) { afCost = 0.0; }
    return sn.RemoveMagicEffectFromSpell(akSpell, akMagicEffect, afMagnitude, aiArea, aiDuration, afCost);
};
//Removes effectitem from spell that matches spell at index.
var RemoveEffectItemFromSpell = function (akSpell, akSpellToMatchFrom, aiIndex) { return sn.RemoveEffectItemFromSpell(akSpell, akSpellToMatchFrom, aiIndex); };
//Sets casting type of spell (and all attached magic effects)
var SetSpellCastingType = function (akSpell, aiType) { return sn.SetSpellCastingType(akSpell, aiType); };
//Sets delivery type of spell (and all attached magic effects)
var SetSpellDeliveryType = function (akSpell, aiType) { return sn.SetSpellDeliveryType(akSpell, aiType); };
//----------------------------------------------------------------------------------------------------------
//STRINGS
//----------------------------------------------------------------------------------------------------------
//Converts string to hex value if valid
var IntToString = function (aiValue, abHex) {
    return sn.IntToString(aiValue, abHex);
};
//Converts string to int. Returns -1 for out of bound values.
var StringToInt = function (asString) {
    return sn.StringToInt(asString);
};
//----------------------------------------------------------------------------------------------------------
//UI
//----------------------------------------------------------------------------------------------------------
//Gets the objectreference of the currently opened container in container menu
var GetMenuContainer = function () {
    return sn.GetMenuContainer();
};
//----------------------------------------------------------------------------------------------------------
//UTILITY
//----------------------------------------------------------------------------------------------------------
//Calculates a random float between afMin and afMax, based on Mersenne Twister
var GenerateRandomFloat = function (afMin, afMax) {
    return sn.GenerateRandomFloat(afMin, afMax);
};
//Calculates a random integer between afMin and afMax, based on Mersenne Twister
var GenerateRandomInt = function (afMin, afMax) {
    return sn.GenerateRandomInt(afMin, afMax);
};
//Gets system time and date
//Year (1601 - 30827)
//Month (1-12)
//DayOfWeek (1:Sunday - 7:Saturday)
//Day (1-31)
//Hour (0-23)
//Minute (0-59)
//Second (0-59)
//Millisecond (0-999)
var GetSystemTime = function () { return sn.GetSystemTime(); };
//-----------------------------------------------------------------------------------------------------------
//VISUALEFFECTS
//----------------------------------------------------------------------------------------------------------
//--------
//GETTERS
//--------
//Gets the art object associated with the visual effect.
var GetArtObject = function (akEffect) { return sn.GetArtObject(akEffect); };
//Returns the total number of art objects present/active (on objects) within the loaded area.
var GetArtObjectTotalCount = function (akEffect, abActive) { return sn.GetArtObjectTotalCount(akEffect, abActive); };
//--------
//SETTERS
//--------
//Sets the art object associated with the visual effect.
var SetArtObject = function (akEffect, akArt) { return sn.SetArtObject(akEffect, akArt); };
//-----------------------------------------------------------------------------------------------------------
//WEATHER
//----------------------------------------------------------------------------------------------------------
//Gets wind speed as shown as in CK conditions (0.0-1.0).
var GetWindSpeedAsFloat = function (akWeather) { return sn.GetWindSpeedAsFloat(akWeather); };
//Gets wind speed as shown in the weather form (0-255).
var GetWindSpeedAsInt = function (akWeather) { return sn.GetWindSpeedAsInt(akWeather); };
/** WEATHER TYPES
        Pleasant = 0
        Cloudy = 1
        Rainy = 2
        Snow = 3 */
//Gets weather/current weather type if akWeather is None
var GetWeatherType = function (akWeather) {
    if (akWeather === void 0) { akWeather = null; }
    return sn.GetWeatherType(akWeather);
};


/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormToString": () => (/* binding */ FormToString),
/* harmony export */   "pl": () => (/* binding */ pl),
/* harmony export */   "traceLog": () => (/* binding */ traceLog),
/* harmony export */   "log": () => (/* binding */ log),
/* harmony export */   "suKeys": () => (/* binding */ suKeys),
/* harmony export */   "juKeys": () => (/* binding */ juKeys),
/* harmony export */   "UIUpdateDebuffMeter": () => (/* binding */ UIUpdateDebuffMeter)
/* harmony export */ });
/* harmony import */ var _skyrim_platform_skyrim_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _skyrim_platform_skyrim_platform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_skyrim_platform_skyrim_platform__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _skyrim_platform_po3_papyrus_extender_PO3_SKSEFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _skyrim_platform_papyrus_util_StorageUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);


function FormToString(akForm) {
    var formid = akForm.getFormID();
    var formstring = (0,_skyrim_platform_po3_papyrus_extender_PO3_SKSEFunctions__WEBPACK_IMPORTED_MODULE_1__.IntToString)(formid, true);
    return formstring;
}
;
function pl() {
    return _skyrim_platform_skyrim_platform__WEBPACK_IMPORTED_MODULE_0__.Game.getPlayer();
}
function traceLog(functionName, msg, stackIndent) {
    if (msg === void 0) { msg = ""; }
    if (stackIndent === void 0) { stackIndent = 0; }
    var sBaseIndent = "";
    while (stackIndent > 0) {
        sBaseIndent = sBaseIndent + "  ";
        stackIndent--;
    }
    var result = sBaseIndent + "Lorica_Redone" + "::" + functionName;
    if (msg != "") {
        result = result + " -> ";
    }
    _skyrim_platform_skyrim_platform__WEBPACK_IMPORTED_MODULE_0__.Debug.trace(result + msg, 0);
}
function log(message) {
    var t = new Date().toLocaleString();
    var msg = t + ' :: ' + message;
    (0,_skyrim_platform_skyrim_platform__WEBPACK_IMPORTED_MODULE_0__.writeLogs)("LoricaRedone", msg);
}
var suKeys;
(function (suKeys) {
    suKeys["main"] = "LoricaRedone";
    suKeys["iCostList"] = "Individual Upkeep Cost of all Maintained Spells";
    suKeys["formUpkeepList"] = "Upkeep Spells";
    suKeys["formBlackList"] = "Spells Blacklisted from Lorica";
    suKeys["formAppliedList"] = "Spells Currently Applied";
    suKeys["iCumTotal"] = "Total Cumulative Penalty";
    suKeys["fCumFraction"] = "Number to mult magnitude by";
    suKeys["iUpkeepTotal"] = "Total Debuffs";
    suKeys["bSustainedMagic"] = "Sustained Magic Mode Toggle";
    suKeys["formExclusionList"] = "Spells to exclude from first dispel";
    suKeys["fUpkeepMult"] = "Spell Debuff Cost Multiplier";
    suKeys["bDualCast"] = "Dual Cast Flag";
    suKeys["fRitualMult"] = "Ritual Spell Debuff Cost Multiplier";
    suKeys["fCostMult"] = "Spell Debuff Cost Multiplier";
    suKeys["iDebuffMin"] = "Minimum Debuff Cost";
    suKeys["bCompatInitialized"] = "YM.Lorica.Compat.Init";
    suKeys["iCompatAllSpells"] = "YM.Lorica.Compat.AllSpells";
    suKeys["MCM_Enum_Upkeep"] = "YM.Lorica.MCM.Enum.Upkeep";
    suKeys["MCM_Enum_Blacklist"] = "YM.Lorica.MCM.Enum.Blacklist";
    suKeys["MCM_Enum_Utility"] = "YM.Lorica.MCM.Enum.Exclusion";
    suKeys["iChargeMaxDuration"] = "YM.LORICA.CHARGE.DURATION.MAX";
    suKeys["iChargeDurationUpperBound"] = "YM.LORICA.CHARGE.DURATION.UPPERBOUND";
    suKeys["iChargeCostSolution"] = "YM.LORICA.CHARGE.DURATION.SOLUTION";
    suKeys["iChargeCostAsymptote"] = "YM.LORICA.CHARGE.DURATION.ASYMPTOTE";
    suKeys["bChargingEnable"] = "YM.LORICA.CHARGE.ENABLE";
})(suKeys || (suKeys = {}));
;
var juKeys;
(function (juKeys) {
    juKeys["path"] = "../Lorica Redone/SpellList";
})(juKeys || (juKeys = {}));
;

function UIUpdateDebuffMeter() {
    var fManaMaxRemaining = pl().getBaseActorValue("magicka") + (0,_skyrim_platform_po3_papyrus_extender_PO3_SKSEFunctions__WEBPACK_IMPORTED_MODULE_1__.GetActorValueModifier)(pl(), 0, "magicka");
    var fMax = fManaMaxRemaining + (0,_skyrim_platform_papyrus_util_StorageUtil__WEBPACK_IMPORTED_MODULE_2__.GetIntValue)(null, suKeys.iUpkeepTotal) + (0,_skyrim_platform_papyrus_util_StorageUtil__WEBPACK_IMPORTED_MODULE_2__.GetIntValue)(null, suKeys.iCumTotal);
    var fPercent = 100 - ((fManaMaxRemaining / fMax) * 100);
    _skyrim_platform_skyrim_platform__WEBPACK_IMPORTED_MODULE_0__.Ui.invokeFloat("HUD Menu", "_root.HUDMovieBaseInstance.SetExhaustionPenaltyMeter", fPercent);
}
;


/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mainCompat": () => (/* binding */ mainCompat),
/* harmony export */   "UpdateAllSpells": () => (/* binding */ UpdateAllSpells),
/* harmony export */   "SetCosts": () => (/* binding */ SetCosts)
/* harmony export */ });
/* harmony import */ var _skyrim_platform_skyrim_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _skyrim_platform_skyrim_platform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_skyrim_platform_skyrim_platform__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _skyrim_platform_po3_papyrus_extender_PO3_SKSEFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _YM_Lorica_Shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _skyrim_platform_papyrus_util_JsonUtil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var _skyrim_platform_papyrus_util_StorageUtil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2);





// this is basically our default init stuff
var mainCompat = function () {
    // --------------------------COMPATABILITY SECTION-------------------------------------------
    (0,_skyrim_platform_skyrim_platform__WEBPACK_IMPORTED_MODULE_0__.once)('update', function () {
        // if ( GetIntValue(null, suKeys.bCompatInitialized, 0) == 0 ) {
        var formlistUpkeep = _skyrim_platform_skyrim_platform__WEBPACK_IMPORTED_MODULE_0__.FormList.from(_skyrim_platform_skyrim_platform__WEBPACK_IMPORTED_MODULE_0__.Game.getFormFromFile(0x1D62, "Lorica Redone.esp"));
        _skyrim_platform_skyrim_platform__WEBPACK_IMPORTED_MODULE_0__.Game.setGameSettingFloat("fMagicLesserPowerCooldownTimer", 0.01); // make lesser powers spammable, to enable spamming the dispel power
        // if ( !formlistUpkeep ) { return; };
        var allspells;
        allspells = (0,_skyrim_platform_po3_papyrus_extender_PO3_SKSEFunctions__WEBPACK_IMPORTED_MODULE_1__.GetAllSpells)(null, true); // GetAllSpells(Keyword[] akKeywords = None, bool abIsPlayable = false)
        (0,_skyrim_platform_papyrus_util_StorageUtil__WEBPACK_IMPORTED_MODULE_4__.SetIntValue)(null, _YM_Lorica_Shared__WEBPACK_IMPORTED_MODULE_2__.suKeys.iCompatAllSpells, allspells.length);
        formlistUpkeep === null || formlistUpkeep === void 0 ? void 0 : formlistUpkeep.revert();
        // -----------------Add all appropriate spells to Lorica----------------------------------------------
        for (var i = 0; i < allspells.length; i++) {
            var formSpell = _skyrim_platform_skyrim_platform__WEBPACK_IMPORTED_MODULE_0__.Form.from(allspells[i]);
            if (!(0,_skyrim_platform_papyrus_util_JsonUtil__WEBPACK_IMPORTED_MODULE_3__.FormListHas)(_YM_Lorica_Shared__WEBPACK_IMPORTED_MODULE_2__.juKeys.path, _YM_Lorica_Shared__WEBPACK_IMPORTED_MODULE_2__.suKeys.formBlackList, formSpell)) {
                if (isRightSpellType(formSpell)) {
                    (0,_skyrim_platform_papyrus_util_JsonUtil__WEBPACK_IMPORTED_MODULE_3__.IntListAdd)(_YM_Lorica_Shared__WEBPACK_IMPORTED_MODULE_2__.juKeys.path, _YM_Lorica_Shared__WEBPACK_IMPORTED_MODULE_2__.suKeys.formUpkeepList, formSpell === null || formSpell === void 0 ? void 0 : formSpell.getFormID(), false);
                    (0,_skyrim_platform_papyrus_util_JsonUtil__WEBPACK_IMPORTED_MODULE_3__.FormListAdd)(_YM_Lorica_Shared__WEBPACK_IMPORTED_MODULE_2__.juKeys.path, _YM_Lorica_Shared__WEBPACK_IMPORTED_MODULE_2__.suKeys.formUpkeepList, formSpell, false);
                    // formlistUpkeep?.addForm(formSpell);
                }
                ;
            }
            ;
        }
        ;
        (0,_skyrim_platform_papyrus_util_StorageUtil__WEBPACK_IMPORTED_MODULE_4__.SetIntValue)(null, _YM_Lorica_Shared__WEBPACK_IMPORTED_MODULE_2__.suKeys.bChargingEnable, 1);
        (0,_skyrim_platform_papyrus_util_StorageUtil__WEBPACK_IMPORTED_MODULE_4__.SetIntValue)(null, _YM_Lorica_Shared__WEBPACK_IMPORTED_MODULE_2__.suKeys.iChargeCostAsymptote, 100);
        (0,_skyrim_platform_papyrus_util_StorageUtil__WEBPACK_IMPORTED_MODULE_4__.SetIntValue)(null, _YM_Lorica_Shared__WEBPACK_IMPORTED_MODULE_2__.suKeys.iChargeCostSolution, 20);
        (0,_skyrim_platform_papyrus_util_StorageUtil__WEBPACK_IMPORTED_MODULE_4__.SetIntValue)(null, _YM_Lorica_Shared__WEBPACK_IMPORTED_MODULE_2__.suKeys.iChargeDurationUpperBound, 10);
        (0,_skyrim_platform_papyrus_util_StorageUtil__WEBPACK_IMPORTED_MODULE_4__.SetIntValue)(null, _YM_Lorica_Shared__WEBPACK_IMPORTED_MODULE_2__.suKeys.iChargeMaxDuration, 10);
        (0,_skyrim_platform_papyrus_util_JsonUtil__WEBPACK_IMPORTED_MODULE_3__.Save)(_YM_Lorica_Shared__WEBPACK_IMPORTED_MODULE_2__.juKeys.path);
        UpdateAllSpells();
        // CleanUp()
        // printConsole(FormListCount(juKeys.path, suKeys.formUpkeepList))
        (0,_skyrim_platform_papyrus_util_StorageUtil__WEBPACK_IMPORTED_MODULE_4__.SetIntValue)(null, _YM_Lorica_Shared__WEBPACK_IMPORTED_MODULE_2__.suKeys.bCompatInitialized, 1);
        (0,_skyrim_platform_skyrim_platform__WEBPACK_IMPORTED_MODULE_0__.printConsole)("Lorica Redone started");
        // };
    });
};
function UpdateAllSpells() { SetCosts('all'); CleanUp(); }
function CleanUp() {
    var allspells = (0,_skyrim_platform_papyrus_util_JsonUtil__WEBPACK_IMPORTED_MODULE_3__.FormListToArray)(_YM_Lorica_Shared__WEBPACK_IMPORTED_MODULE_2__.juKeys.path, _YM_Lorica_Shared__WEBPACK_IMPORTED_MODULE_2__.suKeys.formUpkeepList);
    var isInBlacklist = function (spell) { if ((0,_skyrim_platform_papyrus_util_JsonUtil__WEBPACK_IMPORTED_MODULE_3__.FormListHas)(_YM_Lorica_Shared__WEBPACK_IMPORTED_MODULE_2__.juKeys.path, _YM_Lorica_Shared__WEBPACK_IMPORTED_MODULE_2__.suKeys.formBlackList, spell)) {
        return true;
    } };
    for (var i = 0; i < allspells.length; i++) {
        var f = allspells[i];
        if (isInBlacklist(f)) {
            (0,_skyrim_platform_papyrus_util_JsonUtil__WEBPACK_IMPORTED_MODULE_3__.FormListRemove)(_YM_Lorica_Shared__WEBPACK_IMPORTED_MODULE_2__.juKeys.path, _YM_Lorica_Shared__WEBPACK_IMPORTED_MODULE_2__.suKeys.formUpkeepList, f, true);
            RemoveDescription(f);
        }
        ;
    }
}
var isRightSpellType = function (akForm) {
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
    var Archetype = function (akForm) { var E = _skyrim_platform_skyrim_platform__WEBPACK_IMPORTED_MODULE_0__.Spell.from(akForm).getNthEffectMagicEffect(0); return (0,_skyrim_platform_po3_papyrus_extender_PO3_SKSEFunctions__WEBPACK_IMPORTED_MODULE_1__.GetEffectArchetypeAsInt)(E); };
    var Duration = function (akForm) { var E = _skyrim_platform_skyrim_platform__WEBPACK_IMPORTED_MODULE_0__.Spell.from(akForm).getNthEffectMagicEffect(0); return _skyrim_platform_skyrim_platform__WEBPACK_IMPORTED_MODULE_0__.Spell.from(akForm).getNthEffectDuration(0); };
    var Effect = _skyrim_platform_skyrim_platform__WEBPACK_IMPORTED_MODULE_0__.Spell.from(akForm).getNthEffectMagicEffect(0);
    var iDeliveryType = Effect.getDeliveryType();
    var iCastType = Effect.getCastingType();
    var name = Effect.getName();
    /* only include spells that target 'self' and are 'fire and forget'; if they are 'fire and forget' and 'aimed,' only include 'conjuration' spells
        => FF and Self Spells;	FF and Aimed spells and Renaimate spells; FF and Target Location and Summon spells
    */
    if (name.toLowerCase().includes('npc')) {
        return;
    }
    if (iCastType == 1 && iDeliveryType == 0 && Duration(akForm) > 1
        || iCastType == 1 && iDeliveryType == 2 && Archetype(akForm) == 22
        || iCastType == 1 && iDeliveryType == 4 && Archetype(akForm) == 18) {
        return true;
    }
    else {
        return false;
    }
};
// main function to incorporate spells into lorica
function SetCosts(option, akspell) {
    // if ( !akspell ) { Debug.notification("something went wrong"); return; }
    var keywordRitual = _skyrim_platform_skyrim_platform__WEBPACK_IMPORTED_MODULE_0__.Keyword.from(_skyrim_platform_skyrim_platform__WEBPACK_IMPORTED_MODULE_0__.Game.getFormEx(0x806e1));
    var main = function (spell) {
        if (!spell) {
            return;
        }
        ;
        var iMag = 0;
        var sSpell = (0,_YM_Lorica_Shared__WEBPACK_IMPORTED_MODULE_2__.FormToString)(spell);
        var fCost = _skyrim_platform_skyrim_platform__WEBPACK_IMPORTED_MODULE_0__.Spell.from(spell).getEffectiveMagickaCost((0,_YM_Lorica_Shared__WEBPACK_IMPORTED_MODULE_2__.pl)());
        if (spell.hasKeyword(keywordRitual)) {
            iMag = fCost * (0,_skyrim_platform_papyrus_util_StorageUtil__WEBPACK_IMPORTED_MODULE_4__.GetFloatValue)(null, _YM_Lorica_Shared__WEBPACK_IMPORTED_MODULE_2__.suKeys.fRitualMult, 0.5);
        }
        else {
            iMag = fCost * (0,_skyrim_platform_papyrus_util_StorageUtil__WEBPACK_IMPORTED_MODULE_4__.GetFloatValue)(null, _YM_Lorica_Shared__WEBPACK_IMPORTED_MODULE_2__.suKeys.fCostMult, 0.5);
            // printConsole("SETCOSTS:: GetFloatValue(null, suKeys.fCostMult, 0.5) => " + GetFloatValue(null, suKeys.fCostMult, 0.5))
        }
        var fMin = (0,_skyrim_platform_papyrus_util_StorageUtil__WEBPACK_IMPORTED_MODULE_4__.GetIntValue)(null, _YM_Lorica_Shared__WEBPACK_IMPORTED_MODULE_2__.suKeys.iDebuffMin, 15);
        iMag = Math.floor(iMag);
        if (iMag < fMin) {
            iMag = fMin;
        }
        RemoveDescription(spell);
        (0,_skyrim_platform_papyrus_util_StorageUtil__WEBPACK_IMPORTED_MODULE_4__.SetFloatValue)(null, sSpell, iMag);
        AddDescription(spell, iMag);
    };
    // const CleanUp = function ( spell: Form ) {  }
    // if ( isInBlacklist(akspell!) ) { }
    if (option.toLowerCase().includes("all")) {
        _skyrim_platform_skyrim_platform__WEBPACK_IMPORTED_MODULE_0__.Debug.notification("Adding or reapplying debuffs to spells");
        for (var i = 0; i < (0,_skyrim_platform_papyrus_util_JsonUtil__WEBPACK_IMPORTED_MODULE_3__.FormListCount)(_YM_Lorica_Shared__WEBPACK_IMPORTED_MODULE_2__.juKeys.path, _YM_Lorica_Shared__WEBPACK_IMPORTED_MODULE_2__.suKeys.formUpkeepList); i++) {
            var formspell = (0,_skyrim_platform_papyrus_util_JsonUtil__WEBPACK_IMPORTED_MODULE_3__.FormListGet)(_YM_Lorica_Shared__WEBPACK_IMPORTED_MODULE_2__.juKeys.path, _YM_Lorica_Shared__WEBPACK_IMPORTED_MODULE_2__.suKeys.formUpkeepList, i);
            if (!formspell || !isRightSpellType(formspell)) {
                return;
            }
            ;
            main(formspell);
        }
        ;
        _skyrim_platform_skyrim_platform__WEBPACK_IMPORTED_MODULE_0__.Debug.notification("Finished adding or reapplying debuffs to spells");
    }
    ;
    if (option == "single") {
        _skyrim_platform_skyrim_platform__WEBPACK_IMPORTED_MODULE_0__.Debug.notification("Adding or reapplying debuffs to spells");
        if (isRightSpellType(akspell)) {
            main(akspell);
        }
        ;
        _skyrim_platform_skyrim_platform__WEBPACK_IMPORTED_MODULE_0__.Debug.notification("Finished adding or reapplying debuffs to spells");
    }
    ;
    // remove null entries from spell lists
    (0,_skyrim_platform_papyrus_util_JsonUtil__WEBPACK_IMPORTED_MODULE_3__.FormListRemove)(_YM_Lorica_Shared__WEBPACK_IMPORTED_MODULE_2__.juKeys.path, _YM_Lorica_Shared__WEBPACK_IMPORTED_MODULE_2__.suKeys.formUpkeepList, null, true);
    (0,_skyrim_platform_papyrus_util_JsonUtil__WEBPACK_IMPORTED_MODULE_3__.FormListRemove)(_YM_Lorica_Shared__WEBPACK_IMPORTED_MODULE_2__.juKeys.path, _YM_Lorica_Shared__WEBPACK_IMPORTED_MODULE_2__.suKeys.formBlackList, null, true);
    (0,_skyrim_platform_papyrus_util_JsonUtil__WEBPACK_IMPORTED_MODULE_3__.FormListRemove)(_YM_Lorica_Shared__WEBPACK_IMPORTED_MODULE_2__.juKeys.path, _YM_Lorica_Shared__WEBPACK_IMPORTED_MODULE_2__.suKeys.formExclusionList, null, true);
    (0,_skyrim_platform_papyrus_util_JsonUtil__WEBPACK_IMPORTED_MODULE_3__.Save)(_YM_Lorica_Shared__WEBPACK_IMPORTED_MODULE_2__.juKeys.path);
}
;
// add custom dummy magic effect to spells, with descriptions detailing debuff cost for each spell
function AddDescription(spell, iMag) {
    // dummy mgef's to hold custom description
    var dummySelf = _skyrim_platform_skyrim_platform__WEBPACK_IMPORTED_MODULE_0__.MagicEffect.from(_skyrim_platform_skyrim_platform__WEBPACK_IMPORTED_MODULE_0__.Game.getFormFromFile(0x001C41, "Lorica Redone.esp"));
    var dummyAimed = _skyrim_platform_skyrim_platform__WEBPACK_IMPORTED_MODULE_0__.MagicEffect.from(_skyrim_platform_skyrim_platform__WEBPACK_IMPORTED_MODULE_0__.Game.getFormFromFile(0x001E53, "Lorica Redone.esp"));
    var dummyTargetLocation = _skyrim_platform_skyrim_platform__WEBPACK_IMPORTED_MODULE_0__.MagicEffect.from(_skyrim_platform_skyrim_platform__WEBPACK_IMPORTED_MODULE_0__.Game.getFormFromFile(0x001E54, "Lorica Redone.esp"));
    // longest a spell/mgef can last in skyrim; a whole day I believe, in seconds
    var longtime = 84600;
    var S = _skyrim_platform_skyrim_platform__WEBPACK_IMPORTED_MODULE_0__.Spell.from(spell);
    var Effect = S.getNthEffectMagicEffect(0);
    var iDeliveryType = Effect.getDeliveryType();
    RemoveDescription(spell);
    if (iDeliveryType == 0) {
        (0,_skyrim_platform_po3_papyrus_extender_PO3_SKSEFunctions__WEBPACK_IMPORTED_MODULE_1__.AddMagicEffectToSpell)(S, dummySelf, iMag, 0, longtime, 0);
    }
    ; // '0' is target self
    if (iDeliveryType == 2) {
        (0,_skyrim_platform_po3_papyrus_extender_PO3_SKSEFunctions__WEBPACK_IMPORTED_MODULE_1__.AddMagicEffectToSpell)(S, dummyAimed, iMag, 0, longtime, 0);
    }
    ; // '2' is aimed
    if (iDeliveryType == 4) {
        (0,_skyrim_platform_po3_papyrus_extender_PO3_SKSEFunctions__WEBPACK_IMPORTED_MODULE_1__.AddMagicEffectToSpell)(S, dummyTargetLocation, iMag, 0, longtime, 0);
    }
    ; // '4' is target location	
}
;
function RemoveDescription(akSpell) {
    var _a;
    var S = _skyrim_platform_skyrim_platform__WEBPACK_IMPORTED_MODULE_0__.Spell.from(akSpell);
    // if ( !S ) { return;}
    for (var i = 0; i < S.getNumEffects(); i++) {
        if ((_a = S.getNthEffectMagicEffect(i)) === null || _a === void 0 ? void 0 : _a.getName().toLowerCase().includes('sustain spell')) {
            // RemoveMagicEffectFromSpell(S, removeeffect, removeMag, 0, removeDur  );
            (0,_skyrim_platform_po3_papyrus_extender_PO3_SKSEFunctions__WEBPACK_IMPORTED_MODULE_1__.RemoveEffectItemFromSpell)(S, S, i);
            // printConsole(`${S?.getName()} was removed`)
        }
    }
    ;
}


/***/ }),
/* 7 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DispelSpells": () => (/* binding */ DispelSpells),
/* harmony export */   "mainUtilitySpells": () => (/* binding */ mainUtilitySpells)
/* harmony export */ });
/* harmony import */ var _skyrim_platform_skyrim_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _skyrim_platform_skyrim_platform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_skyrim_platform_skyrim_platform__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _skyrim_platform_papyrus_util_JsonUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _skyrim_platform_papyrus_util_StorageUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _YM_Lorica_Shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _LoricaRedone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(0);
/* harmony import */ var _YM_Lorica_Compat__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6);






function DispelSpells(option) {
    if (option === void 0) { option = ''; }
    var l = (0,_skyrim_platform_papyrus_util_StorageUtil__WEBPACK_IMPORTED_MODULE_2__.FormListCount)(null, _YM_Lorica_Shared__WEBPACK_IMPORTED_MODULE_3__.suKeys.formAppliedList);
    var a = (0,_skyrim_platform_papyrus_util_StorageUtil__WEBPACK_IMPORTED_MODULE_2__.FormListToArray)(null, _YM_Lorica_Shared__WEBPACK_IMPORTED_MODULE_3__.suKeys.formAppliedList);
    for (var i = 0; i < l; i++) {
        var F = a[i];
        if ((0,_skyrim_platform_papyrus_util_JsonUtil__WEBPACK_IMPORTED_MODULE_1__.FormListHas)(_YM_Lorica_Shared__WEBPACK_IMPORTED_MODULE_3__.juKeys.path, _YM_Lorica_Shared__WEBPACK_IMPORTED_MODULE_3__.suKeys.formExclusionList, F) && option.toLowerCase() == 'exclusive') {
            continue;
        }
        (0,_LoricaRedone__WEBPACK_IMPORTED_MODULE_4__.ToggleSpell)("off", F);
    }
}
;
var mainUtilitySpells = function () {
    var i = 0;
    var flag = false;
    (0,_skyrim_platform_skyrim_platform__WEBPACK_IMPORTED_MODULE_0__.on)('effectStart', function (event) {
        var _a, _b, _c, _d;
        var mgefDispel = (_a = _skyrim_platform_skyrim_platform__WEBPACK_IMPORTED_MODULE_0__.Game.getFormFromFile(0x181A, "Lorica Redone.esp")) === null || _a === void 0 ? void 0 : _a.getFormID();
        // -----------------DISPEL--------------------------------------------------------------
        if (event.effect.getFormID() == mgefDispel) {
            flag = true;
            DispelSpells('exclusive');
        }
        if (event.effect.getFormID() == mgefDispel && i < 300 && i > 0) {
            i = 0;
            flag = false;
            DispelSpells("ALL");
        }
        ;
        // -------DISPEL TIMER-----------------------------------
        (0,_skyrim_platform_skyrim_platform__WEBPACK_IMPORTED_MODULE_0__.on)('update', function () {
            if (flag) {
                i++;
            }
            ;
            if (i > 300) {
                i = 0;
                flag = false;
            }
            ;
        });
        // ------------when 'Add Spell' is triggered-----------------------------------------
        var mgefAddspell = (_b = _skyrim_platform_skyrim_platform__WEBPACK_IMPORTED_MODULE_0__.Game.getFormFromFile(0x001822, "Lorica Redone.esp")) === null || _b === void 0 ? void 0 : _b.getFormID();
        if (event.effect.getFormID() == mgefAddspell) {
            var left = _skyrim_platform_skyrim_platform__WEBPACK_IMPORTED_MODULE_0__.Form.from((_c = _skyrim_platform_skyrim_platform__WEBPACK_IMPORTED_MODULE_0__.Game.getPlayer()) === null || _c === void 0 ? void 0 : _c.getEquippedSpell(0));
            var right = _skyrim_platform_skyrim_platform__WEBPACK_IMPORTED_MODULE_0__.Form.from((_d = _skyrim_platform_skyrim_platform__WEBPACK_IMPORTED_MODULE_0__.Game.getPlayer()) === null || _d === void 0 ? void 0 : _d.getEquippedSpell(1));
            if (!left || !right) {
                return;
            }
            ;
            (0,_YM_Lorica_Compat__WEBPACK_IMPORTED_MODULE_5__.SetCosts)("single", left);
            (0,_YM_Lorica_Compat__WEBPACK_IMPORTED_MODULE_5__.SetCosts)("single", right);
            // printConsole("mainAddSpellspell:: it worked"); 
        }
        ;
    });
};


/***/ }),
/* 8 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mainMCM": () => (/* binding */ mainMCM)
/* harmony export */ });
/* harmony import */ var skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var skyrimPlatform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _skyrim_platform_papyrus_util_StorageUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _skyrim_platform_papyrus_util_JsonUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _YM_Lorica_Shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _YM_Lorica_Compat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);





var focused = false;
var close = false;
skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.browser.loadUrl("file:///Data/Platform/UI/lorica-menu.html");
var mainMCM = function () {
    (0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.on)('menuClose', function (event) { (0,_skyrim_platform_papyrus_util_StorageUtil__WEBPACK_IMPORTED_MODULE_1__.SetIntValue)(null, "YM.Lorica.MCM.MenuFlag", 0); });
    (0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.on)('menuOpen', function () {
        if ((0,_skyrim_platform_papyrus_util_StorageUtil__WEBPACK_IMPORTED_MODULE_1__.GetIntValue)(null, "YM.Lorica.MCM.MenuOpenFlag", 0) == 1) {
            (0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.once)('update', function () { (0,_skyrim_platform_papyrus_util_StorageUtil__WEBPACK_IMPORTED_MODULE_1__.SetIntValue)(null, "YM.Lorica.MCM.MenuOpenFlag", 0); });
        }
        ;
    });
    (0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.once)('update', function () {
        var player = skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.Game.getPlayer();
        if (player) {
            player.registerForModEvent("LoricaRedone_Menu_Open", "OnLoricaOpen");
        }
        player.registerForModEvent("LoricaRedone_Menu_Upkeep_Input", "OnUpkeepInput");
        player.registerForModEvent("LoricaRedone_Menu_Upkeep_Input_Clear", "OnInputClear");
        player.registerForModEvent("LoricaRedone_Menu_Close_Update", "OnQueuedChange");
        // ListCompile()
    });
    skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.hooks.sendPapyrusEvent.add({
        enter: function (ctx) {
            (0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.printConsole)("".concat(ctx.papyrusEventName, " has been caught"));
            // SetIntValue(null, "YM.Lorica.MCM.MenuOpenFlag", 1)
            FillMCMOptions();
        },
    }, 0x14, 0x14, 'OnLoricaOpen');
    skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.hooks.sendPapyrusEvent.add({
        enter: function (ctx) {
            (0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.printConsole)("".concat(ctx.papyrusEventName, " has been caught"));
            // SetIntValue(null, "YM.Lorica.MCM.MenuOpenFlag", 1)
            FillMCMOptions();
        },
    }, 0x14, 0x14, 'OnInputClear');
    skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.hooks.sendPapyrusEvent.add({
        enter: function (ctx) {
            (0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.printConsole)("".concat(ctx.papyrusEventName, " has been caught"));
            (0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.once)('menuClose', function () {
                (0,_YM_Lorica_Compat__WEBPACK_IMPORTED_MODULE_4__.UpdateAllSpells)();
            });
        },
    }, 0x14, 0x14, 'OnQueuedChange');
    //   event for when player inputs in the Upkeep search option; filters the enum menus accordingly
    skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.hooks.sendPapyrusEvent.add({
        enter: function (ctx) {
            (0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.printConsole)("".concat(ctx.papyrusEventName, " has been caught"));
            FilterMCMOptions((0,_skyrim_platform_papyrus_util_StorageUtil__WEBPACK_IMPORTED_MODULE_1__.GetStringValue)(null, "YM.Lorica.Menu.Upkeep.Input", ''));
        },
    }, 0x14, 0x14, 'OnUpkeepInput');
};
var FormsToStringNames = function (forms, key) {
    var stringlist = ['No Changes'];
    if (!forms) {
        return;
    }
    ;
    (0,_skyrim_platform_papyrus_util_StorageUtil__WEBPACK_IMPORTED_MODULE_1__.StringListClear)(null, key);
    (0,_skyrim_platform_papyrus_util_StorageUtil__WEBPACK_IMPORTED_MODULE_1__.StringListAdd)(null, key, 'No Changes');
    forms.forEach(function (form) {
        if (!form) {
            return;
        }
        ;
        var name = form.getName();
        if (!name) {
            return;
        }
        ;
        var id = form.getFormID();
        if (!id) {
            return;
        }
        ;
        (0,_skyrim_platform_papyrus_util_StorageUtil__WEBPACK_IMPORTED_MODULE_1__.StringListAdd)(null, key, name);
        (0,_skyrim_platform_papyrus_util_StorageUtil__WEBPACK_IMPORTED_MODULE_1__.SetIntValue)(null, name, id);
        stringlist.push(name);
    });
    return stringlist;
};
function FillMCMOptions() {
    var a;
    a = (0,_skyrim_platform_papyrus_util_JsonUtil__WEBPACK_IMPORTED_MODULE_2__.FormListToArray)(_YM_Lorica_Shared__WEBPACK_IMPORTED_MODULE_3__.juKeys.path, _YM_Lorica_Shared__WEBPACK_IMPORTED_MODULE_3__.suKeys.formUpkeepList);
    var b = FormsToStringNames(a, "YM.Lorica.MCM.Enum.Upkeep");
    a = (0,_skyrim_platform_papyrus_util_JsonUtil__WEBPACK_IMPORTED_MODULE_2__.FormListToArray)(_YM_Lorica_Shared__WEBPACK_IMPORTED_MODULE_3__.juKeys.path, _YM_Lorica_Shared__WEBPACK_IMPORTED_MODULE_3__.suKeys.formBlackList);
    FormsToStringNames(a, "YM.Lorica.MCM.Enum.Blacklist");
    a = (0,_skyrim_platform_papyrus_util_JsonUtil__WEBPACK_IMPORTED_MODULE_2__.FormListToArray)(_YM_Lorica_Shared__WEBPACK_IMPORTED_MODULE_3__.juKeys.path, _YM_Lorica_Shared__WEBPACK_IMPORTED_MODULE_3__.suKeys.formExclusionList);
    FormsToStringNames(a, "YM.Lorica.MCM.Enum.Exclusion");
}
;
// Function to clear and refill the mcm menu lists according to a filter criteria
function FilterMCMOptions(query) {
    if (!query) {
        query = '';
    }
    ;
    // FillMCMOptions()
    var keys = ["YM.Lorica.MCM.Enum.Upkeep", "YM.Lorica.MCM.Enum.Blacklist", "YM.Lorica.MCM.Enum.Exclusion"];
    keys.forEach(function (key) {
        var filtered = FilterOptions((0,_skyrim_platform_papyrus_util_StorageUtil__WEBPACK_IMPORTED_MODULE_1__.StringListToArray)(null, key), query);
        filtered.unshift('No Changes');
        (0,_skyrim_platform_papyrus_util_StorageUtil__WEBPACK_IMPORTED_MODULE_1__.StringListClear)(null, key);
        filtered.forEach(function (f) {
            (0,_skyrim_platform_papyrus_util_StorageUtil__WEBPACK_IMPORTED_MODULE_1__.StringListAdd)(null, key, f, false);
        });
    });
}
function FilterOptions(arr, query) {
    return arr.filter(function (el) {
        return el.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
}


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(0);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9yaWNhUmVkb25lLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpQkFBaUIsU0FBSSxJQUFJLFNBQUk7QUFDN0IsNEJBQTRCLCtEQUErRCxpQkFBaUI7QUFDNUc7QUFDQSxvQ0FBb0MsTUFBTSwrQkFBK0IsWUFBWTtBQUNyRixtQ0FBbUMsTUFBTSxtQ0FBbUMsWUFBWTtBQUN4RixnQ0FBZ0M7QUFDaEM7QUFDQSxLQUFLO0FBQ0w7QUFDQSxtQkFBbUIsU0FBSSxJQUFJLFNBQUk7QUFDL0IsY0FBYyw2QkFBNkIsMEJBQTBCLGNBQWMscUJBQXFCO0FBQ3hHLGlCQUFpQixvREFBb0QscUVBQXFFLGNBQWM7QUFDeEosdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEMsbUNBQW1DLFNBQVM7QUFDNUMsbUNBQW1DLFdBQVcsVUFBVTtBQUN4RCwwQ0FBMEMsY0FBYztBQUN4RDtBQUNBLDhHQUE4RyxPQUFPO0FBQ3JILGlGQUFpRixpQkFBaUI7QUFDbEcseURBQXlELGdCQUFnQixRQUFRO0FBQ2pGLCtDQUErQyxnQkFBZ0IsZ0JBQWdCO0FBQy9FO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQSxVQUFVLFlBQVksYUFBYSxTQUFTLFVBQVU7QUFDdEQsb0NBQW9DLFNBQVM7QUFDN0M7QUFDQTtBQUNxTDtBQUNvQjtBQUNuSDtBQUM4QjtBQUN2QztBQUM3QjtBQUNjO0FBQ3BCO0FBQzFDLHVEQUFPO0FBQ1AsMkVBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHFHQUFZO0FBQzVCLFFBQVEsc0ZBQVcsT0FBTyxzRUFBdUIsMEJBQTBCLHNGQUFXLE9BQU8sd0VBQXlCO0FBQ3RILFFBQVEsNkRBQVU7QUFDbEI7QUFDQTtBQUNBO0FBQ0Esb0VBQUUsMkJBQTJCLDhFQUFZLGNBQWMscUJBQXFCO0FBQzVFLG9FQUFFLDBCQUEwQiw4RUFBWSxhQUFhLHFCQUFxQjtBQUMxRSxzRUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxzRUFBSSw2QkFBNkIscUJBQXFCO0FBQ3RELHNFQUFJO0FBQ0osOERBQThEO0FBQzlELDhCQUE4QjtBQUM5QixJQUFJLDZEQUFVO0FBQ2Q7QUFDQSw0QkFBNEIsNEVBQVU7QUFDdEMsNEJBQTRCLDRFQUFVO0FBQ3RDLElBQUksc0ZBQVc7QUFDZixJQUFJLHNGQUFXO0FBQ2YsZ0JBQWdCLHNGQUFXLE9BQU8scUVBQXNCO0FBQ3hELENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwRkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksc0VBQUk7QUFDaEIsb0NBQW9DLHVFQUFTLENBQUMsNEVBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isc0ZBQVc7QUFDL0I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsbUZBQWEsQ0FBQywwREFBVyxFQUFFLG9FQUFxQixZQUFZLHNGQUFXLE9BQU8scUVBQXNCO0FBQ3JIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsc0ZBQVc7QUFDcEMsc0JBQXNCLHNGQUFXLE9BQU8sd0VBQXlCO0FBQ2pFLFlBQVksOEVBQVk7QUFDeEIsWUFBWSwrRUFBYTtBQUN6QjtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isc0VBQUk7QUFDcEI7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLHVFQUFTLENBQUMsNEVBQWM7QUFDL0Qsd0NBQXdDLHVFQUFTLENBQUMsNEVBQWM7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isb0VBQUU7QUFDMUI7QUFDQSw4REFBOEQ7QUFDOUQ7QUFDQTtBQUNBLHlFQUF5RSwwRUFBWTtBQUNyRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckMsaUNBQWlDO0FBQ2pDLHFEQUFxRCx1RUFBUyxDQUFDLDRFQUFjO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLG9FQUFFO0FBQzFCO0FBQ0EsOERBQThEO0FBQzlEO0FBQ0E7QUFDQSx5RUFBeUUsMEVBQVk7QUFDckY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDLGlDQUFpQztBQUNqQyxzREFBc0QsdUVBQVMsQ0FBQyw0RUFBYztBQUM5RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHNFQUFJO0FBQ3BCLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSw2REFBNkQsMEVBQVk7QUFDekU7QUFDQTtBQUNBLG9DQUFvQyw4RUFBWTtBQUNoRCw4Q0FBOEMsc0ZBQVc7QUFDekQsOENBQThDLHNGQUFXO0FBQ3pELDRDQUE0Qyw4RUFBWTtBQUN4RDtBQUNBLG9DQUFvQyw4RUFBWTtBQUNoRCxvQ0FBb0MsOEVBQVk7QUFDaEQ7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QixxQkFBcUI7QUFDckI7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGdCQUFnQixzRUFBSTtBQUNwQiwrQkFBK0IsdUVBQVMsQ0FBQyw0RUFBYztBQUN2RCxnQ0FBZ0MsdUVBQVMsQ0FBQyw0RUFBYztBQUN4RDtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQyxlQUFlO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9FQUFvRSxVQUFVO0FBQzlFO0FBQ0E7QUFDQSxpQkFBaUIsc0ZBQVc7QUFDNUI7QUFDQSxRQUFRLGdGQUFrQjtBQUMxQixRQUFRLHNFQUFJO0FBQ1osbUNBQW1DLDRFQUFVO0FBQzdDLFlBQVksc0ZBQVc7QUFDdkIsU0FBUztBQUNUO0FBQ0EsSUFBSSwrRUFBYTtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQSxjQUFjO0FBQ2QsNkJBQTZCLHNGQUFXLE9BQU8seUVBQTBCO0FBQ3pFLGdDQUFnQyxzRkFBVyxPQUFPLCtFQUFnQztBQUNsRixtQ0FBbUMsc0ZBQVcsT0FBTywwRUFBMkI7QUFDaEYsZ0JBQWdCLHdFQUFVLGdDQUFnQyxxREFBRTtBQUM1RDtBQUNBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsTUFBTSxrREFBa0Q7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixzRkFBVyxPQUFPLHdFQUF5QixhQUFhO0FBQ3BGLGdDQUFnQyxzRkFBVyxPQUFPLCtFQUFnQztBQUNsRjtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSx3RUFBVTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9FQUFFO0FBQ0Y7QUFDQSxvQkFBb0IsdUVBQVMsZUFBZTtBQUM1QywwQkFBMEIsMkVBQWEsQ0FBQyxrRkFBb0I7QUFDNUQsSUFBSSw4RUFBWTtBQUNoQiwwQ0FBMEMscURBQXFEO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLG1GQUFhLENBQUMsMERBQVcsRUFBRSxtRUFBb0IsaUJBQWlCLG1GQUFhLENBQUMsMERBQVcsRUFBRSxvRUFBcUI7QUFDeEg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLHNGQUFXLE9BQU8scUVBQXNCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLG9FQUFFO0FBQ0Ysb0JBQW9CLElBQUksd0ZBQWEsT0FBTyxxRUFBc0IsR0FBRztBQUNyRSxnQkFBZ0Isc0ZBQVcsT0FBTyxxRUFBc0I7QUFDeEQsZ0JBQWdCLHdFQUFVO0FBQzFCLGFBQWEsdUdBQWMsQ0FBQyxxREFBRTtBQUM5QjtBQUNBLFlBQVksc0VBQW1CO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ087QUFDUDtBQUNBO0FBQ0EsOEJBQThCLDJFQUFhLENBQUMsa0ZBQW9CO0FBQ2hFLFFBQVEseUZBQWMsT0FBTyxxRUFBc0IsaUJBQWlCO0FBQ3BFO0FBQ0EsUUFBUSxxREFBRSxlQUFlLHdFQUFVO0FBQ25DO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQix3RUFBVSxDQUFDLGtGQUFvQixnQ0FBZ0M7QUFDbEYsc0JBQXNCLHdFQUFVLENBQUMsa0ZBQW9CLGdDQUFnQztBQUNyRiwwQkFBMEIsMkVBQWEsQ0FBQyxrRkFBb0I7QUFDNUQsc0JBQXNCLG9HQUFXLHlFQUF5RTtBQUMxRyxlQUFlLHdGQUFhO0FBQzVCLGtDQUFrQyx3RkFBYSxPQUFPLGtFQUFtQixXQUFXO0FBQ3BGO0FBQ0EsSUFBSSxxREFBRTtBQUNOLElBQUkscURBQUU7QUFDTjtBQUNBLHVCQUF1Qix1RUFBUyxDQUFDLDRFQUFjO0FBQy9DLHdCQUF3Qix1RUFBUyxDQUFDLDRFQUFjO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNGQUFXLE9BQU8scUVBQXNCLGdCQUFnQjtBQUNoRTtBQUNBO0FBQ0EseUVBQXlFLHNGQUFXO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixzRkFBVztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHNGQUFXO0FBQ3ZCO0FBQ0E7QUFDQSxZQUFZLHdGQUFhO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixzRkFBVyxPQUFPLCtEQUFnQixNQUFNO0FBQ2hFLDJCQUEyQixzRkFBVyxPQUFPLGtFQUFtQjtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsd0ZBQWEsT0FBTyxxRUFBc0I7QUFDdEUsUUFBUSxzRkFBVyxPQUFPLCtEQUFnQjtBQUMxQyxRQUFRLHNGQUFXLE9BQU8sa0VBQW1CO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHlGQUFjLE9BQU8sa0VBQW1CO0FBQzVELGlCQUFpQix5RkFBYyxPQUFPLCtEQUFnQjtBQUN0RCxtQ0FBbUMsVUFBVSxhQUFhLE9BQU87QUFDakU7QUFDQSxRQUFRLHNGQUFXLE9BQU8sa0VBQW1CO0FBQzdDO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0ZBQVcsT0FBTywrREFBZ0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLHdGQUFhLE9BQU8scUVBQXNCO0FBQ25FLFFBQVEsc0ZBQVcsT0FBTyxrRUFBbUI7QUFDN0MsUUFBUSxzRkFBVyxPQUFPLCtEQUFnQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsMEVBQVk7QUFDekQ7QUFDQTtBQUNBLGtDQUFrQyx3RUFBVSxDQUFDLGtGQUFvQjtBQUNqRSwrQkFBK0Isd0VBQVUsQ0FBQyxrRkFBb0I7QUFDOUQsNkJBQTZCLHFEQUFFO0FBQy9CLG9CQUFvQixxREFBRTtBQUN0QjtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBLElBQUksc0VBQW1CO0FBQ3ZCLDBDQUEwQyxrREFBa0Q7QUFDNUY7QUFDQTs7Ozs7OztBQ3BkQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3FDO0FBQ3JDLFNBQVMsdURBQWM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLHNEQUFzRDtBQUN0RCx3REFBd0Q7QUFDeEQseURBQXlEO0FBQ3pELHVEQUF1RDtBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08saURBQWlEO0FBQ2pELG1EQUFtRDtBQUNuRCxvREFBb0Q7QUFDcEQsa0RBQWtEO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ08sK0NBQStDO0FBQy9DLGlEQUFpRDtBQUNqRCxrREFBa0Q7QUFDbEQsZ0RBQWdEO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ087QUFDUCw4QkFBOEI7QUFDOUI7QUFDQTtBQUNPO0FBQ1AsOEJBQThCO0FBQzlCO0FBQ0E7QUFDTztBQUNQLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUCw4QkFBOEI7QUFDOUI7QUFDQTtBQUNPO0FBQ1AsOEJBQThCO0FBQzlCO0FBQ0E7QUFDTztBQUNQLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ087QUFDUCw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sMERBQTBEO0FBQzFELDREQUE0RDtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUCxxQ0FBcUM7QUFDckM7QUFDQTtBQUNPO0FBQ1AscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDTztBQUNQLHFDQUFxQztBQUNyQztBQUNBO0FBQ087QUFDUCxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLHFEQUFxRDtBQUNyRCx1REFBdUQ7QUFDdkQsd0RBQXdEO0FBQ3hELHNEQUFzRDtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLDREQUE0RDtBQUM1RCw4REFBOEQ7QUFDOUQsK0RBQStEO0FBQy9ELDZEQUE2RDtBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLGdFQUFnRTtBQUNoRSxrRUFBa0U7QUFDbEUsbUVBQW1FO0FBQ25FLGlFQUFpRTtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNPLGdEQUFnRDtBQUNoRCxrREFBa0Q7QUFDbEQsbURBQW1EO0FBQ25ELGlEQUFpRDtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNPLDhDQUE4QztBQUM5QyxnREFBZ0Q7QUFDaEQsaURBQWlEO0FBQ2pELCtDQUErQztBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sZ0VBQWdFO0FBQ2hFLGtFQUFrRTtBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLCtEQUErRDtBQUMvRCxpRUFBaUU7QUFDakUsa0VBQWtFO0FBQ2xFLGdFQUFnRTtBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1AsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDTztBQUNQLG1DQUFtQztBQUNuQztBQUNBO0FBQ087QUFDUCxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNPO0FBQ1AsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sZ0RBQWdEO0FBQ2hELGtEQUFrRDtBQUNsRCxtREFBbUQ7QUFDbkQsaURBQWlEO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLDBEQUEwRDtBQUMxRCw0REFBNEQ7QUFDNUQsNkRBQTZEO0FBQzdELDJEQUEyRDtBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNPLGdEQUFnRDtBQUNoRCxrREFBa0Q7QUFDbEQsbURBQW1EO0FBQ25ELGlEQUFpRDtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ087QUFDUCw4QkFBOEI7QUFDOUI7QUFDQTtBQUNPO0FBQ1AsOEJBQThCO0FBQzlCO0FBQ0E7QUFDTztBQUNQLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sc0RBQXNEO0FBQ3RELHdEQUF3RDtBQUN4RCx5REFBeUQ7QUFDekQsdURBQXVEO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLHFEQUFxRDtBQUNyRCx1REFBdUQ7QUFDdkQsd0RBQXdEO0FBQ3hELHNEQUFzRDtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNPLCtDQUErQztBQUMvQyxpREFBaUQ7QUFDakQsa0RBQWtEO0FBQ2xELGdEQUFnRDtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1AsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDTztBQUNQLGlDQUFpQztBQUNqQztBQUNBO0FBQ087QUFDUCxpQ0FBaUM7QUFDakM7QUFDQTtBQUNPO0FBQ1AsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1AsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDTztBQUNQLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ087QUFDUCw2QkFBNkI7QUFDN0I7QUFDQTtBQUNPO0FBQ1AsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxxREFBcUQ7QUFDckQsdURBQXVEO0FBQ3ZELHdEQUF3RDtBQUN4RCxzREFBc0Q7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sa0RBQWtEO0FBQ2xELG9EQUFvRDtBQUNwRCxxREFBcUQ7QUFDckQsbURBQW1EO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDTztBQUNQLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08saURBQWlEO0FBQ2pELG1EQUFtRDtBQUNuRCxvREFBb0Q7QUFDcEQsa0RBQWtEO0FBQ2xELGdEQUFnRDtBQUNoRCxrREFBa0Q7QUFDbEQsbURBQW1EO0FBQ25ELGlEQUFpRDtBQUN4RDtBQUNPLDRDQUE0QztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNPLDREQUE0RDtBQUM1RCw4REFBOEQ7QUFDOUQsK0RBQStEO0FBQy9ELDZEQUE2RDtBQUM3RCwyREFBMkQ7QUFDM0QsNkRBQTZEO0FBQzdELDhEQUE4RDtBQUM5RCw0REFBNEQ7QUFDbkU7QUFDTyx1REFBdUQ7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDTyxpREFBaUQ7QUFDakQsbURBQW1EO0FBQ25ELG9EQUFvRDtBQUNwRCxrREFBa0Q7QUFDbEQsZ0RBQWdEO0FBQ2hELGtEQUFrRDtBQUNsRCxtREFBbUQ7QUFDbkQsaURBQWlEO0FBQ3hEO0FBQ08sNENBQTRDO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyw0REFBNEQ7QUFDNUQsOERBQThEO0FBQzlELCtEQUErRDtBQUMvRCw2REFBNkQ7QUFDN0QsMkRBQTJEO0FBQzNELDZEQUE2RDtBQUM3RCw4REFBOEQ7QUFDOUQsNERBQTREO0FBQ25FO0FBQ08sdURBQXVEO0FBQzlEO0FBQ08sNkNBQTZDO0FBQzdDLDBDQUEwQztBQUMxQyxrQ0FBa0M7QUFDbEMscUNBQXFDO0FBQ3JDLHVDQUF1QztBQUN2Qyx3Q0FBd0M7QUFDeEMsc0NBQXNDO0FBQ3RDLHlDQUF5QztBQUN6QywyQ0FBMkM7QUFDM0MsNENBQTRDO0FBQzVDLDBDQUEwQztBQUMxQyw4Q0FBOEM7QUFDOUMsZ0RBQWdEO0FBQ2hELGlEQUFpRDtBQUNqRCwrQ0FBK0M7QUFDL0Msa0RBQWtEO0FBQ2xELG9EQUFvRDtBQUNwRCxxREFBcUQ7QUFDckQsbURBQW1EO0FBQ25ELDRDQUE0QztBQUM1Qyw4Q0FBOEM7QUFDOUMsK0NBQStDO0FBQy9DLDZDQUE2QztBQUM3QyxnREFBZ0Q7QUFDaEQsa0RBQWtEO0FBQ2xELG1EQUFtRDtBQUNuRCxpREFBaUQ7QUFDakQsNENBQTRDO0FBQzVDLDhDQUE4QztBQUM5QywrQ0FBK0M7QUFDL0MsNkNBQTZDO0FBQzdDLGdEQUFnRDtBQUNoRCxrREFBa0Q7QUFDbEQsbURBQW1EO0FBQ25ELGlEQUFpRDtBQUNqRCxnREFBZ0Q7QUFDaEQsa0RBQWtEO0FBQ2xELG1EQUFtRDtBQUNuRCxpREFBaUQ7QUFDakQsb0RBQW9EO0FBQ3BELHNEQUFzRDtBQUN0RCx1REFBdUQ7QUFDdkQscURBQXFEO0FBQ3JELGlEQUFpRDtBQUNqRCxtREFBbUQ7QUFDbkQsb0RBQW9EO0FBQ3BELGtEQUFrRDtBQUNsRCxxREFBcUQ7QUFDckQsdURBQXVEO0FBQ3ZELHdEQUF3RDtBQUN4RCxzREFBc0Q7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLGtEQUFrRDtBQUNsRCxvREFBb0Q7QUFDcEQscURBQXFEO0FBQ3JELG1EQUFtRDtBQUNuRCxzREFBc0Q7QUFDdEQsd0RBQXdEO0FBQ3hELDZDQUE2QztBQUM3QywrQ0FBK0M7QUFDL0MsZ0RBQWdEO0FBQ2hELDhDQUE4QztBQUM5QywyQ0FBMkM7QUFDM0MsNkNBQTZDO0FBQzdDLDhDQUE4QztBQUM5Qyw0Q0FBNEM7QUFDNUM7QUFDUCw4QkFBOEI7QUFDOUI7QUFDQTtBQUNPO0FBQ1AsOEJBQThCO0FBQzlCO0FBQ0E7QUFDTztBQUNQLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ087QUFDUCw4QkFBOEI7QUFDOUI7QUFDQTtBQUNPO0FBQ1AscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDTztBQUNQLHFDQUFxQztBQUNyQztBQUNBO0FBQ087QUFDUCxxQ0FBcUM7QUFDckM7QUFDQTtBQUNPO0FBQ1AscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDTyw0REFBNEQ7QUFDNUQsOERBQThEO0FBQzlEO0FBQ1AsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDTztBQUNQLG1DQUFtQztBQUNuQztBQUNBO0FBQ087QUFDUCxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNPO0FBQ1AsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDTyxpREFBaUQ7QUFDakQsbURBQW1EO0FBQ25ELG9EQUFvRDtBQUNwRCxrREFBa0Q7QUFDbEQsd0RBQXdEO0FBQ3hELDBEQUEwRDtBQUMxRCwyREFBMkQ7QUFDM0QseURBQXlEO0FBQ3pELDRDQUE0QztBQUM1Qyw4Q0FBOEM7QUFDOUMsK0NBQStDO0FBQy9DLDZDQUE2QztBQUM3QyxzREFBc0Q7QUFDdEQsd0RBQXdEO0FBQ3hELHlEQUF5RDtBQUN6RCx1REFBdUQ7QUFDdkQsMkRBQTJEO0FBQzNELDZEQUE2RDtBQUM3RCw4REFBOEQ7QUFDOUQsNERBQTREO0FBQzVELDRDQUE0QztBQUM1Qyw4Q0FBOEM7QUFDOUMsK0NBQStDO0FBQy9DLDZDQUE2QztBQUM3QyxrREFBa0Q7QUFDbEQsb0RBQW9EO0FBQ3BELHFEQUFxRDtBQUNyRCxtREFBbUQ7QUFDbkQsaURBQWlEO0FBQ2pELG1EQUFtRDtBQUNuRCxvREFBb0Q7QUFDcEQsa0RBQWtEO0FBQ2xEO0FBQ1AsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDTztBQUNQLGlDQUFpQztBQUNqQztBQUNBO0FBQ087QUFDUCxpQ0FBaUM7QUFDakM7QUFDQTtBQUNPO0FBQ1AsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDTztBQUNQLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ087QUFDUCw2QkFBNkI7QUFDN0I7QUFDQTtBQUNPO0FBQ1AsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDTztBQUNQLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ08saURBQWlEO0FBQ2pELG1EQUFtRDtBQUNuRCxvREFBb0Q7QUFDcEQsa0RBQWtEO0FBQ2xELG1DQUFtQztBQUMxQztBQUNPLDhDQUE4QztBQUNyRDtBQUNPLGdEQUFnRDtBQUN2RDtBQUNPLGlEQUFpRDtBQUN4RDtBQUNPLGtEQUFrRDtBQUN6RDtBQUNPLG9EQUFvRDtBQUMzRDtBQUNPLHFEQUFxRDtBQUM1RDtBQUNPLDZDQUE2QztBQUNwRDtBQUNPLCtDQUErQztBQUN0RDtBQUNPLGdEQUFnRDtBQUN2RDtBQUNPLGlEQUFpRDtBQUN4RDtBQUNPLG1EQUFtRDtBQUMxRDtBQUNPLG9EQUFvRDtBQUMzRDtBQUNPLDhDQUE4QztBQUM5Qyw4Q0FBOEM7QUFDOUM7QUFDUCxrQ0FBa0M7QUFDbEMsbUNBQW1DO0FBQ25DLG1DQUFtQztBQUNuQyxxQ0FBcUM7QUFDckMsa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNPO0FBQ1Asa0NBQWtDO0FBQ2xDLG1DQUFtQztBQUNuQyxtQ0FBbUM7QUFDbkMscUNBQXFDO0FBQ3JDLGtDQUFrQztBQUNsQyw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2h1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDcUM7QUFDckMsU0FBUyxvREFBVztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxpQ0FBaUM7QUFDakM7QUFDUCw2QkFBNkI7QUFDN0I7QUFDQTtBQUNPO0FBQ1Asa0NBQWtDO0FBQ2xDLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDTywwQ0FBMEM7QUFDakQ7QUFDTyxtQ0FBbUM7QUFDMUM7QUFDTyxzQ0FBc0M7QUFDN0M7QUFDTywyQ0FBMkM7QUFDbEQ7QUFDTyx1Q0FBdUM7QUFDOUM7QUFDTyx3REFBd0Q7QUFDeEQsMERBQTBEO0FBQzFELDJEQUEyRDtBQUMzRCx5REFBeUQ7QUFDekQ7QUFDUCw4QkFBOEI7QUFDOUI7QUFDQTtBQUNPO0FBQ1AsOEJBQThCO0FBQzlCO0FBQ0E7QUFDTztBQUNQLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ087QUFDUCw4QkFBOEI7QUFDOUI7QUFDQTtBQUNPLG1EQUFtRDtBQUNuRCxxREFBcUQ7QUFDckQsc0RBQXNEO0FBQ3RELG9EQUFvRDtBQUNwRCxpREFBaUQ7QUFDakQsbURBQW1EO0FBQ25ELG9EQUFvRDtBQUNwRCxrREFBa0Q7QUFDbEQ7QUFDUCxxQ0FBcUM7QUFDckM7QUFDQTtBQUNPO0FBQ1AscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDTztBQUNQLHFDQUFxQztBQUNyQztBQUNBO0FBQ087QUFDUCxxQ0FBcUM7QUFDckM7QUFDQTtBQUNPLHVEQUF1RDtBQUN2RCx5REFBeUQ7QUFDekQsMERBQTBEO0FBQzFELHdEQUF3RDtBQUN4RCw4REFBOEQ7QUFDOUQsZ0VBQWdFO0FBQ2hFLGlFQUFpRTtBQUNqRSwrREFBK0Q7QUFDL0Q7QUFDUCxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNPO0FBQ1AsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDTztBQUNQLG1DQUFtQztBQUNuQztBQUNBO0FBQ087QUFDUCxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNPLG1FQUFtRTtBQUNuRSxxRUFBcUU7QUFDckUsc0VBQXNFO0FBQ3RFLG9FQUFvRTtBQUNwRSw0REFBNEQ7QUFDNUQsOERBQThEO0FBQzlELCtEQUErRDtBQUMvRCw2REFBNkQ7QUFDN0Qsa0RBQWtEO0FBQ2xELG9EQUFvRDtBQUNwRCxxREFBcUQ7QUFDckQsbURBQW1EO0FBQ25ELGtEQUFrRDtBQUNsRCxvREFBb0Q7QUFDcEQscURBQXFEO0FBQ3JELG1EQUFtRDtBQUNuRDtBQUNQLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ087QUFDUCw4QkFBOEI7QUFDOUI7QUFDQTtBQUNPO0FBQ1AsOEJBQThCO0FBQzlCO0FBQ0E7QUFDTztBQUNQLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ08sd0RBQXdEO0FBQ3hELDBEQUEwRDtBQUMxRCwyREFBMkQ7QUFDM0QseURBQXlEO0FBQ3pELHVEQUF1RDtBQUN2RCx5REFBeUQ7QUFDekQsMERBQTBEO0FBQzFELHdEQUF3RDtBQUN4RDtBQUNQLGlDQUFpQztBQUNqQztBQUNBO0FBQ087QUFDUCxpQ0FBaUM7QUFDakM7QUFDQTtBQUNPO0FBQ1AsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDTztBQUNQLGlDQUFpQztBQUNqQztBQUNBO0FBQ087QUFDUCw2QkFBNkI7QUFDN0I7QUFDQTtBQUNPO0FBQ1AsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDTztBQUNQLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ087QUFDUCw2QkFBNkI7QUFDN0I7QUFDQTtBQUNPLHVEQUF1RDtBQUN2RCx5REFBeUQ7QUFDekQsMERBQTBEO0FBQzFELHdEQUF3RDtBQUN4RCxvREFBb0Q7QUFDcEQsc0RBQXNEO0FBQ3RELHVEQUF1RDtBQUN2RCxxREFBcUQ7QUFDckQsNERBQTREO0FBQzVELDhEQUE4RDtBQUM5RCxrRUFBa0U7QUFDbEUsb0VBQW9FO0FBQ3BFLDJEQUEyRDtBQUMzRCw2REFBNkQ7QUFDN0QsOERBQThEO0FBQzlELDREQUE0RDtBQUM1RCwwREFBMEQ7QUFDMUQsNERBQTREO0FBQzVELDZEQUE2RDtBQUM3RCwyREFBMkQ7QUFDM0Qsc0RBQXNEO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLHlEQUF5RDtBQUN6RCwyREFBMkQ7QUFDM0QsNERBQTREO0FBQzVELDBEQUEwRDtBQUMxRCwyREFBMkQ7QUFDM0Q7QUFDUCw4QkFBOEI7QUFDOUI7QUFDQTtBQUNPO0FBQ1AsOEJBQThCO0FBQzlCO0FBQ0E7QUFDTztBQUNQLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ087QUFDUCw4QkFBOEI7QUFDOUI7QUFDQTtBQUNPO0FBQ1AsOEJBQThCO0FBQzlCO0FBQ0E7QUFDTztBQUNQLGtDQUFrQztBQUNsQztBQUNBO0FBQ087QUFDUCxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNPO0FBQ1Asa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDTztBQUNQLGtDQUFrQztBQUNsQztBQUNBO0FBQ08sNkRBQTZEO0FBQzdELCtEQUErRDtBQUMvRCxnRUFBZ0U7QUFDaEUsOERBQThEO0FBQzlELDRDQUE0QztBQUM1Qyw4Q0FBOEM7QUFDOUMsaURBQWlEO0FBQ2pELCtDQUErQztBQUMvQywrQ0FBK0M7QUFDL0MsNkNBQTZDO0FBQzdDLDZDQUE2QztBQUM3Qyw4Q0FBOEM7QUFDOUMsK0NBQStDO0FBQy9DO0FBQ1AsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDTztBQUNQLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ087QUFDUCw2QkFBNkI7QUFDN0I7QUFDQTtBQUNPO0FBQ1AsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDTyw0Q0FBNEM7QUFDNUMsd0RBQXdEO0FBQy9EO0FBQ08scUNBQXFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbFQ1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNxQztBQUNyQyxTQUFTLDZEQUFvQjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNPLCtFQUErRTtBQUN0RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1AscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNPLDJFQUEyRTtBQUNsRjtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNPLDhDQUE4QztBQUNyRDtBQUNPLDhDQUE4QztBQUNyRDtBQUNPLHdDQUF3QztBQUMvQztBQUNPLHlEQUF5RDtBQUNoRTtBQUNPLGdEQUFnRDtBQUN2RDtBQUNPLDhDQUE4QztBQUNyRDtBQUNPLDZDQUE2QztBQUNwRDtBQUNPLHdDQUF3QztBQUMvQztBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDTyxtREFBbUQ7QUFDMUQ7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNPLG9FQUFvRTtBQUMzRTtBQUNPLG1EQUFtRDtBQUMxRDtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLDhDQUE4QztBQUNyRDtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxzREFBc0Q7QUFDN0Q7QUFDTywrQ0FBK0M7QUFDdEQ7QUFDTyxpREFBaUQ7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDTyx1REFBdUQ7QUFDOUQ7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNPLDRFQUE0RTtBQUNuRjtBQUNBO0FBQ0E7QUFDTyxrREFBa0Q7QUFDekQ7QUFDTyxvREFBb0Q7QUFDM0Q7QUFDQTtBQUNPO0FBQ1Asb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUCxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQLG9DQUFvQztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxzREFBc0Q7QUFDN0Q7QUFDTyw0REFBNEQ7QUFDbkU7QUFDTyxpREFBaUQ7QUFDeEQ7QUFDTyxpRUFBaUU7QUFDeEU7QUFDTyx1RUFBdUU7QUFDOUU7QUFDTyw0REFBNEQ7QUFDbkU7QUFDTyxtRkFBbUY7QUFDMUY7QUFDTyxpREFBaUQ7QUFDeEQ7QUFDTyxpREFBaUQ7QUFDeEQ7QUFDTyxxREFBcUQ7QUFDNUQ7QUFDTyxxREFBcUQ7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLHdFQUF3RTtBQUMvRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLHVDQUF1QztBQUM5QztBQUNPLDhDQUE4QztBQUNyRDtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sc0RBQXNEO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ08saUVBQWlFO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ08seUNBQXlDO0FBQ2hEO0FBQ08sd0RBQXdEO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ08sdURBQXVEO0FBQzlEO0FBQ08sd0RBQXdEO0FBQy9EO0FBQ08sd0RBQXdEO0FBQy9EO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDTztBQUNQLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDTztBQUNQLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDTyw4Q0FBOEM7QUFDckQ7QUFDTyxrRUFBa0U7QUFDekU7QUFDTyx3REFBd0Q7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDTyx3Q0FBd0M7QUFDL0M7QUFDTyx3RUFBd0U7QUFDL0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDTyw4Q0FBOEM7QUFDckQ7QUFDTyxpREFBaUQ7QUFDeEQ7QUFDTyxpREFBaUQ7QUFDeEQ7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxpREFBaUQ7QUFDeEQ7QUFDTyxzRUFBc0U7QUFDN0U7QUFDTyxnRUFBZ0U7QUFDdkU7QUFDTyx5REFBeUQ7QUFDaEU7QUFDTywwREFBMEQ7QUFDakU7QUFDTyw0REFBNEQ7QUFDbkU7QUFDTyx1REFBdUQ7QUFDOUQ7QUFDTyw0REFBNEQ7QUFDbkU7QUFDTywyREFBMkQ7QUFDbEU7QUFDTyw2REFBNkQ7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDTyxnRUFBZ0U7QUFDdkU7QUFDTywyREFBMkQ7QUFDbEU7QUFDTyw4REFBOEQ7QUFDckU7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNPLHdFQUF3RTtBQUMvRTtBQUNPLHlFQUF5RTtBQUNoRjtBQUNPLDJFQUEyRTtBQUNsRjtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ08sd0VBQXdFO0FBQy9FO0FBQ08sMkVBQTJFO0FBQ2xGO0FBQ08sOEVBQThFO0FBQ3JGO0FBQ08sMEVBQTBFO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sb0RBQW9EO0FBQzNEO0FBQ0E7QUFDQTtBQUNPO0FBQ1AsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNPO0FBQ1AsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNPO0FBQ1AsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sb0RBQW9EO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLGdFQUFnRTtBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNPLGdFQUFnRTtBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTywwRUFBMEU7QUFDakY7QUFDTyxrREFBa0Q7QUFDekQ7QUFDQTtBQUNPO0FBQ1AsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ08saURBQWlEO0FBQ3hEO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDTyxrREFBa0Q7QUFDekQ7QUFDTywrREFBK0Q7QUFDdEU7QUFDTyxnREFBZ0Q7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDTyxzREFBc0Q7QUFDN0Q7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNPLDhFQUE4RTtBQUNyRjtBQUNPLHlEQUF5RDtBQUNoRTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLGdEQUFnRDtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1AsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNPO0FBQ1AsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNPO0FBQ1AsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNPO0FBQ1AsaUNBQWlDO0FBQ2pDLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDTztBQUNQLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDTztBQUNQLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDTztBQUNQLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDTztBQUNQLGlDQUFpQztBQUNqQyxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ08scUNBQXFDO0FBQzVDO0FBQ08sa0RBQWtEO0FBQ3pEO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDTywrQkFBK0I7QUFDdEM7QUFDTyxvQ0FBb0M7QUFDM0M7QUFDTyx1Q0FBdUM7QUFDOUM7QUFDTyx1Q0FBdUM7QUFDOUM7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNPLHlDQUF5QztBQUNoRDtBQUNPLDZEQUE2RDtBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDTywwQ0FBMEM7QUFDakQ7QUFDTyxnREFBZ0Q7QUFDdkQ7QUFDTywwQ0FBMEM7QUFDakQ7QUFDTyw4Q0FBOEM7QUFDckQ7QUFDTywyQ0FBMkM7QUFDbEQ7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ08sMkNBQTJDO0FBQ2xEO0FBQ08sMkNBQTJDO0FBQ2xEO0FBQ08sb0RBQW9EO0FBQzNEO0FBQ08sb0RBQW9EO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ08sb0RBQW9EO0FBQzNEO0FBQ08saURBQWlEO0FBQ3hEO0FBQ08sa0RBQWtEO0FBQ3pEO0FBQ08sa0RBQWtEO0FBQ3pEO0FBQ08sMERBQTBEO0FBQ2pFO0FBQ08sa0RBQWtEO0FBQ3pEO0FBQ08sMERBQTBEO0FBQ2pFO0FBQ08sb0RBQW9EO0FBQzNEO0FBQ08sb0RBQW9EO0FBQzNEO0FBQ08sc0RBQXNEO0FBQzdEO0FBQ08sb0RBQW9EO0FBQzNEO0FBQ08sb0RBQW9EO0FBQzNEO0FBQ08sZ0VBQWdFO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08seUNBQXlDO0FBQ2hEO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDTyx5REFBeUQ7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLHNEQUFzRDtBQUM3RDtBQUNPLGlEQUFpRDtBQUN4RDtBQUNPLDhDQUE4QztBQUNyRDtBQUNPLG9EQUFvRDtBQUMzRDtBQUNPLDhDQUE4QztBQUNyRDtBQUNPLHNFQUFzRTtBQUM3RTtBQUNPLHFEQUFxRDtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLDJDQUEyQztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNPLHFEQUFxRDtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLG1EQUFtRDtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLHlEQUF5RDtBQUNoRTtBQUNPLDREQUE0RDtBQUNuRTtBQUNPLHNEQUFzRDtBQUM3RDtBQUNPLHdEQUF3RDtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTywyREFBMkQ7QUFDbEU7QUFDTyxnRkFBZ0Y7QUFDdkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQLG1DQUFtQztBQUNuQyxvQ0FBb0M7QUFDcEMsb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNPO0FBQ1AsbUNBQW1DO0FBQ25DLG9DQUFvQztBQUNwQyxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ087QUFDUCxtQ0FBbUM7QUFDbkMsb0NBQW9DO0FBQ3BDLG9DQUFvQztBQUNwQztBQUNBO0FBQ0E7QUFDTztBQUNQLG1DQUFtQztBQUNuQyxvQ0FBb0M7QUFDcEMsb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNPLHFEQUFxRDtBQUM1RDtBQUNPLDZDQUE2QztBQUNwRDtBQUNPLG9EQUFvRDtBQUMzRDtBQUNPLHVDQUF1QztBQUM5QztBQUNPLDBDQUEwQztBQUNqRDtBQUNPLDZDQUE2QztBQUNwRDtBQUNPLGdFQUFnRTtBQUN2RTtBQUNPLDJEQUEyRDtBQUNsRTtBQUNPLDRDQUE0QztBQUNuRDtBQUNPLHNEQUFzRDtBQUM3RDtBQUNPLHdEQUF3RDtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDTyx1Q0FBdUM7QUFDOUM7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNPO0FBQ1AsbUNBQW1DO0FBQ25DLG9DQUFvQztBQUNwQztBQUNBO0FBQ0E7QUFDTyx1Q0FBdUM7QUFDOUM7QUFDTywyQ0FBMkM7QUFDbEQ7QUFDTztBQUNQLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDTztBQUNQLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDTyxnREFBZ0Q7QUFDdkQ7QUFDTyxvQ0FBb0M7QUFDM0M7QUFDTyxxQ0FBcUM7QUFDNUM7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ08sb0RBQW9EO0FBQzNEO0FBQ08sc0RBQXNEO0FBQzdEO0FBQ08seURBQXlEO0FBQ2hFO0FBQ08sNEVBQTRFO0FBQ25GO0FBQ08saURBQWlEO0FBQ3hEO0FBQ0E7QUFDTyw0REFBNEQ7QUFDbkU7QUFDTyxxREFBcUQ7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyx5RUFBeUU7QUFDaEY7QUFDTyxvREFBb0Q7QUFDM0Q7QUFDTywrRUFBK0U7QUFDdEY7QUFDTztBQUNQLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1Asb0NBQW9DO0FBQ3BDLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDTyx3REFBd0Q7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNPLHdDQUF3QztBQUMvQztBQUNPLDhDQUE4QztBQUNyRDtBQUNPLGdFQUFnRTtBQUN2RTtBQUNBO0FBQ0E7QUFDTztBQUNQLHNDQUFzQztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ08sNkNBQTZDO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ08sb0RBQW9EO0FBQzNEO0FBQ08sdURBQXVEO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUCw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ087QUFDUCw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ087QUFDUCw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxxREFBcUQ7QUFDNUQ7QUFDTyx5REFBeUQ7QUFDaEU7QUFDTyxtREFBbUQ7QUFDMUQ7QUFDTyxtREFBbUQ7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sa0RBQWtEO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ08sZ0VBQWdFO0FBQ3ZFO0FBQ08sd0VBQXdFO0FBQy9FO0FBQ08sNERBQTREO0FBQ25FO0FBQ08sNERBQTREO0FBQ25FO0FBQ0E7QUFDQTtBQUNPO0FBQ1AsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNPO0FBQ1AsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNPO0FBQ1AsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08saUVBQWlFO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1AsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNPO0FBQ1AsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNPO0FBQ1AsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNPLGtGQUFrRjtBQUN6RjtBQUNPLHVEQUF1RDtBQUM5RDtBQUNPLHdEQUF3RDtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sa0NBQWtDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08seUNBQXlDO0FBQ2hEO0FBQ08sNkRBQTZEO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ08sZ0RBQWdEO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ08saURBQWlEO0FBQ3hEO0FBQ08sK0NBQStDO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1AsZ0NBQWdDO0FBQ2hDO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ242QzhFO0FBQytCO0FBQ3RHO0FBQ1A7QUFDQSxxQkFBcUIsb0dBQVc7QUFDaEM7QUFDQTtBQUNBO0FBQ087QUFDUCxXQUFXLDRFQUFjO0FBQ3pCO0FBQ087QUFDUCwwQkFBMEI7QUFDMUIsa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUkseUVBQVc7QUFDZjtBQUNPO0FBQ1A7QUFDQTtBQUNBLElBQUksMkVBQVM7QUFDYjtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsd0JBQXdCO0FBQ3pCO0FBQ087QUFDUDtBQUNBO0FBQ0EsQ0FBQyx3QkFBd0I7QUFDekI7QUFDd0U7QUFDakU7QUFDUCxnRUFBZ0UsOEdBQXFCO0FBQ3JGLG1DQUFtQyxzRkFBVyw4QkFBOEIsc0ZBQVc7QUFDdkY7QUFDQSxJQUFJLDRFQUFjO0FBQ2xCO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2RWdJO0FBQ2tDO0FBQzVGO0FBQzBHO0FBQzdEO0FBQ25IO0FBQ087QUFDUDtBQUNBLElBQUksc0VBQUk7QUFDUjtBQUNBLDZCQUE2QiwyRUFBYSxDQUFDLGtGQUFvQjtBQUMvRCxRQUFRLHNGQUF3QiwwQ0FBMEM7QUFDMUUsb0NBQW9DO0FBQ3BDO0FBQ0Esb0JBQW9CLHFHQUFZLGNBQWM7QUFDOUMsUUFBUSxzRkFBVyxPQUFPLHNFQUF1QjtBQUNqRDtBQUNBO0FBQ0Esd0JBQXdCLHNCQUFzQjtBQUM5Qyw0QkFBNEIsdUVBQVM7QUFDckMsaUJBQWlCLG1GQUFXLENBQUMsMERBQVcsRUFBRSxtRUFBb0I7QUFDOUQ7QUFDQSxvQkFBb0Isa0ZBQVUsQ0FBQywwREFBVyxFQUFFLG9FQUFxQjtBQUNqRSxvQkFBb0IsbUZBQVcsQ0FBQywwREFBVyxFQUFFLG9FQUFxQjtBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0ZBQVcsT0FBTyxxRUFBc0I7QUFDaEQsUUFBUSxzRkFBVyxPQUFPLDBFQUEyQjtBQUNyRCxRQUFRLHNGQUFXLE9BQU8seUVBQTBCO0FBQ3BELFFBQVEsc0ZBQVcsT0FBTywrRUFBZ0M7QUFDMUQsUUFBUSxzRkFBVyxPQUFPLHdFQUF5QjtBQUNuRCxRQUFRLDRFQUFJLENBQUMsMERBQVc7QUFDeEI7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzRkFBVyxPQUFPLHdFQUF5QjtBQUNuRCxRQUFRLDhFQUFZO0FBQ3BCO0FBQ0EsS0FBSztBQUNMO0FBQ08sNkJBQTZCLGlCQUFpQjtBQUNyRDtBQUNBLG9CQUFvQix1RkFBVyxDQUFDLDBEQUFXLEVBQUUsb0VBQXFCO0FBQ2xFLDJDQUEyQyxJQUFJLG1GQUFXLENBQUMsMERBQVcsRUFBRSxtRUFBb0I7QUFDNUY7QUFDQTtBQUNBLG9CQUFvQixzQkFBc0I7QUFDMUM7QUFDQTtBQUNBLFlBQVksc0ZBQWMsQ0FBQywwREFBVyxFQUFFLG9FQUFxQjtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLFFBQVEsd0VBQVUscUNBQXFDLE9BQU8sZ0hBQXVCO0FBQzdILHVDQUF1QyxRQUFRLHdFQUFVLHFDQUFxQyxPQUFPLHdFQUFVO0FBQy9HLGlCQUFpQix3RUFBVTtBQUMzQjtBQUNBO0FBQ0E7QUFDQSx5RUFBeUU7QUFDekUsK0JBQStCLDBDQUEwQztBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUCx5QkFBeUIsNENBQTRDO0FBQ3JFLHdCQUF3QiwwRUFBWSxDQUFDLDRFQUFjO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwrREFBWTtBQUNqQyxvQkFBb0Isd0VBQVUsZ0NBQWdDLHFEQUFFO0FBQ2hFO0FBQ0EsMkJBQTJCLHdGQUFhLE9BQU8saUVBQWtCO0FBQ2pFO0FBQ0E7QUFDQSwyQkFBMkIsd0ZBQWEsT0FBTywrREFBZ0I7QUFDL0Q7QUFDQTtBQUNBLG1CQUFtQixzRkFBVyxPQUFPLGdFQUFpQjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSx3RkFBYTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxnRkFBa0I7QUFDMUIsd0JBQXdCLElBQUkscUZBQWEsQ0FBQywwREFBVyxFQUFFLG9FQUFxQixHQUFHO0FBQy9FLDRCQUE0QixtRkFBVyxDQUFDLDBEQUFXLEVBQUUsb0VBQXFCO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxnRkFBa0I7QUFDMUI7QUFDQTtBQUNBO0FBQ0EsUUFBUSxnRkFBa0I7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGdGQUFrQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQSxJQUFJLHNGQUFjLENBQUMsMERBQVcsRUFBRSxvRUFBcUI7QUFDckQsSUFBSSxzRkFBYyxDQUFDLDBEQUFXLEVBQUUsbUVBQW9CO0FBQ3BELElBQUksc0ZBQWMsQ0FBQywwREFBVyxFQUFFLHVFQUF3QjtBQUN4RCxJQUFJLDRFQUFJLENBQUMsMERBQVc7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw4RUFBZ0IsQ0FBQyxrRkFBb0I7QUFDekQscUJBQXFCLDhFQUFnQixDQUFDLGtGQUFvQjtBQUMxRCw4QkFBOEIsOEVBQWdCLENBQUMsa0ZBQW9CO0FBQ25FLGdEQUFnRDtBQUNoRDtBQUNBLFlBQVksd0VBQVU7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDhHQUFxQjtBQUM3QjtBQUNBLE1BQU07QUFDTjtBQUNBLFFBQVEsOEdBQXFCO0FBQzdCO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsUUFBUSw4R0FBcUI7QUFDN0I7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHdFQUFVO0FBQ3RCLG1CQUFtQjtBQUNuQixvQkFBb0IsdUJBQXVCO0FBQzNDO0FBQ0E7QUFDQSxZQUFZLGtIQUF5QjtBQUNyQywrQkFBK0IsY0FBYztBQUM3QztBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JNa0U7QUFDRztBQUNzQjtBQUN2QztBQUNQO0FBQ0M7QUFDdkM7QUFDUCw2QkFBNkI7QUFDN0IsWUFBWSx3RkFBYSxPQUFPLHFFQUFzQjtBQUN0RCxZQUFZLDBGQUFlLE9BQU8scUVBQXNCO0FBQ3hELG9CQUFvQixPQUFPO0FBQzNCO0FBQ0EsWUFBWSxtRkFBVyxDQUFDLDBEQUFXLEVBQUUsdUVBQXdCO0FBQzdEO0FBQ0E7QUFDQSxRQUFRLDBEQUFXO0FBQ25CO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBLElBQUksb0VBQUU7QUFDTjtBQUNBLCtCQUErQixrRkFBb0I7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxvRUFBRTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLGlDQUFpQyxrRkFBb0I7QUFDckQ7QUFDQSx1QkFBdUIsdUVBQVMsT0FBTyw0RUFBYztBQUNyRCx3QkFBd0IsdUVBQVMsT0FBTyw0RUFBYztBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksMkRBQVE7QUFDcEIsWUFBWSwyREFBUTtBQUNwQjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0Q4RTtBQUMwRTtBQUMvRTtBQUNyQjtBQUNDO0FBQ3JEO0FBQ0E7QUFDQSwyREFBZTtBQUNSO0FBQ1AsSUFBSSxrREFBRSxpQ0FBaUMsc0ZBQVcsc0NBQXNDO0FBQ3hGLElBQUksa0RBQUU7QUFDTixZQUFZLHNGQUFXO0FBQ3ZCLFlBQVksb0RBQUkseUJBQXlCLHNGQUFXLDBDQUEwQztBQUM5RjtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUksb0RBQUk7QUFDUixxQkFBcUIsMERBQWM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSSxzRUFBMEI7QUFDOUI7QUFDQSxZQUFZLDREQUFZO0FBQ3hCO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMLElBQUksc0VBQTBCO0FBQzlCO0FBQ0EsWUFBWSw0REFBWTtBQUN4QjtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTCxJQUFJLHNFQUEwQjtBQUM5QjtBQUNBLFlBQVksNERBQVk7QUFDeEIsWUFBWSxvREFBSTtBQUNoQixnQkFBZ0Isa0VBQWU7QUFDL0IsYUFBYTtBQUNiLFNBQVM7QUFDVCxLQUFLO0FBQ0wsbUVBQW1FO0FBQ25FLElBQUksc0VBQTBCO0FBQzlCO0FBQ0EsWUFBWSw0REFBWTtBQUN4Qiw2QkFBNkIseUZBQWM7QUFDM0MsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksMEZBQWU7QUFDbkIsSUFBSSx3RkFBYTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHdGQUFhO0FBQ3JCLFFBQVEsc0ZBQVc7QUFDbkI7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHVGQUFlLENBQUMsMERBQVcsRUFBRSxvRUFBcUI7QUFDMUQ7QUFDQSxRQUFRLHVGQUFlLENBQUMsMERBQVcsRUFBRSxtRUFBb0I7QUFDekQ7QUFDQSxRQUFRLHVGQUFlLENBQUMsMERBQVcsRUFBRSx1RUFBd0I7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLDRGQUFpQjtBQUN0RDtBQUNBLFFBQVEsMEZBQWU7QUFDdkI7QUFDQSxZQUFZLHdGQUFhO0FBQ3pCLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7Ozs7OztVQ3BIQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL0xvcmljYVJlZG9uZS8uL3NyYy9Mb3JpY2FSZWRvbmUudHMiLCJ3ZWJwYWNrOi8vTG9yaWNhUmVkb25lL2V4dGVybmFsIHZhciBbXCJza3lyaW1QbGF0Zm9ybVwiXSIsIndlYnBhY2s6Ly9Mb3JpY2FSZWRvbmUvLi9ub2RlX21vZHVsZXMvQHNreXJpbS1wbGF0Zm9ybS9wYXB5cnVzLXV0aWwvU3RvcmFnZVV0aWwuanMiLCJ3ZWJwYWNrOi8vTG9yaWNhUmVkb25lLy4vbm9kZV9tb2R1bGVzL0Bza3lyaW0tcGxhdGZvcm0vcGFweXJ1cy11dGlsL0pzb25VdGlsLmpzIiwid2VicGFjazovL0xvcmljYVJlZG9uZS8uL25vZGVfbW9kdWxlcy9Ac2t5cmltLXBsYXRmb3JtL3BvMy1wYXB5cnVzLWV4dGVuZGVyL1BPM19TS1NFRnVuY3Rpb25zLmpzIiwid2VicGFjazovL0xvcmljYVJlZG9uZS8uL3NyYy9ZTV9Mb3JpY2FfU2hhcmVkLnRzIiwid2VicGFjazovL0xvcmljYVJlZG9uZS8uL3NyYy9ZTV9Mb3JpY2FfQ29tcGF0LnRzIiwid2VicGFjazovL0xvcmljYVJlZG9uZS8uL3NyYy9ZTV9Mb3JpY2FfVXRpbGl0eVNwZWxscy50cyIsIndlYnBhY2s6Ly9Mb3JpY2FSZWRvbmUvLi9zcmMvWU1fTG9yaWNhX01DTS50cyIsIndlYnBhY2s6Ly9Mb3JpY2FSZWRvbmUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vTG9yaWNhUmVkb25lL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL0xvcmljYVJlZG9uZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vTG9yaWNhUmVkb25lL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vTG9yaWNhUmVkb25lL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vTG9yaWNhUmVkb25lL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vTG9yaWNhUmVkb25lL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9Mb3JpY2FSZWRvbmUvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59O1xyXG5pbXBvcnQgeyBvbiwgcHJpbnRDb25zb2xlLCBGb3JtLCBHYW1lLCBTcGVsbCwgRGVidWcsIFV0aWxpdHksIGhvb2tzLCBvbmNlLCBGb3JtTGlzdCwgY3JlYXRlVGV4dCwgc2V0VGV4dFN0cmluZywgc2V0VGV4dENvbG9yLCBnZXRUZXh0Q29sb3IgfSBmcm9tIFwiQHNreXJpbS1wbGF0Zm9ybS9za3lyaW0tcGxhdGZvcm1cIjtcclxuaW1wb3J0IHsgU2V0SW50VmFsdWUsIEdldEludFZhbHVlLCBGb3JtTGlzdEhhcywgR2V0RmxvYXRWYWx1ZSwgRm9ybUxpc3RBZGQsIFVuc2V0SW50VmFsdWUsIEFkanVzdEludFZhbHVlLCBGb3JtTGlzdENvdW50LCBGb3JtTGlzdFJlbW92ZSwgRm9ybUxpc3RHZXQgfSBmcm9tIFwiQHNreXJpbS1wbGF0Zm9ybS9wYXB5cnVzLXV0aWwvU3RvcmFnZVV0aWxcIjtcclxuaW1wb3J0IHsgRm9ybUxpc3RIYXMgYXMgVXBrZWVwTGlzdEhhcyB9IGZyb20gXCJAc2t5cmltLXBsYXRmb3JtL3BhcHlydXMtdXRpbC9Kc29uVXRpbFwiO1xyXG5pbXBvcnQgeyBJbnRUb1N0cmluZywgSGFzQWN0aXZlU3BlbGwsIEdldEFsbFNwZWxscyB9IGZyb20gXCJAc2t5cmltLXBsYXRmb3JtL3BvMy1wYXB5cnVzLWV4dGVuZGVyL1BPM19TS1NFRnVuY3Rpb25zXCI7XHJcbmltcG9ydCB7IHBsLCBqdUtleXMsIHN1S2V5cywgVUlVcGRhdGVEZWJ1ZmZNZXRlciB9IGZyb20gXCIuL1lNX0xvcmljYV9TaGFyZWRcIjtcclxuaW1wb3J0IHsgbWFpbkNvbXBhdCB9IGZyb20gXCIuL1lNX0xvcmljYV9Db21wYXRcIjtcclxuaW1wb3J0IHsgbWFpblV0aWxpdHlTcGVsbHMgfSBmcm9tIFwiLi9ZTV9Mb3JpY2FfVXRpbGl0eVNwZWxsc1wiO1xyXG5pbXBvcnQgeyBtYWluTUNNIH0gZnJvbSBcIi4vWU1fTG9yaWNhX01DTVwiO1xyXG5tYWluTUNNKCk7XHJcbm1haW5VdGlsaXR5U3BlbGxzKCk7XHJcbnZhciBiQ2hhcmdpbmcgPSAxO1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUNPTVBBVElCSUxJVFkgU0VDVElPTi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG52YXIgc3BlbGxDb21wYXRDaGVjayA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBhbGxzcGVsbHM7XHJcbiAgICBhbGxzcGVsbHMgPSBHZXRBbGxTcGVsbHMobnVsbCwgdHJ1ZSk7XHJcbiAgICBpZiAoR2V0SW50VmFsdWUobnVsbCwgc3VLZXlzLmlDb21wYXRBbGxTcGVsbHMpICE9IGFsbHNwZWxscy5sZW5ndGggJiYgIUdldEludFZhbHVlKG51bGwsIHN1S2V5cy5iQ29tcGF0SW5pdGlhbGl6ZWQpKSB7XHJcbiAgICAgICAgbWFpbkNvbXBhdCgpO1xyXG4gICAgfVxyXG4gICAgO1xyXG59O1xyXG5vbignbG9hZEdhbWUnLCBmdW5jdGlvbiAoKSB7IHByaW50Q29uc29sZSgnbG9hZGdhbWUnKTsgc3BlbGxDb21wYXRDaGVjaygpOyB9KTtcclxub24oJ25ld0dhbWUnLCBmdW5jdGlvbiAoKSB7IHByaW50Q29uc29sZSgnbmV3Z2FtZScpOyBzcGVsbENvbXBhdENoZWNrKCk7IH0pO1xyXG5vbmNlKCdza3lyaW1Mb2FkZWQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyBwcmludENvbnNvbGUoJ3NreXJpbUxvYWRlZCcpIFxyXG4gICAgLy8gbGV0IGNoYXJnZV9pbmRpY2F0b3I6bnVtYmVyID0gY3JlYXRlVGV4dCgxMDAsIDEwMCwgJ3Rlc3QnLCBbMCwwLjUsMSwxXSlcclxuICAgIC8vIFNldEludFZhbHVlKG51bGwsICcuTG9yaWNhUmVkb25lLndpZGdldHMuY2hhcmdpbmcuaWQnLCBjaGFyZ2VfaW5kaWNhdG9yKVxyXG59KTtcclxub25jZSgnc2NyaXB0SW5pdCcsIGZ1bmN0aW9uICgpIHsgc3BlbGxDb21wYXRDaGVjaygpOyB9KTtcclxub25jZSgndXBkYXRlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gaWYgKCAhR2V0SW50VmFsdWUobnVsbCwgc3VLZXlzLmJDb21wYXRJbml0aWFsaXplZCkgKSB7IHJldHVybjt9XHJcbiAgICAvLyBHaXZlUGxheWVyU3BlbGxCb29rKCk7IC8vIGRlYnVnIG9wdGlvblxyXG4gICAgbWFpbkNvbXBhdCgpO1xyXG4gICAgLy8gc3BlbGxDb21wYXRDaGVjaygpXHJcbiAgICB2YXIgbGNoYXJnZV9pbmRpY2F0b3IgPSBjcmVhdGVUZXh0KDEwMDAsIDEwMDAsICd0ZXN0JywgWzAsIDAuNSwgMSwgMV0pO1xyXG4gICAgdmFyIHJjaGFyZ2VfaW5kaWNhdG9yID0gY3JlYXRlVGV4dCgxMzAwLCAxMDAwLCAndGVzdCcsIFswLCAwLjUsIDEsIDFdKTtcclxuICAgIFNldEludFZhbHVlKG51bGwsICcuTG9yaWNhUmVkb25lLndpZGdldHMuY2hhcmdpbmcubGVmdC5pZCcsIGxjaGFyZ2VfaW5kaWNhdG9yKTtcclxuICAgIFNldEludFZhbHVlKG51bGwsICcuTG9yaWNhUmVkb25lLndpZGdldHMuY2hhcmdpbmcucmlnaHQuaWQnLCByY2hhcmdlX2luZGljYXRvcik7XHJcbiAgICBiQ2hhcmdpbmcgPSBHZXRJbnRWYWx1ZShudWxsLCBzdUtleXMuYkNoYXJnaW5nRW5hYmxlLCAxKTtcclxufSk7XHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tRFVBTCBDQVNUIENIRUNLLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBob29rIGludG8gZHVhbCBjYXN0IG1hZ2ljIGFuaW1hdGlvbiB0byBkb3VibHkgY2hlY2sgaWYgc3BlbGwgd2FzIGR1YWwgY2FzdCBbY2hlY2tdXHJcbi8vIGdldEVxdWlwcGVkU3BlbGwoMCkgPT0gbGVmdCBoYW5kXHJcbi8vIGdldEVxdWlwcGVkU3BlbGwoMSkgPT0gcmlnaHQgaGFuZFxyXG52YXIgYkR1YWxDYXN0ID0gZmFsc2U7XHJcbnZhciBiVXBrZWVwQ2FzdCA9IGZhbHNlO1xyXG52YXIgZkNoYXJnZVRpbWVyUiA9IDA7XHJcbnZhciBmQ2hhcmdlVGltZXJMID0gMDtcclxudmFyIFNwZWxsZHVyYXRpb24gPSAwO1xyXG5ob29rcy5zZW5kQW5pbWF0aW9uRXZlbnQuYWRkKHtcclxuICAgIGVudGVyOiBmdW5jdGlvbiAoY3R4KSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB2YXIgYW5pbUV2ZW50ID0gY3R4LmFuaW1FdmVudE5hbWUudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAvLyBwcmludENvbnNvbGUoYW5pbUV2ZW50KTtcclxuICAgICAgICBpZiAoYW5pbUV2ZW50LmluY2x1ZGVzKFwiZHVhbG1hZ2ljXCIpKSB7XHJcbiAgICAgICAgICAgIG9uY2UoJ3VwZGF0ZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBlcXVpcHBlZFJpZ2h0ID0gRm9ybS5mcm9tKEdhbWUuZ2V0UGxheWVyKCkuZ2V0RXF1aXBwZWRTcGVsbCgxKSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWVxdWlwcGVkUmlnaHQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICB2YXIgc0R1YWxDYXN0ID0gXCJMb3JpY2FSZWRvbmVcIiArIGVxdWlwcGVkUmlnaHQuZ2V0TmFtZSgpICsgXCJEdWFsQ2FzdFwiO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFlcXVpcHBlZFJpZ2h0IHx8ICFzRHVhbENhc3QpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICBpZiAoYkR1YWxDYXN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgU2V0SW50VmFsdWUobnVsbCwgc0R1YWxDYXN0LCAxKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBwcmludENvbnNvbGUoJ3NlbmRBbmltYXRpb25FdmVudDo6IGR1YWwgY2FzdCBjaGVjazogJyArIEdldEludFZhbHVlKG51bGwsIHNEdWFsQ2FzdCwgMCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLWNhc3QgY2hhcmdlIHN0dWZmLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgIHZhciBpc0luV3JvbmdMaXN0cyA9IGZ1bmN0aW9uIChzcGVsbCkge1xyXG4gICAgICAgICAgICBpZiAoIVVwa2VlcExpc3RIYXMoanVLZXlzLnBhdGgsIHN1S2V5cy5mb3JtVXBrZWVwTGlzdCwgc3BlbGwpIHx8IEZvcm1MaXN0SGFzKG51bGwsIHN1S2V5cy5mb3JtQXBwbGllZExpc3QsIHNwZWxsKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHZhciBXaWRnZXRTZXQgPSBmdW5jdGlvbiAoZHVyYXRpb24sIGhhbmQpIHtcclxuICAgICAgICAgICAgaGFuZCA9IGhhbmQudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgdmFyIHdpZGdldCA9IEdldEludFZhbHVlKG51bGwsIFwiLkxvcmljYVJlZG9uZS53aWRnZXRzLmNoYXJnaW5nLlwiLmNvbmNhdChoYW5kLCBcIi5pZFwiKSk7XHJcbiAgICAgICAgICAgIHZhciBtYXggPSBHZXRJbnRWYWx1ZShudWxsLCBzdUtleXMuaUNoYXJnZU1heER1cmF0aW9uLCA2MDApICogNjAgLyAxMDA7XHJcbiAgICAgICAgICAgIHNldFRleHRDb2xvcih3aWRnZXQsIFswLCAwLjUsIDEsIDFdKTtcclxuICAgICAgICAgICAgc2V0VGV4dFN0cmluZyh3aWRnZXQsIFwiXCIuY29uY2F0KE1hdGgucm91bmQoZHVyYXRpb24gLyBtYXgpLCBcIiVcIikpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKGJDaGFyZ2luZyA9PSAxKSB7XHJcbiAgICAgICAgICAgIGlmIChhbmltRXZlbnQuaW5jbHVkZXMoXCJzcGVsbHJlYWR5XCIpKSB7XHJcbiAgICAgICAgICAgICAgICBvbmNlKCd1cGRhdGUnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYlVwa2VlcENhc3QgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGZDaGFyZ2VUaW1lckwgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGZDaGFyZ2VUaW1lclIgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBlcXVpcHBlZExlZnQgPSBGb3JtLmZyb20oR2FtZS5nZXRQbGF5ZXIoKS5nZXRFcXVpcHBlZFNwZWxsKDApKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZXF1aXBwZWRSaWdodCA9IEZvcm0uZnJvbShHYW1lLmdldFBsYXllcigpLmdldEVxdWlwcGVkU3BlbGwoMSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhbmltRXZlbnQuaW5jbHVkZXMoJ21saCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc0luV3JvbmdMaXN0cyhlcXVpcHBlZExlZnQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiVXBrZWVwQ2FzdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZkNoYXJnZVRpbWVyTCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb24oJ3VwZGF0ZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChiVXBrZWVwQ2FzdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB3ID0gZnVuY3Rpb24gKGR1cmF0aW9uKSB7IHJldHVybiBfX2F3YWl0ZXIoX3RoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIFV0aWxpdHkud2FpdCgwLjUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIERlYnVnLm5vdGlmaWNhdGlvbignU3BlbGwgaXMgY2hhcmdpbmchJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBEZWJ1Zy5ub3RpZmljYXRpb24oJ1NwZWxsIGlzIGNoYXJnaW5nIScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdpZGdldFNldChkdXJhdGlvbiwgJ2xlZnQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZkNoYXJnZVRpbWVyTCsrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pOyB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlcXVpcHBlZExlZnRfMSA9IEZvcm0uZnJvbShHYW1lLmdldFBsYXllcigpLmdldEVxdWlwcGVkU3BlbGwoMCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNwZWxsZHVyYXRpb24gPSBTZXREdXJhdGlvbihmQ2hhcmdlVGltZXJMLCBlcXVpcHBlZExlZnRfMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdyhTcGVsbGR1cmF0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoKGZDaGFyZ2VUaW1lckwgLyA2MCkgPiAzMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYlVwa2VlcENhc3QgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZkNoYXJnZVRpbWVyTCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFuaW1FdmVudC5pbmNsdWRlcygnbXJoJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzSW5Xcm9uZ0xpc3RzKGVxdWlwcGVkUmlnaHQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiVXBrZWVwQ2FzdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZkNoYXJnZVRpbWVyUiA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb24oJ3VwZGF0ZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChiVXBrZWVwQ2FzdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB3ID0gZnVuY3Rpb24gKGR1cmF0aW9uKSB7IHJldHVybiBfX2F3YWl0ZXIoX3RoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIFV0aWxpdHkud2FpdCgwLjUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIERlYnVnLm5vdGlmaWNhdGlvbignU3BlbGwgaXMgY2hhcmdpbmchJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBEZWJ1Zy5ub3RpZmljYXRpb24oJ1NwZWxsIGlzIGNoYXJnaW5nIScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdpZGdldFNldChTcGVsbGR1cmF0aW9uLCAncmlnaHQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZkNoYXJnZVRpbWVyUisrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pOyB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlcXVpcHBlZFJpZ2h0XzEgPSBGb3JtLmZyb20oR2FtZS5nZXRQbGF5ZXIoKS5nZXRFcXVpcHBlZFNwZWxsKDEpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTcGVsbGR1cmF0aW9uID0gU2V0RHVyYXRpb24oZkNoYXJnZVRpbWVyUiwgZXF1aXBwZWRSaWdodF8xKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3KFNwZWxsZHVyYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoZkNoYXJnZVRpbWVyUiAvIDYwKSA+IDMwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiVXBrZWVwQ2FzdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmQ2hhcmdlVGltZXJSID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChhbmltRXZlbnQuaW5jbHVkZXMoXCJzcGVsbHJlbGVhc2VcIikgfHwgYW5pbUV2ZW50LmluY2x1ZGVzKCdlcXVpcHBlZF9ldmVudCcpIHx8IGFuaW1FdmVudC5pbmNsdWRlcygndW5lcXVpcCcpKSB7XHJcbiAgICAgICAgICAgICAgICBiVXBrZWVwQ2FzdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZkNoYXJnZVRpbWVyTCA9IDA7XHJcbiAgICAgICAgICAgICAgICBmQ2hhcmdlVGltZXJSID0gMDtcclxuICAgICAgICAgICAgICAgIG9uY2UoJ3VwZGF0ZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9fYXdhaXRlcihfdGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGx3aWRnZXQsIHJ3aWRnZXQsIGNvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCBVdGlsaXR5LndhaXQoMi4wKV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaW50Q29uc29sZSgnZmFkZW91dCBzdGFydGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGx3aWRnZXQgPSBHZXRJbnRWYWx1ZShudWxsLCAnLkxvcmljYVJlZG9uZS53aWRnZXRzLmNoYXJnaW5nLmxlZnQuaWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcndpZGdldCA9IEdldEludFZhbHVlKG51bGwsICcuTG9yaWNhUmVkb25lLndpZGdldHMuY2hhcmdpbmcucmlnaHQuaWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3IgPSBnZXRUZXh0Q29sb3IocndpZGdldCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yWzNdID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGV4dENvbG9yKGx3aWRnZXQsIGNvbG9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGV4dENvbG9yKHJ3aWRnZXQsIGNvbG9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9KTsgfTtcclxuICAgICAgICAgICAgICAgICAgICB3KCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoYW5pbUV2ZW50LmluY2x1ZGVzKFwic3BlbGxyZWxlYXNlXCIpKSB7XHJcbiAgICAgICAgICAgICAgICBvbmNlKCd1cGRhdGUnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxlZnQgPSBGb3JtLmZyb20oR2FtZS5nZXRQbGF5ZXIoKS5nZXRFcXVpcHBlZFNwZWxsKDApKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcmlnaHQgPSBGb3JtLmZyb20oR2FtZS5nZXRQbGF5ZXIoKS5nZXRFcXVpcHBlZFNwZWxsKDEpKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYW5pbUV2ZW50LmluY2x1ZGVzKCdtcmgnKSAmJiAhaXNJbldyb25nTGlzdHMocmlnaHQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmICggYW5pbUV2ZW50LmluY2x1ZGVzKCdtbGgnKSAmJiAhaXNJbldyb25nTGlzdHMobGVmdCkpIHtNZXNzYWdlRHVyYXRpb25SZXN1bHQoU3BlbGxkdXJhdGlvbil9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBsZWF2ZTogZnVuY3Rpb24gKGN0eCkgeyB9XHJcbn0sIDB4MTQsIDB4MTQpOyAvLyBmaWx0ZXIgb3V0IG5vbi1wbGF5ZXIgZXZlbnRzXHJcbmZ1bmN0aW9uIE1lc3NhZ2VEdXJhdGlvblJlc3VsdChkdXJhdGlvbikge1xyXG4gICAgZHVyYXRpb24gLz0gNjA7XHJcbiAgICBkdXJhdGlvbiA9IE1hdGguZmxvb3IoZHVyYXRpb24pO1xyXG4gICAgLy8gaWYgKCBkdXJhdGlvbiA+IDAgJiYgZHVyYXRpb24gPCA3ICkgeyB9XHJcbiAgICAvLyBjb25zdCB3ID1hc3luYyAoKSA9PiB7XHJcbiAgICAvLyBcdGF3YWl0IFV0aWxpdHkud2FpdCgwLjIpXHJcbiAgICAvLyBcdERlYnVnLm5vdGlmaWNhdGlvbihgU3BlbGwgaGFzIGJlZW4gY2hhcmdlZCBlbm91Z2ggdG8gbGFzdCAke2R1cmF0aW9ufSBtaW51dGVzIWApIFxyXG4gICAgLy8gfVxyXG4gICAgLy8gdygpXHJcbiAgICB2YXIgd2lkZ2V0ID0gR2V0SW50VmFsdWUobnVsbCwgJy5Mb3JpY2FSZWRvbmUud2lkZ2V0cy5jaGFyZ2luZy5pZCcpO1xyXG4gICAgaWYgKHdpZGdldCA9PSAwKSB7XHJcbiAgICAgICAgRGVidWcubm90aWZpY2F0aW9uKFwiV2lkZ2V0IEZhaWxlZCFcXG5FUlJPUiA0MDM6IG5vIHdpZGdldCBjcmVhdGVkXFxuQXR0ZW1wdGluZyB0byByZWNyZWF0ZSB3aWRnZXRcIik7XHJcbiAgICAgICAgb25jZSgndXBkYXRlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgY2hhcmdlX2luZGljYXRvciA9IGNyZWF0ZVRleHQoMTAwLCAxMDAsICd0ZXN0JywgWzAsIDAuNSwgMSwgMV0pO1xyXG4gICAgICAgICAgICBTZXRJbnRWYWx1ZShudWxsLCAnLkxvcmljYVJlZG9uZS53aWRnZXRzLmNoYXJnaW5nLmlkJywgY2hhcmdlX2luZGljYXRvcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBzZXRUZXh0U3RyaW5nKHdpZGdldCwgXCIwXCIpO1xyXG59XHJcbnZhciBDaGFyZ2VUaW1lX1ZfQ29zdF9FcXVhdGlvbiA9IGZ1bmN0aW9uIChzcGVsbCkge1xyXG4gICAgLy8gZXF1YXRpb24gKCBjaGFyZ2VfdGltZSBpcyBzZWNvbmRzIHNwZWxsIG5lZWRzIHRvIGJlIGNoYXJnZWQgdG8gcmVhY2ggbWF4IHNwZWxsIGR1cmF0aW9uIClcclxuICAgIC8vIFx0XHRcdFx0IHtcdDYuNGUtNCAqICh4KzIwKV4yXHQwIDw9IHggPD0gMTAwXHJcbiAgICAvLyBjaGFyZ2VfdGltZSA9IHxcdFxyXG4gICAgLy8gXHRcdFx0XHQge1x0MTBcdFx0XHRcdFx0eCA+PSAxMDBcclxuICAgIHZhciBVc2VyX1ByZWZfU29sdXRpb24gPSBHZXRJbnRWYWx1ZShudWxsLCBzdUtleXMuaUNoYXJnZUNvc3RTb2x1dGlvbiwgMjApO1xyXG4gICAgdmFyIFVzZXJfUHJlZl9VcHBlcl9Cb3VuZCA9IEdldEludFZhbHVlKG51bGwsIHN1S2V5cy5pQ2hhcmdlRHVyYXRpb25VcHBlckJvdW5kLCAxMCk7XHJcbiAgICB2YXIgVXNlcl9QcmVmX0Nvc3RfQXN5bXB0b3RlID0gR2V0SW50VmFsdWUobnVsbCwgc3VLZXlzLmlDaGFyZ2VDb3N0QXN5bXB0b3RlLCAxMDApO1xyXG4gICAgdmFyIGZDb3N0ID0gU3BlbGwuZnJvbShzcGVsbCkuZ2V0RWZmZWN0aXZlTWFnaWNrYUNvc3QocGwoKSk7XHJcbiAgICB2YXIgY2hhcmdlX3RpbWUgPSAwO1xyXG4gICAgdmFyIHNvbHV0aW9uID0gVXNlcl9QcmVmX1NvbHV0aW9uOyAvLyBzb2x1dGlvbiB0byB0aGUgZmlyc3QgcGFydCBvZiB0aGUgc3RlcCBmdW5jdGlvbiwgdGhpcyAnZkNvc3QgKyA0MCoqMicgaXMgb2YgY291cnNlIC00MC4gQSBzcGVsbCBjb3N0aW5nIDQwIG9yIGJlbG93IGhhcyB0byBjaGFyZ2VcclxuICAgIHZhciB1cHBlcl9zdGVwID0gVXNlcl9QcmVmX1VwcGVyX0JvdW5kO1xyXG4gICAgaWYgKGZDb3N0ID49IDAgJiYgZkNvc3QgPCBVc2VyX1ByZWZfQ29zdF9Bc3ltcHRvdGUpIHtcclxuICAgICAgICBjaGFyZ2VfdGltZSA9IDYuNGUtNCAqIChNYXRoLnBvdygoZkNvc3QgLSBzb2x1dGlvbiksIDIpKTtcclxuICAgIH1cclxuICAgIGlmIChmQ29zdCA8PSBzb2x1dGlvbiB8fCB1cHBlcl9zdGVwID09IDApIHtcclxuICAgICAgICBjaGFyZ2VfdGltZSA9IDA7XHJcbiAgICAgICAgcmV0dXJuIGNoYXJnZV90aW1lO1xyXG4gICAgfSAvLyBmaXJzdCBzdGVwIGZ1bmN0aW9uIHRvIGJvdW5kIHN5c3RlbSB0byBjb25zdGFudCBtaW4geSBpLmUuIGxlc3MgdGhhbiB5b3VyIG1pbiBjb3N0IGNoYXJnZV90aW1lID0gMFxyXG4gICAgaWYgKGZDb3N0ID49IFVzZXJfUHJlZl9Db3N0X0FzeW1wdG90ZSkge1xyXG4gICAgICAgIGNoYXJnZV90aW1lID0gdXBwZXJfc3RlcDtcclxuICAgIH0gLy8gdGhlIG1heCBhbnkgc3BlbGwgc2hvdWxkIGNoYXJnZSBpcyAxMCBzZWNvbmRzOyBzZWNvbmQgc3RlcCBmdW5jdGlvbiB0byBib3VuZCB0aGUgc3lzdGVtIHRvIHNvbWUgY29uc3RhbnQgeVxyXG4gICAgcmV0dXJuIE1hdGguY2VpbChjaGFyZ2VfdGltZSk7XHJcbn07XHJcbnZhciBEdXJhdGlvbl9WX0NoYXJnZVRpbWUgPSBmdW5jdGlvbiAoY2hhcmdlX3RpbWVyLCBzcGVsbCkge1xyXG4gICAgLy8gZXF1YXRpb25cclxuICAgIC8vIGR1cmF0aW9uIGlzIGluIG1pbnV0ZXMsIGFuZCBpcyBjb252ZXJ0ZWQgdG8gc2Vjb25kc1xyXG4gICAgLy8gZHVyYXRpb24gPSAoMTA4KSpjaGFyZ2VfdGltZSArIDFcdFx0MCA8PSBjaGFyZ2VfdGltZSA8PSA1IG1pbnV0ZXNcclxuICAgIC8vIGR1cmF0aW9uID0gMTBcdFx0XHRcdFx0XHRjaGFyZ2VfdGltZSA+PSA1IG1pbnV0ZXNcclxuICAgIC8vIGlucHV0IGNoYXJnZV90aW1lciAoIGluIHNlY29uZHMpIHNob3VsZCBiZSB0aGUgY2hhcmdlIHRpbWVyIGluIHRoZSBsb29wLCBOT1QgdGhlIGNhbGN1bGF0ZWQgbnVtYmVyIGZyb20gdGhlIGVxdWF0aW9uIENoYXJnZVRpbWVfVl9Db3N0X0VxdWF0aW9uXHJcbiAgICB2YXIgVXNlcl9QcmVmX01heF9EdXIgPSBHZXRJbnRWYWx1ZShudWxsLCBzdUtleXMuaUNoYXJnZU1heER1cmF0aW9uLCA2MDApICogNjA7IC8vIG11bHQuIGJ5IDYwIHRvIGNvbnZlcnQgbWludXRlcyB0byBzZWNvbmRzXHJcbiAgICB2YXIgVXNlcl9QcmVmX1VwcGVyX0JvdW5kID0gR2V0SW50VmFsdWUobnVsbCwgc3VLZXlzLmlDaGFyZ2VEdXJhdGlvblVwcGVyQm91bmQsIDEwKTtcclxuICAgIHZhciBzbG9wZSA9IChVc2VyX1ByZWZfTWF4X0R1ciAtIDYwKSAvIFVzZXJfUHJlZl9VcHBlcl9Cb3VuZDtcclxuICAgIHZhciBjaGFyZ2VfY2FsY3VsYXRlZCA9IENoYXJnZVRpbWVfVl9Db3N0X0VxdWF0aW9uKHNwZWxsKTtcclxuICAgIGNoYXJnZV90aW1lciAvPSA2MDsgLy8gZGl2aWRlIGJ5IDYwIGFzIHRoZSB0aW1lciBpbmNyZW1lbnRzIDYwIHRpbWVzIGEgc2Vjb25kXHJcbiAgICBpZiAoY2hhcmdlX3RpbWVyID49IGNoYXJnZV9jYWxjdWxhdGVkKSB7XHJcbiAgICAgICAgcmV0dXJuIFVzZXJfUHJlZl9NYXhfRHVyO1xyXG4gICAgfVxyXG4gICAgdmFyIGR1cmF0aW9uID0gKChzbG9wZSkgKiBjaGFyZ2VfdGltZXIgKyA2MCk7XHJcbiAgICBpZiAoZHVyYXRpb24gPCBVc2VyX1ByZWZfTWF4X0R1cikge1xyXG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKGR1cmF0aW9uKTtcclxuICAgIH1cclxuICAgIGlmIChkdXJhdGlvbiA+PSBVc2VyX1ByZWZfTWF4X0R1cikge1xyXG4gICAgICAgIHJldHVybiBVc2VyX1ByZWZfTWF4X0R1cjtcclxuICAgIH1cclxufTtcclxuZnVuY3Rpb24gU2V0RHVyYXRpb24oY2hhcmdlX3RpbWVyLCBzcGVsbCkge1xyXG4gICAgdmFyIGR1cmF0aW9uID0gRHVyYXRpb25fVl9DaGFyZ2VUaW1lKGNoYXJnZV90aW1lciwgc3BlbGwpO1xyXG4gICAgdmFyIHMgPSBTcGVsbC5mcm9tKHNwZWxsKTtcclxuICAgIHMuc2V0TnRoRWZmZWN0RHVyYXRpb24oMCwgZHVyYXRpb24pO1xyXG4gICAgcmV0dXJuIGR1cmF0aW9uO1xyXG59XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tTUFJTi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbm9uKCdzcGVsbENhc3QnLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgIC8vIGNvbnN0IGNhc3RlciA9IEFjdG9yLmZyb20oZXZlbnQuY2FzdGVyLmdldEJhc2VPYmplY3QoKSkgLy8gZXZlbnQgY2FzdG9yIGFzIEFjdG9yXHJcbiAgICB2YXIgY2FzdHNwZWxsID0gRm9ybS5mcm9tKGV2ZW50LnNwZWxsKTsgLy8gZXZlbnQgc3BlbGwgYXMgRm9ybVxyXG4gICAgdmFyIGZvcm1saXN0QXBwbGllZCA9IEZvcm1MaXN0LmZyb20oR2FtZS5nZXRGb3JtRnJvbUZpbGUoMHgwMDFENjMsIFwiTG9yaWNhIFJlZG9uZS5lc3BcIikpO1xyXG4gICAgcHJpbnRDb25zb2xlKGZvcm1saXN0QXBwbGllZCA9PT0gbnVsbCB8fCBmb3JtbGlzdEFwcGxpZWQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGZvcm1saXN0QXBwbGllZC5oYXNGb3JtKGNhc3RzcGVsbCkpO1xyXG4gICAgLy8gcHJpbnRDb25zb2xlKGBBcHBsaWVkTGlzdCBIYXMgPT4gJHtGb3JtTGlzdEhhcyhudWxsLCBzdUtleXMuZm9ybUFwcGxpZWRMaXN0LCBjYXN0c3BlbGwpfWApXHJcbiAgICBpZiAoIWNhc3RzcGVsbCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIDtcclxuICAgIC8vIGlmIHRoZSBzcGVsbCBpcyBpbiB0aGUgYmxhY2tsaXN0IG9yIGlzbid0IGluIHRoZSB1cGtlZXAgbGlzdCwganVzdCBzdG9wXHJcbiAgICBpZiAoVXBrZWVwTGlzdEhhcyhqdUtleXMucGF0aCwgc3VLZXlzLmZvcm1CbGFja0xpc3QsIGNhc3RzcGVsbCkgfHwgIVVwa2VlcExpc3RIYXMoanVLZXlzLnBhdGgsIHN1S2V5cy5mb3JtVXBrZWVwTGlzdCwgY2FzdHNwZWxsKSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIDtcclxuICAgIC8vIG1haW4gdG9nZ2xlIGlmLWJsb2NrXHJcbiAgICBpZiAoIUZvcm1MaXN0SGFzKG51bGwsIHN1S2V5cy5mb3JtQXBwbGllZExpc3QsIGNhc3RzcGVsbCkpIHtcclxuICAgICAgICBUb2dnbGVTcGVsbCgnb24nLCBjYXN0c3BlbGwpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgVG9nZ2xlU3BlbGwoJ29mZicsIGNhc3RzcGVsbCk7XHJcbiAgICB9XHJcbiAgICA7XHJcbn0pO1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tQ0xFQU5VUC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5vbignZWZmZWN0RmluaXNoJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IEZvcm1MaXN0Q291bnQobnVsbCwgc3VLZXlzLmZvcm1BcHBsaWVkTGlzdCk7IGkrKykge1xyXG4gICAgICAgIHZhciBGID0gRm9ybUxpc3RHZXQobnVsbCwgc3VLZXlzLmZvcm1BcHBsaWVkTGlzdCwgaSk7XHJcbiAgICAgICAgdmFyIFMgPSBTcGVsbC5mcm9tKEYpO1xyXG4gICAgICAgIGlmICghSGFzQWN0aXZlU3BlbGwocGwoKSwgUykpIHtcclxuICAgICAgICAgICAgVG9nZ2xlU3BlbGwoXCJvZmZcIiwgRik7XHJcbiAgICAgICAgICAgIFVJVXBkYXRlRGVidWZmTWV0ZXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgO1xyXG4gICAgfVxyXG4gICAgO1xyXG59KTtcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUZVTkNUSU9OUy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuZXhwb3J0IGZ1bmN0aW9uIFRvZ2dsZVNwZWxsKG9wdGlvbiwgc3BlbGwpIHtcclxuICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICB2YXIgUmVtb3ZlID0gZnVuY3Rpb24gKHNwZWxsKSB7XHJcbiAgICAgICAgdmFyIGZvcm1saXN0QXBwbGllZCA9IEZvcm1MaXN0LmZyb20oR2FtZS5nZXRGb3JtRnJvbUZpbGUoMHgwMDFENjMsIFwiTG9yaWNhIFJlZG9uZS5lc3BcIikpO1xyXG4gICAgICAgIEZvcm1MaXN0UmVtb3ZlKG51bGwsIHN1S2V5cy5mb3JtQXBwbGllZExpc3QsIHNwZWxsLCBmYWxzZSk7IC8vIHJlbW92ZSBmb3JtIGZyb20gYXBwbGllZCBzcGVsbHMgbGlzdFxyXG4gICAgICAgIGZvcm1saXN0QXBwbGllZC5yZW1vdmVBZGRlZEZvcm0oc3BlbGwpO1xyXG4gICAgICAgIHBsKCkuZGlzcGVsU3BlbGwoU3BlbGwuZnJvbShzcGVsbCkpO1xyXG4gICAgfTtcclxuICAgIC8vIHByaW50Q29uc29sZShcIlRvZ2dsZVNwZWxsOjogcnVubmluZ1wiKVxyXG4gICAgb3B0aW9uID0gb3B0aW9uLnRvTG93ZXJDYXNlKCk7XHJcbiAgICB2YXIgc3BlbGxDdW0gPSBTcGVsbC5mcm9tKEdhbWUuZ2V0Rm9ybUZyb21GaWxlKDB4MUEzMywgXCJMb3JpY2EgUmVkb25lLmVzcFwiKSk7IC8vIHRoZSBzcGVsbCByZXNwb25zaWJsZSBmb3IgdGhlIEN1bXVsYXRpdmUgcGVuYWx0eVxyXG4gICAgdmFyIHNwZWxsVXBrZWVwID0gU3BlbGwuZnJvbShHYW1lLmdldEZvcm1Gcm9tRmlsZSgweDFjNDAsIFwiTG9yaWNhIFJlZG9uZS5lc3BcIikpOyAvLyB0aGUgc3BlbGwgcmVzcG9uc2libGUgZm9yIHRoZSBUb3RhbCBVcGtlZXAgcGVuYWx0eVxyXG4gICAgdmFyIGZvcm1saXN0QXBwbGllZCA9IEZvcm1MaXN0LmZyb20oR2FtZS5nZXRGb3JtRnJvbUZpbGUoMHgwMDFENjMsIFwiTG9yaWNhIFJlZG9uZS5lc3BcIikpO1xyXG4gICAgdmFyIHNwZWxsc3RyaW5nID0gSW50VG9TdHJpbmcoc3BlbGwgPT09IG51bGwgfHwgc3BlbGwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHNwZWxsLmdldEZvcm1JRCgpLCB0cnVlKTsgLy8gZXhjbGFtYXRpb24gbWFyayBhc3N1cmVzIGNvbXBpbGVyIHRoYXQgdmFyaWFibGUgd2lsbCBiZSB0aGVyZVxyXG4gICAgdmFyIGZNYWcgPSBHZXRGbG9hdFZhbHVlKG51bGwsIHNwZWxsc3RyaW5nLCAwKTtcclxuICAgIHZhciBpQ3VtID0gTWF0aC5mbG9vcihmTWFnICogKEdldEZsb2F0VmFsdWUobnVsbCwgc3VLZXlzLmZDdW1GcmFjdGlvbiwgMC4yMCkpKTsgLy8gZ2V0IHRoZSBjdW11bGF0aXZlIGluY3JlYXNlIGZyb20gdGhlIGFyZ3VtZW50IHNwZWxsLCByb3VuZGVkIGRvd25cclxuICAgIC8vIHJlbW92ZSB1cGtlZXAgYW5kIGN1bXVsYXRpdmUgc3BlbGxzIGZvciBhZGp1c3RtZW50XHJcbiAgICBwbCgpLnJlbW92ZVNwZWxsKHNwZWxsQ3VtKTtcclxuICAgIHBsKCkucmVtb3ZlU3BlbGwoc3BlbGxVcGtlZXApO1xyXG4gICAgLy8gZ2V0IGN1cnJlbnRseSBlcXVpcHBlZCBzcGVsbHMgdG8gY2hlY2sgZm9yIGR1YWwtY2FzdFxyXG4gICAgdmFyIGVxdWlwcGVkTGVmdCA9IEZvcm0uZnJvbShHYW1lLmdldFBsYXllcigpLmdldEVxdWlwcGVkU3BlbGwoMCkpO1xyXG4gICAgdmFyIGVxdWlwcGVkUmlnaHQgPSBGb3JtLmZyb20oR2FtZS5nZXRQbGF5ZXIoKS5nZXRFcXVpcHBlZFNwZWxsKDEpKTtcclxuICAgIHZhciBzRHVhbENhc3Q7XHJcbiAgICBpZiAoZXF1aXBwZWRSaWdodCkge1xyXG4gICAgICAgIHNEdWFsQ2FzdCA9IFwiTG9yaWNhUmVkb25lXCIgKyAoZXF1aXBwZWRSaWdodCA9PT0gbnVsbCB8fCBlcXVpcHBlZFJpZ2h0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBlcXVpcHBlZFJpZ2h0LmdldE5hbWUoKSkgKyBcIkR1YWxDYXN0XCI7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChlcXVpcHBlZExlZnQpIHtcclxuICAgICAgICBzRHVhbENhc3QgPSBcIkxvcmljYVJlZG9uZVwiICsgKGVxdWlwcGVkTGVmdCA9PT0gbnVsbCB8fCBlcXVpcHBlZExlZnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGVxdWlwcGVkTGVmdC5nZXROYW1lKCkpICsgXCJEdWFsQ2FzdFwiO1xyXG4gICAgfVxyXG4gICAgaWYgKG9wdGlvbi5pbmNsdWRlcyhcIm9uXCIpKSB7XHJcbiAgICAgICAgRm9ybUxpc3RBZGQobnVsbCwgc3VLZXlzLmZvcm1BcHBsaWVkTGlzdCwgc3BlbGwsIHRydWUpOyAvLyBhZGQgZm9ybSB0byBsaXN0IG9mIGFwcGxpZWQgc3BlbGxzXHJcbiAgICAgICAgZm9ybWxpc3RBcHBsaWVkLmFkZEZvcm0oc3BlbGwpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChlcXVpcHBlZFJpZ2h0LmdldEZvcm1JRCgpID09IGVxdWlwcGVkTGVmdC5nZXRGb3JtSUQoKSAmJiBHZXRJbnRWYWx1ZShudWxsLCBzRHVhbENhc3QsIDApID09IDEpIHtcclxuICAgICAgICAgICAgICAgIC8vIHByaW50Q29uc29sZSgnVG9nZ2xlU3BlbGw6IGR1YWxjYXN0IGNoZWNrID0+IEdvb2QhJyk7XHJcbiAgICAgICAgICAgICAgICBmTWFnICo9IDI7XHJcbiAgICAgICAgICAgICAgICBpQ3VtICo9IDI7XHJcbiAgICAgICAgICAgICAgICBTZXRJbnRWYWx1ZShudWxsLCBzRHVhbENhc3QsIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlcnJvcikgeyB9XHJcbiAgICAgICAgO1xyXG4gICAgfVxyXG4gICAgO1xyXG4gICAgaWYgKG9wdGlvbiA9PSBcIm9mZlwiKSB7XHJcbiAgICAgICAgUmVtb3ZlKHNwZWxsKTtcclxuICAgICAgICAvLyBkdWFsIGNhc3QgY2hlY2tcclxuICAgICAgICBpZiAoR2V0SW50VmFsdWUobnVsbCwgc0R1YWxDYXN0LCAwKSAhPSAwKSB7XHJcbiAgICAgICAgICAgIGZNYWcgKj0gMjtcclxuICAgICAgICAgICAgaUN1bSAqPSAyO1xyXG4gICAgICAgICAgICBVbnNldEludFZhbHVlKG51bGwsIHNEdWFsQ2FzdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDtcclxuICAgICAgICAvLyBmYWlsc2FmZSBpZi1ibG9ja3NcclxuICAgICAgICB2YXIgaUN1bVRvdGFsID0gR2V0SW50VmFsdWUobnVsbCwgc3VLZXlzLmlDdW1Ub3RhbCwgMCk7IC8vIHRlZWhlZSAnY3VtdG90YWwnXHJcbiAgICAgICAgdmFyIGlVcGtlZXBUb3RhbCA9IEdldEludFZhbHVlKG51bGwsIHN1S2V5cy5pVXBrZWVwVG90YWwsIDApO1xyXG4gICAgICAgIGlmIChpQ3VtVG90YWwgPiAwKSB7XHJcbiAgICAgICAgICAgIGlDdW0gKj0gLTE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDtcclxuICAgICAgICBpZiAoaVVwa2VlcFRvdGFsID4gMCkge1xyXG4gICAgICAgICAgICBmTWFnICo9IC0xO1xyXG4gICAgICAgIH1cclxuICAgICAgICA7XHJcbiAgICAgICAgLy8gYSBsYXN0IHJlc29ydCBpZi1ibG9jayB0byBtYWtlIHN1cmUgbm90aGluZyB3ZWlyZCBoYXBwZW5zXHJcbiAgICAgICAgaWYgKGlDdW1Ub3RhbCAtIGlDdW0gPCBpQ3VtVG90YWwgfHwgaVVwa2VlcFRvdGFsIC0gZk1hZyA8IGlVcGtlZXBUb3RhbCkge1xyXG4gICAgICAgICAgICBmTWFnID0gMDtcclxuICAgICAgICAgICAgaUN1bSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDtcclxuICAgIH1cclxuICAgIDtcclxuICAgIGlmIChvcHRpb24gPT0gXCJyZXNldFwiKSB7XHJcbiAgICAgICAgZk1hZyA9IDA7XHJcbiAgICAgICAgaUN1bSA9IDA7XHJcbiAgICB9XHJcbiAgICA7XHJcbiAgICBpZiAob3B0aW9uID09IFwiemVyb1wiIHx8IEZvcm1MaXN0Q291bnQobnVsbCwgc3VLZXlzLmZvcm1BcHBsaWVkTGlzdCkgPT0gMCkge1xyXG4gICAgICAgIFNldEludFZhbHVlKG51bGwsIHN1S2V5cy5pQ3VtVG90YWwsIDApO1xyXG4gICAgICAgIFNldEludFZhbHVlKG51bGwsIHN1S2V5cy5pVXBrZWVwVG90YWwsIDApO1xyXG4gICAgICAgIGZNYWcgPSAwO1xyXG4gICAgICAgIGlDdW0gPSAwO1xyXG4gICAgfVxyXG4gICAgO1xyXG4gICAgdmFyIG5ld1Vwa2VlcCA9IEFkanVzdEludFZhbHVlKG51bGwsIHN1S2V5cy5pVXBrZWVwVG90YWwsIGZNYWcpO1xyXG4gICAgdmFyIG5ld0N1bSA9IEFkanVzdEludFZhbHVlKG51bGwsIHN1S2V5cy5pQ3VtVG90YWwsIGlDdW0pO1xyXG4gICAgLy8gcHJpbnRDb25zb2xlKGAgbmV3VXBrZWVwOiAke25ld1Vwa2VlcH1cXG4gbmV3Q3VtOiAke25ld0N1bX1gKVxyXG4gICAgaWYgKG5ld1Vwa2VlcCA8IDApIHtcclxuICAgICAgICBTZXRJbnRWYWx1ZShudWxsLCBzdUtleXMuaVVwa2VlcFRvdGFsLCAwKTtcclxuICAgIH1cclxuICAgIDtcclxuICAgIGlmIChuZXdDdW0gPCAwKSB7XHJcbiAgICAgICAgU2V0SW50VmFsdWUobnVsbCwgc3VLZXlzLmlDdW1Ub3RhbCwgMCk7XHJcbiAgICB9XHJcbiAgICA7XHJcbiAgICAvLyBpbmNhc2Ugc29tZXRoaW5nIG1lc3NlcyB1cCwgYW5kIHRoZXJlJ3Mgc29tZSBsZWZ0b3ZlciBwZW5hbHRpZXMsIGRlc3BpdGUgaGF2aW5nIG5vIHNwZWxscyBhY3RpdmVcclxuICAgIGlmIChuZXdVcGtlZXAgPiAwICYmIEZvcm1MaXN0Q291bnQobnVsbCwgc3VLZXlzLmZvcm1BcHBsaWVkTGlzdCkgPT0gMCkge1xyXG4gICAgICAgIFNldEludFZhbHVlKG51bGwsIHN1S2V5cy5pVXBrZWVwVG90YWwsIDApO1xyXG4gICAgICAgIFNldEludFZhbHVlKG51bGwsIHN1S2V5cy5pQ3VtVG90YWwsIDApO1xyXG4gICAgfVxyXG4gICAgO1xyXG4gICAgc3BlbGxDdW0uc2V0TnRoRWZmZWN0TWFnbml0dWRlKDAsIG5ld0N1bSk7XHJcbiAgICBzcGVsbFVwa2VlcC5zZXROdGhFZmZlY3RNYWduaXR1ZGUoMCwgbmV3VXBrZWVwKTtcclxuICAgIHZhciBhZGRpbmdzcGVsbHMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBfX2F3YWl0ZXIoX3RoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHNwZWxsVXBrZWVwLCBzcGVsbEN1bSwgYmFkZGVkO1xyXG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCBVdGlsaXR5LndhaXQoMC4xKV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNwZWxsVXBrZWVwID0gU3BlbGwuZnJvbShHYW1lLmdldEZvcm1Gcm9tRmlsZSgweDAwMWM0MCwgXCJMb3JpY2EgUmVkb25lLmVzcFwiKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3BlbGxDdW0gPSBTcGVsbC5mcm9tKEdhbWUuZ2V0Rm9ybUZyb21GaWxlKDB4MDAxQTMzLCBcIkxvcmljYSBSZWRvbmUuZXNwXCIpKTtcclxuICAgICAgICAgICAgICAgICAgICBiYWRkZWQgPSBwbCgpLmFkZFNwZWxsKHNwZWxsVXBrZWVwLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcGwoKS5hZGRTcGVsbChzcGVsbEN1bSwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7IH07XHJcbiAgICBhZGRpbmdzcGVsbHMoKTtcclxuICAgIFVJVXBkYXRlRGVidWZmTWV0ZXIoKTtcclxuICAgIC8vIHByaW50Q29uc29sZShgVG9nZ2xlU3BlbGwgSGFzID0+ICR7Rm9ybUxpc3RIYXMobnVsbCwgc3VLZXlzLmZvcm1BcHBsaWVkTGlzdCwgc3BlbGwhKX1gKVxyXG59XHJcbjtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSBza3lyaW1QbGF0Zm9ybTsiLCIvKlxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblR5cGVzY3JpcHQgZGVmaW5pdGlvbnMgZm9yIHY0LjJcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuVGhpcyBmaWxlIHdhcyBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBieSBQYXB5cnVzLTItVHlwZXNjcmlwdC5leGVcclxuaHR0cHM6Ly9naXRodWIuY29tL0Nhcmxvc0xleXZhQXlhbGEvUGFweXJ1cy0yLVR5cGVzY3JpcHRcclxuXHJcblRoZSBwcm9ncmFtIGhhcyBubyB3YXkgdG8ga25vdyB0aGUgaW50ZW50aW9uIG9mIHRoZSBodW1hbnMgdGhhdCBtYWRlXHJcbnRoZSBzY3JpcHRzLCBzbyBpdCdzIGFsd2F5cyBhZHZpc2FibGUgdG8gbWFudWFsbHkgY2hlY2sgYWxsIGdlbmVyYXRlZFxyXG5maWxlcyB0byBtYWtlIHN1cmUgZXZlcnl0aGluZyBpcyBkZWNsYXJlZCBhcyBpdCBzaG91bGQuXHJcblxyXG5UYWtlIG5vdGUgdGhlIHByb2dyYW0gYXNzdW1lcyB0aGlzIHNjcmlwdCBleGlzdHMgaW4gc29tZSBzdWJmb2xkZXJcclxudG8gdGhlIGZvbGRlciB3aGVyZSBgc2t5cmltUGxhdGZvcm0udHNgIGlzIGZvdW5kLCBvdGhlcndpc2UgeW91J2xsIGdldFxyXG5cIkNhbm5vdCBmaW5kIG1vZHVsZS4uLlwiIHR5cGUgb2YgZXJyb3JzLlxyXG5cclxuSWYgeW91IHdhbnQgdG8gaGF2ZSB0aGlzIHNjcmlwdCBpbiBzb21lIG90aGVyIHBsYWNlLCBqdXN0IGNoYW5nZSB0aGVcclxucmVsYXRpdmUgcGF0aCBvZiBlYWNoIGBpbXBvcnRgLlxyXG4qL1xyXG5pbXBvcnQgKiBhcyBzcCBmcm9tIFwic2t5cmltUGxhdGZvcm1cIjtcclxudmFyIHNuID0gc3AuU3RvcmFnZVV0aWw7XHJcbi8qKiBNT0QgQVVUSE9SUywgUkVBRCFcclxuXHJcbiAgICBUaGlzIHNjcmlwdCBjb250YWlucyBmdW5jdGlvbnMgZm9yIHNhdmluZyBhbmQgbG9hZGluZyBhbnkgYW1vdW50IG9mIGludCwgZmxvYXQsIGZvcm0gYW5kIHN0cmluZyB2YWx1ZXNcclxuICAgIGJ5IG5hbWUgb24gYSBmb3JtIG9yIGdsb2JhbGx5LiBUaGVzZSB2YWx1ZXMgY2FuIGJlIGFjY2Vzc2VkIGFuZCBjaGFuZ2VkIGZyb20gYW55IG1vZCB3aGljaCBhbGxvd3NcclxuICAgIG1vZHMgdG8gYmVjb21lIGNvbXBhdGlibGUgd2l0aCBlYWNoIG90aGVyIHdpdGhvdXQgYWRkaW5nIGFueSByZXF1aXJlbWVudHMgdG8gdGhlIG90aGVyIG1vZCBvciBpdHMgdmVyc2lvblxyXG4gICAgb3RoZXIgdGhhbiB0aGlzIHBsdWdpbi5cclxuXHJcbiAgICBWYWx1ZXMgd2lsbCBzdGF5IG9uIGZvcm1zIG9yIGdsb2JhbGx5IHVudGlsIHRoZXkgYXJlIFVuc2V0IG9yIENsZWFyZWQgaW4gY2FzZSBvZiBsaXN0cy4gSWYgdmFsdWVcclxuICAgIGlzIHNldCBvbiBhIGZvcm0gYW5kIHRoZSBvYmplY3QgaXMgZGVsZXRlZCB0aGVuIFRIRSB2YWx1ZSB3aWxsIGJlIHJlbW92ZWQgd2hlbiBzYXZpbmcgZ2FtZS5cclxuICAgIElmIHlvdSBhcmUgZG9uZSB3aXRoIHVzaW5nIGEgY2VydGFpbiB2YXJpYWJsZSB5b3Ugc2hvdWxkIHVzZSBVbnNldCBvciBDbGVhciBmdW5jdGlvbiB0byByZW1vdmUgdGhlbVxyXG4gICAgYnV0IGl0IGlzIG5vdCByZXF1aXJlZC5cclxuXHJcbiAgICBTYXZpbmcgTUNNIGNvbmZpZyB2YWx1ZXMgaGVyZSB3b3VsZCBhbGxvdyBvdGhlciBtb2RzIHRvIGNoYW5nZSB5b3VyIG1vZCBzZXR0aW5ncyB3aGljaCBtYXlcclxuICAgIGJlIHVzZWZ1bC4gSXQgc2hvdWxkIGFsc28gYWxsb3cgeW91IHRvIGNoYW5nZSBNQ00gY29uZmlnIHNjcmlwdCB3aXRob3V0IHdvcnJ5aW5nIGFib3V0IHZlcnNpb25pbmdcclxuICAgIHNpbmNlIHRoZXJlIGFyZSBubyBuZXcgdmFyaWFibGVzIGluIHRoZSBzY3JpcHQgaXRzZWxmLlxyXG5cclxuICAgIEZ1bmN0aW9ucyB0aGF0IHN0YXJ0IHdpdGggRmlsZSBpbiB0aGUgbmFtZSB3aWxsIHNhdmUgdmFsdWVzIHRvIGEgc2VwYXJhdGUgZmlsZSwgc28gdGhhdCB5b3UgY2FuXHJcbiAgICBhY2Nlc3MgdGhlIHNhbWUgdmFsdWVzIGZyb20gYWxsIHNhdmVnYW1lcy4gVGhpcyBtYXkgYmUgdXNlZnVsIGZvciBjb25maWd1cmF0aW9uIHNldHRpbmdzLlxyXG4gICAoRklMRSBGVU5DVElPTlMgQVJFIERFUFJFQ0FURUQhIFVTRSBKU09OVVRJTC5QU0MgSU5TVEVBRClcclxuXHJcbiAgICBTYXZlZCB2YWx1ZXMgdGFrZSB2ZXJ5IGxpdHRsZSBtZW1vcnkgLSBleHBlY3QgdG8gdXNlIGxlc3MgdGhhbiA1MDAgS0Igb2YgcGh5c2ljYWwgbWVtb3J5IGV2ZW4gd2hlblxyXG4gICAgc2V0dGluZyB0aG91c2FuZHMgb2YgdmFsdWVzLlxyXG5cclxuICAgIFZhbHVlIG5hbWVzIGFyZSBub3QgY2FzZSBzZW5zaXRpdmUsIHRoYXQgbWVhbnMgR2V0SW50VmFsdWUobm9uZSwgXCJhYmNcIikgPT0gR2V0SW50VmFsdWUobm9uZSwgXCJhQkNcIikuXHJcblxyXG4gICAgQWxsIHZhbHVlcyBhcmUgc2VwYXJhdGVkIGZyb20gZWFjaCBvdGhlciBieSB0eXBlISBUaGF0IG1lYW5zIFNldEludFZhbHVlKG5vbmUsIFwiYWJjXCIsIDEpIGFuZFxyXG4gICAgU2V0RmxvYXRWYWx1ZShub25lLCBcImFiY1wiLCAyLjApIGNyZWF0ZSBzZXBhcmF0ZSBlbnRyaWVzIGFuZCBhcmVuJ3QgYWZmZWN0ZWQgYnkgZWFjaCBvdGhlci5cclxuICAgIFN0b3JhZ2VVdGlsLlNldEludFZhbHVlKG5vbmUsIFwibXlWYWx1ZVwiLCAxKVxyXG4gICAgU3RvcmFnZVV0aWwuU2V0RmxvYXRWYWx1ZShub25lLCBcIm15VmFsdWVcIiwgNS4wKVxyXG4gICAgaW50IHZhbHVlID0gU3RvcmFnZVV0aWwuR2V0SW50VmFsdWUobm9uZSwgXCJteVZhbHVlXCIpXHJcbiAgICB2YWx1ZSA9PSAxIDsgdHJ1ZVxyXG4gICAgdmFsdWUgPT0gNSA7IGZhbHNlXHJcblxyXG4gICAgV2hlbiBjaG9vc2luZyBuYW1lcyBmb3IgdmFyaWFibGVzIHRyeSB0byByZW1lbWJlciB0aGF0IGFsbCBtb2RzIGFjY2VzcyB0aGUgc2FtZSBzdG9yYWdlLCBzbyBpZiB5b3VcclxuICAgIGNyZWF0ZSBhIHZhcmlhYmxlIHdpdGggbmFtZSBcIk5hbWVcIiB0aGVuIG1hbnkgb3RoZXIgbW9kcyBjb3VsZCB1c2UgdGhlIHNhbWUgdmFyaWFibGUgYnV0IGluIGRpZmZlcmVudFxyXG4gICAgd2F5cyB0aGF0IGxlYWQgdG8gdW53YW50ZWQgYmVoYXZpb3IuIEl0IGlzIHJlY29tbWVuZGVkIHRvIHByZWZpeCB0aGUgdmFyaWFibGUgd2l0aCB5b3VyIG1vZCBuYW1lLFxyXG4gICAgdGhhdCB3YXkgeW91IGNhbiBiZSBzdXJlIG5vYm9keSBlbHNlIHdpbGwgdHJ5IHRvIHVzZSB0aGUgc2FtZSB2YXJpYWJsZSBpbiB0aGVpciBtb2QuIEZvciBleGFtcGxlXHJcbiAgICByZWFsaXN0aWMgbmVlZHMgYW5kIGRpc2Vhc2VzIG1pZ2h0IHNldCBodW5nZXIgYXMgXCJybmRfaHVuZ2VydmFsdWVcIi5cclxuXHJcbiAgICBZb3UgY2FuIGFsc28gdXNlIHRoaXMgc3RvcmFnZSB0byBtYWtlIHlvdXIgbW9kIGZ1bmN0aW9ucyBhdmFpbGFibGUgdG8gb3RoZXIgbW9kcywgZm9yIGV4YW1wbGUgaWZcclxuICAgIHlvdXIgbW9kIGhhcyBhIGZ1bmN0aW9uIHRoYXQgc2V0cyBhbiBBY3RvciB0byBiZSBpbnZpc2libGUgeW91IGNvdWxkIGFkZCBhIHNjcmlwdCB0aGF0IGNoZWNrczpcclxuICAgIGludCBpID0gU3RvcmFnZVV0aWwuRm9ybUxpc3RDb3VudChub25lLCBcIk1ha2VJbnZpc2libGVcIilcclxuICAgIHdoaWxlKGkgPiAwKVxyXG4gICAgICAgIGktLVxyXG4gICAgICAgIEFjdG9yIG1ha2UgPSBTdG9yYWdlVXRpbC5Gb3JtTGlzdEdldChub25lLCBcIk1ha2VJbnZpc2libGVcIiwgaSkgYXMgQWN0b3JcclxuICAgICAgICBpZihtYWtlKVxyXG4gICAgICAgICAgICBNeVNjcmlwdEZ1bmN0aW9uKG1ha2UpXHJcbiAgICAgICAgZW5kaWZcclxuICAgICAgICBTdG9yYWdlVXRpbC5Gb3JtTGlzdFJlbW92ZUF0KG5vbmUsIFwiTWFrZUludmlzaWJsZVwiLCBpKVxyXG4gICAgZW5kd2hpbGVcclxuICAgIEFuZCB0aGUgb3RoZXIgbW9kIGNvdWxkIHdyaXRlOlxyXG4gICAgU3RvcmFnZVV0aWwuRm9ybUxpc3RBZGQobm9uZSwgXCJNYWtlSW52aXNpYmxlXCIsIG15QWN0b3IpXHJcbiAgICB0byBtYWtlIHNvbWVvbmUgaW52aXNpYmxlIHVzaW5nIHlvdXIgbW9kLiBCdXQgaWYgeW91ciBtb2QgaXNuJ3QgcHJlc2VudCB0aGVuIG5vdGhpbmcgaGFwcGVucy5cclxuICAgIFRoaXMgaXMganVzdCBhbiBleGFtcGxlLCBJJ20gc3VyZSB5b3UgY2FuIGZpbmQgYmV0dGVyIHdheXMgdG8gaW1wbGVtZW50IGNvbXBhdGliaWxpdHksIGl0IHdvdWxkXHJcbiAgICBoZWxwIHRvIGluY2x1ZGUgYSBkb2N1bWVudGF0aW9uIGZvciBvdGhlciBtb2RkZXJzIGlmIHlvdSBkby5cclxuLyoqXHJcblxyXG5cclxuXHJcblxyXG5cclxuLyoqXHJcbiAgICBTdG9yYWdlIGZ1bmN0aW9ucyAtIHZhbHVlcyBpbiBzYXZlIGdhbWUgZmlsZS4gKi9cclxuLyoqIFNldCBpbnQvZmxvYXQvc3RyaW5nL0Zvcm0gdmFsdWUgZ2xvYmFsbHkgb3Igb24gYW55IGZvcm0gYnkgbmFtZSBhbmQgcmV0dXJuXHJcbiAgIHRoZSB2YWx1ZSBwYXNzZWQsIG9yIGFzIHVuaW5pdGlhbGl6ZWQgdmFyaWFibGUgaWYgaW52YWxpZCBrZXlzIGdpdmVuLlxyXG5cclxuICAgT2JqS2V5OiBmb3JtIHRvIHNhdmUgb24uIFNldCBub25lIHRvIHNhdmUgZ2xvYmFsbHkuXHJcbiAgIEtleU5hbWU6IG5hbWUgb2YgdmFsdWUuXHJcbiAgIHZhbHVlOiB2YWx1ZSB0byBzZXQgdG8gdGhlIGdpdmVuIGtleXMuIElmIHplcm8sIGVtcHR5LCBvciBub25lIGFyZSBnaXZlbiwgdGhlIGtleSB3aWxsIGJlIHVuc2V0LiAqL1xyXG5leHBvcnQgdmFyIFNldEludFZhbHVlID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgdmFsdWUpIHsgcmV0dXJuIHNuLlNldEludFZhbHVlKE9iaktleSwgS2V5TmFtZSwgdmFsdWUpOyB9O1xyXG5leHBvcnQgdmFyIFNldEZsb2F0VmFsdWUgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCB2YWx1ZSkgeyByZXR1cm4gc24uU2V0RmxvYXRWYWx1ZShPYmpLZXksIEtleU5hbWUsIHZhbHVlKTsgfTtcclxuZXhwb3J0IHZhciBTZXRTdHJpbmdWYWx1ZSA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUsIHZhbHVlKSB7IHJldHVybiBzbi5TZXRTdHJpbmdWYWx1ZShPYmpLZXksIEtleU5hbWUsIHZhbHVlKTsgfTtcclxuZXhwb3J0IHZhciBTZXRGb3JtVmFsdWUgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCB2YWx1ZSkgeyByZXR1cm4gc24uU2V0Rm9ybVZhbHVlKE9iaktleSwgS2V5TmFtZSwgdmFsdWUpOyB9O1xyXG4vKiogUmVtb3ZlIGEgcHJldmlvdXNseSBzZXQgaW50L2Zsb2F0L3N0cmluZy9Gb3JtIHZhbHVlIG9uIGFuIGZvcm0gb3IgZ2xvYmFsbHkgYW5kXHJcbmlmIHN1Y2Nlc3NmdWwuIFRoaXMgd2lsbCByZXR1cm4gZmFsc2UgaWYgdmFsdWUgZGlkbid0IGV4aXN0LlxyXG5cclxuICAgT2JqS2V5OiBmb3JtIHRvIHJlbW92ZSBmcm9tLiBTZXQgbm9uZSB0byByZW1vdmUgZ2xvYmFsIHZhbHVlLlxyXG4gICBLZXlOYW1lOiBuYW1lIG9mIHZhbHVlLiAqL1xyXG5leHBvcnQgdmFyIFVuc2V0SW50VmFsdWUgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lKSB7IHJldHVybiBzbi5VbnNldEludFZhbHVlKE9iaktleSwgS2V5TmFtZSk7IH07XHJcbmV4cG9ydCB2YXIgVW5zZXRGbG9hdFZhbHVlID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSkgeyByZXR1cm4gc24uVW5zZXRGbG9hdFZhbHVlKE9iaktleSwgS2V5TmFtZSk7IH07XHJcbmV4cG9ydCB2YXIgVW5zZXRTdHJpbmdWYWx1ZSA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUpIHsgcmV0dXJuIHNuLlVuc2V0U3RyaW5nVmFsdWUoT2JqS2V5LCBLZXlOYW1lKTsgfTtcclxuZXhwb3J0IHZhciBVbnNldEZvcm1WYWx1ZSA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUpIHsgcmV0dXJuIHNuLlVuc2V0Rm9ybVZhbHVlKE9iaktleSwgS2V5TmFtZSk7IH07XHJcbi8qKiBDaGVjayBpZiBpbnQvZmxvYXQvc3RyaW5nL0Zvcm0gdmFsdWUgaGFzIGJlZW4gc2V0IG9uIGZvcm0gb3IgZ2xvYmFsbHkuXHJcblxyXG4gICBPYmpLZXk6IGZvcm0gdG8gY2hlY2sgb24uIFNldCBub25lIHRvIGNoZWNrIGdsb2JhbCB2YWx1ZS5cclxuICAgS2V5TmFtZTogbmFtZSBvZiB2YWx1ZS4gKi9cclxuZXhwb3J0IHZhciBIYXNJbnRWYWx1ZSA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUpIHsgcmV0dXJuIHNuLkhhc0ludFZhbHVlKE9iaktleSwgS2V5TmFtZSk7IH07XHJcbmV4cG9ydCB2YXIgSGFzRmxvYXRWYWx1ZSA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUpIHsgcmV0dXJuIHNuLkhhc0Zsb2F0VmFsdWUoT2JqS2V5LCBLZXlOYW1lKTsgfTtcclxuZXhwb3J0IHZhciBIYXNTdHJpbmdWYWx1ZSA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUpIHsgcmV0dXJuIHNuLkhhc1N0cmluZ1ZhbHVlKE9iaktleSwgS2V5TmFtZSk7IH07XHJcbmV4cG9ydCB2YXIgSGFzRm9ybVZhbHVlID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSkgeyByZXR1cm4gc24uSGFzRm9ybVZhbHVlKE9iaktleSwgS2V5TmFtZSk7IH07XHJcbi8qKiBHZXQgcHJldmlvdXNseSBzYXZlZCBpbnQvZmxvYXQvc3RyaW5nL0Zvcm0gdmFsdWUgb24gZm9ybSBvciBnbG9iYWxseS5cclxuXHJcbiAgIE9iaktleTogZm9ybSB0byBnZXQgZnJvbS4gU2V0IG5vbmUgdG8gZ2V0IGdsb2JhbCB2YWx1ZS5cclxuICAgS2V5TmFtZTogbmFtZSBvZiB2YWx1ZS5cclxuICAgW29wdGlvbmFsXSBtaXNzaW5nOiBpZiB2YWx1ZSBoYXMgbm90IGJlZW4gc2V0LCByZXR1cm4gdGhpcyB2YWx1ZSBpbnN0ZWFkLiAqL1xyXG5leHBvcnQgdmFyIEdldEludFZhbHVlID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgbWlzc2luZykge1xyXG4gICAgaWYgKG1pc3NpbmcgPT09IHZvaWQgMCkgeyBtaXNzaW5nID0gMDsgfVxyXG4gICAgcmV0dXJuIHNuLkdldEludFZhbHVlKE9iaktleSwgS2V5TmFtZSwgbWlzc2luZyk7XHJcbn07XHJcbmV4cG9ydCB2YXIgR2V0RmxvYXRWYWx1ZSA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUsIG1pc3NpbmcpIHtcclxuICAgIGlmIChtaXNzaW5nID09PSB2b2lkIDApIHsgbWlzc2luZyA9IDAuMDsgfVxyXG4gICAgcmV0dXJuIHNuLkdldEZsb2F0VmFsdWUoT2JqS2V5LCBLZXlOYW1lLCBtaXNzaW5nKTtcclxufTtcclxuZXhwb3J0IHZhciBHZXRTdHJpbmdWYWx1ZSA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUsIG1pc3NpbmcpIHtcclxuICAgIGlmIChtaXNzaW5nID09PSB2b2lkIDApIHsgbWlzc2luZyA9IFwiXCI7IH1cclxuICAgIHJldHVybiBzbi5HZXRTdHJpbmdWYWx1ZShPYmpLZXksIEtleU5hbWUsIG1pc3NpbmcpO1xyXG59O1xyXG5leHBvcnQgdmFyIEdldEZvcm1WYWx1ZSA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUsIG1pc3NpbmcpIHtcclxuICAgIGlmIChtaXNzaW5nID09PSB2b2lkIDApIHsgbWlzc2luZyA9IG51bGw7IH1cclxuICAgIHJldHVybiBzbi5HZXRGb3JtVmFsdWUoT2JqS2V5LCBLZXlOYW1lLCBtaXNzaW5nKTtcclxufTtcclxuLyoqIFBsdWNrcyBhIHByZXZpb3VzbHkgc2F2ZWQgaW50L2Zsb2F0L3N0cmluZy9Gb3JtIHZhbHVlIG9uIGZvcm0gb3IgZ2xvYmFsbHkuXHJcbiAgIFJldHVybmluZyB0aGUgdmFsdWUgc3RvcmVkLCB0aGVuIHJlbW92aW5nIGl0IGZyb20gc3RvcmFnZS5cclxuXHJcbiAgIE9iaktleTogZm9ybSB0byBwbHVjayBmcm9tLiBTZXQgbm9uZSB0byBnZXQgZ2xvYmFsIHZhbHVlLlxyXG4gICBLZXlOYW1lOiBuYW1lIG9mIHZhbHVlLlxyXG4gICBbb3B0aW9uYWxdIG1pc3Npbmc6IGlmIHZhbHVlIGhhcyBub3QgYmVlbiBzZXQsIHJldHVybiB0aGlzIHZhbHVlIGluc3RlYWQuICovXHJcbmV4cG9ydCB2YXIgUGx1Y2tJbnRWYWx1ZSA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUsIG1pc3NpbmcpIHtcclxuICAgIGlmIChtaXNzaW5nID09PSB2b2lkIDApIHsgbWlzc2luZyA9IDA7IH1cclxuICAgIHJldHVybiBzbi5QbHVja0ludFZhbHVlKE9iaktleSwgS2V5TmFtZSwgbWlzc2luZyk7XHJcbn07XHJcbmV4cG9ydCB2YXIgUGx1Y2tGbG9hdFZhbHVlID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgbWlzc2luZykge1xyXG4gICAgaWYgKG1pc3NpbmcgPT09IHZvaWQgMCkgeyBtaXNzaW5nID0gMC4wOyB9XHJcbiAgICByZXR1cm4gc24uUGx1Y2tGbG9hdFZhbHVlKE9iaktleSwgS2V5TmFtZSwgbWlzc2luZyk7XHJcbn07XHJcbmV4cG9ydCB2YXIgUGx1Y2tTdHJpbmdWYWx1ZSA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUsIG1pc3NpbmcpIHtcclxuICAgIGlmIChtaXNzaW5nID09PSB2b2lkIDApIHsgbWlzc2luZyA9IFwiXCI7IH1cclxuICAgIHJldHVybiBzbi5QbHVja1N0cmluZ1ZhbHVlKE9iaktleSwgS2V5TmFtZSwgbWlzc2luZyk7XHJcbn07XHJcbmV4cG9ydCB2YXIgUGx1Y2tGb3JtVmFsdWUgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCBtaXNzaW5nKSB7XHJcbiAgICBpZiAobWlzc2luZyA9PT0gdm9pZCAwKSB7IG1pc3NpbmcgPSBudWxsOyB9XHJcbiAgICByZXR1cm4gc24uUGx1Y2tGb3JtVmFsdWUoT2JqS2V5LCBLZXlOYW1lLCBtaXNzaW5nKTtcclxufTtcclxuLyoqIEdldCBwcmV2aW91c2x5IHNhdmVkIGludC9mbG9hdC9zdHJpbmcvRm9ybSB2YWx1ZSBvbiBmb3JtIG9yIGdsb2JhbGx5LlxyXG5cclxuICAgT2JqS2V5OiBmb3JtIHRvIGdldCBmcm9tLiBTZXQgbm9uZSB0byBnZXQgZ2xvYmFsIHZhbHVlLlxyXG4gICBLZXlOYW1lOiBuYW1lIG9mIHZhbHVlLlxyXG4gICBhbW91bnQ6ICsvLSB0aGUgYW1vdW50IHRvIGFkanVzdCB0aGUgY3VycmVudCB2YWx1ZSBieVxyXG5cclxuICAgZ2l2ZW4ga2V5cyB3aWxsIGJlIGluaXRpYWxpemVkIHRvIGdpdmVuIGFtb3VudCBpZiBpdCBkb2VzIG5vdCBleGlzdCAqL1xyXG5leHBvcnQgdmFyIEFkanVzdEludFZhbHVlID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgYW1vdW50KSB7IHJldHVybiBzbi5BZGp1c3RJbnRWYWx1ZShPYmpLZXksIEtleU5hbWUsIGFtb3VudCk7IH07XHJcbmV4cG9ydCB2YXIgQWRqdXN0RmxvYXRWYWx1ZSA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUsIGFtb3VudCkgeyByZXR1cm4gc24uQWRqdXN0RmxvYXRWYWx1ZShPYmpLZXksIEtleU5hbWUsIGFtb3VudCk7IH07XHJcbi8qKiBBZGQgYW4gaW50L2Zsb2F0L3N0cmluZy9Gb3JtIHRvIGEgbGlzdCBvbiBmb3JtIG9yIGdsb2JhbGx5IGFuZCByZXR1cm5cclxuICAgdGhlIHZhbHVlJ3MgbmV3IGluZGV4LiBJbmRleCBjYW4gYmUgLTEgaWYgd2Ugd2VyZSB1bmFibGUgdG8gYWRkXHJcbiAgIHRoZSB2YWx1ZS5cclxuXHJcbiAgIE9iaktleTogZm9ybSB0byBhZGQgdG8uIFNldCBub25lIHRvIGFkZCBnbG9iYWwgdmFsdWUuXHJcbiAgIEtleU5hbWU6IG5hbWUgb2YgdmFsdWUuXHJcbiAgIHZhbHVlOiB2YWx1ZSB0byBhZGQuXHJcbiAgIFtvcHRpb25hbF0gYWxsb3dEdXBsaWNhdGU6IGFsbG93IGFkZGluZyB2YWx1ZSB0byBsaXN0IGlmIHRoaXMgdmFsdWUgYWxyZWFkeSBleGlzdHMgaW4gdGhlIGxpc3QuICovXHJcbmV4cG9ydCB2YXIgSW50TGlzdEFkZCA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUsIHZhbHVlLCBhbGxvd0R1cGxpY2F0ZSkge1xyXG4gICAgaWYgKGFsbG93RHVwbGljYXRlID09PSB2b2lkIDApIHsgYWxsb3dEdXBsaWNhdGUgPSB0cnVlOyB9XHJcbiAgICByZXR1cm4gc24uSW50TGlzdEFkZChPYmpLZXksIEtleU5hbWUsIHZhbHVlLCBhbGxvd0R1cGxpY2F0ZSk7XHJcbn07XHJcbmV4cG9ydCB2YXIgRmxvYXRMaXN0QWRkID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgdmFsdWUsIGFsbG93RHVwbGljYXRlKSB7XHJcbiAgICBpZiAoYWxsb3dEdXBsaWNhdGUgPT09IHZvaWQgMCkgeyBhbGxvd0R1cGxpY2F0ZSA9IHRydWU7IH1cclxuICAgIHJldHVybiBzbi5GbG9hdExpc3RBZGQoT2JqS2V5LCBLZXlOYW1lLCB2YWx1ZSwgYWxsb3dEdXBsaWNhdGUpO1xyXG59O1xyXG5leHBvcnQgdmFyIFN0cmluZ0xpc3RBZGQgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCB2YWx1ZSwgYWxsb3dEdXBsaWNhdGUpIHtcclxuICAgIGlmIChhbGxvd0R1cGxpY2F0ZSA9PT0gdm9pZCAwKSB7IGFsbG93RHVwbGljYXRlID0gdHJ1ZTsgfVxyXG4gICAgcmV0dXJuIHNuLlN0cmluZ0xpc3RBZGQoT2JqS2V5LCBLZXlOYW1lLCB2YWx1ZSwgYWxsb3dEdXBsaWNhdGUpO1xyXG59O1xyXG5leHBvcnQgdmFyIEZvcm1MaXN0QWRkID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgdmFsdWUsIGFsbG93RHVwbGljYXRlKSB7XHJcbiAgICBpZiAoYWxsb3dEdXBsaWNhdGUgPT09IHZvaWQgMCkgeyBhbGxvd0R1cGxpY2F0ZSA9IHRydWU7IH1cclxuICAgIHJldHVybiBzbi5Gb3JtTGlzdEFkZChPYmpLZXksIEtleU5hbWUsIHZhbHVlLCBhbGxvd0R1cGxpY2F0ZSk7XHJcbn07XHJcbi8qKiBHZXQgYSB2YWx1ZSBmcm9tIGxpc3QgYnkgaW5kZXggb24gZm9ybSBvciBnbG9iYWxseS5cclxuICAgVGhpcyB3aWxsIHJldHVybiAwIGFzIHZhbHVlIGlmIHRoZXJlIHdhcyBhIHByb2JsZW0uXHJcblxyXG4gICBPYmpLZXk6IGZvcm0gdG8gZ2V0IHZhbHVlIG9uLiBTZXQgbm9uZSB0byBnZXQgZ2xvYmFsIGxpc3QgdmFsdWUuXHJcbiAgIEtleU5hbWU6IG5hbWUgb2YgbGlzdC5cclxuICAgaW5kZXg6IGluZGV4IG9mIHZhbHVlIGluIHRoZSBsaXN0LiAqL1xyXG5leHBvcnQgdmFyIEludExpc3RHZXQgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCBpbmRleCkgeyByZXR1cm4gc24uSW50TGlzdEdldChPYmpLZXksIEtleU5hbWUsIGluZGV4KTsgfTtcclxuZXhwb3J0IHZhciBGbG9hdExpc3RHZXQgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCBpbmRleCkgeyByZXR1cm4gc24uRmxvYXRMaXN0R2V0KE9iaktleSwgS2V5TmFtZSwgaW5kZXgpOyB9O1xyXG5leHBvcnQgdmFyIFN0cmluZ0xpc3RHZXQgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCBpbmRleCkgeyByZXR1cm4gc24uU3RyaW5nTGlzdEdldChPYmpLZXksIEtleU5hbWUsIGluZGV4KTsgfTtcclxuZXhwb3J0IHZhciBGb3JtTGlzdEdldCA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUsIGluZGV4KSB7IHJldHVybiBzbi5Gb3JtTGlzdEdldChPYmpLZXksIEtleU5hbWUsIGluZGV4KTsgfTtcclxuLyoqIFNldCBhIHZhbHVlIGluIGxpc3QgYnkgaW5kZXggb24gZm9ybSBvciBnbG9iYWxseS5cclxuICAgVGhpcyB3aWxsIHJldHVybiB0aGUgcHJldmlvdXMgdmFsdWUgb3IgMCBpZiB0aGVyZSB3YXMgYSBwcm9ibGVtLlxyXG5cclxuICAgT2JqS2V5OiBmb3JtIHRvIHNldCB2YWx1ZSBvbi4gU2V0IG5vbmUgdG8gc2V0IGdsb2JhbCBsaXN0IHZhbHVlLlxyXG4gICBLZXlOYW1lOiBuYW1lIG9mIGxpc3QuXHJcbiAgIGluZGV4OiBpbmRleCBvZiB2YWx1ZSBpbiB0aGUgbGlzdC5cclxuICAgdmFsdWU6IHZhbHVlIHRvIHNldCB0by4gKi9cclxuZXhwb3J0IHZhciBJbnRMaXN0U2V0ID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgaW5kZXgsIHZhbHVlKSB7IHJldHVybiBzbi5JbnRMaXN0U2V0KE9iaktleSwgS2V5TmFtZSwgaW5kZXgsIHZhbHVlKTsgfTtcclxuZXhwb3J0IHZhciBGbG9hdExpc3RTZXQgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCBpbmRleCwgdmFsdWUpIHsgcmV0dXJuIHNuLkZsb2F0TGlzdFNldChPYmpLZXksIEtleU5hbWUsIGluZGV4LCB2YWx1ZSk7IH07XHJcbmV4cG9ydCB2YXIgU3RyaW5nTGlzdFNldCA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUsIGluZGV4LCB2YWx1ZSkgeyByZXR1cm4gc24uU3RyaW5nTGlzdFNldChPYmpLZXksIEtleU5hbWUsIGluZGV4LCB2YWx1ZSk7IH07XHJcbmV4cG9ydCB2YXIgRm9ybUxpc3RTZXQgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCBpbmRleCwgdmFsdWUpIHsgcmV0dXJuIHNuLkZvcm1MaXN0U2V0KE9iaktleSwgS2V5TmFtZSwgaW5kZXgsIHZhbHVlKTsgfTtcclxuLyoqIFBsdWNrcyBhIHZhbHVlIGZyb20gbGlzdCBieSBpbmRleCBvbiBmb3JtIG9yIGdsb2JhbGx5LlxyXG4gICBUaGUgaW5kZXggaXMgcmVtb3ZlZCBmcm9tIHRoZSBsaXN0J3Mgc3RvcmFnZSBhZnRlciByZXR1cm5pbmcgaXQncyB2YWx1ZS5cclxuXHJcbiAgIE9iaktleTogZm9ybSB0byBwbHVjayB2YWx1ZSBmcm9tLiBTZXQgbm9uZSB0byBnZXQgZ2xvYmFsIGxpc3QgdmFsdWUuXHJcbiAgIEtleU5hbWU6IG5hbWUgb2YgbGlzdC5cclxuICAgaW5kZXg6IGluZGV4IG9mIHZhbHVlIGluIHRoZSBsaXN0LlxyXG4gICBbb3B0aW9uYWxdIG1pc3Npbmc6IGlmIGluZGV4IGhhcyBub3QgYmVlbiBzZXQsIHJldHVybiB0aGlzIHZhbHVlIGluc3RlYWQuICovXHJcbmV4cG9ydCB2YXIgSW50TGlzdFBsdWNrID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgaW5kZXgsIG1pc3NpbmcpIHsgcmV0dXJuIHNuLkludExpc3RQbHVjayhPYmpLZXksIEtleU5hbWUsIGluZGV4LCBtaXNzaW5nKTsgfTtcclxuZXhwb3J0IHZhciBGbG9hdExpc3RQbHVjayA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUsIGluZGV4LCBtaXNzaW5nKSB7IHJldHVybiBzbi5GbG9hdExpc3RQbHVjayhPYmpLZXksIEtleU5hbWUsIGluZGV4LCBtaXNzaW5nKTsgfTtcclxuZXhwb3J0IHZhciBTdHJpbmdMaXN0UGx1Y2sgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCBpbmRleCwgbWlzc2luZykgeyByZXR1cm4gc24uU3RyaW5nTGlzdFBsdWNrKE9iaktleSwgS2V5TmFtZSwgaW5kZXgsIG1pc3NpbmcpOyB9O1xyXG5leHBvcnQgdmFyIEZvcm1MaXN0UGx1Y2sgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCBpbmRleCwgbWlzc2luZykgeyByZXR1cm4gc24uRm9ybUxpc3RQbHVjayhPYmpLZXksIEtleU5hbWUsIGluZGV4LCBtaXNzaW5nKTsgfTtcclxuLyoqIEdldHMgdGhlIHZhbHVlIG9mIHRoZSB2ZXJ5IGZpcnN0IGVsZW1lbnQgaW4gYSBsaXN0LCBhbmQgc3Vic2VxdWVudGx5IHJlbW92ZXMgdGhlIGluZGV4IGFmdGVyd2FyZC5cclxuXHJcbiAgIE9iaktleTogZm9ybSB0byBzaGlmdCB2YWx1ZSBmcm9tLiBTZXQgbm9uZSB0byBnZXQgZ2xvYmFsIGxpc3QgdmFsdWUuXHJcbiAgIEtleU5hbWU6IG5hbWUgb2YgbGlzdCB0byBzaGlmdCBpdCdzIGZpcnN0IHZhbHVlIGZyb20uICovXHJcbmV4cG9ydCB2YXIgSW50TGlzdFNoaWZ0ID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSkgeyByZXR1cm4gc24uSW50TGlzdFNoaWZ0KE9iaktleSwgS2V5TmFtZSk7IH07XHJcbmV4cG9ydCB2YXIgRmxvYXRMaXN0U2hpZnQgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lKSB7IHJldHVybiBzbi5GbG9hdExpc3RTaGlmdChPYmpLZXksIEtleU5hbWUpOyB9O1xyXG5leHBvcnQgdmFyIFN0cmluZ0xpc3RTaGlmdCA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUpIHsgcmV0dXJuIHNuLlN0cmluZ0xpc3RTaGlmdChPYmpLZXksIEtleU5hbWUpOyB9O1xyXG5leHBvcnQgdmFyIEZvcm1MaXN0U2hpZnQgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lKSB7IHJldHVybiBzbi5Gb3JtTGlzdFNoaWZ0KE9iaktleSwgS2V5TmFtZSk7IH07XHJcbi8qKiBHZXRzIHRoZSB2YWx1ZSBvZiB0aGUgdmVyeSBsYXN0IGVsZW1lbnQgaW4gYSBsaXN0LCBhbmQgc3Vic2VxdWVudGx5IHJlbW92ZXMgdGhlIGluZGV4IGFmdGVyd2FyZC5cclxuXHJcbiAgIE9iaktleTogZm9ybSB0byBwb3AgdmFsdWUgZnJvbS4gU2V0IG5vbmUgdG8gZ2V0IGdsb2JhbCBsaXN0IHZhbHVlLlxyXG4gICBLZXlOYW1lOiBuYW1lIG9mIGxpc3QgdG8gcG9wIG9mZiBpdCdzIGxhc3QgdmFsdWUuICovXHJcbmV4cG9ydCB2YXIgSW50TGlzdFBvcCA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUpIHsgcmV0dXJuIHNuLkludExpc3RQb3AoT2JqS2V5LCBLZXlOYW1lKTsgfTtcclxuZXhwb3J0IHZhciBGbG9hdExpc3RQb3AgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lKSB7IHJldHVybiBzbi5GbG9hdExpc3RQb3AoT2JqS2V5LCBLZXlOYW1lKTsgfTtcclxuZXhwb3J0IHZhciBTdHJpbmdMaXN0UG9wID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSkgeyByZXR1cm4gc24uU3RyaW5nTGlzdFBvcChPYmpLZXksIEtleU5hbWUpOyB9O1xyXG5leHBvcnQgdmFyIEZvcm1MaXN0UG9wID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSkgeyByZXR1cm4gc24uRm9ybUxpc3RQb3AoT2JqS2V5LCBLZXlOYW1lKTsgfTtcclxuLyoqIEFkanVzdCB0aGUgZXhpc3RpbmcgdmFsdWUgb2YgYSBsaXN0IGJ5IHRoZSBnaXZlbiBhbW91bnQuXHJcblxyXG4gICBPYmpLZXk6IGZvcm0gdG8gc2V0IHZhbHVlIG9uLiBTZXQgbm9uZSB0byBzZXQgZ2xvYmFsIGxpc3QgdmFsdWUuXHJcbiAgIEtleU5hbWU6IG5hbWUgb2YgbGlzdC5cclxuICAgaW5kZXg6IGluZGV4IG9mIHZhbHVlIGluIHRoZSBsaXN0LlxyXG4gICBhbW91bnQ6ICsvLSB0aGUgYW1vdW50IHRvIGFkanVzdCB0aGUgbGlzdHMgY3VycmVudCBpbmRleCB2YWx1ZSBieS5cclxuXHJcbnMgMCBpZiBpbmRleCBkb2VzIG5vdCBleGlzdHMgKi9cclxuZXhwb3J0IHZhciBJbnRMaXN0QWRqdXN0ID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgaW5kZXgsIGFtb3VudCkgeyByZXR1cm4gc24uSW50TGlzdEFkanVzdChPYmpLZXksIEtleU5hbWUsIGluZGV4LCBhbW91bnQpOyB9O1xyXG5leHBvcnQgdmFyIEZsb2F0TGlzdEFkanVzdCA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUsIGluZGV4LCBhbW91bnQpIHsgcmV0dXJuIHNuLkZsb2F0TGlzdEFkanVzdChPYmpLZXksIEtleU5hbWUsIGluZGV4LCBhbW91bnQpOyB9O1xyXG4vKiogSW5zZXJ0IGFuIGludC9mbG9hdC9zdHJpbmcvRm9ybSB0byBhIGxpc3Qgb24gZm9ybSBvciBnbG9iYWxseSBhbmQgcmV0dXJuXHJcbiAgIGlmIHN1Y2Nlc3NmdWwuXHJcblxyXG4gICBPYmpLZXk6IGZvcm0gdG8gYWRkIHRvLiBTZXQgbm9uZSB0byBhZGQgZ2xvYmFsIHZhbHVlLlxyXG4gICBLZXlOYW1lOiBuYW1lIG9mIHZhbHVlLlxyXG4gICBpbmRleDogcG9zaXRpb24gaW4gbGlzdCB0byBwdXQgdGhlIHZhbHVlLiAwIGlzIGZpcnN0IGVudHJ5IGluIGxpc3QuXHJcbiAgIHZhbHVlOiB2YWx1ZSB0byBhZGQuICovXHJcbmV4cG9ydCB2YXIgSW50TGlzdEluc2VydCA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUsIGluZGV4LCB2YWx1ZSkgeyByZXR1cm4gc24uSW50TGlzdEluc2VydChPYmpLZXksIEtleU5hbWUsIGluZGV4LCB2YWx1ZSk7IH07XHJcbmV4cG9ydCB2YXIgRmxvYXRMaXN0SW5zZXJ0ID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgaW5kZXgsIHZhbHVlKSB7IHJldHVybiBzbi5GbG9hdExpc3RJbnNlcnQoT2JqS2V5LCBLZXlOYW1lLCBpbmRleCwgdmFsdWUpOyB9O1xyXG5leHBvcnQgdmFyIFN0cmluZ0xpc3RJbnNlcnQgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCBpbmRleCwgdmFsdWUpIHsgcmV0dXJuIHNuLlN0cmluZ0xpc3RJbnNlcnQoT2JqS2V5LCBLZXlOYW1lLCBpbmRleCwgdmFsdWUpOyB9O1xyXG5leHBvcnQgdmFyIEZvcm1MaXN0SW5zZXJ0ID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgaW5kZXgsIHZhbHVlKSB7IHJldHVybiBzbi5Gb3JtTGlzdEluc2VydChPYmpLZXksIEtleU5hbWUsIGluZGV4LCB2YWx1ZSk7IH07XHJcbi8qKiBSZW1vdmUgYSBwcmV2aW91c2x5IGFkZGVkIGludC9mbG9hdC9zdHJpbmcvRm9ybSB2YWx1ZSBmcm9tIGEgbGlzdCBvbiBmb3JtXHJcbiAgIG9yIGdsb2JhbGx5IGFuZCByZXR1cm4gaG93IG1hbnkgaW5zdGFuY2VzIG9mIHRoaXMgdmFsdWUgd2VyZSByZW1vdmVkLlxyXG5cclxuICAgT2JqS2V5OiBmb3JtIHRvIHJlbW92ZSBmcm9tLiBTZXQgbm9uZSB0byByZW1vdmUgZ2xvYmFsIHZhbHVlLlxyXG4gICBLZXlOYW1lOiBuYW1lIG9mIHZhbHVlLlxyXG4gICB2YWx1ZTogdmFsdWUgdG8gcmVtb3ZlLlxyXG4gICBbb3B0aW9uYWxdIGFsbG93SW5zdGFuY2VzOiByZW1vdmUgYWxsIGluc3RhbmNlcyBvZiB0aGlzIHZhbHVlIGluIGEgbGlzdC4gKi9cclxuZXhwb3J0IHZhciBJbnRMaXN0UmVtb3ZlID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgdmFsdWUsIGFsbEluc3RhbmNlcykge1xyXG4gICAgaWYgKGFsbEluc3RhbmNlcyA9PT0gdm9pZCAwKSB7IGFsbEluc3RhbmNlcyA9IGZhbHNlOyB9XHJcbiAgICByZXR1cm4gc24uSW50TGlzdFJlbW92ZShPYmpLZXksIEtleU5hbWUsIHZhbHVlLCBhbGxJbnN0YW5jZXMpO1xyXG59O1xyXG5leHBvcnQgdmFyIEZsb2F0TGlzdFJlbW92ZSA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUsIHZhbHVlLCBhbGxJbnN0YW5jZXMpIHtcclxuICAgIGlmIChhbGxJbnN0YW5jZXMgPT09IHZvaWQgMCkgeyBhbGxJbnN0YW5jZXMgPSBmYWxzZTsgfVxyXG4gICAgcmV0dXJuIHNuLkZsb2F0TGlzdFJlbW92ZShPYmpLZXksIEtleU5hbWUsIHZhbHVlLCBhbGxJbnN0YW5jZXMpO1xyXG59O1xyXG5leHBvcnQgdmFyIFN0cmluZ0xpc3RSZW1vdmUgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCB2YWx1ZSwgYWxsSW5zdGFuY2VzKSB7XHJcbiAgICBpZiAoYWxsSW5zdGFuY2VzID09PSB2b2lkIDApIHsgYWxsSW5zdGFuY2VzID0gZmFsc2U7IH1cclxuICAgIHJldHVybiBzbi5TdHJpbmdMaXN0UmVtb3ZlKE9iaktleSwgS2V5TmFtZSwgdmFsdWUsIGFsbEluc3RhbmNlcyk7XHJcbn07XHJcbmV4cG9ydCB2YXIgRm9ybUxpc3RSZW1vdmUgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCB2YWx1ZSwgYWxsSW5zdGFuY2VzKSB7XHJcbiAgICBpZiAoYWxsSW5zdGFuY2VzID09PSB2b2lkIDApIHsgYWxsSW5zdGFuY2VzID0gZmFsc2U7IH1cclxuICAgIHJldHVybiBzbi5Gb3JtTGlzdFJlbW92ZShPYmpLZXksIEtleU5hbWUsIHZhbHVlLCBhbGxJbnN0YW5jZXMpO1xyXG59O1xyXG4vKiogQ2xlYXIgYSBsaXN0IG9mIHZhbHVlcyAodW5zZXQpIG9uIGFuIGZvcm0gb3IgZ2xvYmFsbHkgYW5kXHJcbnRoZSBwcmV2aW91cyBzaXplIG9mIGxpc3QuXHJcblxyXG4gICBPYmpLZXk6IGZvcm0gdG8gY2xlYXIgb24uIFNldCBub25lIHRvIGNsZWFyIGdsb2JhbCBsaXN0LlxyXG4gICBLZXlOYW1lOiBuYW1lIG9mIGxpc3QuICovXHJcbmV4cG9ydCB2YXIgSW50TGlzdENsZWFyID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSkgeyByZXR1cm4gc24uSW50TGlzdENsZWFyKE9iaktleSwgS2V5TmFtZSk7IH07XHJcbmV4cG9ydCB2YXIgRmxvYXRMaXN0Q2xlYXIgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lKSB7IHJldHVybiBzbi5GbG9hdExpc3RDbGVhcihPYmpLZXksIEtleU5hbWUpOyB9O1xyXG5leHBvcnQgdmFyIFN0cmluZ0xpc3RDbGVhciA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUpIHsgcmV0dXJuIHNuLlN0cmluZ0xpc3RDbGVhcihPYmpLZXksIEtleU5hbWUpOyB9O1xyXG5leHBvcnQgdmFyIEZvcm1MaXN0Q2xlYXIgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lKSB7IHJldHVybiBzbi5Gb3JtTGlzdENsZWFyKE9iaktleSwgS2V5TmFtZSk7IH07XHJcbi8qKiBSZW1vdmUgYSB2YWx1ZSBmcm9tIGxpc3QgYnkgaW5kZXggb24gZm9ybSBvciBnbG9iYWxseSBhbmRcclxuaWYgd2Ugd2VyZSBzdWNjZXNzZnVsIGluIGRvaW5nIHNvLlxyXG5cclxuICAgT2JqS2V5OiBmb3JtIHRvIHJlbW92ZSBmcm9tLiBTZXQgbm9uZSB0byByZW1vdmUgZ2xvYmFsIHZhbHVlLlxyXG4gICBLZXlOYW1lOiBuYW1lIG9mIGxpc3QuXHJcbiAgIGluZGV4OiBpbmRleCBvZiB2YWx1ZSBpbiB0aGUgbGlzdC4gKi9cclxuZXhwb3J0IHZhciBJbnRMaXN0UmVtb3ZlQXQgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCBpbmRleCkgeyByZXR1cm4gc24uSW50TGlzdFJlbW92ZUF0KE9iaktleSwgS2V5TmFtZSwgaW5kZXgpOyB9O1xyXG5leHBvcnQgdmFyIEZsb2F0TGlzdFJlbW92ZUF0ID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgaW5kZXgpIHsgcmV0dXJuIHNuLkZsb2F0TGlzdFJlbW92ZUF0KE9iaktleSwgS2V5TmFtZSwgaW5kZXgpOyB9O1xyXG5leHBvcnQgdmFyIFN0cmluZ0xpc3RSZW1vdmVBdCA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUsIGluZGV4KSB7IHJldHVybiBzbi5TdHJpbmdMaXN0UmVtb3ZlQXQoT2JqS2V5LCBLZXlOYW1lLCBpbmRleCk7IH07XHJcbmV4cG9ydCB2YXIgRm9ybUxpc3RSZW1vdmVBdCA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUsIGluZGV4KSB7IHJldHVybiBzbi5Gb3JtTGlzdFJlbW92ZUF0KE9iaktleSwgS2V5TmFtZSwgaW5kZXgpOyB9O1xyXG4vKiogR2V0IHNpemUgb2YgYSBsaXN0IG9uIGZvcm0gb3IgZ2xvYmFsbHkuXHJcblxyXG4gICBPYmpLZXk6IGZvcm0gdG8gY2hlY2sgb24uIFNldCBub25lIHRvIGNoZWNrIGdsb2JhbCBsaXN0LlxyXG4gICBLZXlOYW1lOiBuYW1lIG9mIGxpc3QuICovXHJcbmV4cG9ydCB2YXIgSW50TGlzdENvdW50ID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSkgeyByZXR1cm4gc24uSW50TGlzdENvdW50KE9iaktleSwgS2V5TmFtZSk7IH07XHJcbmV4cG9ydCB2YXIgRmxvYXRMaXN0Q291bnQgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lKSB7IHJldHVybiBzbi5GbG9hdExpc3RDb3VudChPYmpLZXksIEtleU5hbWUpOyB9O1xyXG5leHBvcnQgdmFyIFN0cmluZ0xpc3RDb3VudCA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUpIHsgcmV0dXJuIHNuLlN0cmluZ0xpc3RDb3VudChPYmpLZXksIEtleU5hbWUpOyB9O1xyXG5leHBvcnQgdmFyIEZvcm1MaXN0Q291bnQgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lKSB7IHJldHVybiBzbi5Gb3JtTGlzdENvdW50KE9iaktleSwgS2V5TmFtZSk7IH07XHJcbi8qKiBHZXQgdGhlIG51bWJlciBvZiBvY2N1cnJlbmNlcyBvZiBhIHNwZWNpZmljIHZhbHVlIHdpdGhpbiBhIGxpc3QuXHJcblxyXG4gICBPYmpLZXk6IGZvcm0gdG8gY2hlY2sgb24uIFNldCBub25lIHRvIGNoZWNrIGdsb2JhbCBsaXN0LlxyXG4gICBLZXlOYW1lOiBuYW1lIG9mIGxpc3QuXHJcbiAgIHZhbHVlOiB2YWx1ZSB0byBsb29rIGZvci5cclxuICAgW29wdGlvbmFsXSBleGNsdWRlOiBpZiB0cnVlLCBmdW5jdGlvbiB3aWxsIHJldHVybiBudW1iZXIgb2YgZWxlbWVudHMgTk9UIGVxdWFsIHRvIHZhbHVlLiAqL1xyXG5leHBvcnQgdmFyIEludExpc3RDb3VudFZhbHVlID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgdmFsdWUsIGV4Y2x1ZGUpIHtcclxuICAgIGlmIChleGNsdWRlID09PSB2b2lkIDApIHsgZXhjbHVkZSA9IGZhbHNlOyB9XHJcbiAgICByZXR1cm4gc24uSW50TGlzdENvdW50VmFsdWUoT2JqS2V5LCBLZXlOYW1lLCB2YWx1ZSwgZXhjbHVkZSk7XHJcbn07XHJcbmV4cG9ydCB2YXIgRmxvYXRMaXN0Q291bnRWYWx1ZSA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUsIHZhbHVlLCBleGNsdWRlKSB7XHJcbiAgICBpZiAoZXhjbHVkZSA9PT0gdm9pZCAwKSB7IGV4Y2x1ZGUgPSBmYWxzZTsgfVxyXG4gICAgcmV0dXJuIHNuLkZsb2F0TGlzdENvdW50VmFsdWUoT2JqS2V5LCBLZXlOYW1lLCB2YWx1ZSwgZXhjbHVkZSk7XHJcbn07XHJcbmV4cG9ydCB2YXIgU3RyaW5nTGlzdENvdW50VmFsdWUgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCB2YWx1ZSwgZXhjbHVkZSkge1xyXG4gICAgaWYgKGV4Y2x1ZGUgPT09IHZvaWQgMCkgeyBleGNsdWRlID0gZmFsc2U7IH1cclxuICAgIHJldHVybiBzbi5TdHJpbmdMaXN0Q291bnRWYWx1ZShPYmpLZXksIEtleU5hbWUsIHZhbHVlLCBleGNsdWRlKTtcclxufTtcclxuZXhwb3J0IHZhciBGb3JtTGlzdENvdW50VmFsdWUgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCB2YWx1ZSwgZXhjbHVkZSkge1xyXG4gICAgaWYgKGV4Y2x1ZGUgPT09IHZvaWQgMCkgeyBleGNsdWRlID0gZmFsc2U7IH1cclxuICAgIHJldHVybiBzbi5Gb3JtTGlzdENvdW50VmFsdWUoT2JqS2V5LCBLZXlOYW1lLCB2YWx1ZSwgZXhjbHVkZSk7XHJcbn07XHJcbi8qKiBGaW5kIGEgdmFsdWUgaW4gbGlzdCBvbiBmb3JtIG9yIGdsb2JhbGx5IGFuZCByZXR1cm4gaXRzXHJcbiAgIGluZGV4IG9yIC0xIGlmIHZhbHVlIHdhcyBub3QgZm91bmQuXHJcblxyXG4gICBPYmpLZXk6IGZvcm0gdG8gZmluZCB2YWx1ZSBvbi4gU2V0IG5vbmUgdG8gZmluZCBnbG9iYWwgbGlzdCB2YWx1ZS5cclxuICAgS2V5TmFtZTogbmFtZSBvZiBsaXN0LlxyXG4gICB2YWx1ZTogdmFsdWUgdG8gc2VhcmNoLiAqL1xyXG5leHBvcnQgdmFyIEludExpc3RGaW5kID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgdmFsdWUpIHsgcmV0dXJuIHNuLkludExpc3RGaW5kKE9iaktleSwgS2V5TmFtZSwgdmFsdWUpOyB9O1xyXG5leHBvcnQgdmFyIEZsb2F0TGlzdEZpbmQgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCB2YWx1ZSkgeyByZXR1cm4gc24uRmxvYXRMaXN0RmluZChPYmpLZXksIEtleU5hbWUsIHZhbHVlKTsgfTtcclxuZXhwb3J0IHZhciBTdHJpbmdMaXN0RmluZCA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUsIHZhbHVlKSB7IHJldHVybiBzbi5TdHJpbmdMaXN0RmluZChPYmpLZXksIEtleU5hbWUsIHZhbHVlKTsgfTtcclxuZXhwb3J0IHZhciBGb3JtTGlzdEZpbmQgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCB2YWx1ZSkgeyByZXR1cm4gc24uRm9ybUxpc3RGaW5kKE9iaktleSwgS2V5TmFtZSwgdmFsdWUpOyB9O1xyXG4vKiogRmluZCBpZiBhIHZhbHVlIGluIGxpc3Qgb24gZm9ybSBvciBnbG9iYWxseSBleGlzdHMsIHRydWUgaWYgaXQgZXhpc3RzLFxyXG4gICBmYWxzZSBpZiBpdCBkb2Vzbid0LlxyXG5cclxuICAgT2JqS2V5OiBmb3JtIHRvIGZpbmQgdmFsdWUgb24uIFNldCBub25lIHRvIGZpbmQgZ2xvYmFsIGxpc3QgdmFsdWUuXHJcbiAgIEtleU5hbWU6IG5hbWUgb2YgbGlzdC5cclxuICAgdmFsdWU6IHZhbHVlIHRvIHNlYXJjaC4gKi9cclxuZXhwb3J0IHZhciBJbnRMaXN0SGFzID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgdmFsdWUpIHsgcmV0dXJuIHNuLkludExpc3RIYXMoT2JqS2V5LCBLZXlOYW1lLCB2YWx1ZSk7IH07XHJcbmV4cG9ydCB2YXIgRmxvYXRMaXN0SGFzID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgdmFsdWUpIHsgcmV0dXJuIHNuLkZsb2F0TGlzdEhhcyhPYmpLZXksIEtleU5hbWUsIHZhbHVlKTsgfTtcclxuZXhwb3J0IHZhciBTdHJpbmdMaXN0SGFzID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgdmFsdWUpIHsgcmV0dXJuIHNuLlN0cmluZ0xpc3RIYXMoT2JqS2V5LCBLZXlOYW1lLCB2YWx1ZSk7IH07XHJcbmV4cG9ydCB2YXIgRm9ybUxpc3RIYXMgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCB2YWx1ZSkgeyByZXR1cm4gc24uRm9ybUxpc3RIYXMoT2JqS2V5LCBLZXlOYW1lLCB2YWx1ZSk7IH07XHJcbi8qKiBTb3J0IGFuIGludC9mbG9hdC9zdHJpbmcvRm9ybSBsaXN0IGJ5IHZhbHVlcyBpbiBhc2NlbmRpbmcgb3JkZXIuXHJcblxyXG4gICBPYmpLZXk6IGZvcm0gdG8gc29ydCBvbi4gU2V0IG5vbmUgZm9yIGdsb2JhbCB2YWx1ZS5cclxuICAgS2V5TmFtZTogbmFtZSBvZiB2YWx1ZS4gKi9cclxuZXhwb3J0IHZhciBJbnRMaXN0U29ydCA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUpIHsgcmV0dXJuIHNuLkludExpc3RTb3J0KE9iaktleSwgS2V5TmFtZSk7IH07XHJcbmV4cG9ydCB2YXIgRmxvYXRMaXN0U29ydCA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUpIHsgcmV0dXJuIHNuLkZsb2F0TGlzdFNvcnQoT2JqS2V5LCBLZXlOYW1lKTsgfTtcclxuZXhwb3J0IHZhciBTdHJpbmdMaXN0U29ydCA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUpIHsgcmV0dXJuIHNuLlN0cmluZ0xpc3RTb3J0KE9iaktleSwgS2V5TmFtZSk7IH07XHJcbmV4cG9ydCB2YXIgRm9ybUxpc3RTb3J0ID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSkgeyByZXR1cm4gc24uRm9ybUxpc3RTb3J0KE9iaktleSwgS2V5TmFtZSk7IH07XHJcbi8qKiBGaWxscyB0aGUgZ2l2ZW4gaW5wdXQgYXJyYXkgd2l0aCB0aGUgdmFsdWVzIG9mIHRoZSBsaXN0IG9uIGZvcm0gb3IgZ2xvYmFsbHksXHJcbiAgIHdpbGwgZmlsbCB0aGUgYXJyYXkgdW50aWwgZWl0aGVyIHRoZSBhcnJheSBvciBsaXN0IHJ1bnMgb3V0IG9mIHZhbGlkIGluZGV4ZXNcclxuXHJcbiAgIE9iaktleTogZm9ybSB0byBmaW5kIHZhbHVlIG9uLiBTZXQgbm9uZSB0byBmaW5kIGdsb2JhbCBsaXN0IHZhbHVlLlxyXG4gICBLZXlOYW1lOiBuYW1lIG9mIGxpc3QuXHJcbiAgIHNsaWNlW106IGFuIGluaXRpYWxpemVkIGFycmF5IHNldCB0byB0aGUgc2xpY2Ugc2l6ZSB5b3Ugd2FudCwgaS5lLiBpbnRbXSBzbGljZSA9IG5ldyBpbnRbMTBdXHJcbiAgIFtvcHRpb25hbF0gc3RhcnRJbmRleDogdGhlIHN0YXJ0aW5nIGxpc3QgaW5kZXggeW91IHdhbnQgdG8gc3RhcnQgZmlsbGluZyB5b3VyIHNsaWNlIGFycmF5IHdpdGggKi9cclxuZXhwb3J0IHZhciBJbnRMaXN0U2xpY2UgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCBzbGljZSwgc3RhcnRJbmRleCkge1xyXG4gICAgaWYgKHN0YXJ0SW5kZXggPT09IHZvaWQgMCkgeyBzdGFydEluZGV4ID0gMDsgfVxyXG4gICAgcmV0dXJuIHNuLkludExpc3RTbGljZShPYmpLZXksIEtleU5hbWUsIHNsaWNlLCBzdGFydEluZGV4KTtcclxufTtcclxuZXhwb3J0IHZhciBGbG9hdExpc3RTbGljZSA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUsIHNsaWNlLCBzdGFydEluZGV4KSB7XHJcbiAgICBpZiAoc3RhcnRJbmRleCA9PT0gdm9pZCAwKSB7IHN0YXJ0SW5kZXggPSAwOyB9XHJcbiAgICByZXR1cm4gc24uRmxvYXRMaXN0U2xpY2UoT2JqS2V5LCBLZXlOYW1lLCBzbGljZSwgc3RhcnRJbmRleCk7XHJcbn07XHJcbmV4cG9ydCB2YXIgU3RyaW5nTGlzdFNsaWNlID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgc2xpY2UsIHN0YXJ0SW5kZXgpIHtcclxuICAgIGlmIChzdGFydEluZGV4ID09PSB2b2lkIDApIHsgc3RhcnRJbmRleCA9IDA7IH1cclxuICAgIHJldHVybiBzbi5TdHJpbmdMaXN0U2xpY2UoT2JqS2V5LCBLZXlOYW1lLCBzbGljZSwgc3RhcnRJbmRleCk7XHJcbn07XHJcbmV4cG9ydCB2YXIgRm9ybUxpc3RTbGljZSA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUsIHNsaWNlLCBzdGFydEluZGV4KSB7XHJcbiAgICBpZiAoc3RhcnRJbmRleCA9PT0gdm9pZCAwKSB7IHN0YXJ0SW5kZXggPSAwOyB9XHJcbiAgICByZXR1cm4gc24uRm9ybUxpc3RTbGljZShPYmpLZXksIEtleU5hbWUsIHNsaWNlLCBzdGFydEluZGV4KTtcclxufTtcclxuLyoqIFNpemVzIHRoZSBnaXZlbiBsaXN0IHRvIGEgc2V0IG51bWJlciBvZiBlbGVtZW50cy4gSWYgdGhlIGxpc3QgZXhpc3RzIGFscmVhZHkgaXQgd2lsbCBiZSB0cnVuY2F0ZWRcclxuICAgd2hlbiBnaXZlbiBmZXdlciBlbGVtZW50cywgb3IgcmVzaXplZCB0byB0aGUgYXBwcm9wcmlhdGUgbGVuZ3RoIHdpdGggdGhlIGZpbGxlciBhcmd1bWVudCBiZWluZyB1c2VkIGFzXHJcbiAgIHRoZSBkZWZhdWx0IHZhbHVlc1xyXG5cclxuICAgUmV0dXJucyB0aGUgbnVtYmVyIG9mIGVsZW1lbnRzIHRydW5jYXRlZCAoc2lnbmVkKSBvciBhZGRlZCAodW5zaWduZWQpIG9udG8gdGhlIGxpc3QuXHJcblxyXG4gICBPYmpLZXk6IGZvcm0gdG8gZmluZCB2YWx1ZSBvbi4gU2V0IG5vbmUgdG8gZmluZCBnbG9iYWwgbGlzdCB2YWx1ZS5cclxuICAgS2V5TmFtZTogbmFtZSBvZiBsaXN0LlxyXG4gICB0b0xlbmd0aDogVGhlIHNpemUgeW91IHdhbnQgdG8gY2hhbmdlIHRoZSBsaXN0IHRvLiBNYXggbGVuZ3RoIHdoZW4gdXNpbmcgdGhpcyBmdW5jdGlvbiBpcyA1MDAuXHJcbiAgIFtvcHRpb25hbF0gZmlsbGVyOiBXaGVuIGFkZGluZyBlbXB0eSBlbGVtZW50cyB0byB0aGUgbGlzdCB0aGlzIHdpbGwgYmUgdXNlZCBhcyB0aGUgZGVmYXVsdCB2YWx1ZSAqL1xyXG5leHBvcnQgdmFyIEludExpc3RSZXNpemUgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCB0b0xlbmd0aCwgZmlsbGVyKSB7XHJcbiAgICBpZiAoZmlsbGVyID09PSB2b2lkIDApIHsgZmlsbGVyID0gMDsgfVxyXG4gICAgcmV0dXJuIHNuLkludExpc3RSZXNpemUoT2JqS2V5LCBLZXlOYW1lLCB0b0xlbmd0aCwgZmlsbGVyKTtcclxufTtcclxuZXhwb3J0IHZhciBGbG9hdExpc3RSZXNpemUgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCB0b0xlbmd0aCwgZmlsbGVyKSB7XHJcbiAgICBpZiAoZmlsbGVyID09PSB2b2lkIDApIHsgZmlsbGVyID0gMC4wOyB9XHJcbiAgICByZXR1cm4gc24uRmxvYXRMaXN0UmVzaXplKE9iaktleSwgS2V5TmFtZSwgdG9MZW5ndGgsIGZpbGxlcik7XHJcbn07XHJcbmV4cG9ydCB2YXIgU3RyaW5nTGlzdFJlc2l6ZSA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUsIHRvTGVuZ3RoLCBmaWxsZXIpIHtcclxuICAgIGlmIChmaWxsZXIgPT09IHZvaWQgMCkgeyBmaWxsZXIgPSBcIlwiOyB9XHJcbiAgICByZXR1cm4gc24uU3RyaW5nTGlzdFJlc2l6ZShPYmpLZXksIEtleU5hbWUsIHRvTGVuZ3RoLCBmaWxsZXIpO1xyXG59O1xyXG5leHBvcnQgdmFyIEZvcm1MaXN0UmVzaXplID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgdG9MZW5ndGgsIGZpbGxlcikge1xyXG4gICAgaWYgKGZpbGxlciA9PT0gdm9pZCAwKSB7IGZpbGxlciA9IG51bGw7IH1cclxuICAgIHJldHVybiBzbi5Gb3JtTGlzdFJlc2l6ZShPYmpLZXksIEtleU5hbWUsIHRvTGVuZ3RoLCBmaWxsZXIpO1xyXG59O1xyXG4vKiogQ3JlYXRlcyBhIGNvcHkgb2YgYXJyYXkgb24gdGhlIGdpdmVuIHN0b3JhZ2UgbGlzdCBhdCB0aGUgZ2l2ZW4gb2JqZWN0K2tleSxcclxuICAgb3ZlcndyaXRpbmcgYW55IGxpc3QgdGhhdCBtaWdodCBhbHJlYWR5IGV4aXN0cy5cclxuXHJcbiAgIFJldHVybnMgdHJ1ZSBvbiBzdWNjZXNzLlxyXG5cclxuICAgT2JqS2V5OiBmb3JtIHRvIGZpbmQgdmFsdWUgb24uIFNldCBub25lIHRvIGZpbmQgZ2xvYmFsIGxpc3QgdmFsdWUuXHJcbiAgIEtleU5hbWU6IG5hbWUgb2YgbGlzdC5cclxuICAgY29weVtdOiBUaGUgcGFweXJ1cyBhcnJheSB3aXRoIHRoZSBjb250ZW50IHlvdSB3aXNoIHRvIGNvcHkgb3ZlciBpbnRvIFN0b3JhZ2VVdGlsXHJcbiAgIFtvcHRpb25hbF0gZmlsbGVyOiBXaGVuIGFkZGluZyBlbXB0eSBlbGVtZW50cyB0byB0aGUgbGlzdCB0aGlzIHdpbGwgYmUgdXNlZCBhcyB0aGUgZGVmYXVsdCB2YWx1ZSAqL1xyXG5leHBvcnQgdmFyIEludExpc3RDb3B5ID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgY29weSkgeyByZXR1cm4gc24uSW50TGlzdENvcHkoT2JqS2V5LCBLZXlOYW1lLCBjb3B5KTsgfTtcclxuZXhwb3J0IHZhciBGbG9hdExpc3RDb3B5ID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgY29weSkgeyByZXR1cm4gc24uRmxvYXRMaXN0Q29weShPYmpLZXksIEtleU5hbWUsIGNvcHkpOyB9O1xyXG5leHBvcnQgdmFyIFN0cmluZ0xpc3RDb3B5ID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgY29weSkgeyByZXR1cm4gc24uU3RyaW5nTGlzdENvcHkoT2JqS2V5LCBLZXlOYW1lLCBjb3B5KTsgfTtcclxuZXhwb3J0IHZhciBGb3JtTGlzdENvcHkgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCBjb3B5KSB7IHJldHVybiBzbi5Gb3JtTGlzdENvcHkoT2JqS2V5LCBLZXlOYW1lLCBjb3B5KTsgfTtcclxuLyoqIE91dHB1dHMgdGhlIHZhbHVlcyBjdXJyZW50bHkgc3RvcmVkIGJ5IHRoZSBnaXZlbiBvYmplY3Qra2V5LlxyXG5cclxuICAgUmV0dXJucyBhIG5ldyBhcnJheSBjb250YWluaW5nIHRoZSB2YWx1ZXMuXHJcblxyXG4gICBPYmpLZXk6IGZvcm0gdG8gZmluZCB2YWx1ZSBvbi4gU2V0IG5vbmUgdG8gZmluZCBnbG9iYWwgbGlzdCB2YWx1ZS5cclxuICAgS2V5TmFtZTogbmFtZSBvZiBsaXN0LiAqL1xyXG5leHBvcnQgdmFyIEludExpc3RUb0FycmF5ID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSkgeyByZXR1cm4gc24uSW50TGlzdFRvQXJyYXkoT2JqS2V5LCBLZXlOYW1lKTsgfTtcclxuZXhwb3J0IHZhciBGbG9hdExpc3RUb0FycmF5ID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSkgeyByZXR1cm4gc24uRmxvYXRMaXN0VG9BcnJheShPYmpLZXksIEtleU5hbWUpOyB9O1xyXG5leHBvcnQgdmFyIFN0cmluZ0xpc3RUb0FycmF5ID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSkgeyByZXR1cm4gc24uU3RyaW5nTGlzdFRvQXJyYXkoT2JqS2V5LCBLZXlOYW1lKTsgfTtcclxuZXhwb3J0IHZhciBGb3JtTGlzdFRvQXJyYXkgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lKSB7IHJldHVybiBzbi5Gb3JtTGlzdFRvQXJyYXkoT2JqS2V5LCBLZXlOYW1lKTsgfTtcclxuLyoqIFJldHVybnMgYXJyYXkgb2YgZm9ybXMgZnJvbSBsaXN0IHRoYXQgaGF2ZSAob3Igb3B0aW9uYWxseSBkb24ndCBoYXZlKSB0aGUgc3BlY2lmaWVkIGZvcm0gdHlwZXMuXHJcbiAgIEZvciB2YWxpZCBsaXN0IG9mIGZvcm0gdHlwZXMsIHNlZSBGb3JtVHlwZS5wc2Mgb3IgaHR0cDovL3d3dy5jcmVhdGlvbmtpdC5jb20vR2V0VHlwZV8tX0Zvcm1cclxuXHJcbiAgIE9iaktleTogZm9ybSB0byBmaW5kIHZhbHVlIG9uLiBTZXQgbm9uZSB0byBmaW5kIGdsb2JhbCBsaXN0IHZhbHVlLlxyXG4gICBLZXlOYW1lOiBuYW1lIG9mIGxpc3QuXHJcbiAgIEZvcm1UeXBlSURzW106IFRoZSBpbnQgcGFweXJ1cyBhcnJheSB3aXRoIGFsbCB0aGUgZm9ybSB0eXBlcyB5b3Ugd2lzaCB0byBmaWx0ZXIgZm9yXHJcbiAgIFtvcHRpb25hbF0gUmV0dXJuTWF0Y2hpbmc6IEJ5IGRlZmF1bHQsIFRSVUUsIHRoZSBvdXRwdXQgRm9ybVtdIGFycmF5IHdpbGwgY29udGFpbiBmb3JtcyBmcm9tIGxpc3QgdGhhdCBtYXRjaCB0aGUgZm9ybSB0eXBlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJZiBzZXQgdG8gRkFMU0UsIGludmVydHMgdGhlIHJlc3VsdGluZyBhcnJheSB3aXRoIGZvcm1zIHRoYXQgaGF2ZSBhIHR5cGUgdGhhdCBETyBOT1QgbWF0Y2guICovXHJcbmV4cG9ydCB2YXIgRm9ybUxpc3RGaWx0ZXJCeVR5cGVzID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgRm9ybVR5cGVJRHMsIFJldHVybk1hdGNoaW5nKSB7XHJcbiAgICBpZiAoUmV0dXJuTWF0Y2hpbmcgPT09IHZvaWQgMCkgeyBSZXR1cm5NYXRjaGluZyA9IHRydWU7IH1cclxuICAgIHJldHVybiBzbi5Gb3JtTGlzdEZpbHRlckJ5VHlwZXMoT2JqS2V5LCBLZXlOYW1lLCBGb3JtVHlwZUlEcywgUmV0dXJuTWF0Y2hpbmcpO1xyXG59O1xyXG4vLyBDb252ZW5pZW5jZSB2ZXJzaW9uIG9mIEZvcm1MaXN0RmlsdGVyQnlUeXBlcygpIGZvciB3aGVuIG9ubHkgZ2V0dGluZyBhIHNpbmdsZSB0eXBlLlxyXG5leHBvcnQgdmFyIEZvcm1MaXN0RmlsdGVyQnlUeXBlID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgRm9ybVR5cGVJRCwgUmV0dXJuTWF0Y2hpbmcpIHtcclxuICAgIGlmIChSZXR1cm5NYXRjaGluZyA9PT0gdm9pZCAwKSB7IFJldHVybk1hdGNoaW5nID0gdHJ1ZTsgfVxyXG4gICAgcmV0dXJuIHNuLkZvcm1MaXN0RmlsdGVyQnlUeXBlKE9iaktleSwgS2V5TmFtZSwgRm9ybVR5cGVJRCwgUmV0dXJuTWF0Y2hpbmcpO1xyXG59O1xyXG4vKiogQ291bnRzIGVhY2ggdHlwZSBvZiBvZiBhbnkgS2V5TmFtZSB0aGF0IHN0YXJ0cyB3aXRoIGEgZ2l2ZW4gc3RyaW5nIHByZWZpeCBvbiBhbGwgb2JqZWN0cy5cclxuXHJcbiAgIFByZWZpeEtleTogVGhlIHN0cmluZyBhIEtleU5hbWUgbXVzdCBzdGFydCB3aXRoIHRvIGJlIGNvdW50ZWQuIENhbm5vdCBiZSBlbXB0eS4gKi9cclxuZXhwb3J0IHZhciBDb3VudEludFZhbHVlUHJlZml4ID0gZnVuY3Rpb24gKFByZWZpeEtleSkgeyByZXR1cm4gc24uQ291bnRJbnRWYWx1ZVByZWZpeChQcmVmaXhLZXkpOyB9O1xyXG5leHBvcnQgdmFyIENvdW50RmxvYXRWYWx1ZVByZWZpeCA9IGZ1bmN0aW9uIChQcmVmaXhLZXkpIHsgcmV0dXJuIHNuLkNvdW50RmxvYXRWYWx1ZVByZWZpeChQcmVmaXhLZXkpOyB9O1xyXG5leHBvcnQgdmFyIENvdW50U3RyaW5nVmFsdWVQcmVmaXggPSBmdW5jdGlvbiAoUHJlZml4S2V5KSB7IHJldHVybiBzbi5Db3VudFN0cmluZ1ZhbHVlUHJlZml4KFByZWZpeEtleSk7IH07XHJcbmV4cG9ydCB2YXIgQ291bnRGb3JtVmFsdWVQcmVmaXggPSBmdW5jdGlvbiAoUHJlZml4S2V5KSB7IHJldHVybiBzbi5Db3VudEZvcm1WYWx1ZVByZWZpeChQcmVmaXhLZXkpOyB9O1xyXG5leHBvcnQgdmFyIENvdW50SW50TGlzdFByZWZpeCA9IGZ1bmN0aW9uIChQcmVmaXhLZXkpIHsgcmV0dXJuIHNuLkNvdW50SW50TGlzdFByZWZpeChQcmVmaXhLZXkpOyB9O1xyXG5leHBvcnQgdmFyIENvdW50RmxvYXRMaXN0UHJlZml4ID0gZnVuY3Rpb24gKFByZWZpeEtleSkgeyByZXR1cm4gc24uQ291bnRGbG9hdExpc3RQcmVmaXgoUHJlZml4S2V5KTsgfTtcclxuZXhwb3J0IHZhciBDb3VudFN0cmluZ0xpc3RQcmVmaXggPSBmdW5jdGlvbiAoUHJlZml4S2V5KSB7IHJldHVybiBzbi5Db3VudFN0cmluZ0xpc3RQcmVmaXgoUHJlZml4S2V5KTsgfTtcclxuZXhwb3J0IHZhciBDb3VudEZvcm1MaXN0UHJlZml4ID0gZnVuY3Rpb24gKFByZWZpeEtleSkgeyByZXR1cm4gc24uQ291bnRGb3JtTGlzdFByZWZpeChQcmVmaXhLZXkpOyB9O1xyXG4vLyBQZXJmb3JtcyBhbGwgb2YgdGhlIGFib3ZlIHByZWZpeCBjb3VudHMgaW4gb25lIGdvLlxyXG5leHBvcnQgdmFyIENvdW50QWxsUHJlZml4ID0gZnVuY3Rpb24gKFByZWZpeEtleSkgeyByZXR1cm4gc24uQ291bnRBbGxQcmVmaXgoUHJlZml4S2V5KTsgfTtcclxuLyoqIENvdW50cyBlYWNoIHR5cGUgb2Ygb2YgYW55IEtleU5hbWUgdGhhdCBzdGFydHMgd2l0aCBhIGdpdmVuIHN0cmluZyBwcmVmaXggb24gYWxsIG9iamVjdHMuXHJcblxyXG4gICBPYmpLZXk6IGZvcm0gdG8gcGVyZm9ybSB0aGUgcHJlZml4IGNvdW50IG9uLlxyXG4gICBQcmVmaXhLZXk6IFRoZSBzdHJpbmcgYSBLZXlOYW1lIG11c3Qgc3RhcnQgd2l0aCB0byBiZSBjb3VudGVkLiBDYW5ub3QgYmUgZW1wdHkuICovXHJcbmV4cG9ydCB2YXIgQ291bnRPYmpJbnRWYWx1ZVByZWZpeCA9IGZ1bmN0aW9uIChPYmpLZXksIFByZWZpeEtleSkgeyByZXR1cm4gc24uQ291bnRPYmpJbnRWYWx1ZVByZWZpeChPYmpLZXksIFByZWZpeEtleSk7IH07XHJcbmV4cG9ydCB2YXIgQ291bnRPYmpGbG9hdFZhbHVlUHJlZml4ID0gZnVuY3Rpb24gKE9iaktleSwgUHJlZml4S2V5KSB7IHJldHVybiBzbi5Db3VudE9iakZsb2F0VmFsdWVQcmVmaXgoT2JqS2V5LCBQcmVmaXhLZXkpOyB9O1xyXG5leHBvcnQgdmFyIENvdW50T2JqU3RyaW5nVmFsdWVQcmVmaXggPSBmdW5jdGlvbiAoT2JqS2V5LCBQcmVmaXhLZXkpIHsgcmV0dXJuIHNuLkNvdW50T2JqU3RyaW5nVmFsdWVQcmVmaXgoT2JqS2V5LCBQcmVmaXhLZXkpOyB9O1xyXG5leHBvcnQgdmFyIENvdW50T2JqRm9ybVZhbHVlUHJlZml4ID0gZnVuY3Rpb24gKE9iaktleSwgUHJlZml4S2V5KSB7IHJldHVybiBzbi5Db3VudE9iakZvcm1WYWx1ZVByZWZpeChPYmpLZXksIFByZWZpeEtleSk7IH07XHJcbmV4cG9ydCB2YXIgQ291bnRPYmpJbnRMaXN0UHJlZml4ID0gZnVuY3Rpb24gKE9iaktleSwgUHJlZml4S2V5KSB7IHJldHVybiBzbi5Db3VudE9iakludExpc3RQcmVmaXgoT2JqS2V5LCBQcmVmaXhLZXkpOyB9O1xyXG5leHBvcnQgdmFyIENvdW50T2JqRmxvYXRMaXN0UHJlZml4ID0gZnVuY3Rpb24gKE9iaktleSwgUHJlZml4S2V5KSB7IHJldHVybiBzbi5Db3VudE9iakZsb2F0TGlzdFByZWZpeChPYmpLZXksIFByZWZpeEtleSk7IH07XHJcbmV4cG9ydCB2YXIgQ291bnRPYmpTdHJpbmdMaXN0UHJlZml4ID0gZnVuY3Rpb24gKE9iaktleSwgUHJlZml4S2V5KSB7IHJldHVybiBzbi5Db3VudE9ialN0cmluZ0xpc3RQcmVmaXgoT2JqS2V5LCBQcmVmaXhLZXkpOyB9O1xyXG5leHBvcnQgdmFyIENvdW50T2JqRm9ybUxpc3RQcmVmaXggPSBmdW5jdGlvbiAoT2JqS2V5LCBQcmVmaXhLZXkpIHsgcmV0dXJuIHNuLkNvdW50T2JqRm9ybUxpc3RQcmVmaXgoT2JqS2V5LCBQcmVmaXhLZXkpOyB9O1xyXG4vLyBQZXJmb3JtcyBhbGwgb2YgdGhlIGFib3ZlIHByZWZpeCBjb3VudHMgaW4gb25lIGdvLlxyXG5leHBvcnQgdmFyIENvdW50QWxsT2JqUHJlZml4ID0gZnVuY3Rpb24gKE9iaktleSwgUHJlZml4S2V5KSB7IHJldHVybiBzbi5Db3VudEFsbE9ialByZWZpeChPYmpLZXksIFByZWZpeEtleSk7IH07XHJcbi8qKiBDbGVhcnMgZWFjaCB0eXBlIG9mIG9mIGFueSBLZXlOYW1lIHRoYXQgc3RhcnRzIHdpdGggYSBnaXZlbiBzdHJpbmcgcHJlZml4IG9uIGFsbCBvYmplY3RzLlxyXG4gICBSZXR1cm5zIHRoZSBudW1iZXIgb2YgdmFsdWVzL2xpc3RzIHRoYXQgd2VyZSB1bnNldC5cclxuXHJcbiAgIFByZWZpeEtleTogVGhlIHN0cmluZyBhIEtleU5hbWUgbXVzdCBzdGFydCB3aXRoIHRvIGJlIGNsZWFyZWQuIENhbm5vdCBiZSBlbXB0eS4gKi9cclxuZXhwb3J0IHZhciBDbGVhckludFZhbHVlUHJlZml4ID0gZnVuY3Rpb24gKFByZWZpeEtleSkgeyByZXR1cm4gc24uQ2xlYXJJbnRWYWx1ZVByZWZpeChQcmVmaXhLZXkpOyB9O1xyXG5leHBvcnQgdmFyIENsZWFyRmxvYXRWYWx1ZVByZWZpeCA9IGZ1bmN0aW9uIChQcmVmaXhLZXkpIHsgcmV0dXJuIHNuLkNsZWFyRmxvYXRWYWx1ZVByZWZpeChQcmVmaXhLZXkpOyB9O1xyXG5leHBvcnQgdmFyIENsZWFyU3RyaW5nVmFsdWVQcmVmaXggPSBmdW5jdGlvbiAoUHJlZml4S2V5KSB7IHJldHVybiBzbi5DbGVhclN0cmluZ1ZhbHVlUHJlZml4KFByZWZpeEtleSk7IH07XHJcbmV4cG9ydCB2YXIgQ2xlYXJGb3JtVmFsdWVQcmVmaXggPSBmdW5jdGlvbiAoUHJlZml4S2V5KSB7IHJldHVybiBzbi5DbGVhckZvcm1WYWx1ZVByZWZpeChQcmVmaXhLZXkpOyB9O1xyXG5leHBvcnQgdmFyIENsZWFySW50TGlzdFByZWZpeCA9IGZ1bmN0aW9uIChQcmVmaXhLZXkpIHsgcmV0dXJuIHNuLkNsZWFySW50TGlzdFByZWZpeChQcmVmaXhLZXkpOyB9O1xyXG5leHBvcnQgdmFyIENsZWFyRmxvYXRMaXN0UHJlZml4ID0gZnVuY3Rpb24gKFByZWZpeEtleSkgeyByZXR1cm4gc24uQ2xlYXJGbG9hdExpc3RQcmVmaXgoUHJlZml4S2V5KTsgfTtcclxuZXhwb3J0IHZhciBDbGVhclN0cmluZ0xpc3RQcmVmaXggPSBmdW5jdGlvbiAoUHJlZml4S2V5KSB7IHJldHVybiBzbi5DbGVhclN0cmluZ0xpc3RQcmVmaXgoUHJlZml4S2V5KTsgfTtcclxuZXhwb3J0IHZhciBDbGVhckZvcm1MaXN0UHJlZml4ID0gZnVuY3Rpb24gKFByZWZpeEtleSkgeyByZXR1cm4gc24uQ2xlYXJGb3JtTGlzdFByZWZpeChQcmVmaXhLZXkpOyB9O1xyXG4vLyBQZXJmb3JtcyBhbGwgb2YgdGhlIGFib3ZlIHByZWZpeCBjbGVhcnMgaW4gb25lIGdvLlxyXG5leHBvcnQgdmFyIENsZWFyQWxsUHJlZml4ID0gZnVuY3Rpb24gKFByZWZpeEtleSkgeyByZXR1cm4gc24uQ2xlYXJBbGxQcmVmaXgoUHJlZml4S2V5KTsgfTtcclxuLyoqIENsZWFycyBlYWNoIHR5cGUgb2Ygb2YgYW55IEtleU5hbWUgdGhhdCBzdGFydHMgd2l0aCBhIGdpdmVuIHN0cmluZyBwcmVmaXggb24gc3BlY2lmaWMgb2JqZWN0cy5cclxuICAgUmV0dXJucyB0aGUgbnVtYmVyIG9mIHZhbHVlcy9saXN0cyB0aGF0IHdlcmUgdW5zZXQuXHJcblxyXG4gICBPYmpLZXk6IGZvcm0gdG8gcGVyZm9ybSB0aGUgcHJlZml4IGNsZWFyIG9uLlxyXG4gICBQcmVmaXhLZXk6IFRoZSBzdHJpbmcgYSBLZXlOYW1lIG11c3Qgc3RhcnQgd2l0aCB0byBiZSBjbGVhcmVkLiBDYW5ub3QgYmUgZW1wdHkuICovXHJcbmV4cG9ydCB2YXIgQ2xlYXJPYmpJbnRWYWx1ZVByZWZpeCA9IGZ1bmN0aW9uIChPYmpLZXksIFByZWZpeEtleSkgeyByZXR1cm4gc24uQ2xlYXJPYmpJbnRWYWx1ZVByZWZpeChPYmpLZXksIFByZWZpeEtleSk7IH07XHJcbmV4cG9ydCB2YXIgQ2xlYXJPYmpGbG9hdFZhbHVlUHJlZml4ID0gZnVuY3Rpb24gKE9iaktleSwgUHJlZml4S2V5KSB7IHJldHVybiBzbi5DbGVhck9iakZsb2F0VmFsdWVQcmVmaXgoT2JqS2V5LCBQcmVmaXhLZXkpOyB9O1xyXG5leHBvcnQgdmFyIENsZWFyT2JqU3RyaW5nVmFsdWVQcmVmaXggPSBmdW5jdGlvbiAoT2JqS2V5LCBQcmVmaXhLZXkpIHsgcmV0dXJuIHNuLkNsZWFyT2JqU3RyaW5nVmFsdWVQcmVmaXgoT2JqS2V5LCBQcmVmaXhLZXkpOyB9O1xyXG5leHBvcnQgdmFyIENsZWFyT2JqRm9ybVZhbHVlUHJlZml4ID0gZnVuY3Rpb24gKE9iaktleSwgUHJlZml4S2V5KSB7IHJldHVybiBzbi5DbGVhck9iakZvcm1WYWx1ZVByZWZpeChPYmpLZXksIFByZWZpeEtleSk7IH07XHJcbmV4cG9ydCB2YXIgQ2xlYXJPYmpJbnRMaXN0UHJlZml4ID0gZnVuY3Rpb24gKE9iaktleSwgUHJlZml4S2V5KSB7IHJldHVybiBzbi5DbGVhck9iakludExpc3RQcmVmaXgoT2JqS2V5LCBQcmVmaXhLZXkpOyB9O1xyXG5leHBvcnQgdmFyIENsZWFyT2JqRmxvYXRMaXN0UHJlZml4ID0gZnVuY3Rpb24gKE9iaktleSwgUHJlZml4S2V5KSB7IHJldHVybiBzbi5DbGVhck9iakZsb2F0TGlzdFByZWZpeChPYmpLZXksIFByZWZpeEtleSk7IH07XHJcbmV4cG9ydCB2YXIgQ2xlYXJPYmpTdHJpbmdMaXN0UHJlZml4ID0gZnVuY3Rpb24gKE9iaktleSwgUHJlZml4S2V5KSB7IHJldHVybiBzbi5DbGVhck9ialN0cmluZ0xpc3RQcmVmaXgoT2JqS2V5LCBQcmVmaXhLZXkpOyB9O1xyXG5leHBvcnQgdmFyIENsZWFyT2JqRm9ybUxpc3RQcmVmaXggPSBmdW5jdGlvbiAoT2JqS2V5LCBQcmVmaXhLZXkpIHsgcmV0dXJuIHNuLkNsZWFyT2JqRm9ybUxpc3RQcmVmaXgoT2JqS2V5LCBQcmVmaXhLZXkpOyB9O1xyXG4vLyBQZXJmb3JtcyBhbGwgb2YgdGhlIGFib3ZlIHByZWZpeCBjbGVhcnMgaW4gb25lIGdvLlxyXG5leHBvcnQgdmFyIENsZWFyQWxsT2JqUHJlZml4ID0gZnVuY3Rpb24gKE9iaktleSwgUHJlZml4S2V5KSB7IHJldHVybiBzbi5DbGVhckFsbE9ialByZWZpeChPYmpLZXksIFByZWZpeEtleSk7IH07XHJcbi8qKiBEZWJ1ZyBmdW5jdGlvbnMgLSBjYW4gYmUgaGVscGZ1bCB0byBmaW5kIHByb2JsZW1zIG9yIGZvciBkZXZlbG9wbWVudC4gKi9cclxuZXhwb3J0IHZhciBkZWJ1Z19EZWxldGVWYWx1ZXMgPSBmdW5jdGlvbiAoT2JqS2V5KSB7IHJldHVybiBzbi5kZWJ1Z19EZWxldGVWYWx1ZXMoT2JqS2V5KTsgfTtcclxuZXhwb3J0IHZhciBkZWJ1Z19EZWxldGVBbGxWYWx1ZXMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBzbi5kZWJ1Z19EZWxldGVBbGxWYWx1ZXMoKTsgfTtcclxuZXhwb3J0IHZhciBkZWJ1Z19DbGVhbnVwID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gc24uZGVidWdfQ2xlYW51cCgpOyB9O1xyXG5leHBvcnQgdmFyIGRlYnVnX0FsbEludE9ianMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBzbi5kZWJ1Z19BbGxJbnRPYmpzKCk7IH07XHJcbmV4cG9ydCB2YXIgZGVidWdfQWxsRmxvYXRPYmpzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gc24uZGVidWdfQWxsRmxvYXRPYmpzKCk7IH07XHJcbmV4cG9ydCB2YXIgZGVidWdfQWxsU3RyaW5nT2JqcyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNuLmRlYnVnX0FsbFN0cmluZ09ianMoKTsgfTtcclxuZXhwb3J0IHZhciBkZWJ1Z19BbGxGb3JtT2JqcyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNuLmRlYnVnX0FsbEZvcm1PYmpzKCk7IH07XHJcbmV4cG9ydCB2YXIgZGVidWdfQWxsSW50TGlzdE9ianMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBzbi5kZWJ1Z19BbGxJbnRMaXN0T2JqcygpOyB9O1xyXG5leHBvcnQgdmFyIGRlYnVnX0FsbEZsb2F0TGlzdE9ianMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBzbi5kZWJ1Z19BbGxGbG9hdExpc3RPYmpzKCk7IH07XHJcbmV4cG9ydCB2YXIgZGVidWdfQWxsU3RyaW5nTGlzdE9ianMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBzbi5kZWJ1Z19BbGxTdHJpbmdMaXN0T2JqcygpOyB9O1xyXG5leHBvcnQgdmFyIGRlYnVnX0FsbEZvcm1MaXN0T2JqcyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNuLmRlYnVnX0FsbEZvcm1MaXN0T2JqcygpOyB9O1xyXG5leHBvcnQgdmFyIGRlYnVnX0FsbE9iakludEtleXMgPSBmdW5jdGlvbiAoT2JqS2V5KSB7IHJldHVybiBzbi5kZWJ1Z19BbGxPYmpJbnRLZXlzKE9iaktleSk7IH07XHJcbmV4cG9ydCB2YXIgZGVidWdfQWxsT2JqRmxvYXRLZXlzID0gZnVuY3Rpb24gKE9iaktleSkgeyByZXR1cm4gc24uZGVidWdfQWxsT2JqRmxvYXRLZXlzKE9iaktleSk7IH07XHJcbmV4cG9ydCB2YXIgZGVidWdfQWxsT2JqU3RyaW5nS2V5cyA9IGZ1bmN0aW9uIChPYmpLZXkpIHsgcmV0dXJuIHNuLmRlYnVnX0FsbE9ialN0cmluZ0tleXMoT2JqS2V5KTsgfTtcclxuZXhwb3J0IHZhciBkZWJ1Z19BbGxPYmpGb3JtS2V5cyA9IGZ1bmN0aW9uIChPYmpLZXkpIHsgcmV0dXJuIHNuLmRlYnVnX0FsbE9iakZvcm1LZXlzKE9iaktleSk7IH07XHJcbmV4cG9ydCB2YXIgZGVidWdfQWxsT2JqSW50TGlzdEtleXMgPSBmdW5jdGlvbiAoT2JqS2V5KSB7IHJldHVybiBzbi5kZWJ1Z19BbGxPYmpJbnRMaXN0S2V5cyhPYmpLZXkpOyB9O1xyXG5leHBvcnQgdmFyIGRlYnVnX0FsbE9iakZsb2F0TGlzdEtleXMgPSBmdW5jdGlvbiAoT2JqS2V5KSB7IHJldHVybiBzbi5kZWJ1Z19BbGxPYmpGbG9hdExpc3RLZXlzKE9iaktleSk7IH07XHJcbmV4cG9ydCB2YXIgZGVidWdfQWxsT2JqU3RyaW5nTGlzdEtleXMgPSBmdW5jdGlvbiAoT2JqS2V5KSB7IHJldHVybiBzbi5kZWJ1Z19BbGxPYmpTdHJpbmdMaXN0S2V5cyhPYmpLZXkpOyB9O1xyXG5leHBvcnQgdmFyIGRlYnVnX0FsbE9iakZvcm1MaXN0S2V5cyA9IGZ1bmN0aW9uIChPYmpLZXkpIHsgcmV0dXJuIHNuLmRlYnVnX0FsbE9iakZvcm1MaXN0S2V5cyhPYmpLZXkpOyB9O1xyXG5leHBvcnQgdmFyIGRlYnVnX0dldEludE9iamVjdENvdW50ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gc24uZGVidWdfR2V0SW50T2JqZWN0Q291bnQoKTsgfTtcclxuZXhwb3J0IHZhciBkZWJ1Z19HZXRGbG9hdE9iamVjdENvdW50ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gc24uZGVidWdfR2V0RmxvYXRPYmplY3RDb3VudCgpOyB9O1xyXG5leHBvcnQgdmFyIGRlYnVnX0dldFN0cmluZ09iamVjdENvdW50ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gc24uZGVidWdfR2V0U3RyaW5nT2JqZWN0Q291bnQoKTsgfTtcclxuZXhwb3J0IHZhciBkZWJ1Z19HZXRGb3JtT2JqZWN0Q291bnQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBzbi5kZWJ1Z19HZXRGb3JtT2JqZWN0Q291bnQoKTsgfTtcclxuZXhwb3J0IHZhciBkZWJ1Z19HZXRJbnRMaXN0T2JqZWN0Q291bnQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBzbi5kZWJ1Z19HZXRJbnRMaXN0T2JqZWN0Q291bnQoKTsgfTtcclxuZXhwb3J0IHZhciBkZWJ1Z19HZXRGbG9hdExpc3RPYmplY3RDb3VudCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNuLmRlYnVnX0dldEZsb2F0TGlzdE9iamVjdENvdW50KCk7IH07XHJcbmV4cG9ydCB2YXIgZGVidWdfR2V0U3RyaW5nTGlzdE9iamVjdENvdW50ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gc24uZGVidWdfR2V0U3RyaW5nTGlzdE9iamVjdENvdW50KCk7IH07XHJcbmV4cG9ydCB2YXIgZGVidWdfR2V0Rm9ybUxpc3RPYmplY3RDb3VudCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNuLmRlYnVnX0dldEZvcm1MaXN0T2JqZWN0Q291bnQoKTsgfTtcclxuZXhwb3J0IHZhciBkZWJ1Z19HZXRJbnRPYmplY3QgPSBmdW5jdGlvbiAoaW5kZXgpIHsgcmV0dXJuIHNuLmRlYnVnX0dldEludE9iamVjdChpbmRleCk7IH07XHJcbmV4cG9ydCB2YXIgZGVidWdfR2V0RmxvYXRPYmplY3QgPSBmdW5jdGlvbiAoaW5kZXgpIHsgcmV0dXJuIHNuLmRlYnVnX0dldEZsb2F0T2JqZWN0KGluZGV4KTsgfTtcclxuZXhwb3J0IHZhciBkZWJ1Z19HZXRTdHJpbmdPYmplY3QgPSBmdW5jdGlvbiAoaW5kZXgpIHsgcmV0dXJuIHNuLmRlYnVnX0dldFN0cmluZ09iamVjdChpbmRleCk7IH07XHJcbmV4cG9ydCB2YXIgZGVidWdfR2V0Rm9ybU9iamVjdCA9IGZ1bmN0aW9uIChpbmRleCkgeyByZXR1cm4gc24uZGVidWdfR2V0Rm9ybU9iamVjdChpbmRleCk7IH07XHJcbmV4cG9ydCB2YXIgZGVidWdfR2V0SW50TGlzdE9iamVjdCA9IGZ1bmN0aW9uIChpbmRleCkgeyByZXR1cm4gc24uZGVidWdfR2V0SW50TGlzdE9iamVjdChpbmRleCk7IH07XHJcbmV4cG9ydCB2YXIgZGVidWdfR2V0RmxvYXRMaXN0T2JqZWN0ID0gZnVuY3Rpb24gKGluZGV4KSB7IHJldHVybiBzbi5kZWJ1Z19HZXRGbG9hdExpc3RPYmplY3QoaW5kZXgpOyB9O1xyXG5leHBvcnQgdmFyIGRlYnVnX0dldFN0cmluZ0xpc3RPYmplY3QgPSBmdW5jdGlvbiAoaW5kZXgpIHsgcmV0dXJuIHNuLmRlYnVnX0dldFN0cmluZ0xpc3RPYmplY3QoaW5kZXgpOyB9O1xyXG5leHBvcnQgdmFyIGRlYnVnX0dldEZvcm1MaXN0T2JqZWN0ID0gZnVuY3Rpb24gKGluZGV4KSB7IHJldHVybiBzbi5kZWJ1Z19HZXRGb3JtTGlzdE9iamVjdChpbmRleCk7IH07XHJcbmV4cG9ydCB2YXIgZGVidWdfR2V0SW50S2V5c0NvdW50ID0gZnVuY3Rpb24gKE9iaktleSkgeyByZXR1cm4gc24uZGVidWdfR2V0SW50S2V5c0NvdW50KE9iaktleSk7IH07XHJcbmV4cG9ydCB2YXIgZGVidWdfR2V0RmxvYXRLZXlzQ291bnQgPSBmdW5jdGlvbiAoT2JqS2V5KSB7IHJldHVybiBzbi5kZWJ1Z19HZXRGbG9hdEtleXNDb3VudChPYmpLZXkpOyB9O1xyXG5leHBvcnQgdmFyIGRlYnVnX0dldFN0cmluZ0tleXNDb3VudCA9IGZ1bmN0aW9uIChPYmpLZXkpIHsgcmV0dXJuIHNuLmRlYnVnX0dldFN0cmluZ0tleXNDb3VudChPYmpLZXkpOyB9O1xyXG5leHBvcnQgdmFyIGRlYnVnX0dldEZvcm1LZXlzQ291bnQgPSBmdW5jdGlvbiAoT2JqS2V5KSB7IHJldHVybiBzbi5kZWJ1Z19HZXRGb3JtS2V5c0NvdW50KE9iaktleSk7IH07XHJcbmV4cG9ydCB2YXIgZGVidWdfR2V0SW50TGlzdEtleXNDb3VudCA9IGZ1bmN0aW9uIChPYmpLZXkpIHsgcmV0dXJuIHNuLmRlYnVnX0dldEludExpc3RLZXlzQ291bnQoT2JqS2V5KTsgfTtcclxuZXhwb3J0IHZhciBkZWJ1Z19HZXRGbG9hdExpc3RLZXlzQ291bnQgPSBmdW5jdGlvbiAoT2JqS2V5KSB7IHJldHVybiBzbi5kZWJ1Z19HZXRGbG9hdExpc3RLZXlzQ291bnQoT2JqS2V5KTsgfTtcclxuZXhwb3J0IHZhciBkZWJ1Z19HZXRTdHJpbmdMaXN0S2V5c0NvdW50ID0gZnVuY3Rpb24gKE9iaktleSkgeyByZXR1cm4gc24uZGVidWdfR2V0U3RyaW5nTGlzdEtleXNDb3VudChPYmpLZXkpOyB9O1xyXG5leHBvcnQgdmFyIGRlYnVnX0dldEZvcm1MaXN0S2V5c0NvdW50ID0gZnVuY3Rpb24gKE9iaktleSkgeyByZXR1cm4gc24uZGVidWdfR2V0Rm9ybUxpc3RLZXlzQ291bnQoT2JqS2V5KTsgfTtcclxuZXhwb3J0IHZhciBkZWJ1Z19HZXRJbnRLZXkgPSBmdW5jdGlvbiAoT2JqS2V5LCBpbmRleCkgeyByZXR1cm4gc24uZGVidWdfR2V0SW50S2V5KE9iaktleSwgaW5kZXgpOyB9O1xyXG5leHBvcnQgdmFyIGRlYnVnX0dldEZsb2F0S2V5ID0gZnVuY3Rpb24gKE9iaktleSwgaW5kZXgpIHsgcmV0dXJuIHNuLmRlYnVnX0dldEZsb2F0S2V5KE9iaktleSwgaW5kZXgpOyB9O1xyXG5leHBvcnQgdmFyIGRlYnVnX0dldFN0cmluZ0tleSA9IGZ1bmN0aW9uIChPYmpLZXksIGluZGV4KSB7IHJldHVybiBzbi5kZWJ1Z19HZXRTdHJpbmdLZXkoT2JqS2V5LCBpbmRleCk7IH07XHJcbmV4cG9ydCB2YXIgZGVidWdfR2V0Rm9ybUtleSA9IGZ1bmN0aW9uIChPYmpLZXksIGluZGV4KSB7IHJldHVybiBzbi5kZWJ1Z19HZXRGb3JtS2V5KE9iaktleSwgaW5kZXgpOyB9O1xyXG5leHBvcnQgdmFyIGRlYnVnX0dldEludExpc3RLZXkgPSBmdW5jdGlvbiAoT2JqS2V5LCBpbmRleCkgeyByZXR1cm4gc24uZGVidWdfR2V0SW50TGlzdEtleShPYmpLZXksIGluZGV4KTsgfTtcclxuZXhwb3J0IHZhciBkZWJ1Z19HZXRGbG9hdExpc3RLZXkgPSBmdW5jdGlvbiAoT2JqS2V5LCBpbmRleCkgeyByZXR1cm4gc24uZGVidWdfR2V0RmxvYXRMaXN0S2V5KE9iaktleSwgaW5kZXgpOyB9O1xyXG5leHBvcnQgdmFyIGRlYnVnX0dldFN0cmluZ0xpc3RLZXkgPSBmdW5jdGlvbiAoT2JqS2V5LCBpbmRleCkgeyByZXR1cm4gc24uZGVidWdfR2V0U3RyaW5nTGlzdEtleShPYmpLZXksIGluZGV4KTsgfTtcclxuZXhwb3J0IHZhciBkZWJ1Z19HZXRGb3JtTGlzdEtleSA9IGZ1bmN0aW9uIChPYmpLZXksIGluZGV4KSB7IHJldHVybiBzbi5kZWJ1Z19HZXRGb3JtTGlzdEtleShPYmpLZXksIGluZGV4KTsgfTtcclxuLyoqIFN0b3JhZ2UgZnVuY3Rpb25zIC0gc2VwYXJhdGUgZmlsZS4gVGhlc2UgYXJlIHNoYXJlZCBpbiBhbGwgc2F2ZSBnYW1lcy4gVmFsdWVzIGFyZSBsb2FkZWQgYW5kIHNhdmVkXHJcbiAgIHdoZW4gc2F2ZWdhbWUgaXMgbG9hZGVkIG9yIHNhdmVkLlxyXG5cclxuICAgREVQUkVDQVRFRCB2Mi45OiBSZXBsYWNlZCBieSBKc29uVXRpbCBmdW5jdGlvbnMuIEV4aXN0aW5nIGZ1bmN0aW9ucyBoZXJlIGhhdmUgYmVlbiBwcm94aWVkIHRvIGEgc2hhcmVkXHJcbiAgIGpzb24gZmlsZSB0byBtYWludGFpbiBjb21wYXRpYmlsaXR5LiAqL1xyXG5leHBvcnQgdmFyIEZpbGVTZXRJbnRWYWx1ZSA9IGZ1bmN0aW9uIChLZXlOYW1lLCB2YWx1ZSkgeyByZXR1cm4gc24uRmlsZVNldEludFZhbHVlKEtleU5hbWUsIHZhbHVlKTsgfTtcclxuZXhwb3J0IHZhciBGaWxlU2V0RmxvYXRWYWx1ZSA9IGZ1bmN0aW9uIChLZXlOYW1lLCB2YWx1ZSkgeyByZXR1cm4gc24uRmlsZVNldEZsb2F0VmFsdWUoS2V5TmFtZSwgdmFsdWUpOyB9O1xyXG5leHBvcnQgdmFyIEZpbGVTZXRTdHJpbmdWYWx1ZSA9IGZ1bmN0aW9uIChLZXlOYW1lLCB2YWx1ZSkgeyByZXR1cm4gc24uRmlsZVNldFN0cmluZ1ZhbHVlKEtleU5hbWUsIHZhbHVlKTsgfTtcclxuZXhwb3J0IHZhciBGaWxlU2V0Rm9ybVZhbHVlID0gZnVuY3Rpb24gKEtleU5hbWUsIHZhbHVlKSB7IHJldHVybiBzbi5GaWxlU2V0Rm9ybVZhbHVlKEtleU5hbWUsIHZhbHVlKTsgfTtcclxuZXhwb3J0IHZhciBGaWxlQWRqdXN0SW50VmFsdWUgPSBmdW5jdGlvbiAoS2V5TmFtZSwgYW1vdW50KSB7IHJldHVybiBzbi5GaWxlQWRqdXN0SW50VmFsdWUoS2V5TmFtZSwgYW1vdW50KTsgfTtcclxuZXhwb3J0IHZhciBGaWxlQWRqdXN0RmxvYXRWYWx1ZSA9IGZ1bmN0aW9uIChLZXlOYW1lLCBhbW91bnQpIHsgcmV0dXJuIHNuLkZpbGVBZGp1c3RGbG9hdFZhbHVlKEtleU5hbWUsIGFtb3VudCk7IH07XHJcbmV4cG9ydCB2YXIgRmlsZVVuc2V0SW50VmFsdWUgPSBmdW5jdGlvbiAoS2V5TmFtZSkgeyByZXR1cm4gc24uRmlsZVVuc2V0SW50VmFsdWUoS2V5TmFtZSk7IH07XHJcbmV4cG9ydCB2YXIgRmlsZVVuc2V0RmxvYXRWYWx1ZSA9IGZ1bmN0aW9uIChLZXlOYW1lKSB7IHJldHVybiBzbi5GaWxlVW5zZXRGbG9hdFZhbHVlKEtleU5hbWUpOyB9O1xyXG5leHBvcnQgdmFyIEZpbGVVbnNldFN0cmluZ1ZhbHVlID0gZnVuY3Rpb24gKEtleU5hbWUpIHsgcmV0dXJuIHNuLkZpbGVVbnNldFN0cmluZ1ZhbHVlKEtleU5hbWUpOyB9O1xyXG5leHBvcnQgdmFyIEZpbGVVbnNldEZvcm1WYWx1ZSA9IGZ1bmN0aW9uIChLZXlOYW1lKSB7IHJldHVybiBzbi5GaWxlVW5zZXRGb3JtVmFsdWUoS2V5TmFtZSk7IH07XHJcbmV4cG9ydCB2YXIgRmlsZUhhc0ludFZhbHVlID0gZnVuY3Rpb24gKEtleU5hbWUpIHsgcmV0dXJuIHNuLkZpbGVIYXNJbnRWYWx1ZShLZXlOYW1lKTsgfTtcclxuZXhwb3J0IHZhciBGaWxlSGFzRmxvYXRWYWx1ZSA9IGZ1bmN0aW9uIChLZXlOYW1lKSB7IHJldHVybiBzbi5GaWxlSGFzRmxvYXRWYWx1ZShLZXlOYW1lKTsgfTtcclxuZXhwb3J0IHZhciBGaWxlSGFzU3RyaW5nVmFsdWUgPSBmdW5jdGlvbiAoS2V5TmFtZSkgeyByZXR1cm4gc24uRmlsZUhhc1N0cmluZ1ZhbHVlKEtleU5hbWUpOyB9O1xyXG5leHBvcnQgdmFyIEZpbGVIYXNGb3JtVmFsdWUgPSBmdW5jdGlvbiAoS2V5TmFtZSkgeyByZXR1cm4gc24uRmlsZUhhc0Zvcm1WYWx1ZShLZXlOYW1lKTsgfTtcclxuZXhwb3J0IHZhciBGaWxlR2V0SW50VmFsdWUgPSBmdW5jdGlvbiAoS2V5TmFtZSwgbWlzc2luZykge1xyXG4gICAgaWYgKG1pc3NpbmcgPT09IHZvaWQgMCkgeyBtaXNzaW5nID0gMDsgfVxyXG4gICAgcmV0dXJuIHNuLkZpbGVHZXRJbnRWYWx1ZShLZXlOYW1lLCBtaXNzaW5nKTtcclxufTtcclxuZXhwb3J0IHZhciBGaWxlR2V0RmxvYXRWYWx1ZSA9IGZ1bmN0aW9uIChLZXlOYW1lLCBtaXNzaW5nKSB7XHJcbiAgICBpZiAobWlzc2luZyA9PT0gdm9pZCAwKSB7IG1pc3NpbmcgPSAwLjA7IH1cclxuICAgIHJldHVybiBzbi5GaWxlR2V0RmxvYXRWYWx1ZShLZXlOYW1lLCBtaXNzaW5nKTtcclxufTtcclxuZXhwb3J0IHZhciBGaWxlR2V0U3RyaW5nVmFsdWUgPSBmdW5jdGlvbiAoS2V5TmFtZSwgbWlzc2luZykge1xyXG4gICAgaWYgKG1pc3NpbmcgPT09IHZvaWQgMCkgeyBtaXNzaW5nID0gXCJcIjsgfVxyXG4gICAgcmV0dXJuIHNuLkZpbGVHZXRTdHJpbmdWYWx1ZShLZXlOYW1lLCBtaXNzaW5nKTtcclxufTtcclxuZXhwb3J0IHZhciBGaWxlR2V0Rm9ybVZhbHVlID0gZnVuY3Rpb24gKEtleU5hbWUsIG1pc3NpbmcpIHtcclxuICAgIGlmIChtaXNzaW5nID09PSB2b2lkIDApIHsgbWlzc2luZyA9IG51bGw7IH1cclxuICAgIHJldHVybiBzbi5GaWxlR2V0Rm9ybVZhbHVlKEtleU5hbWUsIG1pc3NpbmcpO1xyXG59O1xyXG5leHBvcnQgdmFyIEZpbGVJbnRMaXN0QWRkID0gZnVuY3Rpb24gKEtleU5hbWUsIHZhbHVlLCBhbGxvd0R1cGxpY2F0ZSkge1xyXG4gICAgaWYgKGFsbG93RHVwbGljYXRlID09PSB2b2lkIDApIHsgYWxsb3dEdXBsaWNhdGUgPSB0cnVlOyB9XHJcbiAgICByZXR1cm4gc24uRmlsZUludExpc3RBZGQoS2V5TmFtZSwgdmFsdWUsIGFsbG93RHVwbGljYXRlKTtcclxufTtcclxuZXhwb3J0IHZhciBGaWxlRmxvYXRMaXN0QWRkID0gZnVuY3Rpb24gKEtleU5hbWUsIHZhbHVlLCBhbGxvd0R1cGxpY2F0ZSkge1xyXG4gICAgaWYgKGFsbG93RHVwbGljYXRlID09PSB2b2lkIDApIHsgYWxsb3dEdXBsaWNhdGUgPSB0cnVlOyB9XHJcbiAgICByZXR1cm4gc24uRmlsZUZsb2F0TGlzdEFkZChLZXlOYW1lLCB2YWx1ZSwgYWxsb3dEdXBsaWNhdGUpO1xyXG59O1xyXG5leHBvcnQgdmFyIEZpbGVTdHJpbmdMaXN0QWRkID0gZnVuY3Rpb24gKEtleU5hbWUsIHZhbHVlLCBhbGxvd0R1cGxpY2F0ZSkge1xyXG4gICAgaWYgKGFsbG93RHVwbGljYXRlID09PSB2b2lkIDApIHsgYWxsb3dEdXBsaWNhdGUgPSB0cnVlOyB9XHJcbiAgICByZXR1cm4gc24uRmlsZVN0cmluZ0xpc3RBZGQoS2V5TmFtZSwgdmFsdWUsIGFsbG93RHVwbGljYXRlKTtcclxufTtcclxuZXhwb3J0IHZhciBGaWxlRm9ybUxpc3RBZGQgPSBmdW5jdGlvbiAoS2V5TmFtZSwgdmFsdWUsIGFsbG93RHVwbGljYXRlKSB7XHJcbiAgICBpZiAoYWxsb3dEdXBsaWNhdGUgPT09IHZvaWQgMCkgeyBhbGxvd0R1cGxpY2F0ZSA9IHRydWU7IH1cclxuICAgIHJldHVybiBzbi5GaWxlRm9ybUxpc3RBZGQoS2V5TmFtZSwgdmFsdWUsIGFsbG93RHVwbGljYXRlKTtcclxufTtcclxuZXhwb3J0IHZhciBGaWxlSW50TGlzdEFkanVzdCA9IGZ1bmN0aW9uIChLZXlOYW1lLCBpbmRleCwgYW1vdW50KSB7IHJldHVybiBzbi5GaWxlSW50TGlzdEFkanVzdChLZXlOYW1lLCBpbmRleCwgYW1vdW50KTsgfTtcclxuZXhwb3J0IHZhciBGaWxlRmxvYXRMaXN0QWRqdXN0ID0gZnVuY3Rpb24gKEtleU5hbWUsIGluZGV4LCBhbW91bnQpIHsgcmV0dXJuIHNuLkZpbGVGbG9hdExpc3RBZGp1c3QoS2V5TmFtZSwgaW5kZXgsIGFtb3VudCk7IH07XHJcbmV4cG9ydCB2YXIgRmlsZUludExpc3RSZW1vdmUgPSBmdW5jdGlvbiAoS2V5TmFtZSwgdmFsdWUsIGFsbEluc3RhbmNlcykge1xyXG4gICAgaWYgKGFsbEluc3RhbmNlcyA9PT0gdm9pZCAwKSB7IGFsbEluc3RhbmNlcyA9IGZhbHNlOyB9XHJcbiAgICByZXR1cm4gc24uRmlsZUludExpc3RSZW1vdmUoS2V5TmFtZSwgdmFsdWUsIGFsbEluc3RhbmNlcyk7XHJcbn07XHJcbmV4cG9ydCB2YXIgRmlsZUZsb2F0TGlzdFJlbW92ZSA9IGZ1bmN0aW9uIChLZXlOYW1lLCB2YWx1ZSwgYWxsSW5zdGFuY2VzKSB7XHJcbiAgICBpZiAoYWxsSW5zdGFuY2VzID09PSB2b2lkIDApIHsgYWxsSW5zdGFuY2VzID0gZmFsc2U7IH1cclxuICAgIHJldHVybiBzbi5GaWxlRmxvYXRMaXN0UmVtb3ZlKEtleU5hbWUsIHZhbHVlLCBhbGxJbnN0YW5jZXMpO1xyXG59O1xyXG5leHBvcnQgdmFyIEZpbGVTdHJpbmdMaXN0UmVtb3ZlID0gZnVuY3Rpb24gKEtleU5hbWUsIHZhbHVlLCBhbGxJbnN0YW5jZXMpIHtcclxuICAgIGlmIChhbGxJbnN0YW5jZXMgPT09IHZvaWQgMCkgeyBhbGxJbnN0YW5jZXMgPSBmYWxzZTsgfVxyXG4gICAgcmV0dXJuIHNuLkZpbGVTdHJpbmdMaXN0UmVtb3ZlKEtleU5hbWUsIHZhbHVlLCBhbGxJbnN0YW5jZXMpO1xyXG59O1xyXG5leHBvcnQgdmFyIEZpbGVGb3JtTGlzdFJlbW92ZSA9IGZ1bmN0aW9uIChLZXlOYW1lLCB2YWx1ZSwgYWxsSW5zdGFuY2VzKSB7XHJcbiAgICBpZiAoYWxsSW5zdGFuY2VzID09PSB2b2lkIDApIHsgYWxsSW5zdGFuY2VzID0gZmFsc2U7IH1cclxuICAgIHJldHVybiBzbi5GaWxlRm9ybUxpc3RSZW1vdmUoS2V5TmFtZSwgdmFsdWUsIGFsbEluc3RhbmNlcyk7XHJcbn07XHJcbmV4cG9ydCB2YXIgRmlsZUludExpc3RHZXQgPSBmdW5jdGlvbiAoS2V5TmFtZSwgaW5kZXgpIHsgcmV0dXJuIHNuLkZpbGVJbnRMaXN0R2V0KEtleU5hbWUsIGluZGV4KTsgfTtcclxuZXhwb3J0IHZhciBGaWxlRmxvYXRMaXN0R2V0ID0gZnVuY3Rpb24gKEtleU5hbWUsIGluZGV4KSB7IHJldHVybiBzbi5GaWxlRmxvYXRMaXN0R2V0KEtleU5hbWUsIGluZGV4KTsgfTtcclxuZXhwb3J0IHZhciBGaWxlU3RyaW5nTGlzdEdldCA9IGZ1bmN0aW9uIChLZXlOYW1lLCBpbmRleCkgeyByZXR1cm4gc24uRmlsZVN0cmluZ0xpc3RHZXQoS2V5TmFtZSwgaW5kZXgpOyB9O1xyXG5leHBvcnQgdmFyIEZpbGVGb3JtTGlzdEdldCA9IGZ1bmN0aW9uIChLZXlOYW1lLCBpbmRleCkgeyByZXR1cm4gc24uRmlsZUZvcm1MaXN0R2V0KEtleU5hbWUsIGluZGV4KTsgfTtcclxuZXhwb3J0IHZhciBGaWxlSW50TGlzdFNldCA9IGZ1bmN0aW9uIChLZXlOYW1lLCBpbmRleCwgdmFsdWUpIHsgcmV0dXJuIHNuLkZpbGVJbnRMaXN0U2V0KEtleU5hbWUsIGluZGV4LCB2YWx1ZSk7IH07XHJcbmV4cG9ydCB2YXIgRmlsZUZsb2F0TGlzdFNldCA9IGZ1bmN0aW9uIChLZXlOYW1lLCBpbmRleCwgdmFsdWUpIHsgcmV0dXJuIHNuLkZpbGVGbG9hdExpc3RTZXQoS2V5TmFtZSwgaW5kZXgsIHZhbHVlKTsgfTtcclxuZXhwb3J0IHZhciBGaWxlU3RyaW5nTGlzdFNldCA9IGZ1bmN0aW9uIChLZXlOYW1lLCBpbmRleCwgdmFsdWUpIHsgcmV0dXJuIHNuLkZpbGVTdHJpbmdMaXN0U2V0KEtleU5hbWUsIGluZGV4LCB2YWx1ZSk7IH07XHJcbmV4cG9ydCB2YXIgRmlsZUZvcm1MaXN0U2V0ID0gZnVuY3Rpb24gKEtleU5hbWUsIGluZGV4LCB2YWx1ZSkgeyByZXR1cm4gc24uRmlsZUZvcm1MaXN0U2V0KEtleU5hbWUsIGluZGV4LCB2YWx1ZSk7IH07XHJcbmV4cG9ydCB2YXIgRmlsZUludExpc3RDbGVhciA9IGZ1bmN0aW9uIChLZXlOYW1lKSB7IHJldHVybiBzbi5GaWxlSW50TGlzdENsZWFyKEtleU5hbWUpOyB9O1xyXG5leHBvcnQgdmFyIEZpbGVGbG9hdExpc3RDbGVhciA9IGZ1bmN0aW9uIChLZXlOYW1lKSB7IHJldHVybiBzbi5GaWxlRmxvYXRMaXN0Q2xlYXIoS2V5TmFtZSk7IH07XHJcbmV4cG9ydCB2YXIgRmlsZVN0cmluZ0xpc3RDbGVhciA9IGZ1bmN0aW9uIChLZXlOYW1lKSB7IHJldHVybiBzbi5GaWxlU3RyaW5nTGlzdENsZWFyKEtleU5hbWUpOyB9O1xyXG5leHBvcnQgdmFyIEZpbGVGb3JtTGlzdENsZWFyID0gZnVuY3Rpb24gKEtleU5hbWUpIHsgcmV0dXJuIHNuLkZpbGVGb3JtTGlzdENsZWFyKEtleU5hbWUpOyB9O1xyXG5leHBvcnQgdmFyIEZpbGVJbnRMaXN0UmVtb3ZlQXQgPSBmdW5jdGlvbiAoS2V5TmFtZSwgaW5kZXgpIHsgcmV0dXJuIHNuLkZpbGVJbnRMaXN0UmVtb3ZlQXQoS2V5TmFtZSwgaW5kZXgpOyB9O1xyXG5leHBvcnQgdmFyIEZpbGVGbG9hdExpc3RSZW1vdmVBdCA9IGZ1bmN0aW9uIChLZXlOYW1lLCBpbmRleCkgeyByZXR1cm4gc24uRmlsZUZsb2F0TGlzdFJlbW92ZUF0KEtleU5hbWUsIGluZGV4KTsgfTtcclxuZXhwb3J0IHZhciBGaWxlU3RyaW5nTGlzdFJlbW92ZUF0ID0gZnVuY3Rpb24gKEtleU5hbWUsIGluZGV4KSB7IHJldHVybiBzbi5GaWxlU3RyaW5nTGlzdFJlbW92ZUF0KEtleU5hbWUsIGluZGV4KTsgfTtcclxuZXhwb3J0IHZhciBGaWxlRm9ybUxpc3RSZW1vdmVBdCA9IGZ1bmN0aW9uIChLZXlOYW1lLCBpbmRleCkgeyByZXR1cm4gc24uRmlsZUZvcm1MaXN0UmVtb3ZlQXQoS2V5TmFtZSwgaW5kZXgpOyB9O1xyXG5leHBvcnQgdmFyIEZpbGVJbnRMaXN0SW5zZXJ0ID0gZnVuY3Rpb24gKEtleU5hbWUsIGluZGV4LCB2YWx1ZSkgeyByZXR1cm4gc24uRmlsZUludExpc3RJbnNlcnQoS2V5TmFtZSwgaW5kZXgsIHZhbHVlKTsgfTtcclxuZXhwb3J0IHZhciBGaWxlRmxvYXRMaXN0SW5zZXJ0ID0gZnVuY3Rpb24gKEtleU5hbWUsIGluZGV4LCB2YWx1ZSkgeyByZXR1cm4gc24uRmlsZUZsb2F0TGlzdEluc2VydChLZXlOYW1lLCBpbmRleCwgdmFsdWUpOyB9O1xyXG5leHBvcnQgdmFyIEZpbGVTdHJpbmdMaXN0SW5zZXJ0ID0gZnVuY3Rpb24gKEtleU5hbWUsIGluZGV4LCB2YWx1ZSkgeyByZXR1cm4gc24uRmlsZVN0cmluZ0xpc3RJbnNlcnQoS2V5TmFtZSwgaW5kZXgsIHZhbHVlKTsgfTtcclxuZXhwb3J0IHZhciBGaWxlRm9ybUxpc3RJbnNlcnQgPSBmdW5jdGlvbiAoS2V5TmFtZSwgaW5kZXgsIHZhbHVlKSB7IHJldHVybiBzbi5GaWxlRm9ybUxpc3RJbnNlcnQoS2V5TmFtZSwgaW5kZXgsIHZhbHVlKTsgfTtcclxuZXhwb3J0IHZhciBGaWxlSW50TGlzdENvdW50ID0gZnVuY3Rpb24gKEtleU5hbWUpIHsgcmV0dXJuIHNuLkZpbGVJbnRMaXN0Q291bnQoS2V5TmFtZSk7IH07XHJcbmV4cG9ydCB2YXIgRmlsZUZsb2F0TGlzdENvdW50ID0gZnVuY3Rpb24gKEtleU5hbWUpIHsgcmV0dXJuIHNuLkZpbGVGbG9hdExpc3RDb3VudChLZXlOYW1lKTsgfTtcclxuZXhwb3J0IHZhciBGaWxlU3RyaW5nTGlzdENvdW50ID0gZnVuY3Rpb24gKEtleU5hbWUpIHsgcmV0dXJuIHNuLkZpbGVTdHJpbmdMaXN0Q291bnQoS2V5TmFtZSk7IH07XHJcbmV4cG9ydCB2YXIgRmlsZUZvcm1MaXN0Q291bnQgPSBmdW5jdGlvbiAoS2V5TmFtZSkgeyByZXR1cm4gc24uRmlsZUZvcm1MaXN0Q291bnQoS2V5TmFtZSk7IH07XHJcbmV4cG9ydCB2YXIgRmlsZUludExpc3RGaW5kID0gZnVuY3Rpb24gKEtleU5hbWUsIHZhbHVlKSB7IHJldHVybiBzbi5GaWxlSW50TGlzdEZpbmQoS2V5TmFtZSwgdmFsdWUpOyB9O1xyXG5leHBvcnQgdmFyIEZpbGVGbG9hdExpc3RGaW5kID0gZnVuY3Rpb24gKEtleU5hbWUsIHZhbHVlKSB7IHJldHVybiBzbi5GaWxlRmxvYXRMaXN0RmluZChLZXlOYW1lLCB2YWx1ZSk7IH07XHJcbmV4cG9ydCB2YXIgRmlsZVN0cmluZ0xpc3RGaW5kID0gZnVuY3Rpb24gKEtleU5hbWUsIHZhbHVlKSB7IHJldHVybiBzbi5GaWxlU3RyaW5nTGlzdEZpbmQoS2V5TmFtZSwgdmFsdWUpOyB9O1xyXG5leHBvcnQgdmFyIEZpbGVGb3JtTGlzdEZpbmQgPSBmdW5jdGlvbiAoS2V5TmFtZSwgdmFsdWUpIHsgcmV0dXJuIHNuLkZpbGVGb3JtTGlzdEZpbmQoS2V5TmFtZSwgdmFsdWUpOyB9O1xyXG5leHBvcnQgdmFyIEZpbGVJbnRMaXN0SGFzID0gZnVuY3Rpb24gKEtleU5hbWUsIHZhbHVlKSB7IHJldHVybiBzbi5GaWxlSW50TGlzdEhhcyhLZXlOYW1lLCB2YWx1ZSk7IH07XHJcbmV4cG9ydCB2YXIgRmlsZUZsb2F0TGlzdEhhcyA9IGZ1bmN0aW9uIChLZXlOYW1lLCB2YWx1ZSkgeyByZXR1cm4gc24uRmlsZUZsb2F0TGlzdEhhcyhLZXlOYW1lLCB2YWx1ZSk7IH07XHJcbmV4cG9ydCB2YXIgRmlsZVN0cmluZ0xpc3RIYXMgPSBmdW5jdGlvbiAoS2V5TmFtZSwgdmFsdWUpIHsgcmV0dXJuIHNuLkZpbGVTdHJpbmdMaXN0SGFzKEtleU5hbWUsIHZhbHVlKTsgfTtcclxuZXhwb3J0IHZhciBGaWxlRm9ybUxpc3RIYXMgPSBmdW5jdGlvbiAoS2V5TmFtZSwgdmFsdWUpIHsgcmV0dXJuIHNuLkZpbGVGb3JtTGlzdEhhcyhLZXlOYW1lLCB2YWx1ZSk7IH07XHJcbmV4cG9ydCB2YXIgRmlsZUludExpc3RTbGljZSA9IGZ1bmN0aW9uIChLZXlOYW1lLCBzbGljZSwgc3RhcnRJbmRleCkge1xyXG4gICAgaWYgKHN0YXJ0SW5kZXggPT09IHZvaWQgMCkgeyBzdGFydEluZGV4ID0gMDsgfVxyXG4gICAgcmV0dXJuIHNuLkZpbGVJbnRMaXN0U2xpY2UoS2V5TmFtZSwgc2xpY2UsIHN0YXJ0SW5kZXgpO1xyXG59O1xyXG5leHBvcnQgdmFyIEZpbGVGbG9hdExpc3RTbGljZSA9IGZ1bmN0aW9uIChLZXlOYW1lLCBzbGljZSwgc3RhcnRJbmRleCkge1xyXG4gICAgaWYgKHN0YXJ0SW5kZXggPT09IHZvaWQgMCkgeyBzdGFydEluZGV4ID0gMDsgfVxyXG4gICAgcmV0dXJuIHNuLkZpbGVGbG9hdExpc3RTbGljZShLZXlOYW1lLCBzbGljZSwgc3RhcnRJbmRleCk7XHJcbn07XHJcbmV4cG9ydCB2YXIgRmlsZVN0cmluZ0xpc3RTbGljZSA9IGZ1bmN0aW9uIChLZXlOYW1lLCBzbGljZSwgc3RhcnRJbmRleCkge1xyXG4gICAgaWYgKHN0YXJ0SW5kZXggPT09IHZvaWQgMCkgeyBzdGFydEluZGV4ID0gMDsgfVxyXG4gICAgcmV0dXJuIHNuLkZpbGVTdHJpbmdMaXN0U2xpY2UoS2V5TmFtZSwgc2xpY2UsIHN0YXJ0SW5kZXgpO1xyXG59O1xyXG5leHBvcnQgdmFyIEZpbGVGb3JtTGlzdFNsaWNlID0gZnVuY3Rpb24gKEtleU5hbWUsIHNsaWNlLCBzdGFydEluZGV4KSB7XHJcbiAgICBpZiAoc3RhcnRJbmRleCA9PT0gdm9pZCAwKSB7IHN0YXJ0SW5kZXggPSAwOyB9XHJcbiAgICByZXR1cm4gc24uRmlsZUZvcm1MaXN0U2xpY2UoS2V5TmFtZSwgc2xpY2UsIHN0YXJ0SW5kZXgpO1xyXG59O1xyXG5leHBvcnQgdmFyIEZpbGVJbnRMaXN0UmVzaXplID0gZnVuY3Rpb24gKEtleU5hbWUsIHRvTGVuZ3RoLCBmaWxsZXIpIHtcclxuICAgIGlmIChmaWxsZXIgPT09IHZvaWQgMCkgeyBmaWxsZXIgPSAwOyB9XHJcbiAgICByZXR1cm4gc24uRmlsZUludExpc3RSZXNpemUoS2V5TmFtZSwgdG9MZW5ndGgsIGZpbGxlcik7XHJcbn07XHJcbmV4cG9ydCB2YXIgRmlsZUZsb2F0TGlzdFJlc2l6ZSA9IGZ1bmN0aW9uIChLZXlOYW1lLCB0b0xlbmd0aCwgZmlsbGVyKSB7XHJcbiAgICBpZiAoZmlsbGVyID09PSB2b2lkIDApIHsgZmlsbGVyID0gMC4wOyB9XHJcbiAgICByZXR1cm4gc24uRmlsZUZsb2F0TGlzdFJlc2l6ZShLZXlOYW1lLCB0b0xlbmd0aCwgZmlsbGVyKTtcclxufTtcclxuZXhwb3J0IHZhciBGaWxlU3RyaW5nTGlzdFJlc2l6ZSA9IGZ1bmN0aW9uIChLZXlOYW1lLCB0b0xlbmd0aCwgZmlsbGVyKSB7XHJcbiAgICBpZiAoZmlsbGVyID09PSB2b2lkIDApIHsgZmlsbGVyID0gXCJcIjsgfVxyXG4gICAgcmV0dXJuIHNuLkZpbGVTdHJpbmdMaXN0UmVzaXplKEtleU5hbWUsIHRvTGVuZ3RoLCBmaWxsZXIpO1xyXG59O1xyXG5leHBvcnQgdmFyIEZpbGVGb3JtTGlzdFJlc2l6ZSA9IGZ1bmN0aW9uIChLZXlOYW1lLCB0b0xlbmd0aCwgZmlsbGVyKSB7XHJcbiAgICBpZiAoZmlsbGVyID09PSB2b2lkIDApIHsgZmlsbGVyID0gbnVsbDsgfVxyXG4gICAgcmV0dXJuIHNuLkZpbGVGb3JtTGlzdFJlc2l6ZShLZXlOYW1lLCB0b0xlbmd0aCwgZmlsbGVyKTtcclxufTtcclxuZXhwb3J0IHZhciBGaWxlSW50TGlzdENvcHkgPSBmdW5jdGlvbiAoS2V5TmFtZSwgY29weSkgeyByZXR1cm4gc24uRmlsZUludExpc3RDb3B5KEtleU5hbWUsIGNvcHkpOyB9O1xyXG5leHBvcnQgdmFyIEZpbGVGbG9hdExpc3RDb3B5ID0gZnVuY3Rpb24gKEtleU5hbWUsIGNvcHkpIHsgcmV0dXJuIHNuLkZpbGVGbG9hdExpc3RDb3B5KEtleU5hbWUsIGNvcHkpOyB9O1xyXG5leHBvcnQgdmFyIEZpbGVTdHJpbmdMaXN0Q29weSA9IGZ1bmN0aW9uIChLZXlOYW1lLCBjb3B5KSB7IHJldHVybiBzbi5GaWxlU3RyaW5nTGlzdENvcHkoS2V5TmFtZSwgY29weSk7IH07XHJcbmV4cG9ydCB2YXIgRmlsZUZvcm1MaXN0Q29weSA9IGZ1bmN0aW9uIChLZXlOYW1lLCBjb3B5KSB7IHJldHVybiBzbi5GaWxlRm9ybUxpc3RDb3B5KEtleU5hbWUsIGNvcHkpOyB9O1xyXG5leHBvcnQgdmFyIGRlYnVnX1NhdmVGaWxlID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gc24uZGVidWdfU2F2ZUZpbGUoKTsgfTtcclxuLyoqIEN1cnJlbnRseSBubyBsb25nZXIgaW1wbGVtZW50ZWQsIHVua25vd24gaWYvd2hlbiB0aGV5IHdpbGwgcmV0dXJuLiAqL1xyXG5leHBvcnQgdmFyIGRlYnVnX0ZpbGVHZXRJbnRLZXlzQ291bnQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBzbi5kZWJ1Z19GaWxlR2V0SW50S2V5c0NvdW50KCk7IH07XHJcbjA7XHJcbmV4cG9ydCB2YXIgZGVidWdfRmlsZUdldEZsb2F0S2V5c0NvdW50ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gc24uZGVidWdfRmlsZUdldEZsb2F0S2V5c0NvdW50KCk7IH07XHJcbjA7XHJcbmV4cG9ydCB2YXIgZGVidWdfRmlsZUdldFN0cmluZ0tleXNDb3VudCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNuLmRlYnVnX0ZpbGVHZXRTdHJpbmdLZXlzQ291bnQoKTsgfTtcclxuMDtcclxuZXhwb3J0IHZhciBkZWJ1Z19GaWxlR2V0SW50TGlzdEtleXNDb3VudCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNuLmRlYnVnX0ZpbGVHZXRJbnRMaXN0S2V5c0NvdW50KCk7IH07XHJcbjA7XHJcbmV4cG9ydCB2YXIgZGVidWdfRmlsZUdldEZsb2F0TGlzdEtleXNDb3VudCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNuLmRlYnVnX0ZpbGVHZXRGbG9hdExpc3RLZXlzQ291bnQoKTsgfTtcclxuMDtcclxuZXhwb3J0IHZhciBkZWJ1Z19GaWxlR2V0U3RyaW5nTGlzdEtleXNDb3VudCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNuLmRlYnVnX0ZpbGVHZXRTdHJpbmdMaXN0S2V5c0NvdW50KCk7IH07XHJcbjA7XHJcbmV4cG9ydCB2YXIgZGVidWdfRmlsZUdldEludEtleSA9IGZ1bmN0aW9uIChpbmRleCkgeyByZXR1cm4gc24uZGVidWdfRmlsZUdldEludEtleShpbmRleCk7IH07XHJcblwiXCI7XHJcbmV4cG9ydCB2YXIgZGVidWdfRmlsZUdldEZsb2F0S2V5ID0gZnVuY3Rpb24gKGluZGV4KSB7IHJldHVybiBzbi5kZWJ1Z19GaWxlR2V0RmxvYXRLZXkoaW5kZXgpOyB9O1xyXG5cIlwiO1xyXG5leHBvcnQgdmFyIGRlYnVnX0ZpbGVHZXRTdHJpbmdLZXkgPSBmdW5jdGlvbiAoaW5kZXgpIHsgcmV0dXJuIHNuLmRlYnVnX0ZpbGVHZXRTdHJpbmdLZXkoaW5kZXgpOyB9O1xyXG5cIlwiO1xyXG5leHBvcnQgdmFyIGRlYnVnX0ZpbGVHZXRJbnRMaXN0S2V5ID0gZnVuY3Rpb24gKGluZGV4KSB7IHJldHVybiBzbi5kZWJ1Z19GaWxlR2V0SW50TGlzdEtleShpbmRleCk7IH07XHJcblwiXCI7XHJcbmV4cG9ydCB2YXIgZGVidWdfRmlsZUdldEZsb2F0TGlzdEtleSA9IGZ1bmN0aW9uIChpbmRleCkgeyByZXR1cm4gc24uZGVidWdfRmlsZUdldEZsb2F0TGlzdEtleShpbmRleCk7IH07XHJcblwiXCI7XHJcbmV4cG9ydCB2YXIgZGVidWdfRmlsZUdldFN0cmluZ0xpc3RLZXkgPSBmdW5jdGlvbiAoaW5kZXgpIHsgcmV0dXJuIHNuLmRlYnVnX0ZpbGVHZXRTdHJpbmdMaXN0S2V5KGluZGV4KTsgfTtcclxuXCJcIjtcclxuZXhwb3J0IHZhciBkZWJ1Z19GaWxlRGVsZXRlQWxsVmFsdWVzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gc24uZGVidWdfRmlsZURlbGV0ZUFsbFZhbHVlcygpOyB9O1xyXG5leHBvcnQgdmFyIGRlYnVnX1NldERlYnVnTW9kZSA9IGZ1bmN0aW9uIChlbmFibGVkKSB7IHJldHVybiBzbi5kZWJ1Z19TZXREZWJ1Z01vZGUoZW5hYmxlZCk7IH07XHJcbmV4cG9ydCB2YXIgSW1wb3J0RmlsZSA9IGZ1bmN0aW9uIChmaWxlTmFtZSwgcmVzdHJpY3RLZXksIHJlc3RyaWN0VHlwZSwgcmVzdHJpY3RGb3JtLCByZXN0cmljdEdsb2JhbCwga2V5Q29udGFpbnMpIHtcclxuICAgIGlmIChyZXN0cmljdEtleSA9PT0gdm9pZCAwKSB7IHJlc3RyaWN0S2V5ID0gXCJcIjsgfVxyXG4gICAgaWYgKHJlc3RyaWN0VHlwZSA9PT0gdm9pZCAwKSB7IHJlc3RyaWN0VHlwZSA9IC0xOyB9XHJcbiAgICBpZiAocmVzdHJpY3RGb3JtID09PSB2b2lkIDApIHsgcmVzdHJpY3RGb3JtID0gbnVsbDsgfVxyXG4gICAgaWYgKHJlc3RyaWN0R2xvYmFsID09PSB2b2lkIDApIHsgcmVzdHJpY3RHbG9iYWwgPSBmYWxzZTsgfVxyXG4gICAgaWYgKGtleUNvbnRhaW5zID09PSB2b2lkIDApIHsga2V5Q29udGFpbnMgPSBmYWxzZTsgfVxyXG4gICAgcmV0dXJuIHNuLkltcG9ydEZpbGUoZmlsZU5hbWUsIHJlc3RyaWN0S2V5LCByZXN0cmljdFR5cGUsIHJlc3RyaWN0Rm9ybSwgcmVzdHJpY3RHbG9iYWwsIGtleUNvbnRhaW5zKTtcclxufTtcclxuZmFsc2U7XHJcbmV4cG9ydCB2YXIgRXhwb3J0RmlsZSA9IGZ1bmN0aW9uIChmaWxlTmFtZSwgcmVzdHJpY3RLZXksIHJlc3RyaWN0VHlwZSwgcmVzdHJpY3RGb3JtLCByZXN0cmljdEdsb2JhbCwga2V5Q29udGFpbnMsIGFwcGVuZCkge1xyXG4gICAgaWYgKHJlc3RyaWN0S2V5ID09PSB2b2lkIDApIHsgcmVzdHJpY3RLZXkgPSBcIlwiOyB9XHJcbiAgICBpZiAocmVzdHJpY3RUeXBlID09PSB2b2lkIDApIHsgcmVzdHJpY3RUeXBlID0gLTE7IH1cclxuICAgIGlmIChyZXN0cmljdEZvcm0gPT09IHZvaWQgMCkgeyByZXN0cmljdEZvcm0gPSBudWxsOyB9XHJcbiAgICBpZiAocmVzdHJpY3RHbG9iYWwgPT09IHZvaWQgMCkgeyByZXN0cmljdEdsb2JhbCA9IGZhbHNlOyB9XHJcbiAgICBpZiAoa2V5Q29udGFpbnMgPT09IHZvaWQgMCkgeyBrZXlDb250YWlucyA9IGZhbHNlOyB9XHJcbiAgICBpZiAoYXBwZW5kID09PSB2b2lkIDApIHsgYXBwZW5kID0gdHJ1ZTsgfVxyXG4gICAgcmV0dXJuIHNuLkV4cG9ydEZpbGUoZmlsZU5hbWUsIHJlc3RyaWN0S2V5LCByZXN0cmljdFR5cGUsIHJlc3RyaWN0Rm9ybSwgcmVzdHJpY3RHbG9iYWwsIGtleUNvbnRhaW5zLCBhcHBlbmQpO1xyXG59O1xyXG5mYWxzZTtcclxuIiwiLypcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5UeXBlc2NyaXB0IGRlZmluaXRpb25zIGZvciB2NC4yXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcblRoaXMgZmlsZSB3YXMgYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgYnkgUGFweXJ1cy0yLVR5cGVzY3JpcHQuZXhlXHJcbmh0dHBzOi8vZ2l0aHViLmNvbS9DYXJsb3NMZXl2YUF5YWxhL1BhcHlydXMtMi1UeXBlc2NyaXB0XHJcblxyXG5UaGUgcHJvZ3JhbSBoYXMgbm8gd2F5IHRvIGtub3cgdGhlIGludGVudGlvbiBvZiB0aGUgaHVtYW5zIHRoYXQgbWFkZVxyXG50aGUgc2NyaXB0cywgc28gaXQncyBhbHdheXMgYWR2aXNhYmxlIHRvIG1hbnVhbGx5IGNoZWNrIGFsbCBnZW5lcmF0ZWRcclxuZmlsZXMgdG8gbWFrZSBzdXJlIGV2ZXJ5dGhpbmcgaXMgZGVjbGFyZWQgYXMgaXQgc2hvdWxkLlxyXG5cclxuVGFrZSBub3RlIHRoZSBwcm9ncmFtIGFzc3VtZXMgdGhpcyBzY3JpcHQgZXhpc3RzIGluIHNvbWUgc3ViZm9sZGVyXHJcbnRvIHRoZSBmb2xkZXIgd2hlcmUgYHNreXJpbVBsYXRmb3JtLnRzYCBpcyBmb3VuZCwgb3RoZXJ3aXNlIHlvdSdsbCBnZXRcclxuXCJDYW5ub3QgZmluZCBtb2R1bGUuLi5cIiB0eXBlIG9mIGVycm9ycy5cclxuXHJcbklmIHlvdSB3YW50IHRvIGhhdmUgdGhpcyBzY3JpcHQgaW4gc29tZSBvdGhlciBwbGFjZSwganVzdCBjaGFuZ2UgdGhlXHJcbnJlbGF0aXZlIHBhdGggb2YgZWFjaCBgaW1wb3J0YC5cclxuKi9cclxuaW1wb3J0ICogYXMgc3AgZnJvbSBcInNreXJpbVBsYXRmb3JtXCI7XHJcbnZhciBzbiA9IHNwLkpzb25VdGlsO1xyXG4vKiogTU9EIEFVVEhPUlMsIFJFQUQhXHJcblxyXG4gICAgVGhlc2UgZnVuY3Rpb25zIGFsbCB3b3JrIGluIGV4YWN0bHkgdGhlIHNhbWUgd2F5IGFzIHRoZWlyIFN0b3JhZ2VVdGlsLnBzYyBlcXVpdmFsZW50cy4gU2VlIHRoZW0gZm9yIHVzYWdlIGRvY3MuXHJcblxyXG4gICAgVGhlIGltcG9ydGFudCBkaWZmZXJlbmNlIGJldHdlZW4gdGhlc2UgZnVuY3Rpb25zIGFuZCB0aGUgb25lcyBvbiBTdG9yYWdlVXRpbC5wc2MsIGlzIHRoYXQgaW5zdGVhZCBvZiBnaXZpbmcgXCJGb3JtIE9iaktleVwiXHJcbiAgICBhcmd1bWVudCBmb3IgdGhlIGxvY2F0aW9uIHRvIHNhdmUgdGhlIGRhdGEsIHlvdSBnaXZlIGl0IGEgXCJzdHJpbmcgRmlsZU5hbWVcIiBhcmd1bWVudCwgcG9pbnRpbmcgdG8gYW4gZXh0ZXJuYWwgSlNPTiBmb3JtYXR0ZWQgZmlsZS5cclxuXHJcbiAgICBUaGVzZSBmaWxlcyB3aWxsIGJlIHNhdmVkL2xvYWRlZCBpbiBKU09OIGZvcm1hdCwgYW5kIHRoZSBzdGFydGluZyBsb2NhdGlvbiBmb3IgdGhlIGZpbGVzIHRvIHNhdmUvbG9hZCBmcm9tIGlzIGFzIGZvbGxvd3M6XHJcblxyXG4gICAgICAgIGRhdGEvc2tzZS9wbHVnaW5zL1N0b3JhZ2VVdGlsRGF0YS9cclxuXHJcblxyXG4gICAgU29tZSBpbXBvcnRhbnQgbm90ZXMgb24gdXNhZ2UgdG8ga2VlcCBpbiBtaW5kOlxyXG5cclxuICAgIC0gWW91IG1heSBzcGVjaWZpYyBhIGZvbGRlciBwYXRoIGluIHRoZSBmaWxlbmFtZSwgaS5lLiBcIi4uL015RGF0YS9jb25maWdcIiB3aWxsIHNhdmUgdG8gZGF0YS9za3NlL3BsdWdpbnMvTXlEYXRhL2NvbmZpZy5qc29uXHJcblxyXG4gICAgLSBJZiBub3QgZ2l2ZW4gaW4gdGhlIGZpbGVuYW1lIGFyZ3VtZW50LCB0aGUgZmlsZW5hbWUgd2lsbCBoYXZlIHRoZSBleHRlbnNpb24gLmpzb24gYXBwZW5kZWQgdG8gaXQgYXV0b21hdGljYWxseSB3aGVuIHVzZWQuXHJcblxyXG4gICAgLSBZb3UgZG8gbm90IG5lZWQgdG8gY2FsbCBMb2FkKCkgb3IgU2F2ZSgpIG1hbnVhbGx5IHVubGVzcyB5b3UgaGF2ZSBhIHNwZWNpZmljIG5lZWQgdG8uXHJcblxyXG4gICAgLSBXaGVuIHRoZSBwbGF5ZXIgc2F2ZXMgdGhlaXIgZ2FtZSBhbnkgbW9kaWZpZWQgZmlsZSB3aWxsIGJlIGF1dG9tYXRpY2FsbHkgc2F2ZWQsIHdyaXR0ZW4gdG8sIG9yIGNyZWF0ZWQgaWYgaXQgZG9lcyBub3QgZXhpc3QuXHJcblxyXG4gICAgLSBXaGVuIHRoZSBwbGF5ZXIgbG9hZHMgYW5vdGhlciBzYXZlIHdpdGhvdXQgc2F2aW5nIHRoZW1zZWx2ZXMgb3IgdGhlIFNhdmUoKSBmdW5jdGlvbiBoYXZpbmcgYmVlbiBtYW51YWxseSBjYWxsZWQgYnkgYSBzY3JpcHQsXHJcbiAgICAgIHRoZSBsb2FkZWQgZGF0YSB3aWxsIGJlIGRpc2NhcmRlZCBhbmQgcmV2ZXJ0IGJhY2sgdG8gd2hhdGV2ZXIgdGhlIGNvbnRlbnRzIG9mIHRoZSBjdXJyZW50IHNhdmVkIGZpbGUgYXJlLiAqL1xyXG5leHBvcnQgdmFyIExvYWQgPSBmdW5jdGlvbiAoRmlsZU5hbWUpIHsgcmV0dXJuIHNuLkxvYWQoRmlsZU5hbWUpOyB9O1xyXG5leHBvcnQgdmFyIFNhdmUgPSBmdW5jdGlvbiAoRmlsZU5hbWUsIG1pbmlmeSkge1xyXG4gICAgaWYgKG1pbmlmeSA9PT0gdm9pZCAwKSB7IG1pbmlmeSA9IGZhbHNlOyB9XHJcbiAgICByZXR1cm4gc24uU2F2ZShGaWxlTmFtZSwgbWluaWZ5KTtcclxufTtcclxuZXhwb3J0IHZhciBVbmxvYWQgPSBmdW5jdGlvbiAoRmlsZU5hbWUsIHNhdmVDaGFuZ2VzLCBtaW5pZnkpIHtcclxuICAgIGlmIChzYXZlQ2hhbmdlcyA9PT0gdm9pZCAwKSB7IHNhdmVDaGFuZ2VzID0gdHJ1ZTsgfVxyXG4gICAgaWYgKG1pbmlmeSA9PT0gdm9pZCAwKSB7IG1pbmlmeSA9IGZhbHNlOyB9XHJcbiAgICByZXR1cm4gc24uVW5sb2FkKEZpbGVOYW1lLCBzYXZlQ2hhbmdlcywgbWluaWZ5KTtcclxufTtcclxuLy8gQ2hlY2sgaWYgZ2l2ZW4gZmlsZSBoYXMgaGFkIGFueSBjaGFuZ2VzIHRvIGl0IHRoZXkgaGF2ZW4ndCB5ZXQgYmVlbiBzYXZlZFxyXG5leHBvcnQgdmFyIElzUGVuZGluZ1NhdmUgPSBmdW5jdGlvbiAoRmlsZU5hbWUpIHsgcmV0dXJuIHNuLklzUGVuZGluZ1NhdmUoRmlsZU5hbWUpOyB9O1xyXG4vLyBDaGVjayBpZiB0aGUgZ2l2ZW4gZmlsZSB3YXMgc3VjY2VzZnVsbHkgbG9hZGVkIGFuZCBoYXMgbm8ganNvbiBwYXJzZXIgZXJyb3JzXHJcbmV4cG9ydCB2YXIgSXNHb29kID0gZnVuY3Rpb24gKEZpbGVOYW1lKSB7IHJldHVybiBzbi5Jc0dvb2QoRmlsZU5hbWUpOyB9O1xyXG4vLyBHZXQgYSBmb3JtYXR0ZWQgZXJyb3Igc3RyaW5nIG9mIGFueSBqc29uIHBhcnNlciBlcnJvcnMgb24gYSBmaWxlLCByZXR1cm5zIGFzIGVtcHR5IHN0cmluZyBpZiBubyBlcnJvcnMuXHJcbmV4cG9ydCB2YXIgR2V0RXJyb3JzID0gZnVuY3Rpb24gKEZpbGVOYW1lKSB7IHJldHVybiBzbi5HZXRFcnJvcnMoRmlsZU5hbWUpOyB9O1xyXG4vLyBSZXR1cm5zIGEgbGlzdCBvZiBhbGwgZmlsZW5hbWVzIGluIGEgZ2l2ZW4gZm9sZGVyIHRoYXQgZW5kIGluIC5qc29uXHJcbmV4cG9ydCB2YXIgSnNvbkluRm9sZGVyID0gZnVuY3Rpb24gKGZvbGRlclBhdGgpIHsgcmV0dXJuIHNuLkpzb25JbkZvbGRlcihmb2xkZXJQYXRoKTsgfTtcclxuLy8gQ2hlY2sgaWYgYSBqc29uIGZpbGUgZXhpc3RzIG9yIG5vdFxyXG5leHBvcnQgdmFyIEpzb25FeGlzdHMgPSBmdW5jdGlvbiAoRmlsZU5hbWUpIHsgcmV0dXJuIHNuLkpzb25FeGlzdHMoRmlsZU5hbWUpOyB9O1xyXG4vLyBTZWUgU3RvcmFnZVV0aWwucHNjIGZvciBlcXVpdmFsZW50IGZ1bmN0aW9uIHVzYWdlIGluc3RydWN0aW9uc1xyXG5leHBvcnQgdmFyIFNldEludFZhbHVlID0gZnVuY3Rpb24gKEZpbGVOYW1lLCBLZXlOYW1lLCB2YWx1ZSkgeyByZXR1cm4gc24uU2V0SW50VmFsdWUoRmlsZU5hbWUsIEtleU5hbWUsIHZhbHVlKTsgfTtcclxuZXhwb3J0IHZhciBTZXRGbG9hdFZhbHVlID0gZnVuY3Rpb24gKEZpbGVOYW1lLCBLZXlOYW1lLCB2YWx1ZSkgeyByZXR1cm4gc24uU2V0RmxvYXRWYWx1ZShGaWxlTmFtZSwgS2V5TmFtZSwgdmFsdWUpOyB9O1xyXG5leHBvcnQgdmFyIFNldFN0cmluZ1ZhbHVlID0gZnVuY3Rpb24gKEZpbGVOYW1lLCBLZXlOYW1lLCB2YWx1ZSkgeyByZXR1cm4gc24uU2V0U3RyaW5nVmFsdWUoRmlsZU5hbWUsIEtleU5hbWUsIHZhbHVlKTsgfTtcclxuZXhwb3J0IHZhciBTZXRGb3JtVmFsdWUgPSBmdW5jdGlvbiAoRmlsZU5hbWUsIEtleU5hbWUsIHZhbHVlKSB7IHJldHVybiBzbi5TZXRGb3JtVmFsdWUoRmlsZU5hbWUsIEtleU5hbWUsIHZhbHVlKTsgfTtcclxuZXhwb3J0IHZhciBHZXRJbnRWYWx1ZSA9IGZ1bmN0aW9uIChGaWxlTmFtZSwgS2V5TmFtZSwgbWlzc2luZykge1xyXG4gICAgaWYgKG1pc3NpbmcgPT09IHZvaWQgMCkgeyBtaXNzaW5nID0gMDsgfVxyXG4gICAgcmV0dXJuIHNuLkdldEludFZhbHVlKEZpbGVOYW1lLCBLZXlOYW1lLCBtaXNzaW5nKTtcclxufTtcclxuZXhwb3J0IHZhciBHZXRGbG9hdFZhbHVlID0gZnVuY3Rpb24gKEZpbGVOYW1lLCBLZXlOYW1lLCBtaXNzaW5nKSB7XHJcbiAgICBpZiAobWlzc2luZyA9PT0gdm9pZCAwKSB7IG1pc3NpbmcgPSAwLjA7IH1cclxuICAgIHJldHVybiBzbi5HZXRGbG9hdFZhbHVlKEZpbGVOYW1lLCBLZXlOYW1lLCBtaXNzaW5nKTtcclxufTtcclxuZXhwb3J0IHZhciBHZXRTdHJpbmdWYWx1ZSA9IGZ1bmN0aW9uIChGaWxlTmFtZSwgS2V5TmFtZSwgbWlzc2luZykge1xyXG4gICAgaWYgKG1pc3NpbmcgPT09IHZvaWQgMCkgeyBtaXNzaW5nID0gXCJcIjsgfVxyXG4gICAgcmV0dXJuIHNuLkdldFN0cmluZ1ZhbHVlKEZpbGVOYW1lLCBLZXlOYW1lLCBtaXNzaW5nKTtcclxufTtcclxuZXhwb3J0IHZhciBHZXRGb3JtVmFsdWUgPSBmdW5jdGlvbiAoRmlsZU5hbWUsIEtleU5hbWUsIG1pc3NpbmcpIHtcclxuICAgIGlmIChtaXNzaW5nID09PSB2b2lkIDApIHsgbWlzc2luZyA9IG51bGw7IH1cclxuICAgIHJldHVybiBzbi5HZXRGb3JtVmFsdWUoRmlsZU5hbWUsIEtleU5hbWUsIG1pc3NpbmcpO1xyXG59O1xyXG5leHBvcnQgdmFyIFVuc2V0SW50VmFsdWUgPSBmdW5jdGlvbiAoRmlsZU5hbWUsIEtleU5hbWUpIHsgcmV0dXJuIHNuLlVuc2V0SW50VmFsdWUoRmlsZU5hbWUsIEtleU5hbWUpOyB9O1xyXG5leHBvcnQgdmFyIFVuc2V0RmxvYXRWYWx1ZSA9IGZ1bmN0aW9uIChGaWxlTmFtZSwgS2V5TmFtZSkgeyByZXR1cm4gc24uVW5zZXRGbG9hdFZhbHVlKEZpbGVOYW1lLCBLZXlOYW1lKTsgfTtcclxuZXhwb3J0IHZhciBVbnNldFN0cmluZ1ZhbHVlID0gZnVuY3Rpb24gKEZpbGVOYW1lLCBLZXlOYW1lKSB7IHJldHVybiBzbi5VbnNldFN0cmluZ1ZhbHVlKEZpbGVOYW1lLCBLZXlOYW1lKTsgfTtcclxuZXhwb3J0IHZhciBVbnNldEZvcm1WYWx1ZSA9IGZ1bmN0aW9uIChGaWxlTmFtZSwgS2V5TmFtZSkgeyByZXR1cm4gc24uVW5zZXRGb3JtVmFsdWUoRmlsZU5hbWUsIEtleU5hbWUpOyB9O1xyXG5leHBvcnQgdmFyIEhhc0ludFZhbHVlID0gZnVuY3Rpb24gKEZpbGVOYW1lLCBLZXlOYW1lKSB7IHJldHVybiBzbi5IYXNJbnRWYWx1ZShGaWxlTmFtZSwgS2V5TmFtZSk7IH07XHJcbmV4cG9ydCB2YXIgSGFzRmxvYXRWYWx1ZSA9IGZ1bmN0aW9uIChGaWxlTmFtZSwgS2V5TmFtZSkgeyByZXR1cm4gc24uSGFzRmxvYXRWYWx1ZShGaWxlTmFtZSwgS2V5TmFtZSk7IH07XHJcbmV4cG9ydCB2YXIgSGFzU3RyaW5nVmFsdWUgPSBmdW5jdGlvbiAoRmlsZU5hbWUsIEtleU5hbWUpIHsgcmV0dXJuIHNuLkhhc1N0cmluZ1ZhbHVlKEZpbGVOYW1lLCBLZXlOYW1lKTsgfTtcclxuZXhwb3J0IHZhciBIYXNGb3JtVmFsdWUgPSBmdW5jdGlvbiAoRmlsZU5hbWUsIEtleU5hbWUpIHsgcmV0dXJuIHNuLkhhc0Zvcm1WYWx1ZShGaWxlTmFtZSwgS2V5TmFtZSk7IH07XHJcbmV4cG9ydCB2YXIgSW50TGlzdEFkZCA9IGZ1bmN0aW9uIChGaWxlTmFtZSwgS2V5TmFtZSwgdmFsdWUsIGFsbG93RHVwbGljYXRlKSB7XHJcbiAgICBpZiAoYWxsb3dEdXBsaWNhdGUgPT09IHZvaWQgMCkgeyBhbGxvd0R1cGxpY2F0ZSA9IHRydWU7IH1cclxuICAgIHJldHVybiBzbi5JbnRMaXN0QWRkKEZpbGVOYW1lLCBLZXlOYW1lLCB2YWx1ZSwgYWxsb3dEdXBsaWNhdGUpO1xyXG59O1xyXG5leHBvcnQgdmFyIEZsb2F0TGlzdEFkZCA9IGZ1bmN0aW9uIChGaWxlTmFtZSwgS2V5TmFtZSwgdmFsdWUsIGFsbG93RHVwbGljYXRlKSB7XHJcbiAgICBpZiAoYWxsb3dEdXBsaWNhdGUgPT09IHZvaWQgMCkgeyBhbGxvd0R1cGxpY2F0ZSA9IHRydWU7IH1cclxuICAgIHJldHVybiBzbi5GbG9hdExpc3RBZGQoRmlsZU5hbWUsIEtleU5hbWUsIHZhbHVlLCBhbGxvd0R1cGxpY2F0ZSk7XHJcbn07XHJcbmV4cG9ydCB2YXIgU3RyaW5nTGlzdEFkZCA9IGZ1bmN0aW9uIChGaWxlTmFtZSwgS2V5TmFtZSwgdmFsdWUsIGFsbG93RHVwbGljYXRlKSB7XHJcbiAgICBpZiAoYWxsb3dEdXBsaWNhdGUgPT09IHZvaWQgMCkgeyBhbGxvd0R1cGxpY2F0ZSA9IHRydWU7IH1cclxuICAgIHJldHVybiBzbi5TdHJpbmdMaXN0QWRkKEZpbGVOYW1lLCBLZXlOYW1lLCB2YWx1ZSwgYWxsb3dEdXBsaWNhdGUpO1xyXG59O1xyXG5leHBvcnQgdmFyIEZvcm1MaXN0QWRkID0gZnVuY3Rpb24gKEZpbGVOYW1lLCBLZXlOYW1lLCB2YWx1ZSwgYWxsb3dEdXBsaWNhdGUpIHtcclxuICAgIGlmIChhbGxvd0R1cGxpY2F0ZSA9PT0gdm9pZCAwKSB7IGFsbG93RHVwbGljYXRlID0gdHJ1ZTsgfVxyXG4gICAgcmV0dXJuIHNuLkZvcm1MaXN0QWRkKEZpbGVOYW1lLCBLZXlOYW1lLCB2YWx1ZSwgYWxsb3dEdXBsaWNhdGUpO1xyXG59O1xyXG5leHBvcnQgdmFyIEludExpc3RHZXQgPSBmdW5jdGlvbiAoRmlsZU5hbWUsIEtleU5hbWUsIGluZGV4KSB7IHJldHVybiBzbi5JbnRMaXN0R2V0KEZpbGVOYW1lLCBLZXlOYW1lLCBpbmRleCk7IH07XHJcbmV4cG9ydCB2YXIgRmxvYXRMaXN0R2V0ID0gZnVuY3Rpb24gKEZpbGVOYW1lLCBLZXlOYW1lLCBpbmRleCkgeyByZXR1cm4gc24uRmxvYXRMaXN0R2V0KEZpbGVOYW1lLCBLZXlOYW1lLCBpbmRleCk7IH07XHJcbmV4cG9ydCB2YXIgU3RyaW5nTGlzdEdldCA9IGZ1bmN0aW9uIChGaWxlTmFtZSwgS2V5TmFtZSwgaW5kZXgpIHsgcmV0dXJuIHNuLlN0cmluZ0xpc3RHZXQoRmlsZU5hbWUsIEtleU5hbWUsIGluZGV4KTsgfTtcclxuZXhwb3J0IHZhciBGb3JtTGlzdEdldCA9IGZ1bmN0aW9uIChGaWxlTmFtZSwgS2V5TmFtZSwgaW5kZXgpIHsgcmV0dXJuIHNuLkZvcm1MaXN0R2V0KEZpbGVOYW1lLCBLZXlOYW1lLCBpbmRleCk7IH07XHJcbmV4cG9ydCB2YXIgSW50TGlzdFNldCA9IGZ1bmN0aW9uIChGaWxlTmFtZSwgS2V5TmFtZSwgaW5kZXgsIHZhbHVlKSB7IHJldHVybiBzbi5JbnRMaXN0U2V0KEZpbGVOYW1lLCBLZXlOYW1lLCBpbmRleCwgdmFsdWUpOyB9O1xyXG5leHBvcnQgdmFyIEZsb2F0TGlzdFNldCA9IGZ1bmN0aW9uIChGaWxlTmFtZSwgS2V5TmFtZSwgaW5kZXgsIHZhbHVlKSB7IHJldHVybiBzbi5GbG9hdExpc3RTZXQoRmlsZU5hbWUsIEtleU5hbWUsIGluZGV4LCB2YWx1ZSk7IH07XHJcbmV4cG9ydCB2YXIgU3RyaW5nTGlzdFNldCA9IGZ1bmN0aW9uIChGaWxlTmFtZSwgS2V5TmFtZSwgaW5kZXgsIHZhbHVlKSB7IHJldHVybiBzbi5TdHJpbmdMaXN0U2V0KEZpbGVOYW1lLCBLZXlOYW1lLCBpbmRleCwgdmFsdWUpOyB9O1xyXG5leHBvcnQgdmFyIEZvcm1MaXN0U2V0ID0gZnVuY3Rpb24gKEZpbGVOYW1lLCBLZXlOYW1lLCBpbmRleCwgdmFsdWUpIHsgcmV0dXJuIHNuLkZvcm1MaXN0U2V0KEZpbGVOYW1lLCBLZXlOYW1lLCBpbmRleCwgdmFsdWUpOyB9O1xyXG5leHBvcnQgdmFyIEludExpc3RSZW1vdmUgPSBmdW5jdGlvbiAoRmlsZU5hbWUsIEtleU5hbWUsIHZhbHVlLCBhbGxJbnN0YW5jZXMpIHtcclxuICAgIGlmIChhbGxJbnN0YW5jZXMgPT09IHZvaWQgMCkgeyBhbGxJbnN0YW5jZXMgPSB0cnVlOyB9XHJcbiAgICByZXR1cm4gc24uSW50TGlzdFJlbW92ZShGaWxlTmFtZSwgS2V5TmFtZSwgdmFsdWUsIGFsbEluc3RhbmNlcyk7XHJcbn07XHJcbmV4cG9ydCB2YXIgRmxvYXRMaXN0UmVtb3ZlID0gZnVuY3Rpb24gKEZpbGVOYW1lLCBLZXlOYW1lLCB2YWx1ZSwgYWxsSW5zdGFuY2VzKSB7XHJcbiAgICBpZiAoYWxsSW5zdGFuY2VzID09PSB2b2lkIDApIHsgYWxsSW5zdGFuY2VzID0gdHJ1ZTsgfVxyXG4gICAgcmV0dXJuIHNuLkZsb2F0TGlzdFJlbW92ZShGaWxlTmFtZSwgS2V5TmFtZSwgdmFsdWUsIGFsbEluc3RhbmNlcyk7XHJcbn07XHJcbmV4cG9ydCB2YXIgU3RyaW5nTGlzdFJlbW92ZSA9IGZ1bmN0aW9uIChGaWxlTmFtZSwgS2V5TmFtZSwgdmFsdWUsIGFsbEluc3RhbmNlcykge1xyXG4gICAgaWYgKGFsbEluc3RhbmNlcyA9PT0gdm9pZCAwKSB7IGFsbEluc3RhbmNlcyA9IHRydWU7IH1cclxuICAgIHJldHVybiBzbi5TdHJpbmdMaXN0UmVtb3ZlKEZpbGVOYW1lLCBLZXlOYW1lLCB2YWx1ZSwgYWxsSW5zdGFuY2VzKTtcclxufTtcclxuZXhwb3J0IHZhciBGb3JtTGlzdFJlbW92ZSA9IGZ1bmN0aW9uIChGaWxlTmFtZSwgS2V5TmFtZSwgdmFsdWUsIGFsbEluc3RhbmNlcykge1xyXG4gICAgaWYgKGFsbEluc3RhbmNlcyA9PT0gdm9pZCAwKSB7IGFsbEluc3RhbmNlcyA9IHRydWU7IH1cclxuICAgIHJldHVybiBzbi5Gb3JtTGlzdFJlbW92ZShGaWxlTmFtZSwgS2V5TmFtZSwgdmFsdWUsIGFsbEluc3RhbmNlcyk7XHJcbn07XHJcbmV4cG9ydCB2YXIgSW50TGlzdEluc2VydEF0ID0gZnVuY3Rpb24gKEZpbGVOYW1lLCBLZXlOYW1lLCBpbmRleCwgdmFsdWUpIHsgcmV0dXJuIHNuLkludExpc3RJbnNlcnRBdChGaWxlTmFtZSwgS2V5TmFtZSwgaW5kZXgsIHZhbHVlKTsgfTtcclxuZXhwb3J0IHZhciBGbG9hdExpc3RJbnNlcnRBdCA9IGZ1bmN0aW9uIChGaWxlTmFtZSwgS2V5TmFtZSwgaW5kZXgsIHZhbHVlKSB7IHJldHVybiBzbi5GbG9hdExpc3RJbnNlcnRBdChGaWxlTmFtZSwgS2V5TmFtZSwgaW5kZXgsIHZhbHVlKTsgfTtcclxuZXhwb3J0IHZhciBTdHJpbmdMaXN0SW5zZXJ0QXQgPSBmdW5jdGlvbiAoRmlsZU5hbWUsIEtleU5hbWUsIGluZGV4LCB2YWx1ZSkgeyByZXR1cm4gc24uU3RyaW5nTGlzdEluc2VydEF0KEZpbGVOYW1lLCBLZXlOYW1lLCBpbmRleCwgdmFsdWUpOyB9O1xyXG5leHBvcnQgdmFyIEZvcm1MaXN0SW5zZXJ0QXQgPSBmdW5jdGlvbiAoRmlsZU5hbWUsIEtleU5hbWUsIGluZGV4LCB2YWx1ZSkgeyByZXR1cm4gc24uRm9ybUxpc3RJbnNlcnRBdChGaWxlTmFtZSwgS2V5TmFtZSwgaW5kZXgsIHZhbHVlKTsgfTtcclxuZXhwb3J0IHZhciBJbnRMaXN0UmVtb3ZlQXQgPSBmdW5jdGlvbiAoRmlsZU5hbWUsIEtleU5hbWUsIGluZGV4KSB7IHJldHVybiBzbi5JbnRMaXN0UmVtb3ZlQXQoRmlsZU5hbWUsIEtleU5hbWUsIGluZGV4KTsgfTtcclxuZXhwb3J0IHZhciBGbG9hdExpc3RSZW1vdmVBdCA9IGZ1bmN0aW9uIChGaWxlTmFtZSwgS2V5TmFtZSwgaW5kZXgpIHsgcmV0dXJuIHNuLkZsb2F0TGlzdFJlbW92ZUF0KEZpbGVOYW1lLCBLZXlOYW1lLCBpbmRleCk7IH07XHJcbmV4cG9ydCB2YXIgU3RyaW5nTGlzdFJlbW92ZUF0ID0gZnVuY3Rpb24gKEZpbGVOYW1lLCBLZXlOYW1lLCBpbmRleCkgeyByZXR1cm4gc24uU3RyaW5nTGlzdFJlbW92ZUF0KEZpbGVOYW1lLCBLZXlOYW1lLCBpbmRleCk7IH07XHJcbmV4cG9ydCB2YXIgRm9ybUxpc3RSZW1vdmVBdCA9IGZ1bmN0aW9uIChGaWxlTmFtZSwgS2V5TmFtZSwgaW5kZXgpIHsgcmV0dXJuIHNuLkZvcm1MaXN0UmVtb3ZlQXQoRmlsZU5hbWUsIEtleU5hbWUsIGluZGV4KTsgfTtcclxuZXhwb3J0IHZhciBJbnRMaXN0Q2xlYXIgPSBmdW5jdGlvbiAoRmlsZU5hbWUsIEtleU5hbWUpIHsgcmV0dXJuIHNuLkludExpc3RDbGVhcihGaWxlTmFtZSwgS2V5TmFtZSk7IH07XHJcbmV4cG9ydCB2YXIgRmxvYXRMaXN0Q2xlYXIgPSBmdW5jdGlvbiAoRmlsZU5hbWUsIEtleU5hbWUpIHsgcmV0dXJuIHNuLkZsb2F0TGlzdENsZWFyKEZpbGVOYW1lLCBLZXlOYW1lKTsgfTtcclxuZXhwb3J0IHZhciBTdHJpbmdMaXN0Q2xlYXIgPSBmdW5jdGlvbiAoRmlsZU5hbWUsIEtleU5hbWUpIHsgcmV0dXJuIHNuLlN0cmluZ0xpc3RDbGVhcihGaWxlTmFtZSwgS2V5TmFtZSk7IH07XHJcbmV4cG9ydCB2YXIgRm9ybUxpc3RDbGVhciA9IGZ1bmN0aW9uIChGaWxlTmFtZSwgS2V5TmFtZSkgeyByZXR1cm4gc24uRm9ybUxpc3RDbGVhcihGaWxlTmFtZSwgS2V5TmFtZSk7IH07XHJcbmV4cG9ydCB2YXIgSW50TGlzdENvdW50ID0gZnVuY3Rpb24gKEZpbGVOYW1lLCBLZXlOYW1lKSB7IHJldHVybiBzbi5JbnRMaXN0Q291bnQoRmlsZU5hbWUsIEtleU5hbWUpOyB9O1xyXG5leHBvcnQgdmFyIEZsb2F0TGlzdENvdW50ID0gZnVuY3Rpb24gKEZpbGVOYW1lLCBLZXlOYW1lKSB7IHJldHVybiBzbi5GbG9hdExpc3RDb3VudChGaWxlTmFtZSwgS2V5TmFtZSk7IH07XHJcbmV4cG9ydCB2YXIgU3RyaW5nTGlzdENvdW50ID0gZnVuY3Rpb24gKEZpbGVOYW1lLCBLZXlOYW1lKSB7IHJldHVybiBzbi5TdHJpbmdMaXN0Q291bnQoRmlsZU5hbWUsIEtleU5hbWUpOyB9O1xyXG5leHBvcnQgdmFyIEZvcm1MaXN0Q291bnQgPSBmdW5jdGlvbiAoRmlsZU5hbWUsIEtleU5hbWUpIHsgcmV0dXJuIHNuLkZvcm1MaXN0Q291bnQoRmlsZU5hbWUsIEtleU5hbWUpOyB9O1xyXG5leHBvcnQgdmFyIEludExpc3RDb3VudFZhbHVlID0gZnVuY3Rpb24gKEZpbGVOYW1lLCBLZXlOYW1lLCB2YWx1ZSwgZXhjbHVkZSkge1xyXG4gICAgaWYgKGV4Y2x1ZGUgPT09IHZvaWQgMCkgeyBleGNsdWRlID0gZmFsc2U7IH1cclxuICAgIHJldHVybiBzbi5JbnRMaXN0Q291bnRWYWx1ZShGaWxlTmFtZSwgS2V5TmFtZSwgdmFsdWUsIGV4Y2x1ZGUpO1xyXG59O1xyXG5leHBvcnQgdmFyIEZsb2F0TGlzdENvdW50VmFsdWUgPSBmdW5jdGlvbiAoRmlsZU5hbWUsIEtleU5hbWUsIHZhbHVlLCBleGNsdWRlKSB7XHJcbiAgICBpZiAoZXhjbHVkZSA9PT0gdm9pZCAwKSB7IGV4Y2x1ZGUgPSBmYWxzZTsgfVxyXG4gICAgcmV0dXJuIHNuLkZsb2F0TGlzdENvdW50VmFsdWUoRmlsZU5hbWUsIEtleU5hbWUsIHZhbHVlLCBleGNsdWRlKTtcclxufTtcclxuZXhwb3J0IHZhciBTdHJpbmdMaXN0Q291bnRWYWx1ZSA9IGZ1bmN0aW9uIChGaWxlTmFtZSwgS2V5TmFtZSwgdmFsdWUsIGV4Y2x1ZGUpIHtcclxuICAgIGlmIChleGNsdWRlID09PSB2b2lkIDApIHsgZXhjbHVkZSA9IGZhbHNlOyB9XHJcbiAgICByZXR1cm4gc24uU3RyaW5nTGlzdENvdW50VmFsdWUoRmlsZU5hbWUsIEtleU5hbWUsIHZhbHVlLCBleGNsdWRlKTtcclxufTtcclxuZXhwb3J0IHZhciBGb3JtTGlzdENvdW50VmFsdWUgPSBmdW5jdGlvbiAoRmlsZU5hbWUsIEtleU5hbWUsIHZhbHVlLCBleGNsdWRlKSB7XHJcbiAgICBpZiAoZXhjbHVkZSA9PT0gdm9pZCAwKSB7IGV4Y2x1ZGUgPSBmYWxzZTsgfVxyXG4gICAgcmV0dXJuIHNuLkZvcm1MaXN0Q291bnRWYWx1ZShGaWxlTmFtZSwgS2V5TmFtZSwgdmFsdWUsIGV4Y2x1ZGUpO1xyXG59O1xyXG5leHBvcnQgdmFyIEludExpc3RGaW5kID0gZnVuY3Rpb24gKEZpbGVOYW1lLCBLZXlOYW1lLCB2YWx1ZSkgeyByZXR1cm4gc24uSW50TGlzdEZpbmQoRmlsZU5hbWUsIEtleU5hbWUsIHZhbHVlKTsgfTtcclxuZXhwb3J0IHZhciBGbG9hdExpc3RGaW5kID0gZnVuY3Rpb24gKEZpbGVOYW1lLCBLZXlOYW1lLCB2YWx1ZSkgeyByZXR1cm4gc24uRmxvYXRMaXN0RmluZChGaWxlTmFtZSwgS2V5TmFtZSwgdmFsdWUpOyB9O1xyXG5leHBvcnQgdmFyIFN0cmluZ0xpc3RGaW5kID0gZnVuY3Rpb24gKEZpbGVOYW1lLCBLZXlOYW1lLCB2YWx1ZSkgeyByZXR1cm4gc24uU3RyaW5nTGlzdEZpbmQoRmlsZU5hbWUsIEtleU5hbWUsIHZhbHVlKTsgfTtcclxuZXhwb3J0IHZhciBGb3JtTGlzdEZpbmQgPSBmdW5jdGlvbiAoRmlsZU5hbWUsIEtleU5hbWUsIHZhbHVlKSB7IHJldHVybiBzbi5Gb3JtTGlzdEZpbmQoRmlsZU5hbWUsIEtleU5hbWUsIHZhbHVlKTsgfTtcclxuZXhwb3J0IHZhciBJbnRMaXN0SGFzID0gZnVuY3Rpb24gKEZpbGVOYW1lLCBLZXlOYW1lLCB2YWx1ZSkgeyByZXR1cm4gc24uSW50TGlzdEhhcyhGaWxlTmFtZSwgS2V5TmFtZSwgdmFsdWUpOyB9O1xyXG5leHBvcnQgdmFyIEZsb2F0TGlzdEhhcyA9IGZ1bmN0aW9uIChGaWxlTmFtZSwgS2V5TmFtZSwgdmFsdWUpIHsgcmV0dXJuIHNuLkZsb2F0TGlzdEhhcyhGaWxlTmFtZSwgS2V5TmFtZSwgdmFsdWUpOyB9O1xyXG5leHBvcnQgdmFyIFN0cmluZ0xpc3RIYXMgPSBmdW5jdGlvbiAoRmlsZU5hbWUsIEtleU5hbWUsIHZhbHVlKSB7IHJldHVybiBzbi5TdHJpbmdMaXN0SGFzKEZpbGVOYW1lLCBLZXlOYW1lLCB2YWx1ZSk7IH07XHJcbmV4cG9ydCB2YXIgRm9ybUxpc3RIYXMgPSBmdW5jdGlvbiAoRmlsZU5hbWUsIEtleU5hbWUsIHZhbHVlKSB7IHJldHVybiBzbi5Gb3JtTGlzdEhhcyhGaWxlTmFtZSwgS2V5TmFtZSwgdmFsdWUpOyB9O1xyXG5leHBvcnQgdmFyIEludExpc3RTbGljZSA9IGZ1bmN0aW9uIChGaWxlTmFtZSwgS2V5TmFtZSwgc2xpY2UsIHN0YXJ0SW5kZXgpIHtcclxuICAgIGlmIChzdGFydEluZGV4ID09PSB2b2lkIDApIHsgc3RhcnRJbmRleCA9IDA7IH1cclxuICAgIHJldHVybiBzbi5JbnRMaXN0U2xpY2UoRmlsZU5hbWUsIEtleU5hbWUsIHNsaWNlLCBzdGFydEluZGV4KTtcclxufTtcclxuZXhwb3J0IHZhciBGbG9hdExpc3RTbGljZSA9IGZ1bmN0aW9uIChGaWxlTmFtZSwgS2V5TmFtZSwgc2xpY2UsIHN0YXJ0SW5kZXgpIHtcclxuICAgIGlmIChzdGFydEluZGV4ID09PSB2b2lkIDApIHsgc3RhcnRJbmRleCA9IDA7IH1cclxuICAgIHJldHVybiBzbi5GbG9hdExpc3RTbGljZShGaWxlTmFtZSwgS2V5TmFtZSwgc2xpY2UsIHN0YXJ0SW5kZXgpO1xyXG59O1xyXG5leHBvcnQgdmFyIFN0cmluZ0xpc3RTbGljZSA9IGZ1bmN0aW9uIChGaWxlTmFtZSwgS2V5TmFtZSwgc2xpY2UsIHN0YXJ0SW5kZXgpIHtcclxuICAgIGlmIChzdGFydEluZGV4ID09PSB2b2lkIDApIHsgc3RhcnRJbmRleCA9IDA7IH1cclxuICAgIHJldHVybiBzbi5TdHJpbmdMaXN0U2xpY2UoRmlsZU5hbWUsIEtleU5hbWUsIHNsaWNlLCBzdGFydEluZGV4KTtcclxufTtcclxuZXhwb3J0IHZhciBGb3JtTGlzdFNsaWNlID0gZnVuY3Rpb24gKEZpbGVOYW1lLCBLZXlOYW1lLCBzbGljZSwgc3RhcnRJbmRleCkge1xyXG4gICAgaWYgKHN0YXJ0SW5kZXggPT09IHZvaWQgMCkgeyBzdGFydEluZGV4ID0gMDsgfVxyXG4gICAgcmV0dXJuIHNuLkZvcm1MaXN0U2xpY2UoRmlsZU5hbWUsIEtleU5hbWUsIHNsaWNlLCBzdGFydEluZGV4KTtcclxufTtcclxuZXhwb3J0IHZhciBJbnRMaXN0UmVzaXplID0gZnVuY3Rpb24gKEZpbGVOYW1lLCBLZXlOYW1lLCB0b0xlbmd0aCwgZmlsbGVyKSB7XHJcbiAgICBpZiAoZmlsbGVyID09PSB2b2lkIDApIHsgZmlsbGVyID0gMDsgfVxyXG4gICAgcmV0dXJuIHNuLkludExpc3RSZXNpemUoRmlsZU5hbWUsIEtleU5hbWUsIHRvTGVuZ3RoLCBmaWxsZXIpO1xyXG59O1xyXG5leHBvcnQgdmFyIEZsb2F0TGlzdFJlc2l6ZSA9IGZ1bmN0aW9uIChGaWxlTmFtZSwgS2V5TmFtZSwgdG9MZW5ndGgsIGZpbGxlcikge1xyXG4gICAgaWYgKGZpbGxlciA9PT0gdm9pZCAwKSB7IGZpbGxlciA9IDAuMDsgfVxyXG4gICAgcmV0dXJuIHNuLkZsb2F0TGlzdFJlc2l6ZShGaWxlTmFtZSwgS2V5TmFtZSwgdG9MZW5ndGgsIGZpbGxlcik7XHJcbn07XHJcbmV4cG9ydCB2YXIgU3RyaW5nTGlzdFJlc2l6ZSA9IGZ1bmN0aW9uIChGaWxlTmFtZSwgS2V5TmFtZSwgdG9MZW5ndGgsIGZpbGxlcikge1xyXG4gICAgaWYgKGZpbGxlciA9PT0gdm9pZCAwKSB7IGZpbGxlciA9IFwiXCI7IH1cclxuICAgIHJldHVybiBzbi5TdHJpbmdMaXN0UmVzaXplKEZpbGVOYW1lLCBLZXlOYW1lLCB0b0xlbmd0aCwgZmlsbGVyKTtcclxufTtcclxuZXhwb3J0IHZhciBGb3JtTGlzdFJlc2l6ZSA9IGZ1bmN0aW9uIChGaWxlTmFtZSwgS2V5TmFtZSwgdG9MZW5ndGgsIGZpbGxlcikge1xyXG4gICAgaWYgKGZpbGxlciA9PT0gdm9pZCAwKSB7IGZpbGxlciA9IG51bGw7IH1cclxuICAgIHJldHVybiBzbi5Gb3JtTGlzdFJlc2l6ZShGaWxlTmFtZSwgS2V5TmFtZSwgdG9MZW5ndGgsIGZpbGxlcik7XHJcbn07XHJcbmV4cG9ydCB2YXIgSW50TGlzdENvcHkgPSBmdW5jdGlvbiAoRmlsZU5hbWUsIEtleU5hbWUsIGNvcHkpIHsgcmV0dXJuIHNuLkludExpc3RDb3B5KEZpbGVOYW1lLCBLZXlOYW1lLCBjb3B5KTsgfTtcclxuZXhwb3J0IHZhciBGbG9hdExpc3RDb3B5ID0gZnVuY3Rpb24gKEZpbGVOYW1lLCBLZXlOYW1lLCBjb3B5KSB7IHJldHVybiBzbi5GbG9hdExpc3RDb3B5KEZpbGVOYW1lLCBLZXlOYW1lLCBjb3B5KTsgfTtcclxuZXhwb3J0IHZhciBTdHJpbmdMaXN0Q29weSA9IGZ1bmN0aW9uIChGaWxlTmFtZSwgS2V5TmFtZSwgY29weSkgeyByZXR1cm4gc24uU3RyaW5nTGlzdENvcHkoRmlsZU5hbWUsIEtleU5hbWUsIGNvcHkpOyB9O1xyXG5leHBvcnQgdmFyIEZvcm1MaXN0Q29weSA9IGZ1bmN0aW9uIChGaWxlTmFtZSwgS2V5TmFtZSwgY29weSkgeyByZXR1cm4gc24uRm9ybUxpc3RDb3B5KEZpbGVOYW1lLCBLZXlOYW1lLCBjb3B5KTsgfTtcclxuZXhwb3J0IHZhciBJbnRMaXN0VG9BcnJheSA9IGZ1bmN0aW9uIChGaWxlTmFtZSwgS2V5TmFtZSkgeyByZXR1cm4gc24uSW50TGlzdFRvQXJyYXkoRmlsZU5hbWUsIEtleU5hbWUpOyB9O1xyXG5leHBvcnQgdmFyIEZsb2F0TGlzdFRvQXJyYXkgPSBmdW5jdGlvbiAoRmlsZU5hbWUsIEtleU5hbWUpIHsgcmV0dXJuIHNuLkZsb2F0TGlzdFRvQXJyYXkoRmlsZU5hbWUsIEtleU5hbWUpOyB9O1xyXG5leHBvcnQgdmFyIFN0cmluZ0xpc3RUb0FycmF5ID0gZnVuY3Rpb24gKEZpbGVOYW1lLCBLZXlOYW1lKSB7IHJldHVybiBzbi5TdHJpbmdMaXN0VG9BcnJheShGaWxlTmFtZSwgS2V5TmFtZSk7IH07XHJcbmV4cG9ydCB2YXIgRm9ybUxpc3RUb0FycmF5ID0gZnVuY3Rpb24gKEZpbGVOYW1lLCBLZXlOYW1lKSB7IHJldHVybiBzbi5Gb3JtTGlzdFRvQXJyYXkoRmlsZU5hbWUsIEtleU5hbWUpOyB9O1xyXG5leHBvcnQgdmFyIEFkanVzdEludFZhbHVlID0gZnVuY3Rpb24gKEZpbGVOYW1lLCBLZXlOYW1lLCBhbW91bnQpIHsgcmV0dXJuIHNuLkFkanVzdEludFZhbHVlKEZpbGVOYW1lLCBLZXlOYW1lLCBhbW91bnQpOyB9O1xyXG5leHBvcnQgdmFyIEFkanVzdEZsb2F0VmFsdWUgPSBmdW5jdGlvbiAoRmlsZU5hbWUsIEtleU5hbWUsIGFtb3VudCkgeyByZXR1cm4gc24uQWRqdXN0RmxvYXRWYWx1ZShGaWxlTmFtZSwgS2V5TmFtZSwgYW1vdW50KTsgfTtcclxuZXhwb3J0IHZhciBJbnRMaXN0QWRqdXN0ID0gZnVuY3Rpb24gKEZpbGVOYW1lLCBLZXlOYW1lLCBpbmRleCwgYW1vdW50KSB7IHJldHVybiBzbi5JbnRMaXN0QWRqdXN0KEZpbGVOYW1lLCBLZXlOYW1lLCBpbmRleCwgYW1vdW50KTsgfTtcclxuZXhwb3J0IHZhciBGbG9hdExpc3RBZGp1c3QgPSBmdW5jdGlvbiAoRmlsZU5hbWUsIEtleU5hbWUsIGluZGV4LCBhbW91bnQpIHsgcmV0dXJuIHNuLkZsb2F0TGlzdEFkanVzdChGaWxlTmFtZSwgS2V5TmFtZSwgaW5kZXgsIGFtb3VudCk7IH07XHJcbmV4cG9ydCB2YXIgQ291bnRJbnRWYWx1ZVByZWZpeCA9IGZ1bmN0aW9uIChGaWxlTmFtZSwgUHJlZml4S2V5KSB7IHJldHVybiBzbi5Db3VudEludFZhbHVlUHJlZml4KEZpbGVOYW1lLCBQcmVmaXhLZXkpOyB9O1xyXG5leHBvcnQgdmFyIENvdW50RmxvYXRWYWx1ZVByZWZpeCA9IGZ1bmN0aW9uIChGaWxlTmFtZSwgUHJlZml4S2V5KSB7IHJldHVybiBzbi5Db3VudEZsb2F0VmFsdWVQcmVmaXgoRmlsZU5hbWUsIFByZWZpeEtleSk7IH07XHJcbmV4cG9ydCB2YXIgQ291bnRTdHJpbmdWYWx1ZVByZWZpeCA9IGZ1bmN0aW9uIChGaWxlTmFtZSwgUHJlZml4S2V5KSB7IHJldHVybiBzbi5Db3VudFN0cmluZ1ZhbHVlUHJlZml4KEZpbGVOYW1lLCBQcmVmaXhLZXkpOyB9O1xyXG5leHBvcnQgdmFyIENvdW50Rm9ybVZhbHVlUHJlZml4ID0gZnVuY3Rpb24gKEZpbGVOYW1lLCBQcmVmaXhLZXkpIHsgcmV0dXJuIHNuLkNvdW50Rm9ybVZhbHVlUHJlZml4KEZpbGVOYW1lLCBQcmVmaXhLZXkpOyB9O1xyXG5leHBvcnQgdmFyIENvdW50SW50TGlzdFByZWZpeCA9IGZ1bmN0aW9uIChGaWxlTmFtZSwgUHJlZml4S2V5KSB7IHJldHVybiBzbi5Db3VudEludExpc3RQcmVmaXgoRmlsZU5hbWUsIFByZWZpeEtleSk7IH07XHJcbmV4cG9ydCB2YXIgQ291bnRGbG9hdExpc3RQcmVmaXggPSBmdW5jdGlvbiAoRmlsZU5hbWUsIFByZWZpeEtleSkgeyByZXR1cm4gc24uQ291bnRGbG9hdExpc3RQcmVmaXgoRmlsZU5hbWUsIFByZWZpeEtleSk7IH07XHJcbmV4cG9ydCB2YXIgQ291bnRTdHJpbmdMaXN0UHJlZml4ID0gZnVuY3Rpb24gKEZpbGVOYW1lLCBQcmVmaXhLZXkpIHsgcmV0dXJuIHNuLkNvdW50U3RyaW5nTGlzdFByZWZpeChGaWxlTmFtZSwgUHJlZml4S2V5KTsgfTtcclxuZXhwb3J0IHZhciBDb3VudEZvcm1MaXN0UHJlZml4ID0gZnVuY3Rpb24gKEZpbGVOYW1lLCBQcmVmaXhLZXkpIHsgcmV0dXJuIHNuLkNvdW50Rm9ybUxpc3RQcmVmaXgoRmlsZU5hbWUsIFByZWZpeEtleSk7IH07XHJcbmV4cG9ydCB2YXIgQ291bnRBbGxQcmVmaXggPSBmdW5jdGlvbiAoRmlsZU5hbWUsIFByZWZpeEtleSkgeyByZXR1cm4gc24uQ291bnRBbGxQcmVmaXgoRmlsZU5hbWUsIFByZWZpeEtleSk7IH07XHJcbi8vIEV4cGVyaW1lbnRhbCBjdXN0b20ganNvbiBmb3JtYXR0aW5nIGhhbmRsZXJzLiBQYXRocyBhcmUgcmVzb2x2ZWQgdXNpbmcgdHlwaWNhbCBqc29uIHN5bnRheC5cclxuLy8gVGhlIHBhdGggd2lsbCBiZSBjcmVhdGVkIGFzIG5lY2Vzc2FyeSB3aGVuIHNldHRpbmcgZGF0YSBhbmQgdGhlIHBhdGggZG9lcyBub3QgeWV0IGV4aXN0cy5cclxuLy8gZXhhbXBsZXM6XHJcbi8vIFx0SlNPTiBGaWxlOiAvKiogXCJmb29cIjogLyoqIFwiYmFyXCI6IFszLCAxMCwgN10gKi8gKi9cclxuLy8gICBGdW5jdGlvbjogR2V0UGF0aEludFZhbHVlKFwiZmlsZW5hbWUuanNvblwiLCBcIi5mb28uYmFyWzFdXCIpXHJcbi8vICAgUmV0dXJuOiAxMFxyXG5leHBvcnQgdmFyIFNldFBhdGhJbnRWYWx1ZSA9IGZ1bmN0aW9uIChGaWxlTmFtZSwgUGF0aCwgdmFsdWUpIHsgcmV0dXJuIHNuLlNldFBhdGhJbnRWYWx1ZShGaWxlTmFtZSwgUGF0aCwgdmFsdWUpOyB9O1xyXG5leHBvcnQgdmFyIFNldFBhdGhGbG9hdFZhbHVlID0gZnVuY3Rpb24gKEZpbGVOYW1lLCBQYXRoLCB2YWx1ZSkgeyByZXR1cm4gc24uU2V0UGF0aEZsb2F0VmFsdWUoRmlsZU5hbWUsIFBhdGgsIHZhbHVlKTsgfTtcclxuZXhwb3J0IHZhciBTZXRQYXRoU3RyaW5nVmFsdWUgPSBmdW5jdGlvbiAoRmlsZU5hbWUsIFBhdGgsIHZhbHVlKSB7IHJldHVybiBzbi5TZXRQYXRoU3RyaW5nVmFsdWUoRmlsZU5hbWUsIFBhdGgsIHZhbHVlKTsgfTtcclxuZXhwb3J0IHZhciBTZXRQYXRoRm9ybVZhbHVlID0gZnVuY3Rpb24gKEZpbGVOYW1lLCBQYXRoLCB2YWx1ZSkgeyByZXR1cm4gc24uU2V0UGF0aEZvcm1WYWx1ZShGaWxlTmFtZSwgUGF0aCwgdmFsdWUpOyB9O1xyXG5leHBvcnQgdmFyIFNldFJhd1BhdGhWYWx1ZSA9IGZ1bmN0aW9uIChGaWxlTmFtZSwgUGF0aCwgUmF3SlNPTikgeyByZXR1cm4gc24uU2V0UmF3UGF0aFZhbHVlKEZpbGVOYW1lLCBQYXRoLCBSYXdKU09OKTsgfTtcclxuZXhwb3J0IHZhciBHZXRQYXRoSW50VmFsdWUgPSBmdW5jdGlvbiAoRmlsZU5hbWUsIFBhdGgsIG1pc3NpbmcpIHtcclxuICAgIGlmIChtaXNzaW5nID09PSB2b2lkIDApIHsgbWlzc2luZyA9IDA7IH1cclxuICAgIHJldHVybiBzbi5HZXRQYXRoSW50VmFsdWUoRmlsZU5hbWUsIFBhdGgsIG1pc3NpbmcpO1xyXG59O1xyXG5leHBvcnQgdmFyIEdldFBhdGhGbG9hdFZhbHVlID0gZnVuY3Rpb24gKEZpbGVOYW1lLCBQYXRoLCBtaXNzaW5nKSB7XHJcbiAgICBpZiAobWlzc2luZyA9PT0gdm9pZCAwKSB7IG1pc3NpbmcgPSAwLjA7IH1cclxuICAgIHJldHVybiBzbi5HZXRQYXRoRmxvYXRWYWx1ZShGaWxlTmFtZSwgUGF0aCwgbWlzc2luZyk7XHJcbn07XHJcbmV4cG9ydCB2YXIgR2V0UGF0aFN0cmluZ1ZhbHVlID0gZnVuY3Rpb24gKEZpbGVOYW1lLCBQYXRoLCBtaXNzaW5nKSB7XHJcbiAgICBpZiAobWlzc2luZyA9PT0gdm9pZCAwKSB7IG1pc3NpbmcgPSBcIlwiOyB9XHJcbiAgICByZXR1cm4gc24uR2V0UGF0aFN0cmluZ1ZhbHVlKEZpbGVOYW1lLCBQYXRoLCBtaXNzaW5nKTtcclxufTtcclxuZXhwb3J0IHZhciBHZXRQYXRoRm9ybVZhbHVlID0gZnVuY3Rpb24gKEZpbGVOYW1lLCBQYXRoLCBtaXNzaW5nKSB7XHJcbiAgICBpZiAobWlzc2luZyA9PT0gdm9pZCAwKSB7IG1pc3NpbmcgPSBudWxsOyB9XHJcbiAgICByZXR1cm4gc24uR2V0UGF0aEZvcm1WYWx1ZShGaWxlTmFtZSwgUGF0aCwgbWlzc2luZyk7XHJcbn07XHJcbmV4cG9ydCB2YXIgR2V0UGF0aEJvb2xWYWx1ZSA9IGZ1bmN0aW9uIChGaWxlTmFtZSwgUGF0aCwgbWlzc2luZykge1xyXG4gICAgaWYgKG1pc3NpbmcgPT09IHZvaWQgMCkgeyBtaXNzaW5nID0gZmFsc2U7IH1cclxuICAgIHJldHVybiBzbi5HZXRQYXRoQm9vbFZhbHVlKEZpbGVOYW1lLCBQYXRoLCBtaXNzaW5nKTtcclxufTtcclxuZXhwb3J0IHZhciBQYXRoSW50RWxlbWVudHMgPSBmdW5jdGlvbiAoRmlsZU5hbWUsIFBhdGgsIGludmFsaWRUeXBlKSB7XHJcbiAgICBpZiAoaW52YWxpZFR5cGUgPT09IHZvaWQgMCkgeyBpbnZhbGlkVHlwZSA9IDA7IH1cclxuICAgIHJldHVybiBzbi5QYXRoSW50RWxlbWVudHMoRmlsZU5hbWUsIFBhdGgsIGludmFsaWRUeXBlKTtcclxufTtcclxuZXhwb3J0IHZhciBQYXRoRmxvYXRFbGVtZW50cyA9IGZ1bmN0aW9uIChGaWxlTmFtZSwgUGF0aCwgaW52YWxpZFR5cGUpIHtcclxuICAgIGlmIChpbnZhbGlkVHlwZSA9PT0gdm9pZCAwKSB7IGludmFsaWRUeXBlID0gMC4wOyB9XHJcbiAgICByZXR1cm4gc24uUGF0aEZsb2F0RWxlbWVudHMoRmlsZU5hbWUsIFBhdGgsIGludmFsaWRUeXBlKTtcclxufTtcclxuZXhwb3J0IHZhciBQYXRoU3RyaW5nRWxlbWVudHMgPSBmdW5jdGlvbiAoRmlsZU5hbWUsIFBhdGgsIGludmFsaWRUeXBlKSB7XHJcbiAgICBpZiAoaW52YWxpZFR5cGUgPT09IHZvaWQgMCkgeyBpbnZhbGlkVHlwZSA9IFwiXCI7IH1cclxuICAgIHJldHVybiBzbi5QYXRoU3RyaW5nRWxlbWVudHMoRmlsZU5hbWUsIFBhdGgsIGludmFsaWRUeXBlKTtcclxufTtcclxuZXhwb3J0IHZhciBQYXRoRm9ybUVsZW1lbnRzID0gZnVuY3Rpb24gKEZpbGVOYW1lLCBQYXRoLCBpbnZhbGlkVHlwZSkge1xyXG4gICAgaWYgKGludmFsaWRUeXBlID09PSB2b2lkIDApIHsgaW52YWxpZFR5cGUgPSBudWxsOyB9XHJcbiAgICByZXR1cm4gc24uUGF0aEZvcm1FbGVtZW50cyhGaWxlTmFtZSwgUGF0aCwgaW52YWxpZFR5cGUpO1xyXG59O1xyXG5leHBvcnQgdmFyIEZpbmRQYXRoSW50RWxlbWVudCA9IGZ1bmN0aW9uIChGaWxlTmFtZSwgUGF0aCwgdG9GaW5kKSB7IHJldHVybiBzbi5GaW5kUGF0aEludEVsZW1lbnQoRmlsZU5hbWUsIFBhdGgsIHRvRmluZCk7IH07XHJcbmV4cG9ydCB2YXIgRmluZFBhdGhGbG9hdEVsZW1lbnQgPSBmdW5jdGlvbiAoRmlsZU5hbWUsIFBhdGgsIHRvRmluZCkgeyByZXR1cm4gc24uRmluZFBhdGhGbG9hdEVsZW1lbnQoRmlsZU5hbWUsIFBhdGgsIHRvRmluZCk7IH07XHJcbmV4cG9ydCB2YXIgRmluZFBhdGhTdHJpbmdFbGVtZW50ID0gZnVuY3Rpb24gKEZpbGVOYW1lLCBQYXRoLCB0b0ZpbmQpIHsgcmV0dXJuIHNuLkZpbmRQYXRoU3RyaW5nRWxlbWVudChGaWxlTmFtZSwgUGF0aCwgdG9GaW5kKTsgfTtcclxuZXhwb3J0IHZhciBGaW5kUGF0aEZvcm1FbGVtZW50ID0gZnVuY3Rpb24gKEZpbGVOYW1lLCBQYXRoLCB0b0ZpbmQpIHsgcmV0dXJuIHNuLkZpbmRQYXRoRm9ybUVsZW1lbnQoRmlsZU5hbWUsIFBhdGgsIHRvRmluZCk7IH07XHJcbmV4cG9ydCB2YXIgUGF0aENvdW50ID0gZnVuY3Rpb24gKEZpbGVOYW1lLCBQYXRoKSB7IHJldHVybiBzbi5QYXRoQ291bnQoRmlsZU5hbWUsIFBhdGgpOyB9O1xyXG5leHBvcnQgdmFyIFBhdGhNZW1iZXJzID0gZnVuY3Rpb24gKEZpbGVOYW1lLCBQYXRoKSB7IHJldHVybiBzbi5QYXRoTWVtYmVycyhGaWxlTmFtZSwgUGF0aCk7IH07XHJcbmV4cG9ydCB2YXIgQ2FuUmVzb2x2ZVBhdGggPSBmdW5jdGlvbiAoRmlsZU5hbWUsIFBhdGgpIHsgcmV0dXJuIHNuLkNhblJlc29sdmVQYXRoKEZpbGVOYW1lLCBQYXRoKTsgfTtcclxuZXhwb3J0IHZhciBJc1BhdGhTdHJpbmcgPSBmdW5jdGlvbiAoRmlsZU5hbWUsIFBhdGgpIHsgcmV0dXJuIHNuLklzUGF0aFN0cmluZyhGaWxlTmFtZSwgUGF0aCk7IH07XHJcbmV4cG9ydCB2YXIgSXNQYXRoTnVtYmVyID0gZnVuY3Rpb24gKEZpbGVOYW1lLCBQYXRoKSB7IHJldHVybiBzbi5Jc1BhdGhOdW1iZXIoRmlsZU5hbWUsIFBhdGgpOyB9O1xyXG5leHBvcnQgdmFyIElzUGF0aEZvcm0gPSBmdW5jdGlvbiAoRmlsZU5hbWUsIFBhdGgpIHsgcmV0dXJuIHNuLklzUGF0aEZvcm0oRmlsZU5hbWUsIFBhdGgpOyB9O1xyXG5leHBvcnQgdmFyIElzUGF0aEJvb2wgPSBmdW5jdGlvbiAoRmlsZU5hbWUsIFBhdGgpIHsgcmV0dXJuIHNuLklzUGF0aEJvb2woRmlsZU5hbWUsIFBhdGgpOyB9O1xyXG5leHBvcnQgdmFyIElzUGF0aEFycmF5ID0gZnVuY3Rpb24gKEZpbGVOYW1lLCBQYXRoKSB7IHJldHVybiBzbi5Jc1BhdGhBcnJheShGaWxlTmFtZSwgUGF0aCk7IH07XHJcbmV4cG9ydCB2YXIgSXNQYXRoT2JqZWN0ID0gZnVuY3Rpb24gKEZpbGVOYW1lLCBQYXRoKSB7IHJldHVybiBzbi5Jc1BhdGhPYmplY3QoRmlsZU5hbWUsIFBhdGgpOyB9O1xyXG5leHBvcnQgdmFyIFNldFBhdGhJbnRBcnJheSA9IGZ1bmN0aW9uIChGaWxlTmFtZSwgUGF0aCwgYXJyLCBhcHBlbmQpIHtcclxuICAgIGlmIChhcHBlbmQgPT09IHZvaWQgMCkgeyBhcHBlbmQgPSBmYWxzZTsgfVxyXG4gICAgcmV0dXJuIHNuLlNldFBhdGhJbnRBcnJheShGaWxlTmFtZSwgUGF0aCwgYXJyLCBhcHBlbmQpO1xyXG59O1xyXG5leHBvcnQgdmFyIFNldFBhdGhGbG9hdEFycmF5ID0gZnVuY3Rpb24gKEZpbGVOYW1lLCBQYXRoLCBhcnIsIGFwcGVuZCkge1xyXG4gICAgaWYgKGFwcGVuZCA9PT0gdm9pZCAwKSB7IGFwcGVuZCA9IGZhbHNlOyB9XHJcbiAgICByZXR1cm4gc24uU2V0UGF0aEZsb2F0QXJyYXkoRmlsZU5hbWUsIFBhdGgsIGFyciwgYXBwZW5kKTtcclxufTtcclxuZXhwb3J0IHZhciBTZXRQYXRoU3RyaW5nQXJyYXkgPSBmdW5jdGlvbiAoRmlsZU5hbWUsIFBhdGgsIGFyciwgYXBwZW5kKSB7XHJcbiAgICBpZiAoYXBwZW5kID09PSB2b2lkIDApIHsgYXBwZW5kID0gZmFsc2U7IH1cclxuICAgIHJldHVybiBzbi5TZXRQYXRoU3RyaW5nQXJyYXkoRmlsZU5hbWUsIFBhdGgsIGFyciwgYXBwZW5kKTtcclxufTtcclxuZXhwb3J0IHZhciBTZXRQYXRoRm9ybUFycmF5ID0gZnVuY3Rpb24gKEZpbGVOYW1lLCBQYXRoLCBhcnIsIGFwcGVuZCkge1xyXG4gICAgaWYgKGFwcGVuZCA9PT0gdm9pZCAwKSB7IGFwcGVuZCA9IGZhbHNlOyB9XHJcbiAgICByZXR1cm4gc24uU2V0UGF0aEZvcm1BcnJheShGaWxlTmFtZSwgUGF0aCwgYXJyLCBhcHBlbmQpO1xyXG59O1xyXG5leHBvcnQgdmFyIENsZWFyUGF0aCA9IGZ1bmN0aW9uIChGaWxlTmFtZSwgUGF0aCkgeyByZXR1cm4gc24uQ2xlYXJQYXRoKEZpbGVOYW1lLCBQYXRoKTsgfTtcclxuZXhwb3J0IHZhciBDbGVhclBhdGhJbmRleCA9IGZ1bmN0aW9uIChGaWxlTmFtZSwgUGF0aCwgSW5kZXgpIHsgcmV0dXJuIHNuLkNsZWFyUGF0aEluZGV4KEZpbGVOYW1lLCBQYXRoLCBJbmRleCk7IH07XHJcbi8vIERlYnVnIHVzZVxyXG5leHBvcnQgdmFyIENsZWFyQWxsID0gZnVuY3Rpb24gKEZpbGVOYW1lKSB7IHJldHVybiBzbi5DbGVhckFsbChGaWxlTmFtZSk7IH07XHJcbiIsIi8qXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuVHlwZXNjcmlwdCBkZWZpbml0aW9ucyBmb3IgdjQuNS41XHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcblRoaXMgZmlsZSB3YXMgYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgYnkgUGFweXJ1cy0yLVR5cGVzY3JpcHQuZXhlXHJcbmh0dHBzOi8vZ2l0aHViLmNvbS9DYXJsb3NMZXl2YUF5YWxhL1BhcHlydXMtMi1UeXBlc2NyaXB0XHJcblxyXG5UaGUgcHJvZ3JhbSBoYXMgbm8gd2F5IHRvIGtub3cgdGhlIGludGVudGlvbiBvZiB0aGUgaHVtYW5zIHRoYXQgbWFkZVxyXG50aGUgc2NyaXB0cywgc28gaXQncyBhbHdheXMgYWR2aXNhYmxlIHRvIG1hbnVhbGx5IGNoZWNrIGFsbCBnZW5lcmF0ZWRcclxuZmlsZXMgdG8gbWFrZSBzdXJlIGV2ZXJ5dGhpbmcgaXMgZGVjbGFyZWQgYXMgaXQgc2hvdWxkLlxyXG5cclxuVGFrZSBub3RlIHRoZSBwcm9ncmFtIGFzc3VtZXMgdGhpcyBzY3JpcHQgZXhpc3RzIGluIHNvbWUgc3ViZm9sZGVyXHJcbnRvIHRoZSBmb2xkZXIgd2hlcmUgYHNreXJpbVBsYXRmb3JtLnRzYCBpcyBmb3VuZCwgb3RoZXJ3aXNlIHlvdSdsbCBnZXRcclxuXCJDYW5ub3QgZmluZCBtb2R1bGUuLi5cIiB0eXBlIG9mIGVycm9ycy5cclxuXHJcbklmIHlvdSB3YW50IHRvIGhhdmUgdGhpcyBzY3JpcHQgaW4gc29tZSBvdGhlciBwbGFjZSwganVzdCBjaGFuZ2UgdGhlXHJcbnJlbGF0aXZlIHBhdGggb2YgZWFjaCBgaW1wb3J0YC5cclxuKi9cclxuaW1wb3J0ICogYXMgc3AgZnJvbSBcInNreXJpbVBsYXRmb3JtXCI7XHJcbnZhciBzbiA9IHNwLlBPM19TS1NFRnVuY3Rpb25zO1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy9BQ1RJVkUgRUZGRUNUXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vL3JldHVybnMgd2hldGhlciB0aGUgYWN0aXZlRWZmZWN0IGhhcyBzY3JpcHQgYXR0YWNoZWQuIElmIHNjcmlwdE5hbWUgaXMgZW1wdHksIGl0IHdpbGwgcmV0dXJuIGlmIHRoZSBhY3RpdmVFZmZlY3QgaGFzIGFueSBub24tYmFzZSBzY3JpcHRzIGF0dGFjaGVkXHJcbmV4cG9ydCB2YXIgSXNTY3JpcHRBdHRhY2hlZFRvQWN0aXZlRWZmZWN0ID0gZnVuY3Rpb24gKGFrQWN0aXZlRWZmZWN0LCBhc1NjcmlwdE5hbWUpIHsgcmV0dXJuIHNuLklzU2NyaXB0QXR0YWNoZWRUb0FjdGl2ZUVmZmVjdChha0FjdGl2ZUVmZmVjdCwgYXNTY3JpcHROYW1lKTsgfTtcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vQUNUT1JTXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLy0tLS0tLS1cclxuLy9HRVRURVJTXHJcbi8vLS0tLS0tLVxyXG4vL0dldHMgYWxsIG1hZ2ljZWZmZWN0cyBjdXJyZW50bHkgb24gdGhlIGFjdG9yLiBGaWx0ZXJzIG91dCBpbmFjdGl2ZSBhbmQgaGlkZWludWkgc3BlbGxzLlxyXG5leHBvcnQgdmFyIEdldEFjdGl2ZUVmZmVjdHMgPSBmdW5jdGlvbiAoYWtBY3RvciwgYWJTaG93SW5hY3RpdmUpIHtcclxuICAgIGlmIChhYlNob3dJbmFjdGl2ZSA9PT0gdm9pZCAwKSB7IGFiU2hvd0luYWN0aXZlID0gZmFsc2U7IH1cclxuICAgIHJldHVybiBzbi5HZXRBY3RpdmVFZmZlY3RzKGFrQWN0b3IsIGFiU2hvd0luYWN0aXZlKTtcclxufTtcclxuZXhwb3J0IHZhciBHZXRBY3RvckFscGhhID0gZnVuY3Rpb24gKGFrQWN0b3IpIHtcclxuICAgIHJldHVybiBzbi5HZXRBY3RvckFscGhhKGFrQWN0b3IpO1xyXG59O1xyXG5leHBvcnQgdmFyIEdldEFjdG9yUmVmcmFjdGlvbiA9IGZ1bmN0aW9uIChha0FjdG9yKSB7XHJcbiAgICByZXR1cm4gc24uR2V0QWN0b3JSZWZyYWN0aW9uKGFrQWN0b3IpO1xyXG59O1xyXG4vKiogQUNUT1IgU1RBVEVcclxuICAgICAgICBBbGl2ZSA9IDBcclxuICAgICAgICBEeWluZyA9IDFcclxuICAgICAgICBEZWFkID0gMlxyXG4gICAgICAgIFVuY29uc2Npb3VzID0gM1xyXG4gICAgICAgIFJlYW5pbWF0ZSA9IDRcclxuICAgICAgICBSZWN5Y2xlID0gNVxyXG4gICAgICAgIFJlc3RyYWluZWQgPSA2XHJcbiAgICAgICAgRXNzZW50aWFsRG93biA9IDdcclxuICAgICAgICBCbGVlZG91dCA9IDggKi9cclxuLy9HZXRzIGFjdG9yIHN0YXRlXHJcbmV4cG9ydCB2YXIgR2V0QWN0b3JTdGF0ZSA9IGZ1bmN0aW9uIChha0FjdG9yKSB7XHJcbiAgICByZXR1cm4gc24uR2V0QWN0b3JTdGF0ZShha0FjdG9yKTtcclxufTtcclxuLy9HZXRzIGFjdG9yIHNvdWwgc2l6ZVxyXG5leHBvcnQgdmFyIEdldEFjdG9yU291bFNpemUgPSBmdW5jdGlvbiAoYWtBY3Rvcikge1xyXG4gICAgcmV0dXJuIHNuLkdldEFjdG9yU291bFNpemUoYWtBY3Rvcik7XHJcbn07XHJcbi8vR2V0cyBhY3RvciB2YWx1ZSBtb2RpZmllci4gMCAtIHBlcm1hbmVudCwgMSAtIHRlbXBvcmFyeSwgMiAtIGRhbWFnZVxyXG5leHBvcnQgdmFyIEdldEFjdG9yVmFsdWVNb2RpZmllciA9IGZ1bmN0aW9uIChha0FjdG9yLCBhaU1vZGlmaWVyLCBhc0FjdG9yVmFsdWUpIHsgcmV0dXJuIHNuLkdldEFjdG9yVmFsdWVNb2RpZmllcihha0FjdG9yLCBhaU1vZGlmaWVyLCBhc0FjdG9yVmFsdWUpOyB9O1xyXG4vL0dldHMgYWN0b3IgY3JpdGljYWwgc3RhZ2VcclxuZXhwb3J0IHZhciBHZXRDcml0aWNhbFN0YWdlID0gZnVuY3Rpb24gKGFrQWN0b3IpIHtcclxuICAgIHJldHVybiBzbi5HZXRDcml0aWNhbFN0YWdlKGFrQWN0b3IpO1xyXG59O1xyXG4vL0dldHMgYWxsIGFsbGllcyBvZiB0aGUgYWN0b3IsIGlmIGluIGNvbWJhdFxyXG5leHBvcnQgdmFyIEdldENvbWJhdEFsbGllcyA9IGZ1bmN0aW9uIChha0FjdG9yKSB7XHJcbiAgICByZXR1cm4gc24uR2V0Q29tYmF0QWxsaWVzKGFrQWN0b3IpO1xyXG59O1xyXG4vL0dldHMgYWxsIHRhcmdldHMgb2YgdGhlIGFjdG9yLCBpZiBpbiBjb21iYXRcclxuZXhwb3J0IHZhciBHZXRDb21iYXRUYXJnZXRzID0gZnVuY3Rpb24gKGFrQWN0b3IpIHtcclxuICAgIHJldHVybiBzbi5HZXRDb21iYXRUYXJnZXRzKGFrQWN0b3IpO1xyXG59O1xyXG4vL0dldHMgYWxsIGN1cnJlbnQgc3VtbW9ucyBjb21tYW5kZWQgYnkgdGhpcyBhY3RvclxyXG5leHBvcnQgdmFyIEdldENvbW1hbmRlZEFjdG9ycyA9IGZ1bmN0aW9uIChha0FjdG9yKSB7IHJldHVybiBzbi5HZXRDb21tYW5kZWRBY3RvcnMoYWtBY3Rvcik7IH07XHJcbi8vR2V0cyB0aGUgb3duZXIgb2Ygc3VtbW9uZWQgYWN0b3JcclxuZXhwb3J0IHZhciBHZXRDb21tYW5kaW5nQWN0b3IgPSBmdW5jdGlvbiAoYWtBY3RvcikgeyByZXR1cm4gc24uR2V0Q29tbWFuZGluZ0FjdG9yKGFrQWN0b3IpOyB9O1xyXG4vL0dldHMgY3VycmVudCBoYWlyIGNvbG9yIG9uIGFjdG9yLiBGYWlscyBpZiBoYWlyIGhlYWRwYXJ0IGRvZXNuJ3QgZXhpc3RcclxuZXhwb3J0IHZhciBHZXRIYWlyQ29sb3IgPSBmdW5jdGlvbiAoYWtBY3RvcikgeyByZXR1cm4gc24uR2V0SGFpckNvbG9yKGFrQWN0b3IpOyB9O1xyXG4vL0dldHMgdGV4dHVyZXNldCBiZWxvbmdpbmcgdG8gaGVhZHBhcnQsIGlmIGFueS5cclxuZXhwb3J0IHZhciBHZXRIZWFkUGFydFRleHR1cmVTZXQgPSBmdW5jdGlvbiAoYWtBY3RvciwgYWlUeXBlKSB7IHJldHVybiBzbi5HZXRIZWFkUGFydFRleHR1cmVTZXQoYWtBY3RvciwgYWlUeXBlKTsgfTtcclxuLy9HZXRzIHRoZSBhY3RvcidzIGxvY2FsIGdyYXZpdHkuXHJcbmV4cG9ydCB2YXIgR2V0TG9jYWxHcmF2aXR5QWN0b3IgPSBmdW5jdGlvbiAoYWtBY3RvcikgeyByZXR1cm4gc24uR2V0TG9jYWxHcmF2aXR5QWN0b3IoYWtBY3Rvcik7IH07XHJcbi8vR2V0cyBvYmplY3QgdW5kZXIgYWN0b3IncyBmZWV0IChlZy4gdGFibGUpLiBEb2VzIG5vdCB3b3JrIGlmIHRoZSBwbGF5ZXIgaXMgc3RhbmRpbmcgb24gdGhlIGdyb3VuZC5cclxuZXhwb3J0IHZhciBHZXRPYmplY3RVbmRlckZlZXQgPSBmdW5jdGlvbiAoYWtBY3RvcikgeyByZXR1cm4gc24uR2V0T2JqZWN0VW5kZXJGZWV0KGFrQWN0b3IpOyB9O1xyXG4vL0dldHMgYWN0dWFsIGN1cnJlbnQgcGFja2FnZSBvbiBhY3RvciwgaW5jbHVkaW5nIGludGVybmFsIHBhY2thZ2VzIHVzZWQgYnkgdGhlIGdhbWUgKHNlZSBHZXRQYWNrYWdlVHlwZSBiZWxvdylcclxuZXhwb3J0IHZhciBHZXRSdW5uaW5nUGFja2FnZSA9IGZ1bmN0aW9uIChha0FjdG9yKSB7IHJldHVybiBzbi5HZXRSdW5uaW5nUGFja2FnZShha0FjdG9yKTsgfTtcclxuLy9HZXRzIGN1cnJlbnQgc2tpbiBjb2xvciBvbiBhY3Rvci5cclxuZXhwb3J0IHZhciBHZXRTa2luQ29sb3IgPSBmdW5jdGlvbiAoYWtBY3RvcikgeyByZXR1cm4gc24uR2V0U2tpbkNvbG9yKGFrQWN0b3IpOyB9O1xyXG4vL1NpbWlsYXIgdG8gR2V0VGltZURlYWQgY29uc29sZSBjb21tYW5kLiBSZXR1cm5zIDAuMCBpZiBhY3RvciBpcyBhbGl2ZVxyXG5leHBvcnQgdmFyIEdldFRpbWVEZWFkID0gZnVuY3Rpb24gKGFrQWN0b3IpIHtcclxuICAgIHJldHVybiBzbi5HZXRUaW1lRGVhZChha0FjdG9yKTtcclxufTtcclxuLy9SZXR1cm5zIHRpbWUgb2YgZGVhdGggaW4gZ2FtZSBkYXlzIHBhc3NlZFxyXG5leHBvcnQgdmFyIEdldFRpbWVPZkRlYXRoID0gZnVuY3Rpb24gKGFrQWN0b3IpIHtcclxuICAgIHJldHVybiBzbi5HZXRUaW1lT2ZEZWF0aChha0FjdG9yKTtcclxufTtcclxuLy9IYXNTcGVsbCBidXQgY2hlY2tzIGlmIHRoZSBzcGVsbCBpcyBwcmVzZW50IG9uIHRoZSBhY3RvciAoaS5lIGFjdGl2ZSBhbmQgbm90IGRpc3BlbGxlZClcclxuZXhwb3J0IHZhciBIYXNBY3RpdmVTcGVsbCA9IGZ1bmN0aW9uIChha0FjdG9yLCBha1NwZWxsKSB7IHJldHVybiBzbi5IYXNBY3RpdmVTcGVsbChha0FjdG9yLCBha1NwZWxsKTsgfTtcclxuLy9SZXR1cm5zIHdoZXRoZXIgdGhlIGFjdG9yIGlzIGluIGRlZmVycmVkIGtpbGwgbW9kZVxyXG5leHBvcnQgdmFyIEhhc0RlZmVycmVkS2lsbCA9IGZ1bmN0aW9uIChha0FjdG9yKSB7XHJcbiAgICByZXR1cm4gc24uSGFzRGVmZXJyZWRLaWxsKGFrQWN0b3IpO1xyXG59O1xyXG4vL0NoZWNrcyBpZiBhY3RpdmVtYWdpY2VmZmVjdCB3aXRoIGdpdmVuIGFyY2hldHlwZSBpcyBwcmVzZW50IG9uIGFjdG9yLiBBcmNoZXR5cGUgTVVTVCBiZSB0eXBlZCBhcyBnaXZlbiBiZWxvdy5cclxuZXhwb3J0IHZhciBIYXNNYWdpY0VmZmVjdFdpdGhBcmNoZXR5cGUgPSBmdW5jdGlvbiAoYWtBY3RvciwgYXNBcmNoZXR5cGUpIHsgcmV0dXJuIHNuLkhhc01hZ2ljRWZmZWN0V2l0aEFyY2hldHlwZShha0FjdG9yLCBhc0FyY2hldHlwZSk7IH07XHJcbi8vUmV0dXJucyBpZiB0aGUgYWN0b3IgaGFzIHNraW4vYXJtb3Igd2l0aCBza2luIHByZXNlbnRcclxuZXhwb3J0IHZhciBIYXNTa2luID0gZnVuY3Rpb24gKGFrQWN0b3IsIGFrQXJtb3JUb0NoZWNrKSB7IHJldHVybiBzbi5IYXNTa2luKGFrQWN0b3IsIGFrQXJtb3JUb0NoZWNrKTsgfTtcclxuLy9SZXR1cm5zIHdoZXRoZXIgdGhlIGFjdG9yIGlzIGluIGNlbGwgd2F0ZXIgb3IgbGF2YVxyXG5leHBvcnQgdmFyIElzQWN0b3JJbldhdGVyID0gZnVuY3Rpb24gKGFrQWN0b3IpIHtcclxuICAgIHJldHVybiBzbi5Jc0FjdG9ySW5XYXRlcihha0FjdG9yKTtcclxufTtcclxuLy9SZXR1cm5zIHdoZXRoZXIgdGhlIGFjdG9yIGlzIHVuZGVyd2F0ZXJcclxuZXhwb3J0IHZhciBJc0FjdG9yVW5kZXJ3YXRlciA9IGZ1bmN0aW9uIChha0FjdG9yKSB7XHJcbiAgICByZXR1cm4gc24uSXNBY3RvclVuZGVyd2F0ZXIoYWtBY3Rvcik7XHJcbn07XHJcbi8qKiBMSU1CXHJcbiAgICAgICAgTm9uZSA9IC0xXHJcbiAgICAgICAgVG9yc28gPSAwXHJcbiAgICAgICAgSGVhZCA9IDEgKi9cclxuLy9SZXR1cm5zIHdoZXRoZXIgbGltYiBpcyBnb25lIChpLmUsIHRoZSBoZWFkLCBidXQgYWRkaW5nIHRoZSB3aG9sZSBlbnVtIGluIGNhc2Ugc29tZW9uZSBleHBhbmRzIHRoZSBkaXNtZW1iZXJtZW50IHN5c3RlbSBpbiB0aGUgZnV0dXJlKVxyXG5leHBvcnQgdmFyIElzTGltYkdvbmUgPSBmdW5jdGlvbiAoYWtBY3RvciwgYWlMaW1iKSB7IHJldHVybiBzbi5Jc0xpbWJHb25lKGFrQWN0b3IsIGFpTGltYik7IH07XHJcbi8vUmV0dXJucyB3aGV0aGVyIHRoZSBhY3RvciBpcyBhIHF1YWRydXBlZFxyXG5leHBvcnQgdmFyIElzUXVhZHJ1cGVkID0gZnVuY3Rpb24gKGFrQWN0b3IpIHtcclxuICAgIHJldHVybiBzbi5Jc1F1YWRydXBlZChha0FjdG9yKTtcclxufTtcclxuLy9SZXR1cm5zIHdoZXRoZXIgdGFyZ2V0IGlzIHNvdWwgdHJhcHBlZCAvIGNhcGFibGUgb2YgYmVpbmcgc291bCB0cmFwcGVkIHN1Y2Nlc3NmdWxseSAoaWYgdXNpbmcgbW9kcyB0aGF0IGJ5cGFzcyB2YW5pbGxhIHNvdWwgdHJhcCBzeXN0ZW0pLlxyXG5leHBvcnQgdmFyIElzU291bFRyYXBwZWQgPSBmdW5jdGlvbiAoYWtBY3Rvcikge1xyXG4gICAgcmV0dXJuIHNuLklzU291bFRyYXBwZWQoYWtBY3Rvcik7XHJcbn07XHJcbi8vLS0tLS0tLVxyXG4vL1NFVFRFUlNcclxuLy8tLS0tLS0tXHJcbi8vQWRkcyBhbGwgZXF1aXBwZWQgaXRlbXMgdG8gYXJyYXlcclxuZXhwb3J0IHZhciBBZGRBbGxFcXVpcHBlZEl0ZW1zVG9BcnJheSA9IGZ1bmN0aW9uIChha0FjdG9yKSB7IHJldHVybiBzbi5BZGRBbGxFcXVpcHBlZEl0ZW1zVG9BcnJheShha0FjdG9yKTsgfTtcclxuLy9BZGRzIHBlcmtzIHRvIHRoZSBhY3RvcmJhc2UsIHdvcmtzIG9uIGxldmVsZWQgYWN0b3JzL3VuaXF1ZSBOUENzLiBGdW5jdGlvbiBzZXJpYWxpemVzIGRhdGEgdG8gc2tzZSBjb3NhdmUsIHNvIHBlcmtzIGFyZSBhcHBsaWVkIGNvcnJlY3RseSBvbiBsb2FkaW5nL3JlbG9hZGluZyBzYXZlcy5cclxuZXhwb3J0IHZhciBBZGRCYXNlUGVyayA9IGZ1bmN0aW9uIChha0FjdG9yLCBha1BlcmspIHsgcmV0dXJuIHNuLkFkZEJhc2VQZXJrKGFrQWN0b3IsIGFrUGVyayk7IH07XHJcbi8vQWRkcyBzcGVsbHMgdG8gYWN0b3JiYXNlLCB3b3JrcyBvbiBwbGF5ZXIvbGV2ZWxlZCBhY3RvcnMvdW5pcXVlIE5QQ3MuIEZ1bmN0aW9uIHNlcmlhbGl6ZXMgZGF0YSB0byBza3NlIGNvc2F2ZSwgc28gc3BlbGxzIGFyZSBhcHBsaWVkIGNvcnJlY3RseSBvbiBsb2FkaW5nL3JlbG9hZGluZyBzYXZlcy5cclxuZXhwb3J0IHZhciBBZGRCYXNlU3BlbGwgPSBmdW5jdGlvbiAoYWtBY3RvciwgYWtTcGVsbCkgeyByZXR1cm4gc24uQWRkQmFzZVNwZWxsKGFrQWN0b3IsIGFrU3BlbGwpOyB9O1xyXG4vKiogQkxFTkQgTU9ERVNcclxuICAgICAgICBEYXJrZW4gPSAwXHJcbiAgICAgICAgTXVsdGlwbHkgPSAxXHJcbiAgICAgICAgQ29sb3JCdXJuID0gMlxyXG4gICAgICAgIExpbmVhckJ1cm4gPSAzXHJcbiAgICAgICAgRGFya2VyQ29sb3IgPSA0XHJcbiAgICAgICAgTGlnaHRlbiA9IDVcclxuICAgICAgICBTY3JlZW4gPSA2XHJcbiAgICAgICAgQ29sb3JEb2RnZSA9IDdcclxuICAgICAgICBMaW5lYXJEb2RnZSA9IDhcclxuICAgICAgICBMaWdodGVyQ29sb3IgPSA5XHJcbiAgICAgICAgT3ZlcmxheSA9IDEwXHJcbiAgICAgICAgU29mdExpZ2h0ID0gMTFcclxuICAgICAgICBIYXJkTGlnaHQgPSAxMlxyXG4gICAgICAgIFZpdmlkTGlnaHQgPSAxM1xyXG4gICAgICAgIExpbmVhckxpZ2h0ID0gMTRcclxuICAgICAgICBQaW5MaWdodCA9IDE1XHJcbiAgICAgICAgSGFyZE1peCA9IDE2XHJcbiAgICAgICAgRGlmZmVyZW5jZSA9IDE3XHJcbiAgICAgICAgRXhjbHVzaW9uID0gMThcclxuICAgICAgICBTdWJ0cmFjdCA9IDE5XHJcbiAgICAgICAgRGl2aWRlID0gMjAgKi9cclxuLy9CbGVuZHMgZXhpc3Rpbmcgc2tpbiBjb2xvciB3aXRoIHNwZWNpZmllZCBjb2xvciwgdXNpbmcgcGhvdG9zaG9wIGJsZW5kIGZvcm11bGFzLCB3aXRoIGFscGhhIChvcGFjaXR5KS5cclxuLy9JZiB0cnVlLCBhdXRvTHVtaW5hbmNlIGNhbGN1bGF0ZXMgc2tpbiB0b25lIHJlbGF0aXZlIGx1bWluYW5jZS4gVGhlIG9wYWNpdHkgdmFsdWUgaXMgdGhlbiB1c2VkIGFzIGEgbXVsdGlwbGllciBvbiB0b3Agb2YgdGhhdCwgZmluYWwgdmFsdWUgaXMgY2xhbXBlZCB0byAwLTFcclxuLy9JZiBmYWxzZSwgb25seSBvcGFjaXR5IHdpbGwgYmUgdXNlZC4gUmVjb21tZW5kIHRvIHVzZSBhdXRvbHVtaW5hbmNlIGJlY2F1c2UgY29sb3JzIHdpbGwgbm90IGJsZW5kIHdlbGwgZm9yIGFsbCBza2luIHRvbmVzIHVzaW5nIGZsYXQgdmFsdWVzLlxyXG5leHBvcnQgdmFyIEJsZW5kQ29sb3JXaXRoU2tpblRvbmUgPSBmdW5jdGlvbiAoYWtBY3RvciwgYWtDb2xvciwgYWlCbGVuZE1vZGUsIGFiQXV0b0x1bWluYW5jZSwgYWZPcGFjaXR5KSB7XHJcbiAgICByZXR1cm4gc24uQmxlbmRDb2xvcldpdGhTa2luVG9uZShha0FjdG9yLCBha0NvbG9yLCBhaUJsZW5kTW9kZSwgYWJBdXRvTHVtaW5hbmNlLCBhZk9wYWNpdHkpO1xyXG59O1xyXG4vL0RlY2FwaXRhdGVzIGxpdmluZyBhbmQgZGVhZCBhY3RvcnMuIExpdmluZyBhY3RvcnMgd2lsbCBub3QgZGllIHdoZW4gdGhpcyBpcyBjYWxsZWQhXHJcbmV4cG9ydCB2YXIgRGVjYXBpdGF0ZUFjdG9yID0gZnVuY3Rpb24gKGFrQWN0b3IpIHtcclxuICAgIHJldHVybiBzbi5EZWNhcGl0YXRlQWN0b3IoYWtBY3Rvcik7XHJcbn07XHJcbi8vMCAtIEVuYWJsZUFJICsgdG9nZ2xpbmcgcmVjb3JkIGhpdHMgZmxhZ3Mgc28gdGhleSBkb24ndCBnbyBmbHlpbmcgMzAwIGZlZXQgd2hlbiB1bmZyb3plbi5cclxuLy8xIC0gUGFyYWx5emVzIGFjdG9yLCBldmVuIHdoZW4gZGVhZC5cclxuZXhwb3J0IHZhciBGcmVlemVBY3RvciA9IGZ1bmN0aW9uIChha0FjdG9yLCB0eXBlLCBhYkZyZWV6ZSkgeyByZXR1cm4gc24uRnJlZXplQWN0b3IoYWtBY3RvciwgdHlwZSwgYWJGcmVlemUpOyB9O1xyXG4vL1F1aWNrIGFuZCBkaXJ0eSBoYWNrIHRvIGluc3RhbnRseSBraWxsIHRoZSBhY3RvciBhbmQgc2V0IGFzIGRlYWQuXHJcbmV4cG9ydCB2YXIgS2lsbE5vV2FpdCA9IGZ1bmN0aW9uIChha0FjdG9yKSB7XHJcbiAgICByZXR1cm4gc24uS2lsbE5vV2FpdChha0FjdG9yKTtcclxufTtcclxuLy9ERVBSRUNJQVRFRFxyXG4vL0JsZW5kcyBleGlzdGluZyBza2luIGNvbG9yIHdpdGggc3BlY2lmaWVkIGNvbG9yLlxyXG4vL1RydWUgLSBpbnRlbnNpdHkgaXMgbWFudWFsbHkgY2FsY3VsYXRlZCB1c2luZyBwZXJjZW50YWdlIDAtMS4wLCBGYWxzZSAtIGF1dG9tYXRpY2FsbHkgY2FsY3VsYXRlZCB1c2luZyBza2luIHRvbmUgbHVtaW5hbmNlXHJcbmV4cG9ydCB2YXIgTWl4Q29sb3JXaXRoU2tpblRvbmUgPSBmdW5jdGlvbiAoYWtBY3RvciwgYWtDb2xvciwgYWJNYW51YWxNb2RlLCBhZlBlcmNlbnRhZ2UpIHtcclxuICAgIHJldHVybiBzbi5NaXhDb2xvcldpdGhTa2luVG9uZShha0FjdG9yLCBha0NvbG9yLCBhYk1hbnVhbE1vZGUsIGFmUGVyY2VudGFnZSk7XHJcbn07XHJcbi8vQmF0Y2ggYWRkZWQgc3BlbGwgcmVtb3ZhbCwgZmlsdGVyZWQgYnkgb3B0aW9uYWwgbW9kIG5hbWUsIGFuZCBrZXl3b3JkIGFycmF5IChtYXRjaGluZyBhbnkga2V5d29yZCBvciBhbGwgb2YgdGhlbSlcclxuZXhwb3J0IHZhciBSZW1vdmVBZGRlZFNwZWxscyA9IGZ1bmN0aW9uIChha0FjdG9yLCBtb2ROYW1lLCBrZXl3b3JkcywgYWJNYXRjaEFsbCkgeyByZXR1cm4gc24uUmVtb3ZlQWRkZWRTcGVsbHMoYWtBY3RvciwgbW9kTmFtZSwga2V5d29yZHMsIGFiTWF0Y2hBbGwpOyB9O1xyXG4vL1JlbW92ZXMgcGVya3MgZnJvbSB0aGUgYWN0b3JiYXNlXHJcbi8vUGVyayBlZmZlY3RzIG1heSBub3QgYmUgcmVtb3ZlZCBmcm9tIHVuaXF1ZSBhY3RvcnMsIG1vcmUgdGVzdGluZyByZXF1aXJlZC5cclxuLy9GdW5jdGlvbiBzZXJpYWxpemVzIGRhdGEgdG8gc2tzZSBjb3NhdmUsIHNvIHBlcmtzIGFyZSBhcHBsaWVkIGNvcnJlY3RseSBvbiBsb2FkaW5nL3JlbG9hZGluZyBzYXZlcy5cclxuZXhwb3J0IHZhciBSZW1vdmVCYXNlUGVyayA9IGZ1bmN0aW9uIChha0FjdG9yLCBha1BlcmspIHsgcmV0dXJuIHNuLlJlbW92ZUJhc2VQZXJrKGFrQWN0b3IsIGFrUGVyayk7IH07XHJcbi8vUmVtb3ZlcyBzcGVsbHMgZnJvbSB0aGUgYWN0b3JiYXNlLCB3b3JrcyBvbiBwbGF5ZXIvbGV2ZWxlZCBhY3RvcnMvdW5pcXVlIE5QQ3MuIEZ1bmN0aW9uIHNlcmlhbGl6ZXMgZGF0YSB0byBza3NlIGNvc2F2ZSwgc28gc3BlbGxzIGFyZSBhcHBsaWVkIGNvcnJlY3RseSBvbiBsb2FkaW5nL3JlbG9hZGluZyBzYXZlcy5cclxuZXhwb3J0IHZhciBSZW1vdmVCYXNlU3BlbGwgPSBmdW5jdGlvbiAoYWtBY3RvciwgYWtTcGVsbCkgeyByZXR1cm4gc24uUmVtb3ZlQmFzZVNwZWxsKGFrQWN0b3IsIGFrU3BlbGwpOyB9O1xyXG4vL1JlcGxhY2VzIHNwZWNpZmllZCBzb3VyY2UgdGV4dHVyZXNldCBvbiB3b3JuIGFybW9yIHdpdGggdGFyZ2V0IHRleHR1cmVzZXQuIExhc3RzIGZvciBvbmUgc2luZ2xlIGdhbWluZyBzZXNzaW9uLlxyXG4vL0lmIHRleHR1cmUgdHlwZSBpcyAtMSwgdGhlIGVudGlyZSB0ZXh0dXJlc2V0IGlzIHJlcGxhY2VkLCBvdGhlcndpc2UgdGhlIHRleHR1cmUgbWFwIHNwZWNpZmllZCBhdCBbdGV4dHVyZVR5cGVdIGluZGV4IGlzIHJlcGxhY2VkIChkaWZmdXNlIGlzIDAsIG5vcm1hbCBpcyAxLi4uKVxyXG5leHBvcnQgdmFyIFJlcGxhY2VBcm1vclRleHR1cmVTZXQgPSBmdW5jdGlvbiAoYWtBY3RvciwgYWtBcm1vciwgYWtTb3VyY2VUWFNULCBha1RhcmdldFRYU1QsIGFpVGV4dHVyZVR5cGUpIHtcclxuICAgIGlmIChhaVRleHR1cmVUeXBlID09PSB2b2lkIDApIHsgYWlUZXh0dXJlVHlwZSA9IC0xOyB9XHJcbiAgICByZXR1cm4gc24uUmVwbGFjZUFybW9yVGV4dHVyZVNldChha0FjdG9yLCBha0FybW9yLCBha1NvdXJjZVRYU1QsIGFrVGFyZ2V0VFhTVCwgYWlUZXh0dXJlVHlwZSk7XHJcbn07XHJcbi8vUmVwbGFjZXMgZmFjZSB0ZXh0dXJlc2V0LiBMYXN0cyBvbmUgZ2FtaW5nIHNlc3Npb24uIENhbiBiZSBhcHBsaWVkIHRvIG5vbi11bmlxdWUgYWN0b3JzLlxyXG4vL0lmIHRleHR1cmUgdHlwZSBpcyAtMSwgdGhlIGVudGlyZSB0ZXh0dXJlc2V0IGlzIHJlcGxhY2VkLCBvdGhlcndpc2UgdGhlIHRleHR1cmUgbWFwIHNwZWNpZmllZCBhdCBbdGV4dHVyZVR5cGVdIGluZGV4IGlzIHJlcGxhY2VkLiBSZXBsYWNpbmcgdGhlIGVudGlyZSB0ZXh0dXJlc2V0IG1heSBjYXVzZSBhIHZpc2libGUgbmVja3NlYW0uXHJcbmV4cG9ydCB2YXIgUmVwbGFjZUZhY2VUZXh0dXJlU2V0ID0gZnVuY3Rpb24gKGFrQWN0b3IsIGFrTWFsZVRYU1QsIGFrRmVtYWxlVFhTVCwgYWlUZXh0dXJlVHlwZSkge1xyXG4gICAgaWYgKGFpVGV4dHVyZVR5cGUgPT09IHZvaWQgMCkgeyBhaVRleHR1cmVUeXBlID0gLTE7IH1cclxuICAgIHJldHVybiBzbi5SZXBsYWNlRmFjZVRleHR1cmVTZXQoYWtBY3RvciwgYWtNYWxlVFhTVCwgYWtGZW1hbGVUWFNULCBhaVRleHR1cmVUeXBlKTtcclxufTtcclxuLy9SZXBsYWNlcyBza2luIHRleHR1cmVzZXQgZm9yIGdpdmVuIHNsb3RtYXNrIChpZS4gYm9keS9oYW5kKS4gTGFzdHMgb25lIGdhbWluZyBzZXNzaW9uLiBIYXMgdG8gYmUgcmVhcHBsaWVkIHdoZW4gcmUtZXF1aXBwaW5nIGFybW9yLlxyXG4vL0lmIHRleHR1cmUgdHlwZSBpcyAtMSwgdGhlIGVudGlyZSB0ZXh0dXJlc2V0IGlzIHJlcGxhY2VkLCBvdGhlcndpc2UgdGhlIHRleHR1cmUgbWFwIHNwZWNpZmllZCBhdCBbdGV4dHVyZVR5cGVdIGluZGV4IGlzIHJlcGxhY2VkLlxyXG5leHBvcnQgdmFyIFJlcGxhY2VTa2luVGV4dHVyZVNldCA9IGZ1bmN0aW9uIChha0FjdG9yLCBha01hbGVUWFNULCBha0ZlbWFsZVRYU1QsIGFpU2xvdE1hc2ssIGFpVGV4dHVyZVR5cGUpIHtcclxuICAgIGlmIChhaVRleHR1cmVUeXBlID09PSB2b2lkIDApIHsgYWlUZXh0dXJlVHlwZSA9IC0xOyB9XHJcbiAgICByZXR1cm4gc24uUmVwbGFjZVNraW5UZXh0dXJlU2V0KGFrQWN0b3IsIGFrTWFsZVRYU1QsIGFrRmVtYWxlVFhTVCwgYWlTbG90TWFzaywgYWlUZXh0dXJlVHlwZSk7XHJcbn07XHJcbi8vQ2hlY2tzIGZvciBOaUV4dHJhRGF0YSBub2RlcyBvbiBhY3RvciAtIFBPM19USU5UL1BPM19BTFBIQS9QTzNfVFhTVC9QTzNfVE9HR0xFL1BPM19TSEFERVJcclxuLy9TdG9wcyBhbGwgZWZmZWN0IHNoYWRlcnMgYW5kXHJcbi8vUE8zX1RJTlQgLSByZXNldHMgdGludCwgcmVidWlsZHMgZmFjZWdlbiBpZiBhY3RvciBpcyBwbGF5ZXJcclxuLy9QTzNfQUxQSEEgLSByZXNldHMgc2tpbiBhbHBoYVxyXG4vL1BPM19UWFNUIC0gcmVzZXRzIHRleHR1cmVzZXRzIHdpdGggdGV4dHVyZXBhdGhzIGNvbnRhaW5pbmcgZm9sZGVyTmFtZVxyXG4vL1BPM19UT0dHTEUgLSB1bmhpZGVzIGFsbCBjaGlsZHJlbiBvZiBub2RlcyB0aGF0IHdlcmUgd3JpdHRlbiB0byB0aGUgZXh0cmFEYXRhXHJcbi8vUE8zX1NIQURFUiAtIHJlY3JlYXRlcyB0aGUgb3JpZ2luYWwgc2hhZGVyIHR5cGUgKGFzIGNsb3NlIGFzIHBvc3NpYmxlLCBwcm9qZWN0ZWRVViBwYXJhbXMgYXJlIG5vdCByZXN0b3JlZClcclxuZXhwb3J0IHZhciBSZXNldEFjdG9yM0QgPSBmdW5jdGlvbiAoYWtBY3RvciwgYXNGb2xkZXJOYW1lKSB7IHJldHVybiBzbi5SZXNldEFjdG9yM0QoYWtBY3RvciwgYXNGb2xkZXJOYW1lKTsgfTtcclxuLy8wLjAgZGlzYWJsZXMgcmVmcmFjdGlvbiwgMS4wIGlzIG1heCByZWZyYWN0aW9uXHJcbmV4cG9ydCB2YXIgU2V0QWN0b3JSZWZyYWN0aW9uID0gZnVuY3Rpb24gKGFrQWN0b3IsIGFmUmVmcmFjdGlvbikgeyByZXR1cm4gc24uU2V0QWN0b3JSZWZyYWN0aW9uKGFrQWN0b3IsIGFmUmVmcmFjdGlvbik7IH07XHJcbi8vU2V0cyBoYWlyIGNvbG9yIG9uIGFjdG9yLiBDaGFuZ2VzIG1heSBwZXJzaXN0IHRocm91Z2hvdXQgZ2FtaW5nIHNlc3Npb24sIGV2ZW4gd2hlbiByZWxvYWRpbmcgcHJldmlvdXMgc2F2ZXMuXHJcbmV4cG9ydCB2YXIgU2V0SGFpckNvbG9yID0gZnVuY3Rpb24gKGFrQWN0b3IsIGFrQ29sb3IpIHsgcmV0dXJuIHNuLlNldEhhaXJDb2xvcihha0FjdG9yLCBha0NvbG9yKTsgfTtcclxuLy9TZXRzIGhlYWRwYXJ0J3MgbWVzaCBhbHBoYS4gRG9lc24ndCB3b3JrIGZvciBzb21lIGhhaXIgdHlwZXMgYW5kIGhldGVyb2Nocm9taWMgZXllc1xyXG5leHBvcnQgdmFyIFNldEhlYWRQYXJ0QWxwaGEgPSBmdW5jdGlvbiAoYWtBY3RvciwgYWlQYXJ0VHlwZSwgYWZBbHBoYSkgeyByZXR1cm4gc24uU2V0SGVhZFBhcnRBbHBoYShha0FjdG9yLCBhaVBhcnRUeXBlLCBhZkFscGhhKTsgfTtcclxuLy9TZXRzIHRleHR1cmVzZXQgYmVsb25naW5nIHRvIGhlYWRwYXJ0LCBpZiBhbnkuXHJcbmV4cG9ydCB2YXIgU2V0SGVhZFBhcnRUZXh0dXJlU2V0ID0gZnVuY3Rpb24gKGFrQWN0b3IsIGhlYWRwYXJ0VFhTVCwgYWlUeXBlKSB7IHJldHVybiBzbi5TZXRIZWFkUGFydFRleHR1cmVTZXQoYWtBY3RvciwgaGVhZHBhcnRUWFNULCBhaVR5cGUpOyB9O1xyXG4vL1NldHMgdmVsb2NpdHkgb2YgdGhlIGFjdG9yLiBNYXkgbm90IHRha2UgcGxhY2UgaW1tZWRpYXRlbHkuXHJcbmV4cG9ydCB2YXIgU2V0TGluZWFyVmVsb2NpdHkgPSBmdW5jdGlvbiAoYWtBY3RvciwgYWZYLCBhZlksIGFmWikgeyByZXR1cm4gc24uU2V0TGluZWFyVmVsb2NpdHkoYWtBY3RvciwgYWZYLCBhZlksIGFmWik7IH07XHJcbi8vU2V0cyBsb2NhbCBncmF2aXR5IG9mIHRoZSBhY3Rvci4gTmVnYXRpdmUgdmFsdWVzIHdpbGwgY2F1c2UgdGhlbSB0byBmbHkuIE1heSBub3QgdGFrZSBwbGFjZSBpbW1lZGlhdGVseS5cclxuZXhwb3J0IHZhciBTZXRMb2NhbEdyYXZpdHlBY3RvciA9IGZ1bmN0aW9uIChha0FjdG9yLCBhZlZhbHVlLCBhYkRpc2FibGVHcmF2aXR5T25Hcm91bmQpIHsgcmV0dXJuIHNuLlNldExvY2FsR3Jhdml0eUFjdG9yKGFrQWN0b3IsIGFmVmFsdWUsIGFiRGlzYWJsZUdyYXZpdHlPbkdyb3VuZCk7IH07XHJcbi8vU2V0cyBhbHBoYSBvbiBmYWNlLCBiYXNlIHNraW4gZm9ybSBhbmQgYXJtb3IgbWVzaGVzIHdpdGggdmlzaWJsZSBza2luLiBIYXMgdG8gYmUgcmUtYXBwbGllZCB3aGVuIGFybW9yIGlzIHVuL3JlLWVxdWlwcGVkLlxyXG5leHBvcnQgdmFyIFNldFNraW5BbHBoYSA9IGZ1bmN0aW9uIChha0FjdG9yLCBhZkFscGhhKSB7IHJldHVybiBzbi5TZXRTa2luQWxwaGEoYWtBY3RvciwgYWZBbHBoYSk7IH07XHJcbi8vU2V0cyBza2luIGNvbG9yIChmYWNlIGFuZCBib2R5KS4gSGFzIHRvIGJlIHJlLWFwcGxpZWQgd2hlbiBhcm1vciBpcyB1bi9yZS1lcXVpcHBlZC5cclxuZXhwb3J0IHZhciBTZXRTa2luQ29sb3IgPSBmdW5jdGlvbiAoYWtBY3RvciwgYWtDb2xvcikgeyByZXR1cm4gc24uU2V0U2tpbkNvbG9yKGFrQWN0b3IsIGFrQ29sb3IpOyB9O1xyXG4vL1NldHMgdGhlIGZsYWcgdXNlZCBieSB0aGUgZ2FtZSB0byBkZXRlcm1pbmUgc291bCB0cmFwcGVkIE5QQ3NcclxuZXhwb3J0IHZhciBTZXRTb3VsVHJhcHBlZCA9IGZ1bmN0aW9uIChha0FjdG9yLCBhYlRyYXBwZWQpIHsgcmV0dXJuIHNuLlNldFNvdWxUcmFwcGVkKGFrQWN0b3IsIGFiVHJhcHBlZCk7IH07XHJcbi8vVG9nZ2xlcyBhbnkgaGFpciB3aWdzIChnZW9tZXRyeSB3aXRoIGhhaXIgc2hhZGVyKSBmb3VuZCBvbiBzbG90cyBIYWlyL0xvbmdIYWlyXHJcbmV4cG9ydCB2YXIgVG9nZ2xlSGFpcldpZ3MgPSBmdW5jdGlvbiAoYWtBY3RvciwgYWJEaXNhYmxlKSB7IHJldHVybiBzbi5Ub2dnbGVIYWlyV2lncyhha0FjdG9yLCBhYkRpc2FibGUpOyB9O1xyXG4vKiogQVJNT1IgVFlQRVxyXG4gICAgICAgIExpZ2h0ID0gMFxyXG4gICAgICAgIEhlYXZ5ID0gMVxyXG4gICAgICAgIENsb3RoaW5nID0gMiAqL1xyXG4vL1VuZXF1aXBzIGFsbCBhcm1vciBvZiB0eXBlLCBvcHRpb25hbGx5IHNraXBwaW5nIGJpcGVkIHNsb3RzLlxyXG5leHBvcnQgdmFyIFVuZXF1aXBBbGxPZlR5cGUgPSBmdW5jdGlvbiAoYWtBY3RvciwgYWZBcm1vclR5cGUsIGFpU2xvdHNUb1NraXApIHsgcmV0dXJuIHNuLlVuZXF1aXBBbGxPZlR5cGUoYWtBY3RvciwgYWZBcm1vclR5cGUsIGFpU2xvdHNUb1NraXApOyB9O1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy9BQ1RPUkJBU0VcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vLS0tLS0tLVxyXG4vL0dFVFRFUlNcclxuLy8tLS0tLS0tXHJcbi8vR2V0cyBucGMgZGVhdGggaXRlbVxyXG5leHBvcnQgdmFyIEdldERlYXRoSXRlbSA9IGZ1bmN0aW9uIChha0Jhc2UpIHsgcmV0dXJuIHNuLkdldERlYXRoSXRlbShha0Jhc2UpOyB9O1xyXG4vL0dldCBhY3RvcmJhc2UgcGVyayBhdCBudGggaW5kZXhcclxuZXhwb3J0IHZhciBHZXROdGhQZXJrID0gZnVuY3Rpb24gKGFrQmFzZSwgYWlJbmRleCkgeyByZXR1cm4gc24uR2V0TnRoUGVyayhha0Jhc2UsIGFpSW5kZXgpOyB9O1xyXG4vL0dldCB0b3RhbCBhY3RvcmJhc2UgcGVyayBjb3VudFxyXG5leHBvcnQgdmFyIEdldFBlcmtDb3VudCA9IGZ1bmN0aW9uIChha0Jhc2UpIHtcclxuICAgIHJldHVybiBzbi5HZXRQZXJrQ291bnQoYWtCYXNlKTtcclxufTtcclxuLy8tLS0tLS0tXHJcbi8vU0VUVEVSU1xyXG4vLy0tLS0tLS1cclxuLy9TZXRzIG5wYyBkZWF0aCBpdGVtLiBDYW4gYmUgTm9uZS5cclxuZXhwb3J0IHZhciBTZXREZWF0aEl0ZW0gPSBmdW5jdGlvbiAoYWtCYXNlLCBha0xldmVsZWRJdGVtKSB7IHJldHVybiBzbi5TZXREZWF0aEl0ZW0oYWtCYXNlLCBha0xldmVsZWRJdGVtKTsgfTtcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vQUxJQVNcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vcmV0dXJucyB3aGV0aGVyIHRoZSBmb3JtIGhhcyBzY3JpcHQgYXR0YWNoZWQuIElmIHNjcmlwdE5hbWUgaXMgZW1wdHksIGl0IHdpbGwgcmV0dXJuIGlmIHRoZSBhbGlhcyBoYXMgYW55IG5vbi1iYXNlIHNjcmlwdHMgYXR0YWNoZWRcclxuZXhwb3J0IHZhciBJc1NjcmlwdEF0dGFjaGVkVG9BbGlhcyA9IGZ1bmN0aW9uIChha0FsaWFzLCBhc1NjcmlwdE5hbWUpIHsgcmV0dXJuIHNuLklzU2NyaXB0QXR0YWNoZWRUb0FsaWFzKGFrQWxpYXMsIGFzU2NyaXB0TmFtZSk7IH07XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vL0FSTU9SL0FERE9OU1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy9HZXRzIGFybW9yIGFkZG9uJ3MgZm9vdHN0ZXAgc2V0XHJcbmV4cG9ydCB2YXIgR2V0Rm9vdHN0ZXBTZXQgPSBmdW5jdGlvbiAoYWtBcm1hKSB7IHJldHVybiBzbi5HZXRGb290c3RlcFNldChha0FybWEpOyB9O1xyXG4vL1NldHMgYXJtb3IgYWRkb24ncyBmb290c3RlcCBzZXRcclxuZXhwb3J0IHZhciBTZXRGb290c3RlcFNldCA9IGZ1bmN0aW9uIChha0FybWEsIGFrRm9vdHN0ZXBTZXQpIHsgcmV0dXJuIHNuLlNldEZvb3RzdGVwU2V0KGFrQXJtYSwgYWtGb290c3RlcFNldCk7IH07XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vL0FSUkFZU1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy9BZGRzIGFjdG9yIHRvIGFycmF5LiBNb2RpZmllcyBhcnJheSBkaXJlY3RseSwgaXQgbXVzdCBiZSBpbml0aWFsaXplZCFcclxuZXhwb3J0IHZhciBBZGRBY3RvclRvQXJyYXkgPSBmdW5jdGlvbiAoYWtBY3RvciwgYWN0b3JBcnJheSkgeyByZXR1cm4gc24uQWRkQWN0b3JUb0FycmF5KGFrQWN0b3IsIGFjdG9yQXJyYXkpOyB9O1xyXG4vL0FkZHMgc3RyaW5nIHRvIGFycmF5LiBNb2RpZmllcyBhcnJheSBkaXJlY3RseSwgaXQgbXVzdCBiZSBpbml0aWFsaXplZCFcclxuZXhwb3J0IHZhciBBZGRTdHJpbmdUb0FycmF5ID0gZnVuY3Rpb24gKGFzU3RyaW5nLCBhc1N0cmluZ3MpIHsgcmV0dXJuIHNuLkFkZFN0cmluZ1RvQXJyYXkoYXNTdHJpbmcsIGFzU3RyaW5ncyk7IH07XHJcbi8vQ291bnRzIGhvdyBtYW55IGluc3RhbmNlcyBvZiBhIHN0cmluZyBhcmUgaW4gYW4gYXJyYXkuXHJcbmV4cG9ydCB2YXIgQXJyYXlTdHJpbmdDb3VudCA9IGZ1bmN0aW9uIChhc1N0cmluZywgYXNTdHJpbmdzKSB7IHJldHVybiBzbi5BcnJheVN0cmluZ0NvdW50KGFzU3RyaW5nLCBhc1N0cmluZ3MpOyB9O1xyXG4vL0FscGhhYmV0aWNhbGx5IHNvcnRzIGFuZCByZXR1cm5zIHRydW5jYXRlZCBzcmluZyBhcnJheS5cclxuZXhwb3J0IHZhciBTb3J0QXJyYXlTdHJpbmcgPSBmdW5jdGlvbiAoYXNTdHJpbmdzKSB7XHJcbiAgICByZXR1cm4gc24uU29ydEFycmF5U3RyaW5nKGFzU3RyaW5ncyk7XHJcbn07XHJcbi8vR2V0cyBuYW1lIGFycmF5IG9mIGFsbCB0aGUgYWN0b3JzIGluIHRoZSBhcmVhLCBzb3J0ZWQgYWxwaGFiZXRpY2FsbHkuIEdlbmVyaWMgYWN0b3JzIGFyZSBtZXJnZWQgKGllLiAzIFdoaXRlcnVuIEd1YXJkKHMpKS4gRmlsdGVyIGtleXdvcmQgb3B0aW9uYWxcclxuZXhwb3J0IHZhciBHZXRTb3J0ZWRBY3Rvck5hbWVzID0gZnVuY3Rpb24gKGFrS2V5d29yZCwgYXNQbHVyYWwsIGFiSW52ZXJ0S2V5d29yZCkge1xyXG4gICAgaWYgKGFzUGx1cmFsID09PSB2b2lkIDApIHsgYXNQbHVyYWwgPSBcIihzKVwiOyB9XHJcbiAgICByZXR1cm4gc24uR2V0U29ydGVkQWN0b3JOYW1lcyhha0tleXdvcmQsIGFzUGx1cmFsLCBhYkludmVydEtleXdvcmQpO1xyXG59O1xyXG4vL0dldHMgbmFtZSBhcnJheSBvZiBOUENzLCBzb3J0ZWQgYWxwaGFiZXRpY2FsbHkuIEdlbmVyaWMgYWN0b3JzIGFyZSBtZXJnZWQgKGllLiAzIFdoaXRlcnVuIEd1YXJkKHMpKS5cclxuZXhwb3J0IHZhciBHZXRTb3J0ZWROUENOYW1lcyA9IGZ1bmN0aW9uIChhaUFjdG9yQmFzZXMsIGFzUGx1cmFsKSB7XHJcbiAgICBpZiAoYXNQbHVyYWwgPT09IHZvaWQgMCkgeyBhc1BsdXJhbCA9IFwiKHMpXCI7IH1cclxuICAgIHJldHVybiBzbi5HZXRTb3J0ZWROUENOYW1lcyhhaUFjdG9yQmFzZXMsIGFzUGx1cmFsKTtcclxufTtcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vQk9PS1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy9DbGVhcnMgcmVhZCBmbGFnIChhbmQgd3JpdGVzIGl0IHRvIHRoZSBzYXZlKS5cclxuZXhwb3J0IHZhciBDbGVhclJlYWRGbGFnID0gZnVuY3Rpb24gKGFrQm9vaykge1xyXG4gICAgcmV0dXJuIHNuLkNsZWFyUmVhZEZsYWcoYWtCb29rKTtcclxufTtcclxuLy9TZXRzIHJlYWQgZmxhZyAoYW5kIHdyaXRlcyBpdCB0byB0aGUgc2F2ZSkuXHJcbmV4cG9ydCB2YXIgU2V0UmVhZEZsYWcgPSBmdW5jdGlvbiAoYWtCb29rKSB7XHJcbiAgICByZXR1cm4gc24uU2V0UmVhZEZsYWcoYWtCb29rKTtcclxufTtcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vQ0VMTFxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy9HZXRzIGNlbGwgbm9ydGggcm90YXRpb24vd29ybGRzcGFjZSBub3J0aCByb3RhdGlvbiBmb3IgZXh0ZXJpb3IgY2VsbHMuIFJvdGF0aW9uIGlzIGluIGRlZ3JlZXMuXHJcbmV4cG9ydCB2YXIgR2V0Q2VsbE5vcnRoUm90YXRpb24gPSBmdW5jdGlvbiAoYWtDZWxsKSB7XHJcbiAgICByZXR1cm4gc24uR2V0Q2VsbE5vcnRoUm90YXRpb24oYWtDZWxsKTtcclxufTtcclxuLy9HZXRzIGNlbGwgbGlnaHRpbmcgdGVtcGxhdGVcclxuZXhwb3J0IHZhciBHZXRMaWdodGluZ1RlbXBsYXRlID0gZnVuY3Rpb24gKGFrQ2VsbCkgeyByZXR1cm4gc24uR2V0TGlnaHRpbmdUZW1wbGF0ZShha0NlbGwpOyB9O1xyXG4vL1NldHMgY2VsbCBsaWdodGluZyB0ZW1wbGF0ZVxyXG5leHBvcnQgdmFyIFNldExpZ2h0aW5nVGVtcGxhdGUgPSBmdW5jdGlvbiAoYWtDZWxsLCBha0xpZ2h0aW5nVGVtcGxhdGUpIHsgcmV0dXJuIHNuLlNldExpZ2h0aW5nVGVtcGxhdGUoYWtDZWxsLCBha0xpZ2h0aW5nVGVtcGxhdGUpOyB9O1xyXG4vL1NldHMgY2VsbCBub3J0aCByb3RhdGlvbi5cclxuZXhwb3J0IHZhciBTZXRDZWxsTm9ydGhSb3RhdGlvbiA9IGZ1bmN0aW9uIChha0NlbGwsIGFmQW5nbGUpIHsgcmV0dXJuIHNuLlNldENlbGxOb3J0aFJvdGF0aW9uKGFrQ2VsbCwgYWZBbmdsZSk7IH07XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vL0RFQlVHXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vL0FkZHMgYWxsIGZ1bmN0aW9uYWwgc3BlbGxzIChpZS4gc3BlbGxzIHRoYXQgY2FuIGJlIGxlYXJuZWQgZnJvbSBzcGVsbCBib29rcywgYW5kIG5vdCBhbGwgMjAwMCsgc3BlbGxzIGxpa2UgcHNiKVxyXG5leHBvcnQgdmFyIEdpdmVQbGF5ZXJTcGVsbEJvb2sgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBzbi5HaXZlUGxheWVyU3BlbGxCb29rKCk7IH07XHJcbi8vRHVtcHMgY3VycmVudCBhbmltYXRpb24gdmFyaWFibGVzIHRvIHBvM19wYXB5cnVzZXh0ZW5kZXI2NC5sb2dcclxuZXhwb3J0IHZhciBEdW1wQW5pbWF0aW9uVmFyaWFibGVzID0gZnVuY3Rpb24gKGFrQWN0b3IsIGFzQW5pbWF0aW9uVmFyUHJlZml4KSB7IHJldHVybiBzbi5EdW1wQW5pbWF0aW9uVmFyaWFibGVzKGFrQWN0b3IsIGFzQW5pbWF0aW9uVmFyUHJlZml4KTsgfTtcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vREVURUNUSU9OXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vL1JldHVybnMgd2hldGhlciBvdGhlciBOUENzIGNhbiBkZXRlY3QgdGhpcyBhY3Rvci5cclxuLy8wIC0gIGNhbid0IGJlIGRldGVjdGVkLCAxIC0gbm9ybWFsLCAyIC0gIHdpbGwgYWx3YXlzIGJlIGRldGVjdGVkXHJcbmV4cG9ydCB2YXIgQ2FuQWN0b3JCZURldGVjdGVkID0gZnVuY3Rpb24gKGFrQWN0b3IpIHtcclxuICAgIHJldHVybiBzbi5DYW5BY3RvckJlRGV0ZWN0ZWQoYWtBY3Rvcik7XHJcbn07XHJcbi8vUmV0dXJucyB3aGV0aGVyIHRoaXMgYWN0b3IgY2FuIGRldGVjdCBvdGhlciBOUENzLlxyXG4vLzAgLSBjYW4gbmV2ZXIgZGV0ZWN0LCAxLSBub3JtYWwsIDIgLSB3aWxsIGFsd2F5cyBkZXRlY3Qgb3RoZXJzXHJcbmV4cG9ydCB2YXIgQ2FuQWN0b3JEZXRlY3QgPSBmdW5jdGlvbiAoYWtBY3Rvcikge1xyXG4gICAgcmV0dXJuIHNuLkNhbkFjdG9yRGV0ZWN0KGFrQWN0b3IpO1xyXG59O1xyXG4vL0ZvcmNlIHRoaXMgYWN0b3IgdG8gYmUgZGV0ZWN0ZWQgYnkgb3RoZXIgTlBDcyAoYWN0b3IgaXMgYWx3YXlzIHZpc2libGUpLlxyXG5leHBvcnQgdmFyIEZvcmNlQWN0b3JEZXRlY3Rpb24gPSBmdW5jdGlvbiAoYWtBY3Rvcikge1xyXG4gICAgcmV0dXJuIHNuLkZvcmNlQWN0b3JEZXRlY3Rpb24oYWtBY3Rvcik7XHJcbn07XHJcbi8vRm9yY2UgdGhpcyBhY3RvciB0byBhbHdheXMgZGV0ZWN0IHRoZWlyIHRhcmdldHNcclxuZXhwb3J0IHZhciBGb3JjZUFjdG9yRGV0ZWN0aW5nID0gZnVuY3Rpb24gKGFrQWN0b3IpIHtcclxuICAgIHJldHVybiBzbi5Gb3JjZUFjdG9yRGV0ZWN0aW5nKGFrQWN0b3IpO1xyXG59O1xyXG4vL1JldHVybnMgd2hldGhlciB0aGlzIGFjdG9yIGlzIGN1cnJlbnRseSBkZXRlY3RlZCBieSBvdGhlciBOUENzXHJcbmV4cG9ydCB2YXIgSXNEZXRlY3RlZEJ5QW55b25lID0gZnVuY3Rpb24gKGFrQWN0b3IpIHsgcmV0dXJuIHNuLklzRGV0ZWN0ZWRCeUFueW9uZShha0FjdG9yKTsgfTtcclxuLy9QcmV2ZW50IHRoaXMgYWN0b3IgZnJvbSBiZWluZyBkZXRlY3RlZCBieSBvdGhlciBOUENzIChhY3RvciBpcyBoaWRkZW4pLlxyXG5leHBvcnQgdmFyIFByZXZlbnRBY3RvckRldGVjdGlvbiA9IGZ1bmN0aW9uIChha0FjdG9yKSB7IHJldHVybiBzbi5QcmV2ZW50QWN0b3JEZXRlY3Rpb24oYWtBY3Rvcik7IH07XHJcbi8vUHJldmVudCB0aGlzIGFjdG9yIGZyb20gZGV0ZWN0aW5nIG90aGVyIE5QQ3MgKGFjdG9yIGlzIGJsaW5kKVxyXG5leHBvcnQgdmFyIFByZXZlbnRBY3RvckRldGVjdGluZyA9IGZ1bmN0aW9uIChha0FjdG9yKSB7IHJldHVybiBzbi5QcmV2ZW50QWN0b3JEZXRlY3RpbmcoYWtBY3Rvcik7IH07XHJcbi8vUmVzZXRzIGRldGVjdGlvbiBzdGF0ZVxyXG5leHBvcnQgdmFyIFJlc2V0QWN0b3JEZXRlY3Rpb24gPSBmdW5jdGlvbiAoYWtBY3Rvcikge1xyXG4gICAgcmV0dXJuIHNuLlJlc2V0QWN0b3JEZXRlY3Rpb24oYWtBY3Rvcik7XHJcbn07XHJcbi8vUmVzZXRzIGRldGVjdGluZyBzdGF0ZVxyXG5leHBvcnQgdmFyIFJlc2V0QWN0b3JEZXRlY3RpbmcgPSBmdW5jdGlvbiAoYWtBY3Rvcikge1xyXG4gICAgcmV0dXJuIHNuLlJlc2V0QWN0b3JEZXRlY3RpbmcoYWtBY3Rvcik7XHJcbn07XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vL0VGRkVDVFNIQURFUlxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8tLS0tLS0tXHJcbi8vR0VUVEVSU1xyXG4vLy0tLS0tLS1cclxuLyoqIEVGRkVDVCBTSEFERVIgRkxBR1NcclxuICAgICAgICBrTm9NZW1icmFuZVNoYWRlciA9IDB4MDAwMDAwMDFcclxuICAgICAgICBrTWVtYnJhbmVHcmV5c2NhbGVDb2xvciA9IDB4MDAwMDAwMDJcclxuICAgICAgICBrTWVtYnJhbmVHcmV5c2NhbGVBbHBoYSA9IDB4MDAwMDAwMDRcclxuICAgICAgICBrTm9QYXJ0aWNsZVNoYWRlciA9IDB4MDAwMDAwMDhcclxuICAgICAgICBrRWRnZUVmZmVjdEludmVyc2UgPSAweDAwMDAwMDEwXHJcbiAgICAgICAga0FmZmVjdFNraW5Pbmx5ID0gMHgwMDAwMDAyMFxyXG4gICAgICAgIGtJZ25vcmVBbHBoYSA9IDB4MDAwMDAwNDBcclxuICAgICAgICBrUHJvamVjdFVWID0gMHgwMDAwMDA4MFxyXG4gICAgICAgIGtJZ25vcmVCYXNlR2VvbWV0cnlBbHBoYSA9IDB4MDAwMDAxMDBcclxuICAgICAgICBrTGlnaHRpbmcgPSAweDAwMDAwMjAwXHJcbiAgICAgICAga05vV2VhcG9ucyA9IDB4MDAwMDA0MDBcclxuICAgICAgICBrUGFydGljbGVBbmltYXRlZCA9IDB4MDAwMDgwMDBcclxuICAgICAgICBrUGFydGljbGVHcmV5c2NhbGVDb2xvciA9IDB4MDAwMTAwMDBcclxuICAgICAgICBrUGFydGljbGVHcmV5c2NhbGVBbHBoYSA9IDB4MDAwMjAwMDBcclxuICAgICAgICBrVXNlQmxvb2RHZW9tZXRyeSA9IDB4MDEwMDAwMDAgKi9cclxuLy9HZXRzIGFkZG9uIG1vZGVsc1xyXG5leHBvcnQgdmFyIEdldEFkZG9uTW9kZWxzID0gZnVuY3Rpb24gKGFrRWZmZWN0U2hhZGVyKSB7IHJldHVybiBzbi5HZXRBZGRvbk1vZGVscyhha0VmZmVjdFNoYWRlcik7IH07XHJcbi8vUmV0dXJucyB0aGUgdG90YWwgbnVtYmVyIG9mIGVmZmVjdCBzaGFkZXJzIHByZXNlbnQvcHJlc2VudCBhbmQgYWN0aXZlIChvbiBvYmplY3RzKSB3aXRoaW4gdGhlIGxvYWRlZCBhcmVhLlxyXG5leHBvcnQgdmFyIEdldEVmZmVjdFNoYWRlclRvdGFsQ291bnQgPSBmdW5jdGlvbiAoYWtFZmZlY3RTaGFkZXIsIGFiQWN0aXZlKSB7IHJldHVybiBzbi5HZXRFZmZlY3RTaGFkZXJUb3RhbENvdW50KGFrRWZmZWN0U2hhZGVyLCBhYkFjdGl2ZSk7IH07XHJcbi8vSXMgZWZmZWN0IHNoYWRlciBmbGFnIHNldD9cclxuZXhwb3J0IHZhciBJc0VmZmVjdFNoYWRlckZsYWdTZXQgPSBmdW5jdGlvbiAoYWtFZmZlY3RTaGFkZXIsIGFpRmxhZykgeyByZXR1cm4gc24uSXNFZmZlY3RTaGFkZXJGbGFnU2V0KGFrRWZmZWN0U2hhZGVyLCBhaUZsYWcpOyB9O1xyXG4vL0dldCBmaWxsIHRleHR1cmVcclxuZXhwb3J0IHZhciBHZXRNZW1icmFuZUZpbGxUZXh0dXJlID0gZnVuY3Rpb24gKGFrRWZmZWN0U2hhZGVyKSB7IHJldHVybiBzbi5HZXRNZW1icmFuZUZpbGxUZXh0dXJlKGFrRWZmZWN0U2hhZGVyKTsgfTtcclxuLy9HZXQgaG9sZXMgdGV4dHVyZVxyXG5leHBvcnQgdmFyIEdldE1lbWJyYW5lSG9sZXNUZXh0dXJlID0gZnVuY3Rpb24gKGFrRWZmZWN0U2hhZGVyKSB7IHJldHVybiBzbi5HZXRNZW1icmFuZUhvbGVzVGV4dHVyZShha0VmZmVjdFNoYWRlcik7IH07XHJcbi8vR2V0IG1lbWJyYW5lIHBhbGV0dGUgdGV4dHVyZVxyXG5leHBvcnQgdmFyIEdldE1lbWJyYW5lUGFsZXR0ZVRleHR1cmUgPSBmdW5jdGlvbiAoYWtFZmZlY3RTaGFkZXIpIHsgcmV0dXJuIHNuLkdldE1lbWJyYW5lUGFsZXR0ZVRleHR1cmUoYWtFZmZlY3RTaGFkZXIpOyB9O1xyXG4vL0dldHMgZnVsbCBwYXJ0aWNsZSBjb3VudC5cclxuZXhwb3J0IHZhciBHZXRQYXJ0aWNsZUZ1bGxDb3VudCA9IGZ1bmN0aW9uIChha0VmZmVjdFNoYWRlcikgeyByZXR1cm4gc24uR2V0UGFydGljbGVGdWxsQ291bnQoYWtFZmZlY3RTaGFkZXIpOyB9O1xyXG4vL0dldCBwYXJ0aWNsZSBwYWxldHRlIHRleHR1cmVcclxuZXhwb3J0IHZhciBHZXRQYXJ0aWNsZVBhbGV0dGVUZXh0dXJlID0gZnVuY3Rpb24gKGFrRWZmZWN0U2hhZGVyKSB7IHJldHVybiBzbi5HZXRQYXJ0aWNsZVBhbGV0dGVUZXh0dXJlKGFrRWZmZWN0U2hhZGVyKTsgfTtcclxuLy9HZXQgcGFydGljbGUgc2hhZGVyIHRleHR1cmVcclxuZXhwb3J0IHZhciBHZXRQYXJ0aWNsZVNoYWRlclRleHR1cmUgPSBmdW5jdGlvbiAoYWtFZmZlY3RTaGFkZXIpIHsgcmV0dXJuIHNuLkdldFBhcnRpY2xlU2hhZGVyVGV4dHVyZShha0VmZmVjdFNoYWRlcik7IH07XHJcbi8vR2V0cyBwZXJzaXN0ZW50IGNvdW50LlxyXG5leHBvcnQgdmFyIEdldFBhcnRpY2xlUGVyc2lzdGVudENvdW50ID0gZnVuY3Rpb24gKGFrRWZmZWN0U2hhZGVyKSB7IHJldHVybiBzbi5HZXRQYXJ0aWNsZVBlcnNpc3RlbnRDb3VudChha0VmZmVjdFNoYWRlcik7IH07XHJcbi8vLS0tLS0tLVxyXG4vL1NFVFRFUlNcclxuLy8tLS0tLS0tXHJcbi8vQ2xlYXJzIGVmZmVjdCBzaGFkZXIgZmxhZy5cclxuZXhwb3J0IHZhciBDbGVhckVmZmVjdFNoYWRlckZsYWcgPSBmdW5jdGlvbiAoYWtFZmZlY3RTaGFkZXIsIGFpRmxhZykgeyByZXR1cm4gc24uQ2xlYXJFZmZlY3RTaGFkZXJGbGFnKGFrRWZmZWN0U2hhZGVyLCBhaUZsYWcpOyB9O1xyXG4vL0dldHMgYWRkb24gbW9kZWxzXHJcbmV4cG9ydCB2YXIgU2V0QWRkb25Nb2RlbHMgPSBmdW5jdGlvbiAoYWtFZmZlY3RTaGFkZXIsIGFrRGVicmlzKSB7IHJldHVybiBzbi5TZXRBZGRvbk1vZGVscyhha0VmZmVjdFNoYWRlciwgYWtEZWJyaXMpOyB9O1xyXG4vL1NldCBlZmZlY3Qgc2hhZGVyIGZsYWcuXHJcbmV4cG9ydCB2YXIgU2V0RWZmZWN0U2hhZGVyRmxhZyA9IGZ1bmN0aW9uIChha0VmZmVjdFNoYWRlciwgYWlGbGFnKSB7IHJldHVybiBzbi5TZXRFZmZlY3RTaGFkZXJGbGFnKGFrRWZmZWN0U2hhZGVyLCBhaUZsYWcpOyB9O1xyXG4vL1NldCBtZW1icmFuZSBjb2xvciBrZXlcclxuZXhwb3J0IHZhciBTZXRNZW1icmFuZUNvbG9yS2V5RGF0YSA9IGZ1bmN0aW9uIChha0VmZmVjdFNoYWRlciwgYWlDb2xvcktleSwgYWlSR0IsIGFmQWxwaGEsIGFmVGltZSkge1xyXG4gICAgcmV0dXJuIHNuLlNldE1lbWJyYW5lQ29sb3JLZXlEYXRhKGFrRWZmZWN0U2hhZGVyLCBhaUNvbG9yS2V5LCBhaVJHQiwgYWZBbHBoYSwgYWZUaW1lKTtcclxufTtcclxuLy9TZXQgbWVtYnJhbmUgZmlsbCB0ZXh0dXJlXHJcbmV4cG9ydCB2YXIgU2V0TWVtYnJhbmVGaWxsVGV4dHVyZSA9IGZ1bmN0aW9uIChha0VmZmVjdFNoYWRlciwgYXNUZXh0dXJlTmFtZSkgeyByZXR1cm4gc24uU2V0TWVtYnJhbmVGaWxsVGV4dHVyZShha0VmZmVjdFNoYWRlciwgYXNUZXh0dXJlTmFtZSk7IH07XHJcbi8vU2V0IG1lbWJyYW5lIGhvbGVzIHRleHR1cmVcclxuZXhwb3J0IHZhciBTZXRNZW1icmFuZUhvbGVzVGV4dHVyZSA9IGZ1bmN0aW9uIChha0VmZmVjdFNoYWRlciwgYXNUZXh0dXJlTmFtZSkgeyByZXR1cm4gc24uU2V0TWVtYnJhbmVIb2xlc1RleHR1cmUoYWtFZmZlY3RTaGFkZXIsIGFzVGV4dHVyZU5hbWUpOyB9O1xyXG4vL1NldCBtZW1icmFuZSBwYWxldHRlIHRleHR1cmVcclxuZXhwb3J0IHZhciBTZXRNZW1icmFuZVBhbGV0dGVUZXh0dXJlID0gZnVuY3Rpb24gKGFrRWZmZWN0U2hhZGVyLCBhc1RleHR1cmVOYW1lKSB7IHJldHVybiBzbi5TZXRNZW1icmFuZVBhbGV0dGVUZXh0dXJlKGFrRWZmZWN0U2hhZGVyLCBhc1RleHR1cmVOYW1lKTsgfTtcclxuLy9TZXQgcGFydGljbGUgY29sb3Iga2V5XHJcbmV4cG9ydCB2YXIgU2V0UGFydGljbGVDb2xvcktleURhdGEgPSBmdW5jdGlvbiAoYWtFZmZlY3RTaGFkZXIsIGFpQ29sb3JLZXksIGFpUkdCLCBhZkFscGhhLCBhZlRpbWUpIHtcclxuICAgIHJldHVybiBzbi5TZXRQYXJ0aWNsZUNvbG9yS2V5RGF0YShha0VmZmVjdFNoYWRlciwgYWlDb2xvcktleSwgYWlSR0IsIGFmQWxwaGEsIGFmVGltZSk7XHJcbn07XHJcbi8vU2V0cyBmdWxsIHBhcnRpY2xlIGNvdW50LlxyXG5leHBvcnQgdmFyIFNldFBhcnRpY2xlRnVsbENvdW50ID0gZnVuY3Rpb24gKGFrRWZmZWN0U2hhZGVyLCBhZlBhcnRpY2xlQ291bnQpIHsgcmV0dXJuIHNuLlNldFBhcnRpY2xlRnVsbENvdW50KGFrRWZmZWN0U2hhZGVyLCBhZlBhcnRpY2xlQ291bnQpOyB9O1xyXG4vL1NldCBwYXJ0aWNsZSBzaGFkZXIgdGV4dHVyZVxyXG5leHBvcnQgdmFyIFNldFBhcnRpY2xlUGFsZXR0ZVRleHR1cmUgPSBmdW5jdGlvbiAoYWtFZmZlY3RTaGFkZXIsIGFzVGV4dHVyZU5hbWUpIHsgcmV0dXJuIHNuLlNldFBhcnRpY2xlUGFsZXR0ZVRleHR1cmUoYWtFZmZlY3RTaGFkZXIsIGFzVGV4dHVyZU5hbWUpOyB9O1xyXG4vL1NldHMgcGVyc2lzdGVudCBwYXJ0aWNsZSBjb3VudC5cclxuZXhwb3J0IHZhciBTZXRQYXJ0aWNsZVBlcnNpc3RlbnRDb3VudCA9IGZ1bmN0aW9uIChha0VmZmVjdFNoYWRlciwgYWZQYXJ0aWNsZUNvdW50KSB7IHJldHVybiBzbi5TZXRQYXJ0aWNsZVBlcnNpc3RlbnRDb3VudChha0VmZmVjdFNoYWRlciwgYWZQYXJ0aWNsZUNvdW50KTsgfTtcclxuLy9TZXQgcGFydGljbGUgc2hhZGVyIHRleHR1cmVcclxuZXhwb3J0IHZhciBTZXRQYXJ0aWNsZVNoYWRlclRleHR1cmUgPSBmdW5jdGlvbiAoYWtFZmZlY3RTaGFkZXIsIGFzVGV4dHVyZU5hbWUpIHsgcmV0dXJuIHNuLlNldFBhcnRpY2xlU2hhZGVyVGV4dHVyZShha0VmZmVjdFNoYWRlciwgYXNUZXh0dXJlTmFtZSk7IH07XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy9FTkNIQU5UTUVOVCAtIHNlZSBTUEVMTFxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vLS0tLS0tLS1cclxuLy9HRVRURVJTXHJcbi8vLS0tLS0tLS1cclxuLyoqIEVOQ0hBTlRNRU5UIFRZUEVTXHJcbiAgICAgICAgRW5jaGFudG1lbnQgPSA2LFxyXG4gICAgICAgIFN0YWZmRW5jaGFudG1lbnQgPSAxMiAqL1xyXG4vL1JldHVybnMgZW5jaGFudG1lbnQgdHlwZS4gLTEgaWYgIGlzIE5vbmVcclxuZXhwb3J0IHZhciBHZXRFbmNoYW50bWVudFR5cGUgPSBmdW5jdGlvbiAoYWtFbmNoYW50bWVudCkgeyByZXR1cm4gc24uR2V0RW5jaGFudG1lbnRUeXBlKGFrRW5jaGFudG1lbnQpOyB9O1xyXG4vLy0tLS0tLS0tXHJcbi8vU0VUVEVSU1xyXG4vLy0tLS0tLS0tXHJcbmV4cG9ydCB2YXIgQWRkTWFnaWNFZmZlY3RUb0VuY2hhbnRtZW50ID0gZnVuY3Rpb24gKGFrRW5jaGFudG1lbnQsIGFrTWFnaWNFZmZlY3QsIGFmTWFnbml0dWRlLCBhaUFyZWEsIGFpRHVyYXRpb24sIGFmQ29zdCwgYXNDb25kaXRpb25MaXN0KSB7XHJcbiAgICBpZiAoYWZDb3N0ID09PSB2b2lkIDApIHsgYWZDb3N0ID0gMC4wOyB9XHJcbiAgICByZXR1cm4gc24uQWRkTWFnaWNFZmZlY3RUb0VuY2hhbnRtZW50KGFrRW5jaGFudG1lbnQsIGFrTWFnaWNFZmZlY3QsIGFmTWFnbml0dWRlLCBhaUFyZWEsIGFpRHVyYXRpb24sIGFmQ29zdCwgYXNDb25kaXRpb25MaXN0KTtcclxufTtcclxuLy9BZGRzIGVmZmVjdGl0ZW0gZnJvbSBFbmNoYW50bWVudCB0byB0YXJnZXQgRW5jaGFudG1lbnQsIGF0IGdpdmVuIGluZGV4LiBTYW1lIGFzIGFib3ZlIGZ1bmN0aW9uLCBidXQgbGVzcyB2ZXJib3NlLCBhbmQgcHJlc2VydmVzIGFsbCBjb25kaXRpb25zLiBPcHRpb25hbCBjb3N0IGFyZ3VtZW50LlxyXG5leHBvcnQgdmFyIEFkZEVmZmVjdEl0ZW1Ub0VuY2hhbnRtZW50ID0gZnVuY3Rpb24gKGFrRW5jaGFudG1lbnQsIGFrRW5jaGFudG1lbnRUb0NvcHlGcm9tLCBhaUluZGV4LCBhZkNvc3QpIHtcclxuICAgIGlmIChhZkNvc3QgPT09IHZvaWQgMCkgeyBhZkNvc3QgPSAtMS4wOyB9XHJcbiAgICByZXR1cm4gc24uQWRkRWZmZWN0SXRlbVRvRW5jaGFudG1lbnQoYWtFbmNoYW50bWVudCwgYWtFbmNoYW50bWVudFRvQ29weUZyb20sIGFpSW5kZXgsIGFmQ29zdCk7XHJcbn07XHJcbi8vUmVtb3ZlcyBtYWdpYyBlZmZlY3QgZnJvbSBFbmNoYW50bWVudCB0aGF0IG1hdGNoZXMgbWFnbml0dWRlL2FyZWEvZHVyYXRpb24vY29zdC5cclxuZXhwb3J0IHZhciBSZW1vdmVNYWdpY0VmZmVjdEZyb21FbmNoYW50bWVudCA9IGZ1bmN0aW9uIChha0VuY2hhbnRtZW50LCBha01hZ2ljRWZmZWN0LCBhZk1hZ25pdHVkZSwgYWlBcmVhLCBhaUR1cmF0aW9uLCBhZkNvc3QpIHtcclxuICAgIGlmIChhZkNvc3QgPT09IHZvaWQgMCkgeyBhZkNvc3QgPSAwLjA7IH1cclxuICAgIHJldHVybiBzbi5SZW1vdmVNYWdpY0VmZmVjdEZyb21FbmNoYW50bWVudChha0VuY2hhbnRtZW50LCBha01hZ2ljRWZmZWN0LCBhZk1hZ25pdHVkZSwgYWlBcmVhLCBhaUR1cmF0aW9uLCBhZkNvc3QpO1xyXG59O1xyXG4vL1JlbW92ZXMgZWZmZWN0aXRlbSBmcm9tIEVuY2hhbnRtZW50IHRoYXQgbWF0Y2hlcyBFbmNoYW50bWVudCBhdCBpbmRleC5cclxuZXhwb3J0IHZhciBSZW1vdmVFZmZlY3RJdGVtRnJvbUVuY2hhbnRtZW50ID0gZnVuY3Rpb24gKGFrRW5jaGFudG1lbnQsIGFrRW5jaGFudG1lbnRUb01hdGNoRnJvbSwgYWlJbmRleCkge1xyXG4gICAgcmV0dXJuIHNuLlJlbW92ZUVmZmVjdEl0ZW1Gcm9tRW5jaGFudG1lbnQoYWtFbmNoYW50bWVudCwgYWtFbmNoYW50bWVudFRvTWF0Y2hGcm9tLCBhaUluZGV4KTtcclxufTtcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vRkVDXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vL0ZFQyBmdW5jdGlvblxyXG4vL3JldHVybnMgZWZmZWN0IHR5cGUsIGVmZmVjdCBza2lsbCBsZXZlbCwgYW5kIHByb2plY3RpbGUgdHlwZSwgb2YgdGhlIGhpZ2hlc3QgbWFnbml0dWRlIGVmZmVjdCBwcmVzZW50IG9uIHRoZSBhY3RvclxyXG4vL3Blcm1hbmVudCAtIFNVTiwgQUNJRCwgRklSRSwgRlJPU1QsIFNIT0NLLCBEUkFJTlxyXG4vL3RlbXBvcmFyeSAtIFBPSVNPTiwgRkVBUlxyXG5leHBvcnQgdmFyIEdldERlYXRoRWZmZWN0VHlwZSA9IGZ1bmN0aW9uIChha0FjdG9yLCB0eXBlKSB7IHJldHVybiBzbi5HZXREZWF0aEVmZmVjdFR5cGUoYWtBY3RvciwgdHlwZSk7IH07XHJcbi8vMCAtIGNoYXJyZWQvc2tlbGV0b25cclxuLy8xIC0gZHJhaW5lZFxyXG4vLzIgLSBwb2lzb25lZC9mcmlnaHRlbmVkXHJcbi8vMy0gIGFnZWRcclxuLy80IC0gY2hhcnJlZCBjcmVhdHVyZVxyXG4vLzUgLSBmcm96ZW5cclxuZXhwb3J0IHZhciBSZW1vdmVFZmZlY3RzTm90T2ZUeXBlID0gZnVuY3Rpb24gKGFrQWN0b3IsIGFpRWZmZWN0VHlwZSkgeyByZXR1cm4gc24uUmVtb3ZlRWZmZWN0c05vdE9mVHlwZShha0FjdG9yLCBhaUVmZmVjdFR5cGUpOyB9O1xyXG4vLyAwIC0gcGVybWFuZW50XHJcbi8vIDEgLSB0ZW1wb3JhcnlcclxuLy8gMiAtIGZyb3plbkFjdG9yXHJcbi8vIDMgLSBmcm96ZW5Db2xcclxuZXhwb3J0IHZhciBTZW5kRkVDUmVzZXRFdmVudCA9IGZ1bmN0aW9uIChha0FjdG9yLCBhaVR5cGUsIGFiUmVzZXQzRCkgeyByZXR1cm4gc24uU2VuZEZFQ1Jlc2V0RXZlbnQoYWtBY3RvciwgYWlUeXBlLCBhYlJlc2V0M0QpOyB9O1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy9GT1JNXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLy0tLS0tLS1cclxuLy9HRVRURVJTXHJcbi8vLS0tLS0tLVxyXG4vL1JlY29yZCBmbGFnc1xyXG4vL2h0dHBzOi8vZW4udWVzcC5uZXQvd2lraS9Ta3lyaW1fTW9kOk1vZF9GaWxlX0Zvcm1hdCNSZWNvcmRzXHJcbi8vZXZhbHVhdGVzIGNvbmRpdGlvbiBsaXN0cyBmb3Igc3BlbGxzL3BvdGlvbnMvZW5jaGFudG1lbnRzL21nZWZzIGFuZCByZXR1cm5zIGlmIHRoZXkgY2FuIGJlIGZ1bGxmaWxsZWRcclxuZXhwb3J0IHZhciBFdmFsdWF0ZUNvbmRpdGlvbkxpc3QgPSBmdW5jdGlvbiAoYWtGb3JtLCBha0FjdGlvblJlZiwgYWtUYXJnZXRSZWYpIHsgcmV0dXJuIHNuLkV2YWx1YXRlQ29uZGl0aW9uTGlzdChha0Zvcm0sIGFrQWN0aW9uUmVmLCBha1RhcmdldFJlZik7IH07XHJcbi8vQ2xlYXIgcmVjb3JkIGZsYWdcclxuZXhwb3J0IHZhciBDbGVhclJlY29yZEZsYWcgPSBmdW5jdGlvbiAoYWtGb3JtLCBhaUZsYWcpIHsgcmV0dXJuIHNuLkNsZWFyUmVjb3JkRmxhZyhha0Zvcm0sIGFpRmxhZyk7IH07XHJcbi8vQnVpbGRzIGEgbGlzdCBvZiBjb25kaXRpb25zIHByZXNlbnQgb24gdGhlIGZvcm0uIEluZGV4IGlzIGZvciBzcGVsbHMvb3RoZXIgZm9ybXMgdGhhdCBoYXZlIGxpc3RzIHdpdGggY29uZGl0aW9uc1xyXG4vL1NvbWUgY29uZGl0aW9ucyBtYXkgYmUgc2tpcHBlZCAoY29uZGl0aW9ucyB0aGF0IHJlcXVpcmUgbm9uIHBsYXllciByZWZlcmVuY2VzLCBvdmVybHkgY29tcGxleCBjb25kaXRpb25zIGludm9sdmluZyBwYWNrYWdlcy9hbGlhc2VzKVxyXG5leHBvcnQgdmFyIEdldENvbmRpdGlvbkxpc3QgPSBmdW5jdGlvbiAoYWtGb3JtLCBhaUluZGV4KSB7XHJcbiAgICBpZiAoYWlJbmRleCA9PT0gdm9pZCAwKSB7IGFpSW5kZXggPSAwOyB9XHJcbiAgICByZXR1cm4gc24uR2V0Q29uZGl0aW9uTGlzdChha0Zvcm0sIGFpSW5kZXgpO1xyXG59O1xyXG4vL0dldCBmb3JtIGVkaXRvcklEXHJcbmV4cG9ydCB2YXIgR2V0Rm9ybUVkaXRvcklEID0gZnVuY3Rpb24gKGFrRm9ybSkge1xyXG4gICAgcmV0dXJuIHNuLkdldEZvcm1FZGl0b3JJRChha0Zvcm0pO1xyXG59O1xyXG4vL1JldHVybnMgd2hldGhlciB0aGUgZm9ybSBpcyBwYXJ0IG9mIHRoZSBtb2RcclxuZXhwb3J0IHZhciBJc0Zvcm1Jbk1vZCA9IGZ1bmN0aW9uIChha0Zvcm0sIGFzTW9kTmFtZSkgeyByZXR1cm4gc24uSXNGb3JtSW5Nb2QoYWtGb3JtLCBhc01vZE5hbWUpOyB9O1xyXG4vL1JldHVybnMgd2hldGhlciB0aGUgZm9ybSBpcyB0ZW1wb3JhcnkgKGllLiBoYXMgYSBmb3JtSUQgYmVnaW5uaW5nIHdpdGggRkYpXHJcbmV4cG9ydCB2YXIgSXNHZW5lcmF0ZWRGb3JtID0gZnVuY3Rpb24gKGFrRm9ybSkge1xyXG4gICAgcmV0dXJuIHNuLklzR2VuZXJhdGVkRm9ybShha0Zvcm0pO1xyXG59O1xyXG4vL0lzIHJlY29yZCBmbGFnIHNldD9cclxuZXhwb3J0IHZhciBJc1JlY29yZEZsYWdTZXQgPSBmdW5jdGlvbiAoYWtGb3JtLCBhaUZsYWcpIHsgcmV0dXJuIHNuLklzUmVjb3JkRmxhZ1NldChha0Zvcm0sIGFpRmxhZyk7IH07XHJcbi8vcmV0dXJucyB3aGV0aGVyIHRoZSBmb3JtIGhhcyBzY3JpcHQgYXR0YWNoZWQuIElmIHNjcmlwdE5hbWUgaXMgZW1wdHksIGl0IHdpbGwgcmV0dXJuIGlmIHRoZSBmb3JtIGhhcyBhbnkgbm9uLWJhc2Ugc2NyaXB0cyBhdHRhY2hlZFxyXG5leHBvcnQgdmFyIElzU2NyaXB0QXR0YWNoZWRUb0Zvcm0gPSBmdW5jdGlvbiAoYWtGb3JtLCBhc1NjcmlwdE5hbWUpIHsgcmV0dXJuIHNuLklzU2NyaXB0QXR0YWNoZWRUb0Zvcm0oYWtGb3JtLCBhc1NjcmlwdE5hbWUpOyB9O1xyXG4vL1NldCByZWNvcmQgZmxhZ1xyXG5leHBvcnQgdmFyIFNldFJlY29yZEZsYWcgPSBmdW5jdGlvbiAoYWtGb3JtLCBhaUZsYWcpIHsgcmV0dXJuIHNuLlNldFJlY29yZEZsYWcoYWtGb3JtLCBhaUZsYWcpOyB9O1xyXG4vLy0tLS0tLS1cclxuLy9TRVRURVJTXHJcbi8vLS0tLS0tLVxyXG4vL0FkZHMga2V5d29yZCB0byBmb3JtLiBGYWlscyBpZiB0aGUgZm9ybSBkb2Vzbid0IGFjY2VwdCBrZXl3b3Jkcy5cclxuZXhwb3J0IHZhciBBZGRLZXl3b3JkVG9Gb3JtID0gZnVuY3Rpb24gKGFrRm9ybSwgYWtLZXl3b3JkKSB7IHJldHVybiBzbi5BZGRLZXl3b3JkVG9Gb3JtKGFrRm9ybSwgYWtLZXl3b3JkKTsgfTtcclxuLy9GYXZvcml0ZXMgaXRlbSAobXVzdCBiZSBpbiBpbnZlbnRvcnkpIG9yIHNwZWxsL3Nob3V0XHJcbmV4cG9ydCB2YXIgTWFya0l0ZW1Bc0Zhdm9yaXRlID0gZnVuY3Rpb24gKGFrRm9ybSkge1xyXG4gICAgcmV0dXJuIHNuLk1hcmtJdGVtQXNGYXZvcml0ZShha0Zvcm0pO1xyXG59O1xyXG4vL1JlcGxhY2VzIGdpdmVuIGtleXdvcmQgd2l0aCBuZXcgb25lIG9uIGZvcm0uIE9ubHkgbGFzdHMgZm9yIGEgc2luZ2xlIGdhbWluZyBzZXNzaW9uLiBbcG9ydGVkIGZyb20gRGllbmVzVG9vbHNdLlxyXG5leHBvcnQgdmFyIFJlcGxhY2VLZXl3b3JkT25Gb3JtID0gZnVuY3Rpb24gKGFrRm9ybSwgYWtLZXl3b3JkQWRkLCBha0tleXdvcmRSZW1vdmUpIHsgcmV0dXJuIHNuLlJlcGxhY2VLZXl3b3JkT25Gb3JtKGFrRm9ybSwgYWtLZXl3b3JkQWRkLCBha0tleXdvcmRSZW1vdmUpOyB9O1xyXG4vL1JlbW92ZXMga2V5d29yZCwgaWYgcHJlc2VudCwgZnJvbSBmb3JtLlxyXG5leHBvcnQgdmFyIFJlbW92ZUtleXdvcmRPbkZvcm0gPSBmdW5jdGlvbiAoYWtGb3JtLCBha0tleXdvcmQpIHsgcmV0dXJuIHNuLlJlbW92ZUtleXdvcmRPbkZvcm0oYWtGb3JtLCBha0tleXdvcmQpOyB9O1xyXG4vL1VuZmF2b3JpdGVzIGl0ZW0gKG11c3QgYmUgaW4gaW52ZW50b3J5KSBvciBzcGVsbC9zaG91dFxyXG5leHBvcnQgdmFyIFVubWFya0l0ZW1Bc0Zhdm9yaXRlID0gZnVuY3Rpb24gKGFrRm9ybSkge1xyXG4gICAgcmV0dXJuIHNuLlVubWFya0l0ZW1Bc0Zhdm9yaXRlKGFrRm9ybSk7XHJcbn07XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vL0ZVUk5JVFVSRVxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLyoqIEZVUk5JVFVSRSBUWVBFU1xyXG4gICAgICAgIFBlcmNoID0gMFxyXG4gICAgICAgIExlYW4gPSAxXHJcbiAgICAgICAgU2l0ID0gMlxyXG4gICAgICAgIFNsZWVwID0gMyAqL1xyXG4vL0dldHMgZnVybml0dXJlIHR5cGVcclxuZXhwb3J0IHZhciBHZXRGdXJuaXR1cmVUeXBlID0gZnVuY3Rpb24gKGFrRnVybml0dXJlKSB7IHJldHVybiBzbi5HZXRGdXJuaXR1cmVUeXBlKGFrRnVybml0dXJlKTsgfTtcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vR0FNRVxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy9HZXRzIGFsbCBlbmNoYW50bWVudHMgZnJvbSBiYXNlIGdhbWUgKyBtb2RzLCBmaWx0ZXJlZCB1c2luZyBvcHRpb25hbCBrZXl3b3JkIGFycmF5XHJcbmV4cG9ydCB2YXIgR2V0QWxsRW5jaGFudG1lbnRzID0gZnVuY3Rpb24gKGFrS2V5d29yZHMpIHtcclxuICAgIGlmIChha0tleXdvcmRzID09PSB2b2lkIDApIHsgYWtLZXl3b3JkcyA9IG51bGw7IH1cclxuICAgIHJldHVybiBzbi5HZXRBbGxFbmNoYW50bWVudHMoYWtLZXl3b3Jkcyk7XHJcbn07XHJcbi8vR2V0cyBhbGwgZm9ybXMgZnJvbSBiYXNlIGdhbWUgKyBtb2RzLCBmaWx0ZXJlZCB1c2luZyBmb3JtdHlwZSBhbmQgb3B0aW9uYWwga2V5d29yZCBhcnJheVxyXG5leHBvcnQgdmFyIEdldEFsbEZvcm1zID0gZnVuY3Rpb24gKGFpRm9ybVR5cGUsIGFrS2V5d29yZHMpIHtcclxuICAgIGlmIChha0tleXdvcmRzID09PSB2b2lkIDApIHsgYWtLZXl3b3JkcyA9IG51bGw7IH1cclxuICAgIHJldHVybiBzbi5HZXRBbGxGb3JtcyhhaUZvcm1UeXBlLCBha0tleXdvcmRzKTtcclxufTtcclxuLy9HZXRzIGFsbCByYWNlcyBmcm9tIGJhc2UgZ2FtZSArIG1vZHMsIGZpbHRlcmVkIHVzaW5nIG9wdGlvbmFsIGtleXdvcmQgYXJyYXlcclxuZXhwb3J0IHZhciBHZXRBbGxSYWNlcyA9IGZ1bmN0aW9uIChha0tleXdvcmRzKSB7XHJcbiAgICBpZiAoYWtLZXl3b3JkcyA9PT0gdm9pZCAwKSB7IGFrS2V5d29yZHMgPSBudWxsOyB9XHJcbiAgICByZXR1cm4gc24uR2V0QWxsUmFjZXMoYWtLZXl3b3Jkcyk7XHJcbn07XHJcbi8vR2V0cyBhbGwgc3BlbGxzIGZyb20gYmFzZSBnYW1lICsgbW9kcywgZmlsdGVyZWQgdXNpbmcgb3B0aW9uYWwga2V5d29yZCBhcnJheS4gSXNQbGF5YWJsZSBmaWx0ZXJzIG91dCBzcGVsbHMgdGhhdCBhcmUgbm90IGZvdW5kIGluIHNwZWxsYm9va3MuXHJcbmV4cG9ydCB2YXIgR2V0QWxsU3BlbGxzID0gZnVuY3Rpb24gKGFrS2V5d29yZHMsIGFiSXNQbGF5YWJsZSkge1xyXG4gICAgaWYgKGFrS2V5d29yZHMgPT09IHZvaWQgMCkgeyBha0tleXdvcmRzID0gbnVsbDsgfVxyXG4gICAgaWYgKGFiSXNQbGF5YWJsZSA9PT0gdm9pZCAwKSB7IGFiSXNQbGF5YWJsZSA9IGZhbHNlOyB9XHJcbiAgICByZXR1cm4gc24uR2V0QWxsU3BlbGxzKGFrS2V5d29yZHMsIGFiSXNQbGF5YWJsZSk7XHJcbn07XHJcbi8qKiBBSSBQUk9DRVNTIExFVkVMXHJcbiAgICAgICAgSGlnaFByb2Nlc3MgPSAwXHJcbiAgICAgICAgTWlkZGxlSGlnaFByb2Nlc3MgPSAxXHJcbiAgICAgICAgTWlkZGxlTG93UHJvY2VzcyA9IDJcclxuICAgICAgICBMb3dQcm9jZXNzID0gMyAqL1xyXG4vL0dldHMgYWxsIGFjdG9ycyBieSBBSSBwcm9jZXNzaW5nIHR5cGUuIGh0dHBzOi8vZ2Vjay5iZXRoc29mdC5jb20vaW5kZXgucGhwP3RpdGxlPUdldEFjdG9yc0J5UHJvY2Vzc2luZ0xldmVsIGZvciBtb3JlIGluZm9cclxuZXhwb3J0IHZhciBHZXRBY3RvcnNCeVByb2Nlc3NpbmdMZXZlbCA9IGZ1bmN0aW9uIChhaUxldmVsKSB7XHJcbiAgICByZXR1cm4gc24uR2V0QWN0b3JzQnlQcm9jZXNzaW5nTGV2ZWwoYWlMZXZlbCk7XHJcbn07XHJcbi8vR2V0cyBhbGwgZm9ybXMgYWRkZWQgYnkgYSBzcGVjaWZpZWQgbW9kL2dhbWUgZXNtLCBmaWx0ZXJlZCB1c2luZyBmb3JtdHlwZSBhbmQgb3B0aW9uYWwga2V5d29yZCBhcnJheS5cclxuZXhwb3J0IHZhciBHZXRBbGxGb3Jtc0luTW9kID0gZnVuY3Rpb24gKGFzTW9kTmFtZSwgYWlGb3JtVHlwZSwgYWtLZXl3b3Jkcykge1xyXG4gICAgaWYgKGFrS2V5d29yZHMgPT09IHZvaWQgMCkgeyBha0tleXdvcmRzID0gbnVsbDsgfVxyXG4gICAgcmV0dXJuIHNuLkdldEFsbEZvcm1zSW5Nb2QoYXNNb2ROYW1lLCBhaUZvcm1UeXBlLCBha0tleXdvcmRzKTtcclxufTtcclxuLy9HZXRzIGFsbCBlbmNoYW50bWVudHMgYWRkZWQgYnkgYSBzcGVjaWZpZWQgbW9kL2dhbWUgZXNtLCBmaWx0ZXJlZCB1c2luZyBvcHRpb25hbCBrZXl3b3JkIGFycmF5LlxyXG5leHBvcnQgdmFyIEdldEFsbEVuY2hhbnRtZW50c0luTW9kID0gZnVuY3Rpb24gKGFzTW9kTmFtZSwgYWtLZXl3b3Jkcykge1xyXG4gICAgaWYgKGFrS2V5d29yZHMgPT09IHZvaWQgMCkgeyBha0tleXdvcmRzID0gbnVsbDsgfVxyXG4gICAgcmV0dXJuIHNuLkdldEFsbEVuY2hhbnRtZW50c0luTW9kKGFzTW9kTmFtZSwgYWtLZXl3b3Jkcyk7XHJcbn07XHJcbi8vR2V0cyBhbGwgcmFjZXMgYWRkZWQgYnkgYSBzcGVjaWZpZWQgbW9kL2dhbWUgZXNtLCBmaWx0ZXJlZCB1c2luZyBvcHRpb25hbCBrZXl3b3JkIGFycmF5LlxyXG5leHBvcnQgdmFyIEdldEFsbFJhY2VzSW5Nb2QgPSBmdW5jdGlvbiAoYXNNb2ROYW1lLCBha0tleXdvcmRzKSB7XHJcbiAgICBpZiAoYWtLZXl3b3JkcyA9PT0gdm9pZCAwKSB7IGFrS2V5d29yZHMgPSBudWxsOyB9XHJcbiAgICByZXR1cm4gc24uR2V0QWxsUmFjZXNJbk1vZChhc01vZE5hbWUsIGFrS2V5d29yZHMpO1xyXG59O1xyXG4vL0dldHMgYWxsIHNwZWxscyBhZGRlZCBieSBhIHNwZWNpZmllZCBtb2QvZ2FtZSBlc20sIGZpbHRlcmVkIHVzaW5nIG9wdGlvbmFsIGtleXdvcmQgYXJyYXkuXHJcbmV4cG9ydCB2YXIgR2V0QWxsU3BlbGxzSW5Nb2QgPSBmdW5jdGlvbiAoYXNNb2ROYW1lLCBha0tleXdvcmRzLCBhYklzUGxheWFibGUpIHtcclxuICAgIGlmIChha0tleXdvcmRzID09PSB2b2lkIDApIHsgYWtLZXl3b3JkcyA9IG51bGw7IH1cclxuICAgIGlmIChhYklzUGxheWFibGUgPT09IHZvaWQgMCkgeyBhYklzUGxheWFibGUgPSBmYWxzZTsgfVxyXG4gICAgcmV0dXJuIHNuLkdldEFsbFNwZWxsc0luTW9kKGFzTW9kTmFtZSwgYWtLZXl3b3JkcywgYWJJc1BsYXlhYmxlKTtcclxufTtcclxuLy9HZXRzIGN1cnJlbnQgY2VsbCBpZiBpbiBpbnRlcmlvci9hdHRhY2hlZCBjZWxscyBpbiBleHRlcmlvci9za3kgY2VsbHMgaWYgaW4gd29ybGRzcGFjZSB3aXRoIG5vIGF0dGFjaGVkIGNlbGxzPz9cclxuZXhwb3J0IHZhciBHZXRBdHRhY2hlZENlbGxzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gc24uR2V0QXR0YWNoZWRDZWxscygpOyB9O1xyXG4vL0dldHMgZm9ybSB1c2luZyBpdHMgZWRpdG9ySURcclxuZXhwb3J0IHZhciBHZXRGb3JtRnJvbUVkaXRvcklEID0gZnVuY3Rpb24gKGFzRWRpdG9ySUQpIHsgcmV0dXJuIHNuLkdldEZvcm1Gcm9tRWRpdG9ySUQoYXNFZGl0b3JJRCk7IH07XHJcbi8vR2V0cyB0aGUgdmFsdWUgb2YgdGhlIGJvb2xlYW4gZ2FtZXNldHRpbmcuIFJldHVybnMgLTEgaWYgZ21zdCBpcyBOb25lIG9yIG5vdCBhIGJvb2wuXHJcbmV4cG9ydCB2YXIgR2V0R2FtZVNldHRpbmdCb29sID0gZnVuY3Rpb24gKGFzR2FtZVNldHRpbmcpIHtcclxuICAgIHJldHVybiBzbi5HZXRHYW1lU2V0dGluZ0Jvb2woYXNHYW1lU2V0dGluZyk7XHJcbn07XHJcbi8vUmV0dXJucyB3aGV0aGVyIEdvZCBNb2RlIGlzIGVuYWJsZWRcclxuZXhwb3J0IHZhciBHZXRHb2RNb2RlID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gc24uR2V0R29kTW9kZSgpOyB9O1xyXG4vL0dldHMgbG9jYWwgZ3Jhdml0eSBvZiB0aGUgZXh0ZXJpb3Igd29ybGRzcGFjZS9pbnRlcmlvciBjZWxsLiBEZWZhdWx0IGdyYXZpdHkgaXMgWzAuMCwgMC4wLCAtOS44MV1cclxuZXhwb3J0IHZhciBHZXRMb2NhbEdyYXZpdHkgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBzbi5HZXRMb2NhbEdyYXZpdHkoKTsgfTtcclxuLy9HZXRzIGhvdyBtYW55IGFjdG9ycyBhcmUgaW4gaGlnaCBwcm9jZXNzXHJcbmV4cG9ydCB2YXIgR2V0TnVtQWN0b3JzSW5IaWdoID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gc24uR2V0TnVtQWN0b3JzSW5IaWdoKCk7IH07XHJcbi8vUmV0dXJucyBhbGwgYWN0b3JzIHRoYXQgYXJlIGN1cnJlbnRseSBmb2xsb3dpbmcgdGhlIHBsYXllclxyXG5leHBvcnQgdmFyIEdldFBsYXllckZvbGxvd2VycyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNuLkdldFBsYXllckZvbGxvd2VycygpOyB9O1xyXG4vL1JldHVybnMgd2hldGhlciBwbHVnaW4gZXhpc3RzXHJcbmV4cG9ydCB2YXIgSXNQbHVnaW5Gb3VuZCA9IGZ1bmN0aW9uIChha05hbWUpIHtcclxuICAgIHJldHVybiBzbi5Jc1BsdWdpbkZvdW5kKGFrTmFtZSk7XHJcbn07XHJcbi8vUmV0dXJucyB3aGV0aGVyIENDIFN1cnZpdmFsIE1vZGUgaXMgZW5hYmxlZFxyXG5leHBvcnQgdmFyIElzU3Vydml2YWxNb2RlQWN0aXZlID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gc24uSXNTdXJ2aXZhbE1vZGVBY3RpdmUoKTsgfTtcclxuLy9TZXRzIGxvY2FsIGdyYXZpdHkgKG1zLTIpIG9mIHRoZSBleHRlcmlvciB3b3JsZHNwYWNlL2ludGVyaW9yIGNlbGwuXHJcbmV4cG9ydCB2YXIgU2V0TG9jYWxHcmF2aXR5ID0gZnVuY3Rpb24gKGFmWEF4aXMsIGFmWUF4aXMsIGFmWkF4aXMpIHsgcmV0dXJuIHNuLlNldExvY2FsR3Jhdml0eShhZlhBeGlzLCBhZllBeGlzLCBhZlpBeGlzKTsgfTtcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vSEFaQVJEXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLy0tLS0tLS1cclxuLy9HRVRURVJTXHJcbi8vLS0tLS0tLVxyXG4vKiogSEFaQVJEIEZMQUdTXHJcbiAgICAgICAgTm9uZSA9IDBcclxuICAgICAgICBQQ09ubHkgPSAweDAwMDAwMDAxXHJcbiAgICAgICAgSW5oZXJpdER1cmF0aW9uID0gMHgwMDAwMDAwMlxyXG4gICAgICAgIEFsaWduVG9Ob3JtYWwgPSAweDAwMDAwMDA0XHJcbiAgICAgICAgSW5oZXJpdFJhZGl1cyA9IDB4MDAwMDAwMDhcclxuICAgICAgICBEcm9wVG9Hcm91bmQgPSAweDAwMDAwMDEwICovXHJcbi8vR2V0cyBoYXphcmQgYXJ0IHBhdGgsIGVnLiBcIkVmZmVjdHMvTXlIYXphcmRBcnQubmlmXCJcclxuZXhwb3J0IHZhciBHZXRIYXphcmRBcnQgPSBmdW5jdGlvbiAoYWtIYXphcmQpIHtcclxuICAgIHJldHVybiBzbi5HZXRIYXphcmRBcnQoYWtIYXphcmQpO1xyXG59O1xyXG4vL0dldHMgYXNzb2NpYXRlZCBJTU9EXHJcbmV4cG9ydCB2YXIgR2V0SGF6YXJkSU1PRCA9IGZ1bmN0aW9uIChha0hhemFyZCkgeyByZXR1cm4gc24uR2V0SGF6YXJkSU1PRChha0hhemFyZCk7IH07XHJcbi8vR2V0cyBJTU9EIHJhZGl1c1xyXG5leHBvcnQgdmFyIEdldEhhemFyZElNT0RSYWRpdXMgPSBmdW5jdGlvbiAoYWtIYXphcmQpIHsgcmV0dXJuIHNuLkdldEhhemFyZElNT0RSYWRpdXMoYWtIYXphcmQpOyB9O1xyXG4vL0dldHMgaW1wYWN0IGRhdGEgc2V0XHJcbmV4cG9ydCB2YXIgR2V0SGF6YXJkSVBEUyA9IGZ1bmN0aW9uIChha0hhemFyZCkgeyByZXR1cm4gc24uR2V0SGF6YXJkSVBEUyhha0hhemFyZCk7IH07XHJcbi8vR2V0cyBoYXphcmQgbGlmZXRpbWVcclxuZXhwb3J0IHZhciBHZXRIYXphcmRMaWZldGltZSA9IGZ1bmN0aW9uIChha0hhemFyZCkgeyByZXR1cm4gc24uR2V0SGF6YXJkTGlmZXRpbWUoYWtIYXphcmQpOyB9O1xyXG4vL0dldHMgaGF6YXJkIGxpZ2h0XHJcbmV4cG9ydCB2YXIgR2V0SGF6YXJkTGlnaHQgPSBmdW5jdGlvbiAoYWtIYXphcmQpIHsgcmV0dXJuIHNuLkdldEhhemFyZExpZ2h0KGFrSGF6YXJkKTsgfTtcclxuLy9HZXRzIGhhemFyZCBsaW1pdFxyXG5leHBvcnQgdmFyIEdldEhhemFyZExpbWl0ID0gZnVuY3Rpb24gKGFrSGF6YXJkKSB7XHJcbiAgICByZXR1cm4gc24uR2V0SGF6YXJkTGltaXQoYWtIYXphcmQpO1xyXG59O1xyXG4vL0dldHMgaGF6YXJkIHJhZGl1c1xyXG5leHBvcnQgdmFyIEdldEhhemFyZFJhZGl1cyA9IGZ1bmN0aW9uIChha0hhemFyZCkge1xyXG4gICAgcmV0dXJuIHNuLkdldEhhemFyZFJhZGl1cyhha0hhemFyZCk7XHJcbn07XHJcbi8vR2V0cyBoYXphcmQgc291bmRcclxuZXhwb3J0IHZhciBHZXRIYXphcmRTb3VuZCA9IGZ1bmN0aW9uIChha0hhemFyZCkgeyByZXR1cm4gc24uR2V0SGF6YXJkU291bmQoYWtIYXphcmQpOyB9O1xyXG4vL0dldHMgaGF6YXJkIHNwZWxsXHJcbmV4cG9ydCB2YXIgR2V0SGF6YXJkU3BlbGwgPSBmdW5jdGlvbiAoYWtIYXphcmQpIHsgcmV0dXJuIHNuLkdldEhhemFyZFNwZWxsKGFrSGF6YXJkKTsgfTtcclxuLy9HZXRzIHRhcmdldCBpbnRlcnZhbCAoZHVyYXRpb24gYmV0d2VlbiBjYXN0cylcclxuZXhwb3J0IHZhciBHZXRIYXphcmRUYXJnZXRJbnRlcnZhbCA9IGZ1bmN0aW9uIChha0hhemFyZCkgeyByZXR1cm4gc24uR2V0SGF6YXJkVGFyZ2V0SW50ZXJ2YWwoYWtIYXphcmQpOyB9O1xyXG4vL0lzIGhhemFyZCBmbGFnIHNldD9cclxuZXhwb3J0IHZhciBJc0hhemFyZEZsYWdTZXQgPSBmdW5jdGlvbiAoYWtIYXphcmQsIGFpRmxhZykgeyByZXR1cm4gc24uSXNIYXphcmRGbGFnU2V0KGFrSGF6YXJkLCBhaUZsYWcpOyB9O1xyXG4vLy0tLS0tLS1cclxuLy9TRVRURVJTXHJcbi8vLS0tLS0tLVxyXG4vL0NsZWFycyBoYXphcmQgZmxhZ1xyXG5leHBvcnQgdmFyIENsZWFySGF6YXJkRmxhZyA9IGZ1bmN0aW9uIChha0hhemFyZCwgYWlGbGFnKSB7IHJldHVybiBzbi5DbGVhckhhemFyZEZsYWcoYWtIYXphcmQsIGFpRmxhZyk7IH07XHJcbi8vU2V0cyBoYXphcmQgYXJ0IHBhdGguIERvZXMgbm90IHdvcmsgb24gYWN0aXZlIGhhemFyZHNcclxuZXhwb3J0IHZhciBTZXRIYXphcmRBcnQgPSBmdW5jdGlvbiAoYWtIYXphcmQsIGFzUGF0aCkgeyByZXR1cm4gc24uU2V0SGF6YXJkQXJ0KGFrSGF6YXJkLCBhc1BhdGgpOyB9O1xyXG4vL1NldCBmbGFnXHJcbmV4cG9ydCB2YXIgU2V0SGF6YXJkRmxhZyA9IGZ1bmN0aW9uIChha0hhemFyZCwgYWlGbGFnKSB7IHJldHVybiBzbi5TZXRIYXphcmRGbGFnKGFrSGF6YXJkLCBhaUZsYWcpOyB9O1xyXG4vL1NldHMgSU1PRFxyXG5leHBvcnQgdmFyIFNldEhhemFyZElNT0QgPSBmdW5jdGlvbiAoYWtIYXphcmQsIGFrSU1PRCkgeyByZXR1cm4gc24uU2V0SGF6YXJkSU1PRChha0hhemFyZCwgYWtJTU9EKTsgfTtcclxuLy9TZXRzIElNT0QgcmFkaXVzXHJcbmV4cG9ydCB2YXIgU2V0SGF6YXJkSU1PRFJhZGl1cyA9IGZ1bmN0aW9uIChha0hhemFyZCwgYWZSYWRpdXMpIHsgcmV0dXJuIHNuLlNldEhhemFyZElNT0RSYWRpdXMoYWtIYXphcmQsIGFmUmFkaXVzKTsgfTtcclxuLy9TZXRzIGltcGFjdCBkYXRhIHNldFxyXG5leHBvcnQgdmFyIFNldEhhemFyZElQRFMgPSBmdW5jdGlvbiAoYWtIYXphcmQsIGFrSVBEUykgeyByZXR1cm4gc24uU2V0SGF6YXJkSVBEUyhha0hhemFyZCwgYWtJUERTKTsgfTtcclxuLy9TZXRzIGhhemFyZCBsaWZldGltZVxyXG5leHBvcnQgdmFyIFNldEhhemFyZExpZmV0aW1lID0gZnVuY3Rpb24gKGFrSGF6YXJkLCBhZkxpZmV0aW1lKSB7IHJldHVybiBzbi5TZXRIYXphcmRMaWZldGltZShha0hhemFyZCwgYWZMaWZldGltZSk7IH07XHJcbi8vU2V0cyBoYXphcmQgbGlnaHRcclxuZXhwb3J0IHZhciBTZXRIYXphcmRMaWdodCA9IGZ1bmN0aW9uIChha0hhemFyZCwgYWtMaWdodCkgeyByZXR1cm4gc24uU2V0SGF6YXJkTGlnaHQoYWtIYXphcmQsIGFrTGlnaHQpOyB9O1xyXG4vL1NldHMgaGF6YXJkIGxpbWl0XHJcbmV4cG9ydCB2YXIgU2V0SGF6YXJkTGltaXQgPSBmdW5jdGlvbiAoYWtIYXphcmQsIGFpTGltaXQpIHsgcmV0dXJuIHNuLlNldEhhemFyZExpbWl0KGFrSGF6YXJkLCBhaUxpbWl0KTsgfTtcclxuLy9TZXRzIGhhemFyZCByYWRpdXNcclxuZXhwb3J0IHZhciBTZXRIYXphcmRSYWRpdXMgPSBmdW5jdGlvbiAoYWtIYXphcmQsIGFmUmFkaXVzKSB7IHJldHVybiBzbi5TZXRIYXphcmRSYWRpdXMoYWtIYXphcmQsIGFmUmFkaXVzKTsgfTtcclxuLy9TZXRzIGhhemFyZCBzb3VuZFxyXG5leHBvcnQgdmFyIFNldEhhemFyZFNvdW5kID0gZnVuY3Rpb24gKGFrSGF6YXJkLCBha1NvdW5kKSB7IHJldHVybiBzbi5TZXRIYXphcmRTb3VuZChha0hhemFyZCwgYWtTb3VuZCk7IH07XHJcbi8vU2V0cyBoYXphcmQgc3BlbGxcclxuZXhwb3J0IHZhciBTZXRIYXphcmRTcGVsbCA9IGZ1bmN0aW9uIChha0hhemFyZCwgYWtzcGVsbCkgeyByZXR1cm4gc24uU2V0SGF6YXJkU3BlbGwoYWtIYXphcmQsIGFrc3BlbGwpOyB9O1xyXG4vL1NldHMgaGF6YXJkIGludGVydmFsXHJcbmV4cG9ydCB2YXIgU2V0SGF6YXJkVGFyZ2V0SW50ZXJ2YWwgPSBmdW5jdGlvbiAoYWtIYXphcmQsIGFmSW50ZXJ2YWwpIHsgcmV0dXJuIHNuLlNldEhhemFyZFRhcmdldEludGVydmFsKGFrSGF6YXJkLCBhZkludGVydmFsKTsgfTtcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vTElHSFRcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vLS0tLS0tLVxyXG4vL0dFVFRFUlNcclxuLy8tLS0tLS0tXHJcbi8vR2V0cyBsaWdodCBjb2xvci5cclxuZXhwb3J0IHZhciBHZXRMaWdodENvbG9yID0gZnVuY3Rpb24gKGFrTGlnaHQpIHsgcmV0dXJuIHNuLkdldExpZ2h0Q29sb3IoYWtMaWdodCk7IH07XHJcbi8vR2V0cyBsaWdodCBmYWRlIHJhbmdlLlxyXG5leHBvcnQgdmFyIEdldExpZ2h0RmFkZSA9IGZ1bmN0aW9uIChha0xpZ2h0KSB7XHJcbiAgICByZXR1cm4gc24uR2V0TGlnaHRGYWRlKGFrTGlnaHQpO1xyXG59O1xyXG4vL0dldHMgYmFzZSBsaWdodCBGT1YuXHJcbmV4cG9ydCB2YXIgR2V0TGlnaHRGT1YgPSBmdW5jdGlvbiAoYWtMaWdodCkge1xyXG4gICAgcmV0dXJuIHNuLkdldExpZ2h0Rk9WKGFrTGlnaHQpO1xyXG59O1xyXG4vL0dldHMgbGlnaHQgcmFkaXVzIChyYWRpdXMgaXMgYWN0dWFsbHkgaW50IGJ1dCBjaGFuZ2luZyB0aGF0IHdvdWxkIGJyZWFrIG1vZHMgc28gZml4ZWQgdGhhdCBpbiBzb3VyY2UpLlxyXG5leHBvcnQgdmFyIEdldExpZ2h0UmFkaXVzID0gZnVuY3Rpb24gKGFrTGlnaHQpIHtcclxuICAgIHJldHVybiBzbi5HZXRMaWdodFJhZGl1cyhha0xpZ2h0KTtcclxufTtcclxuLy9HZXRzIGxpZ2h0IGNvbG9yIGFzIFJHQiBhcnJheSBbMC0yNTVdLlxyXG5leHBvcnQgdmFyIEdldExpZ2h0UkdCID0gZnVuY3Rpb24gKGFrTGlnaHQpIHtcclxuICAgIHJldHVybiBzbi5HZXRMaWdodFJHQihha0xpZ2h0KTtcclxufTtcclxuLy9HZXRzIGRlcHRoIGJpYXMsIHJldHVybnMgMSBpZiBub3Qgc2V0LlxyXG5leHBvcnQgdmFyIEdldExpZ2h0U2hhZG93RGVwdGhCaWFzID0gZnVuY3Rpb24gKGFrTGlnaHRPYmplY3QpIHsgcmV0dXJuIHNuLkdldExpZ2h0U2hhZG93RGVwdGhCaWFzKGFrTGlnaHRPYmplY3QpOyB9O1xyXG4vKiogTElHSFQgVFlQRVNcclxuICAgICAgICBIZW1pU2hhZG93ID0gMVxyXG4gICAgICAgIE9tbmkgPSAyXHJcbiAgICAgICAgT21uaVNoYWRvdyA9IDNcclxuICAgICAgICBTcG90ID0gNFxyXG4gICAgICAgIFNwb3RTaGFkb3cgPSA1ICovXHJcbi8vR2V0IGxpZ2h0IHR5cGVcclxuZXhwb3J0IHZhciBHZXRMaWdodFR5cGUgPSBmdW5jdGlvbiAoYWtMaWdodCkge1xyXG4gICAgcmV0dXJuIHNuLkdldExpZ2h0VHlwZShha0xpZ2h0KTtcclxufTtcclxuLy8tLS0tLS0tXHJcbi8vU0VUVEVSU1xyXG4vLy0tLS0tLS1cclxuLy9TZXRzIGxpZ2h0IGNvbG9yLlxyXG5leHBvcnQgdmFyIFNldExpZ2h0Q29sb3IgPSBmdW5jdGlvbiAoYWtMaWdodCwgYWtDb2xvcmZvcm0pIHsgcmV0dXJuIHNuLlNldExpZ2h0Q29sb3IoYWtMaWdodCwgYWtDb2xvcmZvcm0pOyB9O1xyXG4vL1NldHMgbGlnaHQgZmFkZSByYW5nZS5cclxuZXhwb3J0IHZhciBTZXRMaWdodEZhZGUgPSBmdW5jdGlvbiAoYWtMaWdodCwgYWZSYW5nZSkgeyByZXR1cm4gc24uU2V0TGlnaHRGYWRlKGFrTGlnaHQsIGFmUmFuZ2UpOyB9O1xyXG4vL3NldHMgYmFzZSBsaWdodCBGT1YuXHJcbmV4cG9ydCB2YXIgU2V0TGlnaHRGT1YgPSBmdW5jdGlvbiAoYWtMaWdodCwgYWZGT1YpIHsgcmV0dXJuIHNuLlNldExpZ2h0Rk9WKGFrTGlnaHQsIGFmRk9WKTsgfTtcclxuLy9TZXRzIGxpZ2h0IHJhZGl1cyAobWluaW11bSBsaWdodCByYWRpdXMgaXMgMTYpIC5cclxuZXhwb3J0IHZhciBTZXRMaWdodFJhZGl1cyA9IGZ1bmN0aW9uIChha0xpZ2h0LCBhZlJhZGl1cykgeyByZXR1cm4gc24uU2V0TGlnaHRSYWRpdXMoYWtMaWdodCwgYWZSYWRpdXMpOyB9O1xyXG4vL1NldHMgbGlnaHQgY29sb3IgdXNpbmcgUkdCIGFycmF5IFswLTI1NV0uIEFycmF5IG11c3QgY29udGFpbiAzIGVsZW1lbnRzIChyLGcsYikuXHJcbmV4cG9ydCB2YXIgU2V0TGlnaHRSR0IgPSBmdW5jdGlvbiAoYWtMaWdodCwgYWlSR0IpIHsgcmV0dXJuIHNuLlNldExpZ2h0UkdCKGFrTGlnaHQsIGFpUkdCKTsgfTtcclxuLy9zZXRzIGRlcHRoIGJpYXMgb24gbGlnaHQgcmVmZXJlbmNlLiBDcmVhdGVzIG5ldyBkZXB0aCBiaWFzIGV4dHJhZGF0YSBvbiBsaWdodHMgdGhhdCBkb24ndCBoYXZlIGl0IHNldC5cclxuZXhwb3J0IHZhciBTZXRMaWdodFNoYWRvd0RlcHRoQmlhcyA9IGZ1bmN0aW9uIChha0xpZ2h0T2JqZWN0LCBhZkRlcHRoQmlhcykgeyByZXR1cm4gc24uU2V0TGlnaHRTaGFkb3dEZXB0aEJpYXMoYWtMaWdodE9iamVjdCwgYWZEZXB0aEJpYXMpOyB9O1xyXG4vL1NldHMgbGlnaHQgdHlwZS4gRG9lcyBub3QgcGVyc2lzdCBiZXR3ZWVuIHNlc3Npb25zLlxyXG5leHBvcnQgdmFyIFNldExpZ2h0VHlwZSA9IGZ1bmN0aW9uIChha0xpZ2h0LCBhaUxpZ2h0VHlwZSkgeyByZXR1cm4gc24uU2V0TGlnaHRUeXBlKGFrTGlnaHQsIGFpTGlnaHRUeXBlKTsgfTtcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vTE9DQVRJT05cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vLS0tLS0tLVxyXG4vL0dFVFRFUlNcclxuLy8tLS0tLS0tXHJcbi8vR2V0IHBhcmVudCBsb2NhdGlvbi5cclxuZXhwb3J0IHZhciBHZXRQYXJlbnRMb2NhdGlvbiA9IGZ1bmN0aW9uIChha0xvYykgeyByZXR1cm4gc24uR2V0UGFyZW50TG9jYXRpb24oYWtMb2MpOyB9O1xyXG4vLy0tLS0tLS1cclxuLy9TRVRURVJTXHJcbi8vLS0tLS0tLVxyXG4vL1NldCBwYXJlbnQgbG9jYXRpb24uXHJcbmV4cG9ydCB2YXIgU2V0UGFyZW50TG9jYXRpb24gPSBmdW5jdGlvbiAoYWtMb2MsIGFrTmV3TG9jKSB7IHJldHVybiBzbi5TZXRQYXJlbnRMb2NhdGlvbihha0xvYywgYWtOZXdMb2MpOyB9O1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy9NQUdJQyBFRkZFQ1RTXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLy0tLS0tLS0tLVxyXG4vL0dFVFRFUlNcclxuLy8tLS0tLS0tLS1cclxuLy9HZXRzIGFzc29jaWF0ZWQgZm9ybSAoTGlnaHQgZm9yIExpZ2h0IHNwZWxscywgQWN0b3IgZm9yIFN1bW1vbiBDcmVhdHVyZS4uLiksIGlmIGFueVxyXG5leHBvcnQgdmFyIEdldEFzc29jaWF0ZWRGb3JtID0gZnVuY3Rpb24gKGFrTWFnaWNFZmZlY3QpIHsgcmV0dXJuIHNuLkdldEFzc29jaWF0ZWRGb3JtKGFrTWFnaWNFZmZlY3QpOyB9O1xyXG4vKiogRUZGRUNUIEFSQ0hFVFlQRVNcclxuICAgICAgICBWYWx1ZU1vZCA9IDBcclxuICAgICAgICBTY3JpcHQgPSAxXHJcbiAgICAgICAgRGlzcGVsID0gMlxyXG4gICAgICAgIEN1cmVEaXNlYXNlID0gM1xyXG4gICAgICAgIEFic29yYiA9IDRcclxuICAgICAgICBEdWFsVmFsdWVNb2QgPSA1XHJcbiAgICAgICAgQ2FsbSA9IDZcclxuICAgICAgICBEZW1vcmFsaXplID0gN1xyXG4gICAgICAgIEZyZW56eSA9IDhcclxuICAgICAgICBEaXNhcm0gPSA5XHJcbiAgICAgICAgQ29tbWFuZFN1bW1vbmVkID0gMTBcclxuICAgICAgICBJbnZpc2liaWxpdHkgPSAxMVxyXG4gICAgICAgIExpZ2h0ID0gMTJcclxuICAgICAgICBEYXJrbmVzcyA9IDEzXHJcbiAgICAgICAgTmlnaHRFeWUgPSAxNFxyXG4gICAgICAgIExvY2sgPSAxNVxyXG4gICAgICAgIE9wZW4gPSAxNlxyXG4gICAgICAgIEJvdW5kV2VhcG9uID0gMTdcclxuICAgICAgICBTdW1tb25DcmVhdHVyZSA9IDE4XHJcbiAgICAgICAgRGV0ZWN0TGlmZSA9IDE5XHJcbiAgICAgICAgVGVsZWtpbmVzaXMgPSAyMFxyXG4gICAgICAgIFBhcmFseXNpcyA9IDIxXHJcbiAgICAgICAgUmVhbmltYXRlID0gMjJcclxuICAgICAgICBTb3VsVHJhcCA9IDIzXHJcbiAgICAgICAgVHVyblVuZGVhZCA9IDI0XHJcbiAgICAgICAgR3VpZGUgPSAyNVxyXG4gICAgICAgIFdlcmV3b2xmRmVlZCA9IDI2XHJcbiAgICAgICAgQ3VyZVBhcmFseXNpcyA9IDI3XHJcbiAgICAgICAgQ3VyZUFkZGljdGlvbiA9IDI4XHJcbiAgICAgICAgQ3VyZVBvaXNvbiA9IDI5XHJcbiAgICAgICAgQ29uY3Vzc2lvbiA9IDMwXHJcbiAgICAgICAgVmFsdWVBbmRQYXJ0cyA9IDMxXHJcbiAgICAgICAgQWNjdW11bGF0ZU1hZ25pdHVkZSA9IDMyXHJcbiAgICAgICAgU3RhZ2dlciA9IDMzXHJcbiAgICAgICAgUGVha1ZhbHVlTW9kID0gMzRcclxuICAgICAgICBDbG9hayA9IDM1XHJcbiAgICAgICAgV2VyZXdvbGYgPSAzNlxyXG4gICAgICAgIFNsb3dUaW1lID0gMzdcclxuICAgICAgICBSYWxseSA9IDM4XHJcbiAgICAgICAgRW5oYW5jZVdlYXBvbiA9IDM5XHJcbiAgICAgICAgU3Bhd25IYXphcmQgPSA0MFxyXG4gICAgICAgIEV0aGVyZWFsaXplID0gNDFcclxuICAgICAgICBCYW5pc2ggPSA0MlxyXG4gICAgICAgIFNwYXduU2NyaXB0ZWRSZWYgPSA0M1xyXG4gICAgICAgIERpc2d1aXNlID0gNDRcclxuICAgICAgICBHcmFiQWN0b3IgPSA0NVxyXG4gICAgICAgIFZhbXBpcmVMb3JkID0gNDYgKi9cclxuLy9HZXRzIGVmZmVjdCBhcmNoZXR5cGUgb2YgbWFnaWNlZmZlY3QgYW5kIHJldHVybnMgYXMgaW50ICgwLTQ2KS5cclxuZXhwb3J0IHZhciBHZXRFZmZlY3RBcmNoZXR5cGVBc0ludCA9IGZ1bmN0aW9uIChha01hZ2ljRWZmZWN0KSB7IHJldHVybiBzbi5HZXRFZmZlY3RBcmNoZXR5cGVBc0ludChha01hZ2ljRWZmZWN0KTsgfTtcclxuLy9HZXRzIGVmZmVjdCBhcmNoZXR5cGUgb2YgbWFnaWNlZmZlY3QgYW5kIHJldHVybnMgYXMgU3RyaW5nLlxyXG5leHBvcnQgdmFyIEdldEVmZmVjdEFyY2hldHlwZUFzU3RyaW5nID0gZnVuY3Rpb24gKGFrTWFnaWNFZmZlY3QpIHsgcmV0dXJuIHNuLkdldEVmZmVjdEFyY2hldHlwZUFzU3RyaW5nKGFrTWFnaWNFZmZlY3QpOyB9O1xyXG4vL0dldHMgcHJpbWFyeSBhY3RvciB2YWx1ZSBhcyBzdHJpbmcsIGlmIGFueSAoRnJvc3RSZXNpc3QsIFNwZWVkTXVsdCkuXHJcbmV4cG9ydCB2YXIgR2V0UHJpbWFyeUFjdG9yVmFsdWUgPSBmdW5jdGlvbiAoYWtNYWdpY0VmZmVjdCkgeyByZXR1cm4gc24uR2V0UHJpbWFyeUFjdG9yVmFsdWUoYWtNYWdpY0VmZmVjdCk7IH07XHJcbi8vR2V0cyBzZWNvbmRhcnkgYWN0b3IgdmFsdWUgYXMgc3RyaW5nLCBpZiBhbnkuXHJcbmV4cG9ydCB2YXIgR2V0U2Vjb25kYXJ5QWN0b3JWYWx1ZSA9IGZ1bmN0aW9uIChha01hZ2ljRWZmZWN0KSB7IHJldHVybiBzbi5HZXRTZWNvbmRhcnlBY3RvclZhbHVlKGFrTWFnaWNFZmZlY3QpOyB9O1xyXG4vKiogTUdFRiBTT1VORCBUWVBFU1xyXG4gICAgICAgIERyYXcvU2hlYXRoZSA9IDBcclxuICAgICAgICBDaGFyZ2UgPSAxXHJcbiAgICAgICAgUmVhZHkgPSAyXHJcbiAgICAgICAgUmVsZWFzZSA9IDNcclxuICAgICAgICBDb25jZW50cmF0aW9uIENhc3QgTG9vcCA9IDRcclxuICAgICAgICBPbiBIaXQgPSA1ICovXHJcbi8vR2V0cyBTb3VuZCBhdHRhY2hlZCB0byBpbmRleCBvZiBTb3VuZCB0eXBlIHNwZWNpZmllZCBpbiBtYWdpYyBlZmZlY3QuXHJcbmV4cG9ydCB2YXIgR2V0TWFnaWNFZmZlY3RTb3VuZCA9IGZ1bmN0aW9uIChha01hZ2ljRWZmZWN0LCBhaVR5cGUpIHtcclxuICAgIHJldHVybiBzbi5HZXRNYWdpY0VmZmVjdFNvdW5kKGFrTWFnaWNFZmZlY3QsIGFpVHlwZSk7XHJcbn07XHJcbi8vLS0tLS0tLVxyXG4vL1NFVFRFUlNcclxuLy8tLS0tLS0tXHJcbi8vU2V0cyBhc3NvY2lhdGVkIGZvcm0gKExpZ2h0IGZvciBMaWdodCBzcGVsbHMsIEFjdG9yIGZvciBTdW1tb24gQ3JlYXR1cmUuLi4pLiBDYW4gYmUgTm9uZVxyXG5leHBvcnQgdmFyIFNldEFzc29jaWF0ZWRGb3JtID0gZnVuY3Rpb24gKGFrTWFnaWNFZmZlY3QsIGFrRm9ybSkgeyByZXR1cm4gc24uU2V0QXNzb2NpYXRlZEZvcm0oYWtNYWdpY0VmZmVjdCwgYWtGb3JtKTsgfTtcclxuLy9TZXRzIHNvdW5kIGRlc2NyaXB0b3IgYXR0YWNoZWQgdG8gaW5kZXggb2YgU291bmQgdHlwZSBzcGVjaWZpZWQgaW4gbWFnaWMgZWZmZWN0LlxyXG5leHBvcnQgdmFyIFNldE1hZ2ljRWZmZWN0U291bmQgPSBmdW5jdGlvbiAoYWtNYWdpY0VmZmVjdCwgYWtTb3VuZERlc2NyaXB0b3IsIGFpVHlwZSkgeyByZXR1cm4gc24uU2V0TWFnaWNFZmZlY3RTb3VuZChha01hZ2ljRWZmZWN0LCBha1NvdW5kRGVzY3JpcHRvciwgYWlUeXBlKTsgfTtcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vT0JKRUNUUkVGRVJFTkNFU1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8tLS0tLS0tLVxyXG4vL0dFVFRFUlNcclxuLy8tLS0tLS0tLVxyXG4vL0FkZHMgYWxsIGludmVudG9yeSBpdGVtcyB0byBhcnJheSwgZmlsdGVyaW5nIG91dCBlcXVpcHBlZCwgZmF2b3VyaXRlZCBhbmQgcXVlc3QgaXRlbXMuXHJcbmV4cG9ydCB2YXIgQWRkQWxsSXRlbXNUb0FycmF5ID0gZnVuY3Rpb24gKGFrUmVmLCBhYk5vRXF1aXBwZWQsIGFiTm9GYXZvcml0ZWQsIGFiTm9RdWVzdEl0ZW0pIHtcclxuICAgIGlmIChhYk5vRXF1aXBwZWQgPT09IHZvaWQgMCkgeyBhYk5vRXF1aXBwZWQgPSB0cnVlOyB9XHJcbiAgICBpZiAoYWJOb0Zhdm9yaXRlZCA9PT0gdm9pZCAwKSB7IGFiTm9GYXZvcml0ZWQgPSBmYWxzZTsgfVxyXG4gICAgaWYgKGFiTm9RdWVzdEl0ZW0gPT09IHZvaWQgMCkgeyBhYk5vUXVlc3RJdGVtID0gZmFsc2U7IH1cclxuICAgIHJldHVybiBzbi5BZGRBbGxJdGVtc1RvQXJyYXkoYWtSZWYsIGFiTm9FcXVpcHBlZCwgYWJOb0Zhdm9yaXRlZCwgYWJOb1F1ZXN0SXRlbSk7XHJcbn07XHJcbi8vQWRkcyBhbGwgaW52ZW50b3J5IGl0ZW1zIHRvIGZvcm1saXN0LCBmaWx0ZXJpbmcgb3V0IGVxdWlwcGVkLCBmYXZvdXJpdGVkIGFuZCBxdWVzdCBpdGVtcy5cclxuZXhwb3J0IHZhciBBZGRBbGxJdGVtc1RvTGlzdCA9IGZ1bmN0aW9uIChha1JlZiwgYWtMaXN0LCBhYk5vRXF1aXBwZWQsIGFiTm9GYXZvcml0ZWQsIGFiTm9RdWVzdEl0ZW0pIHtcclxuICAgIGlmIChhYk5vRXF1aXBwZWQgPT09IHZvaWQgMCkgeyBhYk5vRXF1aXBwZWQgPSB0cnVlOyB9XHJcbiAgICBpZiAoYWJOb0Zhdm9yaXRlZCA9PT0gdm9pZCAwKSB7IGFiTm9GYXZvcml0ZWQgPSBmYWxzZTsgfVxyXG4gICAgaWYgKGFiTm9RdWVzdEl0ZW0gPT09IHZvaWQgMCkgeyBhYk5vUXVlc3RJdGVtID0gZmFsc2U7IH1cclxuICAgIHJldHVybiBzbi5BZGRBbGxJdGVtc1RvTGlzdChha1JlZiwgYWtMaXN0LCBhYk5vRXF1aXBwZWQsIGFiTm9GYXZvcml0ZWQsIGFiTm9RdWVzdEl0ZW0pO1xyXG59O1xyXG4vL0FkZHMgaW52ZW50b3J5IGl0ZW1zIG1hdGNoaW5nIGZvcm10eXBlIHRvIGFycmF5LCBmaWx0ZXJpbmcgb3V0IGVxdWlwcGVkLCBmYXZvdXJpdGVkIGFuZCBxdWVzdCBpdGVtcy5cclxuZXhwb3J0IHZhciBBZGRJdGVtc09mVHlwZVRvQXJyYXkgPSBmdW5jdGlvbiAoYWtSZWYsIGFpRm9ybVR5cGUsIGFiTm9FcXVpcHBlZCwgYWJOb0Zhdm9yaXRlZCwgYWJOb1F1ZXN0SXRlbSkge1xyXG4gICAgaWYgKGFiTm9FcXVpcHBlZCA9PT0gdm9pZCAwKSB7IGFiTm9FcXVpcHBlZCA9IHRydWU7IH1cclxuICAgIGlmIChhYk5vRmF2b3JpdGVkID09PSB2b2lkIDApIHsgYWJOb0Zhdm9yaXRlZCA9IGZhbHNlOyB9XHJcbiAgICBpZiAoYWJOb1F1ZXN0SXRlbSA9PT0gdm9pZCAwKSB7IGFiTm9RdWVzdEl0ZW0gPSBmYWxzZTsgfVxyXG4gICAgcmV0dXJuIHNuLkFkZEl0ZW1zT2ZUeXBlVG9BcnJheShha1JlZiwgYWlGb3JtVHlwZSwgYWJOb0VxdWlwcGVkLCBhYk5vRmF2b3JpdGVkLCBhYk5vUXVlc3RJdGVtKTtcclxufTtcclxuLy9BZGRzIGludmVudG9yeSBpdGVtcyBtYXRjaGluZyBmb3JtdHlwZSB0byBmb3JtbGlzdCwgZmlsdGVyaW5nIG91dCBlcXVpcHBlZCwgZmF2b3VyaXRlZCBhbmQgcXVlc3QgaXRlbXMuXHJcbmV4cG9ydCB2YXIgQWRkSXRlbXNPZlR5cGVUb0xpc3QgPSBmdW5jdGlvbiAoYWtSZWYsIGFrTGlzdCwgYWlGb3JtVHlwZSwgYWJOb0VxdWlwcGVkLCBhYk5vRmF2b3JpdGVkLCBhYk5vUXVlc3RJdGVtKSB7XHJcbiAgICBpZiAoYWJOb0VxdWlwcGVkID09PSB2b2lkIDApIHsgYWJOb0VxdWlwcGVkID0gdHJ1ZTsgfVxyXG4gICAgaWYgKGFiTm9GYXZvcml0ZWQgPT09IHZvaWQgMCkgeyBhYk5vRmF2b3JpdGVkID0gZmFsc2U7IH1cclxuICAgIGlmIChhYk5vUXVlc3RJdGVtID09PSB2b2lkIDApIHsgYWJOb1F1ZXN0SXRlbSA9IGZhbHNlOyB9XHJcbiAgICByZXR1cm4gc24uQWRkSXRlbXNPZlR5cGVUb0xpc3QoYWtSZWYsIGFrTGlzdCwgYWlGb3JtVHlwZSwgYWJOb0VxdWlwcGVkLCBhYk5vRmF2b3JpdGVkLCBhYk5vUXVlc3RJdGVtKTtcclxufTtcclxuLy9GaW5kcyBhbGwgcmVmZXJlbmNlcyBvZiBmb3JtIHR5cGUgaW4gbG9hZGVkIGNlbGxzLCB3aXRoaW4gcmFkaXVzIGZyb20gcmVmLiBJZiBhZlJhZGl1cyBpcyAwLCBpdCB3aWxsIGdldCBhbGwgcmVmZXJlbmNlcyBmcm9tIGFsbCBhdHRhY2hlZCBjZWxsc1xyXG5leHBvcnQgdmFyIEZpbmRBbGxSZWZlcmVuY2VzT2ZGb3JtVHlwZSA9IGZ1bmN0aW9uIChha1JlZiwgZm9ybVR5cGUsIGFmUmFkaXVzKSB7XHJcbiAgICByZXR1cm4gc24uRmluZEFsbFJlZmVyZW5jZXNPZkZvcm1UeXBlKGFrUmVmLCBmb3JtVHlwZSwgYWZSYWRpdXMpO1xyXG59O1xyXG4vL0ZpbmQgYWxsIHJlZmVyZW5jZXMgd2l0aCBrZXl3b3JkIGluIGxvYWRlZCBjZWxscywgd2l0aGluIHJhZGl1cyBmcm9tIHJlZi4gSWYgYWZSYWRpdXMgaXMgMCwgaXQgd2lsbCBnZXQgYWxsIHJlZmVyZW5jZXMgZnJvbSBhbGwgYXR0YWNoZWQgY2VsbHNcclxuZXhwb3J0IHZhciBGaW5kQWxsUmVmZXJlbmNlc1dpdGhLZXl3b3JkID0gZnVuY3Rpb24gKGFrUmVmLCBrZXl3b3JkT3JMaXN0LCBhZlJhZGl1cywgYWJNYXRjaEFsbCkge1xyXG4gICAgcmV0dXJuIHNuLkZpbmRBbGxSZWZlcmVuY2VzV2l0aEtleXdvcmQoYWtSZWYsIGtleXdvcmRPckxpc3QsIGFmUmFkaXVzLCBhYk1hdGNoQWxsKTtcclxufTtcclxuLy9GaW5kIGFsbCByZWZlcmVuY2VzIG1hdGNoaW5nIGJhc2UgZm9ybS9pbiBmb3JtbGlzdCwgd2l0aGluIHJhZGl1cyBmcm9tIHJlZi4gSWYgYWZSYWRpdXMgaXMgMCwgaXQgd2lsbCBnZXQgYWxsIHJlZmVyZW5jZXMgZnJvbSBhbGwgYXR0YWNoZWQgY2VsbHNcclxuZXhwb3J0IHZhciBGaW5kQWxsUmVmZXJlbmNlc09mVHlwZSA9IGZ1bmN0aW9uIChha1JlZiwgYWtGb3JtT3JMaXN0LCBhZlJhZGl1cykge1xyXG4gICAgcmV0dXJuIHNuLkZpbmRBbGxSZWZlcmVuY2VzT2ZUeXBlKGFrUmVmLCBha0Zvcm1Pckxpc3QsIGFmUmFkaXVzKTtcclxufTtcclxuLy9HZXRzIHRoZSBmaXJzdCBpdGVtIGluIGludmVudG9yeSB0aGF0IGV4aXN0cyBpbiBmb3JtbGlzdC5cclxuZXhwb3J0IHZhciBGaW5kRmlyc3RJdGVtSW5MaXN0ID0gZnVuY3Rpb24gKGFrUmVmLCBha0xpc3QpIHsgcmV0dXJuIHNuLkZpbmRGaXJzdEl0ZW1Jbkxpc3QoYWtSZWYsIGFrTGlzdCk7IH07XHJcbi8vR2V0cyBhY3RpdmF0ZSBjaGlsZHJlbiAtIHNlZSBJc0FjdGl2YXRlQ2hpbGRcclxuZXhwb3J0IHZhciBHZXRBY3RpdmF0ZUNoaWxkcmVuID0gZnVuY3Rpb24gKGFrUmVmKSB7IHJldHVybiBzbi5HZXRBY3RpdmF0ZUNoaWxkcmVuKGFrUmVmKTsgfTtcclxuLy9HZXRzIGN1cnJlbnQgZ2FtZWJyeW8gYW5pbWF0aW9uXHJcbmV4cG9ydCB2YXIgR2V0QWN0aXZlR2FtZWJyeW9BbmltYXRpb24gPSBmdW5jdGlvbiAoYWtSZWYpIHsgcmV0dXJuIHNuLkdldEFjdGl2ZUdhbWVicnlvQW5pbWF0aW9uKGFrUmVmKTsgfTtcclxuLy9HZXRzIGFjdG9yIHJlc3BvbnNpYmxlIGZvciBvYmplY3QuXHJcbmV4cG9ydCB2YXIgR2V0QWN0b3JDYXVzZSA9IGZ1bmN0aW9uIChha1JlZikgeyByZXR1cm4gc24uR2V0QWN0b3JDYXVzZShha1JlZik7IH07XHJcbi8vR2V0IGFsbCBhcnQgb2JqZWN0cyBhdHRhY2hlZCB0byB0aGlzIG9iamVjdC5cclxuZXhwb3J0IHZhciBHZXRBbGxBcnRPYmplY3RzID0gZnVuY3Rpb24gKGFrUmVmKSB7IHJldHVybiBzbi5HZXRBbGxBcnRPYmplY3RzKGFrUmVmKTsgfTtcclxuLy9HZXQgYWxsIGVmZmVjdCBzaGFkZXJzIGF0dGFjaGVkIHRvIHRoaXMgb2JqZWN0LlxyXG5leHBvcnQgdmFyIEdldEFsbEVmZmVjdFNoYWRlcnMgPSBmdW5jdGlvbiAoYWtSZWYpIHsgcmV0dXJuIHNuLkdldEFsbEVmZmVjdFNoYWRlcnMoYWtSZWYpOyB9O1xyXG4vL0dldHMgY2xvc2VzdCBhY3RvciB0byByZWYgKHdpdGhvdXQgcmV0dXJuaW5nIHRoZSByZWZlcmVuY2UgaXRzZWxmKS5cclxuZXhwb3J0IHZhciBHZXRDbG9zZXN0QWN0b3JGcm9tUmVmID0gZnVuY3Rpb24gKGFrUmVmLCBhYklnbm9yZVBsYXllcikgeyByZXR1cm4gc24uR2V0Q2xvc2VzdEFjdG9yRnJvbVJlZihha1JlZiwgYWJJZ25vcmVQbGF5ZXIpOyB9O1xyXG4vL0dldHMgZHVyYXRpb24gb2YgdGhlIGVmZmVjdHNoYWRlciBvbiB0aGUgcmVmLlxyXG5leHBvcnQgdmFyIEdldEVmZmVjdFNoYWRlckR1cmF0aW9uID0gZnVuY3Rpb24gKGFrUmVmLCBha1NoYWRlcikgeyByZXR1cm4gc24uR2V0RWZmZWN0U2hhZGVyRHVyYXRpb24oYWtSZWYsIGFrU2hhZGVyKTsgfTtcclxuLy9HZXRzIHRoZSBkb29yIHdoaWNoIGlzIGxpbmtlZCB0byB0aGlzIGxvYWQgZG9vci5cclxuZXhwb3J0IHZhciBHZXREb29yRGVzdGluYXRpb24gPSBmdW5jdGlvbiAoYWtSZWYpIHsgcmV0dXJuIHNuLkdldERvb3JEZXN0aW5hdGlvbihha1JlZik7IH07XHJcbi8vR2V0cyBhbGwgcmVmcyBsaW5rZWQgdG8gYWtSZWYuIEtleXdvcmQgb3B0aW9uYWwuXHJcbmV4cG9ydCB2YXIgR2V0TGlua2VkQ2hpbGRyZW4gPSBmdW5jdGlvbiAoYWtSZWYsIGFrS2V5d29yZCkgeyByZXR1cm4gc24uR2V0TGlua2VkQ2hpbGRyZW4oYWtSZWYsIGFrS2V5d29yZCk7IH07XHJcbi8vR2V0cyB0aGUgc291cmNlIG9mIHRoZSBtYWdpYyBlZmZlY3QgKHNwZWxsL2VuY2hhbnRtZW50L3Njcm9sbCBldGMpIGFuZCB0aGUgY2FzdGVyLiBNYWdpYyBlZmZlY3QgbXVzdCBiZSBwcmVzZW50IG9uIHRoZSByZWZlcmVuY2UuXHJcbmV4cG9ydCB2YXIgR2V0TWFnaWNFZmZlY3RTb3VyY2UgPSBmdW5jdGlvbiAoYWtSZWYsIGFrRWZmZWN0KSB7IHJldHVybiBzbi5HZXRNYWdpY0VmZmVjdFNvdXJjZShha1JlZiwgYWtFZmZlY3QpOyB9O1xyXG4vKiogTUFURVJJQUwgVFlQRVMgLSBTdHJpbmdcclxuICAgICAgICBTdG9uZUJyb2tlblxyXG4gICAgICAgIEJsb2NrQmxhZGUxSGFuZFxyXG4gICAgICAgIE1lYXRcclxuICAgICAgICBDYXJyaWFnZVdoZWVsXHJcbiAgICAgICAgTWV0YWxMaWdodFxyXG4gICAgICAgIFdvb2RMaWdodFxyXG4gICAgICAgIFNub3dcclxuICAgICAgICBHcmF2ZWxcclxuICAgICAgICBDaGFpbk1ldGFsXHJcbiAgICAgICAgQm90dGxlXHJcbiAgICAgICAgV29vZFxyXG4gICAgICAgIEFzaFxyXG4gICAgICAgIFNraW5cclxuICAgICAgICBCbG9ja0JsdW50XHJcbiAgICAgICAgRExDMURlZXJTa2luXHJcbiAgICAgICAgSW5zZWN0XHJcbiAgICAgICAgQmFycmVsXHJcbiAgICAgICAgQ2VyYW1pY01lZGl1bVxyXG4gICAgICAgIEJhc2tldFxyXG4gICAgICAgIEljZVxyXG4gICAgICAgIEdsYXNzU3RhaXJzXHJcbiAgICAgICAgU3RvbmVTdGFpcnNcclxuICAgICAgICBXYXRlclxyXG4gICAgICAgIERyYXVnclNrZWxldG9uXHJcbiAgICAgICAgQmxhZGUxSGFuZFxyXG4gICAgICAgIEJvb2tcclxuICAgICAgICBDYXJwZXRcclxuICAgICAgICBNZXRhbFNvbGlkXHJcbiAgICAgICAgQXhlMUhhbmRcclxuICAgICAgICBCbG9ja0JsYWRlMkhhbmRcclxuICAgICAgICBPcmdhbmljTGFyZ2VcclxuICAgICAgICBBbXVsZXRcclxuICAgICAgICBXb29kU3RhaXJzXHJcbiAgICAgICAgTXVkXHJcbiAgICAgICAgQm91bGRlclNtYWxsXHJcbiAgICAgICAgU25vd1N0YWlyc1xyXG4gICAgICAgIFN0b25lSGVhdnlcclxuICAgICAgICBEcmFnb25Ta2VsZXRvblxyXG4gICAgICAgIFRyYXBcclxuICAgICAgICBCb3dzU3RhdmVzXHJcbiAgICAgICAgQWxkdWluXHJcbiAgICAgICAgQmxvY2tCb3dzU3RhdmVzXHJcbiAgICAgICAgV29vZEFzU3RhaXJzXHJcbiAgICAgICAgU3RlZWxHcmVhdFN3b3JkXHJcbiAgICAgICAgR3Jhc3NcclxuICAgICAgICBCb3VsZGVyTGFyZ2VcclxuICAgICAgICBTdG9uZUFzU3RhaXJzXHJcbiAgICAgICAgQmxhZGUySGFuZFxyXG4gICAgICAgIEJvdHRsZVNtYWxsXHJcbiAgICAgICAgQm9uZUFjdG9yXHJcbiAgICAgICAgU2FuZFxyXG4gICAgICAgIE1ldGFsSGVhdnlcclxuICAgICAgICBETEMxU2FicmVDYXRQZWx0XHJcbiAgICAgICAgSWNlRm9ybVxyXG4gICAgICAgIERyYWdvblxyXG4gICAgICAgIEJsYWRlMUhhbmRTbWFsbFxyXG4gICAgICAgIFNraW5TbWFsbFxyXG4gICAgICAgIFBvdHNQYW5zXHJcbiAgICAgICAgU2tpblNrZWxldG9uXHJcbiAgICAgICAgQmx1bnQxSGFuZFxyXG4gICAgICAgIFN0b25lU3RhaXJzQnJva2VuXHJcbiAgICAgICAgU2tpbkxhcmdlXHJcbiAgICAgICAgT3JnYW5pY1xyXG4gICAgICAgIEJvbmVcclxuICAgICAgICBXb29kSGVhdnlcclxuICAgICAgICBDaGFpblxyXG4gICAgICAgIERpcnRcclxuICAgICAgICBHaG9zdFxyXG4gICAgICAgIFNraW5NZXRhbExhcmdlXHJcbiAgICAgICAgQmxvY2tBeGVcclxuICAgICAgICBBcm1vckxpZ2h0XHJcbiAgICAgICAgU2hpZWxkTGlnaHRcclxuICAgICAgICBDb2luXHJcbiAgICAgICAgQmxvY2tCbHVudDJIYW5kXHJcbiAgICAgICAgU2hpZWxkSGVhdnlcclxuICAgICAgICBBcm1vckhlYXZ5XHJcbiAgICAgICAgQXJyb3dcclxuICAgICAgICBHbGFzc1xyXG4gICAgICAgIFN0b25lXHJcbiAgICAgICAgV2F0ZXJQdWRkbGVcclxuICAgICAgICBDbG90aFxyXG4gICAgICAgIFNraW5NZXRhbFNtYWxsXHJcbiAgICAgICAgV2FyZFxyXG4gICAgICAgIFdlYlxyXG4gICAgICAgIFRyYWlsZXJTdGVlbFN3b3JkXHJcbiAgICAgICAgQmx1bnQySGFuZFxyXG4gICAgICAgIERMQzFTd2luZ2luZ0JyaWRnZVxyXG4gICAgICAgIEJvdWxkZXJNZWRpdW0gKi9cclxuLy9HZXRzIHRoZSBzcGVjaWZpZWQgY29sbGlzaW9uIHNoYXBlJ3MgaGF2b2sgbWF0ZXJpYWwgdHlwZXMgYXMgc3RyaW5nIGFycmF5LiBSZXR1cm5zIHRoZSBmaXJzdCBtYXRlcmlhbCB0eXBlIGlmIG5vZGVOYW1lIGlzIGVtcHR5XHJcbmV4cG9ydCB2YXIgR2V0TWF0ZXJpYWxUeXBlID0gZnVuY3Rpb24gKGFrUmVmLCBhc05vZGVOYW1lKSB7XHJcbiAgICBpZiAoYXNOb2RlTmFtZSA9PT0gdm9pZCAwKSB7IGFzTm9kZU5hbWUgPSBcIlwiOyB9XHJcbiAgICByZXR1cm4gc24uR2V0TWF0ZXJpYWxUeXBlKGFrUmVmLCBhc05vZGVOYW1lKTtcclxufTtcclxuLy9HZXRzIHRoZSBtb3Rpb24gdHlwZSBvZiB0aGUgb2JqZWN0IChzZWUgdmFuaWxsYSBTZXRNb3Rpb25UeXBlIGZvciB0eXBlcykuIFJldHVybnMgLTEgaWYgM2QgaXMgbm90IGxvYWRlZFxyXG5leHBvcnQgdmFyIEdldE1vdGlvblR5cGUgPSBmdW5jdGlvbiAoYWtSZWYpIHsgcmV0dXJuIHNuLkdldE1vdGlvblR5cGUoYWtSZWYpOyB9O1xyXG4vL0dldHMgcmFuZG9tIGFjdG9yIG5lYXIgcmVmICh3aXRob3V0IHJldHVybmluZyB0aGUgcmVmZXJlbmNlIGl0c2VsZikuXHJcbmV4cG9ydCB2YXIgR2V0UmFuZG9tQWN0b3JGcm9tUmVmID0gZnVuY3Rpb24gKGFrUmVmLCBhZlJhZGl1cywgYWJJZ25vcmVQbGF5ZXIpIHtcclxuICAgIHJldHVybiBzbi5HZXRSYW5kb21BY3RvckZyb21SZWYoYWtSZWYsIGFmUmFkaXVzLCBhYklnbm9yZVBsYXllcik7XHJcbn07XHJcbi8vR2V0cyBxdWVzdCBpdGVtcyBpbiB0aGlzIHJlZidzIGludmVudG9yeSwgaWYgYW55XHJcbmV4cG9ydCB2YXIgR2V0UXVlc3RJdGVtcyA9IGZ1bmN0aW9uIChha1JlZiwgYWJOb0VxdWlwcGVkLCBhYk5vRmF2b3JpdGVkKSB7XHJcbiAgICBpZiAoYWJOb0VxdWlwcGVkID09PSB2b2lkIDApIHsgYWJOb0VxdWlwcGVkID0gZmFsc2U7IH1cclxuICAgIGlmIChhYk5vRmF2b3JpdGVkID09PSB2b2lkIDApIHsgYWJOb0Zhdm9yaXRlZCA9IGZhbHNlOyB9XHJcbiAgICByZXR1cm4gc24uR2V0UXVlc3RJdGVtcyhha1JlZiwgYWJOb0VxdWlwcGVkLCBhYk5vRmF2b3JpdGVkKTtcclxufTtcclxuLy9HZXQgYWxsIGFsaWFzZXMgY29udGFpbmluZyB0aGlzIHJlZlxyXG5leHBvcnQgdmFyIEdldFJlZkFsaWFzZXMgPSBmdW5jdGlvbiAoYWtSZWYpIHsgcmV0dXJuIHNuLkdldFJlZkFsaWFzZXMoYWtSZWYpOyB9O1xyXG4vL1JldHVybnMgdGhlIHNpemUgb2YgdGhlIHN0b3JlZCBzb3VsIGluIGEgc291bGdlbSBvYmplY3RyZWZlcmVuY2VcclxuZXhwb3J0IHZhciBHZXRTdG9yZWRTb3VsU2l6ZSA9IGZ1bmN0aW9uIChha1JlZikgeyByZXR1cm4gc24uR2V0U3RvcmVkU291bFNpemUoYWtSZWYpOyB9O1xyXG4vL1JldHVybnMgdGhlIG51bWJlciBvZiBpbnN0YW5jZXMgb2YgdGhlIHNwZWNpZmllZCBhcnQgb2JqZWN0IChhdHRhY2hlZCB1c2luZyB2aXN1YWwgZWZmZWN0cykgb24gdGhlIHJlZmVyZW5jZS5cclxuZXhwb3J0IHZhciBIYXNBcnRPYmplY3QgPSBmdW5jdGlvbiAoYWtSZWYsIGFrQXJ0T2JqZWN0LCBhYkFjdGl2ZSkge1xyXG4gICAgaWYgKGFiQWN0aXZlID09PSB2b2lkIDApIHsgYWJBY3RpdmUgPSBmYWxzZTsgfVxyXG4gICAgcmV0dXJuIHNuLkhhc0FydE9iamVjdChha1JlZiwgYWtBcnRPYmplY3QsIGFiQWN0aXZlKTtcclxufTtcclxuLy9SZXR1cm5zIHRoZSBudW1iZXIgb2YgaW5zdGFuY2VzIG9mIHRoZSBzcGVjaWZpZWQgZWZmZWN0IHNoYWRlciBvbiB0aGUgcmVmZXJlbmNlLlxyXG5leHBvcnQgdmFyIEhhc0VmZmVjdFNoYWRlciA9IGZ1bmN0aW9uIChha1JlZiwgYWtTaGFkZXIsIGFiQWN0aXZlKSB7XHJcbiAgICBpZiAoYWJBY3RpdmUgPT09IHZvaWQgMCkgeyBhYkFjdGl2ZSA9IGZhbHNlOyB9XHJcbiAgICByZXR1cm4gc24uSGFzRWZmZWN0U2hhZGVyKGFrUmVmLCBha1NoYWRlciwgYWJBY3RpdmUpO1xyXG59O1xyXG4vL1JldHVybnMgd2hldGhlciB0aGUgcmVmZXJlbmNlIGhhcyBuaWV4dHJhZGF0YSAoYXR0YWNoZWQgdG8gcm9vdCAzRCBub2RlKS4gUGFydGlhbCBtYXRjaGVzIGFjY2VwdGVkLlxyXG5leHBvcnQgdmFyIEhhc05pRXh0cmFEYXRhID0gZnVuY3Rpb24gKGFrUmVmLCBhc05hbWUpIHsgcmV0dXJuIHNuLkhhc05pRXh0cmFEYXRhKGFrUmVmLCBhc05hbWUpOyB9O1xyXG4vL0lzIGRvb3IgYSBsb2FkIGRvb3I/XHJcbmV4cG9ydCB2YXIgSXNMb2FkRG9vciA9IGZ1bmN0aW9uIChha1JlZikgeyByZXR1cm4gc24uSXNMb2FkRG9vcihha1JlZik7IH07XHJcbi8vSXMgYSBxdWVzdCBvYmplY3Q/XHJcbmV4cG9ydCB2YXIgSXNRdWVzdEl0ZW0gPSBmdW5jdGlvbiAoYWtSZWYpIHsgcmV0dXJuIHNuLklzUXVlc3RJdGVtKGFrUmVmKTsgfTtcclxuLy9JcyBhIFZJUCAoYWN0b3IgdGhhdCBpcyBuZWVkZWQgYnkgcXVlc3QpP1xyXG5leHBvcnQgdmFyIElzVklQID0gZnVuY3Rpb24gKGFrUmVmKSB7XHJcbiAgICByZXR1cm4gc24uSXNWSVAoYWtSZWYpO1xyXG59O1xyXG4vLy0tLS0tLS1cclxuLy9TRVRURVJTXHJcbi8vLS0tLS0tLVxyXG4vL0FwcGxpZXMgbWF0ZXJpYWwgc2hhZGVyIHRvIHJlZmVyZW5jZSAoZG9lc24ndCBoYXZlIHRvIGJlIHN0YXRpYylcclxuZXhwb3J0IHZhciBBcHBseU1hdGVyaWFsU2hhZGVyID0gZnVuY3Rpb24gKGFrUmVmLCBha01hdE9iamVjdCwgZGlyZWN0aW9uYWxUaHJlc2hvbGRBbmdsZSkge1xyXG4gICAgcmV0dXJuIHNuLkFwcGx5TWF0ZXJpYWxTaGFkZXIoYWtSZWYsIGFrTWF0T2JqZWN0LCBkaXJlY3Rpb25hbFRocmVzaG9sZEFuZ2xlKTtcclxufTtcclxuLy9XcmFwcGVyIGZ1bmN0aW9uIGZvciBBZGRLZXl3b3JkVG9Gb3JtLlxyXG5leHBvcnQgdmFyIEFkZEtleXdvcmRUb1JlZiA9IGZ1bmN0aW9uIChha1JlZiwgYWtLZXl3b3JkKSB7IHJldHVybiBzbi5BZGRLZXl3b3JkVG9SZWYoYWtSZWYsIGFrS2V5d29yZCk7IH07XHJcbi8vU25hcHMgdGhlIG9iamVjdCB0byB0aGUgbmVhcmVzdCBuYXZtZXNoIHBvaW50IGNsb3Nlc3QgdG8gaXRzIGN1cnJlbnQgcG9zaXRpb24gaW4gdGhlIGNlbGwuXHJcbmV4cG9ydCB2YXIgTW92ZVRvTmVhcmVzdE5hdm1lc2hMb2NhdGlvbiA9IGZ1bmN0aW9uIChha1JlZikgeyByZXR1cm4gc24uTW92ZVRvTmVhcmVzdE5hdm1lc2hMb2NhdGlvbihha1JlZik7IH07XHJcbi8vV3JhcHBlciBmdW5jdGlvbiBmb3IgUmVtb3ZlS2V5d29yZEZyb21Gb3JtLlxyXG5leHBvcnQgdmFyIFJlbW92ZUtleXdvcmRGcm9tUmVmID0gZnVuY3Rpb24gKGFrUmVmLCBha0tleXdvcmQpIHsgcmV0dXJuIHNuLlJlbW92ZUtleXdvcmRGcm9tUmVmKGFrUmVmLCBha0tleXdvcmQpOyB9O1xyXG4vL1dyYXBwZXIgZnVuY3Rpb24gZm9yIFJlcGxhY2VLZXl3b3JkT25Gb3JtLlxyXG5leHBvcnQgdmFyIFJlcGxhY2VLZXl3b3JkT25SZWYgPSBmdW5jdGlvbiAoYWtSZWYsIGFrS2V5d29yZEFkZCwgYWtLZXl3b3JkUmVtb3ZlKSB7IHJldHVybiBzbi5SZXBsYWNlS2V5d29yZE9uUmVmKGFrUmVmLCBha0tleXdvcmRBZGQsIGFrS2V5d29yZFJlbW92ZSk7IH07XHJcbi8vUGxheXMgZGVidWcgc2hhZGVyIG9uIHRoZSByZWZlcmVuY2UsIHdpdGggbm9ybWFsaXNlZCBSR0JBIGNvbG9yIChvciBmdWxseSB3aGl0ZSBpZiBlbXB0eSlcclxuZXhwb3J0IHZhciBQbGF5RGVidWdTaGFkZXIgPSBmdW5jdGlvbiAoYWtSZWYsIGFmUkdCQSkgeyByZXR1cm4gc24uUGxheURlYnVnU2hhZGVyKGFrUmVmLCBhZlJHQkEpOyB9O1xyXG4vL1NjYWxlcyBub2RlICYgY29sbGlzaW9uIChiaGtCb3hTaGFwZSwgYmhrU3BoZXJlU2hhcGUpLiBFbnRpcmUgbmlmIHdpbGwgYmUgc2NhbGVkIGlmIHN0cmluZyBpcyBlbXB0eS4gQ29sbGlzaW9uIGhhcyB0byBiZSBkaXJlY3RseSBhdHRhY2hlZCB0byBuYW1lZCBub2Rlcy5cclxuLy9BZGRzIFwiUE8zX1NDQUxFXCIgbmlleHRyYWRhdGEgdG8gcm9vdCBub2RlLlxyXG5leHBvcnQgdmFyIFNjYWxlT2JqZWN0M0QgPSBmdW5jdGlvbiAoYWtSZWYsIGFzTm9kZU5hbWUsIGFmU2NhbGUpIHsgcmV0dXJuIHNuLlNjYWxlT2JqZWN0M0QoYWtSZWYsIGFzTm9kZU5hbWUsIGFmU2NhbGUpOyB9O1xyXG4vL1NldHMgdGhlIGJhc2Ugb2JqZWN0IG9mIHRoaXMgcmVmZXJlbmNlIGFuZCByZWxvYWRzIDNEXHJcbmV4cG9ydCB2YXIgU2V0QmFzZU9iamVjdCA9IGZ1bmN0aW9uIChha1JlZiwgYWtCYXNlT2JqZWN0KSB7IHJldHVybiBzbi5TZXRCYXNlT2JqZWN0KGFrUmVmLCBha0Jhc2VPYmplY3QpOyB9O1xyXG4vKiogQ09MTElTSU9OIExBWUVSU1xyXG4gICAgICAgIGtVbmlkZW50aWZpZWQgPSAwLFxyXG4gICAgICAgIGtTdGF0aWMgPSAxLFxyXG4gICAgICAgIGtBbmltU3RhdGljID0gMixcclxuICAgICAgICBrVHJhbnNwYXJlbnQgPSAzLFxyXG4gICAgICAgIGtDbHV0dGVyID0gNCxcclxuICAgICAgICBrV2VhcG9uID0gNSxcclxuICAgICAgICBrUHJvamVjdGlsZSA9IDYsXHJcbiAgICAgICAga1NwZWxsID0gNyxcclxuICAgICAgICBrQmlwZWQgPSA4LFxyXG4gICAgICAgIGtUcmVlcyA9IDksXHJcbiAgICAgICAga1Byb3BzID0gMTAsXHJcbiAgICAgICAga1dhdGVyID0gMTEsXHJcbiAgICAgICAga1RyaWdnZXIgPSAxMixcclxuICAgICAgICBrVGVycmFpbiA9IDEzLFxyXG4gICAgICAgIGtUcmFwID0gMTQsXHJcbiAgICAgICAga05vbkNvbGxpZGFibGUgPSAxNSxcclxuICAgICAgICBrQ2xvdWRUcmFwID0gMTYsXHJcbiAgICAgICAga0dyb3VuZCA9IDE3LFxyXG4gICAgICAgIGtQb3J0YWwgPSAxOCxcclxuICAgICAgICBrRGVicmlzU21hbGwgPSAxOSxcclxuICAgICAgICBrRGVicmlzTGFyZ2UgPSAyMCxcclxuICAgICAgICBrQWNvdXN0aWNTcGFjZSA9IDIxLFxyXG4gICAgICAgIGtBY3RvclpvbmUgPSAyMixcclxuICAgICAgICBrUHJvamVjdGlsZVpvbmUgPSAyMyxcclxuICAgICAgICBrR2FzVHJhcCA9IDI0LFxyXG4gICAgICAgIGtTaGVsbENhc3RpbmcgPSAyNSxcclxuICAgICAgICBrVHJhbnNwYXJlbnRXYWxsID0gMjYsXHJcbiAgICAgICAga0ludmlzaWJsZVdhbGwgPSAyNyxcclxuICAgICAgICBrVHJhbnNwYXJlbnRTbWFsbEFuaW0gPSAyOCxcclxuICAgICAgICBrQ2x1dHRlckxhcmdlID0gMjksXHJcbiAgICAgICAga0NoYXJDb250cm9sbGVyID0gMzAsXHJcbiAgICAgICAga1N0YWlySGVscGVyID0gMzEsXHJcbiAgICAgICAga0RlYWRCaXAgPSAzMixcclxuICAgICAgICBrQmlwZWROb0NDID0gMzMsXHJcbiAgICAgICAga0F2b2lkQm94ID0gMzQsXHJcbiAgICAgICAga0NvbGxpc2lvbkJveCA9IDM1LFxyXG4gICAgICAgIGtDYW1lcmFTcGhlcmUgPSAzNixcclxuICAgICAgICBrRG9vckRldGVjdGlvbiA9IDM3LFxyXG4gICAgICAgIGtDb25lUHJvamVjdGlsZSA9IDM4LFxyXG4gICAgICAgIGtDYW1lcmEgPSAzOSxcclxuICAgICAgICBrSXRlbVBpY2tlciA9IDQwLFxyXG4gICAgICAgIGtMT1MgPSA0MSxcclxuICAgICAgICBrUGF0aGluZ1BpY2sgPSA0MixcclxuICAgICAgICBrVW51c2VkMCA9IDQzLFxyXG4gICAgICAgIGtVbnVzZWQxID0gNDQsXHJcbiAgICAgICAga1NwZWxsRXhwbG9zaW9uID0gNDUsXHJcbiAgICAgICAga0Ryb3BwaW5nUGljayA9IDQ2ICovXHJcbi8vU2V0cyBvYmplY3QgM0Qgcm9vdCBvciBzcGVjaWZpZWQgbm9kZSdzIGNvbGxpc2lvbiBsYXllclxyXG5leHBvcnQgdmFyIFNldENvbGxpc2lvbkxheWVyID0gZnVuY3Rpb24gKGFrUmVmLCBhc05vZGVOYW1lLCBhaUNvbGxpc2lvbkxheWVyKSB7IHJldHVybiBzbi5TZXRDb2xsaXNpb25MYXllcihha1JlZiwgYXNOb2RlTmFtZSwgYWlDb2xsaXNpb25MYXllcik7IH07XHJcbi8vU2V0cyB0aGUgZG9vciBhcyB0aGUgbmV3IGxpbmtlZCBkb29yXHJcbmV4cG9ydCB2YXIgU2V0RG9vckRlc3RpbmF0aW9uID0gZnVuY3Rpb24gKGFrUmVmLCBha0Rvb3IpIHsgcmV0dXJuIHNuLlNldERvb3JEZXN0aW5hdGlvbihha1JlZiwgYWtEb29yKTsgfTtcclxuLy9TZXRzIGVmZmVjdHNoYWRlciBkdXJhdGlvbi4gSW50ZXJuYWwgZHVyYXRpb24gaXMgc2V0IHdoZW4gdGhlIGVmZmVjdHNoYWRlciBiZWdpbnMgYW5kIGRvZXMgbm90IGNoYW5nZSB3aXRoIHRpbWUuXHJcbmV4cG9ydCB2YXIgU2V0RWZmZWN0U2hhZGVyRHVyYXRpb24gPSBmdW5jdGlvbiAoYWtSZWYsIGFrU2hhZGVyLCBhZlRpbWUsIGFiQWJzb2x1dGUpIHsgcmV0dXJuIHNuLlNldEVmZmVjdFNoYWRlckR1cmF0aW9uKGFrUmVmLCBha1NoYWRlciwgYWZUaW1lLCBhYkFic29sdXRlKTsgfTtcclxuLy9TZXRzIGxpbmtlZCByZWYuIFBhc3MgTm9uZSBpbnRvIGFrVGFyZ2V0UmVmIHRvIHVuc2V0IHRoZSBsaW5rZWQgcmVmLlxyXG5leHBvcnQgdmFyIFNldExpbmtlZFJlZiA9IGZ1bmN0aW9uIChha1JlZiwgYWtUYXJnZXRSZWYsIGFrS2V5d29yZCkge1xyXG4gICAgaWYgKGFrS2V5d29yZCA9PT0gdm9pZCAwKSB7IGFrS2V5d29yZCA9IG51bGw7IH1cclxuICAgIHJldHVybiBzbi5TZXRMaW5rZWRSZWYoYWtSZWYsIGFrVGFyZ2V0UmVmLCBha0tleXdvcmQpO1xyXG59O1xyXG4vL1NldHMgaGF2b2sgbWF0ZXJpYWwgdHlwZS4gVXNlIG9sZE1hdGVyaWFsIHN0cmluZyB0byBzZWxlY3Qgd2hhdCBtYXRlcmlhbCB5b3Ugd2FudCB0byBjaGFuZ2UgZnJvbSB0byAoZWcuIGZyb20gc3RvbmUgdG8gd29vZCksIGFuZCBub2RlTmFtZSB0byBhcHBseSBpdCB0byB0aGUgc3BlY2lmaWMgbm9kZS5cclxuLy9JZiBib3RoIGFyZSBlbXB0eSwgZXZlcnkgY29sbGlzaW9uIG1hdGVyaWFsIHdpbGwgYmUgc2V0LlxyXG5leHBvcnQgdmFyIFNldE1hdGVyaWFsVHlwZSA9IGZ1bmN0aW9uIChha1JlZiwgYXNOZXdNYXRlcmlhbCwgYXNPbGRNYXRlcmlhbCwgYXNOb2RlTmFtZSkge1xyXG4gICAgaWYgKGFzT2xkTWF0ZXJpYWwgPT09IHZvaWQgMCkgeyBhc09sZE1hdGVyaWFsID0gXCJcIjsgfVxyXG4gICAgaWYgKGFzTm9kZU5hbWUgPT09IHZvaWQgMCkgeyBhc05vZGVOYW1lID0gXCJcIjsgfVxyXG4gICAgcmV0dXJuIHNuLlNldE1hdGVyaWFsVHlwZShha1JlZiwgYXNOZXdNYXRlcmlhbCwgYXNPbGRNYXRlcmlhbCwgYXNOb2RlTmFtZSk7XHJcbn07XHJcbi8vQ29waWVzIHNraW4gdGludCBjb2xvciBmcm9tIGFjdG9yYmFzZSB0byBib2R5cGFydHMgbmlmXHJcbmV4cG9ydCB2YXIgU2V0dXBCb2R5UGFydEdlb21ldHJ5ID0gZnVuY3Rpb24gKGFrUmVmLCBha0FjdG9yKSB7IHJldHVybiBzbi5TZXR1cEJvZHlQYXJ0R2VvbWV0cnkoYWtSZWYsIGFrQWN0b3IpOyB9O1xyXG4vKiogU0hBREVSIFRZUEVTXHJcbiAgICAgICAga0RlZmF1bHQgPSAwXHJcbiAgICAgICAga0Vudmlyb25tZW50TWFwID0gMVxyXG4gICAgICAgIGtHbG93TWFwID0gMlxyXG4gICAgICAgIGtQYXJhbGxheCA9IDNcclxuICAgICAgICBrRmFjZUdlbiA9IDRcclxuICAgICAgICBrRmFjZUdlblJHQlRpbnQgPSA1XHJcbiAgICAgICAga0hhaXJUaW50ID0gNlxyXG4gICAgICAgIGtQYXJhbGxheE9jYyA9IDdcclxuICAgICAgICBrTXVsdGlUZXhMYW5kID0gOFxyXG4gICAgICAgIGtMT0RMYW5kID0gOVxyXG4gICAgICAgIGtNdWx0aWxheWVyUGFyYWxsYXggPSAxMVxyXG4gICAgICAgIGtUcmVlQW5pbSA9IDEyXHJcbiAgICAgICAga011bHRpSW5kZXhUcmlTaGFwZVNub3cgPSAxNFxyXG4gICAgICAgIGtMT0RPYmplY3RzSEQgPSAxNVxyXG4gICAgICAgIGtFeWUgPSAxNlxyXG4gICAgICAgIGtDbG91ZCA9IDE3XHJcbiAgICAgICAga0xPRExhbmROb2lzZSA9IDE4XHJcbiAgICAgICAga011bHRpVGV4TGFuZExPREJsZW5kID0gMTkgKi9cclxuLy9zZXRzIHRoZSByZWYncyBzaGFkZXIgbWF0ZXJpYWwgdHlwZSBpZS4gZGVmYXVsdCB0byBjdWJlbWFwXHJcbi8vdGVtcGxhdGUgbmVlZHMgdG8gYmUgbG9hZGVkXHJcbi8vaWYgdGV4dHVyZSB0eXBlIGlzIC0xLCB0aGUgcmVmZXJlbmNlJ3MgZW50aXJlIHRleHR1cmVzZXQgaXMgcmVwbGFjZWQgdXNpbmcgdGhlIHRlbXBsYXRlJ3MgdGV4dHVyZXNldC8vXHJcbi8vaWYgdGV4dHVyZSB0eXBlIGlzIDAtOSB0aGUgdGVtcGxhdGUncyB0ZXh0dXJlc2V0IGlzIHN0aWxsIGFwcGxpZWQgYnV0IHJlZmVyZW5jZSdzIHRleHR1cmUgYXQgdGhhdCBpbmRleCB3aWxsIHRha2UgcHJpb3JpdHkuXHJcbi8vb3B0aW9uYWwgZGlmZnVzZSBwYXRoIGNhbiBiZSB1c2VkIHRvIGZpbHRlciBzaGFwZXMgdG8gYXBwbHkgdGhlIHNoYWRlciB0bywgcGFydGlhbCBtYXRjaGVzIGFyZSBhY2NlcHRlZCBsaWtlIFwiRHJhdWdyLmRkc1wiXHJcbi8vbGltaXRhdGlvbnMgLSBjYW5ub3QgYmUgdXNlZCBvbiBnZW9tZXRyeSB3aXRoIG5vIG5vcm1hbHMgKGllLiBib2R5IHNraW4gbWVzaGVzKVxyXG5leHBvcnQgdmFyIFNldFNoYWRlclR5cGUgPSBmdW5jdGlvbiAoYWtSZWYsIGFrVGVtcGxhdGUsIGFzRGlmZnVzZVBhdGgsIGFpU2hhZGVyVHlwZSwgYWlUZXh0dXJlVHlwZSwgYWJOb1dlYXBvbnMsIGFiTm9BbHBoYVByb3BlcnR5KSB7XHJcbiAgICByZXR1cm4gc24uU2V0U2hhZGVyVHlwZShha1JlZiwgYWtUZW1wbGF0ZSwgYXNEaWZmdXNlUGF0aCwgYWlTaGFkZXJUeXBlLCBhaVRleHR1cmVUeXBlLCBhYk5vV2VhcG9ucywgYWJOb0FscGhhUHJvcGVydHkpO1xyXG59O1xyXG4vL1N0b3BzIEFMTCBlZmZlY3Qgc2hhZGVycyBhbmQgYXJ0IG9iamVjdHMgKHZpc3VhbCBlZmZlY3RzKSBjdXJyZW50bHkgb24gdGhpcyBhY3RvclxyXG5leHBvcnQgdmFyIFN0b3BBbGxTaGFkZXJzID0gZnVuY3Rpb24gKGFrUmVmKSB7IHJldHVybiBzbi5TdG9wQWxsU2hhZGVycyhha1JlZik7IH07XHJcbi8vUmVtb3ZlcyBhbGwgaW5zdGFuY2VzIG9mIHRoZSBhcnQgb2JqZWN0IChoaXQgbWFnaWMgZWZmZWN0L3Zpc3VhbCBlZmZlY3QpIGF0dGFjaGVkIHRvIHRoZSByZWZlcmVuY2UuXHJcbmV4cG9ydCB2YXIgU3RvcEFydE9iamVjdCA9IGZ1bmN0aW9uIChha1JlZiwgYWtBcnQpIHsgcmV0dXJuIHNuLlN0b3BBcnRPYmplY3QoYWtSZWYsIGFrQXJ0KTsgfTtcclxuLy9Ub2dnbGVzIG5vZGUgdmlzaWJpbGl0eS5cclxuZXhwb3J0IHZhciBUb2dnbGVDaGlsZE5vZGUgPSBmdW5jdGlvbiAoYWtSZWYsIGFzTm9kZU5hbWUsIGFiRGlzYWJsZSkgeyByZXR1cm4gc24uVG9nZ2xlQ2hpbGROb2RlKGFrUmVmLCBhc05vZGVOYW1lLCBhYkRpc2FibGUpOyB9O1xyXG4vL1VwZGF0ZXMgbm9kZSBkYXRhLiBNb3ZlIGhpdCBlZmZlY3QgYXJ0IHRvIG5ldyBub2RlIChpZS4gZnJvbSBcIk1hZ2ljRWZmZWN0c05vZGVcIiB0byBcIk5QQyBIZWFkIFtIZWFkXVwiKSBvciB1cGRhdGUgdHJhbnNsYXRlLCByb3RhdGUsIGFuZCBzY2FsZSB2YWx1ZXMuXHJcbi8vVHJhbnNsYXRlIGFuZCBSb3RhdGUgYXJyYXlzIG11c3QgaGF2ZSB0aHJlZSB2YWx1ZXMgaW4gb3JkZXIgdG8gd29yay4gUm90YXRlIHVzZXMgZXVsZXIgYW5nbGVzIGluIGRlZ3JlZXMgKFhZWikuIFNjYWxlIGlzIHJlbGF0aXZlLCBhbmQgaXMgbXVsdGlwbGllZCBieSBleGlzdGluZyBzY2FsZS5cclxuLy9JZiB0aGUgaGl0IGVmZmVjdCBhcnQgaXMgcmVtb3ZlZCBhbmQgcmVhdHRhY2hlZCwgaXQgd2lsbCByZXZlcnQgYmFjayB0byB0aGUgdmFsdWVzIGluIHRoZSBuaWYuXHJcbmV4cG9ydCB2YXIgVXBkYXRlSGl0RWZmZWN0QXJ0Tm9kZSA9IGZ1bmN0aW9uIChha1JlZiwgYWtBcnQsIGFzTmV3Tm9kZSwgYWZUcmFuc2xhdGUsIGFmUm90YXRlLCBhZlJlbGF0aXZlU2NhbGUpIHtcclxuICAgIGlmIChhZlJlbGF0aXZlU2NhbGUgPT09IHZvaWQgMCkgeyBhZlJlbGF0aXZlU2NhbGUgPSAxLjA7IH1cclxuICAgIHJldHVybiBzbi5VcGRhdGVIaXRFZmZlY3RBcnROb2RlKGFrUmVmLCBha0FydCwgYXNOZXdOb2RlLCBhZlRyYW5zbGF0ZSwgYWZSb3RhdGUsIGFmUmVsYXRpdmVTY2FsZSk7XHJcbn07XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vL1BBQ0tBR0VTXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLy0tLS0tLS1cclxuLy9HRVRURVJTXHJcbi8vLS0tLS0tLVxyXG4vKiogUEFDS0FHRSBUWVBFU1xyXG4gICAgICAgIEZpbmQgPSAwXHJcbiAgICAgICAgRm9sbG93ID0gMVxyXG4gICAgICAgIEVzY29ydCA9IDJcclxuICAgICAgICBFYXQgPSAzXHJcbiAgICAgICAgU2xlZXAgPSA0XHJcbiAgICAgICAgV2FuZGVyID0gNVxyXG4gICAgICAgIFRyYXZlbCA9IDZcclxuICAgICAgICBBY2NvbXBhbnkgPSA3XHJcbiAgICAgICAgVXNlSXRlbUF0ID0gOFxyXG4gICAgICAgIEFtYnVzaCA9IDlcclxuICAgICAgICBGbGVlTm90Q29tYmF0ID0gMTBcclxuICAgICAgICBDYXN0TWFnaWMgPSAxMVxyXG4gICAgICAgIFNhbmRib3ggPSAxMlxyXG4gICAgICAgIFBhdHJvbCA9IDEzXHJcbiAgICAgICAgR3VhcmQgPSAxNFxyXG4gICAgICAgIERpYWxvZ3VlID0gMTVcclxuICAgICAgICBVc2VXZWFwb24gPSAxNlxyXG4gICAgICAgIEZpbmQyID0gMTdcclxuICAgICAgICBQYWNrYWdlID0gMThcclxuICAgICAgICBQYWNrYWdlVGVtcGxhdGUgPSAxOVxyXG4gICAgICAgIEFjdGl2YXRlID0gMjBcclxuICAgICAgICBBbGFybSA9IDIxXHJcbiAgICAgICAgRmxlZSA9IDIyXHJcbiAgICAgICAgVHJlc3Bhc3MgPSAyM1xyXG4gICAgICAgIFNwZWN0YXRvciA9IDI0XHJcbiAgICAgICAgUmVhY3RUb0RlYWQgPSAyNVxyXG4gICAgICAgIEdldFVwRnJvbUNoYWlyID0gMjZcclxuICAgICAgICBEb05vdGhpbmcgPSAyN1xyXG4gICAgICAgIEluR2FtZURpYWxvZ3VlID0gMjhcclxuICAgICAgICBTdXJmYWNlID0gIDI5XHJcbiAgICAgICAgU2VhcmNoRm9yQXR0YWNrZXIgPSAzMFxyXG4gICAgICAgIEF2b2lkUGxheWVyID0gMzFcclxuICAgICAgICBSZWFjdFRvRGVzdHJveWVkT2JqZWN0ID0gMzJcclxuICAgICAgICBSZWFjdFRvR3JlbmFkZU9yTWluZSA9IDMzXHJcbiAgICAgICAgU3RlYWxXYXJuaW5nID0gMzRcclxuICAgICAgICBQaWNrUG9ja2V0V2FybmluZyA9IDM1XHJcbiAgICAgICAgTW92ZW1lbnRCbG9ja2VkID0gMzZcclxuICAgICAgICBWYW1waXJlRmVlZCA9IDM3XHJcbiAgICAgICAgQ2FubmliYWxGZWVkID0gMzggKi9cclxuLy9HZXRzIHBhY2thZ2UgdHlwZS4gUmV0dXJucyAtMSBpZiBwYWNrYWdlIGlzIG5vbmVcclxuZXhwb3J0IHZhciBHZXRQYWNrYWdlVHlwZSA9IGZ1bmN0aW9uIChha1BhY2thZ2UpIHtcclxuICAgIHJldHVybiBzbi5HZXRQYWNrYWdlVHlwZShha1BhY2thZ2UpO1xyXG59O1xyXG4vL0dldHMgYWxsIGlkbGVzIG9uIHRoaXMgcGFja2FnZVxyXG5leHBvcnQgdmFyIEdldFBhY2thZ2VJZGxlcyA9IGZ1bmN0aW9uIChha1BhY2thZ2UpIHsgcmV0dXJuIHNuLkdldFBhY2thZ2VJZGxlcyhha1BhY2thZ2UpOyB9O1xyXG4vLy0tLS0tLS1cclxuLy9TRVRURVJTXHJcbi8vLS0tLS0tLVxyXG4vL0FkZHMgaWRsZSB0byB0aGUgZW5kIG9mIHRoZSBwYWNrYWdlIGlkbGUgc3RhY2ssIGNyZWF0aW5nIGl0IGlmIG5lZWRlZC5cclxuZXhwb3J0IHZhciBBZGRQYWNrYWdlSWRsZSA9IGZ1bmN0aW9uIChha1BhY2thZ2UsIGFrSWRsZSkgeyByZXR1cm4gc24uQWRkUGFja2FnZUlkbGUoYWtQYWNrYWdlLCBha0lkbGUpOyB9O1xyXG4vL1JlbW92ZXMgaWRsZSBmcm9tIHBhY2thZ2VcclxuZXhwb3J0IHZhciBSZW1vdmVQYWNrYWdlSWRsZSA9IGZ1bmN0aW9uIChha1BhY2thZ2UsIGFrSWRsZSkgeyByZXR1cm4gc24uUmVtb3ZlUGFja2FnZUlkbGUoYWtQYWNrYWdlLCBha0lkbGUpOyB9O1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy9QQVBZUlVTIEVYVEVOREVSXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vL3JldHVybnMgY3VycmVudCB2ZXJzaW9uIGFzIGludCBhcnJheSAobWFqb3IsbWlub3IscGF0Y2ggLyA0LDMsNylcclxuZXhwb3J0IHZhciBHZXRQYXB5cnVzRXh0ZW5kZXJWZXJzaW9uID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHNuLkdldFBhcHlydXNFeHRlbmRlclZlcnNpb24oKTtcclxufTtcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vL1BPVElPTiAtIHNlZSBTUEVMTFxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmV4cG9ydCB2YXIgQWRkTWFnaWNFZmZlY3RUb1BvdGlvbiA9IGZ1bmN0aW9uIChha1BvdGlvbiwgYWtNYWdpY0VmZmVjdCwgYWZNYWduaXR1ZGUsIGFpQXJlYSwgYWlEdXJhdGlvbiwgYWZDb3N0LCBhc0NvbmRpdGlvbkxpc3QpIHtcclxuICAgIGlmIChhZkNvc3QgPT09IHZvaWQgMCkgeyBhZkNvc3QgPSAwLjA7IH1cclxuICAgIHJldHVybiBzbi5BZGRNYWdpY0VmZmVjdFRvUG90aW9uKGFrUG90aW9uLCBha01hZ2ljRWZmZWN0LCBhZk1hZ25pdHVkZSwgYWlBcmVhLCBhaUR1cmF0aW9uLCBhZkNvc3QsIGFzQ29uZGl0aW9uTGlzdCk7XHJcbn07XHJcbi8vQWRkcyBlZmZlY3RpdGVtIGZyb20gUG90aW9uIHRvIHRhcmdldCBQb3Rpb24sIGF0IGdpdmVuIGluZGV4LiBTYW1lIGFzIGFib3ZlIGZ1bmN0aW9uLCBidXQgbGVzcyB2ZXJib3NlLCBhbmQgcHJlc2VydmVzIGFsbCBjb25kaXRpb25zLiBPcHRpb25hbCBjb3N0IGFyZ3VtZW50LlxyXG5leHBvcnQgdmFyIEFkZEVmZmVjdEl0ZW1Ub1BvdGlvbiA9IGZ1bmN0aW9uIChha1BvdGlvbiwgYWtQb3Rpb25Ub0NvcHlGcm9tLCBhaUluZGV4LCBhZkNvc3QpIHtcclxuICAgIGlmIChhZkNvc3QgPT09IHZvaWQgMCkgeyBhZkNvc3QgPSAtMS4wOyB9XHJcbiAgICByZXR1cm4gc24uQWRkRWZmZWN0SXRlbVRvUG90aW9uKGFrUG90aW9uLCBha1BvdGlvblRvQ29weUZyb20sIGFpSW5kZXgsIGFmQ29zdCk7XHJcbn07XHJcbi8vUmVtb3ZlcyBtYWdpYyBlZmZlY3QgZnJvbSBQb3Rpb24gdGhhdCBtYXRjaGVzIG1hZ25pdHVkZS9hcmVhL2R1cmF0aW9uL2Nvc3QuXHJcbmV4cG9ydCB2YXIgUmVtb3ZlTWFnaWNFZmZlY3RGcm9tUG90aW9uID0gZnVuY3Rpb24gKGFrUG90aW9uLCBha01hZ2ljRWZmZWN0LCBhZk1hZ25pdHVkZSwgYWlBcmVhLCBhaUR1cmF0aW9uLCBhZkNvc3QpIHtcclxuICAgIGlmIChhZkNvc3QgPT09IHZvaWQgMCkgeyBhZkNvc3QgPSAwLjA7IH1cclxuICAgIHJldHVybiBzbi5SZW1vdmVNYWdpY0VmZmVjdEZyb21Qb3Rpb24oYWtQb3Rpb24sIGFrTWFnaWNFZmZlY3QsIGFmTWFnbml0dWRlLCBhaUFyZWEsIGFpRHVyYXRpb24sIGFmQ29zdCk7XHJcbn07XHJcbi8vUmVtb3ZlcyBlZmZlY3RpdGVtIGZyb20gUG90aW9uIHRoYXQgbWF0Y2hlcyBQb3Rpb24gYXQgaW5kZXguXHJcbmV4cG9ydCB2YXIgUmVtb3ZlRWZmZWN0SXRlbUZyb21Qb3Rpb24gPSBmdW5jdGlvbiAoYWtQb3Rpb24sIGFrUG90aW9uVG9NYXRjaEZyb20sIGFpSW5kZXgpIHtcclxuICAgIHJldHVybiBzbi5SZW1vdmVFZmZlY3RJdGVtRnJvbVBvdGlvbihha1BvdGlvbiwgYWtQb3Rpb25Ub01hdGNoRnJvbSwgYWlJbmRleCk7XHJcbn07XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vL1BST0pFQ1RJTEVTXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLy0tLS0tLS0tXHJcbi8vR0VUVEVSU1xyXG4vLy0tLS0tLS0tXHJcbi8vR2V0cyBwcm9qZWN0aWxlIGdyYXZpdHkgKHVzdWFsbHkgMC4wIGZvciBub24gYXJyb3cgcHJvamVjdGlsZXMpLlxyXG5leHBvcnQgdmFyIEdldFByb2plY3RpbGVHcmF2aXR5ID0gZnVuY3Rpb24gKGFrUHJvamVjdGlsZSkgeyByZXR1cm4gc24uR2V0UHJvamVjdGlsZUdyYXZpdHkoYWtQcm9qZWN0aWxlKTsgfTtcclxuLy9HZXRzIHByb2plY3RpbGUgaW1wYWN0IGZvcmNlLlxyXG5leHBvcnQgdmFyIEdldFByb2plY3RpbGVJbXBhY3RGb3JjZSA9IGZ1bmN0aW9uIChha1Byb2plY3RpbGUpIHsgcmV0dXJuIHNuLkdldFByb2plY3RpbGVJbXBhY3RGb3JjZShha1Byb2plY3RpbGUpOyB9O1xyXG4vL0dldHMgcHJvamVjdGlsZSByYW5nZS5cclxuZXhwb3J0IHZhciBHZXRQcm9qZWN0aWxlUmFuZ2UgPSBmdW5jdGlvbiAoYWtQcm9qZWN0aWxlKSB7IHJldHVybiBzbi5HZXRQcm9qZWN0aWxlUmFuZ2UoYWtQcm9qZWN0aWxlKTsgfTtcclxuLy9HZXRzIHByb2plY3RpbGUgc3BlZWQuXHJcbmV4cG9ydCB2YXIgR2V0UHJvamVjdGlsZVNwZWVkID0gZnVuY3Rpb24gKGFrUHJvamVjdGlsZSkgeyByZXR1cm4gc24uR2V0UHJvamVjdGlsZVNwZWVkKGFrUHJvamVjdGlsZSk7IH07XHJcbi8qKiBQUk9KRUNUSUxFIFRZUEVTXHJcbiAgICAgICAgTWlzc2lsZSA9IDFcclxuICAgICAgICBMb2JiZXIgPSAyXHJcbiAgICAgICAgQmVhbSA9IDNcclxuICAgICAgICBGbGFtZSA9IDRcclxuICAgICAgICBDb25lID0gNVxyXG4gICAgICAgIEJhcnJpZXIgPSA2XHJcbiAgICAgICAgQXJyb3cgPSA3ICovXHJcbi8vR2V0IHByb2plY3RpbGUgdHlwZS4gMCBpZiBwcm9qZWN0aWxlIGlzIE5vbmUuXHJcbmV4cG9ydCB2YXIgR2V0UHJvamVjdGlsZVR5cGUgPSBmdW5jdGlvbiAoYWtQcm9qZWN0aWxlKSB7IHJldHVybiBzbi5HZXRQcm9qZWN0aWxlVHlwZShha1Byb2plY3RpbGUpOyB9O1xyXG4vLy0tLS0tLS1cclxuLy9TRVRURVJTXHJcbi8vLS0tLS0tLVxyXG4vL1NldHMgcHJvamVjdGlsZSBncmF2aXR5LlxyXG5leHBvcnQgdmFyIFNldFByb2plY3RpbGVHcmF2aXR5ID0gZnVuY3Rpb24gKGFrUHJvamVjdGlsZSwgYWZHcmF2aXR5KSB7IHJldHVybiBzbi5TZXRQcm9qZWN0aWxlR3Jhdml0eShha1Byb2plY3RpbGUsIGFmR3Jhdml0eSk7IH07XHJcbi8vU2V0cyBwcm9qZWN0aWxlIGltcGFjdCBmb3JjZS5cclxuZXhwb3J0IHZhciBTZXRQcm9qZWN0aWxlSW1wYWN0Rm9yY2UgPSBmdW5jdGlvbiAoYWtQcm9qZWN0aWxlLCBhZkltcGFjdEZvcmNlKSB7IHJldHVybiBzbi5TZXRQcm9qZWN0aWxlSW1wYWN0Rm9yY2UoYWtQcm9qZWN0aWxlLCBhZkltcGFjdEZvcmNlKTsgfTtcclxuLy9TZXRzIHByb2plY3RpbGUgcmFuZ2UuXHJcbmV4cG9ydCB2YXIgU2V0UHJvamVjdGlsZVJhbmdlID0gZnVuY3Rpb24gKGFrUHJvamVjdGlsZSwgYWZSYW5nZSkgeyByZXR1cm4gc24uU2V0UHJvamVjdGlsZVJhbmdlKGFrUHJvamVjdGlsZSwgYWZSYW5nZSk7IH07XHJcbi8vU2V0cyBwcm9qZWN0aWxlIHNwZWVkLlxyXG5leHBvcnQgdmFyIFNldFByb2plY3RpbGVTcGVlZCA9IGZ1bmN0aW9uIChha1Byb2plY3RpbGUsIGFmU3BlZWQpIHsgcmV0dXJuIHNuLlNldFByb2plY3RpbGVTcGVlZChha1Byb2plY3RpbGUsIGFmU3BlZWQpOyB9O1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vU0NST0xMIC0gc2VlIFNQRUxMXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuZXhwb3J0IHZhciBBZGRNYWdpY0VmZmVjdFRvU2Nyb2xsID0gZnVuY3Rpb24gKGFrU2Nyb2xsLCBha01hZ2ljRWZmZWN0LCBhZk1hZ25pdHVkZSwgYWlBcmVhLCBhaUR1cmF0aW9uLCBhZkNvc3QsIGFzQ29uZGl0aW9uTGlzdCkge1xyXG4gICAgaWYgKGFmQ29zdCA9PT0gdm9pZCAwKSB7IGFmQ29zdCA9IDAuMDsgfVxyXG4gICAgcmV0dXJuIHNuLkFkZE1hZ2ljRWZmZWN0VG9TY3JvbGwoYWtTY3JvbGwsIGFrTWFnaWNFZmZlY3QsIGFmTWFnbml0dWRlLCBhaUFyZWEsIGFpRHVyYXRpb24sIGFmQ29zdCwgYXNDb25kaXRpb25MaXN0KTtcclxufTtcclxuLy9BZGRzIGVmZmVjdGl0ZW0gZnJvbSBTY3JvbGwgdG8gdGFyZ2V0IFNjcm9sbCwgYXQgZ2l2ZW4gaW5kZXguIFNhbWUgYXMgYWJvdmUgZnVuY3Rpb24sIGJ1dCBsZXNzIHZlcmJvc2UsIGFuZCBwcmVzZXJ2ZXMgYWxsIGNvbmRpdGlvbnMuIE9wdGlvbmFsIGNvc3QgYXJndW1lbnQuXHJcbmV4cG9ydCB2YXIgQWRkRWZmZWN0SXRlbVRvU2Nyb2xsID0gZnVuY3Rpb24gKGFrU2Nyb2xsLCBha1Njcm9sbFRvQ29weUZyb20sIGFpSW5kZXgsIGFmQ29zdCkge1xyXG4gICAgaWYgKGFmQ29zdCA9PT0gdm9pZCAwKSB7IGFmQ29zdCA9IC0xLjA7IH1cclxuICAgIHJldHVybiBzbi5BZGRFZmZlY3RJdGVtVG9TY3JvbGwoYWtTY3JvbGwsIGFrU2Nyb2xsVG9Db3B5RnJvbSwgYWlJbmRleCwgYWZDb3N0KTtcclxufTtcclxuLy9SZW1vdmVzIG1hZ2ljIGVmZmVjdCBmcm9tIFNjcm9sbCB0aGF0IG1hdGNoZXMgbWFnbml0dWRlL2FyZWEvZHVyYXRpb24vY29zdC5cclxuZXhwb3J0IHZhciBSZW1vdmVNYWdpY0VmZmVjdEZyb21TY3JvbGwgPSBmdW5jdGlvbiAoYWtTY3JvbGwsIGFrTWFnaWNFZmZlY3QsIGFmTWFnbml0dWRlLCBhaUFyZWEsIGFpRHVyYXRpb24sIGFmQ29zdCkge1xyXG4gICAgaWYgKGFmQ29zdCA9PT0gdm9pZCAwKSB7IGFmQ29zdCA9IDAuMDsgfVxyXG4gICAgcmV0dXJuIHNuLlJlbW92ZU1hZ2ljRWZmZWN0RnJvbVNjcm9sbChha1Njcm9sbCwgYWtNYWdpY0VmZmVjdCwgYWZNYWduaXR1ZGUsIGFpQXJlYSwgYWlEdXJhdGlvbiwgYWZDb3N0KTtcclxufTtcclxuLy9SZW1vdmVzIGVmZmVjdGl0ZW0gZnJvbSBTY3JvbGwgdGhhdCBtYXRjaGVzIFNjcm9sbCBhdCBpbmRleC5cclxuZXhwb3J0IHZhciBSZW1vdmVFZmZlY3RJdGVtRnJvbVNjcm9sbCA9IGZ1bmN0aW9uIChha1Njcm9sbCwgYWtTY3JvbGxUb01hdGNoRnJvbSwgYWlJbmRleCkge1xyXG4gICAgcmV0dXJuIHNuLlJlbW92ZUVmZmVjdEl0ZW1Gcm9tU2Nyb2xsKGFrU2Nyb2xsLCBha1Njcm9sbFRvTWF0Y2hGcm9tLCBhaUluZGV4KTtcclxufTtcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vL1NPVU5EXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy9TZXRzIHNvdW5kIGRlc2NyaXB0b3IgYXR0YWNoZWQgdG8gdGhlIHNvdW5kLlxyXG5leHBvcnQgdmFyIFNldFNvdW5kRGVzY3JpcHRvciA9IGZ1bmN0aW9uIChha1NvdW5kLCBha1NvdW5kRGVzY3JpcHRvcikgeyByZXR1cm4gc24uU2V0U291bmREZXNjcmlwdG9yKGFrU291bmQsIGFrU291bmREZXNjcmlwdG9yKTsgfTtcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vL1NQRUxMXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8tLS0tLS0tLVxyXG4vL0dFVFRFUlNcclxuLy8tLS0tLS0tLVxyXG4vKiogU1BFTEwgVFlQRVNcclxuICAgICAgICBTcGVsbCA9IDBcclxuICAgICAgICBEaXNlYXNlID0gMVxyXG4gICAgICAgIFBvd2VyID0gMlxyXG4gICAgICAgIExlc3NlclBvd2VyID0gM1xyXG4gICAgICAgIEFiaWxpdHkgPSA0XHJcbiAgICAgICAgUG9pc29uID0gNVxyXG4gICAgICAgIEFkZGl0aW9uID0gNlxyXG4gICAgICAgIFZvaWNlID0gNyAqL1xyXG4vL1JldHVybnMgc3BlbGwgdHlwZS4gLTEgaWYgc3BlbGwgaXMgTm9uZVxyXG5leHBvcnQgdmFyIEdldFNwZWxsVHlwZSA9IGZ1bmN0aW9uIChha1NwZWxsKSB7XHJcbiAgICByZXR1cm4gc24uR2V0U3BlbGxUeXBlKGFrU3BlbGwpO1xyXG59O1xyXG4vLy0tLS0tLS0tXHJcbi8vU0VUVEVSU1xyXG4vLy0tLS0tLS0tXHJcbi8vQ29uZGl0aW9uSXRlbU9iamVjdCB8IEZ1bmN0aW9uIElEIHwgcGFyYW1ldGVyIDEgfCBwYXJhbWV0ZXIgMiB8IE9QQ29kZSB8IGZsb2F0IHwgQU5ET1JcclxuLy9jb25kaXRpb25zIHdoaWNoIGhhdmUgbm8gcGFyYW1ldGVycyAoZWcuIElzU25lYWtpbmcpIC8gdGFrZSBpbiBmb3JtcyAoR2V0SXNSYWNlKSB3b3JrXHJcbi8vY29uZGl0aW9ucyB3aGljaCBhY2NlcHQgaW50L2Zsb2F0L3N0cmluZ3MgYXJlIHNraXBwZWRcclxuLy9TdWJqZWN0XHR8IEhhc01hZ2ljRWZmZWN0S2V5d29yZFx0fCBNYWdpY0ludmlzaWJpbGl0eVx0XHR8IE5PTkUgfCA9PSB8IDAuMCB8IEFORCAtIGluIGdhbWVcclxuLy9TdWJqZWN0IFx0fCBIYXNNYWdpY0VmZmVjdEtleXdvcmRcdHwgMDAwMUVBNkYgfiBTa3lyaW0uZXNtIHwgTk9ORSB8ID09IHwgMC4wIHwgQU5EXHQtIGluIHBhcHlydXNcclxuZXhwb3J0IHZhciBBZGRNYWdpY0VmZmVjdFRvU3BlbGwgPSBmdW5jdGlvbiAoYWtTcGVsbCwgYWtNYWdpY0VmZmVjdCwgYWZNYWduaXR1ZGUsIGFpQXJlYSwgYWlEdXJhdGlvbiwgYWZDb3N0LCBhc0NvbmRpdGlvbkxpc3QpIHtcclxuICAgIGlmIChhZkNvc3QgPT09IHZvaWQgMCkgeyBhZkNvc3QgPSAwLjA7IH1cclxuICAgIHJldHVybiBzbi5BZGRNYWdpY0VmZmVjdFRvU3BlbGwoYWtTcGVsbCwgYWtNYWdpY0VmZmVjdCwgYWZNYWduaXR1ZGUsIGFpQXJlYSwgYWlEdXJhdGlvbiwgYWZDb3N0LCBhc0NvbmRpdGlvbkxpc3QpO1xyXG59O1xyXG4vL0FkZHMgZWZmZWN0aXRlbSBmcm9tIHNwZWxsIHRvIHRhcmdldCBzcGVsbCwgYXQgZ2l2ZW4gaW5kZXguIFNhbWUgYXMgYWJvdmUgZnVuY3Rpb24sIGJ1dCBsZXNzIHZlcmJvc2UsIGFuZCBwcmVzZXJ2ZXMgYWxsIGNvbmRpdGlvbnMuXHJcbmV4cG9ydCB2YXIgQWRkRWZmZWN0SXRlbVRvU3BlbGwgPSBmdW5jdGlvbiAoYWtTcGVsbCwgYWtTcGVsbFRvQ29weUZyb20sIGFpSW5kZXgsIGFmQ29zdCkge1xyXG4gICAgaWYgKGFmQ29zdCA9PT0gdm9pZCAwKSB7IGFmQ29zdCA9IC0xLjA7IH1cclxuICAgIHJldHVybiBzbi5BZGRFZmZlY3RJdGVtVG9TcGVsbChha1NwZWxsLCBha1NwZWxsVG9Db3B5RnJvbSwgYWlJbmRleCwgYWZDb3N0KTtcclxufTtcclxuLy9SZW1vdmVzIG1hZ2ljIGVmZmVjdCBmcm9tIHNwZWxsIHRoYXQgbWF0Y2hlcyBtYWduaXR1ZGUvYXJlYS9kdXJhdGlvbi9jb3N0LlxyXG5leHBvcnQgdmFyIFJlbW92ZU1hZ2ljRWZmZWN0RnJvbVNwZWxsID0gZnVuY3Rpb24gKGFrU3BlbGwsIGFrTWFnaWNFZmZlY3QsIGFmTWFnbml0dWRlLCBhaUFyZWEsIGFpRHVyYXRpb24sIGFmQ29zdCkge1xyXG4gICAgaWYgKGFmQ29zdCA9PT0gdm9pZCAwKSB7IGFmQ29zdCA9IDAuMDsgfVxyXG4gICAgcmV0dXJuIHNuLlJlbW92ZU1hZ2ljRWZmZWN0RnJvbVNwZWxsKGFrU3BlbGwsIGFrTWFnaWNFZmZlY3QsIGFmTWFnbml0dWRlLCBhaUFyZWEsIGFpRHVyYXRpb24sIGFmQ29zdCk7XHJcbn07XHJcbi8vUmVtb3ZlcyBlZmZlY3RpdGVtIGZyb20gc3BlbGwgdGhhdCBtYXRjaGVzIHNwZWxsIGF0IGluZGV4LlxyXG5leHBvcnQgdmFyIFJlbW92ZUVmZmVjdEl0ZW1Gcm9tU3BlbGwgPSBmdW5jdGlvbiAoYWtTcGVsbCwgYWtTcGVsbFRvTWF0Y2hGcm9tLCBhaUluZGV4KSB7IHJldHVybiBzbi5SZW1vdmVFZmZlY3RJdGVtRnJvbVNwZWxsKGFrU3BlbGwsIGFrU3BlbGxUb01hdGNoRnJvbSwgYWlJbmRleCk7IH07XHJcbi8vU2V0cyBjYXN0aW5nIHR5cGUgb2Ygc3BlbGwgKGFuZCBhbGwgYXR0YWNoZWQgbWFnaWMgZWZmZWN0cylcclxuZXhwb3J0IHZhciBTZXRTcGVsbENhc3RpbmdUeXBlID0gZnVuY3Rpb24gKGFrU3BlbGwsIGFpVHlwZSkgeyByZXR1cm4gc24uU2V0U3BlbGxDYXN0aW5nVHlwZShha1NwZWxsLCBhaVR5cGUpOyB9O1xyXG4vL1NldHMgZGVsaXZlcnkgdHlwZSBvZiBzcGVsbCAoYW5kIGFsbCBhdHRhY2hlZCBtYWdpYyBlZmZlY3RzKVxyXG5leHBvcnQgdmFyIFNldFNwZWxsRGVsaXZlcnlUeXBlID0gZnVuY3Rpb24gKGFrU3BlbGwsIGFpVHlwZSkgeyByZXR1cm4gc24uU2V0U3BlbGxEZWxpdmVyeVR5cGUoYWtTcGVsbCwgYWlUeXBlKTsgfTtcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vU1RSSU5HU1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy9Db252ZXJ0cyBzdHJpbmcgdG8gaGV4IHZhbHVlIGlmIHZhbGlkXHJcbmV4cG9ydCB2YXIgSW50VG9TdHJpbmcgPSBmdW5jdGlvbiAoYWlWYWx1ZSwgYWJIZXgpIHtcclxuICAgIHJldHVybiBzbi5JbnRUb1N0cmluZyhhaVZhbHVlLCBhYkhleCk7XHJcbn07XHJcbi8vQ29udmVydHMgc3RyaW5nIHRvIGludC4gUmV0dXJucyAtMSBmb3Igb3V0IG9mIGJvdW5kIHZhbHVlcy5cclxuZXhwb3J0IHZhciBTdHJpbmdUb0ludCA9IGZ1bmN0aW9uIChhc1N0cmluZykge1xyXG4gICAgcmV0dXJuIHNuLlN0cmluZ1RvSW50KGFzU3RyaW5nKTtcclxufTtcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vVUlcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vR2V0cyB0aGUgb2JqZWN0cmVmZXJlbmNlIG9mIHRoZSBjdXJyZW50bHkgb3BlbmVkIGNvbnRhaW5lciBpbiBjb250YWluZXIgbWVudVxyXG5leHBvcnQgdmFyIEdldE1lbnVDb250YWluZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gc24uR2V0TWVudUNvbnRhaW5lcigpO1xyXG59O1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy9VVElMSVRZXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vL0NhbGN1bGF0ZXMgYSByYW5kb20gZmxvYXQgYmV0d2VlbiBhZk1pbiBhbmQgYWZNYXgsIGJhc2VkIG9uIE1lcnNlbm5lIFR3aXN0ZXJcclxuZXhwb3J0IHZhciBHZW5lcmF0ZVJhbmRvbUZsb2F0ID0gZnVuY3Rpb24gKGFmTWluLCBhZk1heCkge1xyXG4gICAgcmV0dXJuIHNuLkdlbmVyYXRlUmFuZG9tRmxvYXQoYWZNaW4sIGFmTWF4KTtcclxufTtcclxuLy9DYWxjdWxhdGVzIGEgcmFuZG9tIGludGVnZXIgYmV0d2VlbiBhZk1pbiBhbmQgYWZNYXgsIGJhc2VkIG9uIE1lcnNlbm5lIFR3aXN0ZXJcclxuZXhwb3J0IHZhciBHZW5lcmF0ZVJhbmRvbUludCA9IGZ1bmN0aW9uIChhZk1pbiwgYWZNYXgpIHtcclxuICAgIHJldHVybiBzbi5HZW5lcmF0ZVJhbmRvbUludChhZk1pbiwgYWZNYXgpO1xyXG59O1xyXG4vL0dldHMgc3lzdGVtIHRpbWUgYW5kIGRhdGVcclxuLy9ZZWFyICgxNjAxIC0gMzA4MjcpXHJcbi8vTW9udGggKDEtMTIpXHJcbi8vRGF5T2ZXZWVrICgxOlN1bmRheSAtIDc6U2F0dXJkYXkpXHJcbi8vRGF5ICgxLTMxKVxyXG4vL0hvdXIgKDAtMjMpXHJcbi8vTWludXRlICgwLTU5KVxyXG4vL1NlY29uZCAoMC01OSlcclxuLy9NaWxsaXNlY29uZCAoMC05OTkpXHJcbmV4cG9ydCB2YXIgR2V0U3lzdGVtVGltZSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNuLkdldFN5c3RlbVRpbWUoKTsgfTtcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vL1ZJU1VBTEVGRkVDVFNcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vLS0tLS0tLS1cclxuLy9HRVRURVJTXHJcbi8vLS0tLS0tLS1cclxuLy9HZXRzIHRoZSBhcnQgb2JqZWN0IGFzc29jaWF0ZWQgd2l0aCB0aGUgdmlzdWFsIGVmZmVjdC5cclxuZXhwb3J0IHZhciBHZXRBcnRPYmplY3QgPSBmdW5jdGlvbiAoYWtFZmZlY3QpIHsgcmV0dXJuIHNuLkdldEFydE9iamVjdChha0VmZmVjdCk7IH07XHJcbi8vUmV0dXJucyB0aGUgdG90YWwgbnVtYmVyIG9mIGFydCBvYmplY3RzIHByZXNlbnQvYWN0aXZlIChvbiBvYmplY3RzKSB3aXRoaW4gdGhlIGxvYWRlZCBhcmVhLlxyXG5leHBvcnQgdmFyIEdldEFydE9iamVjdFRvdGFsQ291bnQgPSBmdW5jdGlvbiAoYWtFZmZlY3QsIGFiQWN0aXZlKSB7IHJldHVybiBzbi5HZXRBcnRPYmplY3RUb3RhbENvdW50KGFrRWZmZWN0LCBhYkFjdGl2ZSk7IH07XHJcbi8vLS0tLS0tLS1cclxuLy9TRVRURVJTXHJcbi8vLS0tLS0tLS1cclxuLy9TZXRzIHRoZSBhcnQgb2JqZWN0IGFzc29jaWF0ZWQgd2l0aCB0aGUgdmlzdWFsIGVmZmVjdC5cclxuZXhwb3J0IHZhciBTZXRBcnRPYmplY3QgPSBmdW5jdGlvbiAoYWtFZmZlY3QsIGFrQXJ0KSB7IHJldHVybiBzbi5TZXRBcnRPYmplY3QoYWtFZmZlY3QsIGFrQXJ0KTsgfTtcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vL1dFQVRIRVJcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vR2V0cyB3aW5kIHNwZWVkIGFzIHNob3duIGFzIGluIENLIGNvbmRpdGlvbnMgKDAuMC0xLjApLlxyXG5leHBvcnQgdmFyIEdldFdpbmRTcGVlZEFzRmxvYXQgPSBmdW5jdGlvbiAoYWtXZWF0aGVyKSB7IHJldHVybiBzbi5HZXRXaW5kU3BlZWRBc0Zsb2F0KGFrV2VhdGhlcik7IH07XHJcbi8vR2V0cyB3aW5kIHNwZWVkIGFzIHNob3duIGluIHRoZSB3ZWF0aGVyIGZvcm0gKDAtMjU1KS5cclxuZXhwb3J0IHZhciBHZXRXaW5kU3BlZWRBc0ludCA9IGZ1bmN0aW9uIChha1dlYXRoZXIpIHsgcmV0dXJuIHNuLkdldFdpbmRTcGVlZEFzSW50KGFrV2VhdGhlcik7IH07XHJcbi8qKiBXRUFUSEVSIFRZUEVTXHJcbiAgICAgICAgUGxlYXNhbnQgPSAwXHJcbiAgICAgICAgQ2xvdWR5ID0gMVxyXG4gICAgICAgIFJhaW55ID0gMlxyXG4gICAgICAgIFNub3cgPSAzICovXHJcbi8vR2V0cyB3ZWF0aGVyL2N1cnJlbnQgd2VhdGhlciB0eXBlIGlmIGFrV2VhdGhlciBpcyBOb25lXHJcbmV4cG9ydCB2YXIgR2V0V2VhdGhlclR5cGUgPSBmdW5jdGlvbiAoYWtXZWF0aGVyKSB7XHJcbiAgICBpZiAoYWtXZWF0aGVyID09PSB2b2lkIDApIHsgYWtXZWF0aGVyID0gbnVsbDsgfVxyXG4gICAgcmV0dXJuIHNuLkdldFdlYXRoZXJUeXBlKGFrV2VhdGhlcik7XHJcbn07XHJcbiIsImltcG9ydCB7IEdhbWUsIERlYnVnLCBVaSwgd3JpdGVMb2dzIH0gZnJvbSBcIkBza3lyaW0tcGxhdGZvcm0vc2t5cmltLXBsYXRmb3JtXCI7XHJcbmltcG9ydCB7IEdldEFjdG9yVmFsdWVNb2RpZmllciwgSW50VG9TdHJpbmcgfSBmcm9tIFwiQHNreXJpbS1wbGF0Zm9ybS9wbzMtcGFweXJ1cy1leHRlbmRlci9QTzNfU0tTRUZ1bmN0aW9uc1wiO1xyXG5leHBvcnQgZnVuY3Rpb24gRm9ybVRvU3RyaW5nKGFrRm9ybSkge1xyXG4gICAgdmFyIGZvcm1pZCA9IGFrRm9ybS5nZXRGb3JtSUQoKTtcclxuICAgIHZhciBmb3Jtc3RyaW5nID0gSW50VG9TdHJpbmcoZm9ybWlkLCB0cnVlKTtcclxuICAgIHJldHVybiBmb3Jtc3RyaW5nO1xyXG59XHJcbjtcclxuZXhwb3J0IGZ1bmN0aW9uIHBsKCkge1xyXG4gICAgcmV0dXJuIEdhbWUuZ2V0UGxheWVyKCk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHRyYWNlTG9nKGZ1bmN0aW9uTmFtZSwgbXNnLCBzdGFja0luZGVudCkge1xyXG4gICAgaWYgKG1zZyA9PT0gdm9pZCAwKSB7IG1zZyA9IFwiXCI7IH1cclxuICAgIGlmIChzdGFja0luZGVudCA9PT0gdm9pZCAwKSB7IHN0YWNrSW5kZW50ID0gMDsgfVxyXG4gICAgdmFyIHNCYXNlSW5kZW50ID0gXCJcIjtcclxuICAgIHdoaWxlIChzdGFja0luZGVudCA+IDApIHtcclxuICAgICAgICBzQmFzZUluZGVudCA9IHNCYXNlSW5kZW50ICsgXCIgIFwiO1xyXG4gICAgICAgIHN0YWNrSW5kZW50LS07XHJcbiAgICB9XHJcbiAgICB2YXIgcmVzdWx0ID0gc0Jhc2VJbmRlbnQgKyBcIkxvcmljYV9SZWRvbmVcIiArIFwiOjpcIiArIGZ1bmN0aW9uTmFtZTtcclxuICAgIGlmIChtc2cgIT0gXCJcIikge1xyXG4gICAgICAgIHJlc3VsdCA9IHJlc3VsdCArIFwiIC0+IFwiO1xyXG4gICAgfVxyXG4gICAgRGVidWcudHJhY2UocmVzdWx0ICsgbXNnLCAwKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gbG9nKG1lc3NhZ2UpIHtcclxuICAgIHZhciB0ID0gbmV3IERhdGUoKS50b0xvY2FsZVN0cmluZygpO1xyXG4gICAgdmFyIG1zZyA9IHQgKyAnIDo6ICcgKyBtZXNzYWdlO1xyXG4gICAgd3JpdGVMb2dzKFwiTG9yaWNhUmVkb25lXCIsIG1zZyk7XHJcbn1cclxuZXhwb3J0IHZhciBzdUtleXM7XHJcbihmdW5jdGlvbiAoc3VLZXlzKSB7XHJcbiAgICBzdUtleXNbXCJtYWluXCJdID0gXCJMb3JpY2FSZWRvbmVcIjtcclxuICAgIHN1S2V5c1tcImlDb3N0TGlzdFwiXSA9IFwiSW5kaXZpZHVhbCBVcGtlZXAgQ29zdCBvZiBhbGwgTWFpbnRhaW5lZCBTcGVsbHNcIjtcclxuICAgIHN1S2V5c1tcImZvcm1VcGtlZXBMaXN0XCJdID0gXCJVcGtlZXAgU3BlbGxzXCI7XHJcbiAgICBzdUtleXNbXCJmb3JtQmxhY2tMaXN0XCJdID0gXCJTcGVsbHMgQmxhY2tsaXN0ZWQgZnJvbSBMb3JpY2FcIjtcclxuICAgIHN1S2V5c1tcImZvcm1BcHBsaWVkTGlzdFwiXSA9IFwiU3BlbGxzIEN1cnJlbnRseSBBcHBsaWVkXCI7XHJcbiAgICBzdUtleXNbXCJpQ3VtVG90YWxcIl0gPSBcIlRvdGFsIEN1bXVsYXRpdmUgUGVuYWx0eVwiO1xyXG4gICAgc3VLZXlzW1wiZkN1bUZyYWN0aW9uXCJdID0gXCJOdW1iZXIgdG8gbXVsdCBtYWduaXR1ZGUgYnlcIjtcclxuICAgIHN1S2V5c1tcImlVcGtlZXBUb3RhbFwiXSA9IFwiVG90YWwgRGVidWZmc1wiO1xyXG4gICAgc3VLZXlzW1wiYlN1c3RhaW5lZE1hZ2ljXCJdID0gXCJTdXN0YWluZWQgTWFnaWMgTW9kZSBUb2dnbGVcIjtcclxuICAgIHN1S2V5c1tcImZvcm1FeGNsdXNpb25MaXN0XCJdID0gXCJTcGVsbHMgdG8gZXhjbHVkZSBmcm9tIGZpcnN0IGRpc3BlbFwiO1xyXG4gICAgc3VLZXlzW1wiZlVwa2VlcE11bHRcIl0gPSBcIlNwZWxsIERlYnVmZiBDb3N0IE11bHRpcGxpZXJcIjtcclxuICAgIHN1S2V5c1tcImJEdWFsQ2FzdFwiXSA9IFwiRHVhbCBDYXN0IEZsYWdcIjtcclxuICAgIHN1S2V5c1tcImZSaXR1YWxNdWx0XCJdID0gXCJSaXR1YWwgU3BlbGwgRGVidWZmIENvc3QgTXVsdGlwbGllclwiO1xyXG4gICAgc3VLZXlzW1wiZkNvc3RNdWx0XCJdID0gXCJTcGVsbCBEZWJ1ZmYgQ29zdCBNdWx0aXBsaWVyXCI7XHJcbiAgICBzdUtleXNbXCJpRGVidWZmTWluXCJdID0gXCJNaW5pbXVtIERlYnVmZiBDb3N0XCI7XHJcbiAgICBzdUtleXNbXCJiQ29tcGF0SW5pdGlhbGl6ZWRcIl0gPSBcIllNLkxvcmljYS5Db21wYXQuSW5pdFwiO1xyXG4gICAgc3VLZXlzW1wiaUNvbXBhdEFsbFNwZWxsc1wiXSA9IFwiWU0uTG9yaWNhLkNvbXBhdC5BbGxTcGVsbHNcIjtcclxuICAgIHN1S2V5c1tcIk1DTV9FbnVtX1Vwa2VlcFwiXSA9IFwiWU0uTG9yaWNhLk1DTS5FbnVtLlVwa2VlcFwiO1xyXG4gICAgc3VLZXlzW1wiTUNNX0VudW1fQmxhY2tsaXN0XCJdID0gXCJZTS5Mb3JpY2EuTUNNLkVudW0uQmxhY2tsaXN0XCI7XHJcbiAgICBzdUtleXNbXCJNQ01fRW51bV9VdGlsaXR5XCJdID0gXCJZTS5Mb3JpY2EuTUNNLkVudW0uRXhjbHVzaW9uXCI7XHJcbiAgICBzdUtleXNbXCJpQ2hhcmdlTWF4RHVyYXRpb25cIl0gPSBcIllNLkxPUklDQS5DSEFSR0UuRFVSQVRJT04uTUFYXCI7XHJcbiAgICBzdUtleXNbXCJpQ2hhcmdlRHVyYXRpb25VcHBlckJvdW5kXCJdID0gXCJZTS5MT1JJQ0EuQ0hBUkdFLkRVUkFUSU9OLlVQUEVSQk9VTkRcIjtcclxuICAgIHN1S2V5c1tcImlDaGFyZ2VDb3N0U29sdXRpb25cIl0gPSBcIllNLkxPUklDQS5DSEFSR0UuRFVSQVRJT04uU09MVVRJT05cIjtcclxuICAgIHN1S2V5c1tcImlDaGFyZ2VDb3N0QXN5bXB0b3RlXCJdID0gXCJZTS5MT1JJQ0EuQ0hBUkdFLkRVUkFUSU9OLkFTWU1QVE9URVwiO1xyXG4gICAgc3VLZXlzW1wiYkNoYXJnaW5nRW5hYmxlXCJdID0gXCJZTS5MT1JJQ0EuQ0hBUkdFLkVOQUJMRVwiO1xyXG59KShzdUtleXMgfHwgKHN1S2V5cyA9IHt9KSk7XHJcbjtcclxuZXhwb3J0IHZhciBqdUtleXM7XHJcbihmdW5jdGlvbiAoanVLZXlzKSB7XHJcbiAgICBqdUtleXNbXCJwYXRoXCJdID0gXCIuLi9Mb3JpY2EgUmVkb25lL1NwZWxsTGlzdFwiO1xyXG59KShqdUtleXMgfHwgKGp1S2V5cyA9IHt9KSk7XHJcbjtcclxuaW1wb3J0IHsgR2V0SW50VmFsdWUgfSBmcm9tIFwiQHNreXJpbS1wbGF0Zm9ybS9wYXB5cnVzLXV0aWwvU3RvcmFnZVV0aWxcIjtcclxuZXhwb3J0IGZ1bmN0aW9uIFVJVXBkYXRlRGVidWZmTWV0ZXIoKSB7XHJcbiAgICB2YXIgZk1hbmFNYXhSZW1haW5pbmcgPSBwbCgpLmdldEJhc2VBY3RvclZhbHVlKFwibWFnaWNrYVwiKSArIEdldEFjdG9yVmFsdWVNb2RpZmllcihwbCgpLCAwLCBcIm1hZ2lja2FcIik7XHJcbiAgICB2YXIgZk1heCA9IGZNYW5hTWF4UmVtYWluaW5nICsgR2V0SW50VmFsdWUobnVsbCwgc3VLZXlzLmlVcGtlZXBUb3RhbCkgKyBHZXRJbnRWYWx1ZShudWxsLCBzdUtleXMuaUN1bVRvdGFsKTtcclxuICAgIHZhciBmUGVyY2VudCA9IDEwMCAtICgoZk1hbmFNYXhSZW1haW5pbmcgLyBmTWF4KSAqIDEwMCk7XHJcbiAgICBVaS5pbnZva2VGbG9hdChcIkhVRCBNZW51XCIsIFwiX3Jvb3QuSFVETW92aWVCYXNlSW5zdGFuY2UuU2V0RXhoYXVzdGlvblBlbmFsdHlNZXRlclwiLCBmUGVyY2VudCk7XHJcbn1cclxuO1xyXG4iLCJpbXBvcnQgeyBwcmludENvbnNvbGUsIEZvcm0sIEdhbWUsIFNwZWxsLCBEZWJ1Zywgb25jZSwgRm9ybUxpc3QsIEtleXdvcmQsIE1hZ2ljRWZmZWN0IH0gZnJvbSBcIkBza3lyaW0tcGxhdGZvcm0vc2t5cmltLXBsYXRmb3JtXCI7XHJcbmltcG9ydCB7IEFkZE1hZ2ljRWZmZWN0VG9TcGVsbCwgR2V0RWZmZWN0QXJjaGV0eXBlQXNJbnQsIEdldEFsbFNwZWxscywgUmVtb3ZlRWZmZWN0SXRlbUZyb21TcGVsbCB9IGZyb20gXCJAc2t5cmltLXBsYXRmb3JtL3BvMy1wYXB5cnVzLWV4dGVuZGVyL1BPM19TS1NFRnVuY3Rpb25zXCI7XHJcbmltcG9ydCB7IHBsLCBqdUtleXMsIHN1S2V5cywgRm9ybVRvU3RyaW5nIH0gZnJvbSBcIi4vWU1fTG9yaWNhX1NoYXJlZFwiO1xyXG5pbXBvcnQgeyBGb3JtTGlzdEFkZCwgRm9ybUxpc3RDb3VudCwgU2F2ZSwgRm9ybUxpc3RHZXQsIEZvcm1MaXN0UmVtb3ZlLCBGb3JtTGlzdEhhcywgRm9ybUxpc3RUb0FycmF5IGFzIFVwa2VlcEFycmF5LCBJbnRMaXN0QWRkIH0gZnJvbSBcIkBza3lyaW0tcGxhdGZvcm0vcGFweXJ1cy11dGlsL0pzb25VdGlsXCI7XHJcbmltcG9ydCB7IEdldEZsb2F0VmFsdWUsIEdldEludFZhbHVlLCBTZXRGbG9hdFZhbHVlLCBTZXRJbnRWYWx1ZSB9IGZyb20gXCJAc2t5cmltLXBsYXRmb3JtL3BhcHlydXMtdXRpbC9TdG9yYWdlVXRpbFwiO1xyXG4vLyB0aGlzIGlzIGJhc2ljYWxseSBvdXIgZGVmYXVsdCBpbml0IHN0dWZmXHJcbmV4cG9ydCB2YXIgbWFpbkNvbXBhdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tQ09NUEFUQUJJTElUWSBTRUNUSU9OLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgb25jZSgndXBkYXRlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIGlmICggR2V0SW50VmFsdWUobnVsbCwgc3VLZXlzLmJDb21wYXRJbml0aWFsaXplZCwgMCkgPT0gMCApIHtcclxuICAgICAgICB2YXIgZm9ybWxpc3RVcGtlZXAgPSBGb3JtTGlzdC5mcm9tKEdhbWUuZ2V0Rm9ybUZyb21GaWxlKDB4MUQ2MiwgXCJMb3JpY2EgUmVkb25lLmVzcFwiKSk7XHJcbiAgICAgICAgR2FtZS5zZXRHYW1lU2V0dGluZ0Zsb2F0KFwiZk1hZ2ljTGVzc2VyUG93ZXJDb29sZG93blRpbWVyXCIsIDAuMDEpOyAvLyBtYWtlIGxlc3NlciBwb3dlcnMgc3BhbW1hYmxlLCB0byBlbmFibGUgc3BhbW1pbmcgdGhlIGRpc3BlbCBwb3dlclxyXG4gICAgICAgIC8vIGlmICggIWZvcm1saXN0VXBrZWVwICkgeyByZXR1cm47IH07XHJcbiAgICAgICAgdmFyIGFsbHNwZWxscztcclxuICAgICAgICBhbGxzcGVsbHMgPSBHZXRBbGxTcGVsbHMobnVsbCwgdHJ1ZSk7IC8vIEdldEFsbFNwZWxscyhLZXl3b3JkW10gYWtLZXl3b3JkcyA9IE5vbmUsIGJvb2wgYWJJc1BsYXlhYmxlID0gZmFsc2UpXHJcbiAgICAgICAgU2V0SW50VmFsdWUobnVsbCwgc3VLZXlzLmlDb21wYXRBbGxTcGVsbHMsIGFsbHNwZWxscy5sZW5ndGgpO1xyXG4gICAgICAgIGZvcm1saXN0VXBrZWVwID09PSBudWxsIHx8IGZvcm1saXN0VXBrZWVwID09PSB2b2lkIDAgPyB2b2lkIDAgOiBmb3JtbGlzdFVwa2VlcC5yZXZlcnQoKTtcclxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLUFkZCBhbGwgYXBwcm9wcmlhdGUgc3BlbGxzIHRvIExvcmljYS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFsbHNwZWxscy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgZm9ybVNwZWxsID0gRm9ybS5mcm9tKGFsbHNwZWxsc1tpXSk7XHJcbiAgICAgICAgICAgIGlmICghRm9ybUxpc3RIYXMoanVLZXlzLnBhdGgsIHN1S2V5cy5mb3JtQmxhY2tMaXN0LCBmb3JtU3BlbGwpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNSaWdodFNwZWxsVHlwZShmb3JtU3BlbGwpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgSW50TGlzdEFkZChqdUtleXMucGF0aCwgc3VLZXlzLmZvcm1VcGtlZXBMaXN0LCBmb3JtU3BlbGwgPT09IG51bGwgfHwgZm9ybVNwZWxsID09PSB2b2lkIDAgPyB2b2lkIDAgOiBmb3JtU3BlbGwuZ2V0Rm9ybUlEKCksIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICBGb3JtTGlzdEFkZChqdUtleXMucGF0aCwgc3VLZXlzLmZvcm1VcGtlZXBMaXN0LCBmb3JtU3BlbGwsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBmb3JtbGlzdFVwa2VlcD8uYWRkRm9ybShmb3JtU3BlbGwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDtcclxuICAgICAgICB9XHJcbiAgICAgICAgO1xyXG4gICAgICAgIFNldEludFZhbHVlKG51bGwsIHN1S2V5cy5iQ2hhcmdpbmdFbmFibGUsIDEpO1xyXG4gICAgICAgIFNldEludFZhbHVlKG51bGwsIHN1S2V5cy5pQ2hhcmdlQ29zdEFzeW1wdG90ZSwgMTAwKTtcclxuICAgICAgICBTZXRJbnRWYWx1ZShudWxsLCBzdUtleXMuaUNoYXJnZUNvc3RTb2x1dGlvbiwgMjApO1xyXG4gICAgICAgIFNldEludFZhbHVlKG51bGwsIHN1S2V5cy5pQ2hhcmdlRHVyYXRpb25VcHBlckJvdW5kLCAxMCk7XHJcbiAgICAgICAgU2V0SW50VmFsdWUobnVsbCwgc3VLZXlzLmlDaGFyZ2VNYXhEdXJhdGlvbiwgMTApO1xyXG4gICAgICAgIFNhdmUoanVLZXlzLnBhdGgpO1xyXG4gICAgICAgIFVwZGF0ZUFsbFNwZWxscygpO1xyXG4gICAgICAgIC8vIENsZWFuVXAoKVxyXG4gICAgICAgIC8vIHByaW50Q29uc29sZShGb3JtTGlzdENvdW50KGp1S2V5cy5wYXRoLCBzdUtleXMuZm9ybVVwa2VlcExpc3QpKVxyXG4gICAgICAgIFNldEludFZhbHVlKG51bGwsIHN1S2V5cy5iQ29tcGF0SW5pdGlhbGl6ZWQsIDEpO1xyXG4gICAgICAgIHByaW50Q29uc29sZShcIkxvcmljYSBSZWRvbmUgc3RhcnRlZFwiKTtcclxuICAgICAgICAvLyB9O1xyXG4gICAgfSk7XHJcbn07XHJcbmV4cG9ydCBmdW5jdGlvbiBVcGRhdGVBbGxTcGVsbHMoKSB7IFNldENvc3RzKCdhbGwnKTsgQ2xlYW5VcCgpOyB9XHJcbmZ1bmN0aW9uIENsZWFuVXAoKSB7XHJcbiAgICB2YXIgYWxsc3BlbGxzID0gVXBrZWVwQXJyYXkoanVLZXlzLnBhdGgsIHN1S2V5cy5mb3JtVXBrZWVwTGlzdCk7XHJcbiAgICB2YXIgaXNJbkJsYWNrbGlzdCA9IGZ1bmN0aW9uIChzcGVsbCkgeyBpZiAoRm9ybUxpc3RIYXMoanVLZXlzLnBhdGgsIHN1S2V5cy5mb3JtQmxhY2tMaXN0LCBzcGVsbCkpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0gfTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYWxsc3BlbGxzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdmFyIGYgPSBhbGxzcGVsbHNbaV07XHJcbiAgICAgICAgaWYgKGlzSW5CbGFja2xpc3QoZikpIHtcclxuICAgICAgICAgICAgRm9ybUxpc3RSZW1vdmUoanVLZXlzLnBhdGgsIHN1S2V5cy5mb3JtVXBrZWVwTGlzdCwgZiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIFJlbW92ZURlc2NyaXB0aW9uKGYpO1xyXG4gICAgICAgIH1cclxuICAgICAgICA7XHJcbiAgICB9XHJcbn1cclxudmFyIGlzUmlnaHRTcGVsbFR5cGUgPSBmdW5jdGlvbiAoYWtGb3JtKSB7XHJcbiAgICAvKlxyXG4gICAgQm91bmRXZWFwb24gICAgPSAxN1xyXG4gICAgU3VtbW9uQ3JlYXR1cmUgPSAxOFxyXG4gICAgUmVhbmltYXRlICAgICAgPSAyMlxyXG5cclxuICAgIENhc3RpbmcgVHlwZXM6XHJcbiAgICBDb25zdGFudCA9IDBcclxuICAgIEZGID0gMVxyXG4gICAgQ29uYyA9IDJcclxuXHJcbiAgICBEZWxpdmVyeSBUeXBlOlxyXG4gICAgU2VsZiA9IDBcclxuICAgIENvbnRhY3QgPSAxXHJcbiAgICBBaW1lZCA9IDJcclxuICAgIFRhcmdldCBBY3RvciA9IDNcclxuICAgIFRhcmdldCBMb2NhdGlvbiA9IDRcclxuICAgICovXHJcbiAgICB2YXIgQXJjaGV0eXBlID0gZnVuY3Rpb24gKGFrRm9ybSkgeyB2YXIgRSA9IFNwZWxsLmZyb20oYWtGb3JtKS5nZXROdGhFZmZlY3RNYWdpY0VmZmVjdCgwKTsgcmV0dXJuIEdldEVmZmVjdEFyY2hldHlwZUFzSW50KEUpOyB9O1xyXG4gICAgdmFyIER1cmF0aW9uID0gZnVuY3Rpb24gKGFrRm9ybSkgeyB2YXIgRSA9IFNwZWxsLmZyb20oYWtGb3JtKS5nZXROdGhFZmZlY3RNYWdpY0VmZmVjdCgwKTsgcmV0dXJuIFNwZWxsLmZyb20oYWtGb3JtKS5nZXROdGhFZmZlY3REdXJhdGlvbigwKTsgfTtcclxuICAgIHZhciBFZmZlY3QgPSBTcGVsbC5mcm9tKGFrRm9ybSkuZ2V0TnRoRWZmZWN0TWFnaWNFZmZlY3QoMCk7XHJcbiAgICB2YXIgaURlbGl2ZXJ5VHlwZSA9IEVmZmVjdC5nZXREZWxpdmVyeVR5cGUoKTtcclxuICAgIHZhciBpQ2FzdFR5cGUgPSBFZmZlY3QuZ2V0Q2FzdGluZ1R5cGUoKTtcclxuICAgIHZhciBuYW1lID0gRWZmZWN0LmdldE5hbWUoKTtcclxuICAgIC8qIG9ubHkgaW5jbHVkZSBzcGVsbHMgdGhhdCB0YXJnZXQgJ3NlbGYnIGFuZCBhcmUgJ2ZpcmUgYW5kIGZvcmdldCc7IGlmIHRoZXkgYXJlICdmaXJlIGFuZCBmb3JnZXQnIGFuZCAnYWltZWQsJyBvbmx5IGluY2x1ZGUgJ2Nvbmp1cmF0aW9uJyBzcGVsbHNcclxuICAgICAgICA9PiBGRiBhbmQgU2VsZiBTcGVsbHM7XHRGRiBhbmQgQWltZWQgc3BlbGxzIGFuZCBSZW5haW1hdGUgc3BlbGxzOyBGRiBhbmQgVGFyZ2V0IExvY2F0aW9uIGFuZCBTdW1tb24gc3BlbGxzXHJcbiAgICAqL1xyXG4gICAgaWYgKG5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcygnbnBjJykpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoaUNhc3RUeXBlID09IDEgJiYgaURlbGl2ZXJ5VHlwZSA9PSAwICYmIER1cmF0aW9uKGFrRm9ybSkgPiAxXHJcbiAgICAgICAgfHwgaUNhc3RUeXBlID09IDEgJiYgaURlbGl2ZXJ5VHlwZSA9PSAyICYmIEFyY2hldHlwZShha0Zvcm0pID09IDIyXHJcbiAgICAgICAgfHwgaUNhc3RUeXBlID09IDEgJiYgaURlbGl2ZXJ5VHlwZSA9PSA0ICYmIEFyY2hldHlwZShha0Zvcm0pID09IDE4KSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbn07XHJcbi8vIG1haW4gZnVuY3Rpb24gdG8gaW5jb3Jwb3JhdGUgc3BlbGxzIGludG8gbG9yaWNhXHJcbmV4cG9ydCBmdW5jdGlvbiBTZXRDb3N0cyhvcHRpb24sIGFrc3BlbGwpIHtcclxuICAgIC8vIGlmICggIWFrc3BlbGwgKSB7IERlYnVnLm5vdGlmaWNhdGlvbihcInNvbWV0aGluZyB3ZW50IHdyb25nXCIpOyByZXR1cm47IH1cclxuICAgIHZhciBrZXl3b3JkUml0dWFsID0gS2V5d29yZC5mcm9tKEdhbWUuZ2V0Rm9ybUV4KDB4ODA2ZTEpKTtcclxuICAgIHZhciBtYWluID0gZnVuY3Rpb24gKHNwZWxsKSB7XHJcbiAgICAgICAgaWYgKCFzcGVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDtcclxuICAgICAgICB2YXIgaU1hZyA9IDA7XHJcbiAgICAgICAgdmFyIHNTcGVsbCA9IEZvcm1Ub1N0cmluZyhzcGVsbCk7XHJcbiAgICAgICAgdmFyIGZDb3N0ID0gU3BlbGwuZnJvbShzcGVsbCkuZ2V0RWZmZWN0aXZlTWFnaWNrYUNvc3QocGwoKSk7XHJcbiAgICAgICAgaWYgKHNwZWxsLmhhc0tleXdvcmQoa2V5d29yZFJpdHVhbCkpIHtcclxuICAgICAgICAgICAgaU1hZyA9IGZDb3N0ICogR2V0RmxvYXRWYWx1ZShudWxsLCBzdUtleXMuZlJpdHVhbE11bHQsIDAuNSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpTWFnID0gZkNvc3QgKiBHZXRGbG9hdFZhbHVlKG51bGwsIHN1S2V5cy5mQ29zdE11bHQsIDAuNSk7XHJcbiAgICAgICAgICAgIC8vIHByaW50Q29uc29sZShcIlNFVENPU1RTOjogR2V0RmxvYXRWYWx1ZShudWxsLCBzdUtleXMuZkNvc3RNdWx0LCAwLjUpID0+IFwiICsgR2V0RmxvYXRWYWx1ZShudWxsLCBzdUtleXMuZkNvc3RNdWx0LCAwLjUpKVxyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgZk1pbiA9IEdldEludFZhbHVlKG51bGwsIHN1S2V5cy5pRGVidWZmTWluLCAxNSk7XHJcbiAgICAgICAgaU1hZyA9IE1hdGguZmxvb3IoaU1hZyk7XHJcbiAgICAgICAgaWYgKGlNYWcgPCBmTWluKSB7XHJcbiAgICAgICAgICAgIGlNYWcgPSBmTWluO1xyXG4gICAgICAgIH1cclxuICAgICAgICBSZW1vdmVEZXNjcmlwdGlvbihzcGVsbCk7XHJcbiAgICAgICAgU2V0RmxvYXRWYWx1ZShudWxsLCBzU3BlbGwsIGlNYWcpO1xyXG4gICAgICAgIEFkZERlc2NyaXB0aW9uKHNwZWxsLCBpTWFnKTtcclxuICAgIH07XHJcbiAgICAvLyBjb25zdCBDbGVhblVwID0gZnVuY3Rpb24gKCBzcGVsbDogRm9ybSApIHsgIH1cclxuICAgIC8vIGlmICggaXNJbkJsYWNrbGlzdChha3NwZWxsISkgKSB7IH1cclxuICAgIGlmIChvcHRpb24udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhcImFsbFwiKSkge1xyXG4gICAgICAgIERlYnVnLm5vdGlmaWNhdGlvbihcIkFkZGluZyBvciByZWFwcGx5aW5nIGRlYnVmZnMgdG8gc3BlbGxzXCIpO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgRm9ybUxpc3RDb3VudChqdUtleXMucGF0aCwgc3VLZXlzLmZvcm1VcGtlZXBMaXN0KTsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBmb3Jtc3BlbGwgPSBGb3JtTGlzdEdldChqdUtleXMucGF0aCwgc3VLZXlzLmZvcm1VcGtlZXBMaXN0LCBpKTtcclxuICAgICAgICAgICAgaWYgKCFmb3Jtc3BlbGwgfHwgIWlzUmlnaHRTcGVsbFR5cGUoZm9ybXNwZWxsKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgbWFpbihmb3Jtc3BlbGwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICA7XHJcbiAgICAgICAgRGVidWcubm90aWZpY2F0aW9uKFwiRmluaXNoZWQgYWRkaW5nIG9yIHJlYXBwbHlpbmcgZGVidWZmcyB0byBzcGVsbHNcIik7XHJcbiAgICB9XHJcbiAgICA7XHJcbiAgICBpZiAob3B0aW9uID09IFwic2luZ2xlXCIpIHtcclxuICAgICAgICBEZWJ1Zy5ub3RpZmljYXRpb24oXCJBZGRpbmcgb3IgcmVhcHBseWluZyBkZWJ1ZmZzIHRvIHNwZWxsc1wiKTtcclxuICAgICAgICBpZiAoaXNSaWdodFNwZWxsVHlwZShha3NwZWxsKSkge1xyXG4gICAgICAgICAgICBtYWluKGFrc3BlbGwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICA7XHJcbiAgICAgICAgRGVidWcubm90aWZpY2F0aW9uKFwiRmluaXNoZWQgYWRkaW5nIG9yIHJlYXBwbHlpbmcgZGVidWZmcyB0byBzcGVsbHNcIik7XHJcbiAgICB9XHJcbiAgICA7XHJcbiAgICAvLyByZW1vdmUgbnVsbCBlbnRyaWVzIGZyb20gc3BlbGwgbGlzdHNcclxuICAgIEZvcm1MaXN0UmVtb3ZlKGp1S2V5cy5wYXRoLCBzdUtleXMuZm9ybVVwa2VlcExpc3QsIG51bGwsIHRydWUpO1xyXG4gICAgRm9ybUxpc3RSZW1vdmUoanVLZXlzLnBhdGgsIHN1S2V5cy5mb3JtQmxhY2tMaXN0LCBudWxsLCB0cnVlKTtcclxuICAgIEZvcm1MaXN0UmVtb3ZlKGp1S2V5cy5wYXRoLCBzdUtleXMuZm9ybUV4Y2x1c2lvbkxpc3QsIG51bGwsIHRydWUpO1xyXG4gICAgU2F2ZShqdUtleXMucGF0aCk7XHJcbn1cclxuO1xyXG4vLyBhZGQgY3VzdG9tIGR1bW15IG1hZ2ljIGVmZmVjdCB0byBzcGVsbHMsIHdpdGggZGVzY3JpcHRpb25zIGRldGFpbGluZyBkZWJ1ZmYgY29zdCBmb3IgZWFjaCBzcGVsbFxyXG5mdW5jdGlvbiBBZGREZXNjcmlwdGlvbihzcGVsbCwgaU1hZykge1xyXG4gICAgLy8gZHVtbXkgbWdlZidzIHRvIGhvbGQgY3VzdG9tIGRlc2NyaXB0aW9uXHJcbiAgICB2YXIgZHVtbXlTZWxmID0gTWFnaWNFZmZlY3QuZnJvbShHYW1lLmdldEZvcm1Gcm9tRmlsZSgweDAwMUM0MSwgXCJMb3JpY2EgUmVkb25lLmVzcFwiKSk7XHJcbiAgICB2YXIgZHVtbXlBaW1lZCA9IE1hZ2ljRWZmZWN0LmZyb20oR2FtZS5nZXRGb3JtRnJvbUZpbGUoMHgwMDFFNTMsIFwiTG9yaWNhIFJlZG9uZS5lc3BcIikpO1xyXG4gICAgdmFyIGR1bW15VGFyZ2V0TG9jYXRpb24gPSBNYWdpY0VmZmVjdC5mcm9tKEdhbWUuZ2V0Rm9ybUZyb21GaWxlKDB4MDAxRTU0LCBcIkxvcmljYSBSZWRvbmUuZXNwXCIpKTtcclxuICAgIC8vIGxvbmdlc3QgYSBzcGVsbC9tZ2VmIGNhbiBsYXN0IGluIHNreXJpbTsgYSB3aG9sZSBkYXkgSSBiZWxpZXZlLCBpbiBzZWNvbmRzXHJcbiAgICB2YXIgbG9uZ3RpbWUgPSA4NDYwMDtcclxuICAgIHZhciBTID0gU3BlbGwuZnJvbShzcGVsbCk7XHJcbiAgICB2YXIgRWZmZWN0ID0gUy5nZXROdGhFZmZlY3RNYWdpY0VmZmVjdCgwKTtcclxuICAgIHZhciBpRGVsaXZlcnlUeXBlID0gRWZmZWN0LmdldERlbGl2ZXJ5VHlwZSgpO1xyXG4gICAgUmVtb3ZlRGVzY3JpcHRpb24oc3BlbGwpO1xyXG4gICAgaWYgKGlEZWxpdmVyeVR5cGUgPT0gMCkge1xyXG4gICAgICAgIEFkZE1hZ2ljRWZmZWN0VG9TcGVsbChTLCBkdW1teVNlbGYsIGlNYWcsIDAsIGxvbmd0aW1lLCAwKTtcclxuICAgIH1cclxuICAgIDsgLy8gJzAnIGlzIHRhcmdldCBzZWxmXHJcbiAgICBpZiAoaURlbGl2ZXJ5VHlwZSA9PSAyKSB7XHJcbiAgICAgICAgQWRkTWFnaWNFZmZlY3RUb1NwZWxsKFMsIGR1bW15QWltZWQsIGlNYWcsIDAsIGxvbmd0aW1lLCAwKTtcclxuICAgIH1cclxuICAgIDsgLy8gJzInIGlzIGFpbWVkXHJcbiAgICBpZiAoaURlbGl2ZXJ5VHlwZSA9PSA0KSB7XHJcbiAgICAgICAgQWRkTWFnaWNFZmZlY3RUb1NwZWxsKFMsIGR1bW15VGFyZ2V0TG9jYXRpb24sIGlNYWcsIDAsIGxvbmd0aW1lLCAwKTtcclxuICAgIH1cclxuICAgIDsgLy8gJzQnIGlzIHRhcmdldCBsb2NhdGlvblx0XHJcbn1cclxuO1xyXG5mdW5jdGlvbiBSZW1vdmVEZXNjcmlwdGlvbihha1NwZWxsKSB7XHJcbiAgICB2YXIgX2E7XHJcbiAgICB2YXIgUyA9IFNwZWxsLmZyb20oYWtTcGVsbCk7XHJcbiAgICAvLyBpZiAoICFTICkgeyByZXR1cm47fVxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBTLmdldE51bUVmZmVjdHMoKTsgaSsrKSB7XHJcbiAgICAgICAgaWYgKChfYSA9IFMuZ2V0TnRoRWZmZWN0TWFnaWNFZmZlY3QoaSkpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5nZXROYW1lKCkudG9Mb3dlckNhc2UoKS5pbmNsdWRlcygnc3VzdGFpbiBzcGVsbCcpKSB7XHJcbiAgICAgICAgICAgIC8vIFJlbW92ZU1hZ2ljRWZmZWN0RnJvbVNwZWxsKFMsIHJlbW92ZWVmZmVjdCwgcmVtb3ZlTWFnLCAwLCByZW1vdmVEdXIgICk7XHJcbiAgICAgICAgICAgIFJlbW92ZUVmZmVjdEl0ZW1Gcm9tU3BlbGwoUywgUywgaSk7XHJcbiAgICAgICAgICAgIC8vIHByaW50Q29uc29sZShgJHtTPy5nZXROYW1lKCl9IHdhcyByZW1vdmVkYClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICA7XHJcbn1cclxuIiwiaW1wb3J0IHsgb24sIEZvcm0sIEdhbWUgfSBmcm9tIFwiQHNreXJpbS1wbGF0Zm9ybS9za3lyaW0tcGxhdGZvcm1cIjtcclxuaW1wb3J0IHsgRm9ybUxpc3RIYXMgfSBmcm9tIFwiQHNreXJpbS1wbGF0Zm9ybS9wYXB5cnVzLXV0aWwvSnNvblV0aWxcIjtcclxuaW1wb3J0IHsgRm9ybUxpc3RDb3VudCwgRm9ybUxpc3RUb0FycmF5IH0gZnJvbSBcIkBza3lyaW0tcGxhdGZvcm0vcGFweXJ1cy11dGlsL1N0b3JhZ2VVdGlsXCI7XHJcbmltcG9ydCB7IGp1S2V5cywgc3VLZXlzIH0gZnJvbSBcIi4vWU1fTG9yaWNhX1NoYXJlZFwiO1xyXG5pbXBvcnQgeyBUb2dnbGVTcGVsbCB9IGZyb20gXCIuL0xvcmljYVJlZG9uZVwiO1xyXG5pbXBvcnQgeyBTZXRDb3N0cyB9IGZyb20gXCIuL1lNX0xvcmljYV9Db21wYXRcIjtcclxuZXhwb3J0IGZ1bmN0aW9uIERpc3BlbFNwZWxscyhvcHRpb24pIHtcclxuICAgIGlmIChvcHRpb24gPT09IHZvaWQgMCkgeyBvcHRpb24gPSAnJzsgfVxyXG4gICAgdmFyIGwgPSBGb3JtTGlzdENvdW50KG51bGwsIHN1S2V5cy5mb3JtQXBwbGllZExpc3QpO1xyXG4gICAgdmFyIGEgPSBGb3JtTGlzdFRvQXJyYXkobnVsbCwgc3VLZXlzLmZvcm1BcHBsaWVkTGlzdCk7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGw7IGkrKykge1xyXG4gICAgICAgIHZhciBGID0gYVtpXTtcclxuICAgICAgICBpZiAoRm9ybUxpc3RIYXMoanVLZXlzLnBhdGgsIHN1S2V5cy5mb3JtRXhjbHVzaW9uTGlzdCwgRikgJiYgb3B0aW9uLnRvTG93ZXJDYXNlKCkgPT0gJ2V4Y2x1c2l2ZScpIHtcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFRvZ2dsZVNwZWxsKFwib2ZmXCIsIEYpO1xyXG4gICAgfVxyXG59XHJcbjtcclxuZXhwb3J0IHZhciBtYWluVXRpbGl0eVNwZWxscyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBpID0gMDtcclxuICAgIHZhciBmbGFnID0gZmFsc2U7XHJcbiAgICBvbignZWZmZWN0U3RhcnQnLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICB2YXIgX2EsIF9iLCBfYywgX2Q7XHJcbiAgICAgICAgdmFyIG1nZWZEaXNwZWwgPSAoX2EgPSBHYW1lLmdldEZvcm1Gcm9tRmlsZSgweDE4MUEsIFwiTG9yaWNhIFJlZG9uZS5lc3BcIikpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5nZXRGb3JtSUQoKTtcclxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLURJU1BFTC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgaWYgKGV2ZW50LmVmZmVjdC5nZXRGb3JtSUQoKSA9PSBtZ2VmRGlzcGVsKSB7XHJcbiAgICAgICAgICAgIGZsYWcgPSB0cnVlO1xyXG4gICAgICAgICAgICBEaXNwZWxTcGVsbHMoJ2V4Y2x1c2l2ZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZXZlbnQuZWZmZWN0LmdldEZvcm1JRCgpID09IG1nZWZEaXNwZWwgJiYgaSA8IDMwMCAmJiBpID4gMCkge1xyXG4gICAgICAgICAgICBpID0gMDtcclxuICAgICAgICAgICAgZmxhZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBEaXNwZWxTcGVsbHMoXCJBTExcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDtcclxuICAgICAgICAvLyAtLS0tLS0tRElTUEVMIFRJTUVSLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICBvbigndXBkYXRlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoZmxhZykge1xyXG4gICAgICAgICAgICAgICAgaSsrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgaWYgKGkgPiAzMDApIHtcclxuICAgICAgICAgICAgICAgIGkgPSAwO1xyXG4gICAgICAgICAgICAgICAgZmxhZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDtcclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyAtLS0tLS0tLS0tLS13aGVuICdBZGQgU3BlbGwnIGlzIHRyaWdnZXJlZC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgdmFyIG1nZWZBZGRzcGVsbCA9IChfYiA9IEdhbWUuZ2V0Rm9ybUZyb21GaWxlKDB4MDAxODIyLCBcIkxvcmljYSBSZWRvbmUuZXNwXCIpKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuZ2V0Rm9ybUlEKCk7XHJcbiAgICAgICAgaWYgKGV2ZW50LmVmZmVjdC5nZXRGb3JtSUQoKSA9PSBtZ2VmQWRkc3BlbGwpIHtcclxuICAgICAgICAgICAgdmFyIGxlZnQgPSBGb3JtLmZyb20oKF9jID0gR2FtZS5nZXRQbGF5ZXIoKSkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLmdldEVxdWlwcGVkU3BlbGwoMCkpO1xyXG4gICAgICAgICAgICB2YXIgcmlnaHQgPSBGb3JtLmZyb20oKF9kID0gR2FtZS5nZXRQbGF5ZXIoKSkgPT09IG51bGwgfHwgX2QgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kLmdldEVxdWlwcGVkU3BlbGwoMSkpO1xyXG4gICAgICAgICAgICBpZiAoIWxlZnQgfHwgIXJpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICBTZXRDb3N0cyhcInNpbmdsZVwiLCBsZWZ0KTtcclxuICAgICAgICAgICAgU2V0Q29zdHMoXCJzaW5nbGVcIiwgcmlnaHQpO1xyXG4gICAgICAgICAgICAvLyBwcmludENvbnNvbGUoXCJtYWluQWRkU3BlbGxzcGVsbDo6IGl0IHdvcmtlZFwiKTsgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIDtcclxuICAgIH0pO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBvbiwgb25jZSwgcHJpbnRDb25zb2xlLCBHYW1lLCBicm93c2VyLCBob29rcyB9IGZyb20gXCJza3lyaW1QbGF0Zm9ybVwiO1xyXG5pbXBvcnQgeyBTdHJpbmdMaXN0QWRkLCBHZXRTdHJpbmdWYWx1ZSwgU2V0SW50VmFsdWUsIEdldEludFZhbHVlLCBTdHJpbmdMaXN0VG9BcnJheSwgU3RyaW5nTGlzdENsZWFyIH0gZnJvbSBcIkBza3lyaW0tcGxhdGZvcm0vcGFweXJ1cy11dGlsL1N0b3JhZ2VVdGlsXCI7XHJcbmltcG9ydCB7IEZvcm1MaXN0VG9BcnJheSB9IGZyb20gXCJAc2t5cmltLXBsYXRmb3JtL3BhcHlydXMtdXRpbC9Kc29uVXRpbFwiO1xyXG5pbXBvcnQgeyBqdUtleXMsIHN1S2V5cyB9IGZyb20gXCIuL1lNX0xvcmljYV9TaGFyZWRcIjtcclxuaW1wb3J0IHsgVXBkYXRlQWxsU3BlbGxzIH0gZnJvbSBcIi4vWU1fTG9yaWNhX0NvbXBhdFwiO1xyXG52YXIgZm9jdXNlZCA9IGZhbHNlO1xyXG52YXIgY2xvc2UgPSBmYWxzZTtcclxuYnJvd3Nlci5sb2FkVXJsKFwiZmlsZTovLy9EYXRhL1BsYXRmb3JtL1VJL2xvcmljYS1tZW51Lmh0bWxcIik7XHJcbmV4cG9ydCB2YXIgbWFpbk1DTSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIG9uKCdtZW51Q2xvc2UnLCBmdW5jdGlvbiAoZXZlbnQpIHsgU2V0SW50VmFsdWUobnVsbCwgXCJZTS5Mb3JpY2EuTUNNLk1lbnVGbGFnXCIsIDApOyB9KTtcclxuICAgIG9uKCdtZW51T3BlbicsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoR2V0SW50VmFsdWUobnVsbCwgXCJZTS5Mb3JpY2EuTUNNLk1lbnVPcGVuRmxhZ1wiLCAwKSA9PSAxKSB7XHJcbiAgICAgICAgICAgIG9uY2UoJ3VwZGF0ZScsIGZ1bmN0aW9uICgpIHsgU2V0SW50VmFsdWUobnVsbCwgXCJZTS5Mb3JpY2EuTUNNLk1lbnVPcGVuRmxhZ1wiLCAwKTsgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDtcclxuICAgIH0pO1xyXG4gICAgb25jZSgndXBkYXRlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBwbGF5ZXIgPSBHYW1lLmdldFBsYXllcigpO1xyXG4gICAgICAgIGlmIChwbGF5ZXIpIHtcclxuICAgICAgICAgICAgcGxheWVyLnJlZ2lzdGVyRm9yTW9kRXZlbnQoXCJMb3JpY2FSZWRvbmVfTWVudV9PcGVuXCIsIFwiT25Mb3JpY2FPcGVuXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwbGF5ZXIucmVnaXN0ZXJGb3JNb2RFdmVudChcIkxvcmljYVJlZG9uZV9NZW51X1Vwa2VlcF9JbnB1dFwiLCBcIk9uVXBrZWVwSW5wdXRcIik7XHJcbiAgICAgICAgcGxheWVyLnJlZ2lzdGVyRm9yTW9kRXZlbnQoXCJMb3JpY2FSZWRvbmVfTWVudV9VcGtlZXBfSW5wdXRfQ2xlYXJcIiwgXCJPbklucHV0Q2xlYXJcIik7XHJcbiAgICAgICAgcGxheWVyLnJlZ2lzdGVyRm9yTW9kRXZlbnQoXCJMb3JpY2FSZWRvbmVfTWVudV9DbG9zZV9VcGRhdGVcIiwgXCJPblF1ZXVlZENoYW5nZVwiKTtcclxuICAgICAgICAvLyBMaXN0Q29tcGlsZSgpXHJcbiAgICB9KTtcclxuICAgIGhvb2tzLnNlbmRQYXB5cnVzRXZlbnQuYWRkKHtcclxuICAgICAgICBlbnRlcjogZnVuY3Rpb24gKGN0eCkge1xyXG4gICAgICAgICAgICBwcmludENvbnNvbGUoXCJcIi5jb25jYXQoY3R4LnBhcHlydXNFdmVudE5hbWUsIFwiIGhhcyBiZWVuIGNhdWdodFwiKSk7XHJcbiAgICAgICAgICAgIC8vIFNldEludFZhbHVlKG51bGwsIFwiWU0uTG9yaWNhLk1DTS5NZW51T3BlbkZsYWdcIiwgMSlcclxuICAgICAgICAgICAgRmlsbE1DTU9wdGlvbnMoKTtcclxuICAgICAgICB9LFxyXG4gICAgfSwgMHgxNCwgMHgxNCwgJ09uTG9yaWNhT3BlbicpO1xyXG4gICAgaG9va3Muc2VuZFBhcHlydXNFdmVudC5hZGQoe1xyXG4gICAgICAgIGVudGVyOiBmdW5jdGlvbiAoY3R4KSB7XHJcbiAgICAgICAgICAgIHByaW50Q29uc29sZShcIlwiLmNvbmNhdChjdHgucGFweXJ1c0V2ZW50TmFtZSwgXCIgaGFzIGJlZW4gY2F1Z2h0XCIpKTtcclxuICAgICAgICAgICAgLy8gU2V0SW50VmFsdWUobnVsbCwgXCJZTS5Mb3JpY2EuTUNNLk1lbnVPcGVuRmxhZ1wiLCAxKVxyXG4gICAgICAgICAgICBGaWxsTUNNT3B0aW9ucygpO1xyXG4gICAgICAgIH0sXHJcbiAgICB9LCAweDE0LCAweDE0LCAnT25JbnB1dENsZWFyJyk7XHJcbiAgICBob29rcy5zZW5kUGFweXJ1c0V2ZW50LmFkZCh7XHJcbiAgICAgICAgZW50ZXI6IGZ1bmN0aW9uIChjdHgpIHtcclxuICAgICAgICAgICAgcHJpbnRDb25zb2xlKFwiXCIuY29uY2F0KGN0eC5wYXB5cnVzRXZlbnROYW1lLCBcIiBoYXMgYmVlbiBjYXVnaHRcIikpO1xyXG4gICAgICAgICAgICBvbmNlKCdtZW51Q2xvc2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBVcGRhdGVBbGxTcGVsbHMoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgIH0sIDB4MTQsIDB4MTQsICdPblF1ZXVlZENoYW5nZScpO1xyXG4gICAgLy8gICBldmVudCBmb3Igd2hlbiBwbGF5ZXIgaW5wdXRzIGluIHRoZSBVcGtlZXAgc2VhcmNoIG9wdGlvbjsgZmlsdGVycyB0aGUgZW51bSBtZW51cyBhY2NvcmRpbmdseVxyXG4gICAgaG9va3Muc2VuZFBhcHlydXNFdmVudC5hZGQoe1xyXG4gICAgICAgIGVudGVyOiBmdW5jdGlvbiAoY3R4KSB7XHJcbiAgICAgICAgICAgIHByaW50Q29uc29sZShcIlwiLmNvbmNhdChjdHgucGFweXJ1c0V2ZW50TmFtZSwgXCIgaGFzIGJlZW4gY2F1Z2h0XCIpKTtcclxuICAgICAgICAgICAgRmlsdGVyTUNNT3B0aW9ucyhHZXRTdHJpbmdWYWx1ZShudWxsLCBcIllNLkxvcmljYS5NZW51LlVwa2VlcC5JbnB1dFwiLCAnJykpO1xyXG4gICAgICAgIH0sXHJcbiAgICB9LCAweDE0LCAweDE0LCAnT25VcGtlZXBJbnB1dCcpO1xyXG59O1xyXG52YXIgRm9ybXNUb1N0cmluZ05hbWVzID0gZnVuY3Rpb24gKGZvcm1zLCBrZXkpIHtcclxuICAgIHZhciBzdHJpbmdsaXN0ID0gWydObyBDaGFuZ2VzJ107XHJcbiAgICBpZiAoIWZvcm1zKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgO1xyXG4gICAgU3RyaW5nTGlzdENsZWFyKG51bGwsIGtleSk7XHJcbiAgICBTdHJpbmdMaXN0QWRkKG51bGwsIGtleSwgJ05vIENoYW5nZXMnKTtcclxuICAgIGZvcm1zLmZvckVhY2goZnVuY3Rpb24gKGZvcm0pIHtcclxuICAgICAgICBpZiAoIWZvcm0pIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICA7XHJcbiAgICAgICAgdmFyIG5hbWUgPSBmb3JtLmdldE5hbWUoKTtcclxuICAgICAgICBpZiAoIW5hbWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICA7XHJcbiAgICAgICAgdmFyIGlkID0gZm9ybS5nZXRGb3JtSUQoKTtcclxuICAgICAgICBpZiAoIWlkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgO1xyXG4gICAgICAgIFN0cmluZ0xpc3RBZGQobnVsbCwga2V5LCBuYW1lKTtcclxuICAgICAgICBTZXRJbnRWYWx1ZShudWxsLCBuYW1lLCBpZCk7XHJcbiAgICAgICAgc3RyaW5nbGlzdC5wdXNoKG5hbWUpO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gc3RyaW5nbGlzdDtcclxufTtcclxuZnVuY3Rpb24gRmlsbE1DTU9wdGlvbnMoKSB7XHJcbiAgICB2YXIgYTtcclxuICAgIGEgPSBGb3JtTGlzdFRvQXJyYXkoanVLZXlzLnBhdGgsIHN1S2V5cy5mb3JtVXBrZWVwTGlzdCk7XHJcbiAgICB2YXIgYiA9IEZvcm1zVG9TdHJpbmdOYW1lcyhhLCBcIllNLkxvcmljYS5NQ00uRW51bS5VcGtlZXBcIik7XHJcbiAgICBhID0gRm9ybUxpc3RUb0FycmF5KGp1S2V5cy5wYXRoLCBzdUtleXMuZm9ybUJsYWNrTGlzdCk7XHJcbiAgICBGb3Jtc1RvU3RyaW5nTmFtZXMoYSwgXCJZTS5Mb3JpY2EuTUNNLkVudW0uQmxhY2tsaXN0XCIpO1xyXG4gICAgYSA9IEZvcm1MaXN0VG9BcnJheShqdUtleXMucGF0aCwgc3VLZXlzLmZvcm1FeGNsdXNpb25MaXN0KTtcclxuICAgIEZvcm1zVG9TdHJpbmdOYW1lcyhhLCBcIllNLkxvcmljYS5NQ00uRW51bS5FeGNsdXNpb25cIik7XHJcbn1cclxuO1xyXG4vLyBGdW5jdGlvbiB0byBjbGVhciBhbmQgcmVmaWxsIHRoZSBtY20gbWVudSBsaXN0cyBhY2NvcmRpbmcgdG8gYSBmaWx0ZXIgY3JpdGVyaWFcclxuZnVuY3Rpb24gRmlsdGVyTUNNT3B0aW9ucyhxdWVyeSkge1xyXG4gICAgaWYgKCFxdWVyeSkge1xyXG4gICAgICAgIHF1ZXJ5ID0gJyc7XHJcbiAgICB9XHJcbiAgICA7XHJcbiAgICAvLyBGaWxsTUNNT3B0aW9ucygpXHJcbiAgICB2YXIga2V5cyA9IFtcIllNLkxvcmljYS5NQ00uRW51bS5VcGtlZXBcIiwgXCJZTS5Mb3JpY2EuTUNNLkVudW0uQmxhY2tsaXN0XCIsIFwiWU0uTG9yaWNhLk1DTS5FbnVtLkV4Y2x1c2lvblwiXTtcclxuICAgIGtleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XHJcbiAgICAgICAgdmFyIGZpbHRlcmVkID0gRmlsdGVyT3B0aW9ucyhTdHJpbmdMaXN0VG9BcnJheShudWxsLCBrZXkpLCBxdWVyeSk7XHJcbiAgICAgICAgZmlsdGVyZWQudW5zaGlmdCgnTm8gQ2hhbmdlcycpO1xyXG4gICAgICAgIFN0cmluZ0xpc3RDbGVhcihudWxsLCBrZXkpO1xyXG4gICAgICAgIGZpbHRlcmVkLmZvckVhY2goZnVuY3Rpb24gKGYpIHtcclxuICAgICAgICAgICAgU3RyaW5nTGlzdEFkZChudWxsLCBrZXksIGYsIGZhbHNlKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIEZpbHRlck9wdGlvbnMoYXJyLCBxdWVyeSkge1xyXG4gICAgcmV0dXJuIGFyci5maWx0ZXIoZnVuY3Rpb24gKGVsKSB7XHJcbiAgICAgICAgcmV0dXJuIGVsLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihxdWVyeS50b0xvd2VyQ2FzZSgpKSAhPT0gLTE7XHJcbiAgICB9KTtcclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9