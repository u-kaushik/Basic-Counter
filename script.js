const scoreResetButton = document.querySelector(".score-reset");
const plus1Button = document.querySelector(".plus1");
const plus2Button = document.querySelector(".plus2");
const minus1Button = document.querySelector(".minus1");
const minus2Button = document.querySelector(".minus2");
const save1Button = document.querySelector(".save1");
const save2Button = document.querySelector(".save2");
const player1ScoreElement = document.getElementById("player1--score");
const player2ScoreElement = document.getElementById("player2--score");
const score1display = document.getElementById("score-display1");
const score2display = document.getElementById("score-display2");

// Player 1
let player1Score = 0;

plus1Button.addEventListener("click", function () {
  player1Score++;
  player1ScoreElement.textContent = player1Score;
});

minus1Button.addEventListener("click", function () {
  if (player1Score > 0) {
    player1Score--;
    player1ScoreElement.textContent = player1Score;
  }
});

save1Button.addEventListener("click", function () {
  score1display.textContent = player1Score;
});

// Player 2
let player2Score = 0;

plus2Button.addEventListener("click", function () {
  player2Score++;
  player2ScoreElement.textContent = player2Score;
});

minus2Button.addEventListener("click", function () {
  if (player2Score > 0) {
    player2Score--;
    player2ScoreElement.textContent = player2Score;
  }
});

save2Button.addEventListener("click", function () {
  score2display.textContent = player2Score;
});

// Score Reset
scoreResetButton.addEventListener("click", function () {
  player1Score = 0;
  player2Score = 0;
  player1ScoreElement.textContent = "0";
  player2ScoreElement.textContent = "0";
  score1display.textContent = "0";
  score2display.textContent = "0";
});
