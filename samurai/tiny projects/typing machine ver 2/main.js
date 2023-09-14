const textSpan = document.querySelector(".text");
const cursorSpan = document.querySelector(".cursor");
const txt = [
  "DZIEN DOBRY !",
  "ŁADNA DZISIAJ POGODA!",
  "JAK SIĘ MASZ?",
  "BO JA MAM SIĘ BARDZO DOBRZE!",
];

let acctiveLetter = -20;
let activeText = 0;

const addLetter = () => {
  if (acctiveLetter >= 0) {
    textSpan.textContent += txt[activeText][acctiveLetter];
  }
  acctiveLetter++;
  if (acctiveLetter === txt[activeText].length) {
    activeText++;
    if (activeText === txt.length) return;

    return setTimeout(() => {
      acctiveLetter = -10;
      textSpan.textContent = "";
      addLetter();
    }, 2000);
  }
  setTimeout(addLetter, 100);
};

addLetter();
const cursorAnimation = () => {
  cursorSpan.classList.toggle("active");
};
const indexCursor = setInterval(cursorAnimation, 400);
