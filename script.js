let playerScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll('.choice');
const score = document.querySelector('#score');
const result = document.querySelector('#result');

const endText = document.createElement('div');
const endButton = document.createElement('button');

const choiceArray = ['rock', 'paper', 'scissor'];
function getComputerChoice() {
  return choiceArray[Math.floor(Math.random() * choiceArray.length)];
};

const loseArray = ['You lost, you kind of suck!', 'You can do better than that!',
                  'That was trash!', 'The champ takes another round!', 
                  'Aww man!', 'You haven\'t lost yet!'];

function getWinPhrase() {
  return winArray[Math.floor(Math.random() * winArray.length)];
};

const drawArray = ['Draw!', 'Tie!', 'Even round!'];

function getDrawPhrase() {
  return drawArray[Math.floor(Math.random() * drawArray.length)];
};

const winArray = ['Wow! That was impressive!', 'You might be able to win this!',
                   'I knew you could do this!', 'Don\'t get ahead of yourself!', 
                   'Didn\'t know you had that DAWG in you!', 'You won! Nice job!'];

function getLosePhrase() {
  return loseArray[Math.floor(Math.random() * loseArray.length)];
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
			return `${getWinPhrase()} ${playerSelection} beats ${computerSelection}.`;
		case playerSelection === 'rock' && computerSelection === 'rock': 
		case playerSelection === 'paper' && computerSelection === 'paper':
		case playerSelection === 'scissor' && computerSelection === 'scissor':
			return `${getDrawPhrase()} Both chose ${playerSelection}.`
		case playerSelection === 'rock' && computerSelection === 'paper':
		case playerSelection === 'paper' && computerSelection === 'scissor':
		case playerSelection === 'scissor' && computerSelection === 'rock':
			computerSelection = computerSelection.slice(0,1).toUpperCase()
						              + computerSelection.slice(1);
			computerScore++;
			return `${getLosePhrase()} ${computerSelection} beats ${playerSelection}.`;
	}
};

function checkWinner() {
  if (playerScore >= 5 || computerScore >= 5) {
    return true;
  } else {
    return false;
  }
};

function getWinner() {
  if (playerScore >= 5) {
    endText.textContent = 'You Won!';
    endButton.textContent = 'Play Again';
  } else {
    endText.textContent = 'You Lost!';
    endButton.textContent = 'Try Again';
  }
  result.appendChild(endText);
  result.appendChild(endButton);
};

choices.forEach((playerChoice) => {
  playerChoice.addEventListener('click', () => {
    resultText = playRound(playerChoice.id, getComputerChoice());
    score.textContent = `You: ${playerScore} Champion: ${computerScore}`;
    result.textContent = `${resultText}`;

    if (checkWinner() === true) getWinner();
  });
});

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  score.textContent = `You: 0 Champion: 0`;
  result.textContent = `Lets go again!`;
};

endButton.addEventListener('click', () => {
  resetGame();
});