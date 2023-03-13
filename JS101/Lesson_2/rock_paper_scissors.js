// a rock, paper, scissors game
// there are two opponents, the player and a computer
// If player a chooses rock and player b chooses scissors, player a wins.
// If player a chooses paper and player b chooses rock, player a wins.
// If player a chooses scissors and player b chooses paper, player a wins.
// If both players choose the same item, neither player wins. It's a tie.
// game flow:
// The user makes a choice
// the computer makes a choice
// winner is displayed

const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors'];
function prompt(message) {
  console.log(`=> ${message}`);
}

while (true) {
  prompt(`Choose your move: ${VALID_CHOICES.join(", ")}`);
  let choice = readline.question();

  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice");
    choice = readline.question();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  prompt(`You chose ${choice}, computer chose ${computerChoice}.`);

  if ((choice === 'rock' && computerChoice === 'scissors') ||
      (choice === 'paper' && computerChoice === 'rock') ||
      (choice === 'scissors' && computerChoice === 'paper')) {
    prompt('You win!');
  } else if ((choice === 'scissors' && computerChoice === 'rock') ||
             (choice === 'rock' && computerChoice === 'paper') ||
             (choice === 'paper' && computerChoice === 'scissors')) {
    prompt('Computer wins!');
  } else {
    prompt("It's a tie");
  }

  prompt ('Do you want to play again (y/n)?');
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }

  if (answer[0] !== 'y') break;

}let words = ['scooby', 'do', 'on', 'channel', 'two'];

words.forEach(word => {
  console.log(word);
  words.shift();
});

console.log(words); // logs ['channel', 'two']