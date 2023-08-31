const items = document.querySelector(".items");
const addBtn = document.querySelector(".addBtn");

let btnCounter = 0;

addBtn.addEventListener("click", () => {
  ++btnCounter;
  const newItem = document.createElement("div");
  newItem.classList.add("item");
  newItem.textContent = `${btnCounter}`;
  items.appendChild(newItem);

  if (btnCounter % 5 === 0) {
    newItem.classList.add("round");
  }
});
