const stoper = document.querySelector(".stoper");
const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const resetBtn = document.querySelector(".reset");

stopBtn.classList.add("hidden");

let time = 0;
let intervalId;

const stoperStart = () => {
  startBtn.classList.add("hidden");
  stopBtn.classList.remove("hidden");

  intervalId = setInterval(() => {
    time++;
    stoper.textContent = (time / 100).toFixed(2);
  }, 10);
};

const stoperStop = () => {
  clearInterval(intervalId);
  startBtn.classList.remove("hidden");
  stopBtn.classList.add("hidden");
};

const stoperReset = () => {
  time = 0;
  stoper.textContent = time;
};

startBtn.addEventListener("click", stoperStart);

stopBtn.addEventListener("click", stoperStop);

resetBtn.addEventListener("click", stoperReset);
