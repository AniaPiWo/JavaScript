const textSpan = document.querySelector(".text");
const cursorSpan = document.querySelector(".cursor");
const txt =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, amet eos. Debitis, consectetur. Voluptas quaerat velit dolorum excepturi vel sequi reprehenderit iure quis error ea fugit, itaque blanditiis cumque nisi magni corrupti repellendus eos deserunt? Cumque, expedita asperiores molestiae iure voluptatibus earum enim eius veritatis voluptas culpa, eos dolore ad.";

let indexText = 0;
const time = 50;

//textSpan.textContent = txt;
const addLetter = () => {
  textSpan.textContent += txt[indexText];
  indexText++;

  if (indexText === txt.length) clearInterval(indexTyping);
};

const cursorAnimation = () => {
  console.log("ok");
  cursorSpan.classList.toggle("active");
};

const indexTyping = setInterval(addLetter, time);
const indexCursor = setInterval(cursorAnimation, 400);
