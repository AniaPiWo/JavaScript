/* 
//ver bez closure mechanizmu
const counter = document.querySelector(".counter");
let number = 0;

const add = () => {
  number++;
  counter.textContent = `${number} clicks`;
};

document.addEventListener("click", add);
 */

//ver z Closure mechanizm

const addVol2 = (start = 0) => {
  let number = start;
  return () => {
    number++;
    document.body.textContent = `${number} clicks`;
  };
};

const counter = addVol2();
console.log(counter);
document.addEventListener("click", counter);

//const counterFrom10 = addVol2(10);
//document.addEventListener("click", counterFrom10);
