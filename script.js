const myArray = ["Rock!", "Paper!", "Scissors!"];
let playerCounter = 0;
let computerCounter = 0;

const rockButton = document.querySelector('#rockButton');
const paperButton = document.querySelector('#paperButton');
const scissorsButton = document.querySelector('#scissorsButton');
const winLose = document.querySelector('#winLoseDisplay');

function computerPlay() {
    return myArray[Math.floor(Math.random() * myArray.length)]
}

function playRound (playerSelection, computerSelection) {
    if (playerSelection.toUpperCase() == "ROCK" && computerSelection == "Scissors!") {
        playerCounter += 1;
    } else if (playerSelection.toUpperCase() == "ROCK" && computerSelection == "Paper!") {
        computerCounter += 1;
    } else if (playerSelection.toUpperCase() == "PAPER" && computerSelection == "Scissors!") {
        computerCounter += 1;
    } else if (playerSelection.toUpperCase() == "PAPER" && computerSelection == "Rock!") {
        playerCounter += 1; 
    } else if (playerSelection.toUpperCase() == "SCISSORS" && computerSelection == "Rock!") {
        computerCounter += 1;
    } else if (playerSelection.toUpperCase() == "SCISSORS" && computerSelection == "Paper!") {
        playerCounter += 1; 
    }
    let counter = document.querySelector('#counter');
    counter.textContent = `Your Score = ${playerCounter}, Computer's Score = ${computerCounter}`;

}

function checkResult () {
    winLose.textContent = '';
    counter.textContent = `Your Score = ${playerCounter}, Computer's Score = ${computerCounter}`;
    if (playerCounter === 5) {
        winLose.textContent = 'YOU WIN!'
        clearAll()
    } else if (computerCounter === 5) {
        winLose.textContent = 'YOU LOSE!'
        clearAll()
    }
}

function clearAll () {
    playerCounter = 0;
    computerCounter = 0;
} 

rockButton.addEventListener('click', () => {
    playRound('ROCK', computerPlay())
    checkResult()
})
paperButton.addEventListener('click', () => {
    playRound('PAPER', computerPlay())
    checkResult()
})
scissorsButton.addEventListener('click', () => {
    playRound('SCISSORS', computerPlay())
    checkResult()
})