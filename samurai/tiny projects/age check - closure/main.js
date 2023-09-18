const userText = document.querySelector(".user");

const userData = (name = "", age) => {
  let userName = name;
  let userAge = age;

  function showName() {
    userText.textContent = `Czesc ${userName}! ${
      userAge >= 18 ? "Mozesz kupic piwo" : "Nie mozesz kupic piwa"
    }`;
  }
  return showName;
};

const user = userData("Pjoter", 18);
user();

const user2 = userData("Marta", 17);
user2();

const user3 = userData();
user3();
