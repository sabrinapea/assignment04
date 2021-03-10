// IMPORT THE MODULE

import * as calc from "./modules/calculator.js";
console.log(calc.add(num1, num2));

// COLLECT NUMBER 1, NUMBER 2, AND OPERATION FROM THE USER
function playGame() {
    do {
    let num1 = parseInt(prompt('Input a number:'));
    let num2 = parseInt(prompt('Input a second number:'));
    let operator = prompt('Which operator would you like to use? (add, substract, multiply, or divide)');

// CHECK TO SEE WHAT OPERATION THEY'RE USING
switch(operator) {
    case "add":
        calc.add(num1, num2);
        alert(calculate, result);
        break;
    case "substract":
        calc.substract(num1, num2);
        alert(calculate, result);
        break;
    case "multipy":
        calc.multipy(num1, num2);
        alert(calculate, result);
        break;
    case "divide":
        calc.divide(num1, num2);
        alert(calculate, result);
        break;
    default:
        alert('operator entry is not valid, try again.');
}
} while (operator == "add" || operator == "substract" || operator == "multiply" || operator == "divide" );
alert('here you go and let\'s input numbers again.');
}

function main() {
    let playAgain = "y";
    while (playAgain === "y") {
        playGame();
        playAgain = window.prompt('Do you want to calculate again, y / n?');
    }
    window.alert('Thank you playing.');
}
main();


// CALL THE APPROPRIATE FUNCTION

