let playerScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll('button');
const score = document.querySelector('.score');
const result = document.querySelector('.result')

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
	switch (choice) {
		case 0:
			return 'rock';
		case 1: 
			return 'paper';
		case 2:
			return 'scissor';
	}
};

function playRound(playerSelection, computerSelection) {
	playerSelection = playerSelection.toLowerCase()
	switch (true) {
		case playerSelection === 'rock' && computerSelection === 'scissor':
		case playerSelection === 'paper' && computerSelection === 'rock':
		case playerSelection === 'scissor' && computerSelection === 'paper':
			playerSelection = playerSelection.toUpperCase().slice(0,1)
							          + playerSelection.slice(1);
			playerScore++;
			return `You Win! ${playerSelection} beats ${computerSelection}.`;
		case playerSelection === 'rock' && computerSelection === 'rock': 
		case playerSelection === 'paper' && computerSelection === 'paper':
		case playerSelection === 'scissor' && computerSelection === 'scissor':
			return `Draw! Both chose ${playerSelection}.`
		case playerSelection === 'rock' && computerSelection === 'paper':
		case playerSelection === 'paper' && computerSelection === 'scissor':
		case playerSelection === 'scissor' && computerSelection === 'rock':
			computerSelection = computerSelection.slice(0,1).toUpperCase()
						              + computerSelection.slice(1);
			computerScore++;
			return `You Lose! ${computerSelection} beats ${playerSelection}.`;
	}
};

choices.forEach((playerChoice) => {
  playerChoice.addEventListener('click', () => {
    resultText = playRound(playerChoice.id, getComputerChoice());
    score.textContent = `You: ${playerScore} Champion: ${computerScore}`
    result.textContent = `${resultText}`

  });
});




