const button = document.querySelector("button");
const text = document.querySelector(".text");

const chars = "ABCDEFGHIJKLMNOPRSTUWXYZ0123456789";
const codesNumber = 10;
const charsNumber = 10;

const codesGenerator = () => {
  for (let i = 0; i < codesNumber; i++) {
    let code = "";
    for (let i = 0; i < charsNumber; i++) {
      const index = Math.floor(Math.random() * chars.length);
      code += chars[index];
    }
    const div = document.createElement("div");
    div.textContent = code;
    text.appendChild(div);
  }
};

button.addEventListener("click", () => {
  codesGenerator();
});
