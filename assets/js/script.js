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
