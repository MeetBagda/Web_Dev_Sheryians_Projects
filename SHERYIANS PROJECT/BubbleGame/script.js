var timer = 60;
var hitRn;
var score = 0;
var clickedNum;

function makeBubble() {
  var clutter = "";

  for (var i = 0; i <= 101; i++) {
    clutter += `<div class="bubble">${Math.floor(Math.random() * 10)}</div>`;
  }

  document.querySelector("#panel-bottom").innerHTML = clutter;
}

function getNewHit() {
  hitRn = Math.floor(Math.random() * 10);
  document.querySelector("#hit-val").innerHTML = hitRn;
}

function runTimer() {
  var timeInt = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timer-val").textContent = timer;
    } else {
      clearInterval(timeInt);
      document.querySelector("#panel-bottom").innerHTML = "<h1>Game Over</h1>"
    }
  }, 1000);
}

function increaseScore() {
  score += 10;
  document.querySelector("#score-val").innerHTML = score;
  makeBubble();
  getNewHit();
}

document.querySelector("#panel-bottom").addEventListener("click", (dets) => {
  clickedNum = Number(dets.target.textContent);
  if (clickedNum === hitRn) {
    increaseScore();
  }
});

makeBubble();
runTimer();
getNewHit();
