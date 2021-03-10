function displayTitle() {
    "use strict";
    window.alert('Let\'s Play Rock, Paper, Scissors Game');
}
let input = prompt(`Enter rock, paper, or scissor, \(r, p, s\)`);
let yourRoll = input;
function compRoll() {
    let randomRoll = (Math.floor(Math.random() * 3));
    let input = prompt(`Enter rock, paper, or scissor, \(r, p, s\)`);
    if (randomRoll === 0) {    //computer rolled rock
        // window.alert('computer got Rock');
    } else if (yourRoll === p) {
        window.alert('paper covers rock, you win');
        break;
    } else if (yourRoll === s) {
        window.alert('rock destroys scissors, you lose');
        break;
    } else if (yourRoll === randomRoll) {
        window.alert('you are tied, try again.');
    return;

 

}



