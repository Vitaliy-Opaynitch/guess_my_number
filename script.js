'use strict';

// simple game create with native JS

let secretNumber;
let hightscore = 0;
let score = 20;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
}

function getSecretNumber() {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);
}
getSecretNumber();

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value)

  if (!guess) {
    displayMessage('👾 No number');
  } else if (guess === secretNumber) {
    displayMessage('🦄 Correct Number!');

    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > hightscore) {
      hightscore = score;
      document.querySelector('.hightscore').textContent = hightscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '😪 Too hight' : '🙄 Too low')
      score--
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😈 You lost game'
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;

  getSecretNumber();
  displayMessage('Start guessing...');

  // return default data
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';

  // return default styles
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
})
