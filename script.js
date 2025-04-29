
let playerScore = 0;
let computerScore = 0;
let round = 0;
let tie = 0;

const btns = document.querySelectorAll('button');
btns.forEach(btn => {
  btn.addEventListener('click',() => {
    playRound(btn.innerText.toLowerCase(), getComputerChoice());
  });
});

function getComputerChoice() {
  const computerChoice = Math.floor(Math.random() * 3 + 1);
  
  switch (computerChoice) {
    
    case 1: 
      return "rock";
      
    case 2:
      return "paper";

    case 3:
      return "scissors";
  } 
}

const divResultsContainer = document.querySelector('#round-result');
const divResults = document.createElement('span');

const divRound = document.querySelector("#game-round");
const divPlayerScore = document.querySelector("#player-score");
const divComputerScore = document.querySelector("#comp-score");
const divTieScore = document.querySelector("#tie");
const GameResult = document.querySelector("#game-result");


function playRound(playerSelection, computerSelection) {
  if (playerScore === 5) {
    return GameResult.textContent = "Game Over! Player won!";
  } else if (computerScore === 5) {
    return GameResult.textContent = "Game Over! Computer won!";
  }
  if (playerSelection === computerSelection) {
    divResults.textContent = "Tie";
    divTieScore.textContent = tie += 1;
  } 
  if (playerSelection == "rock" && computerSelection == "paper") {
    divResults.textContent = "You lose! Paper beats Rock";
    divComputerScore.textContent = computerScore += 1;
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    divResults.textContent = "You win! Rock beats Scissors";
    divPlayerScore.textContent = playerScore += 1;
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    divResults.textContent = "You win! Paper beats Rock";
    divPlayerScore.textContent = playerScore += 1;
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    divResults.textContent = "You lose! Scissors beats Paper";
    divComputerScore.textContent = computerScore += 1;
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    divResults.textContent = "You lose! Rock beats Scissors";
    divComputerScore.textContent = computerScore += 1;
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    divResults.textContent = "You win! Scissors beats Paper";
    divPlayerScore.textContent = playerScore += 1;
  }
  divRound.textContent = round += 1;
  divResultsContainer.appendChild(divResults);
}

