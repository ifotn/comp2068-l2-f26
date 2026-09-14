"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
fs_1.default.readFile('food.txt', 'utf8', (err, fileContents) => {
    if (err) {
        console.log('Cannot find food');
    }
    else {
        console.log(fileContents);
    }
});
console.log('--We ate this stuff--');
fs_1.default.readFile('drinks.txt', 'utf8', (err, fileContents) => {
    if (err) {
        console.log('Cannot find drinks');
    }
    else {
        console.log(fileContents);
    }
});
console.log('--We drank this stuff--');
