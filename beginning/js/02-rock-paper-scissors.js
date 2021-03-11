function displayTitle() {
    window.alert('Let\'s play The Rock, Paper, Scissors Game');
}
function playGame() {
    let userChoice = "";   
    let userChoiceInvalid = false;
    do {
        userChoice = prompt("Choose rock, paper, or scissors").toUpperCase().trim();
        if (userChoice != 'ROCK' && userChoice != 'PAPER' && userChoice != 'SCISSORS') {
            alert('Invalid entry, please try again.');
            userChoiceInvalid = true;
        } else {
            userChoiceInvalid = false;
        }
    } while (userChoiceInvalid);
    
    let cyberRoll = Math.random();
    let computerChoice;

        if (cyberRoll < .34) {
            computerChoice = "ROCK";
        } else if (cyberRoll <= .67) {
            computerChoice = "PAPER";
        } else {
            computerChoice = "SCISSORS";
        }

        console.log(`User: ${userChoice} | Comp: ${computerChoice}`);
        let duel = function(choice1, choice2) {
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
    
    alert(duel(userChoice, computerChoice));
        
}
function main() {
    displayTitle();
    let playAgain = "y";
    while (playAgain === "y") {
        playGame();
        playAgain = window.prompt('Do you want to play again, y / n?');
    }
    window.alert('Thank you playing.');
}
main();



