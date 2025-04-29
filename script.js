
let playerScore = 0;
let computerScore = 0;
let round = 0;
let tie = 0;

const btns = document.querySelectorAll('button');
btns.forEach(btn => {
  btn.addEventListener('click', function() {
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

function playRound(playerSelection, computerSelection) {
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



function game() {

  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Rock, Paper or Scissors", "Paper").toLowerCase();
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    console.log(`player ${playerScore}, computer ${computerScore}, round ${round}`);
  }
  
  if (playerScore > computerScore) {
    console.log("Congrats!");
  } else if (playerScore < computerScore) {
    console.log("Loser");
  } else {
    console.log("Tie")
  }

}

// game();

