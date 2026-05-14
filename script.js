let score = 0;
let time = 10;
let gameRunning = false;
let timer;

function startGame() {
  score = 0;
  time = 10;
  gameRunning = true;

  document.getElementById("score").innerText = "Score: 0";
  document.getElementById("time").innerText = "Time: 10";

  timer = setInterval(() => {
    time--;
    document.getElementById("time").innerText = "Time: " + time;

    if (time === 0) {
      clearInterval(timer);
      gameRunning = false;
      alert("Time's up! Your score: " + score);
    }
  }, 1000);
}

function clickMe() {
  if (!gameRunning) return;

  score++;
  document.getElementById("score").innerText = "Score: " + score;
}
