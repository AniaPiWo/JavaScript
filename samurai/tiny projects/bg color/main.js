let red = 255;
let green = 255;
let blue = 255;

document.body.style.backgroundColor = `rgb(${red},${green},${blue})`;
document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowUp") {
    red = Math.max(0, red - 5);
    green = Math.max(0, green - 5);
    blue = Math.max(0, blue - 5);
    document.body.style.backgroundColor = `rgb(${red},${green},${blue})`;
    console.log(`rgb(${red},${green},${blue})`);
  } else if (event.key === "ArrowDown") {
    red = Math.min(255, red + 5);
    green = Math.min(255, green + 5);
    blue = Math.min(255, blue + 5);
    document.body.style.backgroundColor = `rgb(${red},${green},${blue})`;
    console.log(`rgb(${red},${green},${blue})`);
  }
});
