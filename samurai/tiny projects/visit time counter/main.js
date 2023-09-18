const timer = document.querySelector(".timer");

const timerCount = (start = 0) => {
  let time = start;
  return () => {
    time++;
    timer.textContent = `${time} sekund`;
  };
};

const count = timerCount();
setInterval(count, 1000);
