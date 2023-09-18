const slideList = [
  { img: "img/1.jpg", text: "Pierwszy mops" },
  { img: "img/2.jpg", text: "Drugi mops" },
  { img: "img/3.jpg", text: "Trzeci mops" },
];

const image = document.querySelector("img.slider");
const text = document.querySelector("h1.slider");
const dots = document.querySelectorAll(".dots span");

// interface
const time = 5000;
let active = 0;

/* const changeDot = () => {
  const activeDot = dots.findIndex((dot) => dot.classList.contains("active"));
  dots[activeDot].classList.remove("active");
  dots[active].classList.add("active");
};
 */

const updateSlide = (newActive) => {
  dots[active].classList.remove("active");

  active = newActive;

  if (active < 0) active = slideList.length - 1;
  else if (active >= slideList.length) active = 0;

  dots[active].classList.add("active");
  image.src = slideList[active].img;
  text.textContent = slideList[active].text;
};

const changeSlide = () => {
  updateSlide(active + 1);
};

const keyChangeSlide = (e) => {
  if (e.code == "ArrowRight") {
    updateSlide(active + 1);
  } else if (e.code == "ArrowLeft") {
    updateSlide(active - 1);
  }
};

document.addEventListener("keydown", keyChangeSlide);
setInterval(changeSlide, time);
