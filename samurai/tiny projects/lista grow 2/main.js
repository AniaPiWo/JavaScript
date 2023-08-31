let size = 10;
let orderElement = 1;

const init = () => {
  const btn = document.createElement("button");
  btn.textContent = "Dodaj 10 elementów listy";
  document.body.appendChild(btn);
  const ul = document.createElement("ul");
  ul.style.listStyle = "none";
  document.body.appendChild(ul);
  btn.addEventListener("click", createLiElements);
};

const createLiElements = () => {
  for (let i = 0; i < 10; i++) {
    const li = document.createElement("li");
    li.textContent = `Element nr ${orderElement++}`;
    li.style.fontSize = `${size++}px`;
    document.querySelector("ul").appendChild(li);
  }
};

init();
