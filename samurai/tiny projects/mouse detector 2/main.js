const title = document.querySelector("h1");

document.body.addEventListener("click", () => {
  const x = event.clientX;
  const y = event.clientY;

  if (x % 2 === 0 && y % 2 === 0) {
    document.body.style.backgroundColor = "grey";
    title.textContent = `grey ${x}, ${y}`;
  } else if (x % 2 !== 0 && y % 2 !== 0) {
    document.body.style.backgroundColor = "pink";
    title.textContent = `pink ${x}, ${y}`;
  } else {
    document.body.style.backgroundColor = "lightgreen";
    title.textContent = `mint ${x}, ${y}`;
  }
});
