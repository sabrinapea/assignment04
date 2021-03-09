//STEP 1
// function halfNumber(number) {
//     let y = number / 2;
//     window.console.log("Half of " + number + " is " + y)
// }
// halfNumber(100);

//STEP 2
// function squareNumber(number) {
//   let y = number * number;
//   window.console.log("The result of squaring the number " + number + " is " + y);
// }
// squareNumber(3);

//STEP 3
// function percentOf(num1, num2) {
//     let y = (num1 / 100) * num2;
//     window.console.log(y + " is " + num1 + "% of " + num2);
// }
// percentOf(50, 4);


//STEP 4
// function findModulus(num1, num2) {
//     let y = num2 % num1;
//     window.console.log(y + ' is the modulus of ' + num1 + ' and ' + num2);
// }
// findModulus(4, 10);

//STEP 5
// function calNum(numbers) {
//     let sum = 0;
//     for (let i = 0; i < arguments[0].length; i++) {
//         sum += parseInt(arguments[0][i]);

//     }
//     console.log(sum);
// }
// calNum(prompt(`Enter a string of numbers separated by commas`).split(","));

function calNum(numbers) {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += parseInt(arguments[i]);
    }
    console.log(sum);
}
let input = prompt(`Enter three numbers separated by commas`).split(",");
calNum(input[0],input[1],input[2]);