console.log("Let's play 5 rounds of rock, paper, scissors!");
let humanScore = 0;
let computerScore = 0;
console.log("Your score: " + humanScore);
console.log("The computers score: " + computerScore);
console.log(" ");

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return "rock";
    } else if (randomNumber === 1) {
        return "paper";
    } else {
        return "scissors";
    };
};

function getHumanChoice() {
    const userInput = prompt("Type rock, paper, or scissors");
    return userInput.toLowerCase();
};

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("Its a tie!");
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You lose! Paper beats Rock");
        computerScore += 1;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You lose! Scissors beats Paper");
        computerScore += 1;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("You lose! Rock beats Scissors");
        computerScore += 1;
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win! Rock beats Scissors");
        humanScore += 1;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win! Paper beats Rock");
        humanScore += 1;
    } else {
        console.log("You win! Scissors beats Paper")
        humanScore += 1;
    };
    console.log("Your score: " + humanScore);
    console.log("The computers score: " + computerScore);
    console.log(" ");
};

function playGame() {
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());

    if (humanScore === computerScore) {
        console.log("You Tied!");
    } else if (humanScore > computerScore) {
        console.log("You Won!");
    } else {
        console.log("You Lost!");
    };
};

playGame();