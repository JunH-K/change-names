"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var convert = function (obj, transformer) {
    if (Array.isArray(obj)) {
        return obj.map(function (value) { return convert(value, transformer); });
    }
    if (obj !== null && typeof obj === "object") {
        var newObj = {};
        for (var _i = 0, _a = Object.entries(obj); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            var newKey = transformer(key);
            newObj[newKey] = convert(value, transformer);
        }
        return newObj;
    }
    return obj;
};
var change = function (target, caseFunc) {
    try {
        return convert(target, caseFunc);
    }
    catch (e) {
        console.error("error:", e);
    }
};
exports.default = change;
