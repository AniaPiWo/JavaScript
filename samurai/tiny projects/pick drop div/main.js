const box = document.querySelector(".box");
let divX = 150;
let divY = 50;
box.style.left = `${divX}px`;
box.style.top = `${divY}px`;

let active = false;
let insertDivX;
let insertDivY;

box.addEventListener("mousedown", (e) => {
  box.style.backgroundColor = "grey";
  active = true;
  insertDivX = e.offsetX;
  insertDivY = e.offsetY;
  console.log(insertDivX, insertDivY);
});

box.addEventListener("mousemove", (e) => {
  if (active) {
    divX = e.clientX - insertDivX;
    divY = e.clientY - insertDivY;
    box.style.left = `${divX}px`;
    box.style.top = `${divY}px`;
  }
});

box.addEventListener("mouseup", (e) => {
  box.style.backgroundColor = "black";
  active = false;
});
