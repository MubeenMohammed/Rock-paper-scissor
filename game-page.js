let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

updateScoreElement();

function getComputerMove() {
  let randomNumber = Math.random();
  let computerMove = "";
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "Rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "Paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "Scissors";
  }

  return computerMove;
}

function play(playerMove) {
  let computerMove = getComputerMove();
  let result = "";

  if (playerMove === "Rock") {
    if (computerMove === "Rock") {
      result = "Its a Tie";
      score.ties++;
    } else if (computerMove === "Paper") {
      result = "You Lose";
      score.losses++;
    } else if (computerMove === "Scissors") {
      result = "You Won";
      score.wins++;
    }
  } else if (playerMove === "Paper") {
    if (computerMove === "Rock") {
      result = "You Won";
      score.wins++;
    } else if (computerMove === "Paper") {
      result = "Its a Tie";
      score.ties++;
    } else if (computerMove === "Scissors") {
      result = "You Lose";
      score.losses++;
    }
  } else if (playerMove === "Scissors") {
    if (computerMove === "Rock") {
      result = "You Lose";
      score.losses++;
    } else if (computerMove === "Paper") {
      result = "You Won";
      score.wins++;
    } else if (computerMove === "Scissors") {
      result = "Its a Tie";
      score.ties++;
    }
  }

  localStorage.setItem("score", JSON.stringify(score));
  /*
  alert(
    `You chose ${playerMove} and the computer chose ${computerMove}, so ${result}`
  );
  */

  updateScoreElement();
  displayMoves(playerMove, computerMove);
  displayResult(result);
}

function resetScore() {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  localStorage.removeItem("score");
  updateScoreElement();
}

function updateScoreElement() {
  const scoreElement = document.querySelector(".js-score");
  scoreElement.innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function displayResult(result) {
  const resultElement = document.querySelector(".js-result");
  resultElement.innerHTML = result;
}

function displayMoves(playerMove, computerMove) {
  const movesElement = document.querySelector(".js-moves");
  movesElement.innerHTML = `You <img src="Resources/${playerMove}-emoji.png"> <img src="Resources/${computerMove}-emoji.png"> Computer `;
}
