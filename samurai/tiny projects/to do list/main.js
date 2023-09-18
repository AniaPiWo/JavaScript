const list = document.querySelector("ul");
const liItems = document.querySelectorAll("li");
const deleted = document.querySelector(".deleted");
const deleteBtn = document.querySelectorAll(".delete");
const crossoutBtn = document.querySelectorAll(".crossout");
const undoneBtn = document.querySelectorAll(".undone");
const search = document.querySelector(".search");
const addBtn = document.querySelector(".add");

undoneBtn.forEach((btn) => {
  btn.style.display = "none";
});

//functions
const addTask = (e) => {
  e.preventDefault();
  const task = search.value;
  console.log(task);
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

addBtn.addEventListener("click", addTask);
