"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
var Symbols;
(function (Symbols) {
    Symbols[Symbols["kg"] = 1000] = "kg";
    Symbols[Symbols["hg"] = 100] = "hg";
    Symbols[Symbols["dag"] = 10] = "dag";
    Symbols[Symbols["g"] = 1] = "g";
    Symbols[Symbols["dg"] = 0.1] = "dg";
    Symbols[Symbols["cg"] = 0.01] = "cg";
    Symbols[Symbols["mg"] = 0.001] = "mg";
})(Symbols || (Symbols = {}));
;
const convert = (value, baseUnit, convertUnit) => {
    const newValue = (value * Symbols[baseUnit]) / Symbols[convertUnit];
    return `${value}${baseUnit} equivalem a ${newValue}${convertUnit}`;
};
const value = readline_sync_1.default.questionFloat('Insert value to convert: ');
const baseUnit = readline_sync_1.default.question('Insert base unit: ');
const convertUnit = readline_sync_1.default.question('Insert convert unit: ');
const exec = () => {
    const result = convert(value, baseUnit, convertUnit);
    console.log(result);
};
exec();
exports.default = exec;
