const btn = document.querySelector("button");
const list = document.querySelector("ul");
const items = document.querySelectorAll("li");

let size = 10;

btn.addEventListener("click", () => {
  console.log("clicked");
  list.style.display = "block";
  size += 5;

  items.forEach((item) => {
    item.style.fontSize = `${size}px`;
  });
});
