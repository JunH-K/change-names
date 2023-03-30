"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pascalCase = exports.camelCase = exports.snakeCase = void 0;
var checkCase = function (str) {
    if (/^[a-z]+(_[a-z0-9]+)*$/.test(str)) {
        return "snake";
    }
    else if (/^[a-z]+([A-Z][a-z0-9]*)*$/.test(str)) {
        return "camel";
    }
    else if (/^[A-Za-z]*([A-Z][A-Za-z0-9]*)*$/.test(str)) {
        return "pascal";
    }
    else {
        throw new Error("Invalid case found in string: ".concat(str));
    }
};
//To Pascal
var camelToPascalCase = function (str) {
    return str.replace(/^[a-z]/, function ($1) {
        return $1.toUpperCase();
    });
};
var snakeToPascalCase = function (str) {
    return str
        .replace(/^[a-z]/, function ($1) {
        return $1.toUpperCase();
    })
        .replace(/([-_][a-z])/gi, function ($1) {
        return $1.toUpperCase().replace("-", "").replace("_", "");
    });
};
//To Snake
var camelToSnake = function (str) {
    return str.replace(/[A-Z]/g, function ($1) { return "_".concat($1.toLowerCase()); });
};
var pascalToSnakeCase = function (str) {
    return str
        .replace(/[\w]([A-Z])/g, function ($1) {
        return $1[0] + "_" + $1[1].toLowerCase();
    })
        .toLowerCase();
};
//To Camel
var snakeToCamel = function (str) {
    return str.replace(/([-_][a-z])/gi, function ($1) {
        return $1.toUpperCase().replace("-", "").replace("_", "");
    });
};
var pascalToCamel = function (str) {
    return str.replace(/^[A-Z]/, function ($1) {
        return $1.toLowerCase();
    });
};
var camelCase = function (target) {
    var to = {
        snake: snakeToCamel,
        pascal: pascalToCamel,
    };
    var cases = checkCase(target);
    var toCase = to[cases];
    return toCase ? toCase(target) : target;
};
exports.camelCase = camelCase;
var snakeCase = function (target) {
    var to = {
        camel: camelToSnake,
        pascal: pascalToSnakeCase,
    };
    var cases = checkCase(target);
    var toCase = to[cases];
    return toCase ? toCase(target) : target;
};
exports.snakeCase = snakeCase;
var pascalCase = function (target) {
    var to = {
        camel: camelToPascalCase,
        snake: snakeToPascalCase,
    };
    var cases = checkCase(target);
    var toCase = to[cases];
    return toCase ? toCase(target) : target;
};
exports.pascalCase = pascalCase;
