// operator REST od ES6
// - alternatywa dla arguments
// - wiele elementow podanych jako argumenty do jednej TABLICY
// - zapisuje sie jako trzy kropki ...nazwaTablicy
// - zwraca TABLICE
// - musi byc ostatnim parametrem

function showArguments(...args) {
  console.log(args);
  return args;
}
showArguments(); //[]
showArguments(1, 2, 3, 4, 5); // [1, 2, 3, 4, 5]

function showArguments2(a, b, ...args) {
  console.log(args);
  return args;
}
showArguments2(); //[]
showArguments2(1, 2, 3, 4, 5); // [3, 4, 5]

//ROZNE OPCJE ITERACJI Z REST
function addAllWords(...words) {
  let txt = "";
  for (let word of words) {
    txt += word + " ";
  }
  console.log(txt);
  return txt;
}

//starsza wersja
function addAllWords2(...words) {
  let txt = "";
  for (let i = 0; i < words.length; i++) {
    txt += words[i] + "-";
    console.log(txt);
  }
  return txt;
}

//forEach
function addAllWords3(...words) {
  let txt = "";
  words.forEach(function (word) {
    txt += word + "=";
  });
  console.log(txt);
  return txt;
}

addAllWords3(); //
addAllWords3("Hello", "World"); //Hello World
addAllWords3("Hello", "World", "I", "love", "you"); //Hello World I love you

const array = ["Hello", "World", "I", "love", "you"];
console.log(array);
console.log(...array);

//dzieki operatorowi rest mozemy zbierac pozostale argumenty
//(ktore zostaly umieszczone poza parametrami) do jednej tablicy

//PRZYKLAD 1
function showUsers(owner, ...others) {
  console.log(
    `Na imprezie byli: ${owner} ${others.length ? "oraz " + others + "." : "."}`
  );
}
showUsers("ania");
showUsers("ania", "tomek");
showUsers("ania", "tomek", "magda");

//METODY A FUNKCJE
// - metody to funkcje umieszczone w obiektach
// - metody sa wywolywane za pomoca kropki
// - metody moga byc przypisane do zmiennych
// - metody moga byc przekazywane jako argumenty do innych funkcji
// - metody moga byc zapisane w tablicach i obiektach
// - metody moga byc wywolywane w roznych kontekstach

//PRZYKLAD 1
const person = {
  name: "John",
  showName() {
    console.log(this.name);
  },
};
person.showName(); //John
