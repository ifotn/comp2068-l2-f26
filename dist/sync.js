"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// use node file system library
const fs_1 = __importDefault(require("fs"));
// read food list from file in full
const food = fs_1.default.readFileSync('food.txt', 'utf8');
console.log(food);
console.log('--We ate this stuff--');
// read drinks list from file in full
const drinks = fs_1.default.readFileSync('drinks.txt', 'utf8');
console.log(drinks);
console.log('--We drank this stuff--');
