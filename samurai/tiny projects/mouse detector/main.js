const title = document.querySelector("h1");

const randomColor = () => {
  const r = Math.floor(Math.random() * 255 + 1);
  const g = Math.floor(Math.random() * 255 + 1);
  const b = Math.floor(Math.random() * 255 + 1);
  return `rgb(${r}, ${g}, ${b})`;
};

document.body.addEventListener("mousemove", () => {
  title.textContent = `${event.clientX}, ${event.clientY}`;
  document.body.style.backgroundColor = `rgb(${event.clientX}, ${event.clientY}, 000)`;
  //document.body.style.backgroundColor = randomColor();
});

//event to obiekty, które są przekazywane do funkcji, które są wywoływane w momencie wystąpienia zdarzenia
