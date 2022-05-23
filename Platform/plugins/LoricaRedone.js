/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToggleSpell": () => (/* binding */ ToggleSpell)
/* harmony export */ });
/* harmony import */ var skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var skyrimPlatform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__);
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
skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.browser.setVisible(true);
// -------------------------------TEXTS--------------------------------------------------------------
var CreateText = function (text, xpos, ypos) {
    var text_id = (0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.createText)(xpos, ypos, text, [0, 0.5, 1, 1]);
    // Create text with identifying hand
    (0,_skyrim_platform_papyrus_util_StorageUtil__WEBPACK_IMPORTED_MODULE_1__.SetIntValue)(null, '.LoricaRedone.widgets.charging.' + text + '.id', text_id);
    (0,_skyrim_platform_papyrus_util_StorageUtil__WEBPACK_IMPORTED_MODULE_1__.IntListAdd)(null, '.skyrimPlatform.texts.', text_id);
};
// Ensures no duplicate widgets get created
var DestroyLoricaTexts = function () {
    var c = (0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.getNumCreatedTexts)();
    if ((0,_skyrim_platform_papyrus_util_StorageUtil__WEBPACK_IMPORTED_MODULE_1__.IntListCount)(null, '.skyrimPlatform.texts.') == 0 || (0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.getNumCreatedTexts)() == 0) {
        return;
    }
    var alltexts = (0,_skyrim_platform_papyrus_util_StorageUtil__WEBPACK_IMPORTED_MODULE_1__.IntListToArray)(null, '.skyrimPlatform.texts.');
    alltexts.forEach(function (id) {
        (0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.destroyText)(id);
    });
    (0,_skyrim_platform_papyrus_util_StorageUtil__WEBPACK_IMPORTED_MODULE_1__.IntListClear)(null, '.skyrimPlatform.texts.');
};
//---------------------------------COMPATIBILITY SECTION---------------------------------------------
var spellCompatCheck = function () {
    var allspells;
    allspells = (0,_skyrim_platform_po3_papyrus_extender_PO3_SKSEFunctions__WEBPACK_IMPORTED_MODULE_3__.GetAllSpells)(null, true);
    if ((0,_skyrim_platform_papyrus_util_StorageUtil__WEBPACK_IMPORTED_MODULE_1__.GetIntValue)(null, _YM_Lorica_Shared__WEBPACK_IMPORTED_MODULE_4__.suKeys.iCompatAllSpells) != allspells.length && !(0,_skyrim_platform_papyrus_util_StorageUtil__WEBPACK_IMPORTED_MODULE_1__.GetIntValue)(null, _YM_Lorica_Shared__WEBPACK_IMPORTED_MODULE_4__.suKeys.bCompatInitialized)) {
        (0,_YM_Lorica_Compat__WEBPACK_IMPORTED_MODULE_5__.mainCompat)();
    }
    ;
};
(0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.on)('loadGame', function () { (0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.printConsole)('loadgame'); spellCompatCheck(); });
(0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.on)('newGame', function () { (0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.printConsole)('newgame'); spellCompatCheck(); });
(0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.once)('skyrimLoaded', function () {
    (0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.printConsole)('skyrimLoaded');
    // let charge_indicator:number = createText(100, 100, 'test', [0,0.5,1,1])
    // SetIntValue(null, '.LoricaRedone.widgets.charging.id', charge_indicator)
});
(0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.once)('scriptInit', function () { spellCompatCheck(); });
(0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.once)('update', function () {
    // if ( !GetIntValue(null, suKeys.bCompatInitialized) ) { return;}
    (0,_skyrim_platform_po3_papyrus_extender_PO3_SKSEFunctions__WEBPACK_IMPORTED_MODULE_3__.GivePlayerSpellBook)(); // debug option
    (0,_YM_Lorica_Compat__WEBPACK_IMPORTED_MODULE_5__.mainCompat)();
    // spellCompatCheck()
    DestroyLoricaTexts();
    CreateText('right', 2000, 1000);
    CreateText('left', 1000, 1000);
    bCharging = (0,_skyrim_platform_papyrus_util_StorageUtil__WEBPACK_IMPORTED_MODULE_1__.GetIntValue)(null, _YM_Lorica_Shared__WEBPACK_IMPORTED_MODULE_4__.suKeys.bChargingEnable, 1);
});
// --------------------------------DUAL CAST CHECK----------------------------
// hook into dual cast magic animation to doubly check if spell was dual cast [check]
// getEquippedSpell(0) == left hand
// getEquippedSpell(1) == right hand
var bDualCast = false;
var bUpkeepCastL = false;
var bUpkeepCastR = false;
var fChargeTimerR = 0;
var fChargeTimerL = 0;
var Spellduration = 0;
skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.hooks.sendAnimationEvent.add({
    enter: function (ctx) {
        var _this = this;
        var animEvent = ctx.animEventName.toLowerCase();
        // printConsole(animEvent);
        if (animEvent.includes("dualmagic")) {
            (0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.once)('update', function () {
                var equippedRight = skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.Form.from(skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.Game.getPlayer().getEquippedSpell(1));
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
        var WidgetHandSet = function (duration, hand) {
            hand = hand.toLowerCase();
            var widget = (0,_skyrim_platform_papyrus_util_StorageUtil__WEBPACK_IMPORTED_MODULE_1__.GetIntValue)(null, ".LoricaRedone.widgets.charging.".concat(hand, ".id"));
            var max = (0,_skyrim_platform_papyrus_util_StorageUtil__WEBPACK_IMPORTED_MODULE_1__.GetIntValue)(null, _YM_Lorica_Shared__WEBPACK_IMPORTED_MODULE_4__.suKeys.iChargeMaxDuration, 600) * 60 / 100;
            (0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.setTextColor)(widget, [0, 0.5, 1, 1]);
            (0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.setTextString)(widget, "".concat(Math.round(duration / max), "%"));
        };
        if (bCharging == 1) {
            if (animEvent.includes("spellready")) {
                (0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.once)('update', function () {
                    var equippedLeft = skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.Form.from(skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.Game.getPlayer().getEquippedSpell(0));
                    var equippedRight = skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.Form.from(skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.Game.getPlayer().getEquippedSpell(1));
                    if (animEvent.includes('mlh')) {
                        fChargeTimerL = 0;
                        bUpkeepCastL = true;
                        (0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.printConsole)(animEvent);
                        if (isInWrongLists(equippedLeft)) {
                            bUpkeepCastL = false;
                            ;
                            fChargeTimerL = 0;
                            return;
                        }
                        (0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.on)('update', function () {
                            if (bUpkeepCastL) {
                                var w = function (duration) { return __awaiter(_this, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0: return [4 /*yield*/, skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.Utility.wait(0.5)
                                                // Debug.notification('Spell is charging!')
                                            ];
                                            case 1:
                                                _a.sent();
                                                // Debug.notification('Spell is charging!')
                                                fChargeTimerL++;
                                                return [2 /*return*/];
                                        }
                                    });
                                }); };
                                var equippedLeft_1 = skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.Form.from(skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.Game.getPlayer().getEquippedSpell(0));
                                Spellduration = SetDuration(fChargeTimerL, equippedLeft_1);
                                WidgetHandSet(Spellduration, 'left');
                                w(Spellduration);
                                if ((fChargeTimerL / 60) > 300) {
                                    bUpkeepCastL = false;
                                    fChargeTimerL = 0;
                                }
                            }
                        });
                    }
                    if (animEvent.includes('mrh')) {
                        fChargeTimerR = 0;
                        bUpkeepCastR = true;
                        if (isInWrongLists(equippedRight)) {
                            bUpkeepCastR = false;
                            fChargeTimerR = 0;
                            return;
                        }
                        (0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.on)('update', function () {
                            if (bUpkeepCastR) {
                                var w = function (duration) { return __awaiter(_this, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0: return [4 /*yield*/, skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.Utility.wait(0.5)
                                                // Debug.notification('Spell is charging!')
                                            ];
                                            case 1:
                                                _a.sent();
                                                // Debug.notification('Spell is charging!')
                                                fChargeTimerR++;
                                                return [2 /*return*/];
                                        }
                                    });
                                }); };
                                var equippedRight_1 = skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.Form.from(skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.Game.getPlayer().getEquippedSpell(1));
                                Spellduration = SetDuration(fChargeTimerR, equippedRight_1);
                                WidgetHandSet(Spellduration, 'right');
                                w(Spellduration);
                                if ((fChargeTimerR / 60) > 300) {
                                    bUpkeepCastR = false;
                                    fChargeTimerR = 0;
                                }
                            }
                        });
                    }
                });
            }
            if (animEvent.includes("spellrelease") || animEvent.includes('equipped_event') || animEvent.includes('unequip')) {
                bUpkeepCastL = false;
                bUpkeepCastR = false;
                fChargeTimerL = 0;
                fChargeTimerR = 0;
                (0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.once)('update', function () {
                    var w = function () { return __awaiter(_this, void 0, void 0, function () {
                        var lwidget, rwidget, color;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.Utility.wait(2.0)];
                                case 1:
                                    _a.sent();
                                    lwidget = (0,_skyrim_platform_papyrus_util_StorageUtil__WEBPACK_IMPORTED_MODULE_1__.GetIntValue)(null, '.LoricaRedone.widgets.charging.left.id');
                                    rwidget = (0,_skyrim_platform_papyrus_util_StorageUtil__WEBPACK_IMPORTED_MODULE_1__.GetIntValue)(null, '.LoricaRedone.widgets.charging.right.id');
                                    color = (0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.getTextColor)(rwidget);
                                    color[3] = 0;
                                    (0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.setTextColor)(lwidget, color);
                                    (0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.setTextColor)(rwidget, color);
                                    return [2 /*return*/];
                            }
                        });
                    }); };
                    w();
                });
            }
            // if (animEvent.includes("spellrelease") ) { 
            // 	once('update', () => {
            // 		let left = Form.from(Game.getPlayer().getEquippedSpell(0)); 
            // 		let right = Form.from(Game.getPlayer().getEquippedSpell(1));
            // 		if ( animEvent.includes('mrh') && !isInWrongLists(right) ) {
            // 		}
            // 		// if ( animEvent.includes('mlh') && !isInWrongLists(left)) {MessageDurationResult(Spellduration)}
            // 	})
            // }
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
        skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.Debug.notification("Widget Failed!\nERROR 403: no widget created\nAttempting to recreate widget");
        (0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.once)('update', function () {
            var charge_indicator = (0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.createText)(100, 100, 'test', [0, 0.5, 1, 1]);
            (0,_skyrim_platform_papyrus_util_StorageUtil__WEBPACK_IMPORTED_MODULE_1__.SetIntValue)(null, '.LoricaRedone.widgets.charging.id', charge_indicator);
        });
    }
    (0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.setTextString)(widget, "0");
}
var ChargeTime_V_Cost_Equation = function (spell) {
    // equation ( charge_time is seconds spell needs to be charged to reach max spell duration in minutes )
    // 				 {	(1/9)*iChargeCostSolution - ichargeCostSolution		0 <= x <= iChargeCostAsymptote
    // charge_time = |	
    // 				 {	iChargeDurationUpperBound				x >= iChargeCostAsymptote
    var User_Pref_Solution = (0,_skyrim_platform_papyrus_util_StorageUtil__WEBPACK_IMPORTED_MODULE_1__.GetIntValue)(null, _YM_Lorica_Shared__WEBPACK_IMPORTED_MODULE_4__.suKeys.iChargeCostSolution, 20);
    var User_Pref_Upper_Bound = (0,_skyrim_platform_papyrus_util_StorageUtil__WEBPACK_IMPORTED_MODULE_1__.GetIntValue)(null, _YM_Lorica_Shared__WEBPACK_IMPORTED_MODULE_4__.suKeys.iChargeDurationUpperBound, 10);
    var User_Pref_Cost_Asymptote = (0,_skyrim_platform_papyrus_util_StorageUtil__WEBPACK_IMPORTED_MODULE_1__.GetIntValue)(null, _YM_Lorica_Shared__WEBPACK_IMPORTED_MODULE_4__.suKeys.iChargeCostAsymptote, 100);
    var fCost = skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.Spell.from(spell).getEffectiveMagickaCost((0,_YM_Lorica_Shared__WEBPACK_IMPORTED_MODULE_4__.pl)());
    var charge_time = 0;
    var solution = User_Pref_Solution; // solution to the first part of the step function, this 'fCost + 40**2' is of course -40. A spell costing 40 or below has to charge
    var upper_step = User_Pref_Upper_Bound;
    var slope = (User_Pref_Upper_Bound) / (User_Pref_Cost_Asymptote - solution);
    (0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.printConsole)("the slope is ".concat(slope));
    if (fCost >= 0 && fCost < User_Pref_Cost_Asymptote) {
        charge_time = slope * fCost - solution;
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
    var slope = (User_Pref_Max_Dur - 60) / User_Pref_Upper_Bound; // subtract by 60 since the lowest duration allowed is 60 seconds (one minute)
    var charge_calculated = ChargeTime_V_Cost_Equation(spell);
    charge_timer /= 60; // divide by 60 as the timer increments 60 times a second
    if (charge_timer >= charge_calculated) {
        return User_Pref_Max_Dur;
    }
    var duration = ((slope) * charge_timer + 60); // y-intercept of this equation is 60 seconds (one minute), the min
    if (duration < User_Pref_Max_Dur) {
        return Math.round(duration);
    }
    if (duration >= User_Pref_Max_Dur) {
        return User_Pref_Max_Dur;
    }
};
function SetDuration(charge_timer, spell) {
    var duration = Duration_V_ChargeTime(charge_timer, spell);
    var s = skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.Spell.from(spell);
    s.setNthEffectDuration(0, duration);
    return duration;
}
//---------------------------MAIN--------------------------------------------
(0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.on)('spellCast', function (event) {
    // const caster = Actor.from(event.caster.getBaseObject()) // event castor as Actor
    var castspell = skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.Form.from(event.spell); // event spell as Form
    var formlistApplied = skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.FormList.from(skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.Game.getFormFromFile(0x001D63, "Lorica Redone.esp"));
    (0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.printConsole)(formlistApplied === null || formlistApplied === void 0 ? void 0 : formlistApplied.hasForm(castspell));
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
(0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.on)('effectFinish', function (event) {
    for (var i = 0; i < (0,_skyrim_platform_papyrus_util_StorageUtil__WEBPACK_IMPORTED_MODULE_1__.FormListCount)(null, _YM_Lorica_Shared__WEBPACK_IMPORTED_MODULE_4__.suKeys.formAppliedList); i++) {
        var F = (0,_skyrim_platform_papyrus_util_StorageUtil__WEBPACK_IMPORTED_MODULE_1__.FormListGet)(null, _YM_Lorica_Shared__WEBPACK_IMPORTED_MODULE_4__.suKeys.formAppliedList, i);
        var S = skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.Spell.from(F);
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
        var formlistApplied = skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.FormList.from(skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.Game.getFormFromFile(0x001D63, "Lorica Redone.esp"));
        (0,_skyrim_platform_papyrus_util_StorageUtil__WEBPACK_IMPORTED_MODULE_1__.FormListRemove)(null, _YM_Lorica_Shared__WEBPACK_IMPORTED_MODULE_4__.suKeys.formAppliedList, spell, false); // remove form from applied spells list
        formlistApplied.removeAddedForm(spell);
        (0,_YM_Lorica_Shared__WEBPACK_IMPORTED_MODULE_4__.pl)().dispelSpell(skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.Spell.from(spell));
    };
    // printConsole("ToggleSpell:: running")
    option = option.toLowerCase();
    var spellCum = skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.Spell.from(skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.Game.getFormFromFile(0x1A33, "Lorica Redone.esp")); // the spell responsible for the Cumulative penalty
    var spellUpkeep = skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.Spell.from(skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.Game.getFormFromFile(0x1c40, "Lorica Redone.esp")); // the spell responsible for the Total Upkeep penalty
    var formlistApplied = skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.FormList.from(skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.Game.getFormFromFile(0x001D63, "Lorica Redone.esp"));
    var spellstring = (0,_skyrim_platform_po3_papyrus_extender_PO3_SKSEFunctions__WEBPACK_IMPORTED_MODULE_3__.IntToString)(spell === null || spell === void 0 ? void 0 : spell.getFormID(), true); // exclamation mark assures compiler that variable will be there
    var fMag = (0,_skyrim_platform_papyrus_util_StorageUtil__WEBPACK_IMPORTED_MODULE_1__.GetFloatValue)(null, spellstring, 0);
    var iCum = Math.floor(fMag * ((0,_skyrim_platform_papyrus_util_StorageUtil__WEBPACK_IMPORTED_MODULE_1__.GetFloatValue)(null, _YM_Lorica_Shared__WEBPACK_IMPORTED_MODULE_4__.suKeys.fCumFraction, 0.20))); // get the cumulative increase from the argument spell, rounded down
    // remove upkeep and cumulative spells for adjustment
    (0,_YM_Lorica_Shared__WEBPACK_IMPORTED_MODULE_4__.pl)().removeSpell(spellCum);
    (0,_YM_Lorica_Shared__WEBPACK_IMPORTED_MODULE_4__.pl)().removeSpell(spellUpkeep);
    // get currently equipped spells to check for dual-cast
    var equippedLeft = skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.Form.from(skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.Game.getPlayer().getEquippedSpell(0));
    var equippedRight = skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.Form.from(skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.Game.getPlayer().getEquippedSpell(1));
    var sDualCast = '';
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
                case 0: return [4 /*yield*/, skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.Utility.wait(0.1)];
                case 1:
                    _a.sent();
                    spellUpkeep = skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.Spell.from(skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.Game.getFormFromFile(0x001c40, "Lorica Redone.esp"));
                    spellCum = skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.Spell.from(skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.Game.getFormFromFile(0x001A33, "Lorica Redone.esp"));
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
/* harmony import */ var skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var skyrimPlatform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _skyrim_platform_po3_papyrus_extender_PO3_SKSEFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _skyrim_platform_papyrus_util_StorageUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);


function FormToString(akForm) {
    var formid = akForm.getFormID();
    var formstring = (0,_skyrim_platform_po3_papyrus_extender_PO3_SKSEFunctions__WEBPACK_IMPORTED_MODULE_1__.IntToString)(formid, true);
    return formstring;
}
;
function pl() {
    return skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.Game.getPlayer();
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
    skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.Debug.trace(result + msg, 0);
}
function log(message) {
    var t = new Date().toLocaleString();
    var msg = t + ' :: ' + message;
    (0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.writeLogs)("LoricaRedone", msg);
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
    skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.Ui.invokeFloat("HUD Menu", "_root.HUDMovieBaseInstance.SetExhaustionPenaltyMeter", fPercent);
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
/* harmony import */ var skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var skyrimPlatform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _skyrim_platform_po3_papyrus_extender_PO3_SKSEFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _YM_Lorica_Shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _skyrim_platform_papyrus_util_JsonUtil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var _skyrim_platform_papyrus_util_StorageUtil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2);





// this is basically our default init stuff
var mainCompat = function () {
    // --------------------------COMPATABILITY SECTION-------------------------------------------
    (0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.once)('update', function () {
        // if ( GetIntValue(null, suKeys.bCompatInitialized, 0) == 0 ) {
        var formlistUpkeep = skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.FormList.from(skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.Game.getFormFromFile(0x1D62, "Lorica Redone.esp"));
        skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.Game.setGameSettingFloat("fMagicLesserPowerCooldownTimer", 0.01); // make lesser powers spammable, to enable spamming the dispel power
        // if ( !formlistUpkeep ) { return; };
        var allspells;
        allspells = (0,_skyrim_platform_po3_papyrus_extender_PO3_SKSEFunctions__WEBPACK_IMPORTED_MODULE_1__.GetAllSpells)(null, true); // GetAllSpells(Keyword[] akKeywords = None, bool abIsPlayable = false)
        (0,_skyrim_platform_papyrus_util_StorageUtil__WEBPACK_IMPORTED_MODULE_4__.SetIntValue)(null, _YM_Lorica_Shared__WEBPACK_IMPORTED_MODULE_2__.suKeys.iCompatAllSpells, allspells.length);
        formlistUpkeep === null || formlistUpkeep === void 0 ? void 0 : formlistUpkeep.revert();
        // -----------------Add all appropriate spells to Lorica----------------------------------------------
        for (var i = 0; i < allspells.length; i++) {
            var formSpell = skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.Form.from(allspells[i]);
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
        (0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.printConsole)("Lorica Redone started");
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
    var Archetype = function (akForm) { var E = skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.Spell.from(akForm).getNthEffectMagicEffect(0); return (0,_skyrim_platform_po3_papyrus_extender_PO3_SKSEFunctions__WEBPACK_IMPORTED_MODULE_1__.GetEffectArchetypeAsInt)(E); };
    var Duration = function (akForm) { var E = skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.Spell.from(akForm).getNthEffectMagicEffect(0); return skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.Spell.from(akForm).getNthEffectDuration(0); };
    var Effect = skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.Spell.from(akForm).getNthEffectMagicEffect(0);
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
    var keywordRitual = skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.Keyword.from(skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.Game.getFormEx(0x806e1));
    var main = function (spell) {
        if (!spell) {
            return;
        }
        ;
        var iMag = 0;
        var sSpell = (0,_YM_Lorica_Shared__WEBPACK_IMPORTED_MODULE_2__.FormToString)(spell);
        var fCost = skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.Spell.from(spell).getEffectiveMagickaCost((0,_YM_Lorica_Shared__WEBPACK_IMPORTED_MODULE_2__.pl)());
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
        skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.Debug.notification("Adding or reapplying debuffs to spells");
        for (var i = 0; i < (0,_skyrim_platform_papyrus_util_JsonUtil__WEBPACK_IMPORTED_MODULE_3__.FormListCount)(_YM_Lorica_Shared__WEBPACK_IMPORTED_MODULE_2__.juKeys.path, _YM_Lorica_Shared__WEBPACK_IMPORTED_MODULE_2__.suKeys.formUpkeepList); i++) {
            var formspell = (0,_skyrim_platform_papyrus_util_JsonUtil__WEBPACK_IMPORTED_MODULE_3__.FormListGet)(_YM_Lorica_Shared__WEBPACK_IMPORTED_MODULE_2__.juKeys.path, _YM_Lorica_Shared__WEBPACK_IMPORTED_MODULE_2__.suKeys.formUpkeepList, i);
            if (!formspell || !isRightSpellType(formspell)) {
                return;
            }
            ;
            main(formspell);
        }
        ;
        skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.Debug.notification("Finished adding or reapplying debuffs to spells");
    }
    ;
    if (option == "single") {
        skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.Debug.notification("Adding or reapplying debuffs to spells");
        if (isRightSpellType(akspell)) {
            main(akspell);
        }
        ;
        skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.Debug.notification("Finished adding or reapplying debuffs to spells");
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
    var dummySelf = skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.MagicEffect.from(skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.Game.getFormFromFile(0x001C41, "Lorica Redone.esp"));
    var dummyAimed = skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.MagicEffect.from(skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.Game.getFormFromFile(0x001E53, "Lorica Redone.esp"));
    var dummyTargetLocation = skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.MagicEffect.from(skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.Game.getFormFromFile(0x001E54, "Lorica Redone.esp"));
    // longest a spell/mgef can last in skyrim; a whole day I believe, in seconds
    var longtime = 84600;
    var S = skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.Spell.from(spell);
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
    var S = skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.Spell.from(akSpell);
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
/* harmony import */ var skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var skyrimPlatform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__);
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
    (0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.on)('effectStart', function (event) {
        var _a, _b, _c, _d;
        var mgefDispel = (_a = skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.Game.getFormFromFile(0x181A, "Lorica Redone.esp")) === null || _a === void 0 ? void 0 : _a.getFormID();
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
        (0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.on)('update', function () {
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
        var mgefAddspell = (_b = skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.Game.getFormFromFile(0x001822, "Lorica Redone.esp")) === null || _b === void 0 ? void 0 : _b.getFormID();
        if (event.effect.getFormID() == mgefAddspell) {
            var left = skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.Form.from((_c = skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.Game.getPlayer()) === null || _c === void 0 ? void 0 : _c.getEquippedSpell(0));
            var right = skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.Form.from((_d = skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.Game.getPlayer()) === null || _d === void 0 ? void 0 : _d.getEquippedSpell(1));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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eEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL0xvcmljYVJlZG9uZS8uL3NyYy9Mb3JpY2FSZWRvbmUudHMiLCJ3ZWJwYWNrOi8vTG9yaWNhUmVkb25lL2V4dGVybmFsIHZhciBbXCJza3lyaW1QbGF0Zm9ybVwiXSIsIndlYnBhY2s6Ly9Mb3JpY2FSZWRvbmUvLi9ub2RlX21vZHVsZXMvQHNreXJpbS1wbGF0Zm9ybS9wYXB5cnVzLXV0aWwvU3RvcmFnZVV0aWwuanMiLCJ3ZWJwYWNrOi8vTG9yaWNhUmVkb25lLy4vbm9kZV9tb2R1bGVzL0Bza3lyaW0tcGxhdGZvcm0vcGFweXJ1cy11dGlsL0pzb25VdGlsLmpzIiwid2VicGFjazovL0xvcmljYVJlZG9uZS8uL25vZGVfbW9kdWxlcy9Ac2t5cmltLXBsYXRmb3JtL3BvMy1wYXB5cnVzLWV4dGVuZGVyL1BPM19TS1NFRnVuY3Rpb25zLmpzIiwid2VicGFjazovL0xvcmljYVJlZG9uZS8uL3NyYy9ZTV9Mb3JpY2FfU2hhcmVkLnRzIiwid2VicGFjazovL0xvcmljYVJlZG9uZS8uL3NyYy9ZTV9Mb3JpY2FfQ29tcGF0LnRzIiwid2VicGFjazovL0xvcmljYVJlZG9uZS8uL3NyYy9ZTV9Mb3JpY2FfVXRpbGl0eVNwZWxscy50cyIsIndlYnBhY2s6Ly9Mb3JpY2FSZWRvbmUvLi9zcmMvWU1fTG9yaWNhX01DTS50cyIsIndlYnBhY2s6Ly9Mb3JpY2FSZWRvbmUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vTG9yaWNhUmVkb25lL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL0xvcmljYVJlZG9uZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vTG9yaWNhUmVkb25lL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vTG9yaWNhUmVkb25lL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vTG9yaWNhUmVkb25lL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vTG9yaWNhUmVkb25lL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9Mb3JpY2FSZWRvbmUvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59O1xyXG5pbXBvcnQgeyBvbiwgcHJpbnRDb25zb2xlLCBGb3JtLCBHYW1lLCBTcGVsbCwgRGVidWcsIFV0aWxpdHksIGhvb2tzLCBvbmNlLCBGb3JtTGlzdCwgYnJvd3NlciwgY3JlYXRlVGV4dCwgc2V0VGV4dFN0cmluZywgZ2V0TnVtQ3JlYXRlZFRleHRzLCBzZXRUZXh0Q29sb3IsIGdldFRleHRDb2xvciwgZGVzdHJveVRleHQgfSBmcm9tIFwic2t5cmltUGxhdGZvcm1cIjtcclxuaW1wb3J0IHsgU2V0SW50VmFsdWUsIEdldEludFZhbHVlLCBGb3JtTGlzdEhhcywgR2V0RmxvYXRWYWx1ZSwgRm9ybUxpc3RBZGQsIFVuc2V0SW50VmFsdWUsIEFkanVzdEludFZhbHVlLCBGb3JtTGlzdENvdW50LCBGb3JtTGlzdFJlbW92ZSwgRm9ybUxpc3RHZXQsIEludExpc3RBZGQsIEludExpc3RUb0FycmF5LCBJbnRMaXN0Q2xlYXIsIEludExpc3RDb3VudCB9IGZyb20gXCJAc2t5cmltLXBsYXRmb3JtL3BhcHlydXMtdXRpbC9TdG9yYWdlVXRpbFwiO1xyXG5pbXBvcnQgeyBGb3JtTGlzdEhhcyBhcyBVcGtlZXBMaXN0SGFzIH0gZnJvbSBcIkBza3lyaW0tcGxhdGZvcm0vcGFweXJ1cy11dGlsL0pzb25VdGlsXCI7XHJcbmltcG9ydCB7IEludFRvU3RyaW5nLCBIYXNBY3RpdmVTcGVsbCwgR2V0QWxsU3BlbGxzLCBHaXZlUGxheWVyU3BlbGxCb29rIH0gZnJvbSBcIkBza3lyaW0tcGxhdGZvcm0vcG8zLXBhcHlydXMtZXh0ZW5kZXIvUE8zX1NLU0VGdW5jdGlvbnNcIjtcclxuaW1wb3J0IHsgcGwsIGp1S2V5cywgc3VLZXlzLCBVSVVwZGF0ZURlYnVmZk1ldGVyIH0gZnJvbSBcIi4vWU1fTG9yaWNhX1NoYXJlZFwiO1xyXG5pbXBvcnQgeyBtYWluQ29tcGF0IH0gZnJvbSBcIi4vWU1fTG9yaWNhX0NvbXBhdFwiO1xyXG5pbXBvcnQgeyBtYWluVXRpbGl0eVNwZWxscyB9IGZyb20gXCIuL1lNX0xvcmljYV9VdGlsaXR5U3BlbGxzXCI7XHJcbmltcG9ydCB7IG1haW5NQ00gfSBmcm9tIFwiLi9ZTV9Mb3JpY2FfTUNNXCI7XHJcbm1haW5NQ00oKTtcclxubWFpblV0aWxpdHlTcGVsbHMoKTtcclxudmFyIGJDaGFyZ2luZyA9IDE7XHJcbmJyb3dzZXIuc2V0VmlzaWJsZSh0cnVlKTtcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVRFWFRTLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxudmFyIENyZWF0ZVRleHQgPSBmdW5jdGlvbiAodGV4dCwgeHBvcywgeXBvcykge1xyXG4gICAgdmFyIHRleHRfaWQgPSBjcmVhdGVUZXh0KHhwb3MsIHlwb3MsIHRleHQsIFswLCAwLjUsIDEsIDFdKTtcclxuICAgIC8vIENyZWF0ZSB0ZXh0IHdpdGggaWRlbnRpZnlpbmcgaGFuZFxyXG4gICAgU2V0SW50VmFsdWUobnVsbCwgJy5Mb3JpY2FSZWRvbmUud2lkZ2V0cy5jaGFyZ2luZy4nICsgdGV4dCArICcuaWQnLCB0ZXh0X2lkKTtcclxuICAgIEludExpc3RBZGQobnVsbCwgJy5za3lyaW1QbGF0Zm9ybS50ZXh0cy4nLCB0ZXh0X2lkKTtcclxufTtcclxuLy8gRW5zdXJlcyBubyBkdXBsaWNhdGUgd2lkZ2V0cyBnZXQgY3JlYXRlZFxyXG52YXIgRGVzdHJveUxvcmljYVRleHRzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGMgPSBnZXROdW1DcmVhdGVkVGV4dHMoKTtcclxuICAgIGlmIChJbnRMaXN0Q291bnQobnVsbCwgJy5za3lyaW1QbGF0Zm9ybS50ZXh0cy4nKSA9PSAwIHx8IGdldE51bUNyZWF0ZWRUZXh0cygpID09IDApIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB2YXIgYWxsdGV4dHMgPSBJbnRMaXN0VG9BcnJheShudWxsLCAnLnNreXJpbVBsYXRmb3JtLnRleHRzLicpO1xyXG4gICAgYWxsdGV4dHMuZm9yRWFjaChmdW5jdGlvbiAoaWQpIHtcclxuICAgICAgICBkZXN0cm95VGV4dChpZCk7XHJcbiAgICB9KTtcclxuICAgIEludExpc3RDbGVhcihudWxsLCAnLnNreXJpbVBsYXRmb3JtLnRleHRzLicpO1xyXG59O1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUNPTVBBVElCSUxJVFkgU0VDVElPTi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG52YXIgc3BlbGxDb21wYXRDaGVjayA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBhbGxzcGVsbHM7XHJcbiAgICBhbGxzcGVsbHMgPSBHZXRBbGxTcGVsbHMobnVsbCwgdHJ1ZSk7XHJcbiAgICBpZiAoR2V0SW50VmFsdWUobnVsbCwgc3VLZXlzLmlDb21wYXRBbGxTcGVsbHMpICE9IGFsbHNwZWxscy5sZW5ndGggJiYgIUdldEludFZhbHVlKG51bGwsIHN1S2V5cy5iQ29tcGF0SW5pdGlhbGl6ZWQpKSB7XHJcbiAgICAgICAgbWFpbkNvbXBhdCgpO1xyXG4gICAgfVxyXG4gICAgO1xyXG59O1xyXG5vbignbG9hZEdhbWUnLCBmdW5jdGlvbiAoKSB7IHByaW50Q29uc29sZSgnbG9hZGdhbWUnKTsgc3BlbGxDb21wYXRDaGVjaygpOyB9KTtcclxub24oJ25ld0dhbWUnLCBmdW5jdGlvbiAoKSB7IHByaW50Q29uc29sZSgnbmV3Z2FtZScpOyBzcGVsbENvbXBhdENoZWNrKCk7IH0pO1xyXG5vbmNlKCdza3lyaW1Mb2FkZWQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBwcmludENvbnNvbGUoJ3NreXJpbUxvYWRlZCcpO1xyXG4gICAgLy8gbGV0IGNoYXJnZV9pbmRpY2F0b3I6bnVtYmVyID0gY3JlYXRlVGV4dCgxMDAsIDEwMCwgJ3Rlc3QnLCBbMCwwLjUsMSwxXSlcclxuICAgIC8vIFNldEludFZhbHVlKG51bGwsICcuTG9yaWNhUmVkb25lLndpZGdldHMuY2hhcmdpbmcuaWQnLCBjaGFyZ2VfaW5kaWNhdG9yKVxyXG59KTtcclxub25jZSgnc2NyaXB0SW5pdCcsIGZ1bmN0aW9uICgpIHsgc3BlbGxDb21wYXRDaGVjaygpOyB9KTtcclxub25jZSgndXBkYXRlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gaWYgKCAhR2V0SW50VmFsdWUobnVsbCwgc3VLZXlzLmJDb21wYXRJbml0aWFsaXplZCkgKSB7IHJldHVybjt9XHJcbiAgICBHaXZlUGxheWVyU3BlbGxCb29rKCk7IC8vIGRlYnVnIG9wdGlvblxyXG4gICAgbWFpbkNvbXBhdCgpO1xyXG4gICAgLy8gc3BlbGxDb21wYXRDaGVjaygpXHJcbiAgICBEZXN0cm95TG9yaWNhVGV4dHMoKTtcclxuICAgIENyZWF0ZVRleHQoJ3JpZ2h0JywgMjAwMCwgMTAwMCk7XHJcbiAgICBDcmVhdGVUZXh0KCdsZWZ0JywgMTAwMCwgMTAwMCk7XHJcbiAgICBiQ2hhcmdpbmcgPSBHZXRJbnRWYWx1ZShudWxsLCBzdUtleXMuYkNoYXJnaW5nRW5hYmxlLCAxKTtcclxufSk7XHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tRFVBTCBDQVNUIENIRUNLLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBob29rIGludG8gZHVhbCBjYXN0IG1hZ2ljIGFuaW1hdGlvbiB0byBkb3VibHkgY2hlY2sgaWYgc3BlbGwgd2FzIGR1YWwgY2FzdCBbY2hlY2tdXHJcbi8vIGdldEVxdWlwcGVkU3BlbGwoMCkgPT0gbGVmdCBoYW5kXHJcbi8vIGdldEVxdWlwcGVkU3BlbGwoMSkgPT0gcmlnaHQgaGFuZFxyXG52YXIgYkR1YWxDYXN0ID0gZmFsc2U7XHJcbnZhciBiVXBrZWVwQ2FzdEwgPSBmYWxzZTtcclxudmFyIGJVcGtlZXBDYXN0UiA9IGZhbHNlO1xyXG52YXIgZkNoYXJnZVRpbWVyUiA9IDA7XHJcbnZhciBmQ2hhcmdlVGltZXJMID0gMDtcclxudmFyIFNwZWxsZHVyYXRpb24gPSAwO1xyXG5ob29rcy5zZW5kQW5pbWF0aW9uRXZlbnQuYWRkKHtcclxuICAgIGVudGVyOiBmdW5jdGlvbiAoY3R4KSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB2YXIgYW5pbUV2ZW50ID0gY3R4LmFuaW1FdmVudE5hbWUudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAvLyBwcmludENvbnNvbGUoYW5pbUV2ZW50KTtcclxuICAgICAgICBpZiAoYW5pbUV2ZW50LmluY2x1ZGVzKFwiZHVhbG1hZ2ljXCIpKSB7XHJcbiAgICAgICAgICAgIG9uY2UoJ3VwZGF0ZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBlcXVpcHBlZFJpZ2h0ID0gRm9ybS5mcm9tKEdhbWUuZ2V0UGxheWVyKCkuZ2V0RXF1aXBwZWRTcGVsbCgxKSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWVxdWlwcGVkUmlnaHQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICB2YXIgc0R1YWxDYXN0ID0gXCJMb3JpY2FSZWRvbmVcIiArIGVxdWlwcGVkUmlnaHQuZ2V0TmFtZSgpICsgXCJEdWFsQ2FzdFwiO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFlcXVpcHBlZFJpZ2h0IHx8ICFzRHVhbENhc3QpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICBpZiAoYkR1YWxDYXN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgU2V0SW50VmFsdWUobnVsbCwgc0R1YWxDYXN0LCAxKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBwcmludENvbnNvbGUoJ3NlbmRBbmltYXRpb25FdmVudDo6IGR1YWwgY2FzdCBjaGVjazogJyArIEdldEludFZhbHVlKG51bGwsIHNEdWFsQ2FzdCwgMCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLWNhc3QgY2hhcmdlIHN0dWZmLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgIHZhciBpc0luV3JvbmdMaXN0cyA9IGZ1bmN0aW9uIChzcGVsbCkge1xyXG4gICAgICAgICAgICBpZiAoIVVwa2VlcExpc3RIYXMoanVLZXlzLnBhdGgsIHN1S2V5cy5mb3JtVXBrZWVwTGlzdCwgc3BlbGwpIHx8IEZvcm1MaXN0SGFzKG51bGwsIHN1S2V5cy5mb3JtQXBwbGllZExpc3QsIHNwZWxsKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHZhciBXaWRnZXRIYW5kU2V0ID0gZnVuY3Rpb24gKGR1cmF0aW9uLCBoYW5kKSB7XHJcbiAgICAgICAgICAgIGhhbmQgPSBoYW5kLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICAgIHZhciB3aWRnZXQgPSBHZXRJbnRWYWx1ZShudWxsLCBcIi5Mb3JpY2FSZWRvbmUud2lkZ2V0cy5jaGFyZ2luZy5cIi5jb25jYXQoaGFuZCwgXCIuaWRcIikpO1xyXG4gICAgICAgICAgICB2YXIgbWF4ID0gR2V0SW50VmFsdWUobnVsbCwgc3VLZXlzLmlDaGFyZ2VNYXhEdXJhdGlvbiwgNjAwKSAqIDYwIC8gMTAwO1xyXG4gICAgICAgICAgICBzZXRUZXh0Q29sb3Iod2lkZ2V0LCBbMCwgMC41LCAxLCAxXSk7XHJcbiAgICAgICAgICAgIHNldFRleHRTdHJpbmcod2lkZ2V0LCBcIlwiLmNvbmNhdChNYXRoLnJvdW5kKGR1cmF0aW9uIC8gbWF4KSwgXCIlXCIpKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChiQ2hhcmdpbmcgPT0gMSkge1xyXG4gICAgICAgICAgICBpZiAoYW5pbUV2ZW50LmluY2x1ZGVzKFwic3BlbGxyZWFkeVwiKSkge1xyXG4gICAgICAgICAgICAgICAgb25jZSgndXBkYXRlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBlcXVpcHBlZExlZnQgPSBGb3JtLmZyb20oR2FtZS5nZXRQbGF5ZXIoKS5nZXRFcXVpcHBlZFNwZWxsKDApKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZXF1aXBwZWRSaWdodCA9IEZvcm0uZnJvbShHYW1lLmdldFBsYXllcigpLmdldEVxdWlwcGVkU3BlbGwoMSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhbmltRXZlbnQuaW5jbHVkZXMoJ21saCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZDaGFyZ2VUaW1lckwgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiVXBrZWVwQ2FzdEwgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmludENvbnNvbGUoYW5pbUV2ZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzSW5Xcm9uZ0xpc3RzKGVxdWlwcGVkTGVmdCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJVcGtlZXBDYXN0TCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZkNoYXJnZVRpbWVyTCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb24oJ3VwZGF0ZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChiVXBrZWVwQ2FzdEwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdyA9IGZ1bmN0aW9uIChkdXJhdGlvbikgeyByZXR1cm4gX19hd2FpdGVyKF90aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCBVdGlsaXR5LndhaXQoMC41KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBEZWJ1Zy5ub3RpZmljYXRpb24oJ1NwZWxsIGlzIGNoYXJnaW5nIScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRGVidWcubm90aWZpY2F0aW9uKCdTcGVsbCBpcyBjaGFyZ2luZyEnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmQ2hhcmdlVGltZXJMKys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7IH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVxdWlwcGVkTGVmdF8xID0gRm9ybS5mcm9tKEdhbWUuZ2V0UGxheWVyKCkuZ2V0RXF1aXBwZWRTcGVsbCgwKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3BlbGxkdXJhdGlvbiA9IFNldER1cmF0aW9uKGZDaGFyZ2VUaW1lckwsIGVxdWlwcGVkTGVmdF8xKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBXaWRnZXRIYW5kU2V0KFNwZWxsZHVyYXRpb24sICdsZWZ0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdyhTcGVsbGR1cmF0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoKGZDaGFyZ2VUaW1lckwgLyA2MCkgPiAzMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYlVwa2VlcENhc3RMID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZDaGFyZ2VUaW1lckwgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhbmltRXZlbnQuaW5jbHVkZXMoJ21yaCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZDaGFyZ2VUaW1lclIgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiVXBrZWVwQ2FzdFIgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNJbldyb25nTGlzdHMoZXF1aXBwZWRSaWdodCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJVcGtlZXBDYXN0UiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZkNoYXJnZVRpbWVyUiA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb24oJ3VwZGF0ZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChiVXBrZWVwQ2FzdFIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdyA9IGZ1bmN0aW9uIChkdXJhdGlvbikgeyByZXR1cm4gX19hd2FpdGVyKF90aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCBVdGlsaXR5LndhaXQoMC41KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBEZWJ1Zy5ub3RpZmljYXRpb24oJ1NwZWxsIGlzIGNoYXJnaW5nIScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRGVidWcubm90aWZpY2F0aW9uKCdTcGVsbCBpcyBjaGFyZ2luZyEnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmQ2hhcmdlVGltZXJSKys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7IH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVxdWlwcGVkUmlnaHRfMSA9IEZvcm0uZnJvbShHYW1lLmdldFBsYXllcigpLmdldEVxdWlwcGVkU3BlbGwoMSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNwZWxsZHVyYXRpb24gPSBTZXREdXJhdGlvbihmQ2hhcmdlVGltZXJSLCBlcXVpcHBlZFJpZ2h0XzEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdpZGdldEhhbmRTZXQoU3BlbGxkdXJhdGlvbiwgJ3JpZ2h0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdyhTcGVsbGR1cmF0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoKGZDaGFyZ2VUaW1lclIgLyA2MCkgPiAzMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYlVwa2VlcENhc3RSID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZDaGFyZ2VUaW1lclIgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGFuaW1FdmVudC5pbmNsdWRlcyhcInNwZWxscmVsZWFzZVwiKSB8fCBhbmltRXZlbnQuaW5jbHVkZXMoJ2VxdWlwcGVkX2V2ZW50JykgfHwgYW5pbUV2ZW50LmluY2x1ZGVzKCd1bmVxdWlwJykpIHtcclxuICAgICAgICAgICAgICAgIGJVcGtlZXBDYXN0TCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYlVwa2VlcENhc3RSID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBmQ2hhcmdlVGltZXJMID0gMDtcclxuICAgICAgICAgICAgICAgIGZDaGFyZ2VUaW1lclIgPSAwO1xyXG4gICAgICAgICAgICAgICAgb25jZSgndXBkYXRlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB3ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gX19hd2FpdGVyKF90aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbHdpZGdldCwgcndpZGdldCwgY29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIFV0aWxpdHkud2FpdCgyLjApXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbHdpZGdldCA9IEdldEludFZhbHVlKG51bGwsICcuTG9yaWNhUmVkb25lLndpZGdldHMuY2hhcmdpbmcubGVmdC5pZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByd2lkZ2V0ID0gR2V0SW50VmFsdWUobnVsbCwgJy5Mb3JpY2FSZWRvbmUud2lkZ2V0cy5jaGFyZ2luZy5yaWdodC5pZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvciA9IGdldFRleHRDb2xvcihyd2lkZ2V0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JbM10gPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUZXh0Q29sb3IobHdpZGdldCwgY29sb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUZXh0Q29sb3IocndpZGdldCwgY29sb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pOyB9O1xyXG4gICAgICAgICAgICAgICAgICAgIHcoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGlmIChhbmltRXZlbnQuaW5jbHVkZXMoXCJzcGVsbHJlbGVhc2VcIikgKSB7IFxyXG4gICAgICAgICAgICAvLyBcdG9uY2UoJ3VwZGF0ZScsICgpID0+IHtcclxuICAgICAgICAgICAgLy8gXHRcdGxldCBsZWZ0ID0gRm9ybS5mcm9tKEdhbWUuZ2V0UGxheWVyKCkuZ2V0RXF1aXBwZWRTcGVsbCgwKSk7IFxyXG4gICAgICAgICAgICAvLyBcdFx0bGV0IHJpZ2h0ID0gRm9ybS5mcm9tKEdhbWUuZ2V0UGxheWVyKCkuZ2V0RXF1aXBwZWRTcGVsbCgxKSk7XHJcbiAgICAgICAgICAgIC8vIFx0XHRpZiAoIGFuaW1FdmVudC5pbmNsdWRlcygnbXJoJykgJiYgIWlzSW5Xcm9uZ0xpc3RzKHJpZ2h0KSApIHtcclxuICAgICAgICAgICAgLy8gXHRcdH1cclxuICAgICAgICAgICAgLy8gXHRcdC8vIGlmICggYW5pbUV2ZW50LmluY2x1ZGVzKCdtbGgnKSAmJiAhaXNJbldyb25nTGlzdHMobGVmdCkpIHtNZXNzYWdlRHVyYXRpb25SZXN1bHQoU3BlbGxkdXJhdGlvbil9XHJcbiAgICAgICAgICAgIC8vIFx0fSlcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBsZWF2ZTogZnVuY3Rpb24gKGN0eCkgeyB9XHJcbn0sIDB4MTQsIDB4MTQpOyAvLyBmaWx0ZXIgb3V0IG5vbi1wbGF5ZXIgZXZlbnRzXHJcbmZ1bmN0aW9uIE1lc3NhZ2VEdXJhdGlvblJlc3VsdChkdXJhdGlvbikge1xyXG4gICAgZHVyYXRpb24gLz0gNjA7XHJcbiAgICBkdXJhdGlvbiA9IE1hdGguZmxvb3IoZHVyYXRpb24pO1xyXG4gICAgLy8gaWYgKCBkdXJhdGlvbiA+IDAgJiYgZHVyYXRpb24gPCA3ICkgeyB9XHJcbiAgICAvLyBjb25zdCB3ID1hc3luYyAoKSA9PiB7XHJcbiAgICAvLyBcdGF3YWl0IFV0aWxpdHkud2FpdCgwLjIpXHJcbiAgICAvLyBcdERlYnVnLm5vdGlmaWNhdGlvbihgU3BlbGwgaGFzIGJlZW4gY2hhcmdlZCBlbm91Z2ggdG8gbGFzdCAke2R1cmF0aW9ufSBtaW51dGVzIWApIFxyXG4gICAgLy8gfVxyXG4gICAgLy8gdygpXHJcbiAgICB2YXIgd2lkZ2V0ID0gR2V0SW50VmFsdWUobnVsbCwgJy5Mb3JpY2FSZWRvbmUud2lkZ2V0cy5jaGFyZ2luZy5pZCcpO1xyXG4gICAgaWYgKHdpZGdldCA9PSAwKSB7XHJcbiAgICAgICAgRGVidWcubm90aWZpY2F0aW9uKFwiV2lkZ2V0IEZhaWxlZCFcXG5FUlJPUiA0MDM6IG5vIHdpZGdldCBjcmVhdGVkXFxuQXR0ZW1wdGluZyB0byByZWNyZWF0ZSB3aWRnZXRcIik7XHJcbiAgICAgICAgb25jZSgndXBkYXRlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgY2hhcmdlX2luZGljYXRvciA9IGNyZWF0ZVRleHQoMTAwLCAxMDAsICd0ZXN0JywgWzAsIDAuNSwgMSwgMV0pO1xyXG4gICAgICAgICAgICBTZXRJbnRWYWx1ZShudWxsLCAnLkxvcmljYVJlZG9uZS53aWRnZXRzLmNoYXJnaW5nLmlkJywgY2hhcmdlX2luZGljYXRvcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBzZXRUZXh0U3RyaW5nKHdpZGdldCwgXCIwXCIpO1xyXG59XHJcbnZhciBDaGFyZ2VUaW1lX1ZfQ29zdF9FcXVhdGlvbiA9IGZ1bmN0aW9uIChzcGVsbCkge1xyXG4gICAgLy8gZXF1YXRpb24gKCBjaGFyZ2VfdGltZSBpcyBzZWNvbmRzIHNwZWxsIG5lZWRzIHRvIGJlIGNoYXJnZWQgdG8gcmVhY2ggbWF4IHNwZWxsIGR1cmF0aW9uIGluIG1pbnV0ZXMgKVxyXG4gICAgLy8gXHRcdFx0XHQge1x0KDEvOSkqaUNoYXJnZUNvc3RTb2x1dGlvbiAtIGljaGFyZ2VDb3N0U29sdXRpb25cdFx0MCA8PSB4IDw9IGlDaGFyZ2VDb3N0QXN5bXB0b3RlXHJcbiAgICAvLyBjaGFyZ2VfdGltZSA9IHxcdFxyXG4gICAgLy8gXHRcdFx0XHQge1x0aUNoYXJnZUR1cmF0aW9uVXBwZXJCb3VuZFx0XHRcdFx0eCA+PSBpQ2hhcmdlQ29zdEFzeW1wdG90ZVxyXG4gICAgdmFyIFVzZXJfUHJlZl9Tb2x1dGlvbiA9IEdldEludFZhbHVlKG51bGwsIHN1S2V5cy5pQ2hhcmdlQ29zdFNvbHV0aW9uLCAyMCk7XHJcbiAgICB2YXIgVXNlcl9QcmVmX1VwcGVyX0JvdW5kID0gR2V0SW50VmFsdWUobnVsbCwgc3VLZXlzLmlDaGFyZ2VEdXJhdGlvblVwcGVyQm91bmQsIDEwKTtcclxuICAgIHZhciBVc2VyX1ByZWZfQ29zdF9Bc3ltcHRvdGUgPSBHZXRJbnRWYWx1ZShudWxsLCBzdUtleXMuaUNoYXJnZUNvc3RBc3ltcHRvdGUsIDEwMCk7XHJcbiAgICB2YXIgZkNvc3QgPSBTcGVsbC5mcm9tKHNwZWxsKS5nZXRFZmZlY3RpdmVNYWdpY2thQ29zdChwbCgpKTtcclxuICAgIHZhciBjaGFyZ2VfdGltZSA9IDA7XHJcbiAgICB2YXIgc29sdXRpb24gPSBVc2VyX1ByZWZfU29sdXRpb247IC8vIHNvbHV0aW9uIHRvIHRoZSBmaXJzdCBwYXJ0IG9mIHRoZSBzdGVwIGZ1bmN0aW9uLCB0aGlzICdmQ29zdCArIDQwKioyJyBpcyBvZiBjb3Vyc2UgLTQwLiBBIHNwZWxsIGNvc3RpbmcgNDAgb3IgYmVsb3cgaGFzIHRvIGNoYXJnZVxyXG4gICAgdmFyIHVwcGVyX3N0ZXAgPSBVc2VyX1ByZWZfVXBwZXJfQm91bmQ7XHJcbiAgICB2YXIgc2xvcGUgPSAoVXNlcl9QcmVmX1VwcGVyX0JvdW5kKSAvIChVc2VyX1ByZWZfQ29zdF9Bc3ltcHRvdGUgLSBzb2x1dGlvbik7XHJcbiAgICBwcmludENvbnNvbGUoXCJ0aGUgc2xvcGUgaXMgXCIuY29uY2F0KHNsb3BlKSk7XHJcbiAgICBpZiAoZkNvc3QgPj0gMCAmJiBmQ29zdCA8IFVzZXJfUHJlZl9Db3N0X0FzeW1wdG90ZSkge1xyXG4gICAgICAgIGNoYXJnZV90aW1lID0gc2xvcGUgKiBmQ29zdCAtIHNvbHV0aW9uO1xyXG4gICAgfVxyXG4gICAgaWYgKGZDb3N0IDw9IHNvbHV0aW9uIHx8IHVwcGVyX3N0ZXAgPT0gMCkge1xyXG4gICAgICAgIGNoYXJnZV90aW1lID0gMDtcclxuICAgICAgICByZXR1cm4gY2hhcmdlX3RpbWU7XHJcbiAgICB9IC8vIGZpcnN0IHN0ZXAgZnVuY3Rpb24gdG8gYm91bmQgc3lzdGVtIHRvIGNvbnN0YW50IG1pbiB5IGkuZS4gbGVzcyB0aGFuIHlvdXIgbWluIGNvc3QgY2hhcmdlX3RpbWUgPSAwXHJcbiAgICBpZiAoZkNvc3QgPj0gVXNlcl9QcmVmX0Nvc3RfQXN5bXB0b3RlKSB7XHJcbiAgICAgICAgY2hhcmdlX3RpbWUgPSB1cHBlcl9zdGVwO1xyXG4gICAgfSAvLyB0aGUgbWF4IGFueSBzcGVsbCBzaG91bGQgY2hhcmdlIGlzIDEwIHNlY29uZHM7IHNlY29uZCBzdGVwIGZ1bmN0aW9uIHRvIGJvdW5kIHRoZSBzeXN0ZW0gdG8gc29tZSBjb25zdGFudCB5XHJcbiAgICByZXR1cm4gTWF0aC5jZWlsKGNoYXJnZV90aW1lKTtcclxufTtcclxudmFyIER1cmF0aW9uX1ZfQ2hhcmdlVGltZSA9IGZ1bmN0aW9uIChjaGFyZ2VfdGltZXIsIHNwZWxsKSB7XHJcbiAgICAvLyBlcXVhdGlvblxyXG4gICAgLy8gZHVyYXRpb24gaXMgaW4gbWludXRlcywgYW5kIGlzIGNvbnZlcnRlZCB0byBzZWNvbmRzXHJcbiAgICAvLyBkdXJhdGlvbiA9ICgxMDgpKmNoYXJnZV90aW1lICsgMVx0XHQwIDw9IGNoYXJnZV90aW1lIDw9IDUgbWludXRlc1xyXG4gICAgLy8gZHVyYXRpb24gPSAxMFx0XHRcdFx0XHRcdGNoYXJnZV90aW1lID49IDUgbWludXRlc1xyXG4gICAgLy8gaW5wdXQgY2hhcmdlX3RpbWVyICggaW4gc2Vjb25kcykgc2hvdWxkIGJlIHRoZSBjaGFyZ2UgdGltZXIgaW4gdGhlIGxvb3AsIE5PVCB0aGUgY2FsY3VsYXRlZCBudW1iZXIgZnJvbSB0aGUgZXF1YXRpb24gQ2hhcmdlVGltZV9WX0Nvc3RfRXF1YXRpb25cclxuICAgIHZhciBVc2VyX1ByZWZfTWF4X0R1ciA9IEdldEludFZhbHVlKG51bGwsIHN1S2V5cy5pQ2hhcmdlTWF4RHVyYXRpb24sIDYwMCkgKiA2MDsgLy8gbXVsdC4gYnkgNjAgdG8gY29udmVydCBtaW51dGVzIHRvIHNlY29uZHNcclxuICAgIHZhciBVc2VyX1ByZWZfVXBwZXJfQm91bmQgPSBHZXRJbnRWYWx1ZShudWxsLCBzdUtleXMuaUNoYXJnZUR1cmF0aW9uVXBwZXJCb3VuZCwgMTApO1xyXG4gICAgdmFyIHNsb3BlID0gKFVzZXJfUHJlZl9NYXhfRHVyIC0gNjApIC8gVXNlcl9QcmVmX1VwcGVyX0JvdW5kOyAvLyBzdWJ0cmFjdCBieSA2MCBzaW5jZSB0aGUgbG93ZXN0IGR1cmF0aW9uIGFsbG93ZWQgaXMgNjAgc2Vjb25kcyAob25lIG1pbnV0ZSlcclxuICAgIHZhciBjaGFyZ2VfY2FsY3VsYXRlZCA9IENoYXJnZVRpbWVfVl9Db3N0X0VxdWF0aW9uKHNwZWxsKTtcclxuICAgIGNoYXJnZV90aW1lciAvPSA2MDsgLy8gZGl2aWRlIGJ5IDYwIGFzIHRoZSB0aW1lciBpbmNyZW1lbnRzIDYwIHRpbWVzIGEgc2Vjb25kXHJcbiAgICBpZiAoY2hhcmdlX3RpbWVyID49IGNoYXJnZV9jYWxjdWxhdGVkKSB7XHJcbiAgICAgICAgcmV0dXJuIFVzZXJfUHJlZl9NYXhfRHVyO1xyXG4gICAgfVxyXG4gICAgdmFyIGR1cmF0aW9uID0gKChzbG9wZSkgKiBjaGFyZ2VfdGltZXIgKyA2MCk7IC8vIHktaW50ZXJjZXB0IG9mIHRoaXMgZXF1YXRpb24gaXMgNjAgc2Vjb25kcyAob25lIG1pbnV0ZSksIHRoZSBtaW5cclxuICAgIGlmIChkdXJhdGlvbiA8IFVzZXJfUHJlZl9NYXhfRHVyKSB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQoZHVyYXRpb24pO1xyXG4gICAgfVxyXG4gICAgaWYgKGR1cmF0aW9uID49IFVzZXJfUHJlZl9NYXhfRHVyKSB7XHJcbiAgICAgICAgcmV0dXJuIFVzZXJfUHJlZl9NYXhfRHVyO1xyXG4gICAgfVxyXG59O1xyXG5mdW5jdGlvbiBTZXREdXJhdGlvbihjaGFyZ2VfdGltZXIsIHNwZWxsKSB7XHJcbiAgICB2YXIgZHVyYXRpb24gPSBEdXJhdGlvbl9WX0NoYXJnZVRpbWUoY2hhcmdlX3RpbWVyLCBzcGVsbCk7XHJcbiAgICB2YXIgcyA9IFNwZWxsLmZyb20oc3BlbGwpO1xyXG4gICAgcy5zZXROdGhFZmZlY3REdXJhdGlvbigwLCBkdXJhdGlvbik7XHJcbiAgICByZXR1cm4gZHVyYXRpb247XHJcbn1cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1NQUlOLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxub24oJ3NwZWxsQ2FzdCcsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgLy8gY29uc3QgY2FzdGVyID0gQWN0b3IuZnJvbShldmVudC5jYXN0ZXIuZ2V0QmFzZU9iamVjdCgpKSAvLyBldmVudCBjYXN0b3IgYXMgQWN0b3JcclxuICAgIHZhciBjYXN0c3BlbGwgPSBGb3JtLmZyb20oZXZlbnQuc3BlbGwpOyAvLyBldmVudCBzcGVsbCBhcyBGb3JtXHJcbiAgICB2YXIgZm9ybWxpc3RBcHBsaWVkID0gRm9ybUxpc3QuZnJvbShHYW1lLmdldEZvcm1Gcm9tRmlsZSgweDAwMUQ2MywgXCJMb3JpY2EgUmVkb25lLmVzcFwiKSk7XHJcbiAgICBwcmludENvbnNvbGUoZm9ybWxpc3RBcHBsaWVkID09PSBudWxsIHx8IGZvcm1saXN0QXBwbGllZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogZm9ybWxpc3RBcHBsaWVkLmhhc0Zvcm0oY2FzdHNwZWxsKSk7XHJcbiAgICAvLyBwcmludENvbnNvbGUoYEFwcGxpZWRMaXN0IEhhcyA9PiAke0Zvcm1MaXN0SGFzKG51bGwsIHN1S2V5cy5mb3JtQXBwbGllZExpc3QsIGNhc3RzcGVsbCl9YClcclxuICAgIGlmICghY2FzdHNwZWxsKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgO1xyXG4gICAgLy8gaWYgdGhlIHNwZWxsIGlzIGluIHRoZSBibGFja2xpc3Qgb3IgaXNuJ3QgaW4gdGhlIHVwa2VlcCBsaXN0LCBqdXN0IHN0b3BcclxuICAgIGlmIChVcGtlZXBMaXN0SGFzKGp1S2V5cy5wYXRoLCBzdUtleXMuZm9ybUJsYWNrTGlzdCwgY2FzdHNwZWxsKSB8fCAhVXBrZWVwTGlzdEhhcyhqdUtleXMucGF0aCwgc3VLZXlzLmZvcm1VcGtlZXBMaXN0LCBjYXN0c3BlbGwpKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgO1xyXG4gICAgLy8gbWFpbiB0b2dnbGUgaWYtYmxvY2tcclxuICAgIGlmICghRm9ybUxpc3RIYXMobnVsbCwgc3VLZXlzLmZvcm1BcHBsaWVkTGlzdCwgY2FzdHNwZWxsKSkge1xyXG4gICAgICAgIFRvZ2dsZVNwZWxsKCdvbicsIGNhc3RzcGVsbCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBUb2dnbGVTcGVsbCgnb2ZmJywgY2FzdHNwZWxsKTtcclxuICAgIH1cclxuICAgIDtcclxufSk7XHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1DTEVBTlVQLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbm9uKCdlZmZlY3RGaW5pc2gnLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgRm9ybUxpc3RDb3VudChudWxsLCBzdUtleXMuZm9ybUFwcGxpZWRMaXN0KTsgaSsrKSB7XHJcbiAgICAgICAgdmFyIEYgPSBGb3JtTGlzdEdldChudWxsLCBzdUtleXMuZm9ybUFwcGxpZWRMaXN0LCBpKTtcclxuICAgICAgICB2YXIgUyA9IFNwZWxsLmZyb20oRik7XHJcbiAgICAgICAgaWYgKCFIYXNBY3RpdmVTcGVsbChwbCgpLCBTKSkge1xyXG4gICAgICAgICAgICBUb2dnbGVTcGVsbChcIm9mZlwiLCBGKTtcclxuICAgICAgICAgICAgVUlVcGRhdGVEZWJ1ZmZNZXRlcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICA7XHJcbiAgICB9XHJcbiAgICA7XHJcbn0pO1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tRlVOQ1RJT05TLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5leHBvcnQgZnVuY3Rpb24gVG9nZ2xlU3BlbGwob3B0aW9uLCBzcGVsbCkge1xyXG4gICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgIHZhciBSZW1vdmUgPSBmdW5jdGlvbiAoc3BlbGwpIHtcclxuICAgICAgICB2YXIgZm9ybWxpc3RBcHBsaWVkID0gRm9ybUxpc3QuZnJvbShHYW1lLmdldEZvcm1Gcm9tRmlsZSgweDAwMUQ2MywgXCJMb3JpY2EgUmVkb25lLmVzcFwiKSk7XHJcbiAgICAgICAgRm9ybUxpc3RSZW1vdmUobnVsbCwgc3VLZXlzLmZvcm1BcHBsaWVkTGlzdCwgc3BlbGwsIGZhbHNlKTsgLy8gcmVtb3ZlIGZvcm0gZnJvbSBhcHBsaWVkIHNwZWxscyBsaXN0XHJcbiAgICAgICAgZm9ybWxpc3RBcHBsaWVkLnJlbW92ZUFkZGVkRm9ybShzcGVsbCk7XHJcbiAgICAgICAgcGwoKS5kaXNwZWxTcGVsbChTcGVsbC5mcm9tKHNwZWxsKSk7XHJcbiAgICB9O1xyXG4gICAgLy8gcHJpbnRDb25zb2xlKFwiVG9nZ2xlU3BlbGw6OiBydW5uaW5nXCIpXHJcbiAgICBvcHRpb24gPSBvcHRpb24udG9Mb3dlckNhc2UoKTtcclxuICAgIHZhciBzcGVsbEN1bSA9IFNwZWxsLmZyb20oR2FtZS5nZXRGb3JtRnJvbUZpbGUoMHgxQTMzLCBcIkxvcmljYSBSZWRvbmUuZXNwXCIpKTsgLy8gdGhlIHNwZWxsIHJlc3BvbnNpYmxlIGZvciB0aGUgQ3VtdWxhdGl2ZSBwZW5hbHR5XHJcbiAgICB2YXIgc3BlbGxVcGtlZXAgPSBTcGVsbC5mcm9tKEdhbWUuZ2V0Rm9ybUZyb21GaWxlKDB4MWM0MCwgXCJMb3JpY2EgUmVkb25lLmVzcFwiKSk7IC8vIHRoZSBzcGVsbCByZXNwb25zaWJsZSBmb3IgdGhlIFRvdGFsIFVwa2VlcCBwZW5hbHR5XHJcbiAgICB2YXIgZm9ybWxpc3RBcHBsaWVkID0gRm9ybUxpc3QuZnJvbShHYW1lLmdldEZvcm1Gcm9tRmlsZSgweDAwMUQ2MywgXCJMb3JpY2EgUmVkb25lLmVzcFwiKSk7XHJcbiAgICB2YXIgc3BlbGxzdHJpbmcgPSBJbnRUb1N0cmluZyhzcGVsbCA9PT0gbnVsbCB8fCBzcGVsbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogc3BlbGwuZ2V0Rm9ybUlEKCksIHRydWUpOyAvLyBleGNsYW1hdGlvbiBtYXJrIGFzc3VyZXMgY29tcGlsZXIgdGhhdCB2YXJpYWJsZSB3aWxsIGJlIHRoZXJlXHJcbiAgICB2YXIgZk1hZyA9IEdldEZsb2F0VmFsdWUobnVsbCwgc3BlbGxzdHJpbmcsIDApO1xyXG4gICAgdmFyIGlDdW0gPSBNYXRoLmZsb29yKGZNYWcgKiAoR2V0RmxvYXRWYWx1ZShudWxsLCBzdUtleXMuZkN1bUZyYWN0aW9uLCAwLjIwKSkpOyAvLyBnZXQgdGhlIGN1bXVsYXRpdmUgaW5jcmVhc2UgZnJvbSB0aGUgYXJndW1lbnQgc3BlbGwsIHJvdW5kZWQgZG93blxyXG4gICAgLy8gcmVtb3ZlIHVwa2VlcCBhbmQgY3VtdWxhdGl2ZSBzcGVsbHMgZm9yIGFkanVzdG1lbnRcclxuICAgIHBsKCkucmVtb3ZlU3BlbGwoc3BlbGxDdW0pO1xyXG4gICAgcGwoKS5yZW1vdmVTcGVsbChzcGVsbFVwa2VlcCk7XHJcbiAgICAvLyBnZXQgY3VycmVudGx5IGVxdWlwcGVkIHNwZWxscyB0byBjaGVjayBmb3IgZHVhbC1jYXN0XHJcbiAgICB2YXIgZXF1aXBwZWRMZWZ0ID0gRm9ybS5mcm9tKEdhbWUuZ2V0UGxheWVyKCkuZ2V0RXF1aXBwZWRTcGVsbCgwKSk7XHJcbiAgICB2YXIgZXF1aXBwZWRSaWdodCA9IEZvcm0uZnJvbShHYW1lLmdldFBsYXllcigpLmdldEVxdWlwcGVkU3BlbGwoMSkpO1xyXG4gICAgdmFyIHNEdWFsQ2FzdCA9ICcnO1xyXG4gICAgaWYgKGVxdWlwcGVkUmlnaHQpIHtcclxuICAgICAgICBzRHVhbENhc3QgPSBcIkxvcmljYVJlZG9uZVwiICsgKGVxdWlwcGVkUmlnaHQgPT09IG51bGwgfHwgZXF1aXBwZWRSaWdodCA9PT0gdm9pZCAwID8gdm9pZCAwIDogZXF1aXBwZWRSaWdodC5nZXROYW1lKCkpICsgXCJEdWFsQ2FzdFwiO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoZXF1aXBwZWRMZWZ0KSB7XHJcbiAgICAgICAgc0R1YWxDYXN0ID0gXCJMb3JpY2FSZWRvbmVcIiArIChlcXVpcHBlZExlZnQgPT09IG51bGwgfHwgZXF1aXBwZWRMZWZ0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBlcXVpcHBlZExlZnQuZ2V0TmFtZSgpKSArIFwiRHVhbENhc3RcIjtcclxuICAgIH1cclxuICAgIGlmIChvcHRpb24uaW5jbHVkZXMoXCJvblwiKSkge1xyXG4gICAgICAgIEZvcm1MaXN0QWRkKG51bGwsIHN1S2V5cy5mb3JtQXBwbGllZExpc3QsIHNwZWxsLCB0cnVlKTsgLy8gYWRkIGZvcm0gdG8gbGlzdCBvZiBhcHBsaWVkIHNwZWxsc1xyXG4gICAgICAgIGZvcm1saXN0QXBwbGllZC5hZGRGb3JtKHNwZWxsKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZXF1aXBwZWRSaWdodC5nZXRGb3JtSUQoKSA9PSBlcXVpcHBlZExlZnQuZ2V0Rm9ybUlEKCkgJiYgR2V0SW50VmFsdWUobnVsbCwgc0R1YWxDYXN0LCAwKSA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBwcmludENvbnNvbGUoJ1RvZ2dsZVNwZWxsOiBkdWFsY2FzdCBjaGVjayA9PiBHb29kIScpO1xyXG4gICAgICAgICAgICAgICAgZk1hZyAqPSAyO1xyXG4gICAgICAgICAgICAgICAgaUN1bSAqPSAyO1xyXG4gICAgICAgICAgICAgICAgU2V0SW50VmFsdWUobnVsbCwgc0R1YWxDYXN0LCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZXJyb3IpIHsgfVxyXG4gICAgICAgIDtcclxuICAgIH1cclxuICAgIDtcclxuICAgIGlmIChvcHRpb24gPT0gXCJvZmZcIikge1xyXG4gICAgICAgIFJlbW92ZShzcGVsbCk7XHJcbiAgICAgICAgLy8gZHVhbCBjYXN0IGNoZWNrXHJcbiAgICAgICAgaWYgKEdldEludFZhbHVlKG51bGwsIHNEdWFsQ2FzdCwgMCkgIT0gMCkge1xyXG4gICAgICAgICAgICBmTWFnICo9IDI7XHJcbiAgICAgICAgICAgIGlDdW0gKj0gMjtcclxuICAgICAgICAgICAgVW5zZXRJbnRWYWx1ZShudWxsLCBzRHVhbENhc3QpO1xyXG4gICAgICAgIH1cclxuICAgICAgICA7XHJcbiAgICAgICAgLy8gZmFpbHNhZmUgaWYtYmxvY2tzXHJcbiAgICAgICAgdmFyIGlDdW1Ub3RhbCA9IEdldEludFZhbHVlKG51bGwsIHN1S2V5cy5pQ3VtVG90YWwsIDApOyAvLyB0ZWVoZWUgJ2N1bXRvdGFsJ1xyXG4gICAgICAgIHZhciBpVXBrZWVwVG90YWwgPSBHZXRJbnRWYWx1ZShudWxsLCBzdUtleXMuaVVwa2VlcFRvdGFsLCAwKTtcclxuICAgICAgICBpZiAoaUN1bVRvdGFsID4gMCkge1xyXG4gICAgICAgICAgICBpQ3VtICo9IC0xO1xyXG4gICAgICAgIH1cclxuICAgICAgICA7XHJcbiAgICAgICAgaWYgKGlVcGtlZXBUb3RhbCA+IDApIHtcclxuICAgICAgICAgICAgZk1hZyAqPSAtMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgO1xyXG4gICAgICAgIC8vIGEgbGFzdCByZXNvcnQgaWYtYmxvY2sgdG8gbWFrZSBzdXJlIG5vdGhpbmcgd2VpcmQgaGFwcGVuc1xyXG4gICAgICAgIGlmIChpQ3VtVG90YWwgLSBpQ3VtIDwgaUN1bVRvdGFsIHx8IGlVcGtlZXBUb3RhbCAtIGZNYWcgPCBpVXBrZWVwVG90YWwpIHtcclxuICAgICAgICAgICAgZk1hZyA9IDA7XHJcbiAgICAgICAgICAgIGlDdW0gPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICA7XHJcbiAgICB9XHJcbiAgICA7XHJcbiAgICBpZiAob3B0aW9uID09IFwicmVzZXRcIikge1xyXG4gICAgICAgIGZNYWcgPSAwO1xyXG4gICAgICAgIGlDdW0gPSAwO1xyXG4gICAgfVxyXG4gICAgO1xyXG4gICAgaWYgKG9wdGlvbiA9PSBcInplcm9cIiB8fCBGb3JtTGlzdENvdW50KG51bGwsIHN1S2V5cy5mb3JtQXBwbGllZExpc3QpID09IDApIHtcclxuICAgICAgICBTZXRJbnRWYWx1ZShudWxsLCBzdUtleXMuaUN1bVRvdGFsLCAwKTtcclxuICAgICAgICBTZXRJbnRWYWx1ZShudWxsLCBzdUtleXMuaVVwa2VlcFRvdGFsLCAwKTtcclxuICAgICAgICBmTWFnID0gMDtcclxuICAgICAgICBpQ3VtID0gMDtcclxuICAgIH1cclxuICAgIDtcclxuICAgIHZhciBuZXdVcGtlZXAgPSBBZGp1c3RJbnRWYWx1ZShudWxsLCBzdUtleXMuaVVwa2VlcFRvdGFsLCBmTWFnKTtcclxuICAgIHZhciBuZXdDdW0gPSBBZGp1c3RJbnRWYWx1ZShudWxsLCBzdUtleXMuaUN1bVRvdGFsLCBpQ3VtKTtcclxuICAgIC8vIHByaW50Q29uc29sZShgIG5ld1Vwa2VlcDogJHtuZXdVcGtlZXB9XFxuIG5ld0N1bTogJHtuZXdDdW19YClcclxuICAgIGlmIChuZXdVcGtlZXAgPCAwKSB7XHJcbiAgICAgICAgU2V0SW50VmFsdWUobnVsbCwgc3VLZXlzLmlVcGtlZXBUb3RhbCwgMCk7XHJcbiAgICB9XHJcbiAgICA7XHJcbiAgICBpZiAobmV3Q3VtIDwgMCkge1xyXG4gICAgICAgIFNldEludFZhbHVlKG51bGwsIHN1S2V5cy5pQ3VtVG90YWwsIDApO1xyXG4gICAgfVxyXG4gICAgO1xyXG4gICAgLy8gaW5jYXNlIHNvbWV0aGluZyBtZXNzZXMgdXAsIGFuZCB0aGVyZSdzIHNvbWUgbGVmdG92ZXIgcGVuYWx0aWVzLCBkZXNwaXRlIGhhdmluZyBubyBzcGVsbHMgYWN0aXZlXHJcbiAgICBpZiAobmV3VXBrZWVwID4gMCAmJiBGb3JtTGlzdENvdW50KG51bGwsIHN1S2V5cy5mb3JtQXBwbGllZExpc3QpID09IDApIHtcclxuICAgICAgICBTZXRJbnRWYWx1ZShudWxsLCBzdUtleXMuaVVwa2VlcFRvdGFsLCAwKTtcclxuICAgICAgICBTZXRJbnRWYWx1ZShudWxsLCBzdUtleXMuaUN1bVRvdGFsLCAwKTtcclxuICAgIH1cclxuICAgIDtcclxuICAgIHNwZWxsQ3VtLnNldE50aEVmZmVjdE1hZ25pdHVkZSgwLCBuZXdDdW0pO1xyXG4gICAgc3BlbGxVcGtlZXAuc2V0TnRoRWZmZWN0TWFnbml0dWRlKDAsIG5ld1Vwa2VlcCk7XHJcbiAgICB2YXIgYWRkaW5nc3BlbGxzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gX19hd2FpdGVyKF90aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBzcGVsbFVwa2VlcCwgc3BlbGxDdW0sIGJhZGRlZDtcclxuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgVXRpbGl0eS53YWl0KDAuMSldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBzcGVsbFVwa2VlcCA9IFNwZWxsLmZyb20oR2FtZS5nZXRGb3JtRnJvbUZpbGUoMHgwMDFjNDAsIFwiTG9yaWNhIFJlZG9uZS5lc3BcIikpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNwZWxsQ3VtID0gU3BlbGwuZnJvbShHYW1lLmdldEZvcm1Gcm9tRmlsZSgweDAwMUEzMywgXCJMb3JpY2EgUmVkb25lLmVzcFwiKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFkZGVkID0gcGwoKS5hZGRTcGVsbChzcGVsbFVwa2VlcCwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHBsKCkuYWRkU3BlbGwoc3BlbGxDdW0sIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pOyB9O1xyXG4gICAgYWRkaW5nc3BlbGxzKCk7XHJcbiAgICBVSVVwZGF0ZURlYnVmZk1ldGVyKCk7XHJcbiAgICAvLyBwcmludENvbnNvbGUoYFRvZ2dsZVNwZWxsIEhhcyA9PiAke0Zvcm1MaXN0SGFzKG51bGwsIHN1S2V5cy5mb3JtQXBwbGllZExpc3QsIHNwZWxsISl9YClcclxufVxyXG47XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gc2t5cmltUGxhdGZvcm07IiwiLypcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5UeXBlc2NyaXB0IGRlZmluaXRpb25zIGZvciB2NC4yXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcblRoaXMgZmlsZSB3YXMgYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgYnkgUGFweXJ1cy0yLVR5cGVzY3JpcHQuZXhlXHJcbmh0dHBzOi8vZ2l0aHViLmNvbS9DYXJsb3NMZXl2YUF5YWxhL1BhcHlydXMtMi1UeXBlc2NyaXB0XHJcblxyXG5UaGUgcHJvZ3JhbSBoYXMgbm8gd2F5IHRvIGtub3cgdGhlIGludGVudGlvbiBvZiB0aGUgaHVtYW5zIHRoYXQgbWFkZVxyXG50aGUgc2NyaXB0cywgc28gaXQncyBhbHdheXMgYWR2aXNhYmxlIHRvIG1hbnVhbGx5IGNoZWNrIGFsbCBnZW5lcmF0ZWRcclxuZmlsZXMgdG8gbWFrZSBzdXJlIGV2ZXJ5dGhpbmcgaXMgZGVjbGFyZWQgYXMgaXQgc2hvdWxkLlxyXG5cclxuVGFrZSBub3RlIHRoZSBwcm9ncmFtIGFzc3VtZXMgdGhpcyBzY3JpcHQgZXhpc3RzIGluIHNvbWUgc3ViZm9sZGVyXHJcbnRvIHRoZSBmb2xkZXIgd2hlcmUgYHNreXJpbVBsYXRmb3JtLnRzYCBpcyBmb3VuZCwgb3RoZXJ3aXNlIHlvdSdsbCBnZXRcclxuXCJDYW5ub3QgZmluZCBtb2R1bGUuLi5cIiB0eXBlIG9mIGVycm9ycy5cclxuXHJcbklmIHlvdSB3YW50IHRvIGhhdmUgdGhpcyBzY3JpcHQgaW4gc29tZSBvdGhlciBwbGFjZSwganVzdCBjaGFuZ2UgdGhlXHJcbnJlbGF0aXZlIHBhdGggb2YgZWFjaCBgaW1wb3J0YC5cclxuKi9cclxuaW1wb3J0ICogYXMgc3AgZnJvbSBcInNreXJpbVBsYXRmb3JtXCI7XHJcbnZhciBzbiA9IHNwLlN0b3JhZ2VVdGlsO1xyXG4vKiogTU9EIEFVVEhPUlMsIFJFQUQhXHJcblxyXG4gICAgVGhpcyBzY3JpcHQgY29udGFpbnMgZnVuY3Rpb25zIGZvciBzYXZpbmcgYW5kIGxvYWRpbmcgYW55IGFtb3VudCBvZiBpbnQsIGZsb2F0LCBmb3JtIGFuZCBzdHJpbmcgdmFsdWVzXHJcbiAgICBieSBuYW1lIG9uIGEgZm9ybSBvciBnbG9iYWxseS4gVGhlc2UgdmFsdWVzIGNhbiBiZSBhY2Nlc3NlZCBhbmQgY2hhbmdlZCBmcm9tIGFueSBtb2Qgd2hpY2ggYWxsb3dzXHJcbiAgICBtb2RzIHRvIGJlY29tZSBjb21wYXRpYmxlIHdpdGggZWFjaCBvdGhlciB3aXRob3V0IGFkZGluZyBhbnkgcmVxdWlyZW1lbnRzIHRvIHRoZSBvdGhlciBtb2Qgb3IgaXRzIHZlcnNpb25cclxuICAgIG90aGVyIHRoYW4gdGhpcyBwbHVnaW4uXHJcblxyXG4gICAgVmFsdWVzIHdpbGwgc3RheSBvbiBmb3JtcyBvciBnbG9iYWxseSB1bnRpbCB0aGV5IGFyZSBVbnNldCBvciBDbGVhcmVkIGluIGNhc2Ugb2YgbGlzdHMuIElmIHZhbHVlXHJcbiAgICBpcyBzZXQgb24gYSBmb3JtIGFuZCB0aGUgb2JqZWN0IGlzIGRlbGV0ZWQgdGhlbiBUSEUgdmFsdWUgd2lsbCBiZSByZW1vdmVkIHdoZW4gc2F2aW5nIGdhbWUuXHJcbiAgICBJZiB5b3UgYXJlIGRvbmUgd2l0aCB1c2luZyBhIGNlcnRhaW4gdmFyaWFibGUgeW91IHNob3VsZCB1c2UgVW5zZXQgb3IgQ2xlYXIgZnVuY3Rpb24gdG8gcmVtb3ZlIHRoZW1cclxuICAgIGJ1dCBpdCBpcyBub3QgcmVxdWlyZWQuXHJcblxyXG4gICAgU2F2aW5nIE1DTSBjb25maWcgdmFsdWVzIGhlcmUgd291bGQgYWxsb3cgb3RoZXIgbW9kcyB0byBjaGFuZ2UgeW91ciBtb2Qgc2V0dGluZ3Mgd2hpY2ggbWF5XHJcbiAgICBiZSB1c2VmdWwuIEl0IHNob3VsZCBhbHNvIGFsbG93IHlvdSB0byBjaGFuZ2UgTUNNIGNvbmZpZyBzY3JpcHQgd2l0aG91dCB3b3JyeWluZyBhYm91dCB2ZXJzaW9uaW5nXHJcbiAgICBzaW5jZSB0aGVyZSBhcmUgbm8gbmV3IHZhcmlhYmxlcyBpbiB0aGUgc2NyaXB0IGl0c2VsZi5cclxuXHJcbiAgICBGdW5jdGlvbnMgdGhhdCBzdGFydCB3aXRoIEZpbGUgaW4gdGhlIG5hbWUgd2lsbCBzYXZlIHZhbHVlcyB0byBhIHNlcGFyYXRlIGZpbGUsIHNvIHRoYXQgeW91IGNhblxyXG4gICAgYWNjZXNzIHRoZSBzYW1lIHZhbHVlcyBmcm9tIGFsbCBzYXZlZ2FtZXMuIFRoaXMgbWF5IGJlIHVzZWZ1bCBmb3IgY29uZmlndXJhdGlvbiBzZXR0aW5ncy5cclxuICAgKEZJTEUgRlVOQ1RJT05TIEFSRSBERVBSRUNBVEVEISBVU0UgSlNPTlVUSUwuUFNDIElOU1RFQUQpXHJcblxyXG4gICAgU2F2ZWQgdmFsdWVzIHRha2UgdmVyeSBsaXR0bGUgbWVtb3J5IC0gZXhwZWN0IHRvIHVzZSBsZXNzIHRoYW4gNTAwIEtCIG9mIHBoeXNpY2FsIG1lbW9yeSBldmVuIHdoZW5cclxuICAgIHNldHRpbmcgdGhvdXNhbmRzIG9mIHZhbHVlcy5cclxuXHJcbiAgICBWYWx1ZSBuYW1lcyBhcmUgbm90IGNhc2Ugc2Vuc2l0aXZlLCB0aGF0IG1lYW5zIEdldEludFZhbHVlKG5vbmUsIFwiYWJjXCIpID09IEdldEludFZhbHVlKG5vbmUsIFwiYUJDXCIpLlxyXG5cclxuICAgIEFsbCB2YWx1ZXMgYXJlIHNlcGFyYXRlZCBmcm9tIGVhY2ggb3RoZXIgYnkgdHlwZSEgVGhhdCBtZWFucyBTZXRJbnRWYWx1ZShub25lLCBcImFiY1wiLCAxKSBhbmRcclxuICAgIFNldEZsb2F0VmFsdWUobm9uZSwgXCJhYmNcIiwgMi4wKSBjcmVhdGUgc2VwYXJhdGUgZW50cmllcyBhbmQgYXJlbid0IGFmZmVjdGVkIGJ5IGVhY2ggb3RoZXIuXHJcbiAgICBTdG9yYWdlVXRpbC5TZXRJbnRWYWx1ZShub25lLCBcIm15VmFsdWVcIiwgMSlcclxuICAgIFN0b3JhZ2VVdGlsLlNldEZsb2F0VmFsdWUobm9uZSwgXCJteVZhbHVlXCIsIDUuMClcclxuICAgIGludCB2YWx1ZSA9IFN0b3JhZ2VVdGlsLkdldEludFZhbHVlKG5vbmUsIFwibXlWYWx1ZVwiKVxyXG4gICAgdmFsdWUgPT0gMSA7IHRydWVcclxuICAgIHZhbHVlID09IDUgOyBmYWxzZVxyXG5cclxuICAgIFdoZW4gY2hvb3NpbmcgbmFtZXMgZm9yIHZhcmlhYmxlcyB0cnkgdG8gcmVtZW1iZXIgdGhhdCBhbGwgbW9kcyBhY2Nlc3MgdGhlIHNhbWUgc3RvcmFnZSwgc28gaWYgeW91XHJcbiAgICBjcmVhdGUgYSB2YXJpYWJsZSB3aXRoIG5hbWUgXCJOYW1lXCIgdGhlbiBtYW55IG90aGVyIG1vZHMgY291bGQgdXNlIHRoZSBzYW1lIHZhcmlhYmxlIGJ1dCBpbiBkaWZmZXJlbnRcclxuICAgIHdheXMgdGhhdCBsZWFkIHRvIHVud2FudGVkIGJlaGF2aW9yLiBJdCBpcyByZWNvbW1lbmRlZCB0byBwcmVmaXggdGhlIHZhcmlhYmxlIHdpdGggeW91ciBtb2QgbmFtZSxcclxuICAgIHRoYXQgd2F5IHlvdSBjYW4gYmUgc3VyZSBub2JvZHkgZWxzZSB3aWxsIHRyeSB0byB1c2UgdGhlIHNhbWUgdmFyaWFibGUgaW4gdGhlaXIgbW9kLiBGb3IgZXhhbXBsZVxyXG4gICAgcmVhbGlzdGljIG5lZWRzIGFuZCBkaXNlYXNlcyBtaWdodCBzZXQgaHVuZ2VyIGFzIFwicm5kX2h1bmdlcnZhbHVlXCIuXHJcblxyXG4gICAgWW91IGNhbiBhbHNvIHVzZSB0aGlzIHN0b3JhZ2UgdG8gbWFrZSB5b3VyIG1vZCBmdW5jdGlvbnMgYXZhaWxhYmxlIHRvIG90aGVyIG1vZHMsIGZvciBleGFtcGxlIGlmXHJcbiAgICB5b3VyIG1vZCBoYXMgYSBmdW5jdGlvbiB0aGF0IHNldHMgYW4gQWN0b3IgdG8gYmUgaW52aXNpYmxlIHlvdSBjb3VsZCBhZGQgYSBzY3JpcHQgdGhhdCBjaGVja3M6XHJcbiAgICBpbnQgaSA9IFN0b3JhZ2VVdGlsLkZvcm1MaXN0Q291bnQobm9uZSwgXCJNYWtlSW52aXNpYmxlXCIpXHJcbiAgICB3aGlsZShpID4gMClcclxuICAgICAgICBpLS1cclxuICAgICAgICBBY3RvciBtYWtlID0gU3RvcmFnZVV0aWwuRm9ybUxpc3RHZXQobm9uZSwgXCJNYWtlSW52aXNpYmxlXCIsIGkpIGFzIEFjdG9yXHJcbiAgICAgICAgaWYobWFrZSlcclxuICAgICAgICAgICAgTXlTY3JpcHRGdW5jdGlvbihtYWtlKVxyXG4gICAgICAgIGVuZGlmXHJcbiAgICAgICAgU3RvcmFnZVV0aWwuRm9ybUxpc3RSZW1vdmVBdChub25lLCBcIk1ha2VJbnZpc2libGVcIiwgaSlcclxuICAgIGVuZHdoaWxlXHJcbiAgICBBbmQgdGhlIG90aGVyIG1vZCBjb3VsZCB3cml0ZTpcclxuICAgIFN0b3JhZ2VVdGlsLkZvcm1MaXN0QWRkKG5vbmUsIFwiTWFrZUludmlzaWJsZVwiLCBteUFjdG9yKVxyXG4gICAgdG8gbWFrZSBzb21lb25lIGludmlzaWJsZSB1c2luZyB5b3VyIG1vZC4gQnV0IGlmIHlvdXIgbW9kIGlzbid0IHByZXNlbnQgdGhlbiBub3RoaW5nIGhhcHBlbnMuXHJcbiAgICBUaGlzIGlzIGp1c3QgYW4gZXhhbXBsZSwgSSdtIHN1cmUgeW91IGNhbiBmaW5kIGJldHRlciB3YXlzIHRvIGltcGxlbWVudCBjb21wYXRpYmlsaXR5LCBpdCB3b3VsZFxyXG4gICAgaGVscCB0byBpbmNsdWRlIGEgZG9jdW1lbnRhdGlvbiBmb3Igb3RoZXIgbW9kZGVycyBpZiB5b3UgZG8uXHJcbi8qKlxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8qKlxyXG4gICAgU3RvcmFnZSBmdW5jdGlvbnMgLSB2YWx1ZXMgaW4gc2F2ZSBnYW1lIGZpbGUuICovXHJcbi8qKiBTZXQgaW50L2Zsb2F0L3N0cmluZy9Gb3JtIHZhbHVlIGdsb2JhbGx5IG9yIG9uIGFueSBmb3JtIGJ5IG5hbWUgYW5kIHJldHVyblxyXG4gICB0aGUgdmFsdWUgcGFzc2VkLCBvciBhcyB1bmluaXRpYWxpemVkIHZhcmlhYmxlIGlmIGludmFsaWQga2V5cyBnaXZlbi5cclxuXHJcbiAgIE9iaktleTogZm9ybSB0byBzYXZlIG9uLiBTZXQgbm9uZSB0byBzYXZlIGdsb2JhbGx5LlxyXG4gICBLZXlOYW1lOiBuYW1lIG9mIHZhbHVlLlxyXG4gICB2YWx1ZTogdmFsdWUgdG8gc2V0IHRvIHRoZSBnaXZlbiBrZXlzLiBJZiB6ZXJvLCBlbXB0eSwgb3Igbm9uZSBhcmUgZ2l2ZW4sIHRoZSBrZXkgd2lsbCBiZSB1bnNldC4gKi9cclxuZXhwb3J0IHZhciBTZXRJbnRWYWx1ZSA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUsIHZhbHVlKSB7IHJldHVybiBzbi5TZXRJbnRWYWx1ZShPYmpLZXksIEtleU5hbWUsIHZhbHVlKTsgfTtcclxuZXhwb3J0IHZhciBTZXRGbG9hdFZhbHVlID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgdmFsdWUpIHsgcmV0dXJuIHNuLlNldEZsb2F0VmFsdWUoT2JqS2V5LCBLZXlOYW1lLCB2YWx1ZSk7IH07XHJcbmV4cG9ydCB2YXIgU2V0U3RyaW5nVmFsdWUgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCB2YWx1ZSkgeyByZXR1cm4gc24uU2V0U3RyaW5nVmFsdWUoT2JqS2V5LCBLZXlOYW1lLCB2YWx1ZSk7IH07XHJcbmV4cG9ydCB2YXIgU2V0Rm9ybVZhbHVlID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgdmFsdWUpIHsgcmV0dXJuIHNuLlNldEZvcm1WYWx1ZShPYmpLZXksIEtleU5hbWUsIHZhbHVlKTsgfTtcclxuLyoqIFJlbW92ZSBhIHByZXZpb3VzbHkgc2V0IGludC9mbG9hdC9zdHJpbmcvRm9ybSB2YWx1ZSBvbiBhbiBmb3JtIG9yIGdsb2JhbGx5IGFuZFxyXG5pZiBzdWNjZXNzZnVsLiBUaGlzIHdpbGwgcmV0dXJuIGZhbHNlIGlmIHZhbHVlIGRpZG4ndCBleGlzdC5cclxuXHJcbiAgIE9iaktleTogZm9ybSB0byByZW1vdmUgZnJvbS4gU2V0IG5vbmUgdG8gcmVtb3ZlIGdsb2JhbCB2YWx1ZS5cclxuICAgS2V5TmFtZTogbmFtZSBvZiB2YWx1ZS4gKi9cclxuZXhwb3J0IHZhciBVbnNldEludFZhbHVlID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSkgeyByZXR1cm4gc24uVW5zZXRJbnRWYWx1ZShPYmpLZXksIEtleU5hbWUpOyB9O1xyXG5leHBvcnQgdmFyIFVuc2V0RmxvYXRWYWx1ZSA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUpIHsgcmV0dXJuIHNuLlVuc2V0RmxvYXRWYWx1ZShPYmpLZXksIEtleU5hbWUpOyB9O1xyXG5leHBvcnQgdmFyIFVuc2V0U3RyaW5nVmFsdWUgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lKSB7IHJldHVybiBzbi5VbnNldFN0cmluZ1ZhbHVlKE9iaktleSwgS2V5TmFtZSk7IH07XHJcbmV4cG9ydCB2YXIgVW5zZXRGb3JtVmFsdWUgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lKSB7IHJldHVybiBzbi5VbnNldEZvcm1WYWx1ZShPYmpLZXksIEtleU5hbWUpOyB9O1xyXG4vKiogQ2hlY2sgaWYgaW50L2Zsb2F0L3N0cmluZy9Gb3JtIHZhbHVlIGhhcyBiZWVuIHNldCBvbiBmb3JtIG9yIGdsb2JhbGx5LlxyXG5cclxuICAgT2JqS2V5OiBmb3JtIHRvIGNoZWNrIG9uLiBTZXQgbm9uZSB0byBjaGVjayBnbG9iYWwgdmFsdWUuXHJcbiAgIEtleU5hbWU6IG5hbWUgb2YgdmFsdWUuICovXHJcbmV4cG9ydCB2YXIgSGFzSW50VmFsdWUgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lKSB7IHJldHVybiBzbi5IYXNJbnRWYWx1ZShPYmpLZXksIEtleU5hbWUpOyB9O1xyXG5leHBvcnQgdmFyIEhhc0Zsb2F0VmFsdWUgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lKSB7IHJldHVybiBzbi5IYXNGbG9hdFZhbHVlKE9iaktleSwgS2V5TmFtZSk7IH07XHJcbmV4cG9ydCB2YXIgSGFzU3RyaW5nVmFsdWUgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lKSB7IHJldHVybiBzbi5IYXNTdHJpbmdWYWx1ZShPYmpLZXksIEtleU5hbWUpOyB9O1xyXG5leHBvcnQgdmFyIEhhc0Zvcm1WYWx1ZSA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUpIHsgcmV0dXJuIHNuLkhhc0Zvcm1WYWx1ZShPYmpLZXksIEtleU5hbWUpOyB9O1xyXG4vKiogR2V0IHByZXZpb3VzbHkgc2F2ZWQgaW50L2Zsb2F0L3N0cmluZy9Gb3JtIHZhbHVlIG9uIGZvcm0gb3IgZ2xvYmFsbHkuXHJcblxyXG4gICBPYmpLZXk6IGZvcm0gdG8gZ2V0IGZyb20uIFNldCBub25lIHRvIGdldCBnbG9iYWwgdmFsdWUuXHJcbiAgIEtleU5hbWU6IG5hbWUgb2YgdmFsdWUuXHJcbiAgIFtvcHRpb25hbF0gbWlzc2luZzogaWYgdmFsdWUgaGFzIG5vdCBiZWVuIHNldCwgcmV0dXJuIHRoaXMgdmFsdWUgaW5zdGVhZC4gKi9cclxuZXhwb3J0IHZhciBHZXRJbnRWYWx1ZSA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUsIG1pc3NpbmcpIHtcclxuICAgIGlmIChtaXNzaW5nID09PSB2b2lkIDApIHsgbWlzc2luZyA9IDA7IH1cclxuICAgIHJldHVybiBzbi5HZXRJbnRWYWx1ZShPYmpLZXksIEtleU5hbWUsIG1pc3NpbmcpO1xyXG59O1xyXG5leHBvcnQgdmFyIEdldEZsb2F0VmFsdWUgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCBtaXNzaW5nKSB7XHJcbiAgICBpZiAobWlzc2luZyA9PT0gdm9pZCAwKSB7IG1pc3NpbmcgPSAwLjA7IH1cclxuICAgIHJldHVybiBzbi5HZXRGbG9hdFZhbHVlKE9iaktleSwgS2V5TmFtZSwgbWlzc2luZyk7XHJcbn07XHJcbmV4cG9ydCB2YXIgR2V0U3RyaW5nVmFsdWUgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCBtaXNzaW5nKSB7XHJcbiAgICBpZiAobWlzc2luZyA9PT0gdm9pZCAwKSB7IG1pc3NpbmcgPSBcIlwiOyB9XHJcbiAgICByZXR1cm4gc24uR2V0U3RyaW5nVmFsdWUoT2JqS2V5LCBLZXlOYW1lLCBtaXNzaW5nKTtcclxufTtcclxuZXhwb3J0IHZhciBHZXRGb3JtVmFsdWUgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCBtaXNzaW5nKSB7XHJcbiAgICBpZiAobWlzc2luZyA9PT0gdm9pZCAwKSB7IG1pc3NpbmcgPSBudWxsOyB9XHJcbiAgICByZXR1cm4gc24uR2V0Rm9ybVZhbHVlKE9iaktleSwgS2V5TmFtZSwgbWlzc2luZyk7XHJcbn07XHJcbi8qKiBQbHVja3MgYSBwcmV2aW91c2x5IHNhdmVkIGludC9mbG9hdC9zdHJpbmcvRm9ybSB2YWx1ZSBvbiBmb3JtIG9yIGdsb2JhbGx5LlxyXG4gICBSZXR1cm5pbmcgdGhlIHZhbHVlIHN0b3JlZCwgdGhlbiByZW1vdmluZyBpdCBmcm9tIHN0b3JhZ2UuXHJcblxyXG4gICBPYmpLZXk6IGZvcm0gdG8gcGx1Y2sgZnJvbS4gU2V0IG5vbmUgdG8gZ2V0IGdsb2JhbCB2YWx1ZS5cclxuICAgS2V5TmFtZTogbmFtZSBvZiB2YWx1ZS5cclxuICAgW29wdGlvbmFsXSBtaXNzaW5nOiBpZiB2YWx1ZSBoYXMgbm90IGJlZW4gc2V0LCByZXR1cm4gdGhpcyB2YWx1ZSBpbnN0ZWFkLiAqL1xyXG5leHBvcnQgdmFyIFBsdWNrSW50VmFsdWUgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCBtaXNzaW5nKSB7XHJcbiAgICBpZiAobWlzc2luZyA9PT0gdm9pZCAwKSB7IG1pc3NpbmcgPSAwOyB9XHJcbiAgICByZXR1cm4gc24uUGx1Y2tJbnRWYWx1ZShPYmpLZXksIEtleU5hbWUsIG1pc3NpbmcpO1xyXG59O1xyXG5leHBvcnQgdmFyIFBsdWNrRmxvYXRWYWx1ZSA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUsIG1pc3NpbmcpIHtcclxuICAgIGlmIChtaXNzaW5nID09PSB2b2lkIDApIHsgbWlzc2luZyA9IDAuMDsgfVxyXG4gICAgcmV0dXJuIHNuLlBsdWNrRmxvYXRWYWx1ZShPYmpLZXksIEtleU5hbWUsIG1pc3NpbmcpO1xyXG59O1xyXG5leHBvcnQgdmFyIFBsdWNrU3RyaW5nVmFsdWUgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCBtaXNzaW5nKSB7XHJcbiAgICBpZiAobWlzc2luZyA9PT0gdm9pZCAwKSB7IG1pc3NpbmcgPSBcIlwiOyB9XHJcbiAgICByZXR1cm4gc24uUGx1Y2tTdHJpbmdWYWx1ZShPYmpLZXksIEtleU5hbWUsIG1pc3NpbmcpO1xyXG59O1xyXG5leHBvcnQgdmFyIFBsdWNrRm9ybVZhbHVlID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgbWlzc2luZykge1xyXG4gICAgaWYgKG1pc3NpbmcgPT09IHZvaWQgMCkgeyBtaXNzaW5nID0gbnVsbDsgfVxyXG4gICAgcmV0dXJuIHNuLlBsdWNrRm9ybVZhbHVlKE9iaktleSwgS2V5TmFtZSwgbWlzc2luZyk7XHJcbn07XHJcbi8qKiBHZXQgcHJldmlvdXNseSBzYXZlZCBpbnQvZmxvYXQvc3RyaW5nL0Zvcm0gdmFsdWUgb24gZm9ybSBvciBnbG9iYWxseS5cclxuXHJcbiAgIE9iaktleTogZm9ybSB0byBnZXQgZnJvbS4gU2V0IG5vbmUgdG8gZ2V0IGdsb2JhbCB2YWx1ZS5cclxuICAgS2V5TmFtZTogbmFtZSBvZiB2YWx1ZS5cclxuICAgYW1vdW50OiArLy0gdGhlIGFtb3VudCB0byBhZGp1c3QgdGhlIGN1cnJlbnQgdmFsdWUgYnlcclxuXHJcbiAgIGdpdmVuIGtleXMgd2lsbCBiZSBpbml0aWFsaXplZCB0byBnaXZlbiBhbW91bnQgaWYgaXQgZG9lcyBub3QgZXhpc3QgKi9cclxuZXhwb3J0IHZhciBBZGp1c3RJbnRWYWx1ZSA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUsIGFtb3VudCkgeyByZXR1cm4gc24uQWRqdXN0SW50VmFsdWUoT2JqS2V5LCBLZXlOYW1lLCBhbW91bnQpOyB9O1xyXG5leHBvcnQgdmFyIEFkanVzdEZsb2F0VmFsdWUgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCBhbW91bnQpIHsgcmV0dXJuIHNuLkFkanVzdEZsb2F0VmFsdWUoT2JqS2V5LCBLZXlOYW1lLCBhbW91bnQpOyB9O1xyXG4vKiogQWRkIGFuIGludC9mbG9hdC9zdHJpbmcvRm9ybSB0byBhIGxpc3Qgb24gZm9ybSBvciBnbG9iYWxseSBhbmQgcmV0dXJuXHJcbiAgIHRoZSB2YWx1ZSdzIG5ldyBpbmRleC4gSW5kZXggY2FuIGJlIC0xIGlmIHdlIHdlcmUgdW5hYmxlIHRvIGFkZFxyXG4gICB0aGUgdmFsdWUuXHJcblxyXG4gICBPYmpLZXk6IGZvcm0gdG8gYWRkIHRvLiBTZXQgbm9uZSB0byBhZGQgZ2xvYmFsIHZhbHVlLlxyXG4gICBLZXlOYW1lOiBuYW1lIG9mIHZhbHVlLlxyXG4gICB2YWx1ZTogdmFsdWUgdG8gYWRkLlxyXG4gICBbb3B0aW9uYWxdIGFsbG93RHVwbGljYXRlOiBhbGxvdyBhZGRpbmcgdmFsdWUgdG8gbGlzdCBpZiB0aGlzIHZhbHVlIGFscmVhZHkgZXhpc3RzIGluIHRoZSBsaXN0LiAqL1xyXG5leHBvcnQgdmFyIEludExpc3RBZGQgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCB2YWx1ZSwgYWxsb3dEdXBsaWNhdGUpIHtcclxuICAgIGlmIChhbGxvd0R1cGxpY2F0ZSA9PT0gdm9pZCAwKSB7IGFsbG93RHVwbGljYXRlID0gdHJ1ZTsgfVxyXG4gICAgcmV0dXJuIHNuLkludExpc3RBZGQoT2JqS2V5LCBLZXlOYW1lLCB2YWx1ZSwgYWxsb3dEdXBsaWNhdGUpO1xyXG59O1xyXG5leHBvcnQgdmFyIEZsb2F0TGlzdEFkZCA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUsIHZhbHVlLCBhbGxvd0R1cGxpY2F0ZSkge1xyXG4gICAgaWYgKGFsbG93RHVwbGljYXRlID09PSB2b2lkIDApIHsgYWxsb3dEdXBsaWNhdGUgPSB0cnVlOyB9XHJcbiAgICByZXR1cm4gc24uRmxvYXRMaXN0QWRkKE9iaktleSwgS2V5TmFtZSwgdmFsdWUsIGFsbG93RHVwbGljYXRlKTtcclxufTtcclxuZXhwb3J0IHZhciBTdHJpbmdMaXN0QWRkID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgdmFsdWUsIGFsbG93RHVwbGljYXRlKSB7XHJcbiAgICBpZiAoYWxsb3dEdXBsaWNhdGUgPT09IHZvaWQgMCkgeyBhbGxvd0R1cGxpY2F0ZSA9IHRydWU7IH1cclxuICAgIHJldHVybiBzbi5TdHJpbmdMaXN0QWRkKE9iaktleSwgS2V5TmFtZSwgdmFsdWUsIGFsbG93RHVwbGljYXRlKTtcclxufTtcclxuZXhwb3J0IHZhciBGb3JtTGlzdEFkZCA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUsIHZhbHVlLCBhbGxvd0R1cGxpY2F0ZSkge1xyXG4gICAgaWYgKGFsbG93RHVwbGljYXRlID09PSB2b2lkIDApIHsgYWxsb3dEdXBsaWNhdGUgPSB0cnVlOyB9XHJcbiAgICByZXR1cm4gc24uRm9ybUxpc3RBZGQoT2JqS2V5LCBLZXlOYW1lLCB2YWx1ZSwgYWxsb3dEdXBsaWNhdGUpO1xyXG59O1xyXG4vKiogR2V0IGEgdmFsdWUgZnJvbSBsaXN0IGJ5IGluZGV4IG9uIGZvcm0gb3IgZ2xvYmFsbHkuXHJcbiAgIFRoaXMgd2lsbCByZXR1cm4gMCBhcyB2YWx1ZSBpZiB0aGVyZSB3YXMgYSBwcm9ibGVtLlxyXG5cclxuICAgT2JqS2V5OiBmb3JtIHRvIGdldCB2YWx1ZSBvbi4gU2V0IG5vbmUgdG8gZ2V0IGdsb2JhbCBsaXN0IHZhbHVlLlxyXG4gICBLZXlOYW1lOiBuYW1lIG9mIGxpc3QuXHJcbiAgIGluZGV4OiBpbmRleCBvZiB2YWx1ZSBpbiB0aGUgbGlzdC4gKi9cclxuZXhwb3J0IHZhciBJbnRMaXN0R2V0ID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgaW5kZXgpIHsgcmV0dXJuIHNuLkludExpc3RHZXQoT2JqS2V5LCBLZXlOYW1lLCBpbmRleCk7IH07XHJcbmV4cG9ydCB2YXIgRmxvYXRMaXN0R2V0ID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgaW5kZXgpIHsgcmV0dXJuIHNuLkZsb2F0TGlzdEdldChPYmpLZXksIEtleU5hbWUsIGluZGV4KTsgfTtcclxuZXhwb3J0IHZhciBTdHJpbmdMaXN0R2V0ID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgaW5kZXgpIHsgcmV0dXJuIHNuLlN0cmluZ0xpc3RHZXQoT2JqS2V5LCBLZXlOYW1lLCBpbmRleCk7IH07XHJcbmV4cG9ydCB2YXIgRm9ybUxpc3RHZXQgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCBpbmRleCkgeyByZXR1cm4gc24uRm9ybUxpc3RHZXQoT2JqS2V5LCBLZXlOYW1lLCBpbmRleCk7IH07XHJcbi8qKiBTZXQgYSB2YWx1ZSBpbiBsaXN0IGJ5IGluZGV4IG9uIGZvcm0gb3IgZ2xvYmFsbHkuXHJcbiAgIFRoaXMgd2lsbCByZXR1cm4gdGhlIHByZXZpb3VzIHZhbHVlIG9yIDAgaWYgdGhlcmUgd2FzIGEgcHJvYmxlbS5cclxuXHJcbiAgIE9iaktleTogZm9ybSB0byBzZXQgdmFsdWUgb24uIFNldCBub25lIHRvIHNldCBnbG9iYWwgbGlzdCB2YWx1ZS5cclxuICAgS2V5TmFtZTogbmFtZSBvZiBsaXN0LlxyXG4gICBpbmRleDogaW5kZXggb2YgdmFsdWUgaW4gdGhlIGxpc3QuXHJcbiAgIHZhbHVlOiB2YWx1ZSB0byBzZXQgdG8uICovXHJcbmV4cG9ydCB2YXIgSW50TGlzdFNldCA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUsIGluZGV4LCB2YWx1ZSkgeyByZXR1cm4gc24uSW50TGlzdFNldChPYmpLZXksIEtleU5hbWUsIGluZGV4LCB2YWx1ZSk7IH07XHJcbmV4cG9ydCB2YXIgRmxvYXRMaXN0U2V0ID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgaW5kZXgsIHZhbHVlKSB7IHJldHVybiBzbi5GbG9hdExpc3RTZXQoT2JqS2V5LCBLZXlOYW1lLCBpbmRleCwgdmFsdWUpOyB9O1xyXG5leHBvcnQgdmFyIFN0cmluZ0xpc3RTZXQgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCBpbmRleCwgdmFsdWUpIHsgcmV0dXJuIHNuLlN0cmluZ0xpc3RTZXQoT2JqS2V5LCBLZXlOYW1lLCBpbmRleCwgdmFsdWUpOyB9O1xyXG5leHBvcnQgdmFyIEZvcm1MaXN0U2V0ID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgaW5kZXgsIHZhbHVlKSB7IHJldHVybiBzbi5Gb3JtTGlzdFNldChPYmpLZXksIEtleU5hbWUsIGluZGV4LCB2YWx1ZSk7IH07XHJcbi8qKiBQbHVja3MgYSB2YWx1ZSBmcm9tIGxpc3QgYnkgaW5kZXggb24gZm9ybSBvciBnbG9iYWxseS5cclxuICAgVGhlIGluZGV4IGlzIHJlbW92ZWQgZnJvbSB0aGUgbGlzdCdzIHN0b3JhZ2UgYWZ0ZXIgcmV0dXJuaW5nIGl0J3MgdmFsdWUuXHJcblxyXG4gICBPYmpLZXk6IGZvcm0gdG8gcGx1Y2sgdmFsdWUgZnJvbS4gU2V0IG5vbmUgdG8gZ2V0IGdsb2JhbCBsaXN0IHZhbHVlLlxyXG4gICBLZXlOYW1lOiBuYW1lIG9mIGxpc3QuXHJcbiAgIGluZGV4OiBpbmRleCBvZiB2YWx1ZSBpbiB0aGUgbGlzdC5cclxuICAgW29wdGlvbmFsXSBtaXNzaW5nOiBpZiBpbmRleCBoYXMgbm90IGJlZW4gc2V0LCByZXR1cm4gdGhpcyB2YWx1ZSBpbnN0ZWFkLiAqL1xyXG5leHBvcnQgdmFyIEludExpc3RQbHVjayA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUsIGluZGV4LCBtaXNzaW5nKSB7IHJldHVybiBzbi5JbnRMaXN0UGx1Y2soT2JqS2V5LCBLZXlOYW1lLCBpbmRleCwgbWlzc2luZyk7IH07XHJcbmV4cG9ydCB2YXIgRmxvYXRMaXN0UGx1Y2sgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCBpbmRleCwgbWlzc2luZykgeyByZXR1cm4gc24uRmxvYXRMaXN0UGx1Y2soT2JqS2V5LCBLZXlOYW1lLCBpbmRleCwgbWlzc2luZyk7IH07XHJcbmV4cG9ydCB2YXIgU3RyaW5nTGlzdFBsdWNrID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgaW5kZXgsIG1pc3NpbmcpIHsgcmV0dXJuIHNuLlN0cmluZ0xpc3RQbHVjayhPYmpLZXksIEtleU5hbWUsIGluZGV4LCBtaXNzaW5nKTsgfTtcclxuZXhwb3J0IHZhciBGb3JtTGlzdFBsdWNrID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgaW5kZXgsIG1pc3NpbmcpIHsgcmV0dXJuIHNuLkZvcm1MaXN0UGx1Y2soT2JqS2V5LCBLZXlOYW1lLCBpbmRleCwgbWlzc2luZyk7IH07XHJcbi8qKiBHZXRzIHRoZSB2YWx1ZSBvZiB0aGUgdmVyeSBmaXJzdCBlbGVtZW50IGluIGEgbGlzdCwgYW5kIHN1YnNlcXVlbnRseSByZW1vdmVzIHRoZSBpbmRleCBhZnRlcndhcmQuXHJcblxyXG4gICBPYmpLZXk6IGZvcm0gdG8gc2hpZnQgdmFsdWUgZnJvbS4gU2V0IG5vbmUgdG8gZ2V0IGdsb2JhbCBsaXN0IHZhbHVlLlxyXG4gICBLZXlOYW1lOiBuYW1lIG9mIGxpc3QgdG8gc2hpZnQgaXQncyBmaXJzdCB2YWx1ZSBmcm9tLiAqL1xyXG5leHBvcnQgdmFyIEludExpc3RTaGlmdCA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUpIHsgcmV0dXJuIHNuLkludExpc3RTaGlmdChPYmpLZXksIEtleU5hbWUpOyB9O1xyXG5leHBvcnQgdmFyIEZsb2F0TGlzdFNoaWZ0ID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSkgeyByZXR1cm4gc24uRmxvYXRMaXN0U2hpZnQoT2JqS2V5LCBLZXlOYW1lKTsgfTtcclxuZXhwb3J0IHZhciBTdHJpbmdMaXN0U2hpZnQgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lKSB7IHJldHVybiBzbi5TdHJpbmdMaXN0U2hpZnQoT2JqS2V5LCBLZXlOYW1lKTsgfTtcclxuZXhwb3J0IHZhciBGb3JtTGlzdFNoaWZ0ID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSkgeyByZXR1cm4gc24uRm9ybUxpc3RTaGlmdChPYmpLZXksIEtleU5hbWUpOyB9O1xyXG4vKiogR2V0cyB0aGUgdmFsdWUgb2YgdGhlIHZlcnkgbGFzdCBlbGVtZW50IGluIGEgbGlzdCwgYW5kIHN1YnNlcXVlbnRseSByZW1vdmVzIHRoZSBpbmRleCBhZnRlcndhcmQuXHJcblxyXG4gICBPYmpLZXk6IGZvcm0gdG8gcG9wIHZhbHVlIGZyb20uIFNldCBub25lIHRvIGdldCBnbG9iYWwgbGlzdCB2YWx1ZS5cclxuICAgS2V5TmFtZTogbmFtZSBvZiBsaXN0IHRvIHBvcCBvZmYgaXQncyBsYXN0IHZhbHVlLiAqL1xyXG5leHBvcnQgdmFyIEludExpc3RQb3AgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lKSB7IHJldHVybiBzbi5JbnRMaXN0UG9wKE9iaktleSwgS2V5TmFtZSk7IH07XHJcbmV4cG9ydCB2YXIgRmxvYXRMaXN0UG9wID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSkgeyByZXR1cm4gc24uRmxvYXRMaXN0UG9wKE9iaktleSwgS2V5TmFtZSk7IH07XHJcbmV4cG9ydCB2YXIgU3RyaW5nTGlzdFBvcCA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUpIHsgcmV0dXJuIHNuLlN0cmluZ0xpc3RQb3AoT2JqS2V5LCBLZXlOYW1lKTsgfTtcclxuZXhwb3J0IHZhciBGb3JtTGlzdFBvcCA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUpIHsgcmV0dXJuIHNuLkZvcm1MaXN0UG9wKE9iaktleSwgS2V5TmFtZSk7IH07XHJcbi8qKiBBZGp1c3QgdGhlIGV4aXN0aW5nIHZhbHVlIG9mIGEgbGlzdCBieSB0aGUgZ2l2ZW4gYW1vdW50LlxyXG5cclxuICAgT2JqS2V5OiBmb3JtIHRvIHNldCB2YWx1ZSBvbi4gU2V0IG5vbmUgdG8gc2V0IGdsb2JhbCBsaXN0IHZhbHVlLlxyXG4gICBLZXlOYW1lOiBuYW1lIG9mIGxpc3QuXHJcbiAgIGluZGV4OiBpbmRleCBvZiB2YWx1ZSBpbiB0aGUgbGlzdC5cclxuICAgYW1vdW50OiArLy0gdGhlIGFtb3VudCB0byBhZGp1c3QgdGhlIGxpc3RzIGN1cnJlbnQgaW5kZXggdmFsdWUgYnkuXHJcblxyXG5zIDAgaWYgaW5kZXggZG9lcyBub3QgZXhpc3RzICovXHJcbmV4cG9ydCB2YXIgSW50TGlzdEFkanVzdCA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUsIGluZGV4LCBhbW91bnQpIHsgcmV0dXJuIHNuLkludExpc3RBZGp1c3QoT2JqS2V5LCBLZXlOYW1lLCBpbmRleCwgYW1vdW50KTsgfTtcclxuZXhwb3J0IHZhciBGbG9hdExpc3RBZGp1c3QgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCBpbmRleCwgYW1vdW50KSB7IHJldHVybiBzbi5GbG9hdExpc3RBZGp1c3QoT2JqS2V5LCBLZXlOYW1lLCBpbmRleCwgYW1vdW50KTsgfTtcclxuLyoqIEluc2VydCBhbiBpbnQvZmxvYXQvc3RyaW5nL0Zvcm0gdG8gYSBsaXN0IG9uIGZvcm0gb3IgZ2xvYmFsbHkgYW5kIHJldHVyblxyXG4gICBpZiBzdWNjZXNzZnVsLlxyXG5cclxuICAgT2JqS2V5OiBmb3JtIHRvIGFkZCB0by4gU2V0IG5vbmUgdG8gYWRkIGdsb2JhbCB2YWx1ZS5cclxuICAgS2V5TmFtZTogbmFtZSBvZiB2YWx1ZS5cclxuICAgaW5kZXg6IHBvc2l0aW9uIGluIGxpc3QgdG8gcHV0IHRoZSB2YWx1ZS4gMCBpcyBmaXJzdCBlbnRyeSBpbiBsaXN0LlxyXG4gICB2YWx1ZTogdmFsdWUgdG8gYWRkLiAqL1xyXG5leHBvcnQgdmFyIEludExpc3RJbnNlcnQgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCBpbmRleCwgdmFsdWUpIHsgcmV0dXJuIHNuLkludExpc3RJbnNlcnQoT2JqS2V5LCBLZXlOYW1lLCBpbmRleCwgdmFsdWUpOyB9O1xyXG5leHBvcnQgdmFyIEZsb2F0TGlzdEluc2VydCA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUsIGluZGV4LCB2YWx1ZSkgeyByZXR1cm4gc24uRmxvYXRMaXN0SW5zZXJ0KE9iaktleSwgS2V5TmFtZSwgaW5kZXgsIHZhbHVlKTsgfTtcclxuZXhwb3J0IHZhciBTdHJpbmdMaXN0SW5zZXJ0ID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgaW5kZXgsIHZhbHVlKSB7IHJldHVybiBzbi5TdHJpbmdMaXN0SW5zZXJ0KE9iaktleSwgS2V5TmFtZSwgaW5kZXgsIHZhbHVlKTsgfTtcclxuZXhwb3J0IHZhciBGb3JtTGlzdEluc2VydCA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUsIGluZGV4LCB2YWx1ZSkgeyByZXR1cm4gc24uRm9ybUxpc3RJbnNlcnQoT2JqS2V5LCBLZXlOYW1lLCBpbmRleCwgdmFsdWUpOyB9O1xyXG4vKiogUmVtb3ZlIGEgcHJldmlvdXNseSBhZGRlZCBpbnQvZmxvYXQvc3RyaW5nL0Zvcm0gdmFsdWUgZnJvbSBhIGxpc3Qgb24gZm9ybVxyXG4gICBvciBnbG9iYWxseSBhbmQgcmV0dXJuIGhvdyBtYW55IGluc3RhbmNlcyBvZiB0aGlzIHZhbHVlIHdlcmUgcmVtb3ZlZC5cclxuXHJcbiAgIE9iaktleTogZm9ybSB0byByZW1vdmUgZnJvbS4gU2V0IG5vbmUgdG8gcmVtb3ZlIGdsb2JhbCB2YWx1ZS5cclxuICAgS2V5TmFtZTogbmFtZSBvZiB2YWx1ZS5cclxuICAgdmFsdWU6IHZhbHVlIHRvIHJlbW92ZS5cclxuICAgW29wdGlvbmFsXSBhbGxvd0luc3RhbmNlczogcmVtb3ZlIGFsbCBpbnN0YW5jZXMgb2YgdGhpcyB2YWx1ZSBpbiBhIGxpc3QuICovXHJcbmV4cG9ydCB2YXIgSW50TGlzdFJlbW92ZSA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUsIHZhbHVlLCBhbGxJbnN0YW5jZXMpIHtcclxuICAgIGlmIChhbGxJbnN0YW5jZXMgPT09IHZvaWQgMCkgeyBhbGxJbnN0YW5jZXMgPSBmYWxzZTsgfVxyXG4gICAgcmV0dXJuIHNuLkludExpc3RSZW1vdmUoT2JqS2V5LCBLZXlOYW1lLCB2YWx1ZSwgYWxsSW5zdGFuY2VzKTtcclxufTtcclxuZXhwb3J0IHZhciBGbG9hdExpc3RSZW1vdmUgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCB2YWx1ZSwgYWxsSW5zdGFuY2VzKSB7XHJcbiAgICBpZiAoYWxsSW5zdGFuY2VzID09PSB2b2lkIDApIHsgYWxsSW5zdGFuY2VzID0gZmFsc2U7IH1cclxuICAgIHJldHVybiBzbi5GbG9hdExpc3RSZW1vdmUoT2JqS2V5LCBLZXlOYW1lLCB2YWx1ZSwgYWxsSW5zdGFuY2VzKTtcclxufTtcclxuZXhwb3J0IHZhciBTdHJpbmdMaXN0UmVtb3ZlID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgdmFsdWUsIGFsbEluc3RhbmNlcykge1xyXG4gICAgaWYgKGFsbEluc3RhbmNlcyA9PT0gdm9pZCAwKSB7IGFsbEluc3RhbmNlcyA9IGZhbHNlOyB9XHJcbiAgICByZXR1cm4gc24uU3RyaW5nTGlzdFJlbW92ZShPYmpLZXksIEtleU5hbWUsIHZhbHVlLCBhbGxJbnN0YW5jZXMpO1xyXG59O1xyXG5leHBvcnQgdmFyIEZvcm1MaXN0UmVtb3ZlID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgdmFsdWUsIGFsbEluc3RhbmNlcykge1xyXG4gICAgaWYgKGFsbEluc3RhbmNlcyA9PT0gdm9pZCAwKSB7IGFsbEluc3RhbmNlcyA9IGZhbHNlOyB9XHJcbiAgICByZXR1cm4gc24uRm9ybUxpc3RSZW1vdmUoT2JqS2V5LCBLZXlOYW1lLCB2YWx1ZSwgYWxsSW5zdGFuY2VzKTtcclxufTtcclxuLyoqIENsZWFyIGEgbGlzdCBvZiB2YWx1ZXMgKHVuc2V0KSBvbiBhbiBmb3JtIG9yIGdsb2JhbGx5IGFuZFxyXG50aGUgcHJldmlvdXMgc2l6ZSBvZiBsaXN0LlxyXG5cclxuICAgT2JqS2V5OiBmb3JtIHRvIGNsZWFyIG9uLiBTZXQgbm9uZSB0byBjbGVhciBnbG9iYWwgbGlzdC5cclxuICAgS2V5TmFtZTogbmFtZSBvZiBsaXN0LiAqL1xyXG5leHBvcnQgdmFyIEludExpc3RDbGVhciA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUpIHsgcmV0dXJuIHNuLkludExpc3RDbGVhcihPYmpLZXksIEtleU5hbWUpOyB9O1xyXG5leHBvcnQgdmFyIEZsb2F0TGlzdENsZWFyID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSkgeyByZXR1cm4gc24uRmxvYXRMaXN0Q2xlYXIoT2JqS2V5LCBLZXlOYW1lKTsgfTtcclxuZXhwb3J0IHZhciBTdHJpbmdMaXN0Q2xlYXIgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lKSB7IHJldHVybiBzbi5TdHJpbmdMaXN0Q2xlYXIoT2JqS2V5LCBLZXlOYW1lKTsgfTtcclxuZXhwb3J0IHZhciBGb3JtTGlzdENsZWFyID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSkgeyByZXR1cm4gc24uRm9ybUxpc3RDbGVhcihPYmpLZXksIEtleU5hbWUpOyB9O1xyXG4vKiogUmVtb3ZlIGEgdmFsdWUgZnJvbSBsaXN0IGJ5IGluZGV4IG9uIGZvcm0gb3IgZ2xvYmFsbHkgYW5kXHJcbmlmIHdlIHdlcmUgc3VjY2Vzc2Z1bCBpbiBkb2luZyBzby5cclxuXHJcbiAgIE9iaktleTogZm9ybSB0byByZW1vdmUgZnJvbS4gU2V0IG5vbmUgdG8gcmVtb3ZlIGdsb2JhbCB2YWx1ZS5cclxuICAgS2V5TmFtZTogbmFtZSBvZiBsaXN0LlxyXG4gICBpbmRleDogaW5kZXggb2YgdmFsdWUgaW4gdGhlIGxpc3QuICovXHJcbmV4cG9ydCB2YXIgSW50TGlzdFJlbW92ZUF0ID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgaW5kZXgpIHsgcmV0dXJuIHNuLkludExpc3RSZW1vdmVBdChPYmpLZXksIEtleU5hbWUsIGluZGV4KTsgfTtcclxuZXhwb3J0IHZhciBGbG9hdExpc3RSZW1vdmVBdCA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUsIGluZGV4KSB7IHJldHVybiBzbi5GbG9hdExpc3RSZW1vdmVBdChPYmpLZXksIEtleU5hbWUsIGluZGV4KTsgfTtcclxuZXhwb3J0IHZhciBTdHJpbmdMaXN0UmVtb3ZlQXQgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCBpbmRleCkgeyByZXR1cm4gc24uU3RyaW5nTGlzdFJlbW92ZUF0KE9iaktleSwgS2V5TmFtZSwgaW5kZXgpOyB9O1xyXG5leHBvcnQgdmFyIEZvcm1MaXN0UmVtb3ZlQXQgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCBpbmRleCkgeyByZXR1cm4gc24uRm9ybUxpc3RSZW1vdmVBdChPYmpLZXksIEtleU5hbWUsIGluZGV4KTsgfTtcclxuLyoqIEdldCBzaXplIG9mIGEgbGlzdCBvbiBmb3JtIG9yIGdsb2JhbGx5LlxyXG5cclxuICAgT2JqS2V5OiBmb3JtIHRvIGNoZWNrIG9uLiBTZXQgbm9uZSB0byBjaGVjayBnbG9iYWwgbGlzdC5cclxuICAgS2V5TmFtZTogbmFtZSBvZiBsaXN0LiAqL1xyXG5leHBvcnQgdmFyIEludExpc3RDb3VudCA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUpIHsgcmV0dXJuIHNuLkludExpc3RDb3VudChPYmpLZXksIEtleU5hbWUpOyB9O1xyXG5leHBvcnQgdmFyIEZsb2F0TGlzdENvdW50ID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSkgeyByZXR1cm4gc24uRmxvYXRMaXN0Q291bnQoT2JqS2V5LCBLZXlOYW1lKTsgfTtcclxuZXhwb3J0IHZhciBTdHJpbmdMaXN0Q291bnQgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lKSB7IHJldHVybiBzbi5TdHJpbmdMaXN0Q291bnQoT2JqS2V5LCBLZXlOYW1lKTsgfTtcclxuZXhwb3J0IHZhciBGb3JtTGlzdENvdW50ID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSkgeyByZXR1cm4gc24uRm9ybUxpc3RDb3VudChPYmpLZXksIEtleU5hbWUpOyB9O1xyXG4vKiogR2V0IHRoZSBudW1iZXIgb2Ygb2NjdXJyZW5jZXMgb2YgYSBzcGVjaWZpYyB2YWx1ZSB3aXRoaW4gYSBsaXN0LlxyXG5cclxuICAgT2JqS2V5OiBmb3JtIHRvIGNoZWNrIG9uLiBTZXQgbm9uZSB0byBjaGVjayBnbG9iYWwgbGlzdC5cclxuICAgS2V5TmFtZTogbmFtZSBvZiBsaXN0LlxyXG4gICB2YWx1ZTogdmFsdWUgdG8gbG9vayBmb3IuXHJcbiAgIFtvcHRpb25hbF0gZXhjbHVkZTogaWYgdHJ1ZSwgZnVuY3Rpb24gd2lsbCByZXR1cm4gbnVtYmVyIG9mIGVsZW1lbnRzIE5PVCBlcXVhbCB0byB2YWx1ZS4gKi9cclxuZXhwb3J0IHZhciBJbnRMaXN0Q291bnRWYWx1ZSA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUsIHZhbHVlLCBleGNsdWRlKSB7XHJcbiAgICBpZiAoZXhjbHVkZSA9PT0gdm9pZCAwKSB7IGV4Y2x1ZGUgPSBmYWxzZTsgfVxyXG4gICAgcmV0dXJuIHNuLkludExpc3RDb3VudFZhbHVlKE9iaktleSwgS2V5TmFtZSwgdmFsdWUsIGV4Y2x1ZGUpO1xyXG59O1xyXG5leHBvcnQgdmFyIEZsb2F0TGlzdENvdW50VmFsdWUgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCB2YWx1ZSwgZXhjbHVkZSkge1xyXG4gICAgaWYgKGV4Y2x1ZGUgPT09IHZvaWQgMCkgeyBleGNsdWRlID0gZmFsc2U7IH1cclxuICAgIHJldHVybiBzbi5GbG9hdExpc3RDb3VudFZhbHVlKE9iaktleSwgS2V5TmFtZSwgdmFsdWUsIGV4Y2x1ZGUpO1xyXG59O1xyXG5leHBvcnQgdmFyIFN0cmluZ0xpc3RDb3VudFZhbHVlID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgdmFsdWUsIGV4Y2x1ZGUpIHtcclxuICAgIGlmIChleGNsdWRlID09PSB2b2lkIDApIHsgZXhjbHVkZSA9IGZhbHNlOyB9XHJcbiAgICByZXR1cm4gc24uU3RyaW5nTGlzdENvdW50VmFsdWUoT2JqS2V5LCBLZXlOYW1lLCB2YWx1ZSwgZXhjbHVkZSk7XHJcbn07XHJcbmV4cG9ydCB2YXIgRm9ybUxpc3RDb3VudFZhbHVlID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgdmFsdWUsIGV4Y2x1ZGUpIHtcclxuICAgIGlmIChleGNsdWRlID09PSB2b2lkIDApIHsgZXhjbHVkZSA9IGZhbHNlOyB9XHJcbiAgICByZXR1cm4gc24uRm9ybUxpc3RDb3VudFZhbHVlKE9iaktleSwgS2V5TmFtZSwgdmFsdWUsIGV4Y2x1ZGUpO1xyXG59O1xyXG4vKiogRmluZCBhIHZhbHVlIGluIGxpc3Qgb24gZm9ybSBvciBnbG9iYWxseSBhbmQgcmV0dXJuIGl0c1xyXG4gICBpbmRleCBvciAtMSBpZiB2YWx1ZSB3YXMgbm90IGZvdW5kLlxyXG5cclxuICAgT2JqS2V5OiBmb3JtIHRvIGZpbmQgdmFsdWUgb24uIFNldCBub25lIHRvIGZpbmQgZ2xvYmFsIGxpc3QgdmFsdWUuXHJcbiAgIEtleU5hbWU6IG5hbWUgb2YgbGlzdC5cclxuICAgdmFsdWU6IHZhbHVlIHRvIHNlYXJjaC4gKi9cclxuZXhwb3J0IHZhciBJbnRMaXN0RmluZCA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUsIHZhbHVlKSB7IHJldHVybiBzbi5JbnRMaXN0RmluZChPYmpLZXksIEtleU5hbWUsIHZhbHVlKTsgfTtcclxuZXhwb3J0IHZhciBGbG9hdExpc3RGaW5kID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgdmFsdWUpIHsgcmV0dXJuIHNuLkZsb2F0TGlzdEZpbmQoT2JqS2V5LCBLZXlOYW1lLCB2YWx1ZSk7IH07XHJcbmV4cG9ydCB2YXIgU3RyaW5nTGlzdEZpbmQgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCB2YWx1ZSkgeyByZXR1cm4gc24uU3RyaW5nTGlzdEZpbmQoT2JqS2V5LCBLZXlOYW1lLCB2YWx1ZSk7IH07XHJcbmV4cG9ydCB2YXIgRm9ybUxpc3RGaW5kID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgdmFsdWUpIHsgcmV0dXJuIHNuLkZvcm1MaXN0RmluZChPYmpLZXksIEtleU5hbWUsIHZhbHVlKTsgfTtcclxuLyoqIEZpbmQgaWYgYSB2YWx1ZSBpbiBsaXN0IG9uIGZvcm0gb3IgZ2xvYmFsbHkgZXhpc3RzLCB0cnVlIGlmIGl0IGV4aXN0cyxcclxuICAgZmFsc2UgaWYgaXQgZG9lc24ndC5cclxuXHJcbiAgIE9iaktleTogZm9ybSB0byBmaW5kIHZhbHVlIG9uLiBTZXQgbm9uZSB0byBmaW5kIGdsb2JhbCBsaXN0IHZhbHVlLlxyXG4gICBLZXlOYW1lOiBuYW1lIG9mIGxpc3QuXHJcbiAgIHZhbHVlOiB2YWx1ZSB0byBzZWFyY2guICovXHJcbmV4cG9ydCB2YXIgSW50TGlzdEhhcyA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUsIHZhbHVlKSB7IHJldHVybiBzbi5JbnRMaXN0SGFzKE9iaktleSwgS2V5TmFtZSwgdmFsdWUpOyB9O1xyXG5leHBvcnQgdmFyIEZsb2F0TGlzdEhhcyA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUsIHZhbHVlKSB7IHJldHVybiBzbi5GbG9hdExpc3RIYXMoT2JqS2V5LCBLZXlOYW1lLCB2YWx1ZSk7IH07XHJcbmV4cG9ydCB2YXIgU3RyaW5nTGlzdEhhcyA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUsIHZhbHVlKSB7IHJldHVybiBzbi5TdHJpbmdMaXN0SGFzKE9iaktleSwgS2V5TmFtZSwgdmFsdWUpOyB9O1xyXG5leHBvcnQgdmFyIEZvcm1MaXN0SGFzID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgdmFsdWUpIHsgcmV0dXJuIHNuLkZvcm1MaXN0SGFzKE9iaktleSwgS2V5TmFtZSwgdmFsdWUpOyB9O1xyXG4vKiogU29ydCBhbiBpbnQvZmxvYXQvc3RyaW5nL0Zvcm0gbGlzdCBieSB2YWx1ZXMgaW4gYXNjZW5kaW5nIG9yZGVyLlxyXG5cclxuICAgT2JqS2V5OiBmb3JtIHRvIHNvcnQgb24uIFNldCBub25lIGZvciBnbG9iYWwgdmFsdWUuXHJcbiAgIEtleU5hbWU6IG5hbWUgb2YgdmFsdWUuICovXHJcbmV4cG9ydCB2YXIgSW50TGlzdFNvcnQgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lKSB7IHJldHVybiBzbi5JbnRMaXN0U29ydChPYmpLZXksIEtleU5hbWUpOyB9O1xyXG5leHBvcnQgdmFyIEZsb2F0TGlzdFNvcnQgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lKSB7IHJldHVybiBzbi5GbG9hdExpc3RTb3J0KE9iaktleSwgS2V5TmFtZSk7IH07XHJcbmV4cG9ydCB2YXIgU3RyaW5nTGlzdFNvcnQgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lKSB7IHJldHVybiBzbi5TdHJpbmdMaXN0U29ydChPYmpLZXksIEtleU5hbWUpOyB9O1xyXG5leHBvcnQgdmFyIEZvcm1MaXN0U29ydCA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUpIHsgcmV0dXJuIHNuLkZvcm1MaXN0U29ydChPYmpLZXksIEtleU5hbWUpOyB9O1xyXG4vKiogRmlsbHMgdGhlIGdpdmVuIGlucHV0IGFycmF5IHdpdGggdGhlIHZhbHVlcyBvZiB0aGUgbGlzdCBvbiBmb3JtIG9yIGdsb2JhbGx5LFxyXG4gICB3aWxsIGZpbGwgdGhlIGFycmF5IHVudGlsIGVpdGhlciB0aGUgYXJyYXkgb3IgbGlzdCBydW5zIG91dCBvZiB2YWxpZCBpbmRleGVzXHJcblxyXG4gICBPYmpLZXk6IGZvcm0gdG8gZmluZCB2YWx1ZSBvbi4gU2V0IG5vbmUgdG8gZmluZCBnbG9iYWwgbGlzdCB2YWx1ZS5cclxuICAgS2V5TmFtZTogbmFtZSBvZiBsaXN0LlxyXG4gICBzbGljZVtdOiBhbiBpbml0aWFsaXplZCBhcnJheSBzZXQgdG8gdGhlIHNsaWNlIHNpemUgeW91IHdhbnQsIGkuZS4gaW50W10gc2xpY2UgPSBuZXcgaW50WzEwXVxyXG4gICBbb3B0aW9uYWxdIHN0YXJ0SW5kZXg6IHRoZSBzdGFydGluZyBsaXN0IGluZGV4IHlvdSB3YW50IHRvIHN0YXJ0IGZpbGxpbmcgeW91ciBzbGljZSBhcnJheSB3aXRoICovXHJcbmV4cG9ydCB2YXIgSW50TGlzdFNsaWNlID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgc2xpY2UsIHN0YXJ0SW5kZXgpIHtcclxuICAgIGlmIChzdGFydEluZGV4ID09PSB2b2lkIDApIHsgc3RhcnRJbmRleCA9IDA7IH1cclxuICAgIHJldHVybiBzbi5JbnRMaXN0U2xpY2UoT2JqS2V5LCBLZXlOYW1lLCBzbGljZSwgc3RhcnRJbmRleCk7XHJcbn07XHJcbmV4cG9ydCB2YXIgRmxvYXRMaXN0U2xpY2UgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCBzbGljZSwgc3RhcnRJbmRleCkge1xyXG4gICAgaWYgKHN0YXJ0SW5kZXggPT09IHZvaWQgMCkgeyBzdGFydEluZGV4ID0gMDsgfVxyXG4gICAgcmV0dXJuIHNuLkZsb2F0TGlzdFNsaWNlKE9iaktleSwgS2V5TmFtZSwgc2xpY2UsIHN0YXJ0SW5kZXgpO1xyXG59O1xyXG5leHBvcnQgdmFyIFN0cmluZ0xpc3RTbGljZSA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUsIHNsaWNlLCBzdGFydEluZGV4KSB7XHJcbiAgICBpZiAoc3RhcnRJbmRleCA9PT0gdm9pZCAwKSB7IHN0YXJ0SW5kZXggPSAwOyB9XHJcbiAgICByZXR1cm4gc24uU3RyaW5nTGlzdFNsaWNlKE9iaktleSwgS2V5TmFtZSwgc2xpY2UsIHN0YXJ0SW5kZXgpO1xyXG59O1xyXG5leHBvcnQgdmFyIEZvcm1MaXN0U2xpY2UgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCBzbGljZSwgc3RhcnRJbmRleCkge1xyXG4gICAgaWYgKHN0YXJ0SW5kZXggPT09IHZvaWQgMCkgeyBzdGFydEluZGV4ID0gMDsgfVxyXG4gICAgcmV0dXJuIHNuLkZvcm1MaXN0U2xpY2UoT2JqS2V5LCBLZXlOYW1lLCBzbGljZSwgc3RhcnRJbmRleCk7XHJcbn07XHJcbi8qKiBTaXplcyB0aGUgZ2l2ZW4gbGlzdCB0byBhIHNldCBudW1iZXIgb2YgZWxlbWVudHMuIElmIHRoZSBsaXN0IGV4aXN0cyBhbHJlYWR5IGl0IHdpbGwgYmUgdHJ1bmNhdGVkXHJcbiAgIHdoZW4gZ2l2ZW4gZmV3ZXIgZWxlbWVudHMsIG9yIHJlc2l6ZWQgdG8gdGhlIGFwcHJvcHJpYXRlIGxlbmd0aCB3aXRoIHRoZSBmaWxsZXIgYXJndW1lbnQgYmVpbmcgdXNlZCBhc1xyXG4gICB0aGUgZGVmYXVsdCB2YWx1ZXNcclxuXHJcbiAgIFJldHVybnMgdGhlIG51bWJlciBvZiBlbGVtZW50cyB0cnVuY2F0ZWQgKHNpZ25lZCkgb3IgYWRkZWQgKHVuc2lnbmVkKSBvbnRvIHRoZSBsaXN0LlxyXG5cclxuICAgT2JqS2V5OiBmb3JtIHRvIGZpbmQgdmFsdWUgb24uIFNldCBub25lIHRvIGZpbmQgZ2xvYmFsIGxpc3QgdmFsdWUuXHJcbiAgIEtleU5hbWU6IG5hbWUgb2YgbGlzdC5cclxuICAgdG9MZW5ndGg6IFRoZSBzaXplIHlvdSB3YW50IHRvIGNoYW5nZSB0aGUgbGlzdCB0by4gTWF4IGxlbmd0aCB3aGVuIHVzaW5nIHRoaXMgZnVuY3Rpb24gaXMgNTAwLlxyXG4gICBbb3B0aW9uYWxdIGZpbGxlcjogV2hlbiBhZGRpbmcgZW1wdHkgZWxlbWVudHMgdG8gdGhlIGxpc3QgdGhpcyB3aWxsIGJlIHVzZWQgYXMgdGhlIGRlZmF1bHQgdmFsdWUgKi9cclxuZXhwb3J0IHZhciBJbnRMaXN0UmVzaXplID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgdG9MZW5ndGgsIGZpbGxlcikge1xyXG4gICAgaWYgKGZpbGxlciA9PT0gdm9pZCAwKSB7IGZpbGxlciA9IDA7IH1cclxuICAgIHJldHVybiBzbi5JbnRMaXN0UmVzaXplKE9iaktleSwgS2V5TmFtZSwgdG9MZW5ndGgsIGZpbGxlcik7XHJcbn07XHJcbmV4cG9ydCB2YXIgRmxvYXRMaXN0UmVzaXplID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgdG9MZW5ndGgsIGZpbGxlcikge1xyXG4gICAgaWYgKGZpbGxlciA9PT0gdm9pZCAwKSB7IGZpbGxlciA9IDAuMDsgfVxyXG4gICAgcmV0dXJuIHNuLkZsb2F0TGlzdFJlc2l6ZShPYmpLZXksIEtleU5hbWUsIHRvTGVuZ3RoLCBmaWxsZXIpO1xyXG59O1xyXG5leHBvcnQgdmFyIFN0cmluZ0xpc3RSZXNpemUgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCB0b0xlbmd0aCwgZmlsbGVyKSB7XHJcbiAgICBpZiAoZmlsbGVyID09PSB2b2lkIDApIHsgZmlsbGVyID0gXCJcIjsgfVxyXG4gICAgcmV0dXJuIHNuLlN0cmluZ0xpc3RSZXNpemUoT2JqS2V5LCBLZXlOYW1lLCB0b0xlbmd0aCwgZmlsbGVyKTtcclxufTtcclxuZXhwb3J0IHZhciBGb3JtTGlzdFJlc2l6ZSA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUsIHRvTGVuZ3RoLCBmaWxsZXIpIHtcclxuICAgIGlmIChmaWxsZXIgPT09IHZvaWQgMCkgeyBmaWxsZXIgPSBudWxsOyB9XHJcbiAgICByZXR1cm4gc24uRm9ybUxpc3RSZXNpemUoT2JqS2V5LCBLZXlOYW1lLCB0b0xlbmd0aCwgZmlsbGVyKTtcclxufTtcclxuLyoqIENyZWF0ZXMgYSBjb3B5IG9mIGFycmF5IG9uIHRoZSBnaXZlbiBzdG9yYWdlIGxpc3QgYXQgdGhlIGdpdmVuIG9iamVjdCtrZXksXHJcbiAgIG92ZXJ3cml0aW5nIGFueSBsaXN0IHRoYXQgbWlnaHQgYWxyZWFkeSBleGlzdHMuXHJcblxyXG4gICBSZXR1cm5zIHRydWUgb24gc3VjY2Vzcy5cclxuXHJcbiAgIE9iaktleTogZm9ybSB0byBmaW5kIHZhbHVlIG9uLiBTZXQgbm9uZSB0byBmaW5kIGdsb2JhbCBsaXN0IHZhbHVlLlxyXG4gICBLZXlOYW1lOiBuYW1lIG9mIGxpc3QuXHJcbiAgIGNvcHlbXTogVGhlIHBhcHlydXMgYXJyYXkgd2l0aCB0aGUgY29udGVudCB5b3Ugd2lzaCB0byBjb3B5IG92ZXIgaW50byBTdG9yYWdlVXRpbFxyXG4gICBbb3B0aW9uYWxdIGZpbGxlcjogV2hlbiBhZGRpbmcgZW1wdHkgZWxlbWVudHMgdG8gdGhlIGxpc3QgdGhpcyB3aWxsIGJlIHVzZWQgYXMgdGhlIGRlZmF1bHQgdmFsdWUgKi9cclxuZXhwb3J0IHZhciBJbnRMaXN0Q29weSA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUsIGNvcHkpIHsgcmV0dXJuIHNuLkludExpc3RDb3B5KE9iaktleSwgS2V5TmFtZSwgY29weSk7IH07XHJcbmV4cG9ydCB2YXIgRmxvYXRMaXN0Q29weSA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUsIGNvcHkpIHsgcmV0dXJuIHNuLkZsb2F0TGlzdENvcHkoT2JqS2V5LCBLZXlOYW1lLCBjb3B5KTsgfTtcclxuZXhwb3J0IHZhciBTdHJpbmdMaXN0Q29weSA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUsIGNvcHkpIHsgcmV0dXJuIHNuLlN0cmluZ0xpc3RDb3B5KE9iaktleSwgS2V5TmFtZSwgY29weSk7IH07XHJcbmV4cG9ydCB2YXIgRm9ybUxpc3RDb3B5ID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgY29weSkgeyByZXR1cm4gc24uRm9ybUxpc3RDb3B5KE9iaktleSwgS2V5TmFtZSwgY29weSk7IH07XHJcbi8qKiBPdXRwdXRzIHRoZSB2YWx1ZXMgY3VycmVudGx5IHN0b3JlZCBieSB0aGUgZ2l2ZW4gb2JqZWN0K2tleS5cclxuXHJcbiAgIFJldHVybnMgYSBuZXcgYXJyYXkgY29udGFpbmluZyB0aGUgdmFsdWVzLlxyXG5cclxuICAgT2JqS2V5OiBmb3JtIHRvIGZpbmQgdmFsdWUgb24uIFNldCBub25lIHRvIGZpbmQgZ2xvYmFsIGxpc3QgdmFsdWUuXHJcbiAgIEtleU5hbWU6IG5hbWUgb2YgbGlzdC4gKi9cclxuZXhwb3J0IHZhciBJbnRMaXN0VG9BcnJheSA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUpIHsgcmV0dXJuIHNuLkludExpc3RUb0FycmF5KE9iaktleSwgS2V5TmFtZSk7IH07XHJcbmV4cG9ydCB2YXIgRmxvYXRMaXN0VG9BcnJheSA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUpIHsgcmV0dXJuIHNuLkZsb2F0TGlzdFRvQXJyYXkoT2JqS2V5LCBLZXlOYW1lKTsgfTtcclxuZXhwb3J0IHZhciBTdHJpbmdMaXN0VG9BcnJheSA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUpIHsgcmV0dXJuIHNuLlN0cmluZ0xpc3RUb0FycmF5KE9iaktleSwgS2V5TmFtZSk7IH07XHJcbmV4cG9ydCB2YXIgRm9ybUxpc3RUb0FycmF5ID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSkgeyByZXR1cm4gc24uRm9ybUxpc3RUb0FycmF5KE9iaktleSwgS2V5TmFtZSk7IH07XHJcbi8qKiBSZXR1cm5zIGFycmF5IG9mIGZvcm1zIGZyb20gbGlzdCB0aGF0IGhhdmUgKG9yIG9wdGlvbmFsbHkgZG9uJ3QgaGF2ZSkgdGhlIHNwZWNpZmllZCBmb3JtIHR5cGVzLlxyXG4gICBGb3IgdmFsaWQgbGlzdCBvZiBmb3JtIHR5cGVzLCBzZWUgRm9ybVR5cGUucHNjIG9yIGh0dHA6Ly93d3cuY3JlYXRpb25raXQuY29tL0dldFR5cGVfLV9Gb3JtXHJcblxyXG4gICBPYmpLZXk6IGZvcm0gdG8gZmluZCB2YWx1ZSBvbi4gU2V0IG5vbmUgdG8gZmluZCBnbG9iYWwgbGlzdCB2YWx1ZS5cclxuICAgS2V5TmFtZTogbmFtZSBvZiBsaXN0LlxyXG4gICBGb3JtVHlwZUlEc1tdOiBUaGUgaW50IHBhcHlydXMgYXJyYXkgd2l0aCBhbGwgdGhlIGZvcm0gdHlwZXMgeW91IHdpc2ggdG8gZmlsdGVyIGZvclxyXG4gICBbb3B0aW9uYWxdIFJldHVybk1hdGNoaW5nOiBCeSBkZWZhdWx0LCBUUlVFLCB0aGUgb3V0cHV0IEZvcm1bXSBhcnJheSB3aWxsIGNvbnRhaW4gZm9ybXMgZnJvbSBsaXN0IHRoYXQgbWF0Y2ggdGhlIGZvcm0gdHlwZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSWYgc2V0IHRvIEZBTFNFLCBpbnZlcnRzIHRoZSByZXN1bHRpbmcgYXJyYXkgd2l0aCBmb3JtcyB0aGF0IGhhdmUgYSB0eXBlIHRoYXQgRE8gTk9UIG1hdGNoLiAqL1xyXG5leHBvcnQgdmFyIEZvcm1MaXN0RmlsdGVyQnlUeXBlcyA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUsIEZvcm1UeXBlSURzLCBSZXR1cm5NYXRjaGluZykge1xyXG4gICAgaWYgKFJldHVybk1hdGNoaW5nID09PSB2b2lkIDApIHsgUmV0dXJuTWF0Y2hpbmcgPSB0cnVlOyB9XHJcbiAgICByZXR1cm4gc24uRm9ybUxpc3RGaWx0ZXJCeVR5cGVzKE9iaktleSwgS2V5TmFtZSwgRm9ybVR5cGVJRHMsIFJldHVybk1hdGNoaW5nKTtcclxufTtcclxuLy8gQ29udmVuaWVuY2UgdmVyc2lvbiBvZiBGb3JtTGlzdEZpbHRlckJ5VHlwZXMoKSBmb3Igd2hlbiBvbmx5IGdldHRpbmcgYSBzaW5nbGUgdHlwZS5cclxuZXhwb3J0IHZhciBGb3JtTGlzdEZpbHRlckJ5VHlwZSA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUsIEZvcm1UeXBlSUQsIFJldHVybk1hdGNoaW5nKSB7XHJcbiAgICBpZiAoUmV0dXJuTWF0Y2hpbmcgPT09IHZvaWQgMCkgeyBSZXR1cm5NYXRjaGluZyA9IHRydWU7IH1cclxuICAgIHJldHVybiBzbi5Gb3JtTGlzdEZpbHRlckJ5VHlwZShPYmpLZXksIEtleU5hbWUsIEZvcm1UeXBlSUQsIFJldHVybk1hdGNoaW5nKTtcclxufTtcclxuLyoqIENvdW50cyBlYWNoIHR5cGUgb2Ygb2YgYW55IEtleU5hbWUgdGhhdCBzdGFydHMgd2l0aCBhIGdpdmVuIHN0cmluZyBwcmVmaXggb24gYWxsIG9iamVjdHMuXHJcblxyXG4gICBQcmVmaXhLZXk6IFRoZSBzdHJpbmcgYSBLZXlOYW1lIG11c3Qgc3RhcnQgd2l0aCB0byBiZSBjb3VudGVkLiBDYW5ub3QgYmUgZW1wdHkuICovXHJcbmV4cG9ydCB2YXIgQ291bnRJbnRWYWx1ZVByZWZpeCA9IGZ1bmN0aW9uIChQcmVmaXhLZXkpIHsgcmV0dXJuIHNuLkNvdW50SW50VmFsdWVQcmVmaXgoUHJlZml4S2V5KTsgfTtcclxuZXhwb3J0IHZhciBDb3VudEZsb2F0VmFsdWVQcmVmaXggPSBmdW5jdGlvbiAoUHJlZml4S2V5KSB7IHJldHVybiBzbi5Db3VudEZsb2F0VmFsdWVQcmVmaXgoUHJlZml4S2V5KTsgfTtcclxuZXhwb3J0IHZhciBDb3VudFN0cmluZ1ZhbHVlUHJlZml4ID0gZnVuY3Rpb24gKFByZWZpeEtleSkgeyByZXR1cm4gc24uQ291bnRTdHJpbmdWYWx1ZVByZWZpeChQcmVmaXhLZXkpOyB9O1xyXG5leHBvcnQgdmFyIENvdW50Rm9ybVZhbHVlUHJlZml4ID0gZnVuY3Rpb24gKFByZWZpeEtleSkgeyByZXR1cm4gc24uQ291bnRGb3JtVmFsdWVQcmVmaXgoUHJlZml4S2V5KTsgfTtcclxuZXhwb3J0IHZhciBDb3VudEludExpc3RQcmVmaXggPSBmdW5jdGlvbiAoUHJlZml4S2V5KSB7IHJldHVybiBzbi5Db3VudEludExpc3RQcmVmaXgoUHJlZml4S2V5KTsgfTtcclxuZXhwb3J0IHZhciBDb3VudEZsb2F0TGlzdFByZWZpeCA9IGZ1bmN0aW9uIChQcmVmaXhLZXkpIHsgcmV0dXJuIHNuLkNvdW50RmxvYXRMaXN0UHJlZml4KFByZWZpeEtleSk7IH07XHJcbmV4cG9ydCB2YXIgQ291bnRTdHJpbmdMaXN0UHJlZml4ID0gZnVuY3Rpb24gKFByZWZpeEtleSkgeyByZXR1cm4gc24uQ291bnRTdHJpbmdMaXN0UHJlZml4KFByZWZpeEtleSk7IH07XHJcbmV4cG9ydCB2YXIgQ291bnRGb3JtTGlzdFByZWZpeCA9IGZ1bmN0aW9uIChQcmVmaXhLZXkpIHsgcmV0dXJuIHNuLkNvdW50Rm9ybUxpc3RQcmVmaXgoUHJlZml4S2V5KTsgfTtcclxuLy8gUGVyZm9ybXMgYWxsIG9mIHRoZSBhYm92ZSBwcmVmaXggY291bnRzIGluIG9uZSBnby5cclxuZXhwb3J0IHZhciBDb3VudEFsbFByZWZpeCA9IGZ1bmN0aW9uIChQcmVmaXhLZXkpIHsgcmV0dXJuIHNuLkNvdW50QWxsUHJlZml4KFByZWZpeEtleSk7IH07XHJcbi8qKiBDb3VudHMgZWFjaCB0eXBlIG9mIG9mIGFueSBLZXlOYW1lIHRoYXQgc3RhcnRzIHdpdGggYSBnaXZlbiBzdHJpbmcgcHJlZml4IG9uIGFsbCBvYmplY3RzLlxyXG5cclxuICAgT2JqS2V5OiBmb3JtIHRvIHBlcmZvcm0gdGhlIHByZWZpeCBjb3VudCBvbi5cclxuICAgUHJlZml4S2V5OiBUaGUgc3RyaW5nIGEgS2V5TmFtZSBtdXN0IHN0YXJ0IHdpdGggdG8gYmUgY291bnRlZC4gQ2Fubm90IGJlIGVtcHR5LiAqL1xyXG5leHBvcnQgdmFyIENvdW50T2JqSW50VmFsdWVQcmVmaXggPSBmdW5jdGlvbiAoT2JqS2V5LCBQcmVmaXhLZXkpIHsgcmV0dXJuIHNuLkNvdW50T2JqSW50VmFsdWVQcmVmaXgoT2JqS2V5LCBQcmVmaXhLZXkpOyB9O1xyXG5leHBvcnQgdmFyIENvdW50T2JqRmxvYXRWYWx1ZVByZWZpeCA9IGZ1bmN0aW9uIChPYmpLZXksIFByZWZpeEtleSkgeyByZXR1cm4gc24uQ291bnRPYmpGbG9hdFZhbHVlUHJlZml4KE9iaktleSwgUHJlZml4S2V5KTsgfTtcclxuZXhwb3J0IHZhciBDb3VudE9ialN0cmluZ1ZhbHVlUHJlZml4ID0gZnVuY3Rpb24gKE9iaktleSwgUHJlZml4S2V5KSB7IHJldHVybiBzbi5Db3VudE9ialN0cmluZ1ZhbHVlUHJlZml4KE9iaktleSwgUHJlZml4S2V5KTsgfTtcclxuZXhwb3J0IHZhciBDb3VudE9iakZvcm1WYWx1ZVByZWZpeCA9IGZ1bmN0aW9uIChPYmpLZXksIFByZWZpeEtleSkgeyByZXR1cm4gc24uQ291bnRPYmpGb3JtVmFsdWVQcmVmaXgoT2JqS2V5LCBQcmVmaXhLZXkpOyB9O1xyXG5leHBvcnQgdmFyIENvdW50T2JqSW50TGlzdFByZWZpeCA9IGZ1bmN0aW9uIChPYmpLZXksIFByZWZpeEtleSkgeyByZXR1cm4gc24uQ291bnRPYmpJbnRMaXN0UHJlZml4KE9iaktleSwgUHJlZml4S2V5KTsgfTtcclxuZXhwb3J0IHZhciBDb3VudE9iakZsb2F0TGlzdFByZWZpeCA9IGZ1bmN0aW9uIChPYmpLZXksIFByZWZpeEtleSkgeyByZXR1cm4gc24uQ291bnRPYmpGbG9hdExpc3RQcmVmaXgoT2JqS2V5LCBQcmVmaXhLZXkpOyB9O1xyXG5leHBvcnQgdmFyIENvdW50T2JqU3RyaW5nTGlzdFByZWZpeCA9IGZ1bmN0aW9uIChPYmpLZXksIFByZWZpeEtleSkgeyByZXR1cm4gc24uQ291bnRPYmpTdHJpbmdMaXN0UHJlZml4KE9iaktleSwgUHJlZml4S2V5KTsgfTtcclxuZXhwb3J0IHZhciBDb3VudE9iakZvcm1MaXN0UHJlZml4ID0gZnVuY3Rpb24gKE9iaktleSwgUHJlZml4S2V5KSB7IHJldHVybiBzbi5Db3VudE9iakZvcm1MaXN0UHJlZml4KE9iaktleSwgUHJlZml4S2V5KTsgfTtcclxuLy8gUGVyZm9ybXMgYWxsIG9mIHRoZSBhYm92ZSBwcmVmaXggY291bnRzIGluIG9uZSBnby5cclxuZXhwb3J0IHZhciBDb3VudEFsbE9ialByZWZpeCA9IGZ1bmN0aW9uIChPYmpLZXksIFByZWZpeEtleSkgeyByZXR1cm4gc24uQ291bnRBbGxPYmpQcmVmaXgoT2JqS2V5LCBQcmVmaXhLZXkpOyB9O1xyXG4vKiogQ2xlYXJzIGVhY2ggdHlwZSBvZiBvZiBhbnkgS2V5TmFtZSB0aGF0IHN0YXJ0cyB3aXRoIGEgZ2l2ZW4gc3RyaW5nIHByZWZpeCBvbiBhbGwgb2JqZWN0cy5cclxuICAgUmV0dXJucyB0aGUgbnVtYmVyIG9mIHZhbHVlcy9saXN0cyB0aGF0IHdlcmUgdW5zZXQuXHJcblxyXG4gICBQcmVmaXhLZXk6IFRoZSBzdHJpbmcgYSBLZXlOYW1lIG11c3Qgc3RhcnQgd2l0aCB0byBiZSBjbGVhcmVkLiBDYW5ub3QgYmUgZW1wdHkuICovXHJcbmV4cG9ydCB2YXIgQ2xlYXJJbnRWYWx1ZVByZWZpeCA9IGZ1bmN0aW9uIChQcmVmaXhLZXkpIHsgcmV0dXJuIHNuLkNsZWFySW50VmFsdWVQcmVmaXgoUHJlZml4S2V5KTsgfTtcclxuZXhwb3J0IHZhciBDbGVhckZsb2F0VmFsdWVQcmVmaXggPSBmdW5jdGlvbiAoUHJlZml4S2V5KSB7IHJldHVybiBzbi5DbGVhckZsb2F0VmFsdWVQcmVmaXgoUHJlZml4S2V5KTsgfTtcclxuZXhwb3J0IHZhciBDbGVhclN0cmluZ1ZhbHVlUHJlZml4ID0gZnVuY3Rpb24gKFByZWZpeEtleSkgeyByZXR1cm4gc24uQ2xlYXJTdHJpbmdWYWx1ZVByZWZpeChQcmVmaXhLZXkpOyB9O1xyXG5leHBvcnQgdmFyIENsZWFyRm9ybVZhbHVlUHJlZml4ID0gZnVuY3Rpb24gKFByZWZpeEtleSkgeyByZXR1cm4gc24uQ2xlYXJGb3JtVmFsdWVQcmVmaXgoUHJlZml4S2V5KTsgfTtcclxuZXhwb3J0IHZhciBDbGVhckludExpc3RQcmVmaXggPSBmdW5jdGlvbiAoUHJlZml4S2V5KSB7IHJldHVybiBzbi5DbGVhckludExpc3RQcmVmaXgoUHJlZml4S2V5KTsgfTtcclxuZXhwb3J0IHZhciBDbGVhckZsb2F0TGlzdFByZWZpeCA9IGZ1bmN0aW9uIChQcmVmaXhLZXkpIHsgcmV0dXJuIHNuLkNsZWFyRmxvYXRMaXN0UHJlZml4KFByZWZpeEtleSk7IH07XHJcbmV4cG9ydCB2YXIgQ2xlYXJTdHJpbmdMaXN0UHJlZml4ID0gZnVuY3Rpb24gKFByZWZpeEtleSkgeyByZXR1cm4gc24uQ2xlYXJTdHJpbmdMaXN0UHJlZml4KFByZWZpeEtleSk7IH07XHJcbmV4cG9ydCB2YXIgQ2xlYXJGb3JtTGlzdFByZWZpeCA9IGZ1bmN0aW9uIChQcmVmaXhLZXkpIHsgcmV0dXJuIHNuLkNsZWFyRm9ybUxpc3RQcmVmaXgoUHJlZml4S2V5KTsgfTtcclxuLy8gUGVyZm9ybXMgYWxsIG9mIHRoZSBhYm92ZSBwcmVmaXggY2xlYXJzIGluIG9uZSBnby5cclxuZXhwb3J0IHZhciBDbGVhckFsbFByZWZpeCA9IGZ1bmN0aW9uIChQcmVmaXhLZXkpIHsgcmV0dXJuIHNuLkNsZWFyQWxsUHJlZml4KFByZWZpeEtleSk7IH07XHJcbi8qKiBDbGVhcnMgZWFjaCB0eXBlIG9mIG9mIGFueSBLZXlOYW1lIHRoYXQgc3RhcnRzIHdpdGggYSBnaXZlbiBzdHJpbmcgcHJlZml4IG9uIHNwZWNpZmljIG9iamVjdHMuXHJcbiAgIFJldHVybnMgdGhlIG51bWJlciBvZiB2YWx1ZXMvbGlzdHMgdGhhdCB3ZXJlIHVuc2V0LlxyXG5cclxuICAgT2JqS2V5OiBmb3JtIHRvIHBlcmZvcm0gdGhlIHByZWZpeCBjbGVhciBvbi5cclxuICAgUHJlZml4S2V5OiBUaGUgc3RyaW5nIGEgS2V5TmFtZSBtdXN0IHN0YXJ0IHdpdGggdG8gYmUgY2xlYXJlZC4gQ2Fubm90IGJlIGVtcHR5LiAqL1xyXG5leHBvcnQgdmFyIENsZWFyT2JqSW50VmFsdWVQcmVmaXggPSBmdW5jdGlvbiAoT2JqS2V5LCBQcmVmaXhLZXkpIHsgcmV0dXJuIHNuLkNsZWFyT2JqSW50VmFsdWVQcmVmaXgoT2JqS2V5LCBQcmVmaXhLZXkpOyB9O1xyXG5leHBvcnQgdmFyIENsZWFyT2JqRmxvYXRWYWx1ZVByZWZpeCA9IGZ1bmN0aW9uIChPYmpLZXksIFByZWZpeEtleSkgeyByZXR1cm4gc24uQ2xlYXJPYmpGbG9hdFZhbHVlUHJlZml4KE9iaktleSwgUHJlZml4S2V5KTsgfTtcclxuZXhwb3J0IHZhciBDbGVhck9ialN0cmluZ1ZhbHVlUHJlZml4ID0gZnVuY3Rpb24gKE9iaktleSwgUHJlZml4S2V5KSB7IHJldHVybiBzbi5DbGVhck9ialN0cmluZ1ZhbHVlUHJlZml4KE9iaktleSwgUHJlZml4S2V5KTsgfTtcclxuZXhwb3J0IHZhciBDbGVhck9iakZvcm1WYWx1ZVByZWZpeCA9IGZ1bmN0aW9uIChPYmpLZXksIFByZWZpeEtleSkgeyByZXR1cm4gc24uQ2xlYXJPYmpGb3JtVmFsdWVQcmVmaXgoT2JqS2V5LCBQcmVmaXhLZXkpOyB9O1xyXG5leHBvcnQgdmFyIENsZWFyT2JqSW50TGlzdFByZWZpeCA9IGZ1bmN0aW9uIChPYmpLZXksIFByZWZpeEtleSkgeyByZXR1cm4gc24uQ2xlYXJPYmpJbnRMaXN0UHJlZml4KE9iaktleSwgUHJlZml4S2V5KTsgfTtcclxuZXhwb3J0IHZhciBDbGVhck9iakZsb2F0TGlzdFByZWZpeCA9IGZ1bmN0aW9uIChPYmpLZXksIFByZWZpeEtleSkgeyByZXR1cm4gc24uQ2xlYXJPYmpGbG9hdExpc3RQcmVmaXgoT2JqS2V5LCBQcmVmaXhLZXkpOyB9O1xyXG5leHBvcnQgdmFyIENsZWFyT2JqU3RyaW5nTGlzdFByZWZpeCA9IGZ1bmN0aW9uIChPYmpLZXksIFByZWZpeEtleSkgeyByZXR1cm4gc24uQ2xlYXJPYmpTdHJpbmdMaXN0UHJlZml4KE9iaktleSwgUHJlZml4S2V5KTsgfTtcclxuZXhwb3J0IHZhciBDbGVhck9iakZvcm1MaXN0UHJlZml4ID0gZnVuY3Rpb24gKE9iaktleSwgUHJlZml4S2V5KSB7IHJldHVybiBzbi5DbGVhck9iakZvcm1MaXN0UHJlZml4KE9iaktleSwgUHJlZml4S2V5KTsgfTtcclxuLy8gUGVyZm9ybXMgYWxsIG9mIHRoZSBhYm92ZSBwcmVmaXggY2xlYXJzIGluIG9uZSBnby5cclxuZXhwb3J0IHZhciBDbGVhckFsbE9ialByZWZpeCA9IGZ1bmN0aW9uIChPYmpLZXksIFByZWZpeEtleSkgeyByZXR1cm4gc24uQ2xlYXJBbGxPYmpQcmVmaXgoT2JqS2V5LCBQcmVmaXhLZXkpOyB9O1xyXG4vKiogRGVidWcgZnVuY3Rpb25zIC0gY2FuIGJlIGhlbHBmdWwgdG8gZmluZCBwcm9ibGVtcyBvciBmb3IgZGV2ZWxvcG1lbnQuICovXHJcbmV4cG9ydCB2YXIgZGVidWdfRGVsZXRlVmFsdWVzID0gZnVuY3Rpb24gKE9iaktleSkgeyByZXR1cm4gc24uZGVidWdfRGVsZXRlVmFsdWVzKE9iaktleSk7IH07XHJcbmV4cG9ydCB2YXIgZGVidWdfRGVsZXRlQWxsVmFsdWVzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gc24uZGVidWdfRGVsZXRlQWxsVmFsdWVzKCk7IH07XHJcbmV4cG9ydCB2YXIgZGVidWdfQ2xlYW51cCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNuLmRlYnVnX0NsZWFudXAoKTsgfTtcclxuZXhwb3J0IHZhciBkZWJ1Z19BbGxJbnRPYmpzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gc24uZGVidWdfQWxsSW50T2JqcygpOyB9O1xyXG5leHBvcnQgdmFyIGRlYnVnX0FsbEZsb2F0T2JqcyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNuLmRlYnVnX0FsbEZsb2F0T2JqcygpOyB9O1xyXG5leHBvcnQgdmFyIGRlYnVnX0FsbFN0cmluZ09ianMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBzbi5kZWJ1Z19BbGxTdHJpbmdPYmpzKCk7IH07XHJcbmV4cG9ydCB2YXIgZGVidWdfQWxsRm9ybU9ianMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBzbi5kZWJ1Z19BbGxGb3JtT2JqcygpOyB9O1xyXG5leHBvcnQgdmFyIGRlYnVnX0FsbEludExpc3RPYmpzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gc24uZGVidWdfQWxsSW50TGlzdE9ianMoKTsgfTtcclxuZXhwb3J0IHZhciBkZWJ1Z19BbGxGbG9hdExpc3RPYmpzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gc24uZGVidWdfQWxsRmxvYXRMaXN0T2JqcygpOyB9O1xyXG5leHBvcnQgdmFyIGRlYnVnX0FsbFN0cmluZ0xpc3RPYmpzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gc24uZGVidWdfQWxsU3RyaW5nTGlzdE9ianMoKTsgfTtcclxuZXhwb3J0IHZhciBkZWJ1Z19BbGxGb3JtTGlzdE9ianMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBzbi5kZWJ1Z19BbGxGb3JtTGlzdE9ianMoKTsgfTtcclxuZXhwb3J0IHZhciBkZWJ1Z19BbGxPYmpJbnRLZXlzID0gZnVuY3Rpb24gKE9iaktleSkgeyByZXR1cm4gc24uZGVidWdfQWxsT2JqSW50S2V5cyhPYmpLZXkpOyB9O1xyXG5leHBvcnQgdmFyIGRlYnVnX0FsbE9iakZsb2F0S2V5cyA9IGZ1bmN0aW9uIChPYmpLZXkpIHsgcmV0dXJuIHNuLmRlYnVnX0FsbE9iakZsb2F0S2V5cyhPYmpLZXkpOyB9O1xyXG5leHBvcnQgdmFyIGRlYnVnX0FsbE9ialN0cmluZ0tleXMgPSBmdW5jdGlvbiAoT2JqS2V5KSB7IHJldHVybiBzbi5kZWJ1Z19BbGxPYmpTdHJpbmdLZXlzKE9iaktleSk7IH07XHJcbmV4cG9ydCB2YXIgZGVidWdfQWxsT2JqRm9ybUtleXMgPSBmdW5jdGlvbiAoT2JqS2V5KSB7IHJldHVybiBzbi5kZWJ1Z19BbGxPYmpGb3JtS2V5cyhPYmpLZXkpOyB9O1xyXG5leHBvcnQgdmFyIGRlYnVnX0FsbE9iakludExpc3RLZXlzID0gZnVuY3Rpb24gKE9iaktleSkgeyByZXR1cm4gc24uZGVidWdfQWxsT2JqSW50TGlzdEtleXMoT2JqS2V5KTsgfTtcclxuZXhwb3J0IHZhciBkZWJ1Z19BbGxPYmpGbG9hdExpc3RLZXlzID0gZnVuY3Rpb24gKE9iaktleSkgeyByZXR1cm4gc24uZGVidWdfQWxsT2JqRmxvYXRMaXN0S2V5cyhPYmpLZXkpOyB9O1xyXG5leHBvcnQgdmFyIGRlYnVnX0FsbE9ialN0cmluZ0xpc3RLZXlzID0gZnVuY3Rpb24gKE9iaktleSkgeyByZXR1cm4gc24uZGVidWdfQWxsT2JqU3RyaW5nTGlzdEtleXMoT2JqS2V5KTsgfTtcclxuZXhwb3J0IHZhciBkZWJ1Z19BbGxPYmpGb3JtTGlzdEtleXMgPSBmdW5jdGlvbiAoT2JqS2V5KSB7IHJldHVybiBzbi5kZWJ1Z19BbGxPYmpGb3JtTGlzdEtleXMoT2JqS2V5KTsgfTtcclxuZXhwb3J0IHZhciBkZWJ1Z19HZXRJbnRPYmplY3RDb3VudCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNuLmRlYnVnX0dldEludE9iamVjdENvdW50KCk7IH07XHJcbmV4cG9ydCB2YXIgZGVidWdfR2V0RmxvYXRPYmplY3RDb3VudCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNuLmRlYnVnX0dldEZsb2F0T2JqZWN0Q291bnQoKTsgfTtcclxuZXhwb3J0IHZhciBkZWJ1Z19HZXRTdHJpbmdPYmplY3RDb3VudCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNuLmRlYnVnX0dldFN0cmluZ09iamVjdENvdW50KCk7IH07XHJcbmV4cG9ydCB2YXIgZGVidWdfR2V0Rm9ybU9iamVjdENvdW50ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gc24uZGVidWdfR2V0Rm9ybU9iamVjdENvdW50KCk7IH07XHJcbmV4cG9ydCB2YXIgZGVidWdfR2V0SW50TGlzdE9iamVjdENvdW50ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gc24uZGVidWdfR2V0SW50TGlzdE9iamVjdENvdW50KCk7IH07XHJcbmV4cG9ydCB2YXIgZGVidWdfR2V0RmxvYXRMaXN0T2JqZWN0Q291bnQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBzbi5kZWJ1Z19HZXRGbG9hdExpc3RPYmplY3RDb3VudCgpOyB9O1xyXG5leHBvcnQgdmFyIGRlYnVnX0dldFN0cmluZ0xpc3RPYmplY3RDb3VudCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNuLmRlYnVnX0dldFN0cmluZ0xpc3RPYmplY3RDb3VudCgpOyB9O1xyXG5leHBvcnQgdmFyIGRlYnVnX0dldEZvcm1MaXN0T2JqZWN0Q291bnQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBzbi5kZWJ1Z19HZXRGb3JtTGlzdE9iamVjdENvdW50KCk7IH07XHJcbmV4cG9ydCB2YXIgZGVidWdfR2V0SW50T2JqZWN0ID0gZnVuY3Rpb24gKGluZGV4KSB7IHJldHVybiBzbi5kZWJ1Z19HZXRJbnRPYmplY3QoaW5kZXgpOyB9O1xyXG5leHBvcnQgdmFyIGRlYnVnX0dldEZsb2F0T2JqZWN0ID0gZnVuY3Rpb24gKGluZGV4KSB7IHJldHVybiBzbi5kZWJ1Z19HZXRGbG9hdE9iamVjdChpbmRleCk7IH07XHJcbmV4cG9ydCB2YXIgZGVidWdfR2V0U3RyaW5nT2JqZWN0ID0gZnVuY3Rpb24gKGluZGV4KSB7IHJldHVybiBzbi5kZWJ1Z19HZXRTdHJpbmdPYmplY3QoaW5kZXgpOyB9O1xyXG5leHBvcnQgdmFyIGRlYnVnX0dldEZvcm1PYmplY3QgPSBmdW5jdGlvbiAoaW5kZXgpIHsgcmV0dXJuIHNuLmRlYnVnX0dldEZvcm1PYmplY3QoaW5kZXgpOyB9O1xyXG5leHBvcnQgdmFyIGRlYnVnX0dldEludExpc3RPYmplY3QgPSBmdW5jdGlvbiAoaW5kZXgpIHsgcmV0dXJuIHNuLmRlYnVnX0dldEludExpc3RPYmplY3QoaW5kZXgpOyB9O1xyXG5leHBvcnQgdmFyIGRlYnVnX0dldEZsb2F0TGlzdE9iamVjdCA9IGZ1bmN0aW9uIChpbmRleCkgeyByZXR1cm4gc24uZGVidWdfR2V0RmxvYXRMaXN0T2JqZWN0KGluZGV4KTsgfTtcclxuZXhwb3J0IHZhciBkZWJ1Z19HZXRTdHJpbmdMaXN0T2JqZWN0ID0gZnVuY3Rpb24gKGluZGV4KSB7IHJldHVybiBzbi5kZWJ1Z19HZXRTdHJpbmdMaXN0T2JqZWN0KGluZGV4KTsgfTtcclxuZXhwb3J0IHZhciBkZWJ1Z19HZXRGb3JtTGlzdE9iamVjdCA9IGZ1bmN0aW9uIChpbmRleCkgeyByZXR1cm4gc24uZGVidWdfR2V0Rm9ybUxpc3RPYmplY3QoaW5kZXgpOyB9O1xyXG5leHBvcnQgdmFyIGRlYnVnX0dldEludEtleXNDb3VudCA9IGZ1bmN0aW9uIChPYmpLZXkpIHsgcmV0dXJuIHNuLmRlYnVnX0dldEludEtleXNDb3VudChPYmpLZXkpOyB9O1xyXG5leHBvcnQgdmFyIGRlYnVnX0dldEZsb2F0S2V5c0NvdW50ID0gZnVuY3Rpb24gKE9iaktleSkgeyByZXR1cm4gc24uZGVidWdfR2V0RmxvYXRLZXlzQ291bnQoT2JqS2V5KTsgfTtcclxuZXhwb3J0IHZhciBkZWJ1Z19HZXRTdHJpbmdLZXlzQ291bnQgPSBmdW5jdGlvbiAoT2JqS2V5KSB7IHJldHVybiBzbi5kZWJ1Z19HZXRTdHJpbmdLZXlzQ291bnQoT2JqS2V5KTsgfTtcclxuZXhwb3J0IHZhciBkZWJ1Z19HZXRGb3JtS2V5c0NvdW50ID0gZnVuY3Rpb24gKE9iaktleSkgeyByZXR1cm4gc24uZGVidWdfR2V0Rm9ybUtleXNDb3VudChPYmpLZXkpOyB9O1xyXG5leHBvcnQgdmFyIGRlYnVnX0dldEludExpc3RLZXlzQ291bnQgPSBmdW5jdGlvbiAoT2JqS2V5KSB7IHJldHVybiBzbi5kZWJ1Z19HZXRJbnRMaXN0S2V5c0NvdW50KE9iaktleSk7IH07XHJcbmV4cG9ydCB2YXIgZGVidWdfR2V0RmxvYXRMaXN0S2V5c0NvdW50ID0gZnVuY3Rpb24gKE9iaktleSkgeyByZXR1cm4gc24uZGVidWdfR2V0RmxvYXRMaXN0S2V5c0NvdW50KE9iaktleSk7IH07XHJcbmV4cG9ydCB2YXIgZGVidWdfR2V0U3RyaW5nTGlzdEtleXNDb3VudCA9IGZ1bmN0aW9uIChPYmpLZXkpIHsgcmV0dXJuIHNuLmRlYnVnX0dldFN0cmluZ0xpc3RLZXlzQ291bnQoT2JqS2V5KTsgfTtcclxuZXhwb3J0IHZhciBkZWJ1Z19HZXRGb3JtTGlzdEtleXNDb3VudCA9IGZ1bmN0aW9uIChPYmpLZXkpIHsgcmV0dXJuIHNuLmRlYnVnX0dldEZvcm1MaXN0S2V5c0NvdW50KE9iaktleSk7IH07XHJcbmV4cG9ydCB2YXIgZGVidWdfR2V0SW50S2V5ID0gZnVuY3Rpb24gKE9iaktleSwgaW5kZXgpIHsgcmV0dXJuIHNuLmRlYnVnX0dldEludEtleShPYmpLZXksIGluZGV4KTsgfTtcclxuZXhwb3J0IHZhciBkZWJ1Z19HZXRGbG9hdEtleSA9IGZ1bmN0aW9uIChPYmpLZXksIGluZGV4KSB7IHJldHVybiBzbi5kZWJ1Z19HZXRGbG9hdEtleShPYmpLZXksIGluZGV4KTsgfTtcclxuZXhwb3J0IHZhciBkZWJ1Z19HZXRTdHJpbmdLZXkgPSBmdW5jdGlvbiAoT2JqS2V5LCBpbmRleCkgeyByZXR1cm4gc24uZGVidWdfR2V0U3RyaW5nS2V5KE9iaktleSwgaW5kZXgpOyB9O1xyXG5leHBvcnQgdmFyIGRlYnVnX0dldEZvcm1LZXkgPSBmdW5jdGlvbiAoT2JqS2V5LCBpbmRleCkgeyByZXR1cm4gc24uZGVidWdfR2V0Rm9ybUtleShPYmpLZXksIGluZGV4KTsgfTtcclxuZXhwb3J0IHZhciBkZWJ1Z19HZXRJbnRMaXN0S2V5ID0gZnVuY3Rpb24gKE9iaktleSwgaW5kZXgpIHsgcmV0dXJuIHNuLmRlYnVnX0dldEludExpc3RLZXkoT2JqS2V5LCBpbmRleCk7IH07XHJcbmV4cG9ydCB2YXIgZGVidWdfR2V0RmxvYXRMaXN0S2V5ID0gZnVuY3Rpb24gKE9iaktleSwgaW5kZXgpIHsgcmV0dXJuIHNuLmRlYnVnX0dldEZsb2F0TGlzdEtleShPYmpLZXksIGluZGV4KTsgfTtcclxuZXhwb3J0IHZhciBkZWJ1Z19HZXRTdHJpbmdMaXN0S2V5ID0gZnVuY3Rpb24gKE9iaktleSwgaW5kZXgpIHsgcmV0dXJuIHNuLmRlYnVnX0dldFN0cmluZ0xpc3RLZXkoT2JqS2V5LCBpbmRleCk7IH07XHJcbmV4cG9ydCB2YXIgZGVidWdfR2V0Rm9ybUxpc3RLZXkgPSBmdW5jdGlvbiAoT2JqS2V5LCBpbmRleCkgeyByZXR1cm4gc24uZGVidWdfR2V0Rm9ybUxpc3RLZXkoT2JqS2V5LCBpbmRleCk7IH07XHJcbi8qKiBTdG9yYWdlIGZ1bmN0aW9ucyAtIHNlcGFyYXRlIGZpbGUuIFRoZXNlIGFyZSBzaGFyZWQgaW4gYWxsIHNhdmUgZ2FtZXMuIFZhbHVlcyBhcmUgbG9hZGVkIGFuZCBzYXZlZFxyXG4gICB3aGVuIHNhdmVnYW1lIGlzIGxvYWRlZCBvciBzYXZlZC5cclxuXHJcbiAgIERFUFJFQ0FURUQgdjIuOTogUmVwbGFjZWQgYnkgSnNvblV0aWwgZnVuY3Rpb25zLiBFeGlzdGluZyBmdW5jdGlvbnMgaGVyZSBoYXZlIGJlZW4gcHJveGllZCB0byBhIHNoYXJlZFxyXG4gICBqc29uIGZpbGUgdG8gbWFpbnRhaW4gY29tcGF0aWJpbGl0eS4gKi9cclxuZXhwb3J0IHZhciBGaWxlU2V0SW50VmFsdWUgPSBmdW5jdGlvbiAoS2V5TmFtZSwgdmFsdWUpIHsgcmV0dXJuIHNuLkZpbGVTZXRJbnRWYWx1ZShLZXlOYW1lLCB2YWx1ZSk7IH07XHJcbmV4cG9ydCB2YXIgRmlsZVNldEZsb2F0VmFsdWUgPSBmdW5jdGlvbiAoS2V5TmFtZSwgdmFsdWUpIHsgcmV0dXJuIHNuLkZpbGVTZXRGbG9hdFZhbHVlKEtleU5hbWUsIHZhbHVlKTsgfTtcclxuZXhwb3J0IHZhciBGaWxlU2V0U3RyaW5nVmFsdWUgPSBmdW5jdGlvbiAoS2V5TmFtZSwgdmFsdWUpIHsgcmV0dXJuIHNuLkZpbGVTZXRTdHJpbmdWYWx1ZShLZXlOYW1lLCB2YWx1ZSk7IH07XHJcbmV4cG9ydCB2YXIgRmlsZVNldEZvcm1WYWx1ZSA9IGZ1bmN0aW9uIChLZXlOYW1lLCB2YWx1ZSkgeyByZXR1cm4gc24uRmlsZVNldEZvcm1WYWx1ZShLZXlOYW1lLCB2YWx1ZSk7IH07XHJcbmV4cG9ydCB2YXIgRmlsZUFkanVzdEludFZhbHVlID0gZnVuY3Rpb24gKEtleU5hbWUsIGFtb3VudCkgeyByZXR1cm4gc24uRmlsZUFkanVzdEludFZhbHVlKEtleU5hbWUsIGFtb3VudCk7IH07XHJcbmV4cG9ydCB2YXIgRmlsZUFkanVzdEZsb2F0VmFsdWUgPSBmdW5jdGlvbiAoS2V5TmFtZSwgYW1vdW50KSB7IHJldHVybiBzbi5GaWxlQWRqdXN0RmxvYXRWYWx1ZShLZXlOYW1lLCBhbW91bnQpOyB9O1xyXG5leHBvcnQgdmFyIEZpbGVVbnNldEludFZhbHVlID0gZnVuY3Rpb24gKEtleU5hbWUpIHsgcmV0dXJuIHNuLkZpbGVVbnNldEludFZhbHVlKEtleU5hbWUpOyB9O1xyXG5leHBvcnQgdmFyIEZpbGVVbnNldEZsb2F0VmFsdWUgPSBmdW5jdGlvbiAoS2V5TmFtZSkgeyByZXR1cm4gc24uRmlsZVVuc2V0RmxvYXRWYWx1ZShLZXlOYW1lKTsgfTtcclxuZXhwb3J0IHZhciBGaWxlVW5zZXRTdHJpbmdWYWx1ZSA9IGZ1bmN0aW9uIChLZXlOYW1lKSB7IHJldHVybiBzbi5GaWxlVW5zZXRTdHJpbmdWYWx1ZShLZXlOYW1lKTsgfTtcclxuZXhwb3J0IHZhciBGaWxlVW5zZXRGb3JtVmFsdWUgPSBmdW5jdGlvbiAoS2V5TmFtZSkgeyByZXR1cm4gc24uRmlsZVVuc2V0Rm9ybVZhbHVlKEtleU5hbWUpOyB9O1xyXG5leHBvcnQgdmFyIEZpbGVIYXNJbnRWYWx1ZSA9IGZ1bmN0aW9uIChLZXlOYW1lKSB7IHJldHVybiBzbi5GaWxlSGFzSW50VmFsdWUoS2V5TmFtZSk7IH07XHJcbmV4cG9ydCB2YXIgRmlsZUhhc0Zsb2F0VmFsdWUgPSBmdW5jdGlvbiAoS2V5TmFtZSkgeyByZXR1cm4gc24uRmlsZUhhc0Zsb2F0VmFsdWUoS2V5TmFtZSk7IH07XHJcbmV4cG9ydCB2YXIgRmlsZUhhc1N0cmluZ1ZhbHVlID0gZnVuY3Rpb24gKEtleU5hbWUpIHsgcmV0dXJuIHNuLkZpbGVIYXNTdHJpbmdWYWx1ZShLZXlOYW1lKTsgfTtcclxuZXhwb3J0IHZhciBGaWxlSGFzRm9ybVZhbHVlID0gZnVuY3Rpb24gKEtleU5hbWUpIHsgcmV0dXJuIHNuLkZpbGVIYXNGb3JtVmFsdWUoS2V5TmFtZSk7IH07XHJcbmV4cG9ydCB2YXIgRmlsZUdldEludFZhbHVlID0gZnVuY3Rpb24gKEtleU5hbWUsIG1pc3NpbmcpIHtcclxuICAgIGlmIChtaXNzaW5nID09PSB2b2lkIDApIHsgbWlzc2luZyA9IDA7IH1cclxuICAgIHJldHVybiBzbi5GaWxlR2V0SW50VmFsdWUoS2V5TmFtZSwgbWlzc2luZyk7XHJcbn07XHJcbmV4cG9ydCB2YXIgRmlsZUdldEZsb2F0VmFsdWUgPSBmdW5jdGlvbiAoS2V5TmFtZSwgbWlzc2luZykge1xyXG4gICAgaWYgKG1pc3NpbmcgPT09IHZvaWQgMCkgeyBtaXNzaW5nID0gMC4wOyB9XHJcbiAgICByZXR1cm4gc24uRmlsZUdldEZsb2F0VmFsdWUoS2V5TmFtZSwgbWlzc2luZyk7XHJcbn07XHJcbmV4cG9ydCB2YXIgRmlsZUdldFN0cmluZ1ZhbHVlID0gZnVuY3Rpb24gKEtleU5hbWUsIG1pc3NpbmcpIHtcclxuICAgIGlmIChtaXNzaW5nID09PSB2b2lkIDApIHsgbWlzc2luZyA9IFwiXCI7IH1cclxuICAgIHJldHVybiBzbi5GaWxlR2V0U3RyaW5nVmFsdWUoS2V5TmFtZSwgbWlzc2luZyk7XHJcbn07XHJcbmV4cG9ydCB2YXIgRmlsZUdldEZvcm1WYWx1ZSA9IGZ1bmN0aW9uIChLZXlOYW1lLCBtaXNzaW5nKSB7XHJcbiAgICBpZiAobWlzc2luZyA9PT0gdm9pZCAwKSB7IG1pc3NpbmcgPSBudWxsOyB9XHJcbiAgICByZXR1cm4gc24uRmlsZUdldEZvcm1WYWx1ZShLZXlOYW1lLCBtaXNzaW5nKTtcclxufTtcclxuZXhwb3J0IHZhciBGaWxlSW50TGlzdEFkZCA9IGZ1bmN0aW9uIChLZXlOYW1lLCB2YWx1ZSwgYWxsb3dEdXBsaWNhdGUpIHtcclxuICAgIGlmIChhbGxvd0R1cGxpY2F0ZSA9PT0gdm9pZCAwKSB7IGFsbG93RHVwbGljYXRlID0gdHJ1ZTsgfVxyXG4gICAgcmV0dXJuIHNuLkZpbGVJbnRMaXN0QWRkKEtleU5hbWUsIHZhbHVlLCBhbGxvd0R1cGxpY2F0ZSk7XHJcbn07XHJcbmV4cG9ydCB2YXIgRmlsZUZsb2F0TGlzdEFkZCA9IGZ1bmN0aW9uIChLZXlOYW1lLCB2YWx1ZSwgYWxsb3dEdXBsaWNhdGUpIHtcclxuICAgIGlmIChhbGxvd0R1cGxpY2F0ZSA9PT0gdm9pZCAwKSB7IGFsbG93RHVwbGljYXRlID0gdHJ1ZTsgfVxyXG4gICAgcmV0dXJuIHNuLkZpbGVGbG9hdExpc3RBZGQoS2V5TmFtZSwgdmFsdWUsIGFsbG93RHVwbGljYXRlKTtcclxufTtcclxuZXhwb3J0IHZhciBGaWxlU3RyaW5nTGlzdEFkZCA9IGZ1bmN0aW9uIChLZXlOYW1lLCB2YWx1ZSwgYWxsb3dEdXBsaWNhdGUpIHtcclxuICAgIGlmIChhbGxvd0R1cGxpY2F0ZSA9PT0gdm9pZCAwKSB7IGFsbG93RHVwbGljYXRlID0gdHJ1ZTsgfVxyXG4gICAgcmV0dXJuIHNuLkZpbGVTdHJpbmdMaXN0QWRkKEtleU5hbWUsIHZhbHVlLCBhbGxvd0R1cGxpY2F0ZSk7XHJcbn07XHJcbmV4cG9ydCB2YXIgRmlsZUZvcm1MaXN0QWRkID0gZnVuY3Rpb24gKEtleU5hbWUsIHZhbHVlLCBhbGxvd0R1cGxpY2F0ZSkge1xyXG4gICAgaWYgKGFsbG93RHVwbGljYXRlID09PSB2b2lkIDApIHsgYWxsb3dEdXBsaWNhdGUgPSB0cnVlOyB9XHJcbiAgICByZXR1cm4gc24uRmlsZUZvcm1MaXN0QWRkKEtleU5hbWUsIHZhbHVlLCBhbGxvd0R1cGxpY2F0ZSk7XHJcbn07XHJcbmV4cG9ydCB2YXIgRmlsZUludExpc3RBZGp1c3QgPSBmdW5jdGlvbiAoS2V5TmFtZSwgaW5kZXgsIGFtb3VudCkgeyByZXR1cm4gc24uRmlsZUludExpc3RBZGp1c3QoS2V5TmFtZSwgaW5kZXgsIGFtb3VudCk7IH07XHJcbmV4cG9ydCB2YXIgRmlsZUZsb2F0TGlzdEFkanVzdCA9IGZ1bmN0aW9uIChLZXlOYW1lLCBpbmRleCwgYW1vdW50KSB7IHJldHVybiBzbi5GaWxlRmxvYXRMaXN0QWRqdXN0KEtleU5hbWUsIGluZGV4LCBhbW91bnQpOyB9O1xyXG5leHBvcnQgdmFyIEZpbGVJbnRMaXN0UmVtb3ZlID0gZnVuY3Rpb24gKEtleU5hbWUsIHZhbHVlLCBhbGxJbnN0YW5jZXMpIHtcclxuICAgIGlmIChhbGxJbnN0YW5jZXMgPT09IHZvaWQgMCkgeyBhbGxJbnN0YW5jZXMgPSBmYWxzZTsgfVxyXG4gICAgcmV0dXJuIHNuLkZpbGVJbnRMaXN0UmVtb3ZlKEtleU5hbWUsIHZhbHVlLCBhbGxJbnN0YW5jZXMpO1xyXG59O1xyXG5leHBvcnQgdmFyIEZpbGVGbG9hdExpc3RSZW1vdmUgPSBmdW5jdGlvbiAoS2V5TmFtZSwgdmFsdWUsIGFsbEluc3RhbmNlcykge1xyXG4gICAgaWYgKGFsbEluc3RhbmNlcyA9PT0gdm9pZCAwKSB7IGFsbEluc3RhbmNlcyA9IGZhbHNlOyB9XHJcbiAgICByZXR1cm4gc24uRmlsZUZsb2F0TGlzdFJlbW92ZShLZXlOYW1lLCB2YWx1ZSwgYWxsSW5zdGFuY2VzKTtcclxufTtcclxuZXhwb3J0IHZhciBGaWxlU3RyaW5nTGlzdFJlbW92ZSA9IGZ1bmN0aW9uIChLZXlOYW1lLCB2YWx1ZSwgYWxsSW5zdGFuY2VzKSB7XHJcbiAgICBpZiAoYWxsSW5zdGFuY2VzID09PSB2b2lkIDApIHsgYWxsSW5zdGFuY2VzID0gZmFsc2U7IH1cclxuICAgIHJldHVybiBzbi5GaWxlU3RyaW5nTGlzdFJlbW92ZShLZXlOYW1lLCB2YWx1ZSwgYWxsSW5zdGFuY2VzKTtcclxufTtcclxuZXhwb3J0IHZhciBGaWxlRm9ybUxpc3RSZW1vdmUgPSBmdW5jdGlvbiAoS2V5TmFtZSwgdmFsdWUsIGFsbEluc3RhbmNlcykge1xyXG4gICAgaWYgKGFsbEluc3RhbmNlcyA9PT0gdm9pZCAwKSB7IGFsbEluc3RhbmNlcyA9IGZhbHNlOyB9XHJcbiAgICByZXR1cm4gc24uRmlsZUZvcm1MaXN0UmVtb3ZlKEtleU5hbWUsIHZhbHVlLCBhbGxJbnN0YW5jZXMpO1xyXG59O1xyXG5leHBvcnQgdmFyIEZpbGVJbnRMaXN0R2V0ID0gZnVuY3Rpb24gKEtleU5hbWUsIGluZGV4KSB7IHJldHVybiBzbi5GaWxlSW50TGlzdEdldChLZXlOYW1lLCBpbmRleCk7IH07XHJcbmV4cG9ydCB2YXIgRmlsZUZsb2F0TGlzdEdldCA9IGZ1bmN0aW9uIChLZXlOYW1lLCBpbmRleCkgeyByZXR1cm4gc24uRmlsZUZsb2F0TGlzdEdldChLZXlOYW1lLCBpbmRleCk7IH07XHJcbmV4cG9ydCB2YXIgRmlsZVN0cmluZ0xpc3RHZXQgPSBmdW5jdGlvbiAoS2V5TmFtZSwgaW5kZXgpIHsgcmV0dXJuIHNuLkZpbGVTdHJpbmdMaXN0R2V0KEtleU5hbWUsIGluZGV4KTsgfTtcclxuZXhwb3J0IHZhciBGaWxlRm9ybUxpc3RHZXQgPSBmdW5jdGlvbiAoS2V5TmFtZSwgaW5kZXgpIHsgcmV0dXJuIHNuLkZpbGVGb3JtTGlzdEdldChLZXlOYW1lLCBpbmRleCk7IH07XHJcbmV4cG9ydCB2YXIgRmlsZUludExpc3RTZXQgPSBmdW5jdGlvbiAoS2V5TmFtZSwgaW5kZXgsIHZhbHVlKSB7IHJldHVybiBzbi5GaWxlSW50TGlzdFNldChLZXlOYW1lLCBpbmRleCwgdmFsdWUpOyB9O1xyXG5leHBvcnQgdmFyIEZpbGVGbG9hdExpc3RTZXQgPSBmdW5jdGlvbiAoS2V5TmFtZSwgaW5kZXgsIHZhbHVlKSB7IHJldHVybiBzbi5GaWxlRmxvYXRMaXN0U2V0KEtleU5hbWUsIGluZGV4LCB2YWx1ZSk7IH07XHJcbmV4cG9ydCB2YXIgRmlsZVN0cmluZ0xpc3RTZXQgPSBmdW5jdGlvbiAoS2V5TmFtZSwgaW5kZXgsIHZhbHVlKSB7IHJldHVybiBzbi5GaWxlU3RyaW5nTGlzdFNldChLZXlOYW1lLCBpbmRleCwgdmFsdWUpOyB9O1xyXG5leHBvcnQgdmFyIEZpbGVGb3JtTGlzdFNldCA9IGZ1bmN0aW9uIChLZXlOYW1lLCBpbmRleCwgdmFsdWUpIHsgcmV0dXJuIHNuLkZpbGVGb3JtTGlzdFNldChLZXlOYW1lLCBpbmRleCwgdmFsdWUpOyB9O1xyXG5leHBvcnQgdmFyIEZpbGVJbnRMaXN0Q2xlYXIgPSBmdW5jdGlvbiAoS2V5TmFtZSkgeyByZXR1cm4gc24uRmlsZUludExpc3RDbGVhcihLZXlOYW1lKTsgfTtcclxuZXhwb3J0IHZhciBGaWxlRmxvYXRMaXN0Q2xlYXIgPSBmdW5jdGlvbiAoS2V5TmFtZSkgeyByZXR1cm4gc24uRmlsZUZsb2F0TGlzdENsZWFyKEtleU5hbWUpOyB9O1xyXG5leHBvcnQgdmFyIEZpbGVTdHJpbmdMaXN0Q2xlYXIgPSBmdW5jdGlvbiAoS2V5TmFtZSkgeyByZXR1cm4gc24uRmlsZVN0cmluZ0xpc3RDbGVhcihLZXlOYW1lKTsgfTtcclxuZXhwb3J0IHZhciBGaWxlRm9ybUxpc3RDbGVhciA9IGZ1bmN0aW9uIChLZXlOYW1lKSB7IHJldHVybiBzbi5GaWxlRm9ybUxpc3RDbGVhcihLZXlOYW1lKTsgfTtcclxuZXhwb3J0IHZhciBGaWxlSW50TGlzdFJlbW92ZUF0ID0gZnVuY3Rpb24gKEtleU5hbWUsIGluZGV4KSB7IHJldHVybiBzbi5GaWxlSW50TGlzdFJlbW92ZUF0KEtleU5hbWUsIGluZGV4KTsgfTtcclxuZXhwb3J0IHZhciBGaWxlRmxvYXRMaXN0UmVtb3ZlQXQgPSBmdW5jdGlvbiAoS2V5TmFtZSwgaW5kZXgpIHsgcmV0dXJuIHNuLkZpbGVGbG9hdExpc3RSZW1vdmVBdChLZXlOYW1lLCBpbmRleCk7IH07XHJcbmV4cG9ydCB2YXIgRmlsZVN0cmluZ0xpc3RSZW1vdmVBdCA9IGZ1bmN0aW9uIChLZXlOYW1lLCBpbmRleCkgeyByZXR1cm4gc24uRmlsZVN0cmluZ0xpc3RSZW1vdmVBdChLZXlOYW1lLCBpbmRleCk7IH07XHJcbmV4cG9ydCB2YXIgRmlsZUZvcm1MaXN0UmVtb3ZlQXQgPSBmdW5jdGlvbiAoS2V5TmFtZSwgaW5kZXgpIHsgcmV0dXJuIHNuLkZpbGVGb3JtTGlzdFJlbW92ZUF0KEtleU5hbWUsIGluZGV4KTsgfTtcclxuZXhwb3J0IHZhciBGaWxlSW50TGlzdEluc2VydCA9IGZ1bmN0aW9uIChLZXlOYW1lLCBpbmRleCwgdmFsdWUpIHsgcmV0dXJuIHNuLkZpbGVJbnRMaXN0SW5zZXJ0KEtleU5hbWUsIGluZGV4LCB2YWx1ZSk7IH07XHJcbmV4cG9ydCB2YXIgRmlsZUZsb2F0TGlzdEluc2VydCA9IGZ1bmN0aW9uIChLZXlOYW1lLCBpbmRleCwgdmFsdWUpIHsgcmV0dXJuIHNuLkZpbGVGbG9hdExpc3RJbnNlcnQoS2V5TmFtZSwgaW5kZXgsIHZhbHVlKTsgfTtcclxuZXhwb3J0IHZhciBGaWxlU3RyaW5nTGlzdEluc2VydCA9IGZ1bmN0aW9uIChLZXlOYW1lLCBpbmRleCwgdmFsdWUpIHsgcmV0dXJuIHNuLkZpbGVTdHJpbmdMaXN0SW5zZXJ0KEtleU5hbWUsIGluZGV4LCB2YWx1ZSk7IH07XHJcbmV4cG9ydCB2YXIgRmlsZUZvcm1MaXN0SW5zZXJ0ID0gZnVuY3Rpb24gKEtleU5hbWUsIGluZGV4LCB2YWx1ZSkgeyByZXR1cm4gc24uRmlsZUZvcm1MaXN0SW5zZXJ0KEtleU5hbWUsIGluZGV4LCB2YWx1ZSk7IH07XHJcbmV4cG9ydCB2YXIgRmlsZUludExpc3RDb3VudCA9IGZ1bmN0aW9uIChLZXlOYW1lKSB7IHJldHVybiBzbi5GaWxlSW50TGlzdENvdW50KEtleU5hbWUpOyB9O1xyXG5leHBvcnQgdmFyIEZpbGVGbG9hdExpc3RDb3VudCA9IGZ1bmN0aW9uIChLZXlOYW1lKSB7IHJldHVybiBzbi5GaWxlRmxvYXRMaXN0Q291bnQoS2V5TmFtZSk7IH07XHJcbmV4cG9ydCB2YXIgRmlsZVN0cmluZ0xpc3RDb3VudCA9IGZ1bmN0aW9uIChLZXlOYW1lKSB7IHJldHVybiBzbi5GaWxlU3RyaW5nTGlzdENvdW50KEtleU5hbWUpOyB9O1xyXG5leHBvcnQgdmFyIEZpbGVGb3JtTGlzdENvdW50ID0gZnVuY3Rpb24gKEtleU5hbWUpIHsgcmV0dXJuIHNuLkZpbGVGb3JtTGlzdENvdW50KEtleU5hbWUpOyB9O1xyXG5leHBvcnQgdmFyIEZpbGVJbnRMaXN0RmluZCA9IGZ1bmN0aW9uIChLZXlOYW1lLCB2YWx1ZSkgeyByZXR1cm4gc24uRmlsZUludExpc3RGaW5kKEtleU5hbWUsIHZhbHVlKTsgfTtcclxuZXhwb3J0IHZhciBGaWxlRmxvYXRMaXN0RmluZCA9IGZ1bmN0aW9uIChLZXlOYW1lLCB2YWx1ZSkgeyByZXR1cm4gc24uRmlsZUZsb2F0TGlzdEZpbmQoS2V5TmFtZSwgdmFsdWUpOyB9O1xyXG5leHBvcnQgdmFyIEZpbGVTdHJpbmdMaXN0RmluZCA9IGZ1bmN0aW9uIChLZXlOYW1lLCB2YWx1ZSkgeyByZXR1cm4gc24uRmlsZVN0cmluZ0xpc3RGaW5kKEtleU5hbWUsIHZhbHVlKTsgfTtcclxuZXhwb3J0IHZhciBGaWxlRm9ybUxpc3RGaW5kID0gZnVuY3Rpb24gKEtleU5hbWUsIHZhbHVlKSB7IHJldHVybiBzbi5GaWxlRm9ybUxpc3RGaW5kKEtleU5hbWUsIHZhbHVlKTsgfTtcclxuZXhwb3J0IHZhciBGaWxlSW50TGlzdEhhcyA9IGZ1bmN0aW9uIChLZXlOYW1lLCB2YWx1ZSkgeyByZXR1cm4gc24uRmlsZUludExpc3RIYXMoS2V5TmFtZSwgdmFsdWUpOyB9O1xyXG5leHBvcnQgdmFyIEZpbGVGbG9hdExpc3RIYXMgPSBmdW5jdGlvbiAoS2V5TmFtZSwgdmFsdWUpIHsgcmV0dXJuIHNuLkZpbGVGbG9hdExpc3RIYXMoS2V5TmFtZSwgdmFsdWUpOyB9O1xyXG5leHBvcnQgdmFyIEZpbGVTdHJpbmdMaXN0SGFzID0gZnVuY3Rpb24gKEtleU5hbWUsIHZhbHVlKSB7IHJldHVybiBzbi5GaWxlU3RyaW5nTGlzdEhhcyhLZXlOYW1lLCB2YWx1ZSk7IH07XHJcbmV4cG9ydCB2YXIgRmlsZUZvcm1MaXN0SGFzID0gZnVuY3Rpb24gKEtleU5hbWUsIHZhbHVlKSB7IHJldHVybiBzbi5GaWxlRm9ybUxpc3RIYXMoS2V5TmFtZSwgdmFsdWUpOyB9O1xyXG5leHBvcnQgdmFyIEZpbGVJbnRMaXN0U2xpY2UgPSBmdW5jdGlvbiAoS2V5TmFtZSwgc2xpY2UsIHN0YXJ0SW5kZXgpIHtcclxuICAgIGlmIChzdGFydEluZGV4ID09PSB2b2lkIDApIHsgc3RhcnRJbmRleCA9IDA7IH1cclxuICAgIHJldHVybiBzbi5GaWxlSW50TGlzdFNsaWNlKEtleU5hbWUsIHNsaWNlLCBzdGFydEluZGV4KTtcclxufTtcclxuZXhwb3J0IHZhciBGaWxlRmxvYXRMaXN0U2xpY2UgPSBmdW5jdGlvbiAoS2V5TmFtZSwgc2xpY2UsIHN0YXJ0SW5kZXgpIHtcclxuICAgIGlmIChzdGFydEluZGV4ID09PSB2b2lkIDApIHsgc3RhcnRJbmRleCA9IDA7IH1cclxuICAgIHJldHVybiBzbi5GaWxlRmxvYXRMaXN0U2xpY2UoS2V5TmFtZSwgc2xpY2UsIHN0YXJ0SW5kZXgpO1xyXG59O1xyXG5leHBvcnQgdmFyIEZpbGVTdHJpbmdMaXN0U2xpY2UgPSBmdW5jdGlvbiAoS2V5TmFtZSwgc2xpY2UsIHN0YXJ0SW5kZXgpIHtcclxuICAgIGlmIChzdGFydEluZGV4ID09PSB2b2lkIDApIHsgc3RhcnRJbmRleCA9IDA7IH1cclxuICAgIHJldHVybiBzbi5GaWxlU3RyaW5nTGlzdFNsaWNlKEtleU5hbWUsIHNsaWNlLCBzdGFydEluZGV4KTtcclxufTtcclxuZXhwb3J0IHZhciBGaWxlRm9ybUxpc3RTbGljZSA9IGZ1bmN0aW9uIChLZXlOYW1lLCBzbGljZSwgc3RhcnRJbmRleCkge1xyXG4gICAgaWYgKHN0YXJ0SW5kZXggPT09IHZvaWQgMCkgeyBzdGFydEluZGV4ID0gMDsgfVxyXG4gICAgcmV0dXJuIHNuLkZpbGVGb3JtTGlzdFNsaWNlKEtleU5hbWUsIHNsaWNlLCBzdGFydEluZGV4KTtcclxufTtcclxuZXhwb3J0IHZhciBGaWxlSW50TGlzdFJlc2l6ZSA9IGZ1bmN0aW9uIChLZXlOYW1lLCB0b0xlbmd0aCwgZmlsbGVyKSB7XHJcbiAgICBpZiAoZmlsbGVyID09PSB2b2lkIDApIHsgZmlsbGVyID0gMDsgfVxyXG4gICAgcmV0dXJuIHNuLkZpbGVJbnRMaXN0UmVzaXplKEtleU5hbWUsIHRvTGVuZ3RoLCBmaWxsZXIpO1xyXG59O1xyXG5leHBvcnQgdmFyIEZpbGVGbG9hdExpc3RSZXNpemUgPSBmdW5jdGlvbiAoS2V5TmFtZSwgdG9MZW5ndGgsIGZpbGxlcikge1xyXG4gICAgaWYgKGZpbGxlciA9PT0gdm9pZCAwKSB7IGZpbGxlciA9IDAuMDsgfVxyXG4gICAgcmV0dXJuIHNuLkZpbGVGbG9hdExpc3RSZXNpemUoS2V5TmFtZSwgdG9MZW5ndGgsIGZpbGxlcik7XHJcbn07XHJcbmV4cG9ydCB2YXIgRmlsZVN0cmluZ0xpc3RSZXNpemUgPSBmdW5jdGlvbiAoS2V5TmFtZSwgdG9MZW5ndGgsIGZpbGxlcikge1xyXG4gICAgaWYgKGZpbGxlciA9PT0gdm9pZCAwKSB7IGZpbGxlciA9IFwiXCI7IH1cclxuICAgIHJldHVybiBzbi5GaWxlU3RyaW5nTGlzdFJlc2l6ZShLZXlOYW1lLCB0b0xlbmd0aCwgZmlsbGVyKTtcclxufTtcclxuZXhwb3J0IHZhciBGaWxlRm9ybUxpc3RSZXNpemUgPSBmdW5jdGlvbiAoS2V5TmFtZSwgdG9MZW5ndGgsIGZpbGxlcikge1xyXG4gICAgaWYgKGZpbGxlciA9PT0gdm9pZCAwKSB7IGZpbGxlciA9IG51bGw7IH1cclxuICAgIHJldHVybiBzbi5GaWxlRm9ybUxpc3RSZXNpemUoS2V5TmFtZSwgdG9MZW5ndGgsIGZpbGxlcik7XHJcbn07XHJcbmV4cG9ydCB2YXIgRmlsZUludExpc3RDb3B5ID0gZnVuY3Rpb24gKEtleU5hbWUsIGNvcHkpIHsgcmV0dXJuIHNuLkZpbGVJbnRMaXN0Q29weShLZXlOYW1lLCBjb3B5KTsgfTtcclxuZXhwb3J0IHZhciBGaWxlRmxvYXRMaXN0Q29weSA9IGZ1bmN0aW9uIChLZXlOYW1lLCBjb3B5KSB7IHJldHVybiBzbi5GaWxlRmxvYXRMaXN0Q29weShLZXlOYW1lLCBjb3B5KTsgfTtcclxuZXhwb3J0IHZhciBGaWxlU3RyaW5nTGlzdENvcHkgPSBmdW5jdGlvbiAoS2V5TmFtZSwgY29weSkgeyByZXR1cm4gc24uRmlsZVN0cmluZ0xpc3RDb3B5KEtleU5hbWUsIGNvcHkpOyB9O1xyXG5leHBvcnQgdmFyIEZpbGVGb3JtTGlzdENvcHkgPSBmdW5jdGlvbiAoS2V5TmFtZSwgY29weSkgeyByZXR1cm4gc24uRmlsZUZvcm1MaXN0Q29weShLZXlOYW1lLCBjb3B5KTsgfTtcclxuZXhwb3J0IHZhciBkZWJ1Z19TYXZlRmlsZSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNuLmRlYnVnX1NhdmVGaWxlKCk7IH07XHJcbi8qKiBDdXJyZW50bHkgbm8gbG9uZ2VyIGltcGxlbWVudGVkLCB1bmtub3duIGlmL3doZW4gdGhleSB3aWxsIHJldHVybi4gKi9cclxuZXhwb3J0IHZhciBkZWJ1Z19GaWxlR2V0SW50S2V5c0NvdW50ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gc24uZGVidWdfRmlsZUdldEludEtleXNDb3VudCgpOyB9O1xyXG4wO1xyXG5leHBvcnQgdmFyIGRlYnVnX0ZpbGVHZXRGbG9hdEtleXNDb3VudCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNuLmRlYnVnX0ZpbGVHZXRGbG9hdEtleXNDb3VudCgpOyB9O1xyXG4wO1xyXG5leHBvcnQgdmFyIGRlYnVnX0ZpbGVHZXRTdHJpbmdLZXlzQ291bnQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBzbi5kZWJ1Z19GaWxlR2V0U3RyaW5nS2V5c0NvdW50KCk7IH07XHJcbjA7XHJcbmV4cG9ydCB2YXIgZGVidWdfRmlsZUdldEludExpc3RLZXlzQ291bnQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBzbi5kZWJ1Z19GaWxlR2V0SW50TGlzdEtleXNDb3VudCgpOyB9O1xyXG4wO1xyXG5leHBvcnQgdmFyIGRlYnVnX0ZpbGVHZXRGbG9hdExpc3RLZXlzQ291bnQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBzbi5kZWJ1Z19GaWxlR2V0RmxvYXRMaXN0S2V5c0NvdW50KCk7IH07XHJcbjA7XHJcbmV4cG9ydCB2YXIgZGVidWdfRmlsZUdldFN0cmluZ0xpc3RLZXlzQ291bnQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBzbi5kZWJ1Z19GaWxlR2V0U3RyaW5nTGlzdEtleXNDb3VudCgpOyB9O1xyXG4wO1xyXG5leHBvcnQgdmFyIGRlYnVnX0ZpbGVHZXRJbnRLZXkgPSBmdW5jdGlvbiAoaW5kZXgpIHsgcmV0dXJuIHNuLmRlYnVnX0ZpbGVHZXRJbnRLZXkoaW5kZXgpOyB9O1xyXG5cIlwiO1xyXG5leHBvcnQgdmFyIGRlYnVnX0ZpbGVHZXRGbG9hdEtleSA9IGZ1bmN0aW9uIChpbmRleCkgeyByZXR1cm4gc24uZGVidWdfRmlsZUdldEZsb2F0S2V5KGluZGV4KTsgfTtcclxuXCJcIjtcclxuZXhwb3J0IHZhciBkZWJ1Z19GaWxlR2V0U3RyaW5nS2V5ID0gZnVuY3Rpb24gKGluZGV4KSB7IHJldHVybiBzbi5kZWJ1Z19GaWxlR2V0U3RyaW5nS2V5KGluZGV4KTsgfTtcclxuXCJcIjtcclxuZXhwb3J0IHZhciBkZWJ1Z19GaWxlR2V0SW50TGlzdEtleSA9IGZ1bmN0aW9uIChpbmRleCkgeyByZXR1cm4gc24uZGVidWdfRmlsZUdldEludExpc3RLZXkoaW5kZXgpOyB9O1xyXG5cIlwiO1xyXG5leHBvcnQgdmFyIGRlYnVnX0ZpbGVHZXRGbG9hdExpc3RLZXkgPSBmdW5jdGlvbiAoaW5kZXgpIHsgcmV0dXJuIHNuLmRlYnVnX0ZpbGVHZXRGbG9hdExpc3RLZXkoaW5kZXgpOyB9O1xyXG5cIlwiO1xyXG5leHBvcnQgdmFyIGRlYnVnX0ZpbGVHZXRTdHJpbmdMaXN0S2V5ID0gZnVuY3Rpb24gKGluZGV4KSB7IHJldHVybiBzbi5kZWJ1Z19GaWxlR2V0U3RyaW5nTGlzdEtleShpbmRleCk7IH07XHJcblwiXCI7XHJcbmV4cG9ydCB2YXIgZGVidWdfRmlsZURlbGV0ZUFsbFZhbHVlcyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNuLmRlYnVnX0ZpbGVEZWxldGVBbGxWYWx1ZXMoKTsgfTtcclxuZXhwb3J0IHZhciBkZWJ1Z19TZXREZWJ1Z01vZGUgPSBmdW5jdGlvbiAoZW5hYmxlZCkgeyByZXR1cm4gc24uZGVidWdfU2V0RGVidWdNb2RlKGVuYWJsZWQpOyB9O1xyXG5leHBvcnQgdmFyIEltcG9ydEZpbGUgPSBmdW5jdGlvbiAoZmlsZU5hbWUsIHJlc3RyaWN0S2V5LCByZXN0cmljdFR5cGUsIHJlc3RyaWN0Rm9ybSwgcmVzdHJpY3RHbG9iYWwsIGtleUNvbnRhaW5zKSB7XHJcbiAgICBpZiAocmVzdHJpY3RLZXkgPT09IHZvaWQgMCkgeyByZXN0cmljdEtleSA9IFwiXCI7IH1cclxuICAgIGlmIChyZXN0cmljdFR5cGUgPT09IHZvaWQgMCkgeyByZXN0cmljdFR5cGUgPSAtMTsgfVxyXG4gICAgaWYgKHJlc3RyaWN0Rm9ybSA9PT0gdm9pZCAwKSB7IHJlc3RyaWN0Rm9ybSA9IG51bGw7IH1cclxuICAgIGlmIChyZXN0cmljdEdsb2JhbCA9PT0gdm9pZCAwKSB7IHJlc3RyaWN0R2xvYmFsID0gZmFsc2U7IH1cclxuICAgIGlmIChrZXlDb250YWlucyA9PT0gdm9pZCAwKSB7IGtleUNvbnRhaW5zID0gZmFsc2U7IH1cclxuICAgIHJldHVybiBzbi5JbXBvcnRGaWxlKGZpbGVOYW1lLCByZXN0cmljdEtleSwgcmVzdHJpY3RUeXBlLCByZXN0cmljdEZvcm0sIHJlc3RyaWN0R2xvYmFsLCBrZXlDb250YWlucyk7XHJcbn07XHJcbmZhbHNlO1xyXG5leHBvcnQgdmFyIEV4cG9ydEZpbGUgPSBmdW5jdGlvbiAoZmlsZU5hbWUsIHJlc3RyaWN0S2V5LCByZXN0cmljdFR5cGUsIHJlc3RyaWN0Rm9ybSwgcmVzdHJpY3RHbG9iYWwsIGtleUNvbnRhaW5zLCBhcHBlbmQpIHtcclxuICAgIGlmIChyZXN0cmljdEtleSA9PT0gdm9pZCAwKSB7IHJlc3RyaWN0S2V5ID0gXCJcIjsgfVxyXG4gICAgaWYgKHJlc3RyaWN0VHlwZSA9PT0gdm9pZCAwKSB7IHJlc3RyaWN0VHlwZSA9IC0xOyB9XHJcbiAgICBpZiAocmVzdHJpY3RGb3JtID09PSB2b2lkIDApIHsgcmVzdHJpY3RGb3JtID0gbnVsbDsgfVxyXG4gICAgaWYgKHJlc3RyaWN0R2xvYmFsID09PSB2b2lkIDApIHsgcmVzdHJpY3RHbG9iYWwgPSBmYWxzZTsgfVxyXG4gICAgaWYgKGtleUNvbnRhaW5zID09PSB2b2lkIDApIHsga2V5Q29udGFpbnMgPSBmYWxzZTsgfVxyXG4gICAgaWYgKGFwcGVuZCA9PT0gdm9pZCAwKSB7IGFwcGVuZCA9IHRydWU7IH1cclxuICAgIHJldHVybiBzbi5FeHBvcnRGaWxlKGZpbGVOYW1lLCByZXN0cmljdEtleSwgcmVzdHJpY3RUeXBlLCByZXN0cmljdEZvcm0sIHJlc3RyaWN0R2xvYmFsLCBrZXlDb250YWlucywgYXBwZW5kKTtcclxufTtcclxuZmFsc2U7XHJcbiIsIi8qXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuVHlwZXNjcmlwdCBkZWZpbml0aW9ucyBmb3IgdjQuMlxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5UaGlzIGZpbGUgd2FzIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGJ5IFBhcHlydXMtMi1UeXBlc2NyaXB0LmV4ZVxyXG5odHRwczovL2dpdGh1Yi5jb20vQ2FybG9zTGV5dmFBeWFsYS9QYXB5cnVzLTItVHlwZXNjcmlwdFxyXG5cclxuVGhlIHByb2dyYW0gaGFzIG5vIHdheSB0byBrbm93IHRoZSBpbnRlbnRpb24gb2YgdGhlIGh1bWFucyB0aGF0IG1hZGVcclxudGhlIHNjcmlwdHMsIHNvIGl0J3MgYWx3YXlzIGFkdmlzYWJsZSB0byBtYW51YWxseSBjaGVjayBhbGwgZ2VuZXJhdGVkXHJcbmZpbGVzIHRvIG1ha2Ugc3VyZSBldmVyeXRoaW5nIGlzIGRlY2xhcmVkIGFzIGl0IHNob3VsZC5cclxuXHJcblRha2Ugbm90ZSB0aGUgcHJvZ3JhbSBhc3N1bWVzIHRoaXMgc2NyaXB0IGV4aXN0cyBpbiBzb21lIHN1YmZvbGRlclxyXG50byB0aGUgZm9sZGVyIHdoZXJlIGBza3lyaW1QbGF0Zm9ybS50c2AgaXMgZm91bmQsIG90aGVyd2lzZSB5b3UnbGwgZ2V0XHJcblwiQ2Fubm90IGZpbmQgbW9kdWxlLi4uXCIgdHlwZSBvZiBlcnJvcnMuXHJcblxyXG5JZiB5b3Ugd2FudCB0byBoYXZlIHRoaXMgc2NyaXB0IGluIHNvbWUgb3RoZXIgcGxhY2UsIGp1c3QgY2hhbmdlIHRoZVxyXG5yZWxhdGl2ZSBwYXRoIG9mIGVhY2ggYGltcG9ydGAuXHJcbiovXHJcbmltcG9ydCAqIGFzIHNwIGZyb20gXCJza3lyaW1QbGF0Zm9ybVwiO1xyXG52YXIgc24gPSBzcC5Kc29uVXRpbDtcclxuLyoqIE1PRCBBVVRIT1JTLCBSRUFEIVxyXG5cclxuICAgIFRoZXNlIGZ1bmN0aW9ucyBhbGwgd29yayBpbiBleGFjdGx5IHRoZSBzYW1lIHdheSBhcyB0aGVpciBTdG9yYWdlVXRpbC5wc2MgZXF1aXZhbGVudHMuIFNlZSB0aGVtIGZvciB1c2FnZSBkb2NzLlxyXG5cclxuICAgIFRoZSBpbXBvcnRhbnQgZGlmZmVyZW5jZSBiZXR3ZWVuIHRoZXNlIGZ1bmN0aW9ucyBhbmQgdGhlIG9uZXMgb24gU3RvcmFnZVV0aWwucHNjLCBpcyB0aGF0IGluc3RlYWQgb2YgZ2l2aW5nIFwiRm9ybSBPYmpLZXlcIlxyXG4gICAgYXJndW1lbnQgZm9yIHRoZSBsb2NhdGlvbiB0byBzYXZlIHRoZSBkYXRhLCB5b3UgZ2l2ZSBpdCBhIFwic3RyaW5nIEZpbGVOYW1lXCIgYXJndW1lbnQsIHBvaW50aW5nIHRvIGFuIGV4dGVybmFsIEpTT04gZm9ybWF0dGVkIGZpbGUuXHJcblxyXG4gICAgVGhlc2UgZmlsZXMgd2lsbCBiZSBzYXZlZC9sb2FkZWQgaW4gSlNPTiBmb3JtYXQsIGFuZCB0aGUgc3RhcnRpbmcgbG9jYXRpb24gZm9yIHRoZSBmaWxlcyB0byBzYXZlL2xvYWQgZnJvbSBpcyBhcyBmb2xsb3dzOlxyXG5cclxuICAgICAgICBkYXRhL3Nrc2UvcGx1Z2lucy9TdG9yYWdlVXRpbERhdGEvXHJcblxyXG5cclxuICAgIFNvbWUgaW1wb3J0YW50IG5vdGVzIG9uIHVzYWdlIHRvIGtlZXAgaW4gbWluZDpcclxuXHJcbiAgICAtIFlvdSBtYXkgc3BlY2lmaWMgYSBmb2xkZXIgcGF0aCBpbiB0aGUgZmlsZW5hbWUsIGkuZS4gXCIuLi9NeURhdGEvY29uZmlnXCIgd2lsbCBzYXZlIHRvIGRhdGEvc2tzZS9wbHVnaW5zL015RGF0YS9jb25maWcuanNvblxyXG5cclxuICAgIC0gSWYgbm90IGdpdmVuIGluIHRoZSBmaWxlbmFtZSBhcmd1bWVudCwgdGhlIGZpbGVuYW1lIHdpbGwgaGF2ZSB0aGUgZXh0ZW5zaW9uIC5qc29uIGFwcGVuZGVkIHRvIGl0IGF1dG9tYXRpY2FsbHkgd2hlbiB1c2VkLlxyXG5cclxuICAgIC0gWW91IGRvIG5vdCBuZWVkIHRvIGNhbGwgTG9hZCgpIG9yIFNhdmUoKSBtYW51YWxseSB1bmxlc3MgeW91IGhhdmUgYSBzcGVjaWZpYyBuZWVkIHRvLlxyXG5cclxuICAgIC0gV2hlbiB0aGUgcGxheWVyIHNhdmVzIHRoZWlyIGdhbWUgYW55IG1vZGlmaWVkIGZpbGUgd2lsbCBiZSBhdXRvbWF0aWNhbGx5IHNhdmVkLCB3cml0dGVuIHRvLCBvciBjcmVhdGVkIGlmIGl0IGRvZXMgbm90IGV4aXN0LlxyXG5cclxuICAgIC0gV2hlbiB0aGUgcGxheWVyIGxvYWRzIGFub3RoZXIgc2F2ZSB3aXRob3V0IHNhdmluZyB0aGVtc2VsdmVzIG9yIHRoZSBTYXZlKCkgZnVuY3Rpb24gaGF2aW5nIGJlZW4gbWFudWFsbHkgY2FsbGVkIGJ5IGEgc2NyaXB0LFxyXG4gICAgICB0aGUgbG9hZGVkIGRhdGEgd2lsbCBiZSBkaXNjYXJkZWQgYW5kIHJldmVydCBiYWNrIHRvIHdoYXRldmVyIHRoZSBjb250ZW50cyBvZiB0aGUgY3VycmVudCBzYXZlZCBmaWxlIGFyZS4gKi9cclxuZXhwb3J0IHZhciBMb2FkID0gZnVuY3Rpb24gKEZpbGVOYW1lKSB7IHJldHVybiBzbi5Mb2FkKEZpbGVOYW1lKTsgfTtcclxuZXhwb3J0IHZhciBTYXZlID0gZnVuY3Rpb24gKEZpbGVOYW1lLCBtaW5pZnkpIHtcclxuICAgIGlmIChtaW5pZnkgPT09IHZvaWQgMCkgeyBtaW5pZnkgPSBmYWxzZTsgfVxyXG4gICAgcmV0dXJuIHNuLlNhdmUoRmlsZU5hbWUsIG1pbmlmeSk7XHJcbn07XHJcbmV4cG9ydCB2YXIgVW5sb2FkID0gZnVuY3Rpb24gKEZpbGVOYW1lLCBzYXZlQ2hhbmdlcywgbWluaWZ5KSB7XHJcbiAgICBpZiAoc2F2ZUNoYW5nZXMgPT09IHZvaWQgMCkgeyBzYXZlQ2hhbmdlcyA9IHRydWU7IH1cclxuICAgIGlmIChtaW5pZnkgPT09IHZvaWQgMCkgeyBtaW5pZnkgPSBmYWxzZTsgfVxyXG4gICAgcmV0dXJuIHNuLlVubG9hZChGaWxlTmFtZSwgc2F2ZUNoYW5nZXMsIG1pbmlmeSk7XHJcbn07XHJcbi8vIENoZWNrIGlmIGdpdmVuIGZpbGUgaGFzIGhhZCBhbnkgY2hhbmdlcyB0byBpdCB0aGV5IGhhdmVuJ3QgeWV0IGJlZW4gc2F2ZWRcclxuZXhwb3J0IHZhciBJc1BlbmRpbmdTYXZlID0gZnVuY3Rpb24gKEZpbGVOYW1lKSB7IHJldHVybiBzbi5Jc1BlbmRpbmdTYXZlKEZpbGVOYW1lKTsgfTtcclxuLy8gQ2hlY2sgaWYgdGhlIGdpdmVuIGZpbGUgd2FzIHN1Y2Nlc2Z1bGx5IGxvYWRlZCBhbmQgaGFzIG5vIGpzb24gcGFyc2VyIGVycm9yc1xyXG5leHBvcnQgdmFyIElzR29vZCA9IGZ1bmN0aW9uIChGaWxlTmFtZSkgeyByZXR1cm4gc24uSXNHb29kKEZpbGVOYW1lKTsgfTtcclxuLy8gR2V0IGEgZm9ybWF0dGVkIGVycm9yIHN0cmluZyBvZiBhbnkganNvbiBwYXJzZXIgZXJyb3JzIG9uIGEgZmlsZSwgcmV0dXJucyBhcyBlbXB0eSBzdHJpbmcgaWYgbm8gZXJyb3JzLlxyXG5leHBvcnQgdmFyIEdldEVycm9ycyA9IGZ1bmN0aW9uIChGaWxlTmFtZSkgeyByZXR1cm4gc24uR2V0RXJyb3JzKEZpbGVOYW1lKTsgfTtcclxuLy8gUmV0dXJucyBhIGxpc3Qgb2YgYWxsIGZpbGVuYW1lcyBpbiBhIGdpdmVuIGZvbGRlciB0aGF0IGVuZCBpbiAuanNvblxyXG5leHBvcnQgdmFyIEpzb25JbkZvbGRlciA9IGZ1bmN0aW9uIChmb2xkZXJQYXRoKSB7IHJldHVybiBzbi5Kc29uSW5Gb2xkZXIoZm9sZGVyUGF0aCk7IH07XHJcbi8vIENoZWNrIGlmIGEganNvbiBmaWxlIGV4aXN0cyBvciBub3RcclxuZXhwb3J0IHZhciBKc29uRXhpc3RzID0gZnVuY3Rpb24gKEZpbGVOYW1lKSB7IHJldHVybiBzbi5Kc29uRXhpc3RzKEZpbGVOYW1lKTsgfTtcclxuLy8gU2VlIFN0b3JhZ2VVdGlsLnBzYyBmb3IgZXF1aXZhbGVudCBmdW5jdGlvbiB1c2FnZSBpbnN0cnVjdGlvbnNcclxuZXhwb3J0IHZhciBTZXRJbnRWYWx1ZSA9IGZ1bmN0aW9uIChGaWxlTmFtZSwgS2V5TmFtZSwgdmFsdWUpIHsgcmV0dXJuIHNuLlNldEludFZhbHVlKEZpbGVOYW1lLCBLZXlOYW1lLCB2YWx1ZSk7IH07XHJcbmV4cG9ydCB2YXIgU2V0RmxvYXRWYWx1ZSA9IGZ1bmN0aW9uIChGaWxlTmFtZSwgS2V5TmFtZSwgdmFsdWUpIHsgcmV0dXJuIHNuLlNldEZsb2F0VmFsdWUoRmlsZU5hbWUsIEtleU5hbWUsIHZhbHVlKTsgfTtcclxuZXhwb3J0IHZhciBTZXRTdHJpbmdWYWx1ZSA9IGZ1bmN0aW9uIChGaWxlTmFtZSwgS2V5TmFtZSwgdmFsdWUpIHsgcmV0dXJuIHNuLlNldFN0cmluZ1ZhbHVlKEZpbGVOYW1lLCBLZXlOYW1lLCB2YWx1ZSk7IH07XHJcbmV4cG9ydCB2YXIgU2V0Rm9ybVZhbHVlID0gZnVuY3Rpb24gKEZpbGVOYW1lLCBLZXlOYW1lLCB2YWx1ZSkgeyByZXR1cm4gc24uU2V0Rm9ybVZhbHVlKEZpbGVOYW1lLCBLZXlOYW1lLCB2YWx1ZSk7IH07XHJcbmV4cG9ydCB2YXIgR2V0SW50VmFsdWUgPSBmdW5jdGlvbiAoRmlsZU5hbWUsIEtleU5hbWUsIG1pc3NpbmcpIHtcclxuICAgIGlmIChtaXNzaW5nID09PSB2b2lkIDApIHsgbWlzc2luZyA9IDA7IH1cclxuICAgIHJldHVybiBzbi5HZXRJbnRWYWx1ZShGaWxlTmFtZSwgS2V5TmFtZSwgbWlzc2luZyk7XHJcbn07XHJcbmV4cG9ydCB2YXIgR2V0RmxvYXRWYWx1ZSA9IGZ1bmN0aW9uIChGaWxlTmFtZSwgS2V5TmFtZSwgbWlzc2luZykge1xyXG4gICAgaWYgKG1pc3NpbmcgPT09IHZvaWQgMCkgeyBtaXNzaW5nID0gMC4wOyB9XHJcbiAgICByZXR1cm4gc24uR2V0RmxvYXRWYWx1ZShGaWxlTmFtZSwgS2V5TmFtZSwgbWlzc2luZyk7XHJcbn07XHJcbmV4cG9ydCB2YXIgR2V0U3RyaW5nVmFsdWUgPSBmdW5jdGlvbiAoRmlsZU5hbWUsIEtleU5hbWUsIG1pc3NpbmcpIHtcclxuICAgIGlmIChtaXNzaW5nID09PSB2b2lkIDApIHsgbWlzc2luZyA9IFwiXCI7IH1cclxuICAgIHJldHVybiBzbi5HZXRTdHJpbmdWYWx1ZShGaWxlTmFtZSwgS2V5TmFtZSwgbWlzc2luZyk7XHJcbn07XHJcbmV4cG9ydCB2YXIgR2V0Rm9ybVZhbHVlID0gZnVuY3Rpb24gKEZpbGVOYW1lLCBLZXlOYW1lLCBtaXNzaW5nKSB7XHJcbiAgICBpZiAobWlzc2luZyA9PT0gdm9pZCAwKSB7IG1pc3NpbmcgPSBudWxsOyB9XHJcbiAgICByZXR1cm4gc24uR2V0Rm9ybVZhbHVlKEZpbGVOYW1lLCBLZXlOYW1lLCBtaXNzaW5nKTtcclxufTtcclxuZXhwb3J0IHZhciBVbnNldEludFZhbHVlID0gZnVuY3Rpb24gKEZpbGVOYW1lLCBLZXlOYW1lKSB7IHJldHVybiBzbi5VbnNldEludFZhbHVlKEZpbGVOYW1lLCBLZXlOYW1lKTsgfTtcclxuZXhwb3J0IHZhciBVbnNldEZsb2F0VmFsdWUgPSBmdW5jdGlvbiAoRmlsZU5hbWUsIEtleU5hbWUpIHsgcmV0dXJuIHNuLlVuc2V0RmxvYXRWYWx1ZShGaWxlTmFtZSwgS2V5TmFtZSk7IH07XHJcbmV4cG9ydCB2YXIgVW5zZXRTdHJpbmdWYWx1ZSA9IGZ1bmN0aW9uIChGaWxlTmFtZSwgS2V5TmFtZSkgeyByZXR1cm4gc24uVW5zZXRTdHJpbmdWYWx1ZShGaWxlTmFtZSwgS2V5TmFtZSk7IH07XHJcbmV4cG9ydCB2YXIgVW5zZXRGb3JtVmFsdWUgPSBmdW5jdGlvbiAoRmlsZU5hbWUsIEtleU5hbWUpIHsgcmV0dXJuIHNuLlVuc2V0Rm9ybVZhbHVlKEZpbGVOYW1lLCBLZXlOYW1lKTsgfTtcclxuZXhwb3J0IHZhciBIYXNJbnRWYWx1ZSA9IGZ1bmN0aW9uIChGaWxlTmFtZSwgS2V5TmFtZSkgeyByZXR1cm4gc24uSGFzSW50VmFsdWUoRmlsZU5hbWUsIEtleU5hbWUpOyB9O1xyXG5leHBvcnQgdmFyIEhhc0Zsb2F0VmFsdWUgPSBmdW5jdGlvbiAoRmlsZU5hbWUsIEtleU5hbWUpIHsgcmV0dXJuIHNuLkhhc0Zsb2F0VmFsdWUoRmlsZU5hbWUsIEtleU5hbWUpOyB9O1xyXG5leHBvcnQgdmFyIEhhc1N0cmluZ1ZhbHVlID0gZnVuY3Rpb24gKEZpbGVOYW1lLCBLZXlOYW1lKSB7IHJldHVybiBzbi5IYXNTdHJpbmdWYWx1ZShGaWxlTmFtZSwgS2V5TmFtZSk7IH07XHJcbmV4cG9ydCB2YXIgSGFzRm9ybVZhbHVlID0gZnVuY3Rpb24gKEZpbGVOYW1lLCBLZXlOYW1lKSB7IHJldHVybiBzbi5IYXNGb3JtVmFsdWUoRmlsZU5hbWUsIEtleU5hbWUpOyB9O1xyXG5leHBvcnQgdmFyIEludExpc3RBZGQgPSBmdW5jdGlvbiAoRmlsZU5hbWUsIEtleU5hbWUsIHZhbHVlLCBhbGxvd0R1cGxpY2F0ZSkge1xyXG4gICAgaWYgKGFsbG93RHVwbGljYXRlID09PSB2b2lkIDApIHsgYWxsb3dEdXBsaWNhdGUgPSB0cnVlOyB9XHJcbiAgICByZXR1cm4gc24uSW50TGlzdEFkZChGaWxlTmFtZSwgS2V5TmFtZSwgdmFsdWUsIGFsbG93RHVwbGljYXRlKTtcclxufTtcclxuZXhwb3J0IHZhciBGbG9hdExpc3RBZGQgPSBmdW5jdGlvbiAoRmlsZU5hbWUsIEtleU5hbWUsIHZhbHVlLCBhbGxvd0R1cGxpY2F0ZSkge1xyXG4gICAgaWYgKGFsbG93RHVwbGljYXRlID09PSB2b2lkIDApIHsgYWxsb3dEdXBsaWNhdGUgPSB0cnVlOyB9XHJcbiAgICByZXR1cm4gc24uRmxvYXRMaXN0QWRkKEZpbGVOYW1lLCBLZXlOYW1lLCB2YWx1ZSwgYWxsb3dEdXBsaWNhdGUpO1xyXG59O1xyXG5leHBvcnQgdmFyIFN0cmluZ0xpc3RBZGQgPSBmdW5jdGlvbiAoRmlsZU5hbWUsIEtleU5hbWUsIHZhbHVlLCBhbGxvd0R1cGxpY2F0ZSkge1xyXG4gICAgaWYgKGFsbG93RHVwbGljYXRlID09PSB2b2lkIDApIHsgYWxsb3dEdXBsaWNhdGUgPSB0cnVlOyB9XHJcbiAgICByZXR1cm4gc24uU3RyaW5nTGlzdEFkZChGaWxlTmFtZSwgS2V5TmFtZSwgdmFsdWUsIGFsbG93RHVwbGljYXRlKTtcclxufTtcclxuZXhwb3J0IHZhciBGb3JtTGlzdEFkZCA9IGZ1bmN0aW9uIChGaWxlTmFtZSwgS2V5TmFtZSwgdmFsdWUsIGFsbG93RHVwbGljYXRlKSB7XHJcbiAgICBpZiAoYWxsb3dEdXBsaWNhdGUgPT09IHZvaWQgMCkgeyBhbGxvd0R1cGxpY2F0ZSA9IHRydWU7IH1cclxuICAgIHJldHVybiBzbi5Gb3JtTGlzdEFkZChGaWxlTmFtZSwgS2V5TmFtZSwgdmFsdWUsIGFsbG93RHVwbGljYXRlKTtcclxufTtcclxuZXhwb3J0IHZhciBJbnRMaXN0R2V0ID0gZnVuY3Rpb24gKEZpbGVOYW1lLCBLZXlOYW1lLCBpbmRleCkgeyByZXR1cm4gc24uSW50TGlzdEdldChGaWxlTmFtZSwgS2V5TmFtZSwgaW5kZXgpOyB9O1xyXG5leHBvcnQgdmFyIEZsb2F0TGlzdEdldCA9IGZ1bmN0aW9uIChGaWxlTmFtZSwgS2V5TmFtZSwgaW5kZXgpIHsgcmV0dXJuIHNuLkZsb2F0TGlzdEdldChGaWxlTmFtZSwgS2V5TmFtZSwgaW5kZXgpOyB9O1xyXG5leHBvcnQgdmFyIFN0cmluZ0xpc3RHZXQgPSBmdW5jdGlvbiAoRmlsZU5hbWUsIEtleU5hbWUsIGluZGV4KSB7IHJldHVybiBzbi5TdHJpbmdMaXN0R2V0KEZpbGVOYW1lLCBLZXlOYW1lLCBpbmRleCk7IH07XHJcbmV4cG9ydCB2YXIgRm9ybUxpc3RHZXQgPSBmdW5jdGlvbiAoRmlsZU5hbWUsIEtleU5hbWUsIGluZGV4KSB7IHJldHVybiBzbi5Gb3JtTGlzdEdldChGaWxlTmFtZSwgS2V5TmFtZSwgaW5kZXgpOyB9O1xyXG5leHBvcnQgdmFyIEludExpc3RTZXQgPSBmdW5jdGlvbiAoRmlsZU5hbWUsIEtleU5hbWUsIGluZGV4LCB2YWx1ZSkgeyByZXR1cm4gc24uSW50TGlzdFNldChGaWxlTmFtZSwgS2V5TmFtZSwgaW5kZXgsIHZhbHVlKTsgfTtcclxuZXhwb3J0IHZhciBGbG9hdExpc3RTZXQgPSBmdW5jdGlvbiAoRmlsZU5hbWUsIEtleU5hbWUsIGluZGV4LCB2YWx1ZSkgeyByZXR1cm4gc24uRmxvYXRMaXN0U2V0KEZpbGVOYW1lLCBLZXlOYW1lLCBpbmRleCwgdmFsdWUpOyB9O1xyXG5leHBvcnQgdmFyIFN0cmluZ0xpc3RTZXQgPSBmdW5jdGlvbiAoRmlsZU5hbWUsIEtleU5hbWUsIGluZGV4LCB2YWx1ZSkgeyByZXR1cm4gc24uU3RyaW5nTGlzdFNldChGaWxlTmFtZSwgS2V5TmFtZSwgaW5kZXgsIHZhbHVlKTsgfTtcclxuZXhwb3J0IHZhciBGb3JtTGlzdFNldCA9IGZ1bmN0aW9uIChGaWxlTmFtZSwgS2V5TmFtZSwgaW5kZXgsIHZhbHVlKSB7IHJldHVybiBzbi5Gb3JtTGlzdFNldChGaWxlTmFtZSwgS2V5TmFtZSwgaW5kZXgsIHZhbHVlKTsgfTtcclxuZXhwb3J0IHZhciBJbnRMaXN0UmVtb3ZlID0gZnVuY3Rpb24gKEZpbGVOYW1lLCBLZXlOYW1lLCB2YWx1ZSwgYWxsSW5zdGFuY2VzKSB7XHJcbiAgICBpZiAoYWxsSW5zdGFuY2VzID09PSB2b2lkIDApIHsgYWxsSW5zdGFuY2VzID0gdHJ1ZTsgfVxyXG4gICAgcmV0dXJuIHNuLkludExpc3RSZW1vdmUoRmlsZU5hbWUsIEtleU5hbWUsIHZhbHVlLCBhbGxJbnN0YW5jZXMpO1xyXG59O1xyXG5leHBvcnQgdmFyIEZsb2F0TGlzdFJlbW92ZSA9IGZ1bmN0aW9uIChGaWxlTmFtZSwgS2V5TmFtZSwgdmFsdWUsIGFsbEluc3RhbmNlcykge1xyXG4gICAgaWYgKGFsbEluc3RhbmNlcyA9PT0gdm9pZCAwKSB7IGFsbEluc3RhbmNlcyA9IHRydWU7IH1cclxuICAgIHJldHVybiBzbi5GbG9hdExpc3RSZW1vdmUoRmlsZU5hbWUsIEtleU5hbWUsIHZhbHVlLCBhbGxJbnN0YW5jZXMpO1xyXG59O1xyXG5leHBvcnQgdmFyIFN0cmluZ0xpc3RSZW1vdmUgPSBmdW5jdGlvbiAoRmlsZU5hbWUsIEtleU5hbWUsIHZhbHVlLCBhbGxJbnN0YW5jZXMpIHtcclxuICAgIGlmIChhbGxJbnN0YW5jZXMgPT09IHZvaWQgMCkgeyBhbGxJbnN0YW5jZXMgPSB0cnVlOyB9XHJcbiAgICByZXR1cm4gc24uU3RyaW5nTGlzdFJlbW92ZShGaWxlTmFtZSwgS2V5TmFtZSwgdmFsdWUsIGFsbEluc3RhbmNlcyk7XHJcbn07XHJcbmV4cG9ydCB2YXIgRm9ybUxpc3RSZW1vdmUgPSBmdW5jdGlvbiAoRmlsZU5hbWUsIEtleU5hbWUsIHZhbHVlLCBhbGxJbnN0YW5jZXMpIHtcclxuICAgIGlmIChhbGxJbnN0YW5jZXMgPT09IHZvaWQgMCkgeyBhbGxJbnN0YW5jZXMgPSB0cnVlOyB9XHJcbiAgICByZXR1cm4gc24uRm9ybUxpc3RSZW1vdmUoRmlsZU5hbWUsIEtleU5hbWUsIHZhbHVlLCBhbGxJbnN0YW5jZXMpO1xyXG59O1xyXG5leHBvcnQgdmFyIEludExpc3RJbnNlcnRBdCA9IGZ1bmN0aW9uIChGaWxlTmFtZSwgS2V5TmFtZSwgaW5kZXgsIHZhbHVlKSB7IHJldHVybiBzbi5JbnRMaXN0SW5zZXJ0QXQoRmlsZU5hbWUsIEtleU5hbWUsIGluZGV4LCB2YWx1ZSk7IH07XHJcbmV4cG9ydCB2YXIgRmxvYXRMaXN0SW5zZXJ0QXQgPSBmdW5jdGlvbiAoRmlsZU5hbWUsIEtleU5hbWUsIGluZGV4LCB2YWx1ZSkgeyByZXR1cm4gc24uRmxvYXRMaXN0SW5zZXJ0QXQoRmlsZU5hbWUsIEtleU5hbWUsIGluZGV4LCB2YWx1ZSk7IH07XHJcbmV4cG9ydCB2YXIgU3RyaW5nTGlzdEluc2VydEF0ID0gZnVuY3Rpb24gKEZpbGVOYW1lLCBLZXlOYW1lLCBpbmRleCwgdmFsdWUpIHsgcmV0dXJuIHNuLlN0cmluZ0xpc3RJbnNlcnRBdChGaWxlTmFtZSwgS2V5TmFtZSwgaW5kZXgsIHZhbHVlKTsgfTtcclxuZXhwb3J0IHZhciBGb3JtTGlzdEluc2VydEF0ID0gZnVuY3Rpb24gKEZpbGVOYW1lLCBLZXlOYW1lLCBpbmRleCwgdmFsdWUpIHsgcmV0dXJuIHNuLkZvcm1MaXN0SW5zZXJ0QXQoRmlsZU5hbWUsIEtleU5hbWUsIGluZGV4LCB2YWx1ZSk7IH07XHJcbmV4cG9ydCB2YXIgSW50TGlzdFJlbW92ZUF0ID0gZnVuY3Rpb24gKEZpbGVOYW1lLCBLZXlOYW1lLCBpbmRleCkgeyByZXR1cm4gc24uSW50TGlzdFJlbW92ZUF0KEZpbGVOYW1lLCBLZXlOYW1lLCBpbmRleCk7IH07XHJcbmV4cG9ydCB2YXIgRmxvYXRMaXN0UmVtb3ZlQXQgPSBmdW5jdGlvbiAoRmlsZU5hbWUsIEtleU5hbWUsIGluZGV4KSB7IHJldHVybiBzbi5GbG9hdExpc3RSZW1vdmVBdChGaWxlTmFtZSwgS2V5TmFtZSwgaW5kZXgpOyB9O1xyXG5leHBvcnQgdmFyIFN0cmluZ0xpc3RSZW1vdmVBdCA9IGZ1bmN0aW9uIChGaWxlTmFtZSwgS2V5TmFtZSwgaW5kZXgpIHsgcmV0dXJuIHNuLlN0cmluZ0xpc3RSZW1vdmVBdChGaWxlTmFtZSwgS2V5TmFtZSwgaW5kZXgpOyB9O1xyXG5leHBvcnQgdmFyIEZvcm1MaXN0UmVtb3ZlQXQgPSBmdW5jdGlvbiAoRmlsZU5hbWUsIEtleU5hbWUsIGluZGV4KSB7IHJldHVybiBzbi5Gb3JtTGlzdFJlbW92ZUF0KEZpbGVOYW1lLCBLZXlOYW1lLCBpbmRleCk7IH07XHJcbmV4cG9ydCB2YXIgSW50TGlzdENsZWFyID0gZnVuY3Rpb24gKEZpbGVOYW1lLCBLZXlOYW1lKSB7IHJldHVybiBzbi5JbnRMaXN0Q2xlYXIoRmlsZU5hbWUsIEtleU5hbWUpOyB9O1xyXG5leHBvcnQgdmFyIEZsb2F0TGlzdENsZWFyID0gZnVuY3Rpb24gKEZpbGVOYW1lLCBLZXlOYW1lKSB7IHJldHVybiBzbi5GbG9hdExpc3RDbGVhcihGaWxlTmFtZSwgS2V5TmFtZSk7IH07XHJcbmV4cG9ydCB2YXIgU3RyaW5nTGlzdENsZWFyID0gZnVuY3Rpb24gKEZpbGVOYW1lLCBLZXlOYW1lKSB7IHJldHVybiBzbi5TdHJpbmdMaXN0Q2xlYXIoRmlsZU5hbWUsIEtleU5hbWUpOyB9O1xyXG5leHBvcnQgdmFyIEZvcm1MaXN0Q2xlYXIgPSBmdW5jdGlvbiAoRmlsZU5hbWUsIEtleU5hbWUpIHsgcmV0dXJuIHNuLkZvcm1MaXN0Q2xlYXIoRmlsZU5hbWUsIEtleU5hbWUpOyB9O1xyXG5leHBvcnQgdmFyIEludExpc3RDb3VudCA9IGZ1bmN0aW9uIChGaWxlTmFtZSwgS2V5TmFtZSkgeyByZXR1cm4gc24uSW50TGlzdENvdW50KEZpbGVOYW1lLCBLZXlOYW1lKTsgfTtcclxuZXhwb3J0IHZhciBGbG9hdExpc3RDb3VudCA9IGZ1bmN0aW9uIChGaWxlTmFtZSwgS2V5TmFtZSkgeyByZXR1cm4gc24uRmxvYXRMaXN0Q291bnQoRmlsZU5hbWUsIEtleU5hbWUpOyB9O1xyXG5leHBvcnQgdmFyIFN0cmluZ0xpc3RDb3VudCA9IGZ1bmN0aW9uIChGaWxlTmFtZSwgS2V5TmFtZSkgeyByZXR1cm4gc24uU3RyaW5nTGlzdENvdW50KEZpbGVOYW1lLCBLZXlOYW1lKTsgfTtcclxuZXhwb3J0IHZhciBGb3JtTGlzdENvdW50ID0gZnVuY3Rpb24gKEZpbGVOYW1lLCBLZXlOYW1lKSB7IHJldHVybiBzbi5Gb3JtTGlzdENvdW50KEZpbGVOYW1lLCBLZXlOYW1lKTsgfTtcclxuZXhwb3J0IHZhciBJbnRMaXN0Q291bnRWYWx1ZSA9IGZ1bmN0aW9uIChGaWxlTmFtZSwgS2V5TmFtZSwgdmFsdWUsIGV4Y2x1ZGUpIHtcclxuICAgIGlmIChleGNsdWRlID09PSB2b2lkIDApIHsgZXhjbHVkZSA9IGZhbHNlOyB9XHJcbiAgICByZXR1cm4gc24uSW50TGlzdENvdW50VmFsdWUoRmlsZU5hbWUsIEtleU5hbWUsIHZhbHVlLCBleGNsdWRlKTtcclxufTtcclxuZXhwb3J0IHZhciBGbG9hdExpc3RDb3VudFZhbHVlID0gZnVuY3Rpb24gKEZpbGVOYW1lLCBLZXlOYW1lLCB2YWx1ZSwgZXhjbHVkZSkge1xyXG4gICAgaWYgKGV4Y2x1ZGUgPT09IHZvaWQgMCkgeyBleGNsdWRlID0gZmFsc2U7IH1cclxuICAgIHJldHVybiBzbi5GbG9hdExpc3RDb3VudFZhbHVlKEZpbGVOYW1lLCBLZXlOYW1lLCB2YWx1ZSwgZXhjbHVkZSk7XHJcbn07XHJcbmV4cG9ydCB2YXIgU3RyaW5nTGlzdENvdW50VmFsdWUgPSBmdW5jdGlvbiAoRmlsZU5hbWUsIEtleU5hbWUsIHZhbHVlLCBleGNsdWRlKSB7XHJcbiAgICBpZiAoZXhjbHVkZSA9PT0gdm9pZCAwKSB7IGV4Y2x1ZGUgPSBmYWxzZTsgfVxyXG4gICAgcmV0dXJuIHNuLlN0cmluZ0xpc3RDb3VudFZhbHVlKEZpbGVOYW1lLCBLZXlOYW1lLCB2YWx1ZSwgZXhjbHVkZSk7XHJcbn07XHJcbmV4cG9ydCB2YXIgRm9ybUxpc3RDb3VudFZhbHVlID0gZnVuY3Rpb24gKEZpbGVOYW1lLCBLZXlOYW1lLCB2YWx1ZSwgZXhjbHVkZSkge1xyXG4gICAgaWYgKGV4Y2x1ZGUgPT09IHZvaWQgMCkgeyBleGNsdWRlID0gZmFsc2U7IH1cclxuICAgIHJldHVybiBzbi5Gb3JtTGlzdENvdW50VmFsdWUoRmlsZU5hbWUsIEtleU5hbWUsIHZhbHVlLCBleGNsdWRlKTtcclxufTtcclxuZXhwb3J0IHZhciBJbnRMaXN0RmluZCA9IGZ1bmN0aW9uIChGaWxlTmFtZSwgS2V5TmFtZSwgdmFsdWUpIHsgcmV0dXJuIHNuLkludExpc3RGaW5kKEZpbGVOYW1lLCBLZXlOYW1lLCB2YWx1ZSk7IH07XHJcbmV4cG9ydCB2YXIgRmxvYXRMaXN0RmluZCA9IGZ1bmN0aW9uIChGaWxlTmFtZSwgS2V5TmFtZSwgdmFsdWUpIHsgcmV0dXJuIHNuLkZsb2F0TGlzdEZpbmQoRmlsZU5hbWUsIEtleU5hbWUsIHZhbHVlKTsgfTtcclxuZXhwb3J0IHZhciBTdHJpbmdMaXN0RmluZCA9IGZ1bmN0aW9uIChGaWxlTmFtZSwgS2V5TmFtZSwgdmFsdWUpIHsgcmV0dXJuIHNuLlN0cmluZ0xpc3RGaW5kKEZpbGVOYW1lLCBLZXlOYW1lLCB2YWx1ZSk7IH07XHJcbmV4cG9ydCB2YXIgRm9ybUxpc3RGaW5kID0gZnVuY3Rpb24gKEZpbGVOYW1lLCBLZXlOYW1lLCB2YWx1ZSkgeyByZXR1cm4gc24uRm9ybUxpc3RGaW5kKEZpbGVOYW1lLCBLZXlOYW1lLCB2YWx1ZSk7IH07XHJcbmV4cG9ydCB2YXIgSW50TGlzdEhhcyA9IGZ1bmN0aW9uIChGaWxlTmFtZSwgS2V5TmFtZSwgdmFsdWUpIHsgcmV0dXJuIHNuLkludExpc3RIYXMoRmlsZU5hbWUsIEtleU5hbWUsIHZhbHVlKTsgfTtcclxuZXhwb3J0IHZhciBGbG9hdExpc3RIYXMgPSBmdW5jdGlvbiAoRmlsZU5hbWUsIEtleU5hbWUsIHZhbHVlKSB7IHJldHVybiBzbi5GbG9hdExpc3RIYXMoRmlsZU5hbWUsIEtleU5hbWUsIHZhbHVlKTsgfTtcclxuZXhwb3J0IHZhciBTdHJpbmdMaXN0SGFzID0gZnVuY3Rpb24gKEZpbGVOYW1lLCBLZXlOYW1lLCB2YWx1ZSkgeyByZXR1cm4gc24uU3RyaW5nTGlzdEhhcyhGaWxlTmFtZSwgS2V5TmFtZSwgdmFsdWUpOyB9O1xyXG5leHBvcnQgdmFyIEZvcm1MaXN0SGFzID0gZnVuY3Rpb24gKEZpbGVOYW1lLCBLZXlOYW1lLCB2YWx1ZSkgeyByZXR1cm4gc24uRm9ybUxpc3RIYXMoRmlsZU5hbWUsIEtleU5hbWUsIHZhbHVlKTsgfTtcclxuZXhwb3J0IHZhciBJbnRMaXN0U2xpY2UgPSBmdW5jdGlvbiAoRmlsZU5hbWUsIEtleU5hbWUsIHNsaWNlLCBzdGFydEluZGV4KSB7XHJcbiAgICBpZiAoc3RhcnRJbmRleCA9PT0gdm9pZCAwKSB7IHN0YXJ0SW5kZXggPSAwOyB9XHJcbiAgICByZXR1cm4gc24uSW50TGlzdFNsaWNlKEZpbGVOYW1lLCBLZXlOYW1lLCBzbGljZSwgc3RhcnRJbmRleCk7XHJcbn07XHJcbmV4cG9ydCB2YXIgRmxvYXRMaXN0U2xpY2UgPSBmdW5jdGlvbiAoRmlsZU5hbWUsIEtleU5hbWUsIHNsaWNlLCBzdGFydEluZGV4KSB7XHJcbiAgICBpZiAoc3RhcnRJbmRleCA9PT0gdm9pZCAwKSB7IHN0YXJ0SW5kZXggPSAwOyB9XHJcbiAgICByZXR1cm4gc24uRmxvYXRMaXN0U2xpY2UoRmlsZU5hbWUsIEtleU5hbWUsIHNsaWNlLCBzdGFydEluZGV4KTtcclxufTtcclxuZXhwb3J0IHZhciBTdHJpbmdMaXN0U2xpY2UgPSBmdW5jdGlvbiAoRmlsZU5hbWUsIEtleU5hbWUsIHNsaWNlLCBzdGFydEluZGV4KSB7XHJcbiAgICBpZiAoc3RhcnRJbmRleCA9PT0gdm9pZCAwKSB7IHN0YXJ0SW5kZXggPSAwOyB9XHJcbiAgICByZXR1cm4gc24uU3RyaW5nTGlzdFNsaWNlKEZpbGVOYW1lLCBLZXlOYW1lLCBzbGljZSwgc3RhcnRJbmRleCk7XHJcbn07XHJcbmV4cG9ydCB2YXIgRm9ybUxpc3RTbGljZSA9IGZ1bmN0aW9uIChGaWxlTmFtZSwgS2V5TmFtZSwgc2xpY2UsIHN0YXJ0SW5kZXgpIHtcclxuICAgIGlmIChzdGFydEluZGV4ID09PSB2b2lkIDApIHsgc3RhcnRJbmRleCA9IDA7IH1cclxuICAgIHJldHVybiBzbi5Gb3JtTGlzdFNsaWNlKEZpbGVOYW1lLCBLZXlOYW1lLCBzbGljZSwgc3RhcnRJbmRleCk7XHJcbn07XHJcbmV4cG9ydCB2YXIgSW50TGlzdFJlc2l6ZSA9IGZ1bmN0aW9uIChGaWxlTmFtZSwgS2V5TmFtZSwgdG9MZW5ndGgsIGZpbGxlcikge1xyXG4gICAgaWYgKGZpbGxlciA9PT0gdm9pZCAwKSB7IGZpbGxlciA9IDA7IH1cclxuICAgIHJldHVybiBzbi5JbnRMaXN0UmVzaXplKEZpbGVOYW1lLCBLZXlOYW1lLCB0b0xlbmd0aCwgZmlsbGVyKTtcclxufTtcclxuZXhwb3J0IHZhciBGbG9hdExpc3RSZXNpemUgPSBmdW5jdGlvbiAoRmlsZU5hbWUsIEtleU5hbWUsIHRvTGVuZ3RoLCBmaWxsZXIpIHtcclxuICAgIGlmIChmaWxsZXIgPT09IHZvaWQgMCkgeyBmaWxsZXIgPSAwLjA7IH1cclxuICAgIHJldHVybiBzbi5GbG9hdExpc3RSZXNpemUoRmlsZU5hbWUsIEtleU5hbWUsIHRvTGVuZ3RoLCBmaWxsZXIpO1xyXG59O1xyXG5leHBvcnQgdmFyIFN0cmluZ0xpc3RSZXNpemUgPSBmdW5jdGlvbiAoRmlsZU5hbWUsIEtleU5hbWUsIHRvTGVuZ3RoLCBmaWxsZXIpIHtcclxuICAgIGlmIChmaWxsZXIgPT09IHZvaWQgMCkgeyBmaWxsZXIgPSBcIlwiOyB9XHJcbiAgICByZXR1cm4gc24uU3RyaW5nTGlzdFJlc2l6ZShGaWxlTmFtZSwgS2V5TmFtZSwgdG9MZW5ndGgsIGZpbGxlcik7XHJcbn07XHJcbmV4cG9ydCB2YXIgRm9ybUxpc3RSZXNpemUgPSBmdW5jdGlvbiAoRmlsZU5hbWUsIEtleU5hbWUsIHRvTGVuZ3RoLCBmaWxsZXIpIHtcclxuICAgIGlmIChmaWxsZXIgPT09IHZvaWQgMCkgeyBmaWxsZXIgPSBudWxsOyB9XHJcbiAgICByZXR1cm4gc24uRm9ybUxpc3RSZXNpemUoRmlsZU5hbWUsIEtleU5hbWUsIHRvTGVuZ3RoLCBmaWxsZXIpO1xyXG59O1xyXG5leHBvcnQgdmFyIEludExpc3RDb3B5ID0gZnVuY3Rpb24gKEZpbGVOYW1lLCBLZXlOYW1lLCBjb3B5KSB7IHJldHVybiBzbi5JbnRMaXN0Q29weShGaWxlTmFtZSwgS2V5TmFtZSwgY29weSk7IH07XHJcbmV4cG9ydCB2YXIgRmxvYXRMaXN0Q29weSA9IGZ1bmN0aW9uIChGaWxlTmFtZSwgS2V5TmFtZSwgY29weSkgeyByZXR1cm4gc24uRmxvYXRMaXN0Q29weShGaWxlTmFtZSwgS2V5TmFtZSwgY29weSk7IH07XHJcbmV4cG9ydCB2YXIgU3RyaW5nTGlzdENvcHkgPSBmdW5jdGlvbiAoRmlsZU5hbWUsIEtleU5hbWUsIGNvcHkpIHsgcmV0dXJuIHNuLlN0cmluZ0xpc3RDb3B5KEZpbGVOYW1lLCBLZXlOYW1lLCBjb3B5KTsgfTtcclxuZXhwb3J0IHZhciBGb3JtTGlzdENvcHkgPSBmdW5jdGlvbiAoRmlsZU5hbWUsIEtleU5hbWUsIGNvcHkpIHsgcmV0dXJuIHNuLkZvcm1MaXN0Q29weShGaWxlTmFtZSwgS2V5TmFtZSwgY29weSk7IH07XHJcbmV4cG9ydCB2YXIgSW50TGlzdFRvQXJyYXkgPSBmdW5jdGlvbiAoRmlsZU5hbWUsIEtleU5hbWUpIHsgcmV0dXJuIHNuLkludExpc3RUb0FycmF5KEZpbGVOYW1lLCBLZXlOYW1lKTsgfTtcclxuZXhwb3J0IHZhciBGbG9hdExpc3RUb0FycmF5ID0gZnVuY3Rpb24gKEZpbGVOYW1lLCBLZXlOYW1lKSB7IHJldHVybiBzbi5GbG9hdExpc3RUb0FycmF5KEZpbGVOYW1lLCBLZXlOYW1lKTsgfTtcclxuZXhwb3J0IHZhciBTdHJpbmdMaXN0VG9BcnJheSA9IGZ1bmN0aW9uIChGaWxlTmFtZSwgS2V5TmFtZSkgeyByZXR1cm4gc24uU3RyaW5nTGlzdFRvQXJyYXkoRmlsZU5hbWUsIEtleU5hbWUpOyB9O1xyXG5leHBvcnQgdmFyIEZvcm1MaXN0VG9BcnJheSA9IGZ1bmN0aW9uIChGaWxlTmFtZSwgS2V5TmFtZSkgeyByZXR1cm4gc24uRm9ybUxpc3RUb0FycmF5KEZpbGVOYW1lLCBLZXlOYW1lKTsgfTtcclxuZXhwb3J0IHZhciBBZGp1c3RJbnRWYWx1ZSA9IGZ1bmN0aW9uIChGaWxlTmFtZSwgS2V5TmFtZSwgYW1vdW50KSB7IHJldHVybiBzbi5BZGp1c3RJbnRWYWx1ZShGaWxlTmFtZSwgS2V5TmFtZSwgYW1vdW50KTsgfTtcclxuZXhwb3J0IHZhciBBZGp1c3RGbG9hdFZhbHVlID0gZnVuY3Rpb24gKEZpbGVOYW1lLCBLZXlOYW1lLCBhbW91bnQpIHsgcmV0dXJuIHNuLkFkanVzdEZsb2F0VmFsdWUoRmlsZU5hbWUsIEtleU5hbWUsIGFtb3VudCk7IH07XHJcbmV4cG9ydCB2YXIgSW50TGlzdEFkanVzdCA9IGZ1bmN0aW9uIChGaWxlTmFtZSwgS2V5TmFtZSwgaW5kZXgsIGFtb3VudCkgeyByZXR1cm4gc24uSW50TGlzdEFkanVzdChGaWxlTmFtZSwgS2V5TmFtZSwgaW5kZXgsIGFtb3VudCk7IH07XHJcbmV4cG9ydCB2YXIgRmxvYXRMaXN0QWRqdXN0ID0gZnVuY3Rpb24gKEZpbGVOYW1lLCBLZXlOYW1lLCBpbmRleCwgYW1vdW50KSB7IHJldHVybiBzbi5GbG9hdExpc3RBZGp1c3QoRmlsZU5hbWUsIEtleU5hbWUsIGluZGV4LCBhbW91bnQpOyB9O1xyXG5leHBvcnQgdmFyIENvdW50SW50VmFsdWVQcmVmaXggPSBmdW5jdGlvbiAoRmlsZU5hbWUsIFByZWZpeEtleSkgeyByZXR1cm4gc24uQ291bnRJbnRWYWx1ZVByZWZpeChGaWxlTmFtZSwgUHJlZml4S2V5KTsgfTtcclxuZXhwb3J0IHZhciBDb3VudEZsb2F0VmFsdWVQcmVmaXggPSBmdW5jdGlvbiAoRmlsZU5hbWUsIFByZWZpeEtleSkgeyByZXR1cm4gc24uQ291bnRGbG9hdFZhbHVlUHJlZml4KEZpbGVOYW1lLCBQcmVmaXhLZXkpOyB9O1xyXG5leHBvcnQgdmFyIENvdW50U3RyaW5nVmFsdWVQcmVmaXggPSBmdW5jdGlvbiAoRmlsZU5hbWUsIFByZWZpeEtleSkgeyByZXR1cm4gc24uQ291bnRTdHJpbmdWYWx1ZVByZWZpeChGaWxlTmFtZSwgUHJlZml4S2V5KTsgfTtcclxuZXhwb3J0IHZhciBDb3VudEZvcm1WYWx1ZVByZWZpeCA9IGZ1bmN0aW9uIChGaWxlTmFtZSwgUHJlZml4S2V5KSB7IHJldHVybiBzbi5Db3VudEZvcm1WYWx1ZVByZWZpeChGaWxlTmFtZSwgUHJlZml4S2V5KTsgfTtcclxuZXhwb3J0IHZhciBDb3VudEludExpc3RQcmVmaXggPSBmdW5jdGlvbiAoRmlsZU5hbWUsIFByZWZpeEtleSkgeyByZXR1cm4gc24uQ291bnRJbnRMaXN0UHJlZml4KEZpbGVOYW1lLCBQcmVmaXhLZXkpOyB9O1xyXG5leHBvcnQgdmFyIENvdW50RmxvYXRMaXN0UHJlZml4ID0gZnVuY3Rpb24gKEZpbGVOYW1lLCBQcmVmaXhLZXkpIHsgcmV0dXJuIHNuLkNvdW50RmxvYXRMaXN0UHJlZml4KEZpbGVOYW1lLCBQcmVmaXhLZXkpOyB9O1xyXG5leHBvcnQgdmFyIENvdW50U3RyaW5nTGlzdFByZWZpeCA9IGZ1bmN0aW9uIChGaWxlTmFtZSwgUHJlZml4S2V5KSB7IHJldHVybiBzbi5Db3VudFN0cmluZ0xpc3RQcmVmaXgoRmlsZU5hbWUsIFByZWZpeEtleSk7IH07XHJcbmV4cG9ydCB2YXIgQ291bnRGb3JtTGlzdFByZWZpeCA9IGZ1bmN0aW9uIChGaWxlTmFtZSwgUHJlZml4S2V5KSB7IHJldHVybiBzbi5Db3VudEZvcm1MaXN0UHJlZml4KEZpbGVOYW1lLCBQcmVmaXhLZXkpOyB9O1xyXG5leHBvcnQgdmFyIENvdW50QWxsUHJlZml4ID0gZnVuY3Rpb24gKEZpbGVOYW1lLCBQcmVmaXhLZXkpIHsgcmV0dXJuIHNuLkNvdW50QWxsUHJlZml4KEZpbGVOYW1lLCBQcmVmaXhLZXkpOyB9O1xyXG4vLyBFeHBlcmltZW50YWwgY3VzdG9tIGpzb24gZm9ybWF0dGluZyBoYW5kbGVycy4gUGF0aHMgYXJlIHJlc29sdmVkIHVzaW5nIHR5cGljYWwganNvbiBzeW50YXguXHJcbi8vIFRoZSBwYXRoIHdpbGwgYmUgY3JlYXRlZCBhcyBuZWNlc3Nhcnkgd2hlbiBzZXR0aW5nIGRhdGEgYW5kIHRoZSBwYXRoIGRvZXMgbm90IHlldCBleGlzdHMuXHJcbi8vIGV4YW1wbGVzOlxyXG4vLyBcdEpTT04gRmlsZTogLyoqIFwiZm9vXCI6IC8qKiBcImJhclwiOiBbMywgMTAsIDddICovICovXHJcbi8vICAgRnVuY3Rpb246IEdldFBhdGhJbnRWYWx1ZShcImZpbGVuYW1lLmpzb25cIiwgXCIuZm9vLmJhclsxXVwiKVxyXG4vLyAgIFJldHVybjogMTBcclxuZXhwb3J0IHZhciBTZXRQYXRoSW50VmFsdWUgPSBmdW5jdGlvbiAoRmlsZU5hbWUsIFBhdGgsIHZhbHVlKSB7IHJldHVybiBzbi5TZXRQYXRoSW50VmFsdWUoRmlsZU5hbWUsIFBhdGgsIHZhbHVlKTsgfTtcclxuZXhwb3J0IHZhciBTZXRQYXRoRmxvYXRWYWx1ZSA9IGZ1bmN0aW9uIChGaWxlTmFtZSwgUGF0aCwgdmFsdWUpIHsgcmV0dXJuIHNuLlNldFBhdGhGbG9hdFZhbHVlKEZpbGVOYW1lLCBQYXRoLCB2YWx1ZSk7IH07XHJcbmV4cG9ydCB2YXIgU2V0UGF0aFN0cmluZ1ZhbHVlID0gZnVuY3Rpb24gKEZpbGVOYW1lLCBQYXRoLCB2YWx1ZSkgeyByZXR1cm4gc24uU2V0UGF0aFN0cmluZ1ZhbHVlKEZpbGVOYW1lLCBQYXRoLCB2YWx1ZSk7IH07XHJcbmV4cG9ydCB2YXIgU2V0UGF0aEZvcm1WYWx1ZSA9IGZ1bmN0aW9uIChGaWxlTmFtZSwgUGF0aCwgdmFsdWUpIHsgcmV0dXJuIHNuLlNldFBhdGhGb3JtVmFsdWUoRmlsZU5hbWUsIFBhdGgsIHZhbHVlKTsgfTtcclxuZXhwb3J0IHZhciBTZXRSYXdQYXRoVmFsdWUgPSBmdW5jdGlvbiAoRmlsZU5hbWUsIFBhdGgsIFJhd0pTT04pIHsgcmV0dXJuIHNuLlNldFJhd1BhdGhWYWx1ZShGaWxlTmFtZSwgUGF0aCwgUmF3SlNPTik7IH07XHJcbmV4cG9ydCB2YXIgR2V0UGF0aEludFZhbHVlID0gZnVuY3Rpb24gKEZpbGVOYW1lLCBQYXRoLCBtaXNzaW5nKSB7XHJcbiAgICBpZiAobWlzc2luZyA9PT0gdm9pZCAwKSB7IG1pc3NpbmcgPSAwOyB9XHJcbiAgICByZXR1cm4gc24uR2V0UGF0aEludFZhbHVlKEZpbGVOYW1lLCBQYXRoLCBtaXNzaW5nKTtcclxufTtcclxuZXhwb3J0IHZhciBHZXRQYXRoRmxvYXRWYWx1ZSA9IGZ1bmN0aW9uIChGaWxlTmFtZSwgUGF0aCwgbWlzc2luZykge1xyXG4gICAgaWYgKG1pc3NpbmcgPT09IHZvaWQgMCkgeyBtaXNzaW5nID0gMC4wOyB9XHJcbiAgICByZXR1cm4gc24uR2V0UGF0aEZsb2F0VmFsdWUoRmlsZU5hbWUsIFBhdGgsIG1pc3NpbmcpO1xyXG59O1xyXG5leHBvcnQgdmFyIEdldFBhdGhTdHJpbmdWYWx1ZSA9IGZ1bmN0aW9uIChGaWxlTmFtZSwgUGF0aCwgbWlzc2luZykge1xyXG4gICAgaWYgKG1pc3NpbmcgPT09IHZvaWQgMCkgeyBtaXNzaW5nID0gXCJcIjsgfVxyXG4gICAgcmV0dXJuIHNuLkdldFBhdGhTdHJpbmdWYWx1ZShGaWxlTmFtZSwgUGF0aCwgbWlzc2luZyk7XHJcbn07XHJcbmV4cG9ydCB2YXIgR2V0UGF0aEZvcm1WYWx1ZSA9IGZ1bmN0aW9uIChGaWxlTmFtZSwgUGF0aCwgbWlzc2luZykge1xyXG4gICAgaWYgKG1pc3NpbmcgPT09IHZvaWQgMCkgeyBtaXNzaW5nID0gbnVsbDsgfVxyXG4gICAgcmV0dXJuIHNuLkdldFBhdGhGb3JtVmFsdWUoRmlsZU5hbWUsIFBhdGgsIG1pc3NpbmcpO1xyXG59O1xyXG5leHBvcnQgdmFyIEdldFBhdGhCb29sVmFsdWUgPSBmdW5jdGlvbiAoRmlsZU5hbWUsIFBhdGgsIG1pc3NpbmcpIHtcclxuICAgIGlmIChtaXNzaW5nID09PSB2b2lkIDApIHsgbWlzc2luZyA9IGZhbHNlOyB9XHJcbiAgICByZXR1cm4gc24uR2V0UGF0aEJvb2xWYWx1ZShGaWxlTmFtZSwgUGF0aCwgbWlzc2luZyk7XHJcbn07XHJcbmV4cG9ydCB2YXIgUGF0aEludEVsZW1lbnRzID0gZnVuY3Rpb24gKEZpbGVOYW1lLCBQYXRoLCBpbnZhbGlkVHlwZSkge1xyXG4gICAgaWYgKGludmFsaWRUeXBlID09PSB2b2lkIDApIHsgaW52YWxpZFR5cGUgPSAwOyB9XHJcbiAgICByZXR1cm4gc24uUGF0aEludEVsZW1lbnRzKEZpbGVOYW1lLCBQYXRoLCBpbnZhbGlkVHlwZSk7XHJcbn07XHJcbmV4cG9ydCB2YXIgUGF0aEZsb2F0RWxlbWVudHMgPSBmdW5jdGlvbiAoRmlsZU5hbWUsIFBhdGgsIGludmFsaWRUeXBlKSB7XHJcbiAgICBpZiAoaW52YWxpZFR5cGUgPT09IHZvaWQgMCkgeyBpbnZhbGlkVHlwZSA9IDAuMDsgfVxyXG4gICAgcmV0dXJuIHNuLlBhdGhGbG9hdEVsZW1lbnRzKEZpbGVOYW1lLCBQYXRoLCBpbnZhbGlkVHlwZSk7XHJcbn07XHJcbmV4cG9ydCB2YXIgUGF0aFN0cmluZ0VsZW1lbnRzID0gZnVuY3Rpb24gKEZpbGVOYW1lLCBQYXRoLCBpbnZhbGlkVHlwZSkge1xyXG4gICAgaWYgKGludmFsaWRUeXBlID09PSB2b2lkIDApIHsgaW52YWxpZFR5cGUgPSBcIlwiOyB9XHJcbiAgICByZXR1cm4gc24uUGF0aFN0cmluZ0VsZW1lbnRzKEZpbGVOYW1lLCBQYXRoLCBpbnZhbGlkVHlwZSk7XHJcbn07XHJcbmV4cG9ydCB2YXIgUGF0aEZvcm1FbGVtZW50cyA9IGZ1bmN0aW9uIChGaWxlTmFtZSwgUGF0aCwgaW52YWxpZFR5cGUpIHtcclxuICAgIGlmIChpbnZhbGlkVHlwZSA9PT0gdm9pZCAwKSB7IGludmFsaWRUeXBlID0gbnVsbDsgfVxyXG4gICAgcmV0dXJuIHNuLlBhdGhGb3JtRWxlbWVudHMoRmlsZU5hbWUsIFBhdGgsIGludmFsaWRUeXBlKTtcclxufTtcclxuZXhwb3J0IHZhciBGaW5kUGF0aEludEVsZW1lbnQgPSBmdW5jdGlvbiAoRmlsZU5hbWUsIFBhdGgsIHRvRmluZCkgeyByZXR1cm4gc24uRmluZFBhdGhJbnRFbGVtZW50KEZpbGVOYW1lLCBQYXRoLCB0b0ZpbmQpOyB9O1xyXG5leHBvcnQgdmFyIEZpbmRQYXRoRmxvYXRFbGVtZW50ID0gZnVuY3Rpb24gKEZpbGVOYW1lLCBQYXRoLCB0b0ZpbmQpIHsgcmV0dXJuIHNuLkZpbmRQYXRoRmxvYXRFbGVtZW50KEZpbGVOYW1lLCBQYXRoLCB0b0ZpbmQpOyB9O1xyXG5leHBvcnQgdmFyIEZpbmRQYXRoU3RyaW5nRWxlbWVudCA9IGZ1bmN0aW9uIChGaWxlTmFtZSwgUGF0aCwgdG9GaW5kKSB7IHJldHVybiBzbi5GaW5kUGF0aFN0cmluZ0VsZW1lbnQoRmlsZU5hbWUsIFBhdGgsIHRvRmluZCk7IH07XHJcbmV4cG9ydCB2YXIgRmluZFBhdGhGb3JtRWxlbWVudCA9IGZ1bmN0aW9uIChGaWxlTmFtZSwgUGF0aCwgdG9GaW5kKSB7IHJldHVybiBzbi5GaW5kUGF0aEZvcm1FbGVtZW50KEZpbGVOYW1lLCBQYXRoLCB0b0ZpbmQpOyB9O1xyXG5leHBvcnQgdmFyIFBhdGhDb3VudCA9IGZ1bmN0aW9uIChGaWxlTmFtZSwgUGF0aCkgeyByZXR1cm4gc24uUGF0aENvdW50KEZpbGVOYW1lLCBQYXRoKTsgfTtcclxuZXhwb3J0IHZhciBQYXRoTWVtYmVycyA9IGZ1bmN0aW9uIChGaWxlTmFtZSwgUGF0aCkgeyByZXR1cm4gc24uUGF0aE1lbWJlcnMoRmlsZU5hbWUsIFBhdGgpOyB9O1xyXG5leHBvcnQgdmFyIENhblJlc29sdmVQYXRoID0gZnVuY3Rpb24gKEZpbGVOYW1lLCBQYXRoKSB7IHJldHVybiBzbi5DYW5SZXNvbHZlUGF0aChGaWxlTmFtZSwgUGF0aCk7IH07XHJcbmV4cG9ydCB2YXIgSXNQYXRoU3RyaW5nID0gZnVuY3Rpb24gKEZpbGVOYW1lLCBQYXRoKSB7IHJldHVybiBzbi5Jc1BhdGhTdHJpbmcoRmlsZU5hbWUsIFBhdGgpOyB9O1xyXG5leHBvcnQgdmFyIElzUGF0aE51bWJlciA9IGZ1bmN0aW9uIChGaWxlTmFtZSwgUGF0aCkgeyByZXR1cm4gc24uSXNQYXRoTnVtYmVyKEZpbGVOYW1lLCBQYXRoKTsgfTtcclxuZXhwb3J0IHZhciBJc1BhdGhGb3JtID0gZnVuY3Rpb24gKEZpbGVOYW1lLCBQYXRoKSB7IHJldHVybiBzbi5Jc1BhdGhGb3JtKEZpbGVOYW1lLCBQYXRoKTsgfTtcclxuZXhwb3J0IHZhciBJc1BhdGhCb29sID0gZnVuY3Rpb24gKEZpbGVOYW1lLCBQYXRoKSB7IHJldHVybiBzbi5Jc1BhdGhCb29sKEZpbGVOYW1lLCBQYXRoKTsgfTtcclxuZXhwb3J0IHZhciBJc1BhdGhBcnJheSA9IGZ1bmN0aW9uIChGaWxlTmFtZSwgUGF0aCkgeyByZXR1cm4gc24uSXNQYXRoQXJyYXkoRmlsZU5hbWUsIFBhdGgpOyB9O1xyXG5leHBvcnQgdmFyIElzUGF0aE9iamVjdCA9IGZ1bmN0aW9uIChGaWxlTmFtZSwgUGF0aCkgeyByZXR1cm4gc24uSXNQYXRoT2JqZWN0KEZpbGVOYW1lLCBQYXRoKTsgfTtcclxuZXhwb3J0IHZhciBTZXRQYXRoSW50QXJyYXkgPSBmdW5jdGlvbiAoRmlsZU5hbWUsIFBhdGgsIGFyciwgYXBwZW5kKSB7XHJcbiAgICBpZiAoYXBwZW5kID09PSB2b2lkIDApIHsgYXBwZW5kID0gZmFsc2U7IH1cclxuICAgIHJldHVybiBzbi5TZXRQYXRoSW50QXJyYXkoRmlsZU5hbWUsIFBhdGgsIGFyciwgYXBwZW5kKTtcclxufTtcclxuZXhwb3J0IHZhciBTZXRQYXRoRmxvYXRBcnJheSA9IGZ1bmN0aW9uIChGaWxlTmFtZSwgUGF0aCwgYXJyLCBhcHBlbmQpIHtcclxuICAgIGlmIChhcHBlbmQgPT09IHZvaWQgMCkgeyBhcHBlbmQgPSBmYWxzZTsgfVxyXG4gICAgcmV0dXJuIHNuLlNldFBhdGhGbG9hdEFycmF5KEZpbGVOYW1lLCBQYXRoLCBhcnIsIGFwcGVuZCk7XHJcbn07XHJcbmV4cG9ydCB2YXIgU2V0UGF0aFN0cmluZ0FycmF5ID0gZnVuY3Rpb24gKEZpbGVOYW1lLCBQYXRoLCBhcnIsIGFwcGVuZCkge1xyXG4gICAgaWYgKGFwcGVuZCA9PT0gdm9pZCAwKSB7IGFwcGVuZCA9IGZhbHNlOyB9XHJcbiAgICByZXR1cm4gc24uU2V0UGF0aFN0cmluZ0FycmF5KEZpbGVOYW1lLCBQYXRoLCBhcnIsIGFwcGVuZCk7XHJcbn07XHJcbmV4cG9ydCB2YXIgU2V0UGF0aEZvcm1BcnJheSA9IGZ1bmN0aW9uIChGaWxlTmFtZSwgUGF0aCwgYXJyLCBhcHBlbmQpIHtcclxuICAgIGlmIChhcHBlbmQgPT09IHZvaWQgMCkgeyBhcHBlbmQgPSBmYWxzZTsgfVxyXG4gICAgcmV0dXJuIHNuLlNldFBhdGhGb3JtQXJyYXkoRmlsZU5hbWUsIFBhdGgsIGFyciwgYXBwZW5kKTtcclxufTtcclxuZXhwb3J0IHZhciBDbGVhclBhdGggPSBmdW5jdGlvbiAoRmlsZU5hbWUsIFBhdGgpIHsgcmV0dXJuIHNuLkNsZWFyUGF0aChGaWxlTmFtZSwgUGF0aCk7IH07XHJcbmV4cG9ydCB2YXIgQ2xlYXJQYXRoSW5kZXggPSBmdW5jdGlvbiAoRmlsZU5hbWUsIFBhdGgsIEluZGV4KSB7IHJldHVybiBzbi5DbGVhclBhdGhJbmRleChGaWxlTmFtZSwgUGF0aCwgSW5kZXgpOyB9O1xyXG4vLyBEZWJ1ZyB1c2VcclxuZXhwb3J0IHZhciBDbGVhckFsbCA9IGZ1bmN0aW9uIChGaWxlTmFtZSkgeyByZXR1cm4gc24uQ2xlYXJBbGwoRmlsZU5hbWUpOyB9O1xyXG4iLCIvKlxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblR5cGVzY3JpcHQgZGVmaW5pdGlvbnMgZm9yIHY0LjUuNVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5UaGlzIGZpbGUgd2FzIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGJ5IFBhcHlydXMtMi1UeXBlc2NyaXB0LmV4ZVxyXG5odHRwczovL2dpdGh1Yi5jb20vQ2FybG9zTGV5dmFBeWFsYS9QYXB5cnVzLTItVHlwZXNjcmlwdFxyXG5cclxuVGhlIHByb2dyYW0gaGFzIG5vIHdheSB0byBrbm93IHRoZSBpbnRlbnRpb24gb2YgdGhlIGh1bWFucyB0aGF0IG1hZGVcclxudGhlIHNjcmlwdHMsIHNvIGl0J3MgYWx3YXlzIGFkdmlzYWJsZSB0byBtYW51YWxseSBjaGVjayBhbGwgZ2VuZXJhdGVkXHJcbmZpbGVzIHRvIG1ha2Ugc3VyZSBldmVyeXRoaW5nIGlzIGRlY2xhcmVkIGFzIGl0IHNob3VsZC5cclxuXHJcblRha2Ugbm90ZSB0aGUgcHJvZ3JhbSBhc3N1bWVzIHRoaXMgc2NyaXB0IGV4aXN0cyBpbiBzb21lIHN1YmZvbGRlclxyXG50byB0aGUgZm9sZGVyIHdoZXJlIGBza3lyaW1QbGF0Zm9ybS50c2AgaXMgZm91bmQsIG90aGVyd2lzZSB5b3UnbGwgZ2V0XHJcblwiQ2Fubm90IGZpbmQgbW9kdWxlLi4uXCIgdHlwZSBvZiBlcnJvcnMuXHJcblxyXG5JZiB5b3Ugd2FudCB0byBoYXZlIHRoaXMgc2NyaXB0IGluIHNvbWUgb3RoZXIgcGxhY2UsIGp1c3QgY2hhbmdlIHRoZVxyXG5yZWxhdGl2ZSBwYXRoIG9mIGVhY2ggYGltcG9ydGAuXHJcbiovXHJcbmltcG9ydCAqIGFzIHNwIGZyb20gXCJza3lyaW1QbGF0Zm9ybVwiO1xyXG52YXIgc24gPSBzcC5QTzNfU0tTRUZ1bmN0aW9ucztcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vQUNUSVZFIEVGRkVDVFxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy9yZXR1cm5zIHdoZXRoZXIgdGhlIGFjdGl2ZUVmZmVjdCBoYXMgc2NyaXB0IGF0dGFjaGVkLiBJZiBzY3JpcHROYW1lIGlzIGVtcHR5LCBpdCB3aWxsIHJldHVybiBpZiB0aGUgYWN0aXZlRWZmZWN0IGhhcyBhbnkgbm9uLWJhc2Ugc2NyaXB0cyBhdHRhY2hlZFxyXG5leHBvcnQgdmFyIElzU2NyaXB0QXR0YWNoZWRUb0FjdGl2ZUVmZmVjdCA9IGZ1bmN0aW9uIChha0FjdGl2ZUVmZmVjdCwgYXNTY3JpcHROYW1lKSB7IHJldHVybiBzbi5Jc1NjcmlwdEF0dGFjaGVkVG9BY3RpdmVFZmZlY3QoYWtBY3RpdmVFZmZlY3QsIGFzU2NyaXB0TmFtZSk7IH07XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vL0FDVE9SU1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8tLS0tLS0tXHJcbi8vR0VUVEVSU1xyXG4vLy0tLS0tLS1cclxuLy9HZXRzIGFsbCBtYWdpY2VmZmVjdHMgY3VycmVudGx5IG9uIHRoZSBhY3Rvci4gRmlsdGVycyBvdXQgaW5hY3RpdmUgYW5kIGhpZGVpbnVpIHNwZWxscy5cclxuZXhwb3J0IHZhciBHZXRBY3RpdmVFZmZlY3RzID0gZnVuY3Rpb24gKGFrQWN0b3IsIGFiU2hvd0luYWN0aXZlKSB7XHJcbiAgICBpZiAoYWJTaG93SW5hY3RpdmUgPT09IHZvaWQgMCkgeyBhYlNob3dJbmFjdGl2ZSA9IGZhbHNlOyB9XHJcbiAgICByZXR1cm4gc24uR2V0QWN0aXZlRWZmZWN0cyhha0FjdG9yLCBhYlNob3dJbmFjdGl2ZSk7XHJcbn07XHJcbmV4cG9ydCB2YXIgR2V0QWN0b3JBbHBoYSA9IGZ1bmN0aW9uIChha0FjdG9yKSB7XHJcbiAgICByZXR1cm4gc24uR2V0QWN0b3JBbHBoYShha0FjdG9yKTtcclxufTtcclxuZXhwb3J0IHZhciBHZXRBY3RvclJlZnJhY3Rpb24gPSBmdW5jdGlvbiAoYWtBY3Rvcikge1xyXG4gICAgcmV0dXJuIHNuLkdldEFjdG9yUmVmcmFjdGlvbihha0FjdG9yKTtcclxufTtcclxuLyoqIEFDVE9SIFNUQVRFXHJcbiAgICAgICAgQWxpdmUgPSAwXHJcbiAgICAgICAgRHlpbmcgPSAxXHJcbiAgICAgICAgRGVhZCA9IDJcclxuICAgICAgICBVbmNvbnNjaW91cyA9IDNcclxuICAgICAgICBSZWFuaW1hdGUgPSA0XHJcbiAgICAgICAgUmVjeWNsZSA9IDVcclxuICAgICAgICBSZXN0cmFpbmVkID0gNlxyXG4gICAgICAgIEVzc2VudGlhbERvd24gPSA3XHJcbiAgICAgICAgQmxlZWRvdXQgPSA4ICovXHJcbi8vR2V0cyBhY3RvciBzdGF0ZVxyXG5leHBvcnQgdmFyIEdldEFjdG9yU3RhdGUgPSBmdW5jdGlvbiAoYWtBY3Rvcikge1xyXG4gICAgcmV0dXJuIHNuLkdldEFjdG9yU3RhdGUoYWtBY3Rvcik7XHJcbn07XHJcbi8vR2V0cyBhY3RvciBzb3VsIHNpemVcclxuZXhwb3J0IHZhciBHZXRBY3RvclNvdWxTaXplID0gZnVuY3Rpb24gKGFrQWN0b3IpIHtcclxuICAgIHJldHVybiBzbi5HZXRBY3RvclNvdWxTaXplKGFrQWN0b3IpO1xyXG59O1xyXG4vL0dldHMgYWN0b3IgdmFsdWUgbW9kaWZpZXIuIDAgLSBwZXJtYW5lbnQsIDEgLSB0ZW1wb3JhcnksIDIgLSBkYW1hZ2VcclxuZXhwb3J0IHZhciBHZXRBY3RvclZhbHVlTW9kaWZpZXIgPSBmdW5jdGlvbiAoYWtBY3RvciwgYWlNb2RpZmllciwgYXNBY3RvclZhbHVlKSB7IHJldHVybiBzbi5HZXRBY3RvclZhbHVlTW9kaWZpZXIoYWtBY3RvciwgYWlNb2RpZmllciwgYXNBY3RvclZhbHVlKTsgfTtcclxuLy9HZXRzIGFjdG9yIGNyaXRpY2FsIHN0YWdlXHJcbmV4cG9ydCB2YXIgR2V0Q3JpdGljYWxTdGFnZSA9IGZ1bmN0aW9uIChha0FjdG9yKSB7XHJcbiAgICByZXR1cm4gc24uR2V0Q3JpdGljYWxTdGFnZShha0FjdG9yKTtcclxufTtcclxuLy9HZXRzIGFsbCBhbGxpZXMgb2YgdGhlIGFjdG9yLCBpZiBpbiBjb21iYXRcclxuZXhwb3J0IHZhciBHZXRDb21iYXRBbGxpZXMgPSBmdW5jdGlvbiAoYWtBY3Rvcikge1xyXG4gICAgcmV0dXJuIHNuLkdldENvbWJhdEFsbGllcyhha0FjdG9yKTtcclxufTtcclxuLy9HZXRzIGFsbCB0YXJnZXRzIG9mIHRoZSBhY3RvciwgaWYgaW4gY29tYmF0XHJcbmV4cG9ydCB2YXIgR2V0Q29tYmF0VGFyZ2V0cyA9IGZ1bmN0aW9uIChha0FjdG9yKSB7XHJcbiAgICByZXR1cm4gc24uR2V0Q29tYmF0VGFyZ2V0cyhha0FjdG9yKTtcclxufTtcclxuLy9HZXRzIGFsbCBjdXJyZW50IHN1bW1vbnMgY29tbWFuZGVkIGJ5IHRoaXMgYWN0b3JcclxuZXhwb3J0IHZhciBHZXRDb21tYW5kZWRBY3RvcnMgPSBmdW5jdGlvbiAoYWtBY3RvcikgeyByZXR1cm4gc24uR2V0Q29tbWFuZGVkQWN0b3JzKGFrQWN0b3IpOyB9O1xyXG4vL0dldHMgdGhlIG93bmVyIG9mIHN1bW1vbmVkIGFjdG9yXHJcbmV4cG9ydCB2YXIgR2V0Q29tbWFuZGluZ0FjdG9yID0gZnVuY3Rpb24gKGFrQWN0b3IpIHsgcmV0dXJuIHNuLkdldENvbW1hbmRpbmdBY3Rvcihha0FjdG9yKTsgfTtcclxuLy9HZXRzIGN1cnJlbnQgaGFpciBjb2xvciBvbiBhY3Rvci4gRmFpbHMgaWYgaGFpciBoZWFkcGFydCBkb2Vzbid0IGV4aXN0XHJcbmV4cG9ydCB2YXIgR2V0SGFpckNvbG9yID0gZnVuY3Rpb24gKGFrQWN0b3IpIHsgcmV0dXJuIHNuLkdldEhhaXJDb2xvcihha0FjdG9yKTsgfTtcclxuLy9HZXRzIHRleHR1cmVzZXQgYmVsb25naW5nIHRvIGhlYWRwYXJ0LCBpZiBhbnkuXHJcbmV4cG9ydCB2YXIgR2V0SGVhZFBhcnRUZXh0dXJlU2V0ID0gZnVuY3Rpb24gKGFrQWN0b3IsIGFpVHlwZSkgeyByZXR1cm4gc24uR2V0SGVhZFBhcnRUZXh0dXJlU2V0KGFrQWN0b3IsIGFpVHlwZSk7IH07XHJcbi8vR2V0cyB0aGUgYWN0b3IncyBsb2NhbCBncmF2aXR5LlxyXG5leHBvcnQgdmFyIEdldExvY2FsR3Jhdml0eUFjdG9yID0gZnVuY3Rpb24gKGFrQWN0b3IpIHsgcmV0dXJuIHNuLkdldExvY2FsR3Jhdml0eUFjdG9yKGFrQWN0b3IpOyB9O1xyXG4vL0dldHMgb2JqZWN0IHVuZGVyIGFjdG9yJ3MgZmVldCAoZWcuIHRhYmxlKS4gRG9lcyBub3Qgd29yayBpZiB0aGUgcGxheWVyIGlzIHN0YW5kaW5nIG9uIHRoZSBncm91bmQuXHJcbmV4cG9ydCB2YXIgR2V0T2JqZWN0VW5kZXJGZWV0ID0gZnVuY3Rpb24gKGFrQWN0b3IpIHsgcmV0dXJuIHNuLkdldE9iamVjdFVuZGVyRmVldChha0FjdG9yKTsgfTtcclxuLy9HZXRzIGFjdHVhbCBjdXJyZW50IHBhY2thZ2Ugb24gYWN0b3IsIGluY2x1ZGluZyBpbnRlcm5hbCBwYWNrYWdlcyB1c2VkIGJ5IHRoZSBnYW1lIChzZWUgR2V0UGFja2FnZVR5cGUgYmVsb3cpXHJcbmV4cG9ydCB2YXIgR2V0UnVubmluZ1BhY2thZ2UgPSBmdW5jdGlvbiAoYWtBY3RvcikgeyByZXR1cm4gc24uR2V0UnVubmluZ1BhY2thZ2UoYWtBY3Rvcik7IH07XHJcbi8vR2V0cyBjdXJyZW50IHNraW4gY29sb3Igb24gYWN0b3IuXHJcbmV4cG9ydCB2YXIgR2V0U2tpbkNvbG9yID0gZnVuY3Rpb24gKGFrQWN0b3IpIHsgcmV0dXJuIHNuLkdldFNraW5Db2xvcihha0FjdG9yKTsgfTtcclxuLy9TaW1pbGFyIHRvIEdldFRpbWVEZWFkIGNvbnNvbGUgY29tbWFuZC4gUmV0dXJucyAwLjAgaWYgYWN0b3IgaXMgYWxpdmVcclxuZXhwb3J0IHZhciBHZXRUaW1lRGVhZCA9IGZ1bmN0aW9uIChha0FjdG9yKSB7XHJcbiAgICByZXR1cm4gc24uR2V0VGltZURlYWQoYWtBY3Rvcik7XHJcbn07XHJcbi8vUmV0dXJucyB0aW1lIG9mIGRlYXRoIGluIGdhbWUgZGF5cyBwYXNzZWRcclxuZXhwb3J0IHZhciBHZXRUaW1lT2ZEZWF0aCA9IGZ1bmN0aW9uIChha0FjdG9yKSB7XHJcbiAgICByZXR1cm4gc24uR2V0VGltZU9mRGVhdGgoYWtBY3Rvcik7XHJcbn07XHJcbi8vSGFzU3BlbGwgYnV0IGNoZWNrcyBpZiB0aGUgc3BlbGwgaXMgcHJlc2VudCBvbiB0aGUgYWN0b3IgKGkuZSBhY3RpdmUgYW5kIG5vdCBkaXNwZWxsZWQpXHJcbmV4cG9ydCB2YXIgSGFzQWN0aXZlU3BlbGwgPSBmdW5jdGlvbiAoYWtBY3RvciwgYWtTcGVsbCkgeyByZXR1cm4gc24uSGFzQWN0aXZlU3BlbGwoYWtBY3RvciwgYWtTcGVsbCk7IH07XHJcbi8vUmV0dXJucyB3aGV0aGVyIHRoZSBhY3RvciBpcyBpbiBkZWZlcnJlZCBraWxsIG1vZGVcclxuZXhwb3J0IHZhciBIYXNEZWZlcnJlZEtpbGwgPSBmdW5jdGlvbiAoYWtBY3Rvcikge1xyXG4gICAgcmV0dXJuIHNuLkhhc0RlZmVycmVkS2lsbChha0FjdG9yKTtcclxufTtcclxuLy9DaGVja3MgaWYgYWN0aXZlbWFnaWNlZmZlY3Qgd2l0aCBnaXZlbiBhcmNoZXR5cGUgaXMgcHJlc2VudCBvbiBhY3Rvci4gQXJjaGV0eXBlIE1VU1QgYmUgdHlwZWQgYXMgZ2l2ZW4gYmVsb3cuXHJcbmV4cG9ydCB2YXIgSGFzTWFnaWNFZmZlY3RXaXRoQXJjaGV0eXBlID0gZnVuY3Rpb24gKGFrQWN0b3IsIGFzQXJjaGV0eXBlKSB7IHJldHVybiBzbi5IYXNNYWdpY0VmZmVjdFdpdGhBcmNoZXR5cGUoYWtBY3RvciwgYXNBcmNoZXR5cGUpOyB9O1xyXG4vL1JldHVybnMgaWYgdGhlIGFjdG9yIGhhcyBza2luL2FybW9yIHdpdGggc2tpbiBwcmVzZW50XHJcbmV4cG9ydCB2YXIgSGFzU2tpbiA9IGZ1bmN0aW9uIChha0FjdG9yLCBha0FybW9yVG9DaGVjaykgeyByZXR1cm4gc24uSGFzU2tpbihha0FjdG9yLCBha0FybW9yVG9DaGVjayk7IH07XHJcbi8vUmV0dXJucyB3aGV0aGVyIHRoZSBhY3RvciBpcyBpbiBjZWxsIHdhdGVyIG9yIGxhdmFcclxuZXhwb3J0IHZhciBJc0FjdG9ySW5XYXRlciA9IGZ1bmN0aW9uIChha0FjdG9yKSB7XHJcbiAgICByZXR1cm4gc24uSXNBY3RvckluV2F0ZXIoYWtBY3Rvcik7XHJcbn07XHJcbi8vUmV0dXJucyB3aGV0aGVyIHRoZSBhY3RvciBpcyB1bmRlcndhdGVyXHJcbmV4cG9ydCB2YXIgSXNBY3RvclVuZGVyd2F0ZXIgPSBmdW5jdGlvbiAoYWtBY3Rvcikge1xyXG4gICAgcmV0dXJuIHNuLklzQWN0b3JVbmRlcndhdGVyKGFrQWN0b3IpO1xyXG59O1xyXG4vKiogTElNQlxyXG4gICAgICAgIE5vbmUgPSAtMVxyXG4gICAgICAgIFRvcnNvID0gMFxyXG4gICAgICAgIEhlYWQgPSAxICovXHJcbi8vUmV0dXJucyB3aGV0aGVyIGxpbWIgaXMgZ29uZSAoaS5lLCB0aGUgaGVhZCwgYnV0IGFkZGluZyB0aGUgd2hvbGUgZW51bSBpbiBjYXNlIHNvbWVvbmUgZXhwYW5kcyB0aGUgZGlzbWVtYmVybWVudCBzeXN0ZW0gaW4gdGhlIGZ1dHVyZSlcclxuZXhwb3J0IHZhciBJc0xpbWJHb25lID0gZnVuY3Rpb24gKGFrQWN0b3IsIGFpTGltYikgeyByZXR1cm4gc24uSXNMaW1iR29uZShha0FjdG9yLCBhaUxpbWIpOyB9O1xyXG4vL1JldHVybnMgd2hldGhlciB0aGUgYWN0b3IgaXMgYSBxdWFkcnVwZWRcclxuZXhwb3J0IHZhciBJc1F1YWRydXBlZCA9IGZ1bmN0aW9uIChha0FjdG9yKSB7XHJcbiAgICByZXR1cm4gc24uSXNRdWFkcnVwZWQoYWtBY3Rvcik7XHJcbn07XHJcbi8vUmV0dXJucyB3aGV0aGVyIHRhcmdldCBpcyBzb3VsIHRyYXBwZWQgLyBjYXBhYmxlIG9mIGJlaW5nIHNvdWwgdHJhcHBlZCBzdWNjZXNzZnVsbHkgKGlmIHVzaW5nIG1vZHMgdGhhdCBieXBhc3MgdmFuaWxsYSBzb3VsIHRyYXAgc3lzdGVtKS5cclxuZXhwb3J0IHZhciBJc1NvdWxUcmFwcGVkID0gZnVuY3Rpb24gKGFrQWN0b3IpIHtcclxuICAgIHJldHVybiBzbi5Jc1NvdWxUcmFwcGVkKGFrQWN0b3IpO1xyXG59O1xyXG4vLy0tLS0tLS1cclxuLy9TRVRURVJTXHJcbi8vLS0tLS0tLVxyXG4vL0FkZHMgYWxsIGVxdWlwcGVkIGl0ZW1zIHRvIGFycmF5XHJcbmV4cG9ydCB2YXIgQWRkQWxsRXF1aXBwZWRJdGVtc1RvQXJyYXkgPSBmdW5jdGlvbiAoYWtBY3RvcikgeyByZXR1cm4gc24uQWRkQWxsRXF1aXBwZWRJdGVtc1RvQXJyYXkoYWtBY3Rvcik7IH07XHJcbi8vQWRkcyBwZXJrcyB0byB0aGUgYWN0b3JiYXNlLCB3b3JrcyBvbiBsZXZlbGVkIGFjdG9ycy91bmlxdWUgTlBDcy4gRnVuY3Rpb24gc2VyaWFsaXplcyBkYXRhIHRvIHNrc2UgY29zYXZlLCBzbyBwZXJrcyBhcmUgYXBwbGllZCBjb3JyZWN0bHkgb24gbG9hZGluZy9yZWxvYWRpbmcgc2F2ZXMuXHJcbmV4cG9ydCB2YXIgQWRkQmFzZVBlcmsgPSBmdW5jdGlvbiAoYWtBY3RvciwgYWtQZXJrKSB7IHJldHVybiBzbi5BZGRCYXNlUGVyayhha0FjdG9yLCBha1BlcmspOyB9O1xyXG4vL0FkZHMgc3BlbGxzIHRvIGFjdG9yYmFzZSwgd29ya3Mgb24gcGxheWVyL2xldmVsZWQgYWN0b3JzL3VuaXF1ZSBOUENzLiBGdW5jdGlvbiBzZXJpYWxpemVzIGRhdGEgdG8gc2tzZSBjb3NhdmUsIHNvIHNwZWxscyBhcmUgYXBwbGllZCBjb3JyZWN0bHkgb24gbG9hZGluZy9yZWxvYWRpbmcgc2F2ZXMuXHJcbmV4cG9ydCB2YXIgQWRkQmFzZVNwZWxsID0gZnVuY3Rpb24gKGFrQWN0b3IsIGFrU3BlbGwpIHsgcmV0dXJuIHNuLkFkZEJhc2VTcGVsbChha0FjdG9yLCBha1NwZWxsKTsgfTtcclxuLyoqIEJMRU5EIE1PREVTXHJcbiAgICAgICAgRGFya2VuID0gMFxyXG4gICAgICAgIE11bHRpcGx5ID0gMVxyXG4gICAgICAgIENvbG9yQnVybiA9IDJcclxuICAgICAgICBMaW5lYXJCdXJuID0gM1xyXG4gICAgICAgIERhcmtlckNvbG9yID0gNFxyXG4gICAgICAgIExpZ2h0ZW4gPSA1XHJcbiAgICAgICAgU2NyZWVuID0gNlxyXG4gICAgICAgIENvbG9yRG9kZ2UgPSA3XHJcbiAgICAgICAgTGluZWFyRG9kZ2UgPSA4XHJcbiAgICAgICAgTGlnaHRlckNvbG9yID0gOVxyXG4gICAgICAgIE92ZXJsYXkgPSAxMFxyXG4gICAgICAgIFNvZnRMaWdodCA9IDExXHJcbiAgICAgICAgSGFyZExpZ2h0ID0gMTJcclxuICAgICAgICBWaXZpZExpZ2h0ID0gMTNcclxuICAgICAgICBMaW5lYXJMaWdodCA9IDE0XHJcbiAgICAgICAgUGluTGlnaHQgPSAxNVxyXG4gICAgICAgIEhhcmRNaXggPSAxNlxyXG4gICAgICAgIERpZmZlcmVuY2UgPSAxN1xyXG4gICAgICAgIEV4Y2x1c2lvbiA9IDE4XHJcbiAgICAgICAgU3VidHJhY3QgPSAxOVxyXG4gICAgICAgIERpdmlkZSA9IDIwICovXHJcbi8vQmxlbmRzIGV4aXN0aW5nIHNraW4gY29sb3Igd2l0aCBzcGVjaWZpZWQgY29sb3IsIHVzaW5nIHBob3Rvc2hvcCBibGVuZCBmb3JtdWxhcywgd2l0aCBhbHBoYSAob3BhY2l0eSkuXHJcbi8vSWYgdHJ1ZSwgYXV0b0x1bWluYW5jZSBjYWxjdWxhdGVzIHNraW4gdG9uZSByZWxhdGl2ZSBsdW1pbmFuY2UuIFRoZSBvcGFjaXR5IHZhbHVlIGlzIHRoZW4gdXNlZCBhcyBhIG11bHRpcGxpZXIgb24gdG9wIG9mIHRoYXQsIGZpbmFsIHZhbHVlIGlzIGNsYW1wZWQgdG8gMC0xXHJcbi8vSWYgZmFsc2UsIG9ubHkgb3BhY2l0eSB3aWxsIGJlIHVzZWQuIFJlY29tbWVuZCB0byB1c2UgYXV0b2x1bWluYW5jZSBiZWNhdXNlIGNvbG9ycyB3aWxsIG5vdCBibGVuZCB3ZWxsIGZvciBhbGwgc2tpbiB0b25lcyB1c2luZyBmbGF0IHZhbHVlcy5cclxuZXhwb3J0IHZhciBCbGVuZENvbG9yV2l0aFNraW5Ub25lID0gZnVuY3Rpb24gKGFrQWN0b3IsIGFrQ29sb3IsIGFpQmxlbmRNb2RlLCBhYkF1dG9MdW1pbmFuY2UsIGFmT3BhY2l0eSkge1xyXG4gICAgcmV0dXJuIHNuLkJsZW5kQ29sb3JXaXRoU2tpblRvbmUoYWtBY3RvciwgYWtDb2xvciwgYWlCbGVuZE1vZGUsIGFiQXV0b0x1bWluYW5jZSwgYWZPcGFjaXR5KTtcclxufTtcclxuLy9EZWNhcGl0YXRlcyBsaXZpbmcgYW5kIGRlYWQgYWN0b3JzLiBMaXZpbmcgYWN0b3JzIHdpbGwgbm90IGRpZSB3aGVuIHRoaXMgaXMgY2FsbGVkIVxyXG5leHBvcnQgdmFyIERlY2FwaXRhdGVBY3RvciA9IGZ1bmN0aW9uIChha0FjdG9yKSB7XHJcbiAgICByZXR1cm4gc24uRGVjYXBpdGF0ZUFjdG9yKGFrQWN0b3IpO1xyXG59O1xyXG4vLzAgLSBFbmFibGVBSSArIHRvZ2dsaW5nIHJlY29yZCBoaXRzIGZsYWdzIHNvIHRoZXkgZG9uJ3QgZ28gZmx5aW5nIDMwMCBmZWV0IHdoZW4gdW5mcm96ZW4uXHJcbi8vMSAtIFBhcmFseXplcyBhY3RvciwgZXZlbiB3aGVuIGRlYWQuXHJcbmV4cG9ydCB2YXIgRnJlZXplQWN0b3IgPSBmdW5jdGlvbiAoYWtBY3RvciwgdHlwZSwgYWJGcmVlemUpIHsgcmV0dXJuIHNuLkZyZWV6ZUFjdG9yKGFrQWN0b3IsIHR5cGUsIGFiRnJlZXplKTsgfTtcclxuLy9RdWljayBhbmQgZGlydHkgaGFjayB0byBpbnN0YW50bHkga2lsbCB0aGUgYWN0b3IgYW5kIHNldCBhcyBkZWFkLlxyXG5leHBvcnQgdmFyIEtpbGxOb1dhaXQgPSBmdW5jdGlvbiAoYWtBY3Rvcikge1xyXG4gICAgcmV0dXJuIHNuLktpbGxOb1dhaXQoYWtBY3Rvcik7XHJcbn07XHJcbi8vREVQUkVDSUFURURcclxuLy9CbGVuZHMgZXhpc3Rpbmcgc2tpbiBjb2xvciB3aXRoIHNwZWNpZmllZCBjb2xvci5cclxuLy9UcnVlIC0gaW50ZW5zaXR5IGlzIG1hbnVhbGx5IGNhbGN1bGF0ZWQgdXNpbmcgcGVyY2VudGFnZSAwLTEuMCwgRmFsc2UgLSBhdXRvbWF0aWNhbGx5IGNhbGN1bGF0ZWQgdXNpbmcgc2tpbiB0b25lIGx1bWluYW5jZVxyXG5leHBvcnQgdmFyIE1peENvbG9yV2l0aFNraW5Ub25lID0gZnVuY3Rpb24gKGFrQWN0b3IsIGFrQ29sb3IsIGFiTWFudWFsTW9kZSwgYWZQZXJjZW50YWdlKSB7XHJcbiAgICByZXR1cm4gc24uTWl4Q29sb3JXaXRoU2tpblRvbmUoYWtBY3RvciwgYWtDb2xvciwgYWJNYW51YWxNb2RlLCBhZlBlcmNlbnRhZ2UpO1xyXG59O1xyXG4vL0JhdGNoIGFkZGVkIHNwZWxsIHJlbW92YWwsIGZpbHRlcmVkIGJ5IG9wdGlvbmFsIG1vZCBuYW1lLCBhbmQga2V5d29yZCBhcnJheSAobWF0Y2hpbmcgYW55IGtleXdvcmQgb3IgYWxsIG9mIHRoZW0pXHJcbmV4cG9ydCB2YXIgUmVtb3ZlQWRkZWRTcGVsbHMgPSBmdW5jdGlvbiAoYWtBY3RvciwgbW9kTmFtZSwga2V5d29yZHMsIGFiTWF0Y2hBbGwpIHsgcmV0dXJuIHNuLlJlbW92ZUFkZGVkU3BlbGxzKGFrQWN0b3IsIG1vZE5hbWUsIGtleXdvcmRzLCBhYk1hdGNoQWxsKTsgfTtcclxuLy9SZW1vdmVzIHBlcmtzIGZyb20gdGhlIGFjdG9yYmFzZVxyXG4vL1BlcmsgZWZmZWN0cyBtYXkgbm90IGJlIHJlbW92ZWQgZnJvbSB1bmlxdWUgYWN0b3JzLCBtb3JlIHRlc3RpbmcgcmVxdWlyZWQuXHJcbi8vRnVuY3Rpb24gc2VyaWFsaXplcyBkYXRhIHRvIHNrc2UgY29zYXZlLCBzbyBwZXJrcyBhcmUgYXBwbGllZCBjb3JyZWN0bHkgb24gbG9hZGluZy9yZWxvYWRpbmcgc2F2ZXMuXHJcbmV4cG9ydCB2YXIgUmVtb3ZlQmFzZVBlcmsgPSBmdW5jdGlvbiAoYWtBY3RvciwgYWtQZXJrKSB7IHJldHVybiBzbi5SZW1vdmVCYXNlUGVyayhha0FjdG9yLCBha1BlcmspOyB9O1xyXG4vL1JlbW92ZXMgc3BlbGxzIGZyb20gdGhlIGFjdG9yYmFzZSwgd29ya3Mgb24gcGxheWVyL2xldmVsZWQgYWN0b3JzL3VuaXF1ZSBOUENzLiBGdW5jdGlvbiBzZXJpYWxpemVzIGRhdGEgdG8gc2tzZSBjb3NhdmUsIHNvIHNwZWxscyBhcmUgYXBwbGllZCBjb3JyZWN0bHkgb24gbG9hZGluZy9yZWxvYWRpbmcgc2F2ZXMuXHJcbmV4cG9ydCB2YXIgUmVtb3ZlQmFzZVNwZWxsID0gZnVuY3Rpb24gKGFrQWN0b3IsIGFrU3BlbGwpIHsgcmV0dXJuIHNuLlJlbW92ZUJhc2VTcGVsbChha0FjdG9yLCBha1NwZWxsKTsgfTtcclxuLy9SZXBsYWNlcyBzcGVjaWZpZWQgc291cmNlIHRleHR1cmVzZXQgb24gd29ybiBhcm1vciB3aXRoIHRhcmdldCB0ZXh0dXJlc2V0LiBMYXN0cyBmb3Igb25lIHNpbmdsZSBnYW1pbmcgc2Vzc2lvbi5cclxuLy9JZiB0ZXh0dXJlIHR5cGUgaXMgLTEsIHRoZSBlbnRpcmUgdGV4dHVyZXNldCBpcyByZXBsYWNlZCwgb3RoZXJ3aXNlIHRoZSB0ZXh0dXJlIG1hcCBzcGVjaWZpZWQgYXQgW3RleHR1cmVUeXBlXSBpbmRleCBpcyByZXBsYWNlZCAoZGlmZnVzZSBpcyAwLCBub3JtYWwgaXMgMS4uLilcclxuZXhwb3J0IHZhciBSZXBsYWNlQXJtb3JUZXh0dXJlU2V0ID0gZnVuY3Rpb24gKGFrQWN0b3IsIGFrQXJtb3IsIGFrU291cmNlVFhTVCwgYWtUYXJnZXRUWFNULCBhaVRleHR1cmVUeXBlKSB7XHJcbiAgICBpZiAoYWlUZXh0dXJlVHlwZSA9PT0gdm9pZCAwKSB7IGFpVGV4dHVyZVR5cGUgPSAtMTsgfVxyXG4gICAgcmV0dXJuIHNuLlJlcGxhY2VBcm1vclRleHR1cmVTZXQoYWtBY3RvciwgYWtBcm1vciwgYWtTb3VyY2VUWFNULCBha1RhcmdldFRYU1QsIGFpVGV4dHVyZVR5cGUpO1xyXG59O1xyXG4vL1JlcGxhY2VzIGZhY2UgdGV4dHVyZXNldC4gTGFzdHMgb25lIGdhbWluZyBzZXNzaW9uLiBDYW4gYmUgYXBwbGllZCB0byBub24tdW5pcXVlIGFjdG9ycy5cclxuLy9JZiB0ZXh0dXJlIHR5cGUgaXMgLTEsIHRoZSBlbnRpcmUgdGV4dHVyZXNldCBpcyByZXBsYWNlZCwgb3RoZXJ3aXNlIHRoZSB0ZXh0dXJlIG1hcCBzcGVjaWZpZWQgYXQgW3RleHR1cmVUeXBlXSBpbmRleCBpcyByZXBsYWNlZC4gUmVwbGFjaW5nIHRoZSBlbnRpcmUgdGV4dHVyZXNldCBtYXkgY2F1c2UgYSB2aXNpYmxlIG5lY2tzZWFtLlxyXG5leHBvcnQgdmFyIFJlcGxhY2VGYWNlVGV4dHVyZVNldCA9IGZ1bmN0aW9uIChha0FjdG9yLCBha01hbGVUWFNULCBha0ZlbWFsZVRYU1QsIGFpVGV4dHVyZVR5cGUpIHtcclxuICAgIGlmIChhaVRleHR1cmVUeXBlID09PSB2b2lkIDApIHsgYWlUZXh0dXJlVHlwZSA9IC0xOyB9XHJcbiAgICByZXR1cm4gc24uUmVwbGFjZUZhY2VUZXh0dXJlU2V0KGFrQWN0b3IsIGFrTWFsZVRYU1QsIGFrRmVtYWxlVFhTVCwgYWlUZXh0dXJlVHlwZSk7XHJcbn07XHJcbi8vUmVwbGFjZXMgc2tpbiB0ZXh0dXJlc2V0IGZvciBnaXZlbiBzbG90bWFzayAoaWUuIGJvZHkvaGFuZCkuIExhc3RzIG9uZSBnYW1pbmcgc2Vzc2lvbi4gSGFzIHRvIGJlIHJlYXBwbGllZCB3aGVuIHJlLWVxdWlwcGluZyBhcm1vci5cclxuLy9JZiB0ZXh0dXJlIHR5cGUgaXMgLTEsIHRoZSBlbnRpcmUgdGV4dHVyZXNldCBpcyByZXBsYWNlZCwgb3RoZXJ3aXNlIHRoZSB0ZXh0dXJlIG1hcCBzcGVjaWZpZWQgYXQgW3RleHR1cmVUeXBlXSBpbmRleCBpcyByZXBsYWNlZC5cclxuZXhwb3J0IHZhciBSZXBsYWNlU2tpblRleHR1cmVTZXQgPSBmdW5jdGlvbiAoYWtBY3RvciwgYWtNYWxlVFhTVCwgYWtGZW1hbGVUWFNULCBhaVNsb3RNYXNrLCBhaVRleHR1cmVUeXBlKSB7XHJcbiAgICBpZiAoYWlUZXh0dXJlVHlwZSA9PT0gdm9pZCAwKSB7IGFpVGV4dHVyZVR5cGUgPSAtMTsgfVxyXG4gICAgcmV0dXJuIHNuLlJlcGxhY2VTa2luVGV4dHVyZVNldChha0FjdG9yLCBha01hbGVUWFNULCBha0ZlbWFsZVRYU1QsIGFpU2xvdE1hc2ssIGFpVGV4dHVyZVR5cGUpO1xyXG59O1xyXG4vL0NoZWNrcyBmb3IgTmlFeHRyYURhdGEgbm9kZXMgb24gYWN0b3IgLSBQTzNfVElOVC9QTzNfQUxQSEEvUE8zX1RYU1QvUE8zX1RPR0dMRS9QTzNfU0hBREVSXHJcbi8vU3RvcHMgYWxsIGVmZmVjdCBzaGFkZXJzIGFuZFxyXG4vL1BPM19USU5UIC0gcmVzZXRzIHRpbnQsIHJlYnVpbGRzIGZhY2VnZW4gaWYgYWN0b3IgaXMgcGxheWVyXHJcbi8vUE8zX0FMUEhBIC0gcmVzZXRzIHNraW4gYWxwaGFcclxuLy9QTzNfVFhTVCAtIHJlc2V0cyB0ZXh0dXJlc2V0cyB3aXRoIHRleHR1cmVwYXRocyBjb250YWluaW5nIGZvbGRlck5hbWVcclxuLy9QTzNfVE9HR0xFIC0gdW5oaWRlcyBhbGwgY2hpbGRyZW4gb2Ygbm9kZXMgdGhhdCB3ZXJlIHdyaXR0ZW4gdG8gdGhlIGV4dHJhRGF0YVxyXG4vL1BPM19TSEFERVIgLSByZWNyZWF0ZXMgdGhlIG9yaWdpbmFsIHNoYWRlciB0eXBlIChhcyBjbG9zZSBhcyBwb3NzaWJsZSwgcHJvamVjdGVkVVYgcGFyYW1zIGFyZSBub3QgcmVzdG9yZWQpXHJcbmV4cG9ydCB2YXIgUmVzZXRBY3RvcjNEID0gZnVuY3Rpb24gKGFrQWN0b3IsIGFzRm9sZGVyTmFtZSkgeyByZXR1cm4gc24uUmVzZXRBY3RvcjNEKGFrQWN0b3IsIGFzRm9sZGVyTmFtZSk7IH07XHJcbi8vMC4wIGRpc2FibGVzIHJlZnJhY3Rpb24sIDEuMCBpcyBtYXggcmVmcmFjdGlvblxyXG5leHBvcnQgdmFyIFNldEFjdG9yUmVmcmFjdGlvbiA9IGZ1bmN0aW9uIChha0FjdG9yLCBhZlJlZnJhY3Rpb24pIHsgcmV0dXJuIHNuLlNldEFjdG9yUmVmcmFjdGlvbihha0FjdG9yLCBhZlJlZnJhY3Rpb24pOyB9O1xyXG4vL1NldHMgaGFpciBjb2xvciBvbiBhY3Rvci4gQ2hhbmdlcyBtYXkgcGVyc2lzdCB0aHJvdWdob3V0IGdhbWluZyBzZXNzaW9uLCBldmVuIHdoZW4gcmVsb2FkaW5nIHByZXZpb3VzIHNhdmVzLlxyXG5leHBvcnQgdmFyIFNldEhhaXJDb2xvciA9IGZ1bmN0aW9uIChha0FjdG9yLCBha0NvbG9yKSB7IHJldHVybiBzbi5TZXRIYWlyQ29sb3IoYWtBY3RvciwgYWtDb2xvcik7IH07XHJcbi8vU2V0cyBoZWFkcGFydCdzIG1lc2ggYWxwaGEuIERvZXNuJ3Qgd29yayBmb3Igc29tZSBoYWlyIHR5cGVzIGFuZCBoZXRlcm9jaHJvbWljIGV5ZXNcclxuZXhwb3J0IHZhciBTZXRIZWFkUGFydEFscGhhID0gZnVuY3Rpb24gKGFrQWN0b3IsIGFpUGFydFR5cGUsIGFmQWxwaGEpIHsgcmV0dXJuIHNuLlNldEhlYWRQYXJ0QWxwaGEoYWtBY3RvciwgYWlQYXJ0VHlwZSwgYWZBbHBoYSk7IH07XHJcbi8vU2V0cyB0ZXh0dXJlc2V0IGJlbG9uZ2luZyB0byBoZWFkcGFydCwgaWYgYW55LlxyXG5leHBvcnQgdmFyIFNldEhlYWRQYXJ0VGV4dHVyZVNldCA9IGZ1bmN0aW9uIChha0FjdG9yLCBoZWFkcGFydFRYU1QsIGFpVHlwZSkgeyByZXR1cm4gc24uU2V0SGVhZFBhcnRUZXh0dXJlU2V0KGFrQWN0b3IsIGhlYWRwYXJ0VFhTVCwgYWlUeXBlKTsgfTtcclxuLy9TZXRzIHZlbG9jaXR5IG9mIHRoZSBhY3Rvci4gTWF5IG5vdCB0YWtlIHBsYWNlIGltbWVkaWF0ZWx5LlxyXG5leHBvcnQgdmFyIFNldExpbmVhclZlbG9jaXR5ID0gZnVuY3Rpb24gKGFrQWN0b3IsIGFmWCwgYWZZLCBhZlopIHsgcmV0dXJuIHNuLlNldExpbmVhclZlbG9jaXR5KGFrQWN0b3IsIGFmWCwgYWZZLCBhZlopOyB9O1xyXG4vL1NldHMgbG9jYWwgZ3Jhdml0eSBvZiB0aGUgYWN0b3IuIE5lZ2F0aXZlIHZhbHVlcyB3aWxsIGNhdXNlIHRoZW0gdG8gZmx5LiBNYXkgbm90IHRha2UgcGxhY2UgaW1tZWRpYXRlbHkuXHJcbmV4cG9ydCB2YXIgU2V0TG9jYWxHcmF2aXR5QWN0b3IgPSBmdW5jdGlvbiAoYWtBY3RvciwgYWZWYWx1ZSwgYWJEaXNhYmxlR3Jhdml0eU9uR3JvdW5kKSB7IHJldHVybiBzbi5TZXRMb2NhbEdyYXZpdHlBY3Rvcihha0FjdG9yLCBhZlZhbHVlLCBhYkRpc2FibGVHcmF2aXR5T25Hcm91bmQpOyB9O1xyXG4vL1NldHMgYWxwaGEgb24gZmFjZSwgYmFzZSBza2luIGZvcm0gYW5kIGFybW9yIG1lc2hlcyB3aXRoIHZpc2libGUgc2tpbi4gSGFzIHRvIGJlIHJlLWFwcGxpZWQgd2hlbiBhcm1vciBpcyB1bi9yZS1lcXVpcHBlZC5cclxuZXhwb3J0IHZhciBTZXRTa2luQWxwaGEgPSBmdW5jdGlvbiAoYWtBY3RvciwgYWZBbHBoYSkgeyByZXR1cm4gc24uU2V0U2tpbkFscGhhKGFrQWN0b3IsIGFmQWxwaGEpOyB9O1xyXG4vL1NldHMgc2tpbiBjb2xvciAoZmFjZSBhbmQgYm9keSkuIEhhcyB0byBiZSByZS1hcHBsaWVkIHdoZW4gYXJtb3IgaXMgdW4vcmUtZXF1aXBwZWQuXHJcbmV4cG9ydCB2YXIgU2V0U2tpbkNvbG9yID0gZnVuY3Rpb24gKGFrQWN0b3IsIGFrQ29sb3IpIHsgcmV0dXJuIHNuLlNldFNraW5Db2xvcihha0FjdG9yLCBha0NvbG9yKTsgfTtcclxuLy9TZXRzIHRoZSBmbGFnIHVzZWQgYnkgdGhlIGdhbWUgdG8gZGV0ZXJtaW5lIHNvdWwgdHJhcHBlZCBOUENzXHJcbmV4cG9ydCB2YXIgU2V0U291bFRyYXBwZWQgPSBmdW5jdGlvbiAoYWtBY3RvciwgYWJUcmFwcGVkKSB7IHJldHVybiBzbi5TZXRTb3VsVHJhcHBlZChha0FjdG9yLCBhYlRyYXBwZWQpOyB9O1xyXG4vL1RvZ2dsZXMgYW55IGhhaXIgd2lncyAoZ2VvbWV0cnkgd2l0aCBoYWlyIHNoYWRlcikgZm91bmQgb24gc2xvdHMgSGFpci9Mb25nSGFpclxyXG5leHBvcnQgdmFyIFRvZ2dsZUhhaXJXaWdzID0gZnVuY3Rpb24gKGFrQWN0b3IsIGFiRGlzYWJsZSkgeyByZXR1cm4gc24uVG9nZ2xlSGFpcldpZ3MoYWtBY3RvciwgYWJEaXNhYmxlKTsgfTtcclxuLyoqIEFSTU9SIFRZUEVcclxuICAgICAgICBMaWdodCA9IDBcclxuICAgICAgICBIZWF2eSA9IDFcclxuICAgICAgICBDbG90aGluZyA9IDIgKi9cclxuLy9VbmVxdWlwcyBhbGwgYXJtb3Igb2YgdHlwZSwgb3B0aW9uYWxseSBza2lwcGluZyBiaXBlZCBzbG90cy5cclxuZXhwb3J0IHZhciBVbmVxdWlwQWxsT2ZUeXBlID0gZnVuY3Rpb24gKGFrQWN0b3IsIGFmQXJtb3JUeXBlLCBhaVNsb3RzVG9Ta2lwKSB7IHJldHVybiBzbi5VbmVxdWlwQWxsT2ZUeXBlKGFrQWN0b3IsIGFmQXJtb3JUeXBlLCBhaVNsb3RzVG9Ta2lwKTsgfTtcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vQUNUT1JCQVNFXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLy0tLS0tLS1cclxuLy9HRVRURVJTXHJcbi8vLS0tLS0tLVxyXG4vL0dldHMgbnBjIGRlYXRoIGl0ZW1cclxuZXhwb3J0IHZhciBHZXREZWF0aEl0ZW0gPSBmdW5jdGlvbiAoYWtCYXNlKSB7IHJldHVybiBzbi5HZXREZWF0aEl0ZW0oYWtCYXNlKTsgfTtcclxuLy9HZXQgYWN0b3JiYXNlIHBlcmsgYXQgbnRoIGluZGV4XHJcbmV4cG9ydCB2YXIgR2V0TnRoUGVyayA9IGZ1bmN0aW9uIChha0Jhc2UsIGFpSW5kZXgpIHsgcmV0dXJuIHNuLkdldE50aFBlcmsoYWtCYXNlLCBhaUluZGV4KTsgfTtcclxuLy9HZXQgdG90YWwgYWN0b3JiYXNlIHBlcmsgY291bnRcclxuZXhwb3J0IHZhciBHZXRQZXJrQ291bnQgPSBmdW5jdGlvbiAoYWtCYXNlKSB7XHJcbiAgICByZXR1cm4gc24uR2V0UGVya0NvdW50KGFrQmFzZSk7XHJcbn07XHJcbi8vLS0tLS0tLVxyXG4vL1NFVFRFUlNcclxuLy8tLS0tLS0tXHJcbi8vU2V0cyBucGMgZGVhdGggaXRlbS4gQ2FuIGJlIE5vbmUuXHJcbmV4cG9ydCB2YXIgU2V0RGVhdGhJdGVtID0gZnVuY3Rpb24gKGFrQmFzZSwgYWtMZXZlbGVkSXRlbSkgeyByZXR1cm4gc24uU2V0RGVhdGhJdGVtKGFrQmFzZSwgYWtMZXZlbGVkSXRlbSk7IH07XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vL0FMSUFTXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vL3JldHVybnMgd2hldGhlciB0aGUgZm9ybSBoYXMgc2NyaXB0IGF0dGFjaGVkLiBJZiBzY3JpcHROYW1lIGlzIGVtcHR5LCBpdCB3aWxsIHJldHVybiBpZiB0aGUgYWxpYXMgaGFzIGFueSBub24tYmFzZSBzY3JpcHRzIGF0dGFjaGVkXHJcbmV4cG9ydCB2YXIgSXNTY3JpcHRBdHRhY2hlZFRvQWxpYXMgPSBmdW5jdGlvbiAoYWtBbGlhcywgYXNTY3JpcHROYW1lKSB7IHJldHVybiBzbi5Jc1NjcmlwdEF0dGFjaGVkVG9BbGlhcyhha0FsaWFzLCBhc1NjcmlwdE5hbWUpOyB9O1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy9BUk1PUi9BRERPTlNcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vR2V0cyBhcm1vciBhZGRvbidzIGZvb3RzdGVwIHNldFxyXG5leHBvcnQgdmFyIEdldEZvb3RzdGVwU2V0ID0gZnVuY3Rpb24gKGFrQXJtYSkgeyByZXR1cm4gc24uR2V0Rm9vdHN0ZXBTZXQoYWtBcm1hKTsgfTtcclxuLy9TZXRzIGFybW9yIGFkZG9uJ3MgZm9vdHN0ZXAgc2V0XHJcbmV4cG9ydCB2YXIgU2V0Rm9vdHN0ZXBTZXQgPSBmdW5jdGlvbiAoYWtBcm1hLCBha0Zvb3RzdGVwU2V0KSB7IHJldHVybiBzbi5TZXRGb290c3RlcFNldChha0FybWEsIGFrRm9vdHN0ZXBTZXQpOyB9O1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy9BUlJBWVNcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vQWRkcyBhY3RvciB0byBhcnJheS4gTW9kaWZpZXMgYXJyYXkgZGlyZWN0bHksIGl0IG11c3QgYmUgaW5pdGlhbGl6ZWQhXHJcbmV4cG9ydCB2YXIgQWRkQWN0b3JUb0FycmF5ID0gZnVuY3Rpb24gKGFrQWN0b3IsIGFjdG9yQXJyYXkpIHsgcmV0dXJuIHNuLkFkZEFjdG9yVG9BcnJheShha0FjdG9yLCBhY3RvckFycmF5KTsgfTtcclxuLy9BZGRzIHN0cmluZyB0byBhcnJheS4gTW9kaWZpZXMgYXJyYXkgZGlyZWN0bHksIGl0IG11c3QgYmUgaW5pdGlhbGl6ZWQhXHJcbmV4cG9ydCB2YXIgQWRkU3RyaW5nVG9BcnJheSA9IGZ1bmN0aW9uIChhc1N0cmluZywgYXNTdHJpbmdzKSB7IHJldHVybiBzbi5BZGRTdHJpbmdUb0FycmF5KGFzU3RyaW5nLCBhc1N0cmluZ3MpOyB9O1xyXG4vL0NvdW50cyBob3cgbWFueSBpbnN0YW5jZXMgb2YgYSBzdHJpbmcgYXJlIGluIGFuIGFycmF5LlxyXG5leHBvcnQgdmFyIEFycmF5U3RyaW5nQ291bnQgPSBmdW5jdGlvbiAoYXNTdHJpbmcsIGFzU3RyaW5ncykgeyByZXR1cm4gc24uQXJyYXlTdHJpbmdDb3VudChhc1N0cmluZywgYXNTdHJpbmdzKTsgfTtcclxuLy9BbHBoYWJldGljYWxseSBzb3J0cyBhbmQgcmV0dXJucyB0cnVuY2F0ZWQgc3JpbmcgYXJyYXkuXHJcbmV4cG9ydCB2YXIgU29ydEFycmF5U3RyaW5nID0gZnVuY3Rpb24gKGFzU3RyaW5ncykge1xyXG4gICAgcmV0dXJuIHNuLlNvcnRBcnJheVN0cmluZyhhc1N0cmluZ3MpO1xyXG59O1xyXG4vL0dldHMgbmFtZSBhcnJheSBvZiBhbGwgdGhlIGFjdG9ycyBpbiB0aGUgYXJlYSwgc29ydGVkIGFscGhhYmV0aWNhbGx5LiBHZW5lcmljIGFjdG9ycyBhcmUgbWVyZ2VkIChpZS4gMyBXaGl0ZXJ1biBHdWFyZChzKSkuIEZpbHRlciBrZXl3b3JkIG9wdGlvbmFsXHJcbmV4cG9ydCB2YXIgR2V0U29ydGVkQWN0b3JOYW1lcyA9IGZ1bmN0aW9uIChha0tleXdvcmQsIGFzUGx1cmFsLCBhYkludmVydEtleXdvcmQpIHtcclxuICAgIGlmIChhc1BsdXJhbCA9PT0gdm9pZCAwKSB7IGFzUGx1cmFsID0gXCIocylcIjsgfVxyXG4gICAgcmV0dXJuIHNuLkdldFNvcnRlZEFjdG9yTmFtZXMoYWtLZXl3b3JkLCBhc1BsdXJhbCwgYWJJbnZlcnRLZXl3b3JkKTtcclxufTtcclxuLy9HZXRzIG5hbWUgYXJyYXkgb2YgTlBDcywgc29ydGVkIGFscGhhYmV0aWNhbGx5LiBHZW5lcmljIGFjdG9ycyBhcmUgbWVyZ2VkIChpZS4gMyBXaGl0ZXJ1biBHdWFyZChzKSkuXHJcbmV4cG9ydCB2YXIgR2V0U29ydGVkTlBDTmFtZXMgPSBmdW5jdGlvbiAoYWlBY3RvckJhc2VzLCBhc1BsdXJhbCkge1xyXG4gICAgaWYgKGFzUGx1cmFsID09PSB2b2lkIDApIHsgYXNQbHVyYWwgPSBcIihzKVwiOyB9XHJcbiAgICByZXR1cm4gc24uR2V0U29ydGVkTlBDTmFtZXMoYWlBY3RvckJhc2VzLCBhc1BsdXJhbCk7XHJcbn07XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vL0JPT0tcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vQ2xlYXJzIHJlYWQgZmxhZyAoYW5kIHdyaXRlcyBpdCB0byB0aGUgc2F2ZSkuXHJcbmV4cG9ydCB2YXIgQ2xlYXJSZWFkRmxhZyA9IGZ1bmN0aW9uIChha0Jvb2spIHtcclxuICAgIHJldHVybiBzbi5DbGVhclJlYWRGbGFnKGFrQm9vayk7XHJcbn07XHJcbi8vU2V0cyByZWFkIGZsYWcgKGFuZCB3cml0ZXMgaXQgdG8gdGhlIHNhdmUpLlxyXG5leHBvcnQgdmFyIFNldFJlYWRGbGFnID0gZnVuY3Rpb24gKGFrQm9vaykge1xyXG4gICAgcmV0dXJuIHNuLlNldFJlYWRGbGFnKGFrQm9vayk7XHJcbn07XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vL0NFTExcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vR2V0cyBjZWxsIG5vcnRoIHJvdGF0aW9uL3dvcmxkc3BhY2Ugbm9ydGggcm90YXRpb24gZm9yIGV4dGVyaW9yIGNlbGxzLiBSb3RhdGlvbiBpcyBpbiBkZWdyZWVzLlxyXG5leHBvcnQgdmFyIEdldENlbGxOb3J0aFJvdGF0aW9uID0gZnVuY3Rpb24gKGFrQ2VsbCkge1xyXG4gICAgcmV0dXJuIHNuLkdldENlbGxOb3J0aFJvdGF0aW9uKGFrQ2VsbCk7XHJcbn07XHJcbi8vR2V0cyBjZWxsIGxpZ2h0aW5nIHRlbXBsYXRlXHJcbmV4cG9ydCB2YXIgR2V0TGlnaHRpbmdUZW1wbGF0ZSA9IGZ1bmN0aW9uIChha0NlbGwpIHsgcmV0dXJuIHNuLkdldExpZ2h0aW5nVGVtcGxhdGUoYWtDZWxsKTsgfTtcclxuLy9TZXRzIGNlbGwgbGlnaHRpbmcgdGVtcGxhdGVcclxuZXhwb3J0IHZhciBTZXRMaWdodGluZ1RlbXBsYXRlID0gZnVuY3Rpb24gKGFrQ2VsbCwgYWtMaWdodGluZ1RlbXBsYXRlKSB7IHJldHVybiBzbi5TZXRMaWdodGluZ1RlbXBsYXRlKGFrQ2VsbCwgYWtMaWdodGluZ1RlbXBsYXRlKTsgfTtcclxuLy9TZXRzIGNlbGwgbm9ydGggcm90YXRpb24uXHJcbmV4cG9ydCB2YXIgU2V0Q2VsbE5vcnRoUm90YXRpb24gPSBmdW5jdGlvbiAoYWtDZWxsLCBhZkFuZ2xlKSB7IHJldHVybiBzbi5TZXRDZWxsTm9ydGhSb3RhdGlvbihha0NlbGwsIGFmQW5nbGUpOyB9O1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy9ERUJVR1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy9BZGRzIGFsbCBmdW5jdGlvbmFsIHNwZWxscyAoaWUuIHNwZWxscyB0aGF0IGNhbiBiZSBsZWFybmVkIGZyb20gc3BlbGwgYm9va3MsIGFuZCBub3QgYWxsIDIwMDArIHNwZWxscyBsaWtlIHBzYilcclxuZXhwb3J0IHZhciBHaXZlUGxheWVyU3BlbGxCb29rID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gc24uR2l2ZVBsYXllclNwZWxsQm9vaygpOyB9O1xyXG4vL0R1bXBzIGN1cnJlbnQgYW5pbWF0aW9uIHZhcmlhYmxlcyB0byBwbzNfcGFweXJ1c2V4dGVuZGVyNjQubG9nXHJcbmV4cG9ydCB2YXIgRHVtcEFuaW1hdGlvblZhcmlhYmxlcyA9IGZ1bmN0aW9uIChha0FjdG9yLCBhc0FuaW1hdGlvblZhclByZWZpeCkgeyByZXR1cm4gc24uRHVtcEFuaW1hdGlvblZhcmlhYmxlcyhha0FjdG9yLCBhc0FuaW1hdGlvblZhclByZWZpeCk7IH07XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vL0RFVEVDVElPTlxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy9SZXR1cm5zIHdoZXRoZXIgb3RoZXIgTlBDcyBjYW4gZGV0ZWN0IHRoaXMgYWN0b3IuXHJcbi8vMCAtICBjYW4ndCBiZSBkZXRlY3RlZCwgMSAtIG5vcm1hbCwgMiAtICB3aWxsIGFsd2F5cyBiZSBkZXRlY3RlZFxyXG5leHBvcnQgdmFyIENhbkFjdG9yQmVEZXRlY3RlZCA9IGZ1bmN0aW9uIChha0FjdG9yKSB7XHJcbiAgICByZXR1cm4gc24uQ2FuQWN0b3JCZURldGVjdGVkKGFrQWN0b3IpO1xyXG59O1xyXG4vL1JldHVybnMgd2hldGhlciB0aGlzIGFjdG9yIGNhbiBkZXRlY3Qgb3RoZXIgTlBDcy5cclxuLy8wIC0gY2FuIG5ldmVyIGRldGVjdCwgMS0gbm9ybWFsLCAyIC0gd2lsbCBhbHdheXMgZGV0ZWN0IG90aGVyc1xyXG5leHBvcnQgdmFyIENhbkFjdG9yRGV0ZWN0ID0gZnVuY3Rpb24gKGFrQWN0b3IpIHtcclxuICAgIHJldHVybiBzbi5DYW5BY3RvckRldGVjdChha0FjdG9yKTtcclxufTtcclxuLy9Gb3JjZSB0aGlzIGFjdG9yIHRvIGJlIGRldGVjdGVkIGJ5IG90aGVyIE5QQ3MgKGFjdG9yIGlzIGFsd2F5cyB2aXNpYmxlKS5cclxuZXhwb3J0IHZhciBGb3JjZUFjdG9yRGV0ZWN0aW9uID0gZnVuY3Rpb24gKGFrQWN0b3IpIHtcclxuICAgIHJldHVybiBzbi5Gb3JjZUFjdG9yRGV0ZWN0aW9uKGFrQWN0b3IpO1xyXG59O1xyXG4vL0ZvcmNlIHRoaXMgYWN0b3IgdG8gYWx3YXlzIGRldGVjdCB0aGVpciB0YXJnZXRzXHJcbmV4cG9ydCB2YXIgRm9yY2VBY3RvckRldGVjdGluZyA9IGZ1bmN0aW9uIChha0FjdG9yKSB7XHJcbiAgICByZXR1cm4gc24uRm9yY2VBY3RvckRldGVjdGluZyhha0FjdG9yKTtcclxufTtcclxuLy9SZXR1cm5zIHdoZXRoZXIgdGhpcyBhY3RvciBpcyBjdXJyZW50bHkgZGV0ZWN0ZWQgYnkgb3RoZXIgTlBDc1xyXG5leHBvcnQgdmFyIElzRGV0ZWN0ZWRCeUFueW9uZSA9IGZ1bmN0aW9uIChha0FjdG9yKSB7IHJldHVybiBzbi5Jc0RldGVjdGVkQnlBbnlvbmUoYWtBY3Rvcik7IH07XHJcbi8vUHJldmVudCB0aGlzIGFjdG9yIGZyb20gYmVpbmcgZGV0ZWN0ZWQgYnkgb3RoZXIgTlBDcyAoYWN0b3IgaXMgaGlkZGVuKS5cclxuZXhwb3J0IHZhciBQcmV2ZW50QWN0b3JEZXRlY3Rpb24gPSBmdW5jdGlvbiAoYWtBY3RvcikgeyByZXR1cm4gc24uUHJldmVudEFjdG9yRGV0ZWN0aW9uKGFrQWN0b3IpOyB9O1xyXG4vL1ByZXZlbnQgdGhpcyBhY3RvciBmcm9tIGRldGVjdGluZyBvdGhlciBOUENzIChhY3RvciBpcyBibGluZClcclxuZXhwb3J0IHZhciBQcmV2ZW50QWN0b3JEZXRlY3RpbmcgPSBmdW5jdGlvbiAoYWtBY3RvcikgeyByZXR1cm4gc24uUHJldmVudEFjdG9yRGV0ZWN0aW5nKGFrQWN0b3IpOyB9O1xyXG4vL1Jlc2V0cyBkZXRlY3Rpb24gc3RhdGVcclxuZXhwb3J0IHZhciBSZXNldEFjdG9yRGV0ZWN0aW9uID0gZnVuY3Rpb24gKGFrQWN0b3IpIHtcclxuICAgIHJldHVybiBzbi5SZXNldEFjdG9yRGV0ZWN0aW9uKGFrQWN0b3IpO1xyXG59O1xyXG4vL1Jlc2V0cyBkZXRlY3Rpbmcgc3RhdGVcclxuZXhwb3J0IHZhciBSZXNldEFjdG9yRGV0ZWN0aW5nID0gZnVuY3Rpb24gKGFrQWN0b3IpIHtcclxuICAgIHJldHVybiBzbi5SZXNldEFjdG9yRGV0ZWN0aW5nKGFrQWN0b3IpO1xyXG59O1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy9FRkZFQ1RTSEFERVJcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vLS0tLS0tLVxyXG4vL0dFVFRFUlNcclxuLy8tLS0tLS0tXHJcbi8qKiBFRkZFQ1QgU0hBREVSIEZMQUdTXHJcbiAgICAgICAga05vTWVtYnJhbmVTaGFkZXIgPSAweDAwMDAwMDAxXHJcbiAgICAgICAga01lbWJyYW5lR3JleXNjYWxlQ29sb3IgPSAweDAwMDAwMDAyXHJcbiAgICAgICAga01lbWJyYW5lR3JleXNjYWxlQWxwaGEgPSAweDAwMDAwMDA0XHJcbiAgICAgICAga05vUGFydGljbGVTaGFkZXIgPSAweDAwMDAwMDA4XHJcbiAgICAgICAga0VkZ2VFZmZlY3RJbnZlcnNlID0gMHgwMDAwMDAxMFxyXG4gICAgICAgIGtBZmZlY3RTa2luT25seSA9IDB4MDAwMDAwMjBcclxuICAgICAgICBrSWdub3JlQWxwaGEgPSAweDAwMDAwMDQwXHJcbiAgICAgICAga1Byb2plY3RVViA9IDB4MDAwMDAwODBcclxuICAgICAgICBrSWdub3JlQmFzZUdlb21ldHJ5QWxwaGEgPSAweDAwMDAwMTAwXHJcbiAgICAgICAga0xpZ2h0aW5nID0gMHgwMDAwMDIwMFxyXG4gICAgICAgIGtOb1dlYXBvbnMgPSAweDAwMDAwNDAwXHJcbiAgICAgICAga1BhcnRpY2xlQW5pbWF0ZWQgPSAweDAwMDA4MDAwXHJcbiAgICAgICAga1BhcnRpY2xlR3JleXNjYWxlQ29sb3IgPSAweDAwMDEwMDAwXHJcbiAgICAgICAga1BhcnRpY2xlR3JleXNjYWxlQWxwaGEgPSAweDAwMDIwMDAwXHJcbiAgICAgICAga1VzZUJsb29kR2VvbWV0cnkgPSAweDAxMDAwMDAwICovXHJcbi8vR2V0cyBhZGRvbiBtb2RlbHNcclxuZXhwb3J0IHZhciBHZXRBZGRvbk1vZGVscyA9IGZ1bmN0aW9uIChha0VmZmVjdFNoYWRlcikgeyByZXR1cm4gc24uR2V0QWRkb25Nb2RlbHMoYWtFZmZlY3RTaGFkZXIpOyB9O1xyXG4vL1JldHVybnMgdGhlIHRvdGFsIG51bWJlciBvZiBlZmZlY3Qgc2hhZGVycyBwcmVzZW50L3ByZXNlbnQgYW5kIGFjdGl2ZSAob24gb2JqZWN0cykgd2l0aGluIHRoZSBsb2FkZWQgYXJlYS5cclxuZXhwb3J0IHZhciBHZXRFZmZlY3RTaGFkZXJUb3RhbENvdW50ID0gZnVuY3Rpb24gKGFrRWZmZWN0U2hhZGVyLCBhYkFjdGl2ZSkgeyByZXR1cm4gc24uR2V0RWZmZWN0U2hhZGVyVG90YWxDb3VudChha0VmZmVjdFNoYWRlciwgYWJBY3RpdmUpOyB9O1xyXG4vL0lzIGVmZmVjdCBzaGFkZXIgZmxhZyBzZXQ/XHJcbmV4cG9ydCB2YXIgSXNFZmZlY3RTaGFkZXJGbGFnU2V0ID0gZnVuY3Rpb24gKGFrRWZmZWN0U2hhZGVyLCBhaUZsYWcpIHsgcmV0dXJuIHNuLklzRWZmZWN0U2hhZGVyRmxhZ1NldChha0VmZmVjdFNoYWRlciwgYWlGbGFnKTsgfTtcclxuLy9HZXQgZmlsbCB0ZXh0dXJlXHJcbmV4cG9ydCB2YXIgR2V0TWVtYnJhbmVGaWxsVGV4dHVyZSA9IGZ1bmN0aW9uIChha0VmZmVjdFNoYWRlcikgeyByZXR1cm4gc24uR2V0TWVtYnJhbmVGaWxsVGV4dHVyZShha0VmZmVjdFNoYWRlcik7IH07XHJcbi8vR2V0IGhvbGVzIHRleHR1cmVcclxuZXhwb3J0IHZhciBHZXRNZW1icmFuZUhvbGVzVGV4dHVyZSA9IGZ1bmN0aW9uIChha0VmZmVjdFNoYWRlcikgeyByZXR1cm4gc24uR2V0TWVtYnJhbmVIb2xlc1RleHR1cmUoYWtFZmZlY3RTaGFkZXIpOyB9O1xyXG4vL0dldCBtZW1icmFuZSBwYWxldHRlIHRleHR1cmVcclxuZXhwb3J0IHZhciBHZXRNZW1icmFuZVBhbGV0dGVUZXh0dXJlID0gZnVuY3Rpb24gKGFrRWZmZWN0U2hhZGVyKSB7IHJldHVybiBzbi5HZXRNZW1icmFuZVBhbGV0dGVUZXh0dXJlKGFrRWZmZWN0U2hhZGVyKTsgfTtcclxuLy9HZXRzIGZ1bGwgcGFydGljbGUgY291bnQuXHJcbmV4cG9ydCB2YXIgR2V0UGFydGljbGVGdWxsQ291bnQgPSBmdW5jdGlvbiAoYWtFZmZlY3RTaGFkZXIpIHsgcmV0dXJuIHNuLkdldFBhcnRpY2xlRnVsbENvdW50KGFrRWZmZWN0U2hhZGVyKTsgfTtcclxuLy9HZXQgcGFydGljbGUgcGFsZXR0ZSB0ZXh0dXJlXHJcbmV4cG9ydCB2YXIgR2V0UGFydGljbGVQYWxldHRlVGV4dHVyZSA9IGZ1bmN0aW9uIChha0VmZmVjdFNoYWRlcikgeyByZXR1cm4gc24uR2V0UGFydGljbGVQYWxldHRlVGV4dHVyZShha0VmZmVjdFNoYWRlcik7IH07XHJcbi8vR2V0IHBhcnRpY2xlIHNoYWRlciB0ZXh0dXJlXHJcbmV4cG9ydCB2YXIgR2V0UGFydGljbGVTaGFkZXJUZXh0dXJlID0gZnVuY3Rpb24gKGFrRWZmZWN0U2hhZGVyKSB7IHJldHVybiBzbi5HZXRQYXJ0aWNsZVNoYWRlclRleHR1cmUoYWtFZmZlY3RTaGFkZXIpOyB9O1xyXG4vL0dldHMgcGVyc2lzdGVudCBjb3VudC5cclxuZXhwb3J0IHZhciBHZXRQYXJ0aWNsZVBlcnNpc3RlbnRDb3VudCA9IGZ1bmN0aW9uIChha0VmZmVjdFNoYWRlcikgeyByZXR1cm4gc24uR2V0UGFydGljbGVQZXJzaXN0ZW50Q291bnQoYWtFZmZlY3RTaGFkZXIpOyB9O1xyXG4vLy0tLS0tLS1cclxuLy9TRVRURVJTXHJcbi8vLS0tLS0tLVxyXG4vL0NsZWFycyBlZmZlY3Qgc2hhZGVyIGZsYWcuXHJcbmV4cG9ydCB2YXIgQ2xlYXJFZmZlY3RTaGFkZXJGbGFnID0gZnVuY3Rpb24gKGFrRWZmZWN0U2hhZGVyLCBhaUZsYWcpIHsgcmV0dXJuIHNuLkNsZWFyRWZmZWN0U2hhZGVyRmxhZyhha0VmZmVjdFNoYWRlciwgYWlGbGFnKTsgfTtcclxuLy9HZXRzIGFkZG9uIG1vZGVsc1xyXG5leHBvcnQgdmFyIFNldEFkZG9uTW9kZWxzID0gZnVuY3Rpb24gKGFrRWZmZWN0U2hhZGVyLCBha0RlYnJpcykgeyByZXR1cm4gc24uU2V0QWRkb25Nb2RlbHMoYWtFZmZlY3RTaGFkZXIsIGFrRGVicmlzKTsgfTtcclxuLy9TZXQgZWZmZWN0IHNoYWRlciBmbGFnLlxyXG5leHBvcnQgdmFyIFNldEVmZmVjdFNoYWRlckZsYWcgPSBmdW5jdGlvbiAoYWtFZmZlY3RTaGFkZXIsIGFpRmxhZykgeyByZXR1cm4gc24uU2V0RWZmZWN0U2hhZGVyRmxhZyhha0VmZmVjdFNoYWRlciwgYWlGbGFnKTsgfTtcclxuLy9TZXQgbWVtYnJhbmUgY29sb3Iga2V5XHJcbmV4cG9ydCB2YXIgU2V0TWVtYnJhbmVDb2xvcktleURhdGEgPSBmdW5jdGlvbiAoYWtFZmZlY3RTaGFkZXIsIGFpQ29sb3JLZXksIGFpUkdCLCBhZkFscGhhLCBhZlRpbWUpIHtcclxuICAgIHJldHVybiBzbi5TZXRNZW1icmFuZUNvbG9yS2V5RGF0YShha0VmZmVjdFNoYWRlciwgYWlDb2xvcktleSwgYWlSR0IsIGFmQWxwaGEsIGFmVGltZSk7XHJcbn07XHJcbi8vU2V0IG1lbWJyYW5lIGZpbGwgdGV4dHVyZVxyXG5leHBvcnQgdmFyIFNldE1lbWJyYW5lRmlsbFRleHR1cmUgPSBmdW5jdGlvbiAoYWtFZmZlY3RTaGFkZXIsIGFzVGV4dHVyZU5hbWUpIHsgcmV0dXJuIHNuLlNldE1lbWJyYW5lRmlsbFRleHR1cmUoYWtFZmZlY3RTaGFkZXIsIGFzVGV4dHVyZU5hbWUpOyB9O1xyXG4vL1NldCBtZW1icmFuZSBob2xlcyB0ZXh0dXJlXHJcbmV4cG9ydCB2YXIgU2V0TWVtYnJhbmVIb2xlc1RleHR1cmUgPSBmdW5jdGlvbiAoYWtFZmZlY3RTaGFkZXIsIGFzVGV4dHVyZU5hbWUpIHsgcmV0dXJuIHNuLlNldE1lbWJyYW5lSG9sZXNUZXh0dXJlKGFrRWZmZWN0U2hhZGVyLCBhc1RleHR1cmVOYW1lKTsgfTtcclxuLy9TZXQgbWVtYnJhbmUgcGFsZXR0ZSB0ZXh0dXJlXHJcbmV4cG9ydCB2YXIgU2V0TWVtYnJhbmVQYWxldHRlVGV4dHVyZSA9IGZ1bmN0aW9uIChha0VmZmVjdFNoYWRlciwgYXNUZXh0dXJlTmFtZSkgeyByZXR1cm4gc24uU2V0TWVtYnJhbmVQYWxldHRlVGV4dHVyZShha0VmZmVjdFNoYWRlciwgYXNUZXh0dXJlTmFtZSk7IH07XHJcbi8vU2V0IHBhcnRpY2xlIGNvbG9yIGtleVxyXG5leHBvcnQgdmFyIFNldFBhcnRpY2xlQ29sb3JLZXlEYXRhID0gZnVuY3Rpb24gKGFrRWZmZWN0U2hhZGVyLCBhaUNvbG9yS2V5LCBhaVJHQiwgYWZBbHBoYSwgYWZUaW1lKSB7XHJcbiAgICByZXR1cm4gc24uU2V0UGFydGljbGVDb2xvcktleURhdGEoYWtFZmZlY3RTaGFkZXIsIGFpQ29sb3JLZXksIGFpUkdCLCBhZkFscGhhLCBhZlRpbWUpO1xyXG59O1xyXG4vL1NldHMgZnVsbCBwYXJ0aWNsZSBjb3VudC5cclxuZXhwb3J0IHZhciBTZXRQYXJ0aWNsZUZ1bGxDb3VudCA9IGZ1bmN0aW9uIChha0VmZmVjdFNoYWRlciwgYWZQYXJ0aWNsZUNvdW50KSB7IHJldHVybiBzbi5TZXRQYXJ0aWNsZUZ1bGxDb3VudChha0VmZmVjdFNoYWRlciwgYWZQYXJ0aWNsZUNvdW50KTsgfTtcclxuLy9TZXQgcGFydGljbGUgc2hhZGVyIHRleHR1cmVcclxuZXhwb3J0IHZhciBTZXRQYXJ0aWNsZVBhbGV0dGVUZXh0dXJlID0gZnVuY3Rpb24gKGFrRWZmZWN0U2hhZGVyLCBhc1RleHR1cmVOYW1lKSB7IHJldHVybiBzbi5TZXRQYXJ0aWNsZVBhbGV0dGVUZXh0dXJlKGFrRWZmZWN0U2hhZGVyLCBhc1RleHR1cmVOYW1lKTsgfTtcclxuLy9TZXRzIHBlcnNpc3RlbnQgcGFydGljbGUgY291bnQuXHJcbmV4cG9ydCB2YXIgU2V0UGFydGljbGVQZXJzaXN0ZW50Q291bnQgPSBmdW5jdGlvbiAoYWtFZmZlY3RTaGFkZXIsIGFmUGFydGljbGVDb3VudCkgeyByZXR1cm4gc24uU2V0UGFydGljbGVQZXJzaXN0ZW50Q291bnQoYWtFZmZlY3RTaGFkZXIsIGFmUGFydGljbGVDb3VudCk7IH07XHJcbi8vU2V0IHBhcnRpY2xlIHNoYWRlciB0ZXh0dXJlXHJcbmV4cG9ydCB2YXIgU2V0UGFydGljbGVTaGFkZXJUZXh0dXJlID0gZnVuY3Rpb24gKGFrRWZmZWN0U2hhZGVyLCBhc1RleHR1cmVOYW1lKSB7IHJldHVybiBzbi5TZXRQYXJ0aWNsZVNoYWRlclRleHR1cmUoYWtFZmZlY3RTaGFkZXIsIGFzVGV4dHVyZU5hbWUpOyB9O1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vRU5DSEFOVE1FTlQgLSBzZWUgU1BFTExcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLy0tLS0tLS0tXHJcbi8vR0VUVEVSU1xyXG4vLy0tLS0tLS0tXHJcbi8qKiBFTkNIQU5UTUVOVCBUWVBFU1xyXG4gICAgICAgIEVuY2hhbnRtZW50ID0gNixcclxuICAgICAgICBTdGFmZkVuY2hhbnRtZW50ID0gMTIgKi9cclxuLy9SZXR1cm5zIGVuY2hhbnRtZW50IHR5cGUuIC0xIGlmICBpcyBOb25lXHJcbmV4cG9ydCB2YXIgR2V0RW5jaGFudG1lbnRUeXBlID0gZnVuY3Rpb24gKGFrRW5jaGFudG1lbnQpIHsgcmV0dXJuIHNuLkdldEVuY2hhbnRtZW50VHlwZShha0VuY2hhbnRtZW50KTsgfTtcclxuLy8tLS0tLS0tLVxyXG4vL1NFVFRFUlNcclxuLy8tLS0tLS0tLVxyXG5leHBvcnQgdmFyIEFkZE1hZ2ljRWZmZWN0VG9FbmNoYW50bWVudCA9IGZ1bmN0aW9uIChha0VuY2hhbnRtZW50LCBha01hZ2ljRWZmZWN0LCBhZk1hZ25pdHVkZSwgYWlBcmVhLCBhaUR1cmF0aW9uLCBhZkNvc3QsIGFzQ29uZGl0aW9uTGlzdCkge1xyXG4gICAgaWYgKGFmQ29zdCA9PT0gdm9pZCAwKSB7IGFmQ29zdCA9IDAuMDsgfVxyXG4gICAgcmV0dXJuIHNuLkFkZE1hZ2ljRWZmZWN0VG9FbmNoYW50bWVudChha0VuY2hhbnRtZW50LCBha01hZ2ljRWZmZWN0LCBhZk1hZ25pdHVkZSwgYWlBcmVhLCBhaUR1cmF0aW9uLCBhZkNvc3QsIGFzQ29uZGl0aW9uTGlzdCk7XHJcbn07XHJcbi8vQWRkcyBlZmZlY3RpdGVtIGZyb20gRW5jaGFudG1lbnQgdG8gdGFyZ2V0IEVuY2hhbnRtZW50LCBhdCBnaXZlbiBpbmRleC4gU2FtZSBhcyBhYm92ZSBmdW5jdGlvbiwgYnV0IGxlc3MgdmVyYm9zZSwgYW5kIHByZXNlcnZlcyBhbGwgY29uZGl0aW9ucy4gT3B0aW9uYWwgY29zdCBhcmd1bWVudC5cclxuZXhwb3J0IHZhciBBZGRFZmZlY3RJdGVtVG9FbmNoYW50bWVudCA9IGZ1bmN0aW9uIChha0VuY2hhbnRtZW50LCBha0VuY2hhbnRtZW50VG9Db3B5RnJvbSwgYWlJbmRleCwgYWZDb3N0KSB7XHJcbiAgICBpZiAoYWZDb3N0ID09PSB2b2lkIDApIHsgYWZDb3N0ID0gLTEuMDsgfVxyXG4gICAgcmV0dXJuIHNuLkFkZEVmZmVjdEl0ZW1Ub0VuY2hhbnRtZW50KGFrRW5jaGFudG1lbnQsIGFrRW5jaGFudG1lbnRUb0NvcHlGcm9tLCBhaUluZGV4LCBhZkNvc3QpO1xyXG59O1xyXG4vL1JlbW92ZXMgbWFnaWMgZWZmZWN0IGZyb20gRW5jaGFudG1lbnQgdGhhdCBtYXRjaGVzIG1hZ25pdHVkZS9hcmVhL2R1cmF0aW9uL2Nvc3QuXHJcbmV4cG9ydCB2YXIgUmVtb3ZlTWFnaWNFZmZlY3RGcm9tRW5jaGFudG1lbnQgPSBmdW5jdGlvbiAoYWtFbmNoYW50bWVudCwgYWtNYWdpY0VmZmVjdCwgYWZNYWduaXR1ZGUsIGFpQXJlYSwgYWlEdXJhdGlvbiwgYWZDb3N0KSB7XHJcbiAgICBpZiAoYWZDb3N0ID09PSB2b2lkIDApIHsgYWZDb3N0ID0gMC4wOyB9XHJcbiAgICByZXR1cm4gc24uUmVtb3ZlTWFnaWNFZmZlY3RGcm9tRW5jaGFudG1lbnQoYWtFbmNoYW50bWVudCwgYWtNYWdpY0VmZmVjdCwgYWZNYWduaXR1ZGUsIGFpQXJlYSwgYWlEdXJhdGlvbiwgYWZDb3N0KTtcclxufTtcclxuLy9SZW1vdmVzIGVmZmVjdGl0ZW0gZnJvbSBFbmNoYW50bWVudCB0aGF0IG1hdGNoZXMgRW5jaGFudG1lbnQgYXQgaW5kZXguXHJcbmV4cG9ydCB2YXIgUmVtb3ZlRWZmZWN0SXRlbUZyb21FbmNoYW50bWVudCA9IGZ1bmN0aW9uIChha0VuY2hhbnRtZW50LCBha0VuY2hhbnRtZW50VG9NYXRjaEZyb20sIGFpSW5kZXgpIHtcclxuICAgIHJldHVybiBzbi5SZW1vdmVFZmZlY3RJdGVtRnJvbUVuY2hhbnRtZW50KGFrRW5jaGFudG1lbnQsIGFrRW5jaGFudG1lbnRUb01hdGNoRnJvbSwgYWlJbmRleCk7XHJcbn07XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vL0ZFQ1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy9GRUMgZnVuY3Rpb25cclxuLy9yZXR1cm5zIGVmZmVjdCB0eXBlLCBlZmZlY3Qgc2tpbGwgbGV2ZWwsIGFuZCBwcm9qZWN0aWxlIHR5cGUsIG9mIHRoZSBoaWdoZXN0IG1hZ25pdHVkZSBlZmZlY3QgcHJlc2VudCBvbiB0aGUgYWN0b3JcclxuLy9wZXJtYW5lbnQgLSBTVU4sIEFDSUQsIEZJUkUsIEZST1NULCBTSE9DSywgRFJBSU5cclxuLy90ZW1wb3JhcnkgLSBQT0lTT04sIEZFQVJcclxuZXhwb3J0IHZhciBHZXREZWF0aEVmZmVjdFR5cGUgPSBmdW5jdGlvbiAoYWtBY3RvciwgdHlwZSkgeyByZXR1cm4gc24uR2V0RGVhdGhFZmZlY3RUeXBlKGFrQWN0b3IsIHR5cGUpOyB9O1xyXG4vLzAgLSBjaGFycmVkL3NrZWxldG9uXHJcbi8vMSAtIGRyYWluZWRcclxuLy8yIC0gcG9pc29uZWQvZnJpZ2h0ZW5lZFxyXG4vLzMtICBhZ2VkXHJcbi8vNCAtIGNoYXJyZWQgY3JlYXR1cmVcclxuLy81IC0gZnJvemVuXHJcbmV4cG9ydCB2YXIgUmVtb3ZlRWZmZWN0c05vdE9mVHlwZSA9IGZ1bmN0aW9uIChha0FjdG9yLCBhaUVmZmVjdFR5cGUpIHsgcmV0dXJuIHNuLlJlbW92ZUVmZmVjdHNOb3RPZlR5cGUoYWtBY3RvciwgYWlFZmZlY3RUeXBlKTsgfTtcclxuLy8gMCAtIHBlcm1hbmVudFxyXG4vLyAxIC0gdGVtcG9yYXJ5XHJcbi8vIDIgLSBmcm96ZW5BY3RvclxyXG4vLyAzIC0gZnJvemVuQ29sXHJcbmV4cG9ydCB2YXIgU2VuZEZFQ1Jlc2V0RXZlbnQgPSBmdW5jdGlvbiAoYWtBY3RvciwgYWlUeXBlLCBhYlJlc2V0M0QpIHsgcmV0dXJuIHNuLlNlbmRGRUNSZXNldEV2ZW50KGFrQWN0b3IsIGFpVHlwZSwgYWJSZXNldDNEKTsgfTtcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vRk9STVxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8tLS0tLS0tXHJcbi8vR0VUVEVSU1xyXG4vLy0tLS0tLS1cclxuLy9SZWNvcmQgZmxhZ3NcclxuLy9odHRwczovL2VuLnVlc3AubmV0L3dpa2kvU2t5cmltX01vZDpNb2RfRmlsZV9Gb3JtYXQjUmVjb3Jkc1xyXG4vL2V2YWx1YXRlcyBjb25kaXRpb24gbGlzdHMgZm9yIHNwZWxscy9wb3Rpb25zL2VuY2hhbnRtZW50cy9tZ2VmcyBhbmQgcmV0dXJucyBpZiB0aGV5IGNhbiBiZSBmdWxsZmlsbGVkXHJcbmV4cG9ydCB2YXIgRXZhbHVhdGVDb25kaXRpb25MaXN0ID0gZnVuY3Rpb24gKGFrRm9ybSwgYWtBY3Rpb25SZWYsIGFrVGFyZ2V0UmVmKSB7IHJldHVybiBzbi5FdmFsdWF0ZUNvbmRpdGlvbkxpc3QoYWtGb3JtLCBha0FjdGlvblJlZiwgYWtUYXJnZXRSZWYpOyB9O1xyXG4vL0NsZWFyIHJlY29yZCBmbGFnXHJcbmV4cG9ydCB2YXIgQ2xlYXJSZWNvcmRGbGFnID0gZnVuY3Rpb24gKGFrRm9ybSwgYWlGbGFnKSB7IHJldHVybiBzbi5DbGVhclJlY29yZEZsYWcoYWtGb3JtLCBhaUZsYWcpOyB9O1xyXG4vL0J1aWxkcyBhIGxpc3Qgb2YgY29uZGl0aW9ucyBwcmVzZW50IG9uIHRoZSBmb3JtLiBJbmRleCBpcyBmb3Igc3BlbGxzL290aGVyIGZvcm1zIHRoYXQgaGF2ZSBsaXN0cyB3aXRoIGNvbmRpdGlvbnNcclxuLy9Tb21lIGNvbmRpdGlvbnMgbWF5IGJlIHNraXBwZWQgKGNvbmRpdGlvbnMgdGhhdCByZXF1aXJlIG5vbiBwbGF5ZXIgcmVmZXJlbmNlcywgb3Zlcmx5IGNvbXBsZXggY29uZGl0aW9ucyBpbnZvbHZpbmcgcGFja2FnZXMvYWxpYXNlcylcclxuZXhwb3J0IHZhciBHZXRDb25kaXRpb25MaXN0ID0gZnVuY3Rpb24gKGFrRm9ybSwgYWlJbmRleCkge1xyXG4gICAgaWYgKGFpSW5kZXggPT09IHZvaWQgMCkgeyBhaUluZGV4ID0gMDsgfVxyXG4gICAgcmV0dXJuIHNuLkdldENvbmRpdGlvbkxpc3QoYWtGb3JtLCBhaUluZGV4KTtcclxufTtcclxuLy9HZXQgZm9ybSBlZGl0b3JJRFxyXG5leHBvcnQgdmFyIEdldEZvcm1FZGl0b3JJRCA9IGZ1bmN0aW9uIChha0Zvcm0pIHtcclxuICAgIHJldHVybiBzbi5HZXRGb3JtRWRpdG9ySUQoYWtGb3JtKTtcclxufTtcclxuLy9SZXR1cm5zIHdoZXRoZXIgdGhlIGZvcm0gaXMgcGFydCBvZiB0aGUgbW9kXHJcbmV4cG9ydCB2YXIgSXNGb3JtSW5Nb2QgPSBmdW5jdGlvbiAoYWtGb3JtLCBhc01vZE5hbWUpIHsgcmV0dXJuIHNuLklzRm9ybUluTW9kKGFrRm9ybSwgYXNNb2ROYW1lKTsgfTtcclxuLy9SZXR1cm5zIHdoZXRoZXIgdGhlIGZvcm0gaXMgdGVtcG9yYXJ5IChpZS4gaGFzIGEgZm9ybUlEIGJlZ2lubmluZyB3aXRoIEZGKVxyXG5leHBvcnQgdmFyIElzR2VuZXJhdGVkRm9ybSA9IGZ1bmN0aW9uIChha0Zvcm0pIHtcclxuICAgIHJldHVybiBzbi5Jc0dlbmVyYXRlZEZvcm0oYWtGb3JtKTtcclxufTtcclxuLy9JcyByZWNvcmQgZmxhZyBzZXQ/XHJcbmV4cG9ydCB2YXIgSXNSZWNvcmRGbGFnU2V0ID0gZnVuY3Rpb24gKGFrRm9ybSwgYWlGbGFnKSB7IHJldHVybiBzbi5Jc1JlY29yZEZsYWdTZXQoYWtGb3JtLCBhaUZsYWcpOyB9O1xyXG4vL3JldHVybnMgd2hldGhlciB0aGUgZm9ybSBoYXMgc2NyaXB0IGF0dGFjaGVkLiBJZiBzY3JpcHROYW1lIGlzIGVtcHR5LCBpdCB3aWxsIHJldHVybiBpZiB0aGUgZm9ybSBoYXMgYW55IG5vbi1iYXNlIHNjcmlwdHMgYXR0YWNoZWRcclxuZXhwb3J0IHZhciBJc1NjcmlwdEF0dGFjaGVkVG9Gb3JtID0gZnVuY3Rpb24gKGFrRm9ybSwgYXNTY3JpcHROYW1lKSB7IHJldHVybiBzbi5Jc1NjcmlwdEF0dGFjaGVkVG9Gb3JtKGFrRm9ybSwgYXNTY3JpcHROYW1lKTsgfTtcclxuLy9TZXQgcmVjb3JkIGZsYWdcclxuZXhwb3J0IHZhciBTZXRSZWNvcmRGbGFnID0gZnVuY3Rpb24gKGFrRm9ybSwgYWlGbGFnKSB7IHJldHVybiBzbi5TZXRSZWNvcmRGbGFnKGFrRm9ybSwgYWlGbGFnKTsgfTtcclxuLy8tLS0tLS0tXHJcbi8vU0VUVEVSU1xyXG4vLy0tLS0tLS1cclxuLy9BZGRzIGtleXdvcmQgdG8gZm9ybS4gRmFpbHMgaWYgdGhlIGZvcm0gZG9lc24ndCBhY2NlcHQga2V5d29yZHMuXHJcbmV4cG9ydCB2YXIgQWRkS2V5d29yZFRvRm9ybSA9IGZ1bmN0aW9uIChha0Zvcm0sIGFrS2V5d29yZCkgeyByZXR1cm4gc24uQWRkS2V5d29yZFRvRm9ybShha0Zvcm0sIGFrS2V5d29yZCk7IH07XHJcbi8vRmF2b3JpdGVzIGl0ZW0gKG11c3QgYmUgaW4gaW52ZW50b3J5KSBvciBzcGVsbC9zaG91dFxyXG5leHBvcnQgdmFyIE1hcmtJdGVtQXNGYXZvcml0ZSA9IGZ1bmN0aW9uIChha0Zvcm0pIHtcclxuICAgIHJldHVybiBzbi5NYXJrSXRlbUFzRmF2b3JpdGUoYWtGb3JtKTtcclxufTtcclxuLy9SZXBsYWNlcyBnaXZlbiBrZXl3b3JkIHdpdGggbmV3IG9uZSBvbiBmb3JtLiBPbmx5IGxhc3RzIGZvciBhIHNpbmdsZSBnYW1pbmcgc2Vzc2lvbi4gW3BvcnRlZCBmcm9tIERpZW5lc1Rvb2xzXS5cclxuZXhwb3J0IHZhciBSZXBsYWNlS2V5d29yZE9uRm9ybSA9IGZ1bmN0aW9uIChha0Zvcm0sIGFrS2V5d29yZEFkZCwgYWtLZXl3b3JkUmVtb3ZlKSB7IHJldHVybiBzbi5SZXBsYWNlS2V5d29yZE9uRm9ybShha0Zvcm0sIGFrS2V5d29yZEFkZCwgYWtLZXl3b3JkUmVtb3ZlKTsgfTtcclxuLy9SZW1vdmVzIGtleXdvcmQsIGlmIHByZXNlbnQsIGZyb20gZm9ybS5cclxuZXhwb3J0IHZhciBSZW1vdmVLZXl3b3JkT25Gb3JtID0gZnVuY3Rpb24gKGFrRm9ybSwgYWtLZXl3b3JkKSB7IHJldHVybiBzbi5SZW1vdmVLZXl3b3JkT25Gb3JtKGFrRm9ybSwgYWtLZXl3b3JkKTsgfTtcclxuLy9VbmZhdm9yaXRlcyBpdGVtIChtdXN0IGJlIGluIGludmVudG9yeSkgb3Igc3BlbGwvc2hvdXRcclxuZXhwb3J0IHZhciBVbm1hcmtJdGVtQXNGYXZvcml0ZSA9IGZ1bmN0aW9uIChha0Zvcm0pIHtcclxuICAgIHJldHVybiBzbi5Vbm1hcmtJdGVtQXNGYXZvcml0ZShha0Zvcm0pO1xyXG59O1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy9GVVJOSVRVUkVcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8qKiBGVVJOSVRVUkUgVFlQRVNcclxuICAgICAgICBQZXJjaCA9IDBcclxuICAgICAgICBMZWFuID0gMVxyXG4gICAgICAgIFNpdCA9IDJcclxuICAgICAgICBTbGVlcCA9IDMgKi9cclxuLy9HZXRzIGZ1cm5pdHVyZSB0eXBlXHJcbmV4cG9ydCB2YXIgR2V0RnVybml0dXJlVHlwZSA9IGZ1bmN0aW9uIChha0Z1cm5pdHVyZSkgeyByZXR1cm4gc24uR2V0RnVybml0dXJlVHlwZShha0Z1cm5pdHVyZSk7IH07XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vL0dBTUVcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vR2V0cyBhbGwgZW5jaGFudG1lbnRzIGZyb20gYmFzZSBnYW1lICsgbW9kcywgZmlsdGVyZWQgdXNpbmcgb3B0aW9uYWwga2V5d29yZCBhcnJheVxyXG5leHBvcnQgdmFyIEdldEFsbEVuY2hhbnRtZW50cyA9IGZ1bmN0aW9uIChha0tleXdvcmRzKSB7XHJcbiAgICBpZiAoYWtLZXl3b3JkcyA9PT0gdm9pZCAwKSB7IGFrS2V5d29yZHMgPSBudWxsOyB9XHJcbiAgICByZXR1cm4gc24uR2V0QWxsRW5jaGFudG1lbnRzKGFrS2V5d29yZHMpO1xyXG59O1xyXG4vL0dldHMgYWxsIGZvcm1zIGZyb20gYmFzZSBnYW1lICsgbW9kcywgZmlsdGVyZWQgdXNpbmcgZm9ybXR5cGUgYW5kIG9wdGlvbmFsIGtleXdvcmQgYXJyYXlcclxuZXhwb3J0IHZhciBHZXRBbGxGb3JtcyA9IGZ1bmN0aW9uIChhaUZvcm1UeXBlLCBha0tleXdvcmRzKSB7XHJcbiAgICBpZiAoYWtLZXl3b3JkcyA9PT0gdm9pZCAwKSB7IGFrS2V5d29yZHMgPSBudWxsOyB9XHJcbiAgICByZXR1cm4gc24uR2V0QWxsRm9ybXMoYWlGb3JtVHlwZSwgYWtLZXl3b3Jkcyk7XHJcbn07XHJcbi8vR2V0cyBhbGwgcmFjZXMgZnJvbSBiYXNlIGdhbWUgKyBtb2RzLCBmaWx0ZXJlZCB1c2luZyBvcHRpb25hbCBrZXl3b3JkIGFycmF5XHJcbmV4cG9ydCB2YXIgR2V0QWxsUmFjZXMgPSBmdW5jdGlvbiAoYWtLZXl3b3Jkcykge1xyXG4gICAgaWYgKGFrS2V5d29yZHMgPT09IHZvaWQgMCkgeyBha0tleXdvcmRzID0gbnVsbDsgfVxyXG4gICAgcmV0dXJuIHNuLkdldEFsbFJhY2VzKGFrS2V5d29yZHMpO1xyXG59O1xyXG4vL0dldHMgYWxsIHNwZWxscyBmcm9tIGJhc2UgZ2FtZSArIG1vZHMsIGZpbHRlcmVkIHVzaW5nIG9wdGlvbmFsIGtleXdvcmQgYXJyYXkuIElzUGxheWFibGUgZmlsdGVycyBvdXQgc3BlbGxzIHRoYXQgYXJlIG5vdCBmb3VuZCBpbiBzcGVsbGJvb2tzLlxyXG5leHBvcnQgdmFyIEdldEFsbFNwZWxscyA9IGZ1bmN0aW9uIChha0tleXdvcmRzLCBhYklzUGxheWFibGUpIHtcclxuICAgIGlmIChha0tleXdvcmRzID09PSB2b2lkIDApIHsgYWtLZXl3b3JkcyA9IG51bGw7IH1cclxuICAgIGlmIChhYklzUGxheWFibGUgPT09IHZvaWQgMCkgeyBhYklzUGxheWFibGUgPSBmYWxzZTsgfVxyXG4gICAgcmV0dXJuIHNuLkdldEFsbFNwZWxscyhha0tleXdvcmRzLCBhYklzUGxheWFibGUpO1xyXG59O1xyXG4vKiogQUkgUFJPQ0VTUyBMRVZFTFxyXG4gICAgICAgIEhpZ2hQcm9jZXNzID0gMFxyXG4gICAgICAgIE1pZGRsZUhpZ2hQcm9jZXNzID0gMVxyXG4gICAgICAgIE1pZGRsZUxvd1Byb2Nlc3MgPSAyXHJcbiAgICAgICAgTG93UHJvY2VzcyA9IDMgKi9cclxuLy9HZXRzIGFsbCBhY3RvcnMgYnkgQUkgcHJvY2Vzc2luZyB0eXBlLiBodHRwczovL2dlY2suYmV0aHNvZnQuY29tL2luZGV4LnBocD90aXRsZT1HZXRBY3RvcnNCeVByb2Nlc3NpbmdMZXZlbCBmb3IgbW9yZSBpbmZvXHJcbmV4cG9ydCB2YXIgR2V0QWN0b3JzQnlQcm9jZXNzaW5nTGV2ZWwgPSBmdW5jdGlvbiAoYWlMZXZlbCkge1xyXG4gICAgcmV0dXJuIHNuLkdldEFjdG9yc0J5UHJvY2Vzc2luZ0xldmVsKGFpTGV2ZWwpO1xyXG59O1xyXG4vL0dldHMgYWxsIGZvcm1zIGFkZGVkIGJ5IGEgc3BlY2lmaWVkIG1vZC9nYW1lIGVzbSwgZmlsdGVyZWQgdXNpbmcgZm9ybXR5cGUgYW5kIG9wdGlvbmFsIGtleXdvcmQgYXJyYXkuXHJcbmV4cG9ydCB2YXIgR2V0QWxsRm9ybXNJbk1vZCA9IGZ1bmN0aW9uIChhc01vZE5hbWUsIGFpRm9ybVR5cGUsIGFrS2V5d29yZHMpIHtcclxuICAgIGlmIChha0tleXdvcmRzID09PSB2b2lkIDApIHsgYWtLZXl3b3JkcyA9IG51bGw7IH1cclxuICAgIHJldHVybiBzbi5HZXRBbGxGb3Jtc0luTW9kKGFzTW9kTmFtZSwgYWlGb3JtVHlwZSwgYWtLZXl3b3Jkcyk7XHJcbn07XHJcbi8vR2V0cyBhbGwgZW5jaGFudG1lbnRzIGFkZGVkIGJ5IGEgc3BlY2lmaWVkIG1vZC9nYW1lIGVzbSwgZmlsdGVyZWQgdXNpbmcgb3B0aW9uYWwga2V5d29yZCBhcnJheS5cclxuZXhwb3J0IHZhciBHZXRBbGxFbmNoYW50bWVudHNJbk1vZCA9IGZ1bmN0aW9uIChhc01vZE5hbWUsIGFrS2V5d29yZHMpIHtcclxuICAgIGlmIChha0tleXdvcmRzID09PSB2b2lkIDApIHsgYWtLZXl3b3JkcyA9IG51bGw7IH1cclxuICAgIHJldHVybiBzbi5HZXRBbGxFbmNoYW50bWVudHNJbk1vZChhc01vZE5hbWUsIGFrS2V5d29yZHMpO1xyXG59O1xyXG4vL0dldHMgYWxsIHJhY2VzIGFkZGVkIGJ5IGEgc3BlY2lmaWVkIG1vZC9nYW1lIGVzbSwgZmlsdGVyZWQgdXNpbmcgb3B0aW9uYWwga2V5d29yZCBhcnJheS5cclxuZXhwb3J0IHZhciBHZXRBbGxSYWNlc0luTW9kID0gZnVuY3Rpb24gKGFzTW9kTmFtZSwgYWtLZXl3b3Jkcykge1xyXG4gICAgaWYgKGFrS2V5d29yZHMgPT09IHZvaWQgMCkgeyBha0tleXdvcmRzID0gbnVsbDsgfVxyXG4gICAgcmV0dXJuIHNuLkdldEFsbFJhY2VzSW5Nb2QoYXNNb2ROYW1lLCBha0tleXdvcmRzKTtcclxufTtcclxuLy9HZXRzIGFsbCBzcGVsbHMgYWRkZWQgYnkgYSBzcGVjaWZpZWQgbW9kL2dhbWUgZXNtLCBmaWx0ZXJlZCB1c2luZyBvcHRpb25hbCBrZXl3b3JkIGFycmF5LlxyXG5leHBvcnQgdmFyIEdldEFsbFNwZWxsc0luTW9kID0gZnVuY3Rpb24gKGFzTW9kTmFtZSwgYWtLZXl3b3JkcywgYWJJc1BsYXlhYmxlKSB7XHJcbiAgICBpZiAoYWtLZXl3b3JkcyA9PT0gdm9pZCAwKSB7IGFrS2V5d29yZHMgPSBudWxsOyB9XHJcbiAgICBpZiAoYWJJc1BsYXlhYmxlID09PSB2b2lkIDApIHsgYWJJc1BsYXlhYmxlID0gZmFsc2U7IH1cclxuICAgIHJldHVybiBzbi5HZXRBbGxTcGVsbHNJbk1vZChhc01vZE5hbWUsIGFrS2V5d29yZHMsIGFiSXNQbGF5YWJsZSk7XHJcbn07XHJcbi8vR2V0cyBjdXJyZW50IGNlbGwgaWYgaW4gaW50ZXJpb3IvYXR0YWNoZWQgY2VsbHMgaW4gZXh0ZXJpb3Ivc2t5IGNlbGxzIGlmIGluIHdvcmxkc3BhY2Ugd2l0aCBubyBhdHRhY2hlZCBjZWxscz8/XHJcbmV4cG9ydCB2YXIgR2V0QXR0YWNoZWRDZWxscyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNuLkdldEF0dGFjaGVkQ2VsbHMoKTsgfTtcclxuLy9HZXRzIGZvcm0gdXNpbmcgaXRzIGVkaXRvcklEXHJcbmV4cG9ydCB2YXIgR2V0Rm9ybUZyb21FZGl0b3JJRCA9IGZ1bmN0aW9uIChhc0VkaXRvcklEKSB7IHJldHVybiBzbi5HZXRGb3JtRnJvbUVkaXRvcklEKGFzRWRpdG9ySUQpOyB9O1xyXG4vL0dldHMgdGhlIHZhbHVlIG9mIHRoZSBib29sZWFuIGdhbWVzZXR0aW5nLiBSZXR1cm5zIC0xIGlmIGdtc3QgaXMgTm9uZSBvciBub3QgYSBib29sLlxyXG5leHBvcnQgdmFyIEdldEdhbWVTZXR0aW5nQm9vbCA9IGZ1bmN0aW9uIChhc0dhbWVTZXR0aW5nKSB7XHJcbiAgICByZXR1cm4gc24uR2V0R2FtZVNldHRpbmdCb29sKGFzR2FtZVNldHRpbmcpO1xyXG59O1xyXG4vL1JldHVybnMgd2hldGhlciBHb2QgTW9kZSBpcyBlbmFibGVkXHJcbmV4cG9ydCB2YXIgR2V0R29kTW9kZSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNuLkdldEdvZE1vZGUoKTsgfTtcclxuLy9HZXRzIGxvY2FsIGdyYXZpdHkgb2YgdGhlIGV4dGVyaW9yIHdvcmxkc3BhY2UvaW50ZXJpb3IgY2VsbC4gRGVmYXVsdCBncmF2aXR5IGlzIFswLjAsIDAuMCwgLTkuODFdXHJcbmV4cG9ydCB2YXIgR2V0TG9jYWxHcmF2aXR5ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gc24uR2V0TG9jYWxHcmF2aXR5KCk7IH07XHJcbi8vR2V0cyBob3cgbWFueSBhY3RvcnMgYXJlIGluIGhpZ2ggcHJvY2Vzc1xyXG5leHBvcnQgdmFyIEdldE51bUFjdG9yc0luSGlnaCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNuLkdldE51bUFjdG9yc0luSGlnaCgpOyB9O1xyXG4vL1JldHVybnMgYWxsIGFjdG9ycyB0aGF0IGFyZSBjdXJyZW50bHkgZm9sbG93aW5nIHRoZSBwbGF5ZXJcclxuZXhwb3J0IHZhciBHZXRQbGF5ZXJGb2xsb3dlcnMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBzbi5HZXRQbGF5ZXJGb2xsb3dlcnMoKTsgfTtcclxuLy9SZXR1cm5zIHdoZXRoZXIgcGx1Z2luIGV4aXN0c1xyXG5leHBvcnQgdmFyIElzUGx1Z2luRm91bmQgPSBmdW5jdGlvbiAoYWtOYW1lKSB7XHJcbiAgICByZXR1cm4gc24uSXNQbHVnaW5Gb3VuZChha05hbWUpO1xyXG59O1xyXG4vL1JldHVybnMgd2hldGhlciBDQyBTdXJ2aXZhbCBNb2RlIGlzIGVuYWJsZWRcclxuZXhwb3J0IHZhciBJc1N1cnZpdmFsTW9kZUFjdGl2ZSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNuLklzU3Vydml2YWxNb2RlQWN0aXZlKCk7IH07XHJcbi8vU2V0cyBsb2NhbCBncmF2aXR5IChtcy0yKSBvZiB0aGUgZXh0ZXJpb3Igd29ybGRzcGFjZS9pbnRlcmlvciBjZWxsLlxyXG5leHBvcnQgdmFyIFNldExvY2FsR3Jhdml0eSA9IGZ1bmN0aW9uIChhZlhBeGlzLCBhZllBeGlzLCBhZlpBeGlzKSB7IHJldHVybiBzbi5TZXRMb2NhbEdyYXZpdHkoYWZYQXhpcywgYWZZQXhpcywgYWZaQXhpcyk7IH07XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vL0hBWkFSRFxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8tLS0tLS0tXHJcbi8vR0VUVEVSU1xyXG4vLy0tLS0tLS1cclxuLyoqIEhBWkFSRCBGTEFHU1xyXG4gICAgICAgIE5vbmUgPSAwXHJcbiAgICAgICAgUENPbmx5ID0gMHgwMDAwMDAwMVxyXG4gICAgICAgIEluaGVyaXREdXJhdGlvbiA9IDB4MDAwMDAwMDJcclxuICAgICAgICBBbGlnblRvTm9ybWFsID0gMHgwMDAwMDAwNFxyXG4gICAgICAgIEluaGVyaXRSYWRpdXMgPSAweDAwMDAwMDA4XHJcbiAgICAgICAgRHJvcFRvR3JvdW5kID0gMHgwMDAwMDAxMCAqL1xyXG4vL0dldHMgaGF6YXJkIGFydCBwYXRoLCBlZy4gXCJFZmZlY3RzL015SGF6YXJkQXJ0Lm5pZlwiXHJcbmV4cG9ydCB2YXIgR2V0SGF6YXJkQXJ0ID0gZnVuY3Rpb24gKGFrSGF6YXJkKSB7XHJcbiAgICByZXR1cm4gc24uR2V0SGF6YXJkQXJ0KGFrSGF6YXJkKTtcclxufTtcclxuLy9HZXRzIGFzc29jaWF0ZWQgSU1PRFxyXG5leHBvcnQgdmFyIEdldEhhemFyZElNT0QgPSBmdW5jdGlvbiAoYWtIYXphcmQpIHsgcmV0dXJuIHNuLkdldEhhemFyZElNT0QoYWtIYXphcmQpOyB9O1xyXG4vL0dldHMgSU1PRCByYWRpdXNcclxuZXhwb3J0IHZhciBHZXRIYXphcmRJTU9EUmFkaXVzID0gZnVuY3Rpb24gKGFrSGF6YXJkKSB7IHJldHVybiBzbi5HZXRIYXphcmRJTU9EUmFkaXVzKGFrSGF6YXJkKTsgfTtcclxuLy9HZXRzIGltcGFjdCBkYXRhIHNldFxyXG5leHBvcnQgdmFyIEdldEhhemFyZElQRFMgPSBmdW5jdGlvbiAoYWtIYXphcmQpIHsgcmV0dXJuIHNuLkdldEhhemFyZElQRFMoYWtIYXphcmQpOyB9O1xyXG4vL0dldHMgaGF6YXJkIGxpZmV0aW1lXHJcbmV4cG9ydCB2YXIgR2V0SGF6YXJkTGlmZXRpbWUgPSBmdW5jdGlvbiAoYWtIYXphcmQpIHsgcmV0dXJuIHNuLkdldEhhemFyZExpZmV0aW1lKGFrSGF6YXJkKTsgfTtcclxuLy9HZXRzIGhhemFyZCBsaWdodFxyXG5leHBvcnQgdmFyIEdldEhhemFyZExpZ2h0ID0gZnVuY3Rpb24gKGFrSGF6YXJkKSB7IHJldHVybiBzbi5HZXRIYXphcmRMaWdodChha0hhemFyZCk7IH07XHJcbi8vR2V0cyBoYXphcmQgbGltaXRcclxuZXhwb3J0IHZhciBHZXRIYXphcmRMaW1pdCA9IGZ1bmN0aW9uIChha0hhemFyZCkge1xyXG4gICAgcmV0dXJuIHNuLkdldEhhemFyZExpbWl0KGFrSGF6YXJkKTtcclxufTtcclxuLy9HZXRzIGhhemFyZCByYWRpdXNcclxuZXhwb3J0IHZhciBHZXRIYXphcmRSYWRpdXMgPSBmdW5jdGlvbiAoYWtIYXphcmQpIHtcclxuICAgIHJldHVybiBzbi5HZXRIYXphcmRSYWRpdXMoYWtIYXphcmQpO1xyXG59O1xyXG4vL0dldHMgaGF6YXJkIHNvdW5kXHJcbmV4cG9ydCB2YXIgR2V0SGF6YXJkU291bmQgPSBmdW5jdGlvbiAoYWtIYXphcmQpIHsgcmV0dXJuIHNuLkdldEhhemFyZFNvdW5kKGFrSGF6YXJkKTsgfTtcclxuLy9HZXRzIGhhemFyZCBzcGVsbFxyXG5leHBvcnQgdmFyIEdldEhhemFyZFNwZWxsID0gZnVuY3Rpb24gKGFrSGF6YXJkKSB7IHJldHVybiBzbi5HZXRIYXphcmRTcGVsbChha0hhemFyZCk7IH07XHJcbi8vR2V0cyB0YXJnZXQgaW50ZXJ2YWwgKGR1cmF0aW9uIGJldHdlZW4gY2FzdHMpXHJcbmV4cG9ydCB2YXIgR2V0SGF6YXJkVGFyZ2V0SW50ZXJ2YWwgPSBmdW5jdGlvbiAoYWtIYXphcmQpIHsgcmV0dXJuIHNuLkdldEhhemFyZFRhcmdldEludGVydmFsKGFrSGF6YXJkKTsgfTtcclxuLy9JcyBoYXphcmQgZmxhZyBzZXQ/XHJcbmV4cG9ydCB2YXIgSXNIYXphcmRGbGFnU2V0ID0gZnVuY3Rpb24gKGFrSGF6YXJkLCBhaUZsYWcpIHsgcmV0dXJuIHNuLklzSGF6YXJkRmxhZ1NldChha0hhemFyZCwgYWlGbGFnKTsgfTtcclxuLy8tLS0tLS0tXHJcbi8vU0VUVEVSU1xyXG4vLy0tLS0tLS1cclxuLy9DbGVhcnMgaGF6YXJkIGZsYWdcclxuZXhwb3J0IHZhciBDbGVhckhhemFyZEZsYWcgPSBmdW5jdGlvbiAoYWtIYXphcmQsIGFpRmxhZykgeyByZXR1cm4gc24uQ2xlYXJIYXphcmRGbGFnKGFrSGF6YXJkLCBhaUZsYWcpOyB9O1xyXG4vL1NldHMgaGF6YXJkIGFydCBwYXRoLiBEb2VzIG5vdCB3b3JrIG9uIGFjdGl2ZSBoYXphcmRzXHJcbmV4cG9ydCB2YXIgU2V0SGF6YXJkQXJ0ID0gZnVuY3Rpb24gKGFrSGF6YXJkLCBhc1BhdGgpIHsgcmV0dXJuIHNuLlNldEhhemFyZEFydChha0hhemFyZCwgYXNQYXRoKTsgfTtcclxuLy9TZXQgZmxhZ1xyXG5leHBvcnQgdmFyIFNldEhhemFyZEZsYWcgPSBmdW5jdGlvbiAoYWtIYXphcmQsIGFpRmxhZykgeyByZXR1cm4gc24uU2V0SGF6YXJkRmxhZyhha0hhemFyZCwgYWlGbGFnKTsgfTtcclxuLy9TZXRzIElNT0RcclxuZXhwb3J0IHZhciBTZXRIYXphcmRJTU9EID0gZnVuY3Rpb24gKGFrSGF6YXJkLCBha0lNT0QpIHsgcmV0dXJuIHNuLlNldEhhemFyZElNT0QoYWtIYXphcmQsIGFrSU1PRCk7IH07XHJcbi8vU2V0cyBJTU9EIHJhZGl1c1xyXG5leHBvcnQgdmFyIFNldEhhemFyZElNT0RSYWRpdXMgPSBmdW5jdGlvbiAoYWtIYXphcmQsIGFmUmFkaXVzKSB7IHJldHVybiBzbi5TZXRIYXphcmRJTU9EUmFkaXVzKGFrSGF6YXJkLCBhZlJhZGl1cyk7IH07XHJcbi8vU2V0cyBpbXBhY3QgZGF0YSBzZXRcclxuZXhwb3J0IHZhciBTZXRIYXphcmRJUERTID0gZnVuY3Rpb24gKGFrSGF6YXJkLCBha0lQRFMpIHsgcmV0dXJuIHNuLlNldEhhemFyZElQRFMoYWtIYXphcmQsIGFrSVBEUyk7IH07XHJcbi8vU2V0cyBoYXphcmQgbGlmZXRpbWVcclxuZXhwb3J0IHZhciBTZXRIYXphcmRMaWZldGltZSA9IGZ1bmN0aW9uIChha0hhemFyZCwgYWZMaWZldGltZSkgeyByZXR1cm4gc24uU2V0SGF6YXJkTGlmZXRpbWUoYWtIYXphcmQsIGFmTGlmZXRpbWUpOyB9O1xyXG4vL1NldHMgaGF6YXJkIGxpZ2h0XHJcbmV4cG9ydCB2YXIgU2V0SGF6YXJkTGlnaHQgPSBmdW5jdGlvbiAoYWtIYXphcmQsIGFrTGlnaHQpIHsgcmV0dXJuIHNuLlNldEhhemFyZExpZ2h0KGFrSGF6YXJkLCBha0xpZ2h0KTsgfTtcclxuLy9TZXRzIGhhemFyZCBsaW1pdFxyXG5leHBvcnQgdmFyIFNldEhhemFyZExpbWl0ID0gZnVuY3Rpb24gKGFrSGF6YXJkLCBhaUxpbWl0KSB7IHJldHVybiBzbi5TZXRIYXphcmRMaW1pdChha0hhemFyZCwgYWlMaW1pdCk7IH07XHJcbi8vU2V0cyBoYXphcmQgcmFkaXVzXHJcbmV4cG9ydCB2YXIgU2V0SGF6YXJkUmFkaXVzID0gZnVuY3Rpb24gKGFrSGF6YXJkLCBhZlJhZGl1cykgeyByZXR1cm4gc24uU2V0SGF6YXJkUmFkaXVzKGFrSGF6YXJkLCBhZlJhZGl1cyk7IH07XHJcbi8vU2V0cyBoYXphcmQgc291bmRcclxuZXhwb3J0IHZhciBTZXRIYXphcmRTb3VuZCA9IGZ1bmN0aW9uIChha0hhemFyZCwgYWtTb3VuZCkgeyByZXR1cm4gc24uU2V0SGF6YXJkU291bmQoYWtIYXphcmQsIGFrU291bmQpOyB9O1xyXG4vL1NldHMgaGF6YXJkIHNwZWxsXHJcbmV4cG9ydCB2YXIgU2V0SGF6YXJkU3BlbGwgPSBmdW5jdGlvbiAoYWtIYXphcmQsIGFrc3BlbGwpIHsgcmV0dXJuIHNuLlNldEhhemFyZFNwZWxsKGFrSGF6YXJkLCBha3NwZWxsKTsgfTtcclxuLy9TZXRzIGhhemFyZCBpbnRlcnZhbFxyXG5leHBvcnQgdmFyIFNldEhhemFyZFRhcmdldEludGVydmFsID0gZnVuY3Rpb24gKGFrSGF6YXJkLCBhZkludGVydmFsKSB7IHJldHVybiBzbi5TZXRIYXphcmRUYXJnZXRJbnRlcnZhbChha0hhemFyZCwgYWZJbnRlcnZhbCk7IH07XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vL0xJR0hUXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLy0tLS0tLS1cclxuLy9HRVRURVJTXHJcbi8vLS0tLS0tLVxyXG4vL0dldHMgbGlnaHQgY29sb3IuXHJcbmV4cG9ydCB2YXIgR2V0TGlnaHRDb2xvciA9IGZ1bmN0aW9uIChha0xpZ2h0KSB7IHJldHVybiBzbi5HZXRMaWdodENvbG9yKGFrTGlnaHQpOyB9O1xyXG4vL0dldHMgbGlnaHQgZmFkZSByYW5nZS5cclxuZXhwb3J0IHZhciBHZXRMaWdodEZhZGUgPSBmdW5jdGlvbiAoYWtMaWdodCkge1xyXG4gICAgcmV0dXJuIHNuLkdldExpZ2h0RmFkZShha0xpZ2h0KTtcclxufTtcclxuLy9HZXRzIGJhc2UgbGlnaHQgRk9WLlxyXG5leHBvcnQgdmFyIEdldExpZ2h0Rk9WID0gZnVuY3Rpb24gKGFrTGlnaHQpIHtcclxuICAgIHJldHVybiBzbi5HZXRMaWdodEZPVihha0xpZ2h0KTtcclxufTtcclxuLy9HZXRzIGxpZ2h0IHJhZGl1cyAocmFkaXVzIGlzIGFjdHVhbGx5IGludCBidXQgY2hhbmdpbmcgdGhhdCB3b3VsZCBicmVhayBtb2RzIHNvIGZpeGVkIHRoYXQgaW4gc291cmNlKS5cclxuZXhwb3J0IHZhciBHZXRMaWdodFJhZGl1cyA9IGZ1bmN0aW9uIChha0xpZ2h0KSB7XHJcbiAgICByZXR1cm4gc24uR2V0TGlnaHRSYWRpdXMoYWtMaWdodCk7XHJcbn07XHJcbi8vR2V0cyBsaWdodCBjb2xvciBhcyBSR0IgYXJyYXkgWzAtMjU1XS5cclxuZXhwb3J0IHZhciBHZXRMaWdodFJHQiA9IGZ1bmN0aW9uIChha0xpZ2h0KSB7XHJcbiAgICByZXR1cm4gc24uR2V0TGlnaHRSR0IoYWtMaWdodCk7XHJcbn07XHJcbi8vR2V0cyBkZXB0aCBiaWFzLCByZXR1cm5zIDEgaWYgbm90IHNldC5cclxuZXhwb3J0IHZhciBHZXRMaWdodFNoYWRvd0RlcHRoQmlhcyA9IGZ1bmN0aW9uIChha0xpZ2h0T2JqZWN0KSB7IHJldHVybiBzbi5HZXRMaWdodFNoYWRvd0RlcHRoQmlhcyhha0xpZ2h0T2JqZWN0KTsgfTtcclxuLyoqIExJR0hUIFRZUEVTXHJcbiAgICAgICAgSGVtaVNoYWRvdyA9IDFcclxuICAgICAgICBPbW5pID0gMlxyXG4gICAgICAgIE9tbmlTaGFkb3cgPSAzXHJcbiAgICAgICAgU3BvdCA9IDRcclxuICAgICAgICBTcG90U2hhZG93ID0gNSAqL1xyXG4vL0dldCBsaWdodCB0eXBlXHJcbmV4cG9ydCB2YXIgR2V0TGlnaHRUeXBlID0gZnVuY3Rpb24gKGFrTGlnaHQpIHtcclxuICAgIHJldHVybiBzbi5HZXRMaWdodFR5cGUoYWtMaWdodCk7XHJcbn07XHJcbi8vLS0tLS0tLVxyXG4vL1NFVFRFUlNcclxuLy8tLS0tLS0tXHJcbi8vU2V0cyBsaWdodCBjb2xvci5cclxuZXhwb3J0IHZhciBTZXRMaWdodENvbG9yID0gZnVuY3Rpb24gKGFrTGlnaHQsIGFrQ29sb3Jmb3JtKSB7IHJldHVybiBzbi5TZXRMaWdodENvbG9yKGFrTGlnaHQsIGFrQ29sb3Jmb3JtKTsgfTtcclxuLy9TZXRzIGxpZ2h0IGZhZGUgcmFuZ2UuXHJcbmV4cG9ydCB2YXIgU2V0TGlnaHRGYWRlID0gZnVuY3Rpb24gKGFrTGlnaHQsIGFmUmFuZ2UpIHsgcmV0dXJuIHNuLlNldExpZ2h0RmFkZShha0xpZ2h0LCBhZlJhbmdlKTsgfTtcclxuLy9zZXRzIGJhc2UgbGlnaHQgRk9WLlxyXG5leHBvcnQgdmFyIFNldExpZ2h0Rk9WID0gZnVuY3Rpb24gKGFrTGlnaHQsIGFmRk9WKSB7IHJldHVybiBzbi5TZXRMaWdodEZPVihha0xpZ2h0LCBhZkZPVik7IH07XHJcbi8vU2V0cyBsaWdodCByYWRpdXMgKG1pbmltdW0gbGlnaHQgcmFkaXVzIGlzIDE2KSAuXHJcbmV4cG9ydCB2YXIgU2V0TGlnaHRSYWRpdXMgPSBmdW5jdGlvbiAoYWtMaWdodCwgYWZSYWRpdXMpIHsgcmV0dXJuIHNuLlNldExpZ2h0UmFkaXVzKGFrTGlnaHQsIGFmUmFkaXVzKTsgfTtcclxuLy9TZXRzIGxpZ2h0IGNvbG9yIHVzaW5nIFJHQiBhcnJheSBbMC0yNTVdLiBBcnJheSBtdXN0IGNvbnRhaW4gMyBlbGVtZW50cyAocixnLGIpLlxyXG5leHBvcnQgdmFyIFNldExpZ2h0UkdCID0gZnVuY3Rpb24gKGFrTGlnaHQsIGFpUkdCKSB7IHJldHVybiBzbi5TZXRMaWdodFJHQihha0xpZ2h0LCBhaVJHQik7IH07XHJcbi8vc2V0cyBkZXB0aCBiaWFzIG9uIGxpZ2h0IHJlZmVyZW5jZS4gQ3JlYXRlcyBuZXcgZGVwdGggYmlhcyBleHRyYWRhdGEgb24gbGlnaHRzIHRoYXQgZG9uJ3QgaGF2ZSBpdCBzZXQuXHJcbmV4cG9ydCB2YXIgU2V0TGlnaHRTaGFkb3dEZXB0aEJpYXMgPSBmdW5jdGlvbiAoYWtMaWdodE9iamVjdCwgYWZEZXB0aEJpYXMpIHsgcmV0dXJuIHNuLlNldExpZ2h0U2hhZG93RGVwdGhCaWFzKGFrTGlnaHRPYmplY3QsIGFmRGVwdGhCaWFzKTsgfTtcclxuLy9TZXRzIGxpZ2h0IHR5cGUuIERvZXMgbm90IHBlcnNpc3QgYmV0d2VlbiBzZXNzaW9ucy5cclxuZXhwb3J0IHZhciBTZXRMaWdodFR5cGUgPSBmdW5jdGlvbiAoYWtMaWdodCwgYWlMaWdodFR5cGUpIHsgcmV0dXJuIHNuLlNldExpZ2h0VHlwZShha0xpZ2h0LCBhaUxpZ2h0VHlwZSk7IH07XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vL0xPQ0FUSU9OXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLy0tLS0tLS1cclxuLy9HRVRURVJTXHJcbi8vLS0tLS0tLVxyXG4vL0dldCBwYXJlbnQgbG9jYXRpb24uXHJcbmV4cG9ydCB2YXIgR2V0UGFyZW50TG9jYXRpb24gPSBmdW5jdGlvbiAoYWtMb2MpIHsgcmV0dXJuIHNuLkdldFBhcmVudExvY2F0aW9uKGFrTG9jKTsgfTtcclxuLy8tLS0tLS0tXHJcbi8vU0VUVEVSU1xyXG4vLy0tLS0tLS1cclxuLy9TZXQgcGFyZW50IGxvY2F0aW9uLlxyXG5leHBvcnQgdmFyIFNldFBhcmVudExvY2F0aW9uID0gZnVuY3Rpb24gKGFrTG9jLCBha05ld0xvYykgeyByZXR1cm4gc24uU2V0UGFyZW50TG9jYXRpb24oYWtMb2MsIGFrTmV3TG9jKTsgfTtcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vTUFHSUMgRUZGRUNUU1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8tLS0tLS0tLS1cclxuLy9HRVRURVJTXHJcbi8vLS0tLS0tLS0tXHJcbi8vR2V0cyBhc3NvY2lhdGVkIGZvcm0gKExpZ2h0IGZvciBMaWdodCBzcGVsbHMsIEFjdG9yIGZvciBTdW1tb24gQ3JlYXR1cmUuLi4pLCBpZiBhbnlcclxuZXhwb3J0IHZhciBHZXRBc3NvY2lhdGVkRm9ybSA9IGZ1bmN0aW9uIChha01hZ2ljRWZmZWN0KSB7IHJldHVybiBzbi5HZXRBc3NvY2lhdGVkRm9ybShha01hZ2ljRWZmZWN0KTsgfTtcclxuLyoqIEVGRkVDVCBBUkNIRVRZUEVTXHJcbiAgICAgICAgVmFsdWVNb2QgPSAwXHJcbiAgICAgICAgU2NyaXB0ID0gMVxyXG4gICAgICAgIERpc3BlbCA9IDJcclxuICAgICAgICBDdXJlRGlzZWFzZSA9IDNcclxuICAgICAgICBBYnNvcmIgPSA0XHJcbiAgICAgICAgRHVhbFZhbHVlTW9kID0gNVxyXG4gICAgICAgIENhbG0gPSA2XHJcbiAgICAgICAgRGVtb3JhbGl6ZSA9IDdcclxuICAgICAgICBGcmVuenkgPSA4XHJcbiAgICAgICAgRGlzYXJtID0gOVxyXG4gICAgICAgIENvbW1hbmRTdW1tb25lZCA9IDEwXHJcbiAgICAgICAgSW52aXNpYmlsaXR5ID0gMTFcclxuICAgICAgICBMaWdodCA9IDEyXHJcbiAgICAgICAgRGFya25lc3MgPSAxM1xyXG4gICAgICAgIE5pZ2h0RXllID0gMTRcclxuICAgICAgICBMb2NrID0gMTVcclxuICAgICAgICBPcGVuID0gMTZcclxuICAgICAgICBCb3VuZFdlYXBvbiA9IDE3XHJcbiAgICAgICAgU3VtbW9uQ3JlYXR1cmUgPSAxOFxyXG4gICAgICAgIERldGVjdExpZmUgPSAxOVxyXG4gICAgICAgIFRlbGVraW5lc2lzID0gMjBcclxuICAgICAgICBQYXJhbHlzaXMgPSAyMVxyXG4gICAgICAgIFJlYW5pbWF0ZSA9IDIyXHJcbiAgICAgICAgU291bFRyYXAgPSAyM1xyXG4gICAgICAgIFR1cm5VbmRlYWQgPSAyNFxyXG4gICAgICAgIEd1aWRlID0gMjVcclxuICAgICAgICBXZXJld29sZkZlZWQgPSAyNlxyXG4gICAgICAgIEN1cmVQYXJhbHlzaXMgPSAyN1xyXG4gICAgICAgIEN1cmVBZGRpY3Rpb24gPSAyOFxyXG4gICAgICAgIEN1cmVQb2lzb24gPSAyOVxyXG4gICAgICAgIENvbmN1c3Npb24gPSAzMFxyXG4gICAgICAgIFZhbHVlQW5kUGFydHMgPSAzMVxyXG4gICAgICAgIEFjY3VtdWxhdGVNYWduaXR1ZGUgPSAzMlxyXG4gICAgICAgIFN0YWdnZXIgPSAzM1xyXG4gICAgICAgIFBlYWtWYWx1ZU1vZCA9IDM0XHJcbiAgICAgICAgQ2xvYWsgPSAzNVxyXG4gICAgICAgIFdlcmV3b2xmID0gMzZcclxuICAgICAgICBTbG93VGltZSA9IDM3XHJcbiAgICAgICAgUmFsbHkgPSAzOFxyXG4gICAgICAgIEVuaGFuY2VXZWFwb24gPSAzOVxyXG4gICAgICAgIFNwYXduSGF6YXJkID0gNDBcclxuICAgICAgICBFdGhlcmVhbGl6ZSA9IDQxXHJcbiAgICAgICAgQmFuaXNoID0gNDJcclxuICAgICAgICBTcGF3blNjcmlwdGVkUmVmID0gNDNcclxuICAgICAgICBEaXNndWlzZSA9IDQ0XHJcbiAgICAgICAgR3JhYkFjdG9yID0gNDVcclxuICAgICAgICBWYW1waXJlTG9yZCA9IDQ2ICovXHJcbi8vR2V0cyBlZmZlY3QgYXJjaGV0eXBlIG9mIG1hZ2ljZWZmZWN0IGFuZCByZXR1cm5zIGFzIGludCAoMC00NikuXHJcbmV4cG9ydCB2YXIgR2V0RWZmZWN0QXJjaGV0eXBlQXNJbnQgPSBmdW5jdGlvbiAoYWtNYWdpY0VmZmVjdCkgeyByZXR1cm4gc24uR2V0RWZmZWN0QXJjaGV0eXBlQXNJbnQoYWtNYWdpY0VmZmVjdCk7IH07XHJcbi8vR2V0cyBlZmZlY3QgYXJjaGV0eXBlIG9mIG1hZ2ljZWZmZWN0IGFuZCByZXR1cm5zIGFzIFN0cmluZy5cclxuZXhwb3J0IHZhciBHZXRFZmZlY3RBcmNoZXR5cGVBc1N0cmluZyA9IGZ1bmN0aW9uIChha01hZ2ljRWZmZWN0KSB7IHJldHVybiBzbi5HZXRFZmZlY3RBcmNoZXR5cGVBc1N0cmluZyhha01hZ2ljRWZmZWN0KTsgfTtcclxuLy9HZXRzIHByaW1hcnkgYWN0b3IgdmFsdWUgYXMgc3RyaW5nLCBpZiBhbnkgKEZyb3N0UmVzaXN0LCBTcGVlZE11bHQpLlxyXG5leHBvcnQgdmFyIEdldFByaW1hcnlBY3RvclZhbHVlID0gZnVuY3Rpb24gKGFrTWFnaWNFZmZlY3QpIHsgcmV0dXJuIHNuLkdldFByaW1hcnlBY3RvclZhbHVlKGFrTWFnaWNFZmZlY3QpOyB9O1xyXG4vL0dldHMgc2Vjb25kYXJ5IGFjdG9yIHZhbHVlIGFzIHN0cmluZywgaWYgYW55LlxyXG5leHBvcnQgdmFyIEdldFNlY29uZGFyeUFjdG9yVmFsdWUgPSBmdW5jdGlvbiAoYWtNYWdpY0VmZmVjdCkgeyByZXR1cm4gc24uR2V0U2Vjb25kYXJ5QWN0b3JWYWx1ZShha01hZ2ljRWZmZWN0KTsgfTtcclxuLyoqIE1HRUYgU09VTkQgVFlQRVNcclxuICAgICAgICBEcmF3L1NoZWF0aGUgPSAwXHJcbiAgICAgICAgQ2hhcmdlID0gMVxyXG4gICAgICAgIFJlYWR5ID0gMlxyXG4gICAgICAgIFJlbGVhc2UgPSAzXHJcbiAgICAgICAgQ29uY2VudHJhdGlvbiBDYXN0IExvb3AgPSA0XHJcbiAgICAgICAgT24gSGl0ID0gNSAqL1xyXG4vL0dldHMgU291bmQgYXR0YWNoZWQgdG8gaW5kZXggb2YgU291bmQgdHlwZSBzcGVjaWZpZWQgaW4gbWFnaWMgZWZmZWN0LlxyXG5leHBvcnQgdmFyIEdldE1hZ2ljRWZmZWN0U291bmQgPSBmdW5jdGlvbiAoYWtNYWdpY0VmZmVjdCwgYWlUeXBlKSB7XHJcbiAgICByZXR1cm4gc24uR2V0TWFnaWNFZmZlY3RTb3VuZChha01hZ2ljRWZmZWN0LCBhaVR5cGUpO1xyXG59O1xyXG4vLy0tLS0tLS1cclxuLy9TRVRURVJTXHJcbi8vLS0tLS0tLVxyXG4vL1NldHMgYXNzb2NpYXRlZCBmb3JtIChMaWdodCBmb3IgTGlnaHQgc3BlbGxzLCBBY3RvciBmb3IgU3VtbW9uIENyZWF0dXJlLi4uKS4gQ2FuIGJlIE5vbmVcclxuZXhwb3J0IHZhciBTZXRBc3NvY2lhdGVkRm9ybSA9IGZ1bmN0aW9uIChha01hZ2ljRWZmZWN0LCBha0Zvcm0pIHsgcmV0dXJuIHNuLlNldEFzc29jaWF0ZWRGb3JtKGFrTWFnaWNFZmZlY3QsIGFrRm9ybSk7IH07XHJcbi8vU2V0cyBzb3VuZCBkZXNjcmlwdG9yIGF0dGFjaGVkIHRvIGluZGV4IG9mIFNvdW5kIHR5cGUgc3BlY2lmaWVkIGluIG1hZ2ljIGVmZmVjdC5cclxuZXhwb3J0IHZhciBTZXRNYWdpY0VmZmVjdFNvdW5kID0gZnVuY3Rpb24gKGFrTWFnaWNFZmZlY3QsIGFrU291bmREZXNjcmlwdG9yLCBhaVR5cGUpIHsgcmV0dXJuIHNuLlNldE1hZ2ljRWZmZWN0U291bmQoYWtNYWdpY0VmZmVjdCwgYWtTb3VuZERlc2NyaXB0b3IsIGFpVHlwZSk7IH07XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vL09CSkVDVFJFRkVSRU5DRVNcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vLS0tLS0tLS1cclxuLy9HRVRURVJTXHJcbi8vLS0tLS0tLS1cclxuLy9BZGRzIGFsbCBpbnZlbnRvcnkgaXRlbXMgdG8gYXJyYXksIGZpbHRlcmluZyBvdXQgZXF1aXBwZWQsIGZhdm91cml0ZWQgYW5kIHF1ZXN0IGl0ZW1zLlxyXG5leHBvcnQgdmFyIEFkZEFsbEl0ZW1zVG9BcnJheSA9IGZ1bmN0aW9uIChha1JlZiwgYWJOb0VxdWlwcGVkLCBhYk5vRmF2b3JpdGVkLCBhYk5vUXVlc3RJdGVtKSB7XHJcbiAgICBpZiAoYWJOb0VxdWlwcGVkID09PSB2b2lkIDApIHsgYWJOb0VxdWlwcGVkID0gdHJ1ZTsgfVxyXG4gICAgaWYgKGFiTm9GYXZvcml0ZWQgPT09IHZvaWQgMCkgeyBhYk5vRmF2b3JpdGVkID0gZmFsc2U7IH1cclxuICAgIGlmIChhYk5vUXVlc3RJdGVtID09PSB2b2lkIDApIHsgYWJOb1F1ZXN0SXRlbSA9IGZhbHNlOyB9XHJcbiAgICByZXR1cm4gc24uQWRkQWxsSXRlbXNUb0FycmF5KGFrUmVmLCBhYk5vRXF1aXBwZWQsIGFiTm9GYXZvcml0ZWQsIGFiTm9RdWVzdEl0ZW0pO1xyXG59O1xyXG4vL0FkZHMgYWxsIGludmVudG9yeSBpdGVtcyB0byBmb3JtbGlzdCwgZmlsdGVyaW5nIG91dCBlcXVpcHBlZCwgZmF2b3VyaXRlZCBhbmQgcXVlc3QgaXRlbXMuXHJcbmV4cG9ydCB2YXIgQWRkQWxsSXRlbXNUb0xpc3QgPSBmdW5jdGlvbiAoYWtSZWYsIGFrTGlzdCwgYWJOb0VxdWlwcGVkLCBhYk5vRmF2b3JpdGVkLCBhYk5vUXVlc3RJdGVtKSB7XHJcbiAgICBpZiAoYWJOb0VxdWlwcGVkID09PSB2b2lkIDApIHsgYWJOb0VxdWlwcGVkID0gdHJ1ZTsgfVxyXG4gICAgaWYgKGFiTm9GYXZvcml0ZWQgPT09IHZvaWQgMCkgeyBhYk5vRmF2b3JpdGVkID0gZmFsc2U7IH1cclxuICAgIGlmIChhYk5vUXVlc3RJdGVtID09PSB2b2lkIDApIHsgYWJOb1F1ZXN0SXRlbSA9IGZhbHNlOyB9XHJcbiAgICByZXR1cm4gc24uQWRkQWxsSXRlbXNUb0xpc3QoYWtSZWYsIGFrTGlzdCwgYWJOb0VxdWlwcGVkLCBhYk5vRmF2b3JpdGVkLCBhYk5vUXVlc3RJdGVtKTtcclxufTtcclxuLy9BZGRzIGludmVudG9yeSBpdGVtcyBtYXRjaGluZyBmb3JtdHlwZSB0byBhcnJheSwgZmlsdGVyaW5nIG91dCBlcXVpcHBlZCwgZmF2b3VyaXRlZCBhbmQgcXVlc3QgaXRlbXMuXHJcbmV4cG9ydCB2YXIgQWRkSXRlbXNPZlR5cGVUb0FycmF5ID0gZnVuY3Rpb24gKGFrUmVmLCBhaUZvcm1UeXBlLCBhYk5vRXF1aXBwZWQsIGFiTm9GYXZvcml0ZWQsIGFiTm9RdWVzdEl0ZW0pIHtcclxuICAgIGlmIChhYk5vRXF1aXBwZWQgPT09IHZvaWQgMCkgeyBhYk5vRXF1aXBwZWQgPSB0cnVlOyB9XHJcbiAgICBpZiAoYWJOb0Zhdm9yaXRlZCA9PT0gdm9pZCAwKSB7IGFiTm9GYXZvcml0ZWQgPSBmYWxzZTsgfVxyXG4gICAgaWYgKGFiTm9RdWVzdEl0ZW0gPT09IHZvaWQgMCkgeyBhYk5vUXVlc3RJdGVtID0gZmFsc2U7IH1cclxuICAgIHJldHVybiBzbi5BZGRJdGVtc09mVHlwZVRvQXJyYXkoYWtSZWYsIGFpRm9ybVR5cGUsIGFiTm9FcXVpcHBlZCwgYWJOb0Zhdm9yaXRlZCwgYWJOb1F1ZXN0SXRlbSk7XHJcbn07XHJcbi8vQWRkcyBpbnZlbnRvcnkgaXRlbXMgbWF0Y2hpbmcgZm9ybXR5cGUgdG8gZm9ybWxpc3QsIGZpbHRlcmluZyBvdXQgZXF1aXBwZWQsIGZhdm91cml0ZWQgYW5kIHF1ZXN0IGl0ZW1zLlxyXG5leHBvcnQgdmFyIEFkZEl0ZW1zT2ZUeXBlVG9MaXN0ID0gZnVuY3Rpb24gKGFrUmVmLCBha0xpc3QsIGFpRm9ybVR5cGUsIGFiTm9FcXVpcHBlZCwgYWJOb0Zhdm9yaXRlZCwgYWJOb1F1ZXN0SXRlbSkge1xyXG4gICAgaWYgKGFiTm9FcXVpcHBlZCA9PT0gdm9pZCAwKSB7IGFiTm9FcXVpcHBlZCA9IHRydWU7IH1cclxuICAgIGlmIChhYk5vRmF2b3JpdGVkID09PSB2b2lkIDApIHsgYWJOb0Zhdm9yaXRlZCA9IGZhbHNlOyB9XHJcbiAgICBpZiAoYWJOb1F1ZXN0SXRlbSA9PT0gdm9pZCAwKSB7IGFiTm9RdWVzdEl0ZW0gPSBmYWxzZTsgfVxyXG4gICAgcmV0dXJuIHNuLkFkZEl0ZW1zT2ZUeXBlVG9MaXN0KGFrUmVmLCBha0xpc3QsIGFpRm9ybVR5cGUsIGFiTm9FcXVpcHBlZCwgYWJOb0Zhdm9yaXRlZCwgYWJOb1F1ZXN0SXRlbSk7XHJcbn07XHJcbi8vRmluZHMgYWxsIHJlZmVyZW5jZXMgb2YgZm9ybSB0eXBlIGluIGxvYWRlZCBjZWxscywgd2l0aGluIHJhZGl1cyBmcm9tIHJlZi4gSWYgYWZSYWRpdXMgaXMgMCwgaXQgd2lsbCBnZXQgYWxsIHJlZmVyZW5jZXMgZnJvbSBhbGwgYXR0YWNoZWQgY2VsbHNcclxuZXhwb3J0IHZhciBGaW5kQWxsUmVmZXJlbmNlc09mRm9ybVR5cGUgPSBmdW5jdGlvbiAoYWtSZWYsIGZvcm1UeXBlLCBhZlJhZGl1cykge1xyXG4gICAgcmV0dXJuIHNuLkZpbmRBbGxSZWZlcmVuY2VzT2ZGb3JtVHlwZShha1JlZiwgZm9ybVR5cGUsIGFmUmFkaXVzKTtcclxufTtcclxuLy9GaW5kIGFsbCByZWZlcmVuY2VzIHdpdGgga2V5d29yZCBpbiBsb2FkZWQgY2VsbHMsIHdpdGhpbiByYWRpdXMgZnJvbSByZWYuIElmIGFmUmFkaXVzIGlzIDAsIGl0IHdpbGwgZ2V0IGFsbCByZWZlcmVuY2VzIGZyb20gYWxsIGF0dGFjaGVkIGNlbGxzXHJcbmV4cG9ydCB2YXIgRmluZEFsbFJlZmVyZW5jZXNXaXRoS2V5d29yZCA9IGZ1bmN0aW9uIChha1JlZiwga2V5d29yZE9yTGlzdCwgYWZSYWRpdXMsIGFiTWF0Y2hBbGwpIHtcclxuICAgIHJldHVybiBzbi5GaW5kQWxsUmVmZXJlbmNlc1dpdGhLZXl3b3JkKGFrUmVmLCBrZXl3b3JkT3JMaXN0LCBhZlJhZGl1cywgYWJNYXRjaEFsbCk7XHJcbn07XHJcbi8vRmluZCBhbGwgcmVmZXJlbmNlcyBtYXRjaGluZyBiYXNlIGZvcm0vaW4gZm9ybWxpc3QsIHdpdGhpbiByYWRpdXMgZnJvbSByZWYuIElmIGFmUmFkaXVzIGlzIDAsIGl0IHdpbGwgZ2V0IGFsbCByZWZlcmVuY2VzIGZyb20gYWxsIGF0dGFjaGVkIGNlbGxzXHJcbmV4cG9ydCB2YXIgRmluZEFsbFJlZmVyZW5jZXNPZlR5cGUgPSBmdW5jdGlvbiAoYWtSZWYsIGFrRm9ybU9yTGlzdCwgYWZSYWRpdXMpIHtcclxuICAgIHJldHVybiBzbi5GaW5kQWxsUmVmZXJlbmNlc09mVHlwZShha1JlZiwgYWtGb3JtT3JMaXN0LCBhZlJhZGl1cyk7XHJcbn07XHJcbi8vR2V0cyB0aGUgZmlyc3QgaXRlbSBpbiBpbnZlbnRvcnkgdGhhdCBleGlzdHMgaW4gZm9ybWxpc3QuXHJcbmV4cG9ydCB2YXIgRmluZEZpcnN0SXRlbUluTGlzdCA9IGZ1bmN0aW9uIChha1JlZiwgYWtMaXN0KSB7IHJldHVybiBzbi5GaW5kRmlyc3RJdGVtSW5MaXN0KGFrUmVmLCBha0xpc3QpOyB9O1xyXG4vL0dldHMgYWN0aXZhdGUgY2hpbGRyZW4gLSBzZWUgSXNBY3RpdmF0ZUNoaWxkXHJcbmV4cG9ydCB2YXIgR2V0QWN0aXZhdGVDaGlsZHJlbiA9IGZ1bmN0aW9uIChha1JlZikgeyByZXR1cm4gc24uR2V0QWN0aXZhdGVDaGlsZHJlbihha1JlZik7IH07XHJcbi8vR2V0cyBjdXJyZW50IGdhbWVicnlvIGFuaW1hdGlvblxyXG5leHBvcnQgdmFyIEdldEFjdGl2ZUdhbWVicnlvQW5pbWF0aW9uID0gZnVuY3Rpb24gKGFrUmVmKSB7IHJldHVybiBzbi5HZXRBY3RpdmVHYW1lYnJ5b0FuaW1hdGlvbihha1JlZik7IH07XHJcbi8vR2V0cyBhY3RvciByZXNwb25zaWJsZSBmb3Igb2JqZWN0LlxyXG5leHBvcnQgdmFyIEdldEFjdG9yQ2F1c2UgPSBmdW5jdGlvbiAoYWtSZWYpIHsgcmV0dXJuIHNuLkdldEFjdG9yQ2F1c2UoYWtSZWYpOyB9O1xyXG4vL0dldCBhbGwgYXJ0IG9iamVjdHMgYXR0YWNoZWQgdG8gdGhpcyBvYmplY3QuXHJcbmV4cG9ydCB2YXIgR2V0QWxsQXJ0T2JqZWN0cyA9IGZ1bmN0aW9uIChha1JlZikgeyByZXR1cm4gc24uR2V0QWxsQXJ0T2JqZWN0cyhha1JlZik7IH07XHJcbi8vR2V0IGFsbCBlZmZlY3Qgc2hhZGVycyBhdHRhY2hlZCB0byB0aGlzIG9iamVjdC5cclxuZXhwb3J0IHZhciBHZXRBbGxFZmZlY3RTaGFkZXJzID0gZnVuY3Rpb24gKGFrUmVmKSB7IHJldHVybiBzbi5HZXRBbGxFZmZlY3RTaGFkZXJzKGFrUmVmKTsgfTtcclxuLy9HZXRzIGNsb3Nlc3QgYWN0b3IgdG8gcmVmICh3aXRob3V0IHJldHVybmluZyB0aGUgcmVmZXJlbmNlIGl0c2VsZikuXHJcbmV4cG9ydCB2YXIgR2V0Q2xvc2VzdEFjdG9yRnJvbVJlZiA9IGZ1bmN0aW9uIChha1JlZiwgYWJJZ25vcmVQbGF5ZXIpIHsgcmV0dXJuIHNuLkdldENsb3Nlc3RBY3RvckZyb21SZWYoYWtSZWYsIGFiSWdub3JlUGxheWVyKTsgfTtcclxuLy9HZXRzIGR1cmF0aW9uIG9mIHRoZSBlZmZlY3RzaGFkZXIgb24gdGhlIHJlZi5cclxuZXhwb3J0IHZhciBHZXRFZmZlY3RTaGFkZXJEdXJhdGlvbiA9IGZ1bmN0aW9uIChha1JlZiwgYWtTaGFkZXIpIHsgcmV0dXJuIHNuLkdldEVmZmVjdFNoYWRlckR1cmF0aW9uKGFrUmVmLCBha1NoYWRlcik7IH07XHJcbi8vR2V0cyB0aGUgZG9vciB3aGljaCBpcyBsaW5rZWQgdG8gdGhpcyBsb2FkIGRvb3IuXHJcbmV4cG9ydCB2YXIgR2V0RG9vckRlc3RpbmF0aW9uID0gZnVuY3Rpb24gKGFrUmVmKSB7IHJldHVybiBzbi5HZXREb29yRGVzdGluYXRpb24oYWtSZWYpOyB9O1xyXG4vL0dldHMgYWxsIHJlZnMgbGlua2VkIHRvIGFrUmVmLiBLZXl3b3JkIG9wdGlvbmFsLlxyXG5leHBvcnQgdmFyIEdldExpbmtlZENoaWxkcmVuID0gZnVuY3Rpb24gKGFrUmVmLCBha0tleXdvcmQpIHsgcmV0dXJuIHNuLkdldExpbmtlZENoaWxkcmVuKGFrUmVmLCBha0tleXdvcmQpOyB9O1xyXG4vL0dldHMgdGhlIHNvdXJjZSBvZiB0aGUgbWFnaWMgZWZmZWN0IChzcGVsbC9lbmNoYW50bWVudC9zY3JvbGwgZXRjKSBhbmQgdGhlIGNhc3Rlci4gTWFnaWMgZWZmZWN0IG11c3QgYmUgcHJlc2VudCBvbiB0aGUgcmVmZXJlbmNlLlxyXG5leHBvcnQgdmFyIEdldE1hZ2ljRWZmZWN0U291cmNlID0gZnVuY3Rpb24gKGFrUmVmLCBha0VmZmVjdCkgeyByZXR1cm4gc24uR2V0TWFnaWNFZmZlY3RTb3VyY2UoYWtSZWYsIGFrRWZmZWN0KTsgfTtcclxuLyoqIE1BVEVSSUFMIFRZUEVTIC0gU3RyaW5nXHJcbiAgICAgICAgU3RvbmVCcm9rZW5cclxuICAgICAgICBCbG9ja0JsYWRlMUhhbmRcclxuICAgICAgICBNZWF0XHJcbiAgICAgICAgQ2FycmlhZ2VXaGVlbFxyXG4gICAgICAgIE1ldGFsTGlnaHRcclxuICAgICAgICBXb29kTGlnaHRcclxuICAgICAgICBTbm93XHJcbiAgICAgICAgR3JhdmVsXHJcbiAgICAgICAgQ2hhaW5NZXRhbFxyXG4gICAgICAgIEJvdHRsZVxyXG4gICAgICAgIFdvb2RcclxuICAgICAgICBBc2hcclxuICAgICAgICBTa2luXHJcbiAgICAgICAgQmxvY2tCbHVudFxyXG4gICAgICAgIERMQzFEZWVyU2tpblxyXG4gICAgICAgIEluc2VjdFxyXG4gICAgICAgIEJhcnJlbFxyXG4gICAgICAgIENlcmFtaWNNZWRpdW1cclxuICAgICAgICBCYXNrZXRcclxuICAgICAgICBJY2VcclxuICAgICAgICBHbGFzc1N0YWlyc1xyXG4gICAgICAgIFN0b25lU3RhaXJzXHJcbiAgICAgICAgV2F0ZXJcclxuICAgICAgICBEcmF1Z3JTa2VsZXRvblxyXG4gICAgICAgIEJsYWRlMUhhbmRcclxuICAgICAgICBCb29rXHJcbiAgICAgICAgQ2FycGV0XHJcbiAgICAgICAgTWV0YWxTb2xpZFxyXG4gICAgICAgIEF4ZTFIYW5kXHJcbiAgICAgICAgQmxvY2tCbGFkZTJIYW5kXHJcbiAgICAgICAgT3JnYW5pY0xhcmdlXHJcbiAgICAgICAgQW11bGV0XHJcbiAgICAgICAgV29vZFN0YWlyc1xyXG4gICAgICAgIE11ZFxyXG4gICAgICAgIEJvdWxkZXJTbWFsbFxyXG4gICAgICAgIFNub3dTdGFpcnNcclxuICAgICAgICBTdG9uZUhlYXZ5XHJcbiAgICAgICAgRHJhZ29uU2tlbGV0b25cclxuICAgICAgICBUcmFwXHJcbiAgICAgICAgQm93c1N0YXZlc1xyXG4gICAgICAgIEFsZHVpblxyXG4gICAgICAgIEJsb2NrQm93c1N0YXZlc1xyXG4gICAgICAgIFdvb2RBc1N0YWlyc1xyXG4gICAgICAgIFN0ZWVsR3JlYXRTd29yZFxyXG4gICAgICAgIEdyYXNzXHJcbiAgICAgICAgQm91bGRlckxhcmdlXHJcbiAgICAgICAgU3RvbmVBc1N0YWlyc1xyXG4gICAgICAgIEJsYWRlMkhhbmRcclxuICAgICAgICBCb3R0bGVTbWFsbFxyXG4gICAgICAgIEJvbmVBY3RvclxyXG4gICAgICAgIFNhbmRcclxuICAgICAgICBNZXRhbEhlYXZ5XHJcbiAgICAgICAgRExDMVNhYnJlQ2F0UGVsdFxyXG4gICAgICAgIEljZUZvcm1cclxuICAgICAgICBEcmFnb25cclxuICAgICAgICBCbGFkZTFIYW5kU21hbGxcclxuICAgICAgICBTa2luU21hbGxcclxuICAgICAgICBQb3RzUGFuc1xyXG4gICAgICAgIFNraW5Ta2VsZXRvblxyXG4gICAgICAgIEJsdW50MUhhbmRcclxuICAgICAgICBTdG9uZVN0YWlyc0Jyb2tlblxyXG4gICAgICAgIFNraW5MYXJnZVxyXG4gICAgICAgIE9yZ2FuaWNcclxuICAgICAgICBCb25lXHJcbiAgICAgICAgV29vZEhlYXZ5XHJcbiAgICAgICAgQ2hhaW5cclxuICAgICAgICBEaXJ0XHJcbiAgICAgICAgR2hvc3RcclxuICAgICAgICBTa2luTWV0YWxMYXJnZVxyXG4gICAgICAgIEJsb2NrQXhlXHJcbiAgICAgICAgQXJtb3JMaWdodFxyXG4gICAgICAgIFNoaWVsZExpZ2h0XHJcbiAgICAgICAgQ29pblxyXG4gICAgICAgIEJsb2NrQmx1bnQySGFuZFxyXG4gICAgICAgIFNoaWVsZEhlYXZ5XHJcbiAgICAgICAgQXJtb3JIZWF2eVxyXG4gICAgICAgIEFycm93XHJcbiAgICAgICAgR2xhc3NcclxuICAgICAgICBTdG9uZVxyXG4gICAgICAgIFdhdGVyUHVkZGxlXHJcbiAgICAgICAgQ2xvdGhcclxuICAgICAgICBTa2luTWV0YWxTbWFsbFxyXG4gICAgICAgIFdhcmRcclxuICAgICAgICBXZWJcclxuICAgICAgICBUcmFpbGVyU3RlZWxTd29yZFxyXG4gICAgICAgIEJsdW50MkhhbmRcclxuICAgICAgICBETEMxU3dpbmdpbmdCcmlkZ2VcclxuICAgICAgICBCb3VsZGVyTWVkaXVtICovXHJcbi8vR2V0cyB0aGUgc3BlY2lmaWVkIGNvbGxpc2lvbiBzaGFwZSdzIGhhdm9rIG1hdGVyaWFsIHR5cGVzIGFzIHN0cmluZyBhcnJheS4gUmV0dXJucyB0aGUgZmlyc3QgbWF0ZXJpYWwgdHlwZSBpZiBub2RlTmFtZSBpcyBlbXB0eVxyXG5leHBvcnQgdmFyIEdldE1hdGVyaWFsVHlwZSA9IGZ1bmN0aW9uIChha1JlZiwgYXNOb2RlTmFtZSkge1xyXG4gICAgaWYgKGFzTm9kZU5hbWUgPT09IHZvaWQgMCkgeyBhc05vZGVOYW1lID0gXCJcIjsgfVxyXG4gICAgcmV0dXJuIHNuLkdldE1hdGVyaWFsVHlwZShha1JlZiwgYXNOb2RlTmFtZSk7XHJcbn07XHJcbi8vR2V0cyB0aGUgbW90aW9uIHR5cGUgb2YgdGhlIG9iamVjdCAoc2VlIHZhbmlsbGEgU2V0TW90aW9uVHlwZSBmb3IgdHlwZXMpLiBSZXR1cm5zIC0xIGlmIDNkIGlzIG5vdCBsb2FkZWRcclxuZXhwb3J0IHZhciBHZXRNb3Rpb25UeXBlID0gZnVuY3Rpb24gKGFrUmVmKSB7IHJldHVybiBzbi5HZXRNb3Rpb25UeXBlKGFrUmVmKTsgfTtcclxuLy9HZXRzIHJhbmRvbSBhY3RvciBuZWFyIHJlZiAod2l0aG91dCByZXR1cm5pbmcgdGhlIHJlZmVyZW5jZSBpdHNlbGYpLlxyXG5leHBvcnQgdmFyIEdldFJhbmRvbUFjdG9yRnJvbVJlZiA9IGZ1bmN0aW9uIChha1JlZiwgYWZSYWRpdXMsIGFiSWdub3JlUGxheWVyKSB7XHJcbiAgICByZXR1cm4gc24uR2V0UmFuZG9tQWN0b3JGcm9tUmVmKGFrUmVmLCBhZlJhZGl1cywgYWJJZ25vcmVQbGF5ZXIpO1xyXG59O1xyXG4vL0dldHMgcXVlc3QgaXRlbXMgaW4gdGhpcyByZWYncyBpbnZlbnRvcnksIGlmIGFueVxyXG5leHBvcnQgdmFyIEdldFF1ZXN0SXRlbXMgPSBmdW5jdGlvbiAoYWtSZWYsIGFiTm9FcXVpcHBlZCwgYWJOb0Zhdm9yaXRlZCkge1xyXG4gICAgaWYgKGFiTm9FcXVpcHBlZCA9PT0gdm9pZCAwKSB7IGFiTm9FcXVpcHBlZCA9IGZhbHNlOyB9XHJcbiAgICBpZiAoYWJOb0Zhdm9yaXRlZCA9PT0gdm9pZCAwKSB7IGFiTm9GYXZvcml0ZWQgPSBmYWxzZTsgfVxyXG4gICAgcmV0dXJuIHNuLkdldFF1ZXN0SXRlbXMoYWtSZWYsIGFiTm9FcXVpcHBlZCwgYWJOb0Zhdm9yaXRlZCk7XHJcbn07XHJcbi8vR2V0IGFsbCBhbGlhc2VzIGNvbnRhaW5pbmcgdGhpcyByZWZcclxuZXhwb3J0IHZhciBHZXRSZWZBbGlhc2VzID0gZnVuY3Rpb24gKGFrUmVmKSB7IHJldHVybiBzbi5HZXRSZWZBbGlhc2VzKGFrUmVmKTsgfTtcclxuLy9SZXR1cm5zIHRoZSBzaXplIG9mIHRoZSBzdG9yZWQgc291bCBpbiBhIHNvdWxnZW0gb2JqZWN0cmVmZXJlbmNlXHJcbmV4cG9ydCB2YXIgR2V0U3RvcmVkU291bFNpemUgPSBmdW5jdGlvbiAoYWtSZWYpIHsgcmV0dXJuIHNuLkdldFN0b3JlZFNvdWxTaXplKGFrUmVmKTsgfTtcclxuLy9SZXR1cm5zIHRoZSBudW1iZXIgb2YgaW5zdGFuY2VzIG9mIHRoZSBzcGVjaWZpZWQgYXJ0IG9iamVjdCAoYXR0YWNoZWQgdXNpbmcgdmlzdWFsIGVmZmVjdHMpIG9uIHRoZSByZWZlcmVuY2UuXHJcbmV4cG9ydCB2YXIgSGFzQXJ0T2JqZWN0ID0gZnVuY3Rpb24gKGFrUmVmLCBha0FydE9iamVjdCwgYWJBY3RpdmUpIHtcclxuICAgIGlmIChhYkFjdGl2ZSA9PT0gdm9pZCAwKSB7IGFiQWN0aXZlID0gZmFsc2U7IH1cclxuICAgIHJldHVybiBzbi5IYXNBcnRPYmplY3QoYWtSZWYsIGFrQXJ0T2JqZWN0LCBhYkFjdGl2ZSk7XHJcbn07XHJcbi8vUmV0dXJucyB0aGUgbnVtYmVyIG9mIGluc3RhbmNlcyBvZiB0aGUgc3BlY2lmaWVkIGVmZmVjdCBzaGFkZXIgb24gdGhlIHJlZmVyZW5jZS5cclxuZXhwb3J0IHZhciBIYXNFZmZlY3RTaGFkZXIgPSBmdW5jdGlvbiAoYWtSZWYsIGFrU2hhZGVyLCBhYkFjdGl2ZSkge1xyXG4gICAgaWYgKGFiQWN0aXZlID09PSB2b2lkIDApIHsgYWJBY3RpdmUgPSBmYWxzZTsgfVxyXG4gICAgcmV0dXJuIHNuLkhhc0VmZmVjdFNoYWRlcihha1JlZiwgYWtTaGFkZXIsIGFiQWN0aXZlKTtcclxufTtcclxuLy9SZXR1cm5zIHdoZXRoZXIgdGhlIHJlZmVyZW5jZSBoYXMgbmlleHRyYWRhdGEgKGF0dGFjaGVkIHRvIHJvb3QgM0Qgbm9kZSkuIFBhcnRpYWwgbWF0Y2hlcyBhY2NlcHRlZC5cclxuZXhwb3J0IHZhciBIYXNOaUV4dHJhRGF0YSA9IGZ1bmN0aW9uIChha1JlZiwgYXNOYW1lKSB7IHJldHVybiBzbi5IYXNOaUV4dHJhRGF0YShha1JlZiwgYXNOYW1lKTsgfTtcclxuLy9JcyBkb29yIGEgbG9hZCBkb29yP1xyXG5leHBvcnQgdmFyIElzTG9hZERvb3IgPSBmdW5jdGlvbiAoYWtSZWYpIHsgcmV0dXJuIHNuLklzTG9hZERvb3IoYWtSZWYpOyB9O1xyXG4vL0lzIGEgcXVlc3Qgb2JqZWN0P1xyXG5leHBvcnQgdmFyIElzUXVlc3RJdGVtID0gZnVuY3Rpb24gKGFrUmVmKSB7IHJldHVybiBzbi5Jc1F1ZXN0SXRlbShha1JlZik7IH07XHJcbi8vSXMgYSBWSVAgKGFjdG9yIHRoYXQgaXMgbmVlZGVkIGJ5IHF1ZXN0KT9cclxuZXhwb3J0IHZhciBJc1ZJUCA9IGZ1bmN0aW9uIChha1JlZikge1xyXG4gICAgcmV0dXJuIHNuLklzVklQKGFrUmVmKTtcclxufTtcclxuLy8tLS0tLS0tXHJcbi8vU0VUVEVSU1xyXG4vLy0tLS0tLS1cclxuLy9BcHBsaWVzIG1hdGVyaWFsIHNoYWRlciB0byByZWZlcmVuY2UgKGRvZXNuJ3QgaGF2ZSB0byBiZSBzdGF0aWMpXHJcbmV4cG9ydCB2YXIgQXBwbHlNYXRlcmlhbFNoYWRlciA9IGZ1bmN0aW9uIChha1JlZiwgYWtNYXRPYmplY3QsIGRpcmVjdGlvbmFsVGhyZXNob2xkQW5nbGUpIHtcclxuICAgIHJldHVybiBzbi5BcHBseU1hdGVyaWFsU2hhZGVyKGFrUmVmLCBha01hdE9iamVjdCwgZGlyZWN0aW9uYWxUaHJlc2hvbGRBbmdsZSk7XHJcbn07XHJcbi8vV3JhcHBlciBmdW5jdGlvbiBmb3IgQWRkS2V5d29yZFRvRm9ybS5cclxuZXhwb3J0IHZhciBBZGRLZXl3b3JkVG9SZWYgPSBmdW5jdGlvbiAoYWtSZWYsIGFrS2V5d29yZCkgeyByZXR1cm4gc24uQWRkS2V5d29yZFRvUmVmKGFrUmVmLCBha0tleXdvcmQpOyB9O1xyXG4vL1NuYXBzIHRoZSBvYmplY3QgdG8gdGhlIG5lYXJlc3QgbmF2bWVzaCBwb2ludCBjbG9zZXN0IHRvIGl0cyBjdXJyZW50IHBvc2l0aW9uIGluIHRoZSBjZWxsLlxyXG5leHBvcnQgdmFyIE1vdmVUb05lYXJlc3ROYXZtZXNoTG9jYXRpb24gPSBmdW5jdGlvbiAoYWtSZWYpIHsgcmV0dXJuIHNuLk1vdmVUb05lYXJlc3ROYXZtZXNoTG9jYXRpb24oYWtSZWYpOyB9O1xyXG4vL1dyYXBwZXIgZnVuY3Rpb24gZm9yIFJlbW92ZUtleXdvcmRGcm9tRm9ybS5cclxuZXhwb3J0IHZhciBSZW1vdmVLZXl3b3JkRnJvbVJlZiA9IGZ1bmN0aW9uIChha1JlZiwgYWtLZXl3b3JkKSB7IHJldHVybiBzbi5SZW1vdmVLZXl3b3JkRnJvbVJlZihha1JlZiwgYWtLZXl3b3JkKTsgfTtcclxuLy9XcmFwcGVyIGZ1bmN0aW9uIGZvciBSZXBsYWNlS2V5d29yZE9uRm9ybS5cclxuZXhwb3J0IHZhciBSZXBsYWNlS2V5d29yZE9uUmVmID0gZnVuY3Rpb24gKGFrUmVmLCBha0tleXdvcmRBZGQsIGFrS2V5d29yZFJlbW92ZSkgeyByZXR1cm4gc24uUmVwbGFjZUtleXdvcmRPblJlZihha1JlZiwgYWtLZXl3b3JkQWRkLCBha0tleXdvcmRSZW1vdmUpOyB9O1xyXG4vL1BsYXlzIGRlYnVnIHNoYWRlciBvbiB0aGUgcmVmZXJlbmNlLCB3aXRoIG5vcm1hbGlzZWQgUkdCQSBjb2xvciAob3IgZnVsbHkgd2hpdGUgaWYgZW1wdHkpXHJcbmV4cG9ydCB2YXIgUGxheURlYnVnU2hhZGVyID0gZnVuY3Rpb24gKGFrUmVmLCBhZlJHQkEpIHsgcmV0dXJuIHNuLlBsYXlEZWJ1Z1NoYWRlcihha1JlZiwgYWZSR0JBKTsgfTtcclxuLy9TY2FsZXMgbm9kZSAmIGNvbGxpc2lvbiAoYmhrQm94U2hhcGUsIGJoa1NwaGVyZVNoYXBlKS4gRW50aXJlIG5pZiB3aWxsIGJlIHNjYWxlZCBpZiBzdHJpbmcgaXMgZW1wdHkuIENvbGxpc2lvbiBoYXMgdG8gYmUgZGlyZWN0bHkgYXR0YWNoZWQgdG8gbmFtZWQgbm9kZXMuXHJcbi8vQWRkcyBcIlBPM19TQ0FMRVwiIG5pZXh0cmFkYXRhIHRvIHJvb3Qgbm9kZS5cclxuZXhwb3J0IHZhciBTY2FsZU9iamVjdDNEID0gZnVuY3Rpb24gKGFrUmVmLCBhc05vZGVOYW1lLCBhZlNjYWxlKSB7IHJldHVybiBzbi5TY2FsZU9iamVjdDNEKGFrUmVmLCBhc05vZGVOYW1lLCBhZlNjYWxlKTsgfTtcclxuLy9TZXRzIHRoZSBiYXNlIG9iamVjdCBvZiB0aGlzIHJlZmVyZW5jZSBhbmQgcmVsb2FkcyAzRFxyXG5leHBvcnQgdmFyIFNldEJhc2VPYmplY3QgPSBmdW5jdGlvbiAoYWtSZWYsIGFrQmFzZU9iamVjdCkgeyByZXR1cm4gc24uU2V0QmFzZU9iamVjdChha1JlZiwgYWtCYXNlT2JqZWN0KTsgfTtcclxuLyoqIENPTExJU0lPTiBMQVlFUlNcclxuICAgICAgICBrVW5pZGVudGlmaWVkID0gMCxcclxuICAgICAgICBrU3RhdGljID0gMSxcclxuICAgICAgICBrQW5pbVN0YXRpYyA9IDIsXHJcbiAgICAgICAga1RyYW5zcGFyZW50ID0gMyxcclxuICAgICAgICBrQ2x1dHRlciA9IDQsXHJcbiAgICAgICAga1dlYXBvbiA9IDUsXHJcbiAgICAgICAga1Byb2plY3RpbGUgPSA2LFxyXG4gICAgICAgIGtTcGVsbCA9IDcsXHJcbiAgICAgICAga0JpcGVkID0gOCxcclxuICAgICAgICBrVHJlZXMgPSA5LFxyXG4gICAgICAgIGtQcm9wcyA9IDEwLFxyXG4gICAgICAgIGtXYXRlciA9IDExLFxyXG4gICAgICAgIGtUcmlnZ2VyID0gMTIsXHJcbiAgICAgICAga1RlcnJhaW4gPSAxMyxcclxuICAgICAgICBrVHJhcCA9IDE0LFxyXG4gICAgICAgIGtOb25Db2xsaWRhYmxlID0gMTUsXHJcbiAgICAgICAga0Nsb3VkVHJhcCA9IDE2LFxyXG4gICAgICAgIGtHcm91bmQgPSAxNyxcclxuICAgICAgICBrUG9ydGFsID0gMTgsXHJcbiAgICAgICAga0RlYnJpc1NtYWxsID0gMTksXHJcbiAgICAgICAga0RlYnJpc0xhcmdlID0gMjAsXHJcbiAgICAgICAga0Fjb3VzdGljU3BhY2UgPSAyMSxcclxuICAgICAgICBrQWN0b3Jab25lID0gMjIsXHJcbiAgICAgICAga1Byb2plY3RpbGVab25lID0gMjMsXHJcbiAgICAgICAga0dhc1RyYXAgPSAyNCxcclxuICAgICAgICBrU2hlbGxDYXN0aW5nID0gMjUsXHJcbiAgICAgICAga1RyYW5zcGFyZW50V2FsbCA9IDI2LFxyXG4gICAgICAgIGtJbnZpc2libGVXYWxsID0gMjcsXHJcbiAgICAgICAga1RyYW5zcGFyZW50U21hbGxBbmltID0gMjgsXHJcbiAgICAgICAga0NsdXR0ZXJMYXJnZSA9IDI5LFxyXG4gICAgICAgIGtDaGFyQ29udHJvbGxlciA9IDMwLFxyXG4gICAgICAgIGtTdGFpckhlbHBlciA9IDMxLFxyXG4gICAgICAgIGtEZWFkQmlwID0gMzIsXHJcbiAgICAgICAga0JpcGVkTm9DQyA9IDMzLFxyXG4gICAgICAgIGtBdm9pZEJveCA9IDM0LFxyXG4gICAgICAgIGtDb2xsaXNpb25Cb3ggPSAzNSxcclxuICAgICAgICBrQ2FtZXJhU3BoZXJlID0gMzYsXHJcbiAgICAgICAga0Rvb3JEZXRlY3Rpb24gPSAzNyxcclxuICAgICAgICBrQ29uZVByb2plY3RpbGUgPSAzOCxcclxuICAgICAgICBrQ2FtZXJhID0gMzksXHJcbiAgICAgICAga0l0ZW1QaWNrZXIgPSA0MCxcclxuICAgICAgICBrTE9TID0gNDEsXHJcbiAgICAgICAga1BhdGhpbmdQaWNrID0gNDIsXHJcbiAgICAgICAga1VudXNlZDAgPSA0MyxcclxuICAgICAgICBrVW51c2VkMSA9IDQ0LFxyXG4gICAgICAgIGtTcGVsbEV4cGxvc2lvbiA9IDQ1LFxyXG4gICAgICAgIGtEcm9wcGluZ1BpY2sgPSA0NiAqL1xyXG4vL1NldHMgb2JqZWN0IDNEIHJvb3Qgb3Igc3BlY2lmaWVkIG5vZGUncyBjb2xsaXNpb24gbGF5ZXJcclxuZXhwb3J0IHZhciBTZXRDb2xsaXNpb25MYXllciA9IGZ1bmN0aW9uIChha1JlZiwgYXNOb2RlTmFtZSwgYWlDb2xsaXNpb25MYXllcikgeyByZXR1cm4gc24uU2V0Q29sbGlzaW9uTGF5ZXIoYWtSZWYsIGFzTm9kZU5hbWUsIGFpQ29sbGlzaW9uTGF5ZXIpOyB9O1xyXG4vL1NldHMgdGhlIGRvb3IgYXMgdGhlIG5ldyBsaW5rZWQgZG9vclxyXG5leHBvcnQgdmFyIFNldERvb3JEZXN0aW5hdGlvbiA9IGZ1bmN0aW9uIChha1JlZiwgYWtEb29yKSB7IHJldHVybiBzbi5TZXREb29yRGVzdGluYXRpb24oYWtSZWYsIGFrRG9vcik7IH07XHJcbi8vU2V0cyBlZmZlY3RzaGFkZXIgZHVyYXRpb24uIEludGVybmFsIGR1cmF0aW9uIGlzIHNldCB3aGVuIHRoZSBlZmZlY3RzaGFkZXIgYmVnaW5zIGFuZCBkb2VzIG5vdCBjaGFuZ2Ugd2l0aCB0aW1lLlxyXG5leHBvcnQgdmFyIFNldEVmZmVjdFNoYWRlckR1cmF0aW9uID0gZnVuY3Rpb24gKGFrUmVmLCBha1NoYWRlciwgYWZUaW1lLCBhYkFic29sdXRlKSB7IHJldHVybiBzbi5TZXRFZmZlY3RTaGFkZXJEdXJhdGlvbihha1JlZiwgYWtTaGFkZXIsIGFmVGltZSwgYWJBYnNvbHV0ZSk7IH07XHJcbi8vU2V0cyBsaW5rZWQgcmVmLiBQYXNzIE5vbmUgaW50byBha1RhcmdldFJlZiB0byB1bnNldCB0aGUgbGlua2VkIHJlZi5cclxuZXhwb3J0IHZhciBTZXRMaW5rZWRSZWYgPSBmdW5jdGlvbiAoYWtSZWYsIGFrVGFyZ2V0UmVmLCBha0tleXdvcmQpIHtcclxuICAgIGlmIChha0tleXdvcmQgPT09IHZvaWQgMCkgeyBha0tleXdvcmQgPSBudWxsOyB9XHJcbiAgICByZXR1cm4gc24uU2V0TGlua2VkUmVmKGFrUmVmLCBha1RhcmdldFJlZiwgYWtLZXl3b3JkKTtcclxufTtcclxuLy9TZXRzIGhhdm9rIG1hdGVyaWFsIHR5cGUuIFVzZSBvbGRNYXRlcmlhbCBzdHJpbmcgdG8gc2VsZWN0IHdoYXQgbWF0ZXJpYWwgeW91IHdhbnQgdG8gY2hhbmdlIGZyb20gdG8gKGVnLiBmcm9tIHN0b25lIHRvIHdvb2QpLCBhbmQgbm9kZU5hbWUgdG8gYXBwbHkgaXQgdG8gdGhlIHNwZWNpZmljIG5vZGUuXHJcbi8vSWYgYm90aCBhcmUgZW1wdHksIGV2ZXJ5IGNvbGxpc2lvbiBtYXRlcmlhbCB3aWxsIGJlIHNldC5cclxuZXhwb3J0IHZhciBTZXRNYXRlcmlhbFR5cGUgPSBmdW5jdGlvbiAoYWtSZWYsIGFzTmV3TWF0ZXJpYWwsIGFzT2xkTWF0ZXJpYWwsIGFzTm9kZU5hbWUpIHtcclxuICAgIGlmIChhc09sZE1hdGVyaWFsID09PSB2b2lkIDApIHsgYXNPbGRNYXRlcmlhbCA9IFwiXCI7IH1cclxuICAgIGlmIChhc05vZGVOYW1lID09PSB2b2lkIDApIHsgYXNOb2RlTmFtZSA9IFwiXCI7IH1cclxuICAgIHJldHVybiBzbi5TZXRNYXRlcmlhbFR5cGUoYWtSZWYsIGFzTmV3TWF0ZXJpYWwsIGFzT2xkTWF0ZXJpYWwsIGFzTm9kZU5hbWUpO1xyXG59O1xyXG4vL0NvcGllcyBza2luIHRpbnQgY29sb3IgZnJvbSBhY3RvcmJhc2UgdG8gYm9keXBhcnRzIG5pZlxyXG5leHBvcnQgdmFyIFNldHVwQm9keVBhcnRHZW9tZXRyeSA9IGZ1bmN0aW9uIChha1JlZiwgYWtBY3RvcikgeyByZXR1cm4gc24uU2V0dXBCb2R5UGFydEdlb21ldHJ5KGFrUmVmLCBha0FjdG9yKTsgfTtcclxuLyoqIFNIQURFUiBUWVBFU1xyXG4gICAgICAgIGtEZWZhdWx0ID0gMFxyXG4gICAgICAgIGtFbnZpcm9ubWVudE1hcCA9IDFcclxuICAgICAgICBrR2xvd01hcCA9IDJcclxuICAgICAgICBrUGFyYWxsYXggPSAzXHJcbiAgICAgICAga0ZhY2VHZW4gPSA0XHJcbiAgICAgICAga0ZhY2VHZW5SR0JUaW50ID0gNVxyXG4gICAgICAgIGtIYWlyVGludCA9IDZcclxuICAgICAgICBrUGFyYWxsYXhPY2MgPSA3XHJcbiAgICAgICAga011bHRpVGV4TGFuZCA9IDhcclxuICAgICAgICBrTE9ETGFuZCA9IDlcclxuICAgICAgICBrTXVsdGlsYXllclBhcmFsbGF4ID0gMTFcclxuICAgICAgICBrVHJlZUFuaW0gPSAxMlxyXG4gICAgICAgIGtNdWx0aUluZGV4VHJpU2hhcGVTbm93ID0gMTRcclxuICAgICAgICBrTE9ET2JqZWN0c0hEID0gMTVcclxuICAgICAgICBrRXllID0gMTZcclxuICAgICAgICBrQ2xvdWQgPSAxN1xyXG4gICAgICAgIGtMT0RMYW5kTm9pc2UgPSAxOFxyXG4gICAgICAgIGtNdWx0aVRleExhbmRMT0RCbGVuZCA9IDE5ICovXHJcbi8vc2V0cyB0aGUgcmVmJ3Mgc2hhZGVyIG1hdGVyaWFsIHR5cGUgaWUuIGRlZmF1bHQgdG8gY3ViZW1hcFxyXG4vL3RlbXBsYXRlIG5lZWRzIHRvIGJlIGxvYWRlZFxyXG4vL2lmIHRleHR1cmUgdHlwZSBpcyAtMSwgdGhlIHJlZmVyZW5jZSdzIGVudGlyZSB0ZXh0dXJlc2V0IGlzIHJlcGxhY2VkIHVzaW5nIHRoZSB0ZW1wbGF0ZSdzIHRleHR1cmVzZXQvL1xyXG4vL2lmIHRleHR1cmUgdHlwZSBpcyAwLTkgdGhlIHRlbXBsYXRlJ3MgdGV4dHVyZXNldCBpcyBzdGlsbCBhcHBsaWVkIGJ1dCByZWZlcmVuY2UncyB0ZXh0dXJlIGF0IHRoYXQgaW5kZXggd2lsbCB0YWtlIHByaW9yaXR5LlxyXG4vL29wdGlvbmFsIGRpZmZ1c2UgcGF0aCBjYW4gYmUgdXNlZCB0byBmaWx0ZXIgc2hhcGVzIHRvIGFwcGx5IHRoZSBzaGFkZXIgdG8sIHBhcnRpYWwgbWF0Y2hlcyBhcmUgYWNjZXB0ZWQgbGlrZSBcIkRyYXVnci5kZHNcIlxyXG4vL2xpbWl0YXRpb25zIC0gY2Fubm90IGJlIHVzZWQgb24gZ2VvbWV0cnkgd2l0aCBubyBub3JtYWxzIChpZS4gYm9keSBza2luIG1lc2hlcylcclxuZXhwb3J0IHZhciBTZXRTaGFkZXJUeXBlID0gZnVuY3Rpb24gKGFrUmVmLCBha1RlbXBsYXRlLCBhc0RpZmZ1c2VQYXRoLCBhaVNoYWRlclR5cGUsIGFpVGV4dHVyZVR5cGUsIGFiTm9XZWFwb25zLCBhYk5vQWxwaGFQcm9wZXJ0eSkge1xyXG4gICAgcmV0dXJuIHNuLlNldFNoYWRlclR5cGUoYWtSZWYsIGFrVGVtcGxhdGUsIGFzRGlmZnVzZVBhdGgsIGFpU2hhZGVyVHlwZSwgYWlUZXh0dXJlVHlwZSwgYWJOb1dlYXBvbnMsIGFiTm9BbHBoYVByb3BlcnR5KTtcclxufTtcclxuLy9TdG9wcyBBTEwgZWZmZWN0IHNoYWRlcnMgYW5kIGFydCBvYmplY3RzICh2aXN1YWwgZWZmZWN0cykgY3VycmVudGx5IG9uIHRoaXMgYWN0b3JcclxuZXhwb3J0IHZhciBTdG9wQWxsU2hhZGVycyA9IGZ1bmN0aW9uIChha1JlZikgeyByZXR1cm4gc24uU3RvcEFsbFNoYWRlcnMoYWtSZWYpOyB9O1xyXG4vL1JlbW92ZXMgYWxsIGluc3RhbmNlcyBvZiB0aGUgYXJ0IG9iamVjdCAoaGl0IG1hZ2ljIGVmZmVjdC92aXN1YWwgZWZmZWN0KSBhdHRhY2hlZCB0byB0aGUgcmVmZXJlbmNlLlxyXG5leHBvcnQgdmFyIFN0b3BBcnRPYmplY3QgPSBmdW5jdGlvbiAoYWtSZWYsIGFrQXJ0KSB7IHJldHVybiBzbi5TdG9wQXJ0T2JqZWN0KGFrUmVmLCBha0FydCk7IH07XHJcbi8vVG9nZ2xlcyBub2RlIHZpc2liaWxpdHkuXHJcbmV4cG9ydCB2YXIgVG9nZ2xlQ2hpbGROb2RlID0gZnVuY3Rpb24gKGFrUmVmLCBhc05vZGVOYW1lLCBhYkRpc2FibGUpIHsgcmV0dXJuIHNuLlRvZ2dsZUNoaWxkTm9kZShha1JlZiwgYXNOb2RlTmFtZSwgYWJEaXNhYmxlKTsgfTtcclxuLy9VcGRhdGVzIG5vZGUgZGF0YS4gTW92ZSBoaXQgZWZmZWN0IGFydCB0byBuZXcgbm9kZSAoaWUuIGZyb20gXCJNYWdpY0VmZmVjdHNOb2RlXCIgdG8gXCJOUEMgSGVhZCBbSGVhZF1cIikgb3IgdXBkYXRlIHRyYW5zbGF0ZSwgcm90YXRlLCBhbmQgc2NhbGUgdmFsdWVzLlxyXG4vL1RyYW5zbGF0ZSBhbmQgUm90YXRlIGFycmF5cyBtdXN0IGhhdmUgdGhyZWUgdmFsdWVzIGluIG9yZGVyIHRvIHdvcmsuIFJvdGF0ZSB1c2VzIGV1bGVyIGFuZ2xlcyBpbiBkZWdyZWVzIChYWVopLiBTY2FsZSBpcyByZWxhdGl2ZSwgYW5kIGlzIG11bHRpcGxpZWQgYnkgZXhpc3Rpbmcgc2NhbGUuXHJcbi8vSWYgdGhlIGhpdCBlZmZlY3QgYXJ0IGlzIHJlbW92ZWQgYW5kIHJlYXR0YWNoZWQsIGl0IHdpbGwgcmV2ZXJ0IGJhY2sgdG8gdGhlIHZhbHVlcyBpbiB0aGUgbmlmLlxyXG5leHBvcnQgdmFyIFVwZGF0ZUhpdEVmZmVjdEFydE5vZGUgPSBmdW5jdGlvbiAoYWtSZWYsIGFrQXJ0LCBhc05ld05vZGUsIGFmVHJhbnNsYXRlLCBhZlJvdGF0ZSwgYWZSZWxhdGl2ZVNjYWxlKSB7XHJcbiAgICBpZiAoYWZSZWxhdGl2ZVNjYWxlID09PSB2b2lkIDApIHsgYWZSZWxhdGl2ZVNjYWxlID0gMS4wOyB9XHJcbiAgICByZXR1cm4gc24uVXBkYXRlSGl0RWZmZWN0QXJ0Tm9kZShha1JlZiwgYWtBcnQsIGFzTmV3Tm9kZSwgYWZUcmFuc2xhdGUsIGFmUm90YXRlLCBhZlJlbGF0aXZlU2NhbGUpO1xyXG59O1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy9QQUNLQUdFU1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8tLS0tLS0tXHJcbi8vR0VUVEVSU1xyXG4vLy0tLS0tLS1cclxuLyoqIFBBQ0tBR0UgVFlQRVNcclxuICAgICAgICBGaW5kID0gMFxyXG4gICAgICAgIEZvbGxvdyA9IDFcclxuICAgICAgICBFc2NvcnQgPSAyXHJcbiAgICAgICAgRWF0ID0gM1xyXG4gICAgICAgIFNsZWVwID0gNFxyXG4gICAgICAgIFdhbmRlciA9IDVcclxuICAgICAgICBUcmF2ZWwgPSA2XHJcbiAgICAgICAgQWNjb21wYW55ID0gN1xyXG4gICAgICAgIFVzZUl0ZW1BdCA9IDhcclxuICAgICAgICBBbWJ1c2ggPSA5XHJcbiAgICAgICAgRmxlZU5vdENvbWJhdCA9IDEwXHJcbiAgICAgICAgQ2FzdE1hZ2ljID0gMTFcclxuICAgICAgICBTYW5kYm94ID0gMTJcclxuICAgICAgICBQYXRyb2wgPSAxM1xyXG4gICAgICAgIEd1YXJkID0gMTRcclxuICAgICAgICBEaWFsb2d1ZSA9IDE1XHJcbiAgICAgICAgVXNlV2VhcG9uID0gMTZcclxuICAgICAgICBGaW5kMiA9IDE3XHJcbiAgICAgICAgUGFja2FnZSA9IDE4XHJcbiAgICAgICAgUGFja2FnZVRlbXBsYXRlID0gMTlcclxuICAgICAgICBBY3RpdmF0ZSA9IDIwXHJcbiAgICAgICAgQWxhcm0gPSAyMVxyXG4gICAgICAgIEZsZWUgPSAyMlxyXG4gICAgICAgIFRyZXNwYXNzID0gMjNcclxuICAgICAgICBTcGVjdGF0b3IgPSAyNFxyXG4gICAgICAgIFJlYWN0VG9EZWFkID0gMjVcclxuICAgICAgICBHZXRVcEZyb21DaGFpciA9IDI2XHJcbiAgICAgICAgRG9Ob3RoaW5nID0gMjdcclxuICAgICAgICBJbkdhbWVEaWFsb2d1ZSA9IDI4XHJcbiAgICAgICAgU3VyZmFjZSA9ICAyOVxyXG4gICAgICAgIFNlYXJjaEZvckF0dGFja2VyID0gMzBcclxuICAgICAgICBBdm9pZFBsYXllciA9IDMxXHJcbiAgICAgICAgUmVhY3RUb0Rlc3Ryb3llZE9iamVjdCA9IDMyXHJcbiAgICAgICAgUmVhY3RUb0dyZW5hZGVPck1pbmUgPSAzM1xyXG4gICAgICAgIFN0ZWFsV2FybmluZyA9IDM0XHJcbiAgICAgICAgUGlja1BvY2tldFdhcm5pbmcgPSAzNVxyXG4gICAgICAgIE1vdmVtZW50QmxvY2tlZCA9IDM2XHJcbiAgICAgICAgVmFtcGlyZUZlZWQgPSAzN1xyXG4gICAgICAgIENhbm5pYmFsRmVlZCA9IDM4ICovXHJcbi8vR2V0cyBwYWNrYWdlIHR5cGUuIFJldHVybnMgLTEgaWYgcGFja2FnZSBpcyBub25lXHJcbmV4cG9ydCB2YXIgR2V0UGFja2FnZVR5cGUgPSBmdW5jdGlvbiAoYWtQYWNrYWdlKSB7XHJcbiAgICByZXR1cm4gc24uR2V0UGFja2FnZVR5cGUoYWtQYWNrYWdlKTtcclxufTtcclxuLy9HZXRzIGFsbCBpZGxlcyBvbiB0aGlzIHBhY2thZ2VcclxuZXhwb3J0IHZhciBHZXRQYWNrYWdlSWRsZXMgPSBmdW5jdGlvbiAoYWtQYWNrYWdlKSB7IHJldHVybiBzbi5HZXRQYWNrYWdlSWRsZXMoYWtQYWNrYWdlKTsgfTtcclxuLy8tLS0tLS0tXHJcbi8vU0VUVEVSU1xyXG4vLy0tLS0tLS1cclxuLy9BZGRzIGlkbGUgdG8gdGhlIGVuZCBvZiB0aGUgcGFja2FnZSBpZGxlIHN0YWNrLCBjcmVhdGluZyBpdCBpZiBuZWVkZWQuXHJcbmV4cG9ydCB2YXIgQWRkUGFja2FnZUlkbGUgPSBmdW5jdGlvbiAoYWtQYWNrYWdlLCBha0lkbGUpIHsgcmV0dXJuIHNuLkFkZFBhY2thZ2VJZGxlKGFrUGFja2FnZSwgYWtJZGxlKTsgfTtcclxuLy9SZW1vdmVzIGlkbGUgZnJvbSBwYWNrYWdlXHJcbmV4cG9ydCB2YXIgUmVtb3ZlUGFja2FnZUlkbGUgPSBmdW5jdGlvbiAoYWtQYWNrYWdlLCBha0lkbGUpIHsgcmV0dXJuIHNuLlJlbW92ZVBhY2thZ2VJZGxlKGFrUGFja2FnZSwgYWtJZGxlKTsgfTtcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vUEFQWVJVUyBFWFRFTkRFUlxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy9yZXR1cm5zIGN1cnJlbnQgdmVyc2lvbiBhcyBpbnQgYXJyYXkgKG1ham9yLG1pbm9yLHBhdGNoIC8gNCwzLDcpXHJcbmV4cG9ydCB2YXIgR2V0UGFweXJ1c0V4dGVuZGVyVmVyc2lvbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiBzbi5HZXRQYXB5cnVzRXh0ZW5kZXJWZXJzaW9uKCk7XHJcbn07XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy9QT1RJT04gLSBzZWUgU1BFTExcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5leHBvcnQgdmFyIEFkZE1hZ2ljRWZmZWN0VG9Qb3Rpb24gPSBmdW5jdGlvbiAoYWtQb3Rpb24sIGFrTWFnaWNFZmZlY3QsIGFmTWFnbml0dWRlLCBhaUFyZWEsIGFpRHVyYXRpb24sIGFmQ29zdCwgYXNDb25kaXRpb25MaXN0KSB7XHJcbiAgICBpZiAoYWZDb3N0ID09PSB2b2lkIDApIHsgYWZDb3N0ID0gMC4wOyB9XHJcbiAgICByZXR1cm4gc24uQWRkTWFnaWNFZmZlY3RUb1BvdGlvbihha1BvdGlvbiwgYWtNYWdpY0VmZmVjdCwgYWZNYWduaXR1ZGUsIGFpQXJlYSwgYWlEdXJhdGlvbiwgYWZDb3N0LCBhc0NvbmRpdGlvbkxpc3QpO1xyXG59O1xyXG4vL0FkZHMgZWZmZWN0aXRlbSBmcm9tIFBvdGlvbiB0byB0YXJnZXQgUG90aW9uLCBhdCBnaXZlbiBpbmRleC4gU2FtZSBhcyBhYm92ZSBmdW5jdGlvbiwgYnV0IGxlc3MgdmVyYm9zZSwgYW5kIHByZXNlcnZlcyBhbGwgY29uZGl0aW9ucy4gT3B0aW9uYWwgY29zdCBhcmd1bWVudC5cclxuZXhwb3J0IHZhciBBZGRFZmZlY3RJdGVtVG9Qb3Rpb24gPSBmdW5jdGlvbiAoYWtQb3Rpb24sIGFrUG90aW9uVG9Db3B5RnJvbSwgYWlJbmRleCwgYWZDb3N0KSB7XHJcbiAgICBpZiAoYWZDb3N0ID09PSB2b2lkIDApIHsgYWZDb3N0ID0gLTEuMDsgfVxyXG4gICAgcmV0dXJuIHNuLkFkZEVmZmVjdEl0ZW1Ub1BvdGlvbihha1BvdGlvbiwgYWtQb3Rpb25Ub0NvcHlGcm9tLCBhaUluZGV4LCBhZkNvc3QpO1xyXG59O1xyXG4vL1JlbW92ZXMgbWFnaWMgZWZmZWN0IGZyb20gUG90aW9uIHRoYXQgbWF0Y2hlcyBtYWduaXR1ZGUvYXJlYS9kdXJhdGlvbi9jb3N0LlxyXG5leHBvcnQgdmFyIFJlbW92ZU1hZ2ljRWZmZWN0RnJvbVBvdGlvbiA9IGZ1bmN0aW9uIChha1BvdGlvbiwgYWtNYWdpY0VmZmVjdCwgYWZNYWduaXR1ZGUsIGFpQXJlYSwgYWlEdXJhdGlvbiwgYWZDb3N0KSB7XHJcbiAgICBpZiAoYWZDb3N0ID09PSB2b2lkIDApIHsgYWZDb3N0ID0gMC4wOyB9XHJcbiAgICByZXR1cm4gc24uUmVtb3ZlTWFnaWNFZmZlY3RGcm9tUG90aW9uKGFrUG90aW9uLCBha01hZ2ljRWZmZWN0LCBhZk1hZ25pdHVkZSwgYWlBcmVhLCBhaUR1cmF0aW9uLCBhZkNvc3QpO1xyXG59O1xyXG4vL1JlbW92ZXMgZWZmZWN0aXRlbSBmcm9tIFBvdGlvbiB0aGF0IG1hdGNoZXMgUG90aW9uIGF0IGluZGV4LlxyXG5leHBvcnQgdmFyIFJlbW92ZUVmZmVjdEl0ZW1Gcm9tUG90aW9uID0gZnVuY3Rpb24gKGFrUG90aW9uLCBha1BvdGlvblRvTWF0Y2hGcm9tLCBhaUluZGV4KSB7XHJcbiAgICByZXR1cm4gc24uUmVtb3ZlRWZmZWN0SXRlbUZyb21Qb3Rpb24oYWtQb3Rpb24sIGFrUG90aW9uVG9NYXRjaEZyb20sIGFpSW5kZXgpO1xyXG59O1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy9QUk9KRUNUSUxFU1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8tLS0tLS0tLVxyXG4vL0dFVFRFUlNcclxuLy8tLS0tLS0tLVxyXG4vL0dldHMgcHJvamVjdGlsZSBncmF2aXR5ICh1c3VhbGx5IDAuMCBmb3Igbm9uIGFycm93IHByb2plY3RpbGVzKS5cclxuZXhwb3J0IHZhciBHZXRQcm9qZWN0aWxlR3Jhdml0eSA9IGZ1bmN0aW9uIChha1Byb2plY3RpbGUpIHsgcmV0dXJuIHNuLkdldFByb2plY3RpbGVHcmF2aXR5KGFrUHJvamVjdGlsZSk7IH07XHJcbi8vR2V0cyBwcm9qZWN0aWxlIGltcGFjdCBmb3JjZS5cclxuZXhwb3J0IHZhciBHZXRQcm9qZWN0aWxlSW1wYWN0Rm9yY2UgPSBmdW5jdGlvbiAoYWtQcm9qZWN0aWxlKSB7IHJldHVybiBzbi5HZXRQcm9qZWN0aWxlSW1wYWN0Rm9yY2UoYWtQcm9qZWN0aWxlKTsgfTtcclxuLy9HZXRzIHByb2plY3RpbGUgcmFuZ2UuXHJcbmV4cG9ydCB2YXIgR2V0UHJvamVjdGlsZVJhbmdlID0gZnVuY3Rpb24gKGFrUHJvamVjdGlsZSkgeyByZXR1cm4gc24uR2V0UHJvamVjdGlsZVJhbmdlKGFrUHJvamVjdGlsZSk7IH07XHJcbi8vR2V0cyBwcm9qZWN0aWxlIHNwZWVkLlxyXG5leHBvcnQgdmFyIEdldFByb2plY3RpbGVTcGVlZCA9IGZ1bmN0aW9uIChha1Byb2plY3RpbGUpIHsgcmV0dXJuIHNuLkdldFByb2plY3RpbGVTcGVlZChha1Byb2plY3RpbGUpOyB9O1xyXG4vKiogUFJPSkVDVElMRSBUWVBFU1xyXG4gICAgICAgIE1pc3NpbGUgPSAxXHJcbiAgICAgICAgTG9iYmVyID0gMlxyXG4gICAgICAgIEJlYW0gPSAzXHJcbiAgICAgICAgRmxhbWUgPSA0XHJcbiAgICAgICAgQ29uZSA9IDVcclxuICAgICAgICBCYXJyaWVyID0gNlxyXG4gICAgICAgIEFycm93ID0gNyAqL1xyXG4vL0dldCBwcm9qZWN0aWxlIHR5cGUuIDAgaWYgcHJvamVjdGlsZSBpcyBOb25lLlxyXG5leHBvcnQgdmFyIEdldFByb2plY3RpbGVUeXBlID0gZnVuY3Rpb24gKGFrUHJvamVjdGlsZSkgeyByZXR1cm4gc24uR2V0UHJvamVjdGlsZVR5cGUoYWtQcm9qZWN0aWxlKTsgfTtcclxuLy8tLS0tLS0tXHJcbi8vU0VUVEVSU1xyXG4vLy0tLS0tLS1cclxuLy9TZXRzIHByb2plY3RpbGUgZ3Jhdml0eS5cclxuZXhwb3J0IHZhciBTZXRQcm9qZWN0aWxlR3Jhdml0eSA9IGZ1bmN0aW9uIChha1Byb2plY3RpbGUsIGFmR3Jhdml0eSkgeyByZXR1cm4gc24uU2V0UHJvamVjdGlsZUdyYXZpdHkoYWtQcm9qZWN0aWxlLCBhZkdyYXZpdHkpOyB9O1xyXG4vL1NldHMgcHJvamVjdGlsZSBpbXBhY3QgZm9yY2UuXHJcbmV4cG9ydCB2YXIgU2V0UHJvamVjdGlsZUltcGFjdEZvcmNlID0gZnVuY3Rpb24gKGFrUHJvamVjdGlsZSwgYWZJbXBhY3RGb3JjZSkgeyByZXR1cm4gc24uU2V0UHJvamVjdGlsZUltcGFjdEZvcmNlKGFrUHJvamVjdGlsZSwgYWZJbXBhY3RGb3JjZSk7IH07XHJcbi8vU2V0cyBwcm9qZWN0aWxlIHJhbmdlLlxyXG5leHBvcnQgdmFyIFNldFByb2plY3RpbGVSYW5nZSA9IGZ1bmN0aW9uIChha1Byb2plY3RpbGUsIGFmUmFuZ2UpIHsgcmV0dXJuIHNuLlNldFByb2plY3RpbGVSYW5nZShha1Byb2plY3RpbGUsIGFmUmFuZ2UpOyB9O1xyXG4vL1NldHMgcHJvamVjdGlsZSBzcGVlZC5cclxuZXhwb3J0IHZhciBTZXRQcm9qZWN0aWxlU3BlZWQgPSBmdW5jdGlvbiAoYWtQcm9qZWN0aWxlLCBhZlNwZWVkKSB7IHJldHVybiBzbi5TZXRQcm9qZWN0aWxlU3BlZWQoYWtQcm9qZWN0aWxlLCBhZlNwZWVkKTsgfTtcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vL1NDUk9MTCAtIHNlZSBTUEVMTFxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmV4cG9ydCB2YXIgQWRkTWFnaWNFZmZlY3RUb1Njcm9sbCA9IGZ1bmN0aW9uIChha1Njcm9sbCwgYWtNYWdpY0VmZmVjdCwgYWZNYWduaXR1ZGUsIGFpQXJlYSwgYWlEdXJhdGlvbiwgYWZDb3N0LCBhc0NvbmRpdGlvbkxpc3QpIHtcclxuICAgIGlmIChhZkNvc3QgPT09IHZvaWQgMCkgeyBhZkNvc3QgPSAwLjA7IH1cclxuICAgIHJldHVybiBzbi5BZGRNYWdpY0VmZmVjdFRvU2Nyb2xsKGFrU2Nyb2xsLCBha01hZ2ljRWZmZWN0LCBhZk1hZ25pdHVkZSwgYWlBcmVhLCBhaUR1cmF0aW9uLCBhZkNvc3QsIGFzQ29uZGl0aW9uTGlzdCk7XHJcbn07XHJcbi8vQWRkcyBlZmZlY3RpdGVtIGZyb20gU2Nyb2xsIHRvIHRhcmdldCBTY3JvbGwsIGF0IGdpdmVuIGluZGV4LiBTYW1lIGFzIGFib3ZlIGZ1bmN0aW9uLCBidXQgbGVzcyB2ZXJib3NlLCBhbmQgcHJlc2VydmVzIGFsbCBjb25kaXRpb25zLiBPcHRpb25hbCBjb3N0IGFyZ3VtZW50LlxyXG5leHBvcnQgdmFyIEFkZEVmZmVjdEl0ZW1Ub1Njcm9sbCA9IGZ1bmN0aW9uIChha1Njcm9sbCwgYWtTY3JvbGxUb0NvcHlGcm9tLCBhaUluZGV4LCBhZkNvc3QpIHtcclxuICAgIGlmIChhZkNvc3QgPT09IHZvaWQgMCkgeyBhZkNvc3QgPSAtMS4wOyB9XHJcbiAgICByZXR1cm4gc24uQWRkRWZmZWN0SXRlbVRvU2Nyb2xsKGFrU2Nyb2xsLCBha1Njcm9sbFRvQ29weUZyb20sIGFpSW5kZXgsIGFmQ29zdCk7XHJcbn07XHJcbi8vUmVtb3ZlcyBtYWdpYyBlZmZlY3QgZnJvbSBTY3JvbGwgdGhhdCBtYXRjaGVzIG1hZ25pdHVkZS9hcmVhL2R1cmF0aW9uL2Nvc3QuXHJcbmV4cG9ydCB2YXIgUmVtb3ZlTWFnaWNFZmZlY3RGcm9tU2Nyb2xsID0gZnVuY3Rpb24gKGFrU2Nyb2xsLCBha01hZ2ljRWZmZWN0LCBhZk1hZ25pdHVkZSwgYWlBcmVhLCBhaUR1cmF0aW9uLCBhZkNvc3QpIHtcclxuICAgIGlmIChhZkNvc3QgPT09IHZvaWQgMCkgeyBhZkNvc3QgPSAwLjA7IH1cclxuICAgIHJldHVybiBzbi5SZW1vdmVNYWdpY0VmZmVjdEZyb21TY3JvbGwoYWtTY3JvbGwsIGFrTWFnaWNFZmZlY3QsIGFmTWFnbml0dWRlLCBhaUFyZWEsIGFpRHVyYXRpb24sIGFmQ29zdCk7XHJcbn07XHJcbi8vUmVtb3ZlcyBlZmZlY3RpdGVtIGZyb20gU2Nyb2xsIHRoYXQgbWF0Y2hlcyBTY3JvbGwgYXQgaW5kZXguXHJcbmV4cG9ydCB2YXIgUmVtb3ZlRWZmZWN0SXRlbUZyb21TY3JvbGwgPSBmdW5jdGlvbiAoYWtTY3JvbGwsIGFrU2Nyb2xsVG9NYXRjaEZyb20sIGFpSW5kZXgpIHtcclxuICAgIHJldHVybiBzbi5SZW1vdmVFZmZlY3RJdGVtRnJvbVNjcm9sbChha1Njcm9sbCwgYWtTY3JvbGxUb01hdGNoRnJvbSwgYWlJbmRleCk7XHJcbn07XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy9TT1VORFxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vU2V0cyBzb3VuZCBkZXNjcmlwdG9yIGF0dGFjaGVkIHRvIHRoZSBzb3VuZC5cclxuZXhwb3J0IHZhciBTZXRTb3VuZERlc2NyaXB0b3IgPSBmdW5jdGlvbiAoYWtTb3VuZCwgYWtTb3VuZERlc2NyaXB0b3IpIHsgcmV0dXJuIHNuLlNldFNvdW5kRGVzY3JpcHRvcihha1NvdW5kLCBha1NvdW5kRGVzY3JpcHRvcik7IH07XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy9TUEVMTFxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vLS0tLS0tLS1cclxuLy9HRVRURVJTXHJcbi8vLS0tLS0tLS1cclxuLyoqIFNQRUxMIFRZUEVTXHJcbiAgICAgICAgU3BlbGwgPSAwXHJcbiAgICAgICAgRGlzZWFzZSA9IDFcclxuICAgICAgICBQb3dlciA9IDJcclxuICAgICAgICBMZXNzZXJQb3dlciA9IDNcclxuICAgICAgICBBYmlsaXR5ID0gNFxyXG4gICAgICAgIFBvaXNvbiA9IDVcclxuICAgICAgICBBZGRpdGlvbiA9IDZcclxuICAgICAgICBWb2ljZSA9IDcgKi9cclxuLy9SZXR1cm5zIHNwZWxsIHR5cGUuIC0xIGlmIHNwZWxsIGlzIE5vbmVcclxuZXhwb3J0IHZhciBHZXRTcGVsbFR5cGUgPSBmdW5jdGlvbiAoYWtTcGVsbCkge1xyXG4gICAgcmV0dXJuIHNuLkdldFNwZWxsVHlwZShha1NwZWxsKTtcclxufTtcclxuLy8tLS0tLS0tLVxyXG4vL1NFVFRFUlNcclxuLy8tLS0tLS0tLVxyXG4vL0NvbmRpdGlvbkl0ZW1PYmplY3QgfCBGdW5jdGlvbiBJRCB8IHBhcmFtZXRlciAxIHwgcGFyYW1ldGVyIDIgfCBPUENvZGUgfCBmbG9hdCB8IEFORE9SXHJcbi8vY29uZGl0aW9ucyB3aGljaCBoYXZlIG5vIHBhcmFtZXRlcnMgKGVnLiBJc1NuZWFraW5nKSAvIHRha2UgaW4gZm9ybXMgKEdldElzUmFjZSkgd29ya1xyXG4vL2NvbmRpdGlvbnMgd2hpY2ggYWNjZXB0IGludC9mbG9hdC9zdHJpbmdzIGFyZSBza2lwcGVkXHJcbi8vU3ViamVjdFx0fCBIYXNNYWdpY0VmZmVjdEtleXdvcmRcdHwgTWFnaWNJbnZpc2liaWxpdHlcdFx0fCBOT05FIHwgPT0gfCAwLjAgfCBBTkQgLSBpbiBnYW1lXHJcbi8vU3ViamVjdCBcdHwgSGFzTWFnaWNFZmZlY3RLZXl3b3JkXHR8IDAwMDFFQTZGIH4gU2t5cmltLmVzbSB8IE5PTkUgfCA9PSB8IDAuMCB8IEFORFx0LSBpbiBwYXB5cnVzXHJcbmV4cG9ydCB2YXIgQWRkTWFnaWNFZmZlY3RUb1NwZWxsID0gZnVuY3Rpb24gKGFrU3BlbGwsIGFrTWFnaWNFZmZlY3QsIGFmTWFnbml0dWRlLCBhaUFyZWEsIGFpRHVyYXRpb24sIGFmQ29zdCwgYXNDb25kaXRpb25MaXN0KSB7XHJcbiAgICBpZiAoYWZDb3N0ID09PSB2b2lkIDApIHsgYWZDb3N0ID0gMC4wOyB9XHJcbiAgICByZXR1cm4gc24uQWRkTWFnaWNFZmZlY3RUb1NwZWxsKGFrU3BlbGwsIGFrTWFnaWNFZmZlY3QsIGFmTWFnbml0dWRlLCBhaUFyZWEsIGFpRHVyYXRpb24sIGFmQ29zdCwgYXNDb25kaXRpb25MaXN0KTtcclxufTtcclxuLy9BZGRzIGVmZmVjdGl0ZW0gZnJvbSBzcGVsbCB0byB0YXJnZXQgc3BlbGwsIGF0IGdpdmVuIGluZGV4LiBTYW1lIGFzIGFib3ZlIGZ1bmN0aW9uLCBidXQgbGVzcyB2ZXJib3NlLCBhbmQgcHJlc2VydmVzIGFsbCBjb25kaXRpb25zLlxyXG5leHBvcnQgdmFyIEFkZEVmZmVjdEl0ZW1Ub1NwZWxsID0gZnVuY3Rpb24gKGFrU3BlbGwsIGFrU3BlbGxUb0NvcHlGcm9tLCBhaUluZGV4LCBhZkNvc3QpIHtcclxuICAgIGlmIChhZkNvc3QgPT09IHZvaWQgMCkgeyBhZkNvc3QgPSAtMS4wOyB9XHJcbiAgICByZXR1cm4gc24uQWRkRWZmZWN0SXRlbVRvU3BlbGwoYWtTcGVsbCwgYWtTcGVsbFRvQ29weUZyb20sIGFpSW5kZXgsIGFmQ29zdCk7XHJcbn07XHJcbi8vUmVtb3ZlcyBtYWdpYyBlZmZlY3QgZnJvbSBzcGVsbCB0aGF0IG1hdGNoZXMgbWFnbml0dWRlL2FyZWEvZHVyYXRpb24vY29zdC5cclxuZXhwb3J0IHZhciBSZW1vdmVNYWdpY0VmZmVjdEZyb21TcGVsbCA9IGZ1bmN0aW9uIChha1NwZWxsLCBha01hZ2ljRWZmZWN0LCBhZk1hZ25pdHVkZSwgYWlBcmVhLCBhaUR1cmF0aW9uLCBhZkNvc3QpIHtcclxuICAgIGlmIChhZkNvc3QgPT09IHZvaWQgMCkgeyBhZkNvc3QgPSAwLjA7IH1cclxuICAgIHJldHVybiBzbi5SZW1vdmVNYWdpY0VmZmVjdEZyb21TcGVsbChha1NwZWxsLCBha01hZ2ljRWZmZWN0LCBhZk1hZ25pdHVkZSwgYWlBcmVhLCBhaUR1cmF0aW9uLCBhZkNvc3QpO1xyXG59O1xyXG4vL1JlbW92ZXMgZWZmZWN0aXRlbSBmcm9tIHNwZWxsIHRoYXQgbWF0Y2hlcyBzcGVsbCBhdCBpbmRleC5cclxuZXhwb3J0IHZhciBSZW1vdmVFZmZlY3RJdGVtRnJvbVNwZWxsID0gZnVuY3Rpb24gKGFrU3BlbGwsIGFrU3BlbGxUb01hdGNoRnJvbSwgYWlJbmRleCkgeyByZXR1cm4gc24uUmVtb3ZlRWZmZWN0SXRlbUZyb21TcGVsbChha1NwZWxsLCBha1NwZWxsVG9NYXRjaEZyb20sIGFpSW5kZXgpOyB9O1xyXG4vL1NldHMgY2FzdGluZyB0eXBlIG9mIHNwZWxsIChhbmQgYWxsIGF0dGFjaGVkIG1hZ2ljIGVmZmVjdHMpXHJcbmV4cG9ydCB2YXIgU2V0U3BlbGxDYXN0aW5nVHlwZSA9IGZ1bmN0aW9uIChha1NwZWxsLCBhaVR5cGUpIHsgcmV0dXJuIHNuLlNldFNwZWxsQ2FzdGluZ1R5cGUoYWtTcGVsbCwgYWlUeXBlKTsgfTtcclxuLy9TZXRzIGRlbGl2ZXJ5IHR5cGUgb2Ygc3BlbGwgKGFuZCBhbGwgYXR0YWNoZWQgbWFnaWMgZWZmZWN0cylcclxuZXhwb3J0IHZhciBTZXRTcGVsbERlbGl2ZXJ5VHlwZSA9IGZ1bmN0aW9uIChha1NwZWxsLCBhaVR5cGUpIHsgcmV0dXJuIHNuLlNldFNwZWxsRGVsaXZlcnlUeXBlKGFrU3BlbGwsIGFpVHlwZSk7IH07XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vL1NUUklOR1NcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vQ29udmVydHMgc3RyaW5nIHRvIGhleCB2YWx1ZSBpZiB2YWxpZFxyXG5leHBvcnQgdmFyIEludFRvU3RyaW5nID0gZnVuY3Rpb24gKGFpVmFsdWUsIGFiSGV4KSB7XHJcbiAgICByZXR1cm4gc24uSW50VG9TdHJpbmcoYWlWYWx1ZSwgYWJIZXgpO1xyXG59O1xyXG4vL0NvbnZlcnRzIHN0cmluZyB0byBpbnQuIFJldHVybnMgLTEgZm9yIG91dCBvZiBib3VuZCB2YWx1ZXMuXHJcbmV4cG9ydCB2YXIgU3RyaW5nVG9JbnQgPSBmdW5jdGlvbiAoYXNTdHJpbmcpIHtcclxuICAgIHJldHVybiBzbi5TdHJpbmdUb0ludChhc1N0cmluZyk7XHJcbn07XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vL1VJXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vL0dldHMgdGhlIG9iamVjdHJlZmVyZW5jZSBvZiB0aGUgY3VycmVudGx5IG9wZW5lZCBjb250YWluZXIgaW4gY29udGFpbmVyIG1lbnVcclxuZXhwb3J0IHZhciBHZXRNZW51Q29udGFpbmVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHNuLkdldE1lbnVDb250YWluZXIoKTtcclxufTtcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vVVRJTElUWVxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy9DYWxjdWxhdGVzIGEgcmFuZG9tIGZsb2F0IGJldHdlZW4gYWZNaW4gYW5kIGFmTWF4LCBiYXNlZCBvbiBNZXJzZW5uZSBUd2lzdGVyXHJcbmV4cG9ydCB2YXIgR2VuZXJhdGVSYW5kb21GbG9hdCA9IGZ1bmN0aW9uIChhZk1pbiwgYWZNYXgpIHtcclxuICAgIHJldHVybiBzbi5HZW5lcmF0ZVJhbmRvbUZsb2F0KGFmTWluLCBhZk1heCk7XHJcbn07XHJcbi8vQ2FsY3VsYXRlcyBhIHJhbmRvbSBpbnRlZ2VyIGJldHdlZW4gYWZNaW4gYW5kIGFmTWF4LCBiYXNlZCBvbiBNZXJzZW5uZSBUd2lzdGVyXHJcbmV4cG9ydCB2YXIgR2VuZXJhdGVSYW5kb21JbnQgPSBmdW5jdGlvbiAoYWZNaW4sIGFmTWF4KSB7XHJcbiAgICByZXR1cm4gc24uR2VuZXJhdGVSYW5kb21JbnQoYWZNaW4sIGFmTWF4KTtcclxufTtcclxuLy9HZXRzIHN5c3RlbSB0aW1lIGFuZCBkYXRlXHJcbi8vWWVhciAoMTYwMSAtIDMwODI3KVxyXG4vL01vbnRoICgxLTEyKVxyXG4vL0RheU9mV2VlayAoMTpTdW5kYXkgLSA3OlNhdHVyZGF5KVxyXG4vL0RheSAoMS0zMSlcclxuLy9Ib3VyICgwLTIzKVxyXG4vL01pbnV0ZSAoMC01OSlcclxuLy9TZWNvbmQgKDAtNTkpXHJcbi8vTWlsbGlzZWNvbmQgKDAtOTk5KVxyXG5leHBvcnQgdmFyIEdldFN5c3RlbVRpbWUgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBzbi5HZXRTeXN0ZW1UaW1lKCk7IH07XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy9WSVNVQUxFRkZFQ1RTXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLy0tLS0tLS0tXHJcbi8vR0VUVEVSU1xyXG4vLy0tLS0tLS0tXHJcbi8vR2V0cyB0aGUgYXJ0IG9iamVjdCBhc3NvY2lhdGVkIHdpdGggdGhlIHZpc3VhbCBlZmZlY3QuXHJcbmV4cG9ydCB2YXIgR2V0QXJ0T2JqZWN0ID0gZnVuY3Rpb24gKGFrRWZmZWN0KSB7IHJldHVybiBzbi5HZXRBcnRPYmplY3QoYWtFZmZlY3QpOyB9O1xyXG4vL1JldHVybnMgdGhlIHRvdGFsIG51bWJlciBvZiBhcnQgb2JqZWN0cyBwcmVzZW50L2FjdGl2ZSAob24gb2JqZWN0cykgd2l0aGluIHRoZSBsb2FkZWQgYXJlYS5cclxuZXhwb3J0IHZhciBHZXRBcnRPYmplY3RUb3RhbENvdW50ID0gZnVuY3Rpb24gKGFrRWZmZWN0LCBhYkFjdGl2ZSkgeyByZXR1cm4gc24uR2V0QXJ0T2JqZWN0VG90YWxDb3VudChha0VmZmVjdCwgYWJBY3RpdmUpOyB9O1xyXG4vLy0tLS0tLS0tXHJcbi8vU0VUVEVSU1xyXG4vLy0tLS0tLS0tXHJcbi8vU2V0cyB0aGUgYXJ0IG9iamVjdCBhc3NvY2lhdGVkIHdpdGggdGhlIHZpc3VhbCBlZmZlY3QuXHJcbmV4cG9ydCB2YXIgU2V0QXJ0T2JqZWN0ID0gZnVuY3Rpb24gKGFrRWZmZWN0LCBha0FydCkgeyByZXR1cm4gc24uU2V0QXJ0T2JqZWN0KGFrRWZmZWN0LCBha0FydCk7IH07XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy9XRUFUSEVSXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vL0dldHMgd2luZCBzcGVlZCBhcyBzaG93biBhcyBpbiBDSyBjb25kaXRpb25zICgwLjAtMS4wKS5cclxuZXhwb3J0IHZhciBHZXRXaW5kU3BlZWRBc0Zsb2F0ID0gZnVuY3Rpb24gKGFrV2VhdGhlcikgeyByZXR1cm4gc24uR2V0V2luZFNwZWVkQXNGbG9hdChha1dlYXRoZXIpOyB9O1xyXG4vL0dldHMgd2luZCBzcGVlZCBhcyBzaG93biBpbiB0aGUgd2VhdGhlciBmb3JtICgwLTI1NSkuXHJcbmV4cG9ydCB2YXIgR2V0V2luZFNwZWVkQXNJbnQgPSBmdW5jdGlvbiAoYWtXZWF0aGVyKSB7IHJldHVybiBzbi5HZXRXaW5kU3BlZWRBc0ludChha1dlYXRoZXIpOyB9O1xyXG4vKiogV0VBVEhFUiBUWVBFU1xyXG4gICAgICAgIFBsZWFzYW50ID0gMFxyXG4gICAgICAgIENsb3VkeSA9IDFcclxuICAgICAgICBSYWlueSA9IDJcclxuICAgICAgICBTbm93ID0gMyAqL1xyXG4vL0dldHMgd2VhdGhlci9jdXJyZW50IHdlYXRoZXIgdHlwZSBpZiBha1dlYXRoZXIgaXMgTm9uZVxyXG5leHBvcnQgdmFyIEdldFdlYXRoZXJUeXBlID0gZnVuY3Rpb24gKGFrV2VhdGhlcikge1xyXG4gICAgaWYgKGFrV2VhdGhlciA9PT0gdm9pZCAwKSB7IGFrV2VhdGhlciA9IG51bGw7IH1cclxuICAgIHJldHVybiBzbi5HZXRXZWF0aGVyVHlwZShha1dlYXRoZXIpO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBHYW1lLCBEZWJ1ZywgVWksIHdyaXRlTG9ncyB9IGZyb20gXCJza3lyaW1QbGF0Zm9ybVwiO1xyXG5pbXBvcnQgeyBHZXRBY3RvclZhbHVlTW9kaWZpZXIsIEludFRvU3RyaW5nIH0gZnJvbSBcIkBza3lyaW0tcGxhdGZvcm0vcG8zLXBhcHlydXMtZXh0ZW5kZXIvUE8zX1NLU0VGdW5jdGlvbnNcIjtcclxuZXhwb3J0IGZ1bmN0aW9uIEZvcm1Ub1N0cmluZyhha0Zvcm0pIHtcclxuICAgIHZhciBmb3JtaWQgPSBha0Zvcm0uZ2V0Rm9ybUlEKCk7XHJcbiAgICB2YXIgZm9ybXN0cmluZyA9IEludFRvU3RyaW5nKGZvcm1pZCwgdHJ1ZSk7XHJcbiAgICByZXR1cm4gZm9ybXN0cmluZztcclxufVxyXG47XHJcbmV4cG9ydCBmdW5jdGlvbiBwbCgpIHtcclxuICAgIHJldHVybiBHYW1lLmdldFBsYXllcigpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiB0cmFjZUxvZyhmdW5jdGlvbk5hbWUsIG1zZywgc3RhY2tJbmRlbnQpIHtcclxuICAgIGlmIChtc2cgPT09IHZvaWQgMCkgeyBtc2cgPSBcIlwiOyB9XHJcbiAgICBpZiAoc3RhY2tJbmRlbnQgPT09IHZvaWQgMCkgeyBzdGFja0luZGVudCA9IDA7IH1cclxuICAgIHZhciBzQmFzZUluZGVudCA9IFwiXCI7XHJcbiAgICB3aGlsZSAoc3RhY2tJbmRlbnQgPiAwKSB7XHJcbiAgICAgICAgc0Jhc2VJbmRlbnQgPSBzQmFzZUluZGVudCArIFwiICBcIjtcclxuICAgICAgICBzdGFja0luZGVudC0tO1xyXG4gICAgfVxyXG4gICAgdmFyIHJlc3VsdCA9IHNCYXNlSW5kZW50ICsgXCJMb3JpY2FfUmVkb25lXCIgKyBcIjo6XCIgKyBmdW5jdGlvbk5hbWU7XHJcbiAgICBpZiAobXNnICE9IFwiXCIpIHtcclxuICAgICAgICByZXN1bHQgPSByZXN1bHQgKyBcIiAtPiBcIjtcclxuICAgIH1cclxuICAgIERlYnVnLnRyYWNlKHJlc3VsdCArIG1zZywgMCk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGxvZyhtZXNzYWdlKSB7XHJcbiAgICB2YXIgdCA9IG5ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoKTtcclxuICAgIHZhciBtc2cgPSB0ICsgJyA6OiAnICsgbWVzc2FnZTtcclxuICAgIHdyaXRlTG9ncyhcIkxvcmljYVJlZG9uZVwiLCBtc2cpO1xyXG59XHJcbmV4cG9ydCB2YXIgc3VLZXlzO1xyXG4oZnVuY3Rpb24gKHN1S2V5cykge1xyXG4gICAgc3VLZXlzW1wibWFpblwiXSA9IFwiTG9yaWNhUmVkb25lXCI7XHJcbiAgICBzdUtleXNbXCJpQ29zdExpc3RcIl0gPSBcIkluZGl2aWR1YWwgVXBrZWVwIENvc3Qgb2YgYWxsIE1haW50YWluZWQgU3BlbGxzXCI7XHJcbiAgICBzdUtleXNbXCJmb3JtVXBrZWVwTGlzdFwiXSA9IFwiVXBrZWVwIFNwZWxsc1wiO1xyXG4gICAgc3VLZXlzW1wiZm9ybUJsYWNrTGlzdFwiXSA9IFwiU3BlbGxzIEJsYWNrbGlzdGVkIGZyb20gTG9yaWNhXCI7XHJcbiAgICBzdUtleXNbXCJmb3JtQXBwbGllZExpc3RcIl0gPSBcIlNwZWxscyBDdXJyZW50bHkgQXBwbGllZFwiO1xyXG4gICAgc3VLZXlzW1wiaUN1bVRvdGFsXCJdID0gXCJUb3RhbCBDdW11bGF0aXZlIFBlbmFsdHlcIjtcclxuICAgIHN1S2V5c1tcImZDdW1GcmFjdGlvblwiXSA9IFwiTnVtYmVyIHRvIG11bHQgbWFnbml0dWRlIGJ5XCI7XHJcbiAgICBzdUtleXNbXCJpVXBrZWVwVG90YWxcIl0gPSBcIlRvdGFsIERlYnVmZnNcIjtcclxuICAgIHN1S2V5c1tcImJTdXN0YWluZWRNYWdpY1wiXSA9IFwiU3VzdGFpbmVkIE1hZ2ljIE1vZGUgVG9nZ2xlXCI7XHJcbiAgICBzdUtleXNbXCJmb3JtRXhjbHVzaW9uTGlzdFwiXSA9IFwiU3BlbGxzIHRvIGV4Y2x1ZGUgZnJvbSBmaXJzdCBkaXNwZWxcIjtcclxuICAgIHN1S2V5c1tcImZVcGtlZXBNdWx0XCJdID0gXCJTcGVsbCBEZWJ1ZmYgQ29zdCBNdWx0aXBsaWVyXCI7XHJcbiAgICBzdUtleXNbXCJiRHVhbENhc3RcIl0gPSBcIkR1YWwgQ2FzdCBGbGFnXCI7XHJcbiAgICBzdUtleXNbXCJmUml0dWFsTXVsdFwiXSA9IFwiUml0dWFsIFNwZWxsIERlYnVmZiBDb3N0IE11bHRpcGxpZXJcIjtcclxuICAgIHN1S2V5c1tcImZDb3N0TXVsdFwiXSA9IFwiU3BlbGwgRGVidWZmIENvc3QgTXVsdGlwbGllclwiO1xyXG4gICAgc3VLZXlzW1wiaURlYnVmZk1pblwiXSA9IFwiTWluaW11bSBEZWJ1ZmYgQ29zdFwiO1xyXG4gICAgc3VLZXlzW1wiYkNvbXBhdEluaXRpYWxpemVkXCJdID0gXCJZTS5Mb3JpY2EuQ29tcGF0LkluaXRcIjtcclxuICAgIHN1S2V5c1tcImlDb21wYXRBbGxTcGVsbHNcIl0gPSBcIllNLkxvcmljYS5Db21wYXQuQWxsU3BlbGxzXCI7XHJcbiAgICBzdUtleXNbXCJNQ01fRW51bV9VcGtlZXBcIl0gPSBcIllNLkxvcmljYS5NQ00uRW51bS5VcGtlZXBcIjtcclxuICAgIHN1S2V5c1tcIk1DTV9FbnVtX0JsYWNrbGlzdFwiXSA9IFwiWU0uTG9yaWNhLk1DTS5FbnVtLkJsYWNrbGlzdFwiO1xyXG4gICAgc3VLZXlzW1wiTUNNX0VudW1fVXRpbGl0eVwiXSA9IFwiWU0uTG9yaWNhLk1DTS5FbnVtLkV4Y2x1c2lvblwiO1xyXG4gICAgc3VLZXlzW1wiaUNoYXJnZU1heER1cmF0aW9uXCJdID0gXCJZTS5MT1JJQ0EuQ0hBUkdFLkRVUkFUSU9OLk1BWFwiO1xyXG4gICAgc3VLZXlzW1wiaUNoYXJnZUR1cmF0aW9uVXBwZXJCb3VuZFwiXSA9IFwiWU0uTE9SSUNBLkNIQVJHRS5EVVJBVElPTi5VUFBFUkJPVU5EXCI7XHJcbiAgICBzdUtleXNbXCJpQ2hhcmdlQ29zdFNvbHV0aW9uXCJdID0gXCJZTS5MT1JJQ0EuQ0hBUkdFLkRVUkFUSU9OLlNPTFVUSU9OXCI7XHJcbiAgICBzdUtleXNbXCJpQ2hhcmdlQ29zdEFzeW1wdG90ZVwiXSA9IFwiWU0uTE9SSUNBLkNIQVJHRS5EVVJBVElPTi5BU1lNUFRPVEVcIjtcclxuICAgIHN1S2V5c1tcImJDaGFyZ2luZ0VuYWJsZVwiXSA9IFwiWU0uTE9SSUNBLkNIQVJHRS5FTkFCTEVcIjtcclxufSkoc3VLZXlzIHx8IChzdUtleXMgPSB7fSkpO1xyXG47XHJcbmV4cG9ydCB2YXIganVLZXlzO1xyXG4oZnVuY3Rpb24gKGp1S2V5cykge1xyXG4gICAganVLZXlzW1wicGF0aFwiXSA9IFwiLi4vTG9yaWNhIFJlZG9uZS9TcGVsbExpc3RcIjtcclxufSkoanVLZXlzIHx8IChqdUtleXMgPSB7fSkpO1xyXG47XHJcbmltcG9ydCB7IEdldEludFZhbHVlIH0gZnJvbSBcIkBza3lyaW0tcGxhdGZvcm0vcGFweXJ1cy11dGlsL1N0b3JhZ2VVdGlsXCI7XHJcbmV4cG9ydCBmdW5jdGlvbiBVSVVwZGF0ZURlYnVmZk1ldGVyKCkge1xyXG4gICAgdmFyIGZNYW5hTWF4UmVtYWluaW5nID0gcGwoKS5nZXRCYXNlQWN0b3JWYWx1ZShcIm1hZ2lja2FcIikgKyBHZXRBY3RvclZhbHVlTW9kaWZpZXIocGwoKSwgMCwgXCJtYWdpY2thXCIpO1xyXG4gICAgdmFyIGZNYXggPSBmTWFuYU1heFJlbWFpbmluZyArIEdldEludFZhbHVlKG51bGwsIHN1S2V5cy5pVXBrZWVwVG90YWwpICsgR2V0SW50VmFsdWUobnVsbCwgc3VLZXlzLmlDdW1Ub3RhbCk7XHJcbiAgICB2YXIgZlBlcmNlbnQgPSAxMDAgLSAoKGZNYW5hTWF4UmVtYWluaW5nIC8gZk1heCkgKiAxMDApO1xyXG4gICAgVWkuaW52b2tlRmxvYXQoXCJIVUQgTWVudVwiLCBcIl9yb290LkhVRE1vdmllQmFzZUluc3RhbmNlLlNldEV4aGF1c3Rpb25QZW5hbHR5TWV0ZXJcIiwgZlBlcmNlbnQpO1xyXG59XHJcbjtcclxuIiwiaW1wb3J0IHsgcHJpbnRDb25zb2xlLCBGb3JtLCBHYW1lLCBTcGVsbCwgRGVidWcsIG9uY2UsIEZvcm1MaXN0LCBLZXl3b3JkLCBNYWdpY0VmZmVjdCB9IGZyb20gXCJza3lyaW1QbGF0Zm9ybVwiO1xyXG5pbXBvcnQgeyBBZGRNYWdpY0VmZmVjdFRvU3BlbGwsIEdldEVmZmVjdEFyY2hldHlwZUFzSW50LCBHZXRBbGxTcGVsbHMsIFJlbW92ZUVmZmVjdEl0ZW1Gcm9tU3BlbGwgfSBmcm9tIFwiQHNreXJpbS1wbGF0Zm9ybS9wbzMtcGFweXJ1cy1leHRlbmRlci9QTzNfU0tTRUZ1bmN0aW9uc1wiO1xyXG5pbXBvcnQgeyBwbCwganVLZXlzLCBzdUtleXMsIEZvcm1Ub1N0cmluZyB9IGZyb20gXCIuL1lNX0xvcmljYV9TaGFyZWRcIjtcclxuaW1wb3J0IHsgRm9ybUxpc3RBZGQsIEZvcm1MaXN0Q291bnQsIFNhdmUsIEZvcm1MaXN0R2V0LCBGb3JtTGlzdFJlbW92ZSwgRm9ybUxpc3RIYXMsIEZvcm1MaXN0VG9BcnJheSBhcyBVcGtlZXBBcnJheSwgSW50TGlzdEFkZCB9IGZyb20gXCJAc2t5cmltLXBsYXRmb3JtL3BhcHlydXMtdXRpbC9Kc29uVXRpbFwiO1xyXG5pbXBvcnQgeyBHZXRGbG9hdFZhbHVlLCBHZXRJbnRWYWx1ZSwgU2V0RmxvYXRWYWx1ZSwgU2V0SW50VmFsdWUgfSBmcm9tIFwiQHNreXJpbS1wbGF0Zm9ybS9wYXB5cnVzLXV0aWwvU3RvcmFnZVV0aWxcIjtcclxuLy8gdGhpcyBpcyBiYXNpY2FsbHkgb3VyIGRlZmF1bHQgaW5pdCBzdHVmZlxyXG5leHBvcnQgdmFyIG1haW5Db21wYXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUNPTVBBVEFCSUxJVFkgU0VDVElPTi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIG9uY2UoJ3VwZGF0ZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBpZiAoIEdldEludFZhbHVlKG51bGwsIHN1S2V5cy5iQ29tcGF0SW5pdGlhbGl6ZWQsIDApID09IDAgKSB7XHJcbiAgICAgICAgdmFyIGZvcm1saXN0VXBrZWVwID0gRm9ybUxpc3QuZnJvbShHYW1lLmdldEZvcm1Gcm9tRmlsZSgweDFENjIsIFwiTG9yaWNhIFJlZG9uZS5lc3BcIikpO1xyXG4gICAgICAgIEdhbWUuc2V0R2FtZVNldHRpbmdGbG9hdChcImZNYWdpY0xlc3NlclBvd2VyQ29vbGRvd25UaW1lclwiLCAwLjAxKTsgLy8gbWFrZSBsZXNzZXIgcG93ZXJzIHNwYW1tYWJsZSwgdG8gZW5hYmxlIHNwYW1taW5nIHRoZSBkaXNwZWwgcG93ZXJcclxuICAgICAgICAvLyBpZiAoICFmb3JtbGlzdFVwa2VlcCApIHsgcmV0dXJuOyB9O1xyXG4gICAgICAgIHZhciBhbGxzcGVsbHM7XHJcbiAgICAgICAgYWxsc3BlbGxzID0gR2V0QWxsU3BlbGxzKG51bGwsIHRydWUpOyAvLyBHZXRBbGxTcGVsbHMoS2V5d29yZFtdIGFrS2V5d29yZHMgPSBOb25lLCBib29sIGFiSXNQbGF5YWJsZSA9IGZhbHNlKVxyXG4gICAgICAgIFNldEludFZhbHVlKG51bGwsIHN1S2V5cy5pQ29tcGF0QWxsU3BlbGxzLCBhbGxzcGVsbHMubGVuZ3RoKTtcclxuICAgICAgICBmb3JtbGlzdFVwa2VlcCA9PT0gbnVsbCB8fCBmb3JtbGlzdFVwa2VlcCA9PT0gdm9pZCAwID8gdm9pZCAwIDogZm9ybWxpc3RVcGtlZXAucmV2ZXJ0KCk7XHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS1BZGQgYWxsIGFwcHJvcHJpYXRlIHNwZWxscyB0byBMb3JpY2EtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhbGxzcGVsbHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIGZvcm1TcGVsbCA9IEZvcm0uZnJvbShhbGxzcGVsbHNbaV0pO1xyXG4gICAgICAgICAgICBpZiAoIUZvcm1MaXN0SGFzKGp1S2V5cy5wYXRoLCBzdUtleXMuZm9ybUJsYWNrTGlzdCwgZm9ybVNwZWxsKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzUmlnaHRTcGVsbFR5cGUoZm9ybVNwZWxsKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIEludExpc3RBZGQoanVLZXlzLnBhdGgsIHN1S2V5cy5mb3JtVXBrZWVwTGlzdCwgZm9ybVNwZWxsID09PSBudWxsIHx8IGZvcm1TcGVsbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogZm9ybVNwZWxsLmdldEZvcm1JRCgpLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgRm9ybUxpc3RBZGQoanVLZXlzLnBhdGgsIHN1S2V5cy5mb3JtVXBrZWVwTGlzdCwgZm9ybVNwZWxsLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZm9ybWxpc3RVcGtlZXA/LmFkZEZvcm0oZm9ybVNwZWxsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDtcclxuICAgICAgICBTZXRJbnRWYWx1ZShudWxsLCBzdUtleXMuYkNoYXJnaW5nRW5hYmxlLCAxKTtcclxuICAgICAgICBTZXRJbnRWYWx1ZShudWxsLCBzdUtleXMuaUNoYXJnZUNvc3RBc3ltcHRvdGUsIDEwMCk7XHJcbiAgICAgICAgU2V0SW50VmFsdWUobnVsbCwgc3VLZXlzLmlDaGFyZ2VDb3N0U29sdXRpb24sIDIwKTtcclxuICAgICAgICBTZXRJbnRWYWx1ZShudWxsLCBzdUtleXMuaUNoYXJnZUR1cmF0aW9uVXBwZXJCb3VuZCwgMTApO1xyXG4gICAgICAgIFNldEludFZhbHVlKG51bGwsIHN1S2V5cy5pQ2hhcmdlTWF4RHVyYXRpb24sIDEwKTtcclxuICAgICAgICBTYXZlKGp1S2V5cy5wYXRoKTtcclxuICAgICAgICBVcGRhdGVBbGxTcGVsbHMoKTtcclxuICAgICAgICAvLyBDbGVhblVwKClcclxuICAgICAgICAvLyBwcmludENvbnNvbGUoRm9ybUxpc3RDb3VudChqdUtleXMucGF0aCwgc3VLZXlzLmZvcm1VcGtlZXBMaXN0KSlcclxuICAgICAgICBTZXRJbnRWYWx1ZShudWxsLCBzdUtleXMuYkNvbXBhdEluaXRpYWxpemVkLCAxKTtcclxuICAgICAgICBwcmludENvbnNvbGUoXCJMb3JpY2EgUmVkb25lIHN0YXJ0ZWRcIik7XHJcbiAgICAgICAgLy8gfTtcclxuICAgIH0pO1xyXG59O1xyXG5leHBvcnQgZnVuY3Rpb24gVXBkYXRlQWxsU3BlbGxzKCkgeyBTZXRDb3N0cygnYWxsJyk7IENsZWFuVXAoKTsgfVxyXG5mdW5jdGlvbiBDbGVhblVwKCkge1xyXG4gICAgdmFyIGFsbHNwZWxscyA9IFVwa2VlcEFycmF5KGp1S2V5cy5wYXRoLCBzdUtleXMuZm9ybVVwa2VlcExpc3QpO1xyXG4gICAgdmFyIGlzSW5CbGFja2xpc3QgPSBmdW5jdGlvbiAoc3BlbGwpIHsgaWYgKEZvcm1MaXN0SGFzKGp1S2V5cy5wYXRoLCBzdUtleXMuZm9ybUJsYWNrTGlzdCwgc3BlbGwpKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9IH07XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFsbHNwZWxscy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHZhciBmID0gYWxsc3BlbGxzW2ldO1xyXG4gICAgICAgIGlmIChpc0luQmxhY2tsaXN0KGYpKSB7XHJcbiAgICAgICAgICAgIEZvcm1MaXN0UmVtb3ZlKGp1S2V5cy5wYXRoLCBzdUtleXMuZm9ybVVwa2VlcExpc3QsIGYsIHRydWUpO1xyXG4gICAgICAgICAgICBSZW1vdmVEZXNjcmlwdGlvbihmKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgO1xyXG4gICAgfVxyXG59XHJcbnZhciBpc1JpZ2h0U3BlbGxUeXBlID0gZnVuY3Rpb24gKGFrRm9ybSkge1xyXG4gICAgLypcclxuICAgIEJvdW5kV2VhcG9uICAgID0gMTdcclxuICAgIFN1bW1vbkNyZWF0dXJlID0gMThcclxuICAgIFJlYW5pbWF0ZSAgICAgID0gMjJcclxuXHJcbiAgICBDYXN0aW5nIFR5cGVzOlxyXG4gICAgQ29uc3RhbnQgPSAwXHJcbiAgICBGRiA9IDFcclxuICAgIENvbmMgPSAyXHJcblxyXG4gICAgRGVsaXZlcnkgVHlwZTpcclxuICAgIFNlbGYgPSAwXHJcbiAgICBDb250YWN0ID0gMVxyXG4gICAgQWltZWQgPSAyXHJcbiAgICBUYXJnZXQgQWN0b3IgPSAzXHJcbiAgICBUYXJnZXQgTG9jYXRpb24gPSA0XHJcbiAgICAqL1xyXG4gICAgdmFyIEFyY2hldHlwZSA9IGZ1bmN0aW9uIChha0Zvcm0pIHsgdmFyIEUgPSBTcGVsbC5mcm9tKGFrRm9ybSkuZ2V0TnRoRWZmZWN0TWFnaWNFZmZlY3QoMCk7IHJldHVybiBHZXRFZmZlY3RBcmNoZXR5cGVBc0ludChFKTsgfTtcclxuICAgIHZhciBEdXJhdGlvbiA9IGZ1bmN0aW9uIChha0Zvcm0pIHsgdmFyIEUgPSBTcGVsbC5mcm9tKGFrRm9ybSkuZ2V0TnRoRWZmZWN0TWFnaWNFZmZlY3QoMCk7IHJldHVybiBTcGVsbC5mcm9tKGFrRm9ybSkuZ2V0TnRoRWZmZWN0RHVyYXRpb24oMCk7IH07XHJcbiAgICB2YXIgRWZmZWN0ID0gU3BlbGwuZnJvbShha0Zvcm0pLmdldE50aEVmZmVjdE1hZ2ljRWZmZWN0KDApO1xyXG4gICAgdmFyIGlEZWxpdmVyeVR5cGUgPSBFZmZlY3QuZ2V0RGVsaXZlcnlUeXBlKCk7XHJcbiAgICB2YXIgaUNhc3RUeXBlID0gRWZmZWN0LmdldENhc3RpbmdUeXBlKCk7XHJcbiAgICB2YXIgbmFtZSA9IEVmZmVjdC5nZXROYW1lKCk7XHJcbiAgICAvKiBvbmx5IGluY2x1ZGUgc3BlbGxzIHRoYXQgdGFyZ2V0ICdzZWxmJyBhbmQgYXJlICdmaXJlIGFuZCBmb3JnZXQnOyBpZiB0aGV5IGFyZSAnZmlyZSBhbmQgZm9yZ2V0JyBhbmQgJ2FpbWVkLCcgb25seSBpbmNsdWRlICdjb25qdXJhdGlvbicgc3BlbGxzXHJcbiAgICAgICAgPT4gRkYgYW5kIFNlbGYgU3BlbGxzO1x0RkYgYW5kIEFpbWVkIHNwZWxscyBhbmQgUmVuYWltYXRlIHNwZWxsczsgRkYgYW5kIFRhcmdldCBMb2NhdGlvbiBhbmQgU3VtbW9uIHNwZWxsc1xyXG4gICAgKi9cclxuICAgIGlmIChuYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoJ25wYycpKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKGlDYXN0VHlwZSA9PSAxICYmIGlEZWxpdmVyeVR5cGUgPT0gMCAmJiBEdXJhdGlvbihha0Zvcm0pID4gMVxyXG4gICAgICAgIHx8IGlDYXN0VHlwZSA9PSAxICYmIGlEZWxpdmVyeVR5cGUgPT0gMiAmJiBBcmNoZXR5cGUoYWtGb3JtKSA9PSAyMlxyXG4gICAgICAgIHx8IGlDYXN0VHlwZSA9PSAxICYmIGlEZWxpdmVyeVR5cGUgPT0gNCAmJiBBcmNoZXR5cGUoYWtGb3JtKSA9PSAxOCkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59O1xyXG4vLyBtYWluIGZ1bmN0aW9uIHRvIGluY29ycG9yYXRlIHNwZWxscyBpbnRvIGxvcmljYVxyXG5leHBvcnQgZnVuY3Rpb24gU2V0Q29zdHMob3B0aW9uLCBha3NwZWxsKSB7XHJcbiAgICAvLyBpZiAoICFha3NwZWxsICkgeyBEZWJ1Zy5ub3RpZmljYXRpb24oXCJzb21ldGhpbmcgd2VudCB3cm9uZ1wiKTsgcmV0dXJuOyB9XHJcbiAgICB2YXIga2V5d29yZFJpdHVhbCA9IEtleXdvcmQuZnJvbShHYW1lLmdldEZvcm1FeCgweDgwNmUxKSk7XHJcbiAgICB2YXIgbWFpbiA9IGZ1bmN0aW9uIChzcGVsbCkge1xyXG4gICAgICAgIGlmICghc3BlbGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICA7XHJcbiAgICAgICAgdmFyIGlNYWcgPSAwO1xyXG4gICAgICAgIHZhciBzU3BlbGwgPSBGb3JtVG9TdHJpbmcoc3BlbGwpO1xyXG4gICAgICAgIHZhciBmQ29zdCA9IFNwZWxsLmZyb20oc3BlbGwpLmdldEVmZmVjdGl2ZU1hZ2lja2FDb3N0KHBsKCkpO1xyXG4gICAgICAgIGlmIChzcGVsbC5oYXNLZXl3b3JkKGtleXdvcmRSaXR1YWwpKSB7XHJcbiAgICAgICAgICAgIGlNYWcgPSBmQ29zdCAqIEdldEZsb2F0VmFsdWUobnVsbCwgc3VLZXlzLmZSaXR1YWxNdWx0LCAwLjUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaU1hZyA9IGZDb3N0ICogR2V0RmxvYXRWYWx1ZShudWxsLCBzdUtleXMuZkNvc3RNdWx0LCAwLjUpO1xyXG4gICAgICAgICAgICAvLyBwcmludENvbnNvbGUoXCJTRVRDT1NUUzo6IEdldEZsb2F0VmFsdWUobnVsbCwgc3VLZXlzLmZDb3N0TXVsdCwgMC41KSA9PiBcIiArIEdldEZsb2F0VmFsdWUobnVsbCwgc3VLZXlzLmZDb3N0TXVsdCwgMC41KSlcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGZNaW4gPSBHZXRJbnRWYWx1ZShudWxsLCBzdUtleXMuaURlYnVmZk1pbiwgMTUpO1xyXG4gICAgICAgIGlNYWcgPSBNYXRoLmZsb29yKGlNYWcpO1xyXG4gICAgICAgIGlmIChpTWFnIDwgZk1pbikge1xyXG4gICAgICAgICAgICBpTWFnID0gZk1pbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgUmVtb3ZlRGVzY3JpcHRpb24oc3BlbGwpO1xyXG4gICAgICAgIFNldEZsb2F0VmFsdWUobnVsbCwgc1NwZWxsLCBpTWFnKTtcclxuICAgICAgICBBZGREZXNjcmlwdGlvbihzcGVsbCwgaU1hZyk7XHJcbiAgICB9O1xyXG4gICAgLy8gY29uc3QgQ2xlYW5VcCA9IGZ1bmN0aW9uICggc3BlbGw6IEZvcm0gKSB7ICB9XHJcbiAgICAvLyBpZiAoIGlzSW5CbGFja2xpc3QoYWtzcGVsbCEpICkgeyB9XHJcbiAgICBpZiAob3B0aW9uLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoXCJhbGxcIikpIHtcclxuICAgICAgICBEZWJ1Zy5ub3RpZmljYXRpb24oXCJBZGRpbmcgb3IgcmVhcHBseWluZyBkZWJ1ZmZzIHRvIHNwZWxsc1wiKTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IEZvcm1MaXN0Q291bnQoanVLZXlzLnBhdGgsIHN1S2V5cy5mb3JtVXBrZWVwTGlzdCk7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgZm9ybXNwZWxsID0gRm9ybUxpc3RHZXQoanVLZXlzLnBhdGgsIHN1S2V5cy5mb3JtVXBrZWVwTGlzdCwgaSk7XHJcbiAgICAgICAgICAgIGlmICghZm9ybXNwZWxsIHx8ICFpc1JpZ2h0U3BlbGxUeXBlKGZvcm1zcGVsbCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA7XHJcbiAgICAgICAgICAgIG1haW4oZm9ybXNwZWxsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgO1xyXG4gICAgICAgIERlYnVnLm5vdGlmaWNhdGlvbihcIkZpbmlzaGVkIGFkZGluZyBvciByZWFwcGx5aW5nIGRlYnVmZnMgdG8gc3BlbGxzXCIpO1xyXG4gICAgfVxyXG4gICAgO1xyXG4gICAgaWYgKG9wdGlvbiA9PSBcInNpbmdsZVwiKSB7XHJcbiAgICAgICAgRGVidWcubm90aWZpY2F0aW9uKFwiQWRkaW5nIG9yIHJlYXBwbHlpbmcgZGVidWZmcyB0byBzcGVsbHNcIik7XHJcbiAgICAgICAgaWYgKGlzUmlnaHRTcGVsbFR5cGUoYWtzcGVsbCkpIHtcclxuICAgICAgICAgICAgbWFpbihha3NwZWxsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgO1xyXG4gICAgICAgIERlYnVnLm5vdGlmaWNhdGlvbihcIkZpbmlzaGVkIGFkZGluZyBvciByZWFwcGx5aW5nIGRlYnVmZnMgdG8gc3BlbGxzXCIpO1xyXG4gICAgfVxyXG4gICAgO1xyXG4gICAgLy8gcmVtb3ZlIG51bGwgZW50cmllcyBmcm9tIHNwZWxsIGxpc3RzXHJcbiAgICBGb3JtTGlzdFJlbW92ZShqdUtleXMucGF0aCwgc3VLZXlzLmZvcm1VcGtlZXBMaXN0LCBudWxsLCB0cnVlKTtcclxuICAgIEZvcm1MaXN0UmVtb3ZlKGp1S2V5cy5wYXRoLCBzdUtleXMuZm9ybUJsYWNrTGlzdCwgbnVsbCwgdHJ1ZSk7XHJcbiAgICBGb3JtTGlzdFJlbW92ZShqdUtleXMucGF0aCwgc3VLZXlzLmZvcm1FeGNsdXNpb25MaXN0LCBudWxsLCB0cnVlKTtcclxuICAgIFNhdmUoanVLZXlzLnBhdGgpO1xyXG59XHJcbjtcclxuLy8gYWRkIGN1c3RvbSBkdW1teSBtYWdpYyBlZmZlY3QgdG8gc3BlbGxzLCB3aXRoIGRlc2NyaXB0aW9ucyBkZXRhaWxpbmcgZGVidWZmIGNvc3QgZm9yIGVhY2ggc3BlbGxcclxuZnVuY3Rpb24gQWRkRGVzY3JpcHRpb24oc3BlbGwsIGlNYWcpIHtcclxuICAgIC8vIGR1bW15IG1nZWYncyB0byBob2xkIGN1c3RvbSBkZXNjcmlwdGlvblxyXG4gICAgdmFyIGR1bW15U2VsZiA9IE1hZ2ljRWZmZWN0LmZyb20oR2FtZS5nZXRGb3JtRnJvbUZpbGUoMHgwMDFDNDEsIFwiTG9yaWNhIFJlZG9uZS5lc3BcIikpO1xyXG4gICAgdmFyIGR1bW15QWltZWQgPSBNYWdpY0VmZmVjdC5mcm9tKEdhbWUuZ2V0Rm9ybUZyb21GaWxlKDB4MDAxRTUzLCBcIkxvcmljYSBSZWRvbmUuZXNwXCIpKTtcclxuICAgIHZhciBkdW1teVRhcmdldExvY2F0aW9uID0gTWFnaWNFZmZlY3QuZnJvbShHYW1lLmdldEZvcm1Gcm9tRmlsZSgweDAwMUU1NCwgXCJMb3JpY2EgUmVkb25lLmVzcFwiKSk7XHJcbiAgICAvLyBsb25nZXN0IGEgc3BlbGwvbWdlZiBjYW4gbGFzdCBpbiBza3lyaW07IGEgd2hvbGUgZGF5IEkgYmVsaWV2ZSwgaW4gc2Vjb25kc1xyXG4gICAgdmFyIGxvbmd0aW1lID0gODQ2MDA7XHJcbiAgICB2YXIgUyA9IFNwZWxsLmZyb20oc3BlbGwpO1xyXG4gICAgdmFyIEVmZmVjdCA9IFMuZ2V0TnRoRWZmZWN0TWFnaWNFZmZlY3QoMCk7XHJcbiAgICB2YXIgaURlbGl2ZXJ5VHlwZSA9IEVmZmVjdC5nZXREZWxpdmVyeVR5cGUoKTtcclxuICAgIFJlbW92ZURlc2NyaXB0aW9uKHNwZWxsKTtcclxuICAgIGlmIChpRGVsaXZlcnlUeXBlID09IDApIHtcclxuICAgICAgICBBZGRNYWdpY0VmZmVjdFRvU3BlbGwoUywgZHVtbXlTZWxmLCBpTWFnLCAwLCBsb25ndGltZSwgMCk7XHJcbiAgICB9XHJcbiAgICA7IC8vICcwJyBpcyB0YXJnZXQgc2VsZlxyXG4gICAgaWYgKGlEZWxpdmVyeVR5cGUgPT0gMikge1xyXG4gICAgICAgIEFkZE1hZ2ljRWZmZWN0VG9TcGVsbChTLCBkdW1teUFpbWVkLCBpTWFnLCAwLCBsb25ndGltZSwgMCk7XHJcbiAgICB9XHJcbiAgICA7IC8vICcyJyBpcyBhaW1lZFxyXG4gICAgaWYgKGlEZWxpdmVyeVR5cGUgPT0gNCkge1xyXG4gICAgICAgIEFkZE1hZ2ljRWZmZWN0VG9TcGVsbChTLCBkdW1teVRhcmdldExvY2F0aW9uLCBpTWFnLCAwLCBsb25ndGltZSwgMCk7XHJcbiAgICB9XHJcbiAgICA7IC8vICc0JyBpcyB0YXJnZXQgbG9jYXRpb25cdFxyXG59XHJcbjtcclxuZnVuY3Rpb24gUmVtb3ZlRGVzY3JpcHRpb24oYWtTcGVsbCkge1xyXG4gICAgdmFyIF9hO1xyXG4gICAgdmFyIFMgPSBTcGVsbC5mcm9tKGFrU3BlbGwpO1xyXG4gICAgLy8gaWYgKCAhUyApIHsgcmV0dXJuO31cclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgUy5nZXROdW1FZmZlY3RzKCk7IGkrKykge1xyXG4gICAgICAgIGlmICgoX2EgPSBTLmdldE50aEVmZmVjdE1hZ2ljRWZmZWN0KGkpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZ2V0TmFtZSgpLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoJ3N1c3RhaW4gc3BlbGwnKSkge1xyXG4gICAgICAgICAgICAvLyBSZW1vdmVNYWdpY0VmZmVjdEZyb21TcGVsbChTLCByZW1vdmVlZmZlY3QsIHJlbW92ZU1hZywgMCwgcmVtb3ZlRHVyICApO1xyXG4gICAgICAgICAgICBSZW1vdmVFZmZlY3RJdGVtRnJvbVNwZWxsKFMsIFMsIGkpO1xyXG4gICAgICAgICAgICAvLyBwcmludENvbnNvbGUoYCR7Uz8uZ2V0TmFtZSgpfSB3YXMgcmVtb3ZlZGApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgO1xyXG59XHJcbiIsImltcG9ydCB7IG9uLCBGb3JtLCBHYW1lIH0gZnJvbSBcInNreXJpbVBsYXRmb3JtXCI7XHJcbmltcG9ydCB7IEZvcm1MaXN0SGFzIH0gZnJvbSBcIkBza3lyaW0tcGxhdGZvcm0vcGFweXJ1cy11dGlsL0pzb25VdGlsXCI7XHJcbmltcG9ydCB7IEZvcm1MaXN0Q291bnQsIEZvcm1MaXN0VG9BcnJheSB9IGZyb20gXCJAc2t5cmltLXBsYXRmb3JtL3BhcHlydXMtdXRpbC9TdG9yYWdlVXRpbFwiO1xyXG5pbXBvcnQgeyBqdUtleXMsIHN1S2V5cyB9IGZyb20gXCIuL1lNX0xvcmljYV9TaGFyZWRcIjtcclxuaW1wb3J0IHsgVG9nZ2xlU3BlbGwgfSBmcm9tIFwiLi9Mb3JpY2FSZWRvbmVcIjtcclxuaW1wb3J0IHsgU2V0Q29zdHMgfSBmcm9tIFwiLi9ZTV9Mb3JpY2FfQ29tcGF0XCI7XHJcbmV4cG9ydCBmdW5jdGlvbiBEaXNwZWxTcGVsbHMob3B0aW9uKSB7XHJcbiAgICBpZiAob3B0aW9uID09PSB2b2lkIDApIHsgb3B0aW9uID0gJyc7IH1cclxuICAgIHZhciBsID0gRm9ybUxpc3RDb3VudChudWxsLCBzdUtleXMuZm9ybUFwcGxpZWRMaXN0KTtcclxuICAgIHZhciBhID0gRm9ybUxpc3RUb0FycmF5KG51bGwsIHN1S2V5cy5mb3JtQXBwbGllZExpc3QpO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICB2YXIgRiA9IGFbaV07XHJcbiAgICAgICAgaWYgKEZvcm1MaXN0SGFzKGp1S2V5cy5wYXRoLCBzdUtleXMuZm9ybUV4Y2x1c2lvbkxpc3QsIEYpICYmIG9wdGlvbi50b0xvd2VyQ2FzZSgpID09ICdleGNsdXNpdmUnKSB7XHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBUb2dnbGVTcGVsbChcIm9mZlwiLCBGKTtcclxuICAgIH1cclxufVxyXG47XHJcbmV4cG9ydCB2YXIgbWFpblV0aWxpdHlTcGVsbHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgaSA9IDA7XHJcbiAgICB2YXIgZmxhZyA9IGZhbHNlO1xyXG4gICAgb24oJ2VmZmVjdFN0YXJ0JywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgdmFyIF9hLCBfYiwgX2MsIF9kO1xyXG4gICAgICAgIHZhciBtZ2VmRGlzcGVsID0gKF9hID0gR2FtZS5nZXRGb3JtRnJvbUZpbGUoMHgxODFBLCBcIkxvcmljYSBSZWRvbmUuZXNwXCIpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZ2V0Rm9ybUlEKCk7XHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS1ESVNQRUwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgIGlmIChldmVudC5lZmZlY3QuZ2V0Rm9ybUlEKCkgPT0gbWdlZkRpc3BlbCkge1xyXG4gICAgICAgICAgICBmbGFnID0gdHJ1ZTtcclxuICAgICAgICAgICAgRGlzcGVsU3BlbGxzKCdleGNsdXNpdmUnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGV2ZW50LmVmZmVjdC5nZXRGb3JtSUQoKSA9PSBtZ2VmRGlzcGVsICYmIGkgPCAzMDAgJiYgaSA+IDApIHtcclxuICAgICAgICAgICAgaSA9IDA7XHJcbiAgICAgICAgICAgIGZsYWcgPSBmYWxzZTtcclxuICAgICAgICAgICAgRGlzcGVsU3BlbGxzKFwiQUxMXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICA7XHJcbiAgICAgICAgLy8gLS0tLS0tLURJU1BFTCBUSU1FUi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgb24oJ3VwZGF0ZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKGZsYWcpIHtcclxuICAgICAgICAgICAgICAgIGkrKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA7XHJcbiAgICAgICAgICAgIGlmIChpID4gMzAwKSB7XHJcbiAgICAgICAgICAgICAgICBpID0gMDtcclxuICAgICAgICAgICAgICAgIGZsYWcgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0td2hlbiAnQWRkIFNwZWxsJyBpcyB0cmlnZ2VyZWQtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgIHZhciBtZ2VmQWRkc3BlbGwgPSAoX2IgPSBHYW1lLmdldEZvcm1Gcm9tRmlsZSgweDAwMTgyMiwgXCJMb3JpY2EgUmVkb25lLmVzcFwiKSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmdldEZvcm1JRCgpO1xyXG4gICAgICAgIGlmIChldmVudC5lZmZlY3QuZ2V0Rm9ybUlEKCkgPT0gbWdlZkFkZHNwZWxsKSB7XHJcbiAgICAgICAgICAgIHZhciBsZWZ0ID0gRm9ybS5mcm9tKChfYyA9IEdhbWUuZ2V0UGxheWVyKCkpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5nZXRFcXVpcHBlZFNwZWxsKDApKTtcclxuICAgICAgICAgICAgdmFyIHJpZ2h0ID0gRm9ybS5mcm9tKChfZCA9IEdhbWUuZ2V0UGxheWVyKCkpID09PSBudWxsIHx8IF9kID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZC5nZXRFcXVpcHBlZFNwZWxsKDEpKTtcclxuICAgICAgICAgICAgaWYgKCFsZWZ0IHx8ICFyaWdodCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgU2V0Q29zdHMoXCJzaW5nbGVcIiwgbGVmdCk7XHJcbiAgICAgICAgICAgIFNldENvc3RzKFwic2luZ2xlXCIsIHJpZ2h0KTtcclxuICAgICAgICAgICAgLy8gcHJpbnRDb25zb2xlKFwibWFpbkFkZFNwZWxsc3BlbGw6OiBpdCB3b3JrZWRcIik7IFxyXG4gICAgICAgIH1cclxuICAgICAgICA7XHJcbiAgICB9KTtcclxufTtcclxuIiwiaW1wb3J0IHsgb24sIG9uY2UsIHByaW50Q29uc29sZSwgR2FtZSwgYnJvd3NlciwgaG9va3MgfSBmcm9tIFwic2t5cmltUGxhdGZvcm1cIjtcclxuaW1wb3J0IHsgU3RyaW5nTGlzdEFkZCwgR2V0U3RyaW5nVmFsdWUsIFNldEludFZhbHVlLCBHZXRJbnRWYWx1ZSwgU3RyaW5nTGlzdFRvQXJyYXksIFN0cmluZ0xpc3RDbGVhciB9IGZyb20gXCJAc2t5cmltLXBsYXRmb3JtL3BhcHlydXMtdXRpbC9TdG9yYWdlVXRpbFwiO1xyXG5pbXBvcnQgeyBGb3JtTGlzdFRvQXJyYXkgfSBmcm9tIFwiQHNreXJpbS1wbGF0Zm9ybS9wYXB5cnVzLXV0aWwvSnNvblV0aWxcIjtcclxuaW1wb3J0IHsganVLZXlzLCBzdUtleXMgfSBmcm9tIFwiLi9ZTV9Mb3JpY2FfU2hhcmVkXCI7XHJcbmltcG9ydCB7IFVwZGF0ZUFsbFNwZWxscyB9IGZyb20gXCIuL1lNX0xvcmljYV9Db21wYXRcIjtcclxudmFyIGZvY3VzZWQgPSBmYWxzZTtcclxudmFyIGNsb3NlID0gZmFsc2U7XHJcbmJyb3dzZXIubG9hZFVybChcImZpbGU6Ly8vRGF0YS9QbGF0Zm9ybS9VSS9sb3JpY2EtbWVudS5odG1sXCIpO1xyXG5leHBvcnQgdmFyIG1haW5NQ00gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBvbignbWVudUNsb3NlJywgZnVuY3Rpb24gKGV2ZW50KSB7IFNldEludFZhbHVlKG51bGwsIFwiWU0uTG9yaWNhLk1DTS5NZW51RmxhZ1wiLCAwKTsgfSk7XHJcbiAgICBvbignbWVudU9wZW4nLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKEdldEludFZhbHVlKG51bGwsIFwiWU0uTG9yaWNhLk1DTS5NZW51T3BlbkZsYWdcIiwgMCkgPT0gMSkge1xyXG4gICAgICAgICAgICBvbmNlKCd1cGRhdGUnLCBmdW5jdGlvbiAoKSB7IFNldEludFZhbHVlKG51bGwsIFwiWU0uTG9yaWNhLk1DTS5NZW51T3BlbkZsYWdcIiwgMCk7IH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICA7XHJcbiAgICB9KTtcclxuICAgIG9uY2UoJ3VwZGF0ZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgcGxheWVyID0gR2FtZS5nZXRQbGF5ZXIoKTtcclxuICAgICAgICBpZiAocGxheWVyKSB7XHJcbiAgICAgICAgICAgIHBsYXllci5yZWdpc3RlckZvck1vZEV2ZW50KFwiTG9yaWNhUmVkb25lX01lbnVfT3BlblwiLCBcIk9uTG9yaWNhT3BlblwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcGxheWVyLnJlZ2lzdGVyRm9yTW9kRXZlbnQoXCJMb3JpY2FSZWRvbmVfTWVudV9VcGtlZXBfSW5wdXRcIiwgXCJPblVwa2VlcElucHV0XCIpO1xyXG4gICAgICAgIHBsYXllci5yZWdpc3RlckZvck1vZEV2ZW50KFwiTG9yaWNhUmVkb25lX01lbnVfVXBrZWVwX0lucHV0X0NsZWFyXCIsIFwiT25JbnB1dENsZWFyXCIpO1xyXG4gICAgICAgIHBsYXllci5yZWdpc3RlckZvck1vZEV2ZW50KFwiTG9yaWNhUmVkb25lX01lbnVfQ2xvc2VfVXBkYXRlXCIsIFwiT25RdWV1ZWRDaGFuZ2VcIik7XHJcbiAgICAgICAgLy8gTGlzdENvbXBpbGUoKVxyXG4gICAgfSk7XHJcbiAgICBob29rcy5zZW5kUGFweXJ1c0V2ZW50LmFkZCh7XHJcbiAgICAgICAgZW50ZXI6IGZ1bmN0aW9uIChjdHgpIHtcclxuICAgICAgICAgICAgcHJpbnRDb25zb2xlKFwiXCIuY29uY2F0KGN0eC5wYXB5cnVzRXZlbnROYW1lLCBcIiBoYXMgYmVlbiBjYXVnaHRcIikpO1xyXG4gICAgICAgICAgICAvLyBTZXRJbnRWYWx1ZShudWxsLCBcIllNLkxvcmljYS5NQ00uTWVudU9wZW5GbGFnXCIsIDEpXHJcbiAgICAgICAgICAgIEZpbGxNQ01PcHRpb25zKCk7XHJcbiAgICAgICAgfSxcclxuICAgIH0sIDB4MTQsIDB4MTQsICdPbkxvcmljYU9wZW4nKTtcclxuICAgIGhvb2tzLnNlbmRQYXB5cnVzRXZlbnQuYWRkKHtcclxuICAgICAgICBlbnRlcjogZnVuY3Rpb24gKGN0eCkge1xyXG4gICAgICAgICAgICBwcmludENvbnNvbGUoXCJcIi5jb25jYXQoY3R4LnBhcHlydXNFdmVudE5hbWUsIFwiIGhhcyBiZWVuIGNhdWdodFwiKSk7XHJcbiAgICAgICAgICAgIC8vIFNldEludFZhbHVlKG51bGwsIFwiWU0uTG9yaWNhLk1DTS5NZW51T3BlbkZsYWdcIiwgMSlcclxuICAgICAgICAgICAgRmlsbE1DTU9wdGlvbnMoKTtcclxuICAgICAgICB9LFxyXG4gICAgfSwgMHgxNCwgMHgxNCwgJ09uSW5wdXRDbGVhcicpO1xyXG4gICAgaG9va3Muc2VuZFBhcHlydXNFdmVudC5hZGQoe1xyXG4gICAgICAgIGVudGVyOiBmdW5jdGlvbiAoY3R4KSB7XHJcbiAgICAgICAgICAgIHByaW50Q29uc29sZShcIlwiLmNvbmNhdChjdHgucGFweXJ1c0V2ZW50TmFtZSwgXCIgaGFzIGJlZW4gY2F1Z2h0XCIpKTtcclxuICAgICAgICAgICAgb25jZSgnbWVudUNsb3NlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgVXBkYXRlQWxsU3BlbGxzKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICB9LCAweDE0LCAweDE0LCAnT25RdWV1ZWRDaGFuZ2UnKTtcclxuICAgIC8vICAgZXZlbnQgZm9yIHdoZW4gcGxheWVyIGlucHV0cyBpbiB0aGUgVXBrZWVwIHNlYXJjaCBvcHRpb247IGZpbHRlcnMgdGhlIGVudW0gbWVudXMgYWNjb3JkaW5nbHlcclxuICAgIGhvb2tzLnNlbmRQYXB5cnVzRXZlbnQuYWRkKHtcclxuICAgICAgICBlbnRlcjogZnVuY3Rpb24gKGN0eCkge1xyXG4gICAgICAgICAgICBwcmludENvbnNvbGUoXCJcIi5jb25jYXQoY3R4LnBhcHlydXNFdmVudE5hbWUsIFwiIGhhcyBiZWVuIGNhdWdodFwiKSk7XHJcbiAgICAgICAgICAgIEZpbHRlck1DTU9wdGlvbnMoR2V0U3RyaW5nVmFsdWUobnVsbCwgXCJZTS5Mb3JpY2EuTWVudS5VcGtlZXAuSW5wdXRcIiwgJycpKTtcclxuICAgICAgICB9LFxyXG4gICAgfSwgMHgxNCwgMHgxNCwgJ09uVXBrZWVwSW5wdXQnKTtcclxufTtcclxudmFyIEZvcm1zVG9TdHJpbmdOYW1lcyA9IGZ1bmN0aW9uIChmb3Jtcywga2V5KSB7XHJcbiAgICB2YXIgc3RyaW5nbGlzdCA9IFsnTm8gQ2hhbmdlcyddO1xyXG4gICAgaWYgKCFmb3Jtcykge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIDtcclxuICAgIFN0cmluZ0xpc3RDbGVhcihudWxsLCBrZXkpO1xyXG4gICAgU3RyaW5nTGlzdEFkZChudWxsLCBrZXksICdObyBDaGFuZ2VzJyk7XHJcbiAgICBmb3Jtcy5mb3JFYWNoKGZ1bmN0aW9uIChmb3JtKSB7XHJcbiAgICAgICAgaWYgKCFmb3JtKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgO1xyXG4gICAgICAgIHZhciBuYW1lID0gZm9ybS5nZXROYW1lKCk7XHJcbiAgICAgICAgaWYgKCFuYW1lKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgO1xyXG4gICAgICAgIHZhciBpZCA9IGZvcm0uZ2V0Rm9ybUlEKCk7XHJcbiAgICAgICAgaWYgKCFpZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDtcclxuICAgICAgICBTdHJpbmdMaXN0QWRkKG51bGwsIGtleSwgbmFtZSk7XHJcbiAgICAgICAgU2V0SW50VmFsdWUobnVsbCwgbmFtZSwgaWQpO1xyXG4gICAgICAgIHN0cmluZ2xpc3QucHVzaChuYW1lKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHN0cmluZ2xpc3Q7XHJcbn07XHJcbmZ1bmN0aW9uIEZpbGxNQ01PcHRpb25zKCkge1xyXG4gICAgdmFyIGE7XHJcbiAgICBhID0gRm9ybUxpc3RUb0FycmF5KGp1S2V5cy5wYXRoLCBzdUtleXMuZm9ybVVwa2VlcExpc3QpO1xyXG4gICAgdmFyIGIgPSBGb3Jtc1RvU3RyaW5nTmFtZXMoYSwgXCJZTS5Mb3JpY2EuTUNNLkVudW0uVXBrZWVwXCIpO1xyXG4gICAgYSA9IEZvcm1MaXN0VG9BcnJheShqdUtleXMucGF0aCwgc3VLZXlzLmZvcm1CbGFja0xpc3QpO1xyXG4gICAgRm9ybXNUb1N0cmluZ05hbWVzKGEsIFwiWU0uTG9yaWNhLk1DTS5FbnVtLkJsYWNrbGlzdFwiKTtcclxuICAgIGEgPSBGb3JtTGlzdFRvQXJyYXkoanVLZXlzLnBhdGgsIHN1S2V5cy5mb3JtRXhjbHVzaW9uTGlzdCk7XHJcbiAgICBGb3Jtc1RvU3RyaW5nTmFtZXMoYSwgXCJZTS5Mb3JpY2EuTUNNLkVudW0uRXhjbHVzaW9uXCIpO1xyXG59XHJcbjtcclxuLy8gRnVuY3Rpb24gdG8gY2xlYXIgYW5kIHJlZmlsbCB0aGUgbWNtIG1lbnUgbGlzdHMgYWNjb3JkaW5nIHRvIGEgZmlsdGVyIGNyaXRlcmlhXHJcbmZ1bmN0aW9uIEZpbHRlck1DTU9wdGlvbnMocXVlcnkpIHtcclxuICAgIGlmICghcXVlcnkpIHtcclxuICAgICAgICBxdWVyeSA9ICcnO1xyXG4gICAgfVxyXG4gICAgO1xyXG4gICAgLy8gRmlsbE1DTU9wdGlvbnMoKVxyXG4gICAgdmFyIGtleXMgPSBbXCJZTS5Mb3JpY2EuTUNNLkVudW0uVXBrZWVwXCIsIFwiWU0uTG9yaWNhLk1DTS5FbnVtLkJsYWNrbGlzdFwiLCBcIllNLkxvcmljYS5NQ00uRW51bS5FeGNsdXNpb25cIl07XHJcbiAgICBrZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xyXG4gICAgICAgIHZhciBmaWx0ZXJlZCA9IEZpbHRlck9wdGlvbnMoU3RyaW5nTGlzdFRvQXJyYXkobnVsbCwga2V5KSwgcXVlcnkpO1xyXG4gICAgICAgIGZpbHRlcmVkLnVuc2hpZnQoJ05vIENoYW5nZXMnKTtcclxuICAgICAgICBTdHJpbmdMaXN0Q2xlYXIobnVsbCwga2V5KTtcclxuICAgICAgICBmaWx0ZXJlZC5mb3JFYWNoKGZ1bmN0aW9uIChmKSB7XHJcbiAgICAgICAgICAgIFN0cmluZ0xpc3RBZGQobnVsbCwga2V5LCBmLCBmYWxzZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBGaWx0ZXJPcHRpb25zKGFyciwgcXVlcnkpIHtcclxuICAgIHJldHVybiBhcnIuZmlsdGVyKGZ1bmN0aW9uIChlbCkge1xyXG4gICAgICAgIHJldHVybiBlbC50b0xvd2VyQ2FzZSgpLmluZGV4T2YocXVlcnkudG9Mb3dlckNhc2UoKSkgIT09IC0xO1xyXG4gICAgfSk7XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==