const countdown = document.querySelector(".countdown");

/* const countDown = (start = 10) => {
  countdown.textContent = "10";
  let time = start;
  return () => {
    time--;
    countdown.textContent = `${time}`;
    if (time === 0) {
      countdown.textContent = "koniec";
      clearInterval(count);
    }
  };
};

const count = countDown();
setInterval(count, 1000); */

const days = document.querySelector(".d");
const hours = document.querySelector(".h");
const minutes = document.querySelector(".m");
const seconds = document.querySelector(".s");

const endTime = new Date("2023-12-31 23:59:59").getTime();

setInterval(() => {
  const nowTime = new Date().getTime();
  const time = endTime - nowTime;
  days.textContent = Math.floor(time / (1000 * 60 * 60 * 24));
  hours.textContent = Math.floor(
    (time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  minutes.textContent = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  seconds.textContent = Math.floor((time % (1000 * 60)) / 1000);
}, 1000);
