const addBtn = document.querySelector(".addBtn");
const list = document.querySelector(".list");

let counter = 1;

addBtn.addEventListener("click", () => {
  const newItem = document.createElement("li");
  newItem.textContent = `${counter}`;
  list.appendChild(newItem);
  if (counter % 3 === 0) {
    newItem.classList.add("big");
  }
  counter += 2;
});
