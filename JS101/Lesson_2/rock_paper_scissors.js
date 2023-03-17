// a rock,paper scissors game
// there are two opponents, the player and a computer
// If player a chooses rock and player b chooses scissors  player a wins.
// If player a chooses paper and player b chooses rock, player a wins.
// If player a chooses scissors and player b chooses paper player a wins.
// If both players choose the same item, neither player wins. It's a tie.
// game flow:
// The user makes a choice
// the computer makes a choice
// winner is displayed
let r = 'rock';
let p = 'paper';
let sc = 'scissors';
let sp = 'spock';
let l =  'lizard';

const choices = {
	rock : ['rock', 'r'],
	paper : ['paper', 'p'],
	scissors : ['scissors', 'sc'],
	spock : ['spock', 'sp'],
	lizard : ['lizard', 'l'],
};
const readline = require('readline-sync');
const VALID_CHOICES = Object.keys(choices);

let playerScore = 0;
let computerScore = 0;

function prompt(message) {
  console.log(`=> ${message}`);
}


function declareScore () {
  prompt(`The total score is: Player Score:${playerScore}, Computer Score:${computerScore}`);
}

while (true) {
  prompt(`Choose your move: ${VALID_CHOICES.join(`, `)}`);
  let playerChoice = readline.question();

  while (!Object.values(choices).flat(1).includes(playerChoice)) {
    prompt("That's not a valid choice");
    playerChoice = readline.question();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  prompt(`You chose ${playerChoice}, computer chose ${computerChoice}.`);

  if ((playerChoice === r && computerChoice === sc) ||
      (playerChoice === r && computerChoice === l) ||
      (playerChoice === p && computerChoice === r) ||
      (playerChoice === p && computerChoice === sp) ||
      (playerChoice === sc && computerChoice === p) ||
      (playerChoice === sc && computerChoice === l) ||
      (playerChoice === sp && computerChoice === r) ||
      (playerChoice === sp && computerChoice === sc) ||
      (playerChoice === l && computerChoice === p) ||
      (playerChoice === l && computerChoice === sp)) {
    prompt('You win!');
    declareScore();
    playerScore++;
  } else if (playerChoice === computerChoice) {
    prompt("It's a tie");
    declareScore();
  } else {
    prompt("computer wins!");
    computerScore++;
    declareScore();
  }

  prompt ('Do you want to play again (y/n)?');
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }

  if (answer[0] !== 'y') break;

}