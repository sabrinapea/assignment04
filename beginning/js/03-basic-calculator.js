// IMPORT THE MODULE

import * as calc from "./modules/calculator.js";
// console.log(calc.add(num1, num2));

// COLLECT NUMBER 1, NUMBER 2, AND OPERATION FROM THE USER
function playGame() {
    let tryAgain = false;
    do {
        let num1 = parseInt(prompt('Input a number:'));
        let num2 = parseInt(prompt('Input a second number:'));
        let operator = prompt('Which operator would you like to use? (add, substract, multiply, or divide)');
        // CHECK TO SEE WHAT OPERATION THEY'RE USING

        switch(operator) {
            case "add":
                alert(calc.add(num1, num2));
                tryAgain = false;
                break;
            case "substract":
                alert(calc.substract(num1, num2));
                tryAgain = false;
                break;
            case "multiply":
                alert(calc.multiply(num1, num2));
                tryAgain = false;
                break;
            case "divide":
                alert(calc.divide(num1, num2));
                tryAgain = false;
                break;
            default:
                alert('operator entry is not valid, try again.');
                tryAgain = true;
        }
    } while (tryAgain);
}
function main() {
    let playAgain = "y";
    while (playAgain === "y") {
        playGame();
        playAgain = window.prompt('Do you want to calculate again, y / n?');
    }
    window.alert('Thank you for playing.');
}
// CALL THE APPROPRIATE FUNCTION
main();
