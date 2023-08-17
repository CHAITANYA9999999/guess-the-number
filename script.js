'use strict';

// document.querySelector('.message');
// console.log(document.querySelector('.message'));
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct Number';

// document.querySelector('.guess').value = 10;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

let score = 20;
let highscore = 0;

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
  console.log(document.querySelector('.guess').value);

  const guess = Number(document.querySelector('.guess').value);

  if (!guess) displayMessage('No Number!');
  else if (guess === secretNumber) {
    displayMessage('Correct Guess🥳');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else {
    if (score < 1) {
      displayMessage('You lost the game');
    } else {
      displayMessage(guess < secretNumber ? 'Guess Higher' : 'Guess Lower');
      score--;
      document.querySelector('.score').textContent = score;
    }
  }
});

document.querySelector('.btn-again').addEventListener('click', function () {
  displayMessage('Start Guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  score = 20;
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
});
