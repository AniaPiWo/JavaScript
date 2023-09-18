const clock = document.querySelector(".clock");

const showTime = () => {
  const date = new Date();
  const hour = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
  const minutes =
    date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
  const secunds =
    date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();
  clock.textContent = `${hour}:${minutes}:${secunds}`;
};

setInterval(showTime, 100);
