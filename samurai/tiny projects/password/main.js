const message = document.querySelector(".message");
const input = document.querySelector("input");

let passwords = ["wiosna", "zima", "lato", "jesien"];
let messageText = ["super", "zimno", "ciepło", "deszczowo"];
/* 
input.addEventListener("input", function (e) {
  message.style.display = "none";

  for (let i = 0; i < passwords.length; i++) {
    if (passwords[i] === e.target.value) {
      message.textContent = messageText[i];
      message.style.display = "block";
      break;
    } else {
      message.style.display = "block";
      message.textContent = "nieprawidłowe hasło";
    }
  }
});
 */

const ShowMessage = (e) => {
  let found = false;
  let text = e.target.value.toLowerCase();

  passwords.forEach((password, i) => {
    console.log(password, i);
    if (password === text) {
      message.textContent = messageText[i];
      message.style.display = "block";
      found = true;
      return;
    }
  });

  if (!found) {
    message.style.display = "block";
    message.textContent = "nieprawidłowe hasło";
  }
};

input.addEventListener("input", function (e) {
  ShowMessage(e);
});

/* input.addEventListener("focus", function () {
  this.classList.add("active");
});

input.addEventListener("blur", function () {
  this.classList.remove("active");
});
 */

//console.log(e.target.value) =  console.log(this.value); nie dziala przy =>
