const counter = document.querySelector(".counter");

let number = 0;

const add = () => {
  number++;
  counter.textContent = `${number} clicks`;
};

document.addEventListener("click", add);

//Closure mechanizm, ktory pozwala uzyskac dostep do danej wartosci poza funkcja i gdy ta funkcja juz sie zakonczyla
//zmienna istnieje w innej funkcji, mimo ze funkcja juz sie zakonczyla
//w pamieci programu zmienna istnieje jesli prowadzi do niej referencja z innej funkcji, mozemy miec do niej dostep oraz ja zmieniac
//przyklad
function x() {
  let number = 0;
  function y() {
    number += 15;
    console.log(number);
  }
  return y;
}

x()(); //15
const example = x();
console.log(example); //wydrukuje tylko funkcje y z funkcji x
example(); //15
