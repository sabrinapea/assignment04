// IMPORT THE MODULE
import * as calc from "./modules/calculator.js";
console.log(calc.add(num1, num2));

// COLLECT NUMBER 1, NUMBER 2, AND OPERATION FROM THE USER
let num1 = parseInt(prompt("Input a number:"));
let num2 = parseInt(prompt('Input a second number:'));
let operator = prompt('Which operator would you like to use? (add, substract, multiply, or divide)');

// CHECK TO SEE WHAT OPERATION THEY'RE USING


// CALL THE APPROPRIATE FUNCTION