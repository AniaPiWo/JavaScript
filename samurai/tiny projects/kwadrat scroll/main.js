const box = document.createElement("div");
document.body.appendChild(box);
box.classList.add("box");

let grow = true;
let size = 10;
box.style.width = `${size}px`;
box.style.height = `${size}px`;

window.addEventListener("scroll", (e) => {
  if (grow) {
    size += 5;
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
  } else {
    size -= 5;
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
  }

  if (size >= window.innerWidth / 2) {
    grow = false;
  } else if (size <= 0) {
    grow = true;
  }
});
