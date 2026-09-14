// use node file system library
import fs from 'fs';

// read food list from file in full
const food: string = fs.readFileSync('food.txt', 'utf8');
console.log(food);
console.log('--We ate this stuff--');

// read drinks list from file in full
const drinks: string = fs.readFileSync('drinks.txt', 'utf8');
console.log(drinks);
console.log('--We drank this stuff--');
