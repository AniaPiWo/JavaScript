const button = document.querySelector("button");
const text = document.querySelector(".text");
input = document.querySelector("input");

const names = [];
console.log(names);
const addName = (e) => {
  e.preventDefault();
  const newName = input.value;

  if (input.value.length) {
    for (name of names) {
      if (name === newName) {
        text.textContent = "To imie juz jest na liście!";
        input.value = "";
        return;
      }
    }
  }
  names.push(newName);
  input.value = "";
  text.textContent = names.join(", ");
};

button.addEventListener("click", addName);

input.addEventListener("focus", () => {
  text.textContent = names.join(", ");
});
