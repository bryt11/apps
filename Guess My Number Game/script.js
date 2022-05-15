'use strict';

let secretNumber = Math.floor(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

//// Check button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //// When no number has been entered in the input field ///
  if (!guess) {
    document.querySelector('.message').textContent = '⛔️ No number entered!';
  }

  // When guess is lower than secretnumber
  else if (guess < secretNumber) {
    //////// Too Low
    document.querySelector('.message').textContent = 'Too low 😢';
    score--;
    document.querySelector('.score').textContent = score;

    ////// When score is lower than 1, then score = 0, Then PLAYER lose the game...
    if (score < 1) {
      document.querySelector('.message').textContent =
        'You lose... play again ?';
      document.querySelector('body').style.backgroundColor = '#fc0808';
      document.querySelector('.score').textContent = 0;
    }
  }

  //When guess is higher than secretnumber
  else if (guess > secretNumber) {
    //////// Too High
    document.querySelector('.message').textContent = 'Too high 😅';
    score--;
    document.querySelector('.score').textContent = score;

    ////// When score is lower than 1, then score = 0, Then PLAYER lose the game...
    if (score < 1) {
      document.querySelector('.message').textContent =
        'You lose... play again ?';
      document.querySelector('body').style.backgroundColor = '#fc0808';
      document.querySelector('.score').textContent = 0;
    }
  }

  //When player wins(correct number)
  else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.message').textContent = '🎉 Correct number!!!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = score;
    }
  }
});

//// Again button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.floor(Math.random() * 20 + 1);
  console.log(secretNumber);
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#20196b';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
});
