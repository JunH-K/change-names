"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pascalCase = exports.camelCase = exports.snakeCase = exports.default = void 0;
var change_1 = require("./change");
Object.defineProperty(exports, "default", { enumerable: true, get: function () { return __importDefault(change_1).default; } });
var case_1 = require("./case");
Object.defineProperty(exports, "snakeCase", { enumerable: true, get: function () { return case_1.snakeCase; } });
Object.defineProperty(exports, "camelCase", { enumerable: true, get: function () { return case_1.camelCase; } });
Object.defineProperty(exports, "pascalCase", { enumerable: true, get: function () { return case_1.pascalCase; } });
