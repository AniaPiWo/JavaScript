const list = document.querySelector("ul");
const liItems = document.querySelectorAll("li");
const deleted = document.querySelector(".deleted");
const deleteBtn = document.querySelectorAll(".delete");
const crossoutBtn = document.querySelectorAll(".crossout");
const undoneBtn = document.querySelectorAll(".undone");
const search = document.querySelector(".searchInput");
const addInput = document.querySelector(".addInput");
const addBtn = document.querySelector(".submitBtn");
const form = document.querySelector(".form");
const infoBox = document.querySelector(".infoBox");

undoneBtn.forEach((btn) => {
  btn.style.display = "none";
});

//functions
const addTask = (e) => {
  e.preventDefault();
  const newTask = addInput.value;
  if (newTask === "") {
    infoBox.textContent = "Please add a task!";
    setTimeout(() => {
      infoBox.textContent = "";
    }, 2000);
    return;
  }
  const newLi = document.createElement("li");
  newLi.innerHTML = `${newTask}`;
  list.appendChild(newLi);

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.classList.add("delete");
  newLi.appendChild(deleteBtn);

  addInput.value = "";
  infoBox.textContent = "Task added!";
  setTimeout(() => {
    infoBox.textContent = "";
  }, 2000);
};

const deleteTask = (e) => {
  e.target.parentNode.parentNode.remove();
};

const crossOut = (e) => {
  const li = e.target.parentNode.parentNode;
  li.style.textDecoration = "line-through";
  li.style.color = "hotpink";
};

const searchTask = (e) => {
  const searchText = e.target.value.toLowerCase();
  let tasks = [...liItems];
  tasks = tasks.filter((li) =>
    li.textContent.toLowerCase().includes(searchText)
  );
  list.textContent = "";
  tasks.forEach((li) => list.appendChild(li));
};

//listeners
deleteBtn.forEach((item) => {
  item.addEventListener("click", deleteTask);
});

crossoutBtn.forEach((item) => {
  item.addEventListener("click", crossOut);
});

search.addEventListener("input", searchTask);
form.addEventListener("submit", addTask);
