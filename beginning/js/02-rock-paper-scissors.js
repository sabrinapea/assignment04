function displayTitle() {
    window.alert('Let\'s Play Rock, Paper, Scissors Game');
}

// let input = prompt(`Enter rock, paper, or scissor \(R, P, S\)`);

// function playGame() {
//     let yourRoll = input;
//     let randomRoll = (Math.floor(Math.random() * 3));
//     let input = prompt(`Enter rock, paper, or scissor \(r, p, s\)`);
//     if (randomRoll === 0) {    //computer rolled rock
//         // window.alert('computer got Rock');
//     } else if (yourRoll === 'p') {
//         window.alert('paper covers rock, you win');
//     } else if (yourRoll === 's') {
//         window.alert('rock destroys scissors, you lose');
//     } else if (yourRoll === randomRoll) {
//         window.alert('you are tied, try again.');
//     }
//     if (randomRoll === 1) { //computer rolled paper
//     } else if (yourRoll === 's') {
//         window.alert('scissors cut paper, you win');
//     } else if (yourRoll === 'r') {
//         window.alert('paper covers rock, you lose');
//     } else if (yourRoll === randomRoll) {
//         window.alert('you are tied, try again.');
//     }
//     if (randomRoll === 2) { //computer rolled scissors
//     } else if (yourRoll === 'r') {
//         window.alert('rock destroy scissors, you win');
//     } else if (yourRoll === 'p') {
//         window.alert('scissors cuts paper, you lose');
//     } else if (yourRoll === randomRoll) {
//         window.alert('you are tied, try again.');
//     return;
//     }
// }
// function main() {
//     let playAgain = "y";
//     while (playAgain === "y") {
//         playGame();
//         PlayAgain = window.prompt('do you want to paly again, Y / N ?');
//     }
//     window.alert('Thank you playing.');

// }
function playGame() {
    let userChoice = prompt("Do you choose rock, paper or scissors?");
    let cyberRoll = Math.random();
    let computerChoice;
    
        
        if (cyberRoll < .34) {
            computerChoice = "ROCK";
        } else if (cyberRoll <= .67) {
            computerChoice = "PAPER";
        } else {
            computerChoice = "SCISSORS";
        }
        let compare = function(choice1, choice2) {
            choice1 = choice1.toUpperCase();
            if (choice1 != "ROCK" && choice1 != "PAPER" && choice1 != "SCISSORS" ) {
                alert('Entry is not valid, try again.');
            } else {
                if (choice1 === choice2) {
                    return "The result is a tie!";
                }
                if (choice1 === "ROCK") {
                    if(choice2 === "SCISSORS") {
                        return "rock wins";
                    } else {
                    return "paper wins";
                    }
                }
                if (choice1 === "PAPER") {
                    if(choice2 === "ROCK") {
                        return "paper wins";
                    } else {
                    return "scissors wins";
                    }
                }
                if (choice1 ==="SCISSORS") {
                    if (choice2 === "ROCK") {
                        return "rock wins";
                    } else {
                    return "scissors wins";
                    }
                }
            }
        } 
    
    alert(compare(userChoice, computerChoice));
    
}
function main() {
    displayTitle();
    let playAgain = "y";
    while (playAgain === "y") {
        playGame();
        playAgain = window.prompt('do you want to play again, y / n?');
    }
    window.alert('Thank you playing.');
}
main();



