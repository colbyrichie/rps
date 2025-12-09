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

const result = document.createElement("div");

function playRound(humanChoice, computerChoice) {


    if (humanChoice === computerChoice) {
        console.log("Its a tie!");
        result.textContent = "Its a tie!";
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You lose! Paper beats Rock");
        computerScore += 1;
        result.textContent = "You lose! Paper beats Rock";
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You lose! Scissors beats Paper");
        computerScore += 1;
        result.textContent = "You lose! Scissors beats Paper";
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("You lose! Rock beats Scissors");
        computerScore += 1;
        result.textContent = "You lose! Rock beats Scissors";
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win! Rock beats Scissors");
        humanScore += 1;
        result.textContent = "You win! Rock beats Scissors";
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win! Paper beats Rock");
        humanScore += 1;
        result.textContent = "You win! Paper beats Rock";
    } else {
        console.log("You win! Scissors beats Paper")
        humanScore += 1;
        result.textContent = "You win! Scissors beats Paper";
    };
    //console.log("Your score: " + humanScore);
    //console.log("The computers score: " + computerScore);
    //console.log(" ");

    const theResultsDiv = document.querySelector(".theResults");
    theResultsDiv.appendChild(result);

    humanScoreDiv.textContent = "Your score: " + humanScore;
    computerScoreDiv.textContent = "The computers score: " + computerScore;

};


// playGame();


// button click => HumanChoice => Play Round

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        let btntext = button.textContent;
        btntext = btntext.toLowerCase();
        playRound(btntext, getComputerChoice());
    });
});

const humanScoreDiv = document.querySelector(".humanScore");
const computerScoreDiv = document.querySelector(".computerScore");
