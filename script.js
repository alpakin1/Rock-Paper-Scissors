const myArray = ["Rock!", "Paper!", "Scissors!"];

function computerPlay() {
    return myArray[Math.floor(Math.random() * myArray.length)]
}

function playRound (playerSelection, computerSelection) {
    if (playerSelection.toUpperCase() == "ROCK" && computerSelection == "Scissors!") {
        return ("You win!"); 
    } else if (playerSelection.toUpperCase() == "ROCK" && computerSelection == "Paper!") {
        return ("You lose!");
    } else if (playerSelection.toUpperCase() == "PAPER" && computerSelection == "Scissors!") {
        return ("You lose!"); 
    } else if (playerSelection.toUpperCase() == "PAPER" && computerSelection == "Rock!") {
        return ("You win!");
    } else if (playerSelection.toUpperCase() == "SCISSORS" && computerSelection == "Rock!") {
        return ("You lose!");
    } else if (playerSelection.toUpperCase() == "SCISSORS" && computerSelection == "Paper!") {
        return ("You win!");
    } else 
        return ("Tie!");
}



function game() {
    let playerCounter = 0;
    let computerCounter = 0;
    for(let i = 0; i < 5; i++) {
        const playerSelection = prompt("Enter here.");
        const computerSelection = computerPlay();
        const oneRound = playRound(playerSelection, computerSelection)
        console.log(oneRound);
        if (oneRound == "You win!") {
            playerCounter += 1;
        } else if (oneRound == "You lose!") {
            computerCounter += 1;
        }
    }

    console.log(`Your score = ${playerCounter}`);
    console.log(`Opponent's score = ${computerCounter}`);
}

game();