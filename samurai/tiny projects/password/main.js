const message = document.querySelector(".message");
const input = document.querySelector("input");

let password = "pass";
let messageText = "supertajna wiadomosc";

input.addEventListener("input", (e) => {
  if (password === e.target.value) {
    message.textContent = messageText;
    message.style.display = "block";
  } else {
    message.style.display = "block";
    message.textContent = "nieprawidłowe hasło";
  }
});
