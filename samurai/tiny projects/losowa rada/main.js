import { options } from "./options.js";

const addBtn = document.querySelector("#add");
const resetBtn = document.querySelector("#reset");
const showAdviceBtn = document.querySelector("#showAdvice");
const showOptionsBtn = document.querySelector("#showOptions");
const text = document.querySelector(".text");
const input = document.querySelector("input");

//const options = ["walcz", "przemyśl to jeszcze raz", "zrób coś innego"];

const addOption = (e) => {
  e.preventDefault();
  const newOption = input.value;

  if (!newOption) {
    text.textContent = "Wpisz coś w pole tekstowe!";
    setTimeout(() => {
      text.textContent = "";
    }, 2000);
    return;
  }

  if (newOption.length <= 3) {
    text.textContent = "Opcja musi mieć co najmniej 4 znaki!";
    setTimeout(() => {
      text.textContent = "";
    }, 2000);
    input.value = "";
    return;
  }

  if (input.value.length) {
    for (let option of options) {
      if (option === newOption) {
        text.textContent = `Opcja "${newOption}" jest już na liście!`;
        setTimeout(() => {
          text.textContent = "";
        }, 2000);
        input.value = "";
        return;
      }
    }
  }
  options.push(newOption);
  input.value = "";
  text.textContent = `Do zbioru opcji dodano nowy element  - ${newOption}`;
  setTimeout(() => {
    text.textContent = "";
  }, 2000);
};

const resetOptions = (e) => {
  e.preventDefault();
  options.length = 0;
  text.textContent = "Zresetowano listę opcji!";
  setTimeout(() => {
    text.textContent = "";
  }, 2000);
};

const showOptions = (e) => {
  e.preventDefault();
  //text.textContent = `Oto Twoje opcje - ${options.join(", ")}`;
  text.textContent = "Oto wszystkie Twoje opcje:";
  const optionsList = document.createElement("ul");
  text.appendChild(optionsList);
  options.forEach((option) => {
    const li = document.createElement("li");
    li.textContent = option;
    optionsList.appendChild(li);
  });

  if (!options.length) {
    text.textContent = "Nie ma żadnych opcji...";
    setTimeout(() => {
      text.textContent = "";
    }, 2000);
  }
};

const drawOption = (e) => {
  e.preventDefault();
  const index = Math.floor(Math.random() * options.length);
  text.textContent = options[index];
};

addBtn.addEventListener("click", addOption);
resetBtn.addEventListener("click", resetOptions);
showAdviceBtn.addEventListener("click", drawOption);
showOptionsBtn.addEventListener("click", showOptions);

input.addEventListener("focus", () => {
  //text.textContent = options.join(", ");
  input.value = "";
});
