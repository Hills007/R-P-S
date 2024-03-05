//Declare constants for DOM
const buttons = document.getElementsByClassName("control");
const playerScore = document.getElementById("p-score");
const computerScore = document.getElementById("c-score");
const playerImg = document.getElementById("p-image");
const computerImg = document.getElementById("c-image");
const messages = document.getElementById("messages");
const choices = ["rock", "paper", "scissors"];


// Add Event listeners
for (let button of document.getElementsByClassName("control")) {
    button.addEventListener("click", function() {
        let playerChoice = this.getAttribute("data-choice");
        playGame(playerChoice);
    });
}

//Function to start game
function playGame(playerChoice) {
    playerImg.src = `assets/images/${playerChoice}.png`;
    playerImg.alt = playerChoice;

    let computerChoice = choices[Math.floor(Math.random() * 3)];

    computerImg.src = `assets/images/${computerChoice}.png`;
    computerImg.alt = computerChoice;

    let result = checkWinner(playerChoice, computerChoice);
    updateScores(result);
}


// Function to check winner
function checkWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "tie";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        return "player";
    } else {
        return "computer";
    }
}
