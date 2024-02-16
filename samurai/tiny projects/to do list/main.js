const list = document.querySelector("ul");
const liItems = document.querySelectorAll("li");
const deleted = document.querySelector(".deleted");
const search = document.querySelector(".searchInput");
const addInput = document.querySelector(".addInput");
const addBtn = document.querySelector(".submitBtn");
const crossOutBtn = document.querySelector(".crossout");
const form = document.querySelector(".form");
const infoBox = document.querySelector(".infoBox");

// Hide undone buttons
const undoneBtn = document.querySelectorAll(".undone");
undoneBtn.forEach((btn) => {
  btn.style.display = "none";
});

// Function to add a task
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
  newLi.innerHTML = newTask;

  // Create a delete button for the new task
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.classList.add("delete");
  newLi.appendChild(deleteBtn);

  list.appendChild(newLi);
  addInput.value = "";
  infoBox.textContent = "Task added!";
  setTimeout(() => {
    infoBox.textContent = "";
  }, 2000);
};

// Function to handle delete task
const deleteTask = (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentNode.remove();
    infoBox.textContent = "Deleted!";
    setTimeout(() => {
      infoBox.textContent = "";
    }, 2000);
  }
};

// Function to cross out task
const crossOut = (e) => {
  if (e.target.nodeName === "LI") {
    e.target.style.textDecoration = "line-through";
    e.target.style.color = "hotpink";
  }
};

// Function to search for tasks
const searchTask = (e) => {
  const searchText = e.target.value.toLowerCase();
  let tasks = [...liItems];
  tasks = tasks.filter((li) =>
    li.textContent.toLowerCase().includes(searchText)
  );
  list.textContent = "";
  tasks.forEach((li) => list.appendChild(li));
};

// Add event listeners
list.addEventListener("click", deleteTask);
crossOutBtn.addEventListener("click", crossOut);
search.addEventListener("input", searchTask);
form.addEventListener("submit", addTask);
