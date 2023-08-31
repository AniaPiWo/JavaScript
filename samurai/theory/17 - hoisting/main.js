//CO TO JEST HOISTING?
//Hoisting to mechanizm w JS, który polega na przenoszeniu DEKLARACJI zmiennych i funkcji na początek zakresu ich widoczności.
//Deklaracja to zarezerwowanie miejsca w pamięci komputera na zmienną lub funkcję.
//Przykład deklaracji zmiennej:
//let age;
// const i let nie są hoistowane, var jest hoistowane

//console.log(typeNumber); //main.js:8 Uncaught ReferenceError: Cannot access 'typeNumber' before initialization
//console.log(typeString); //main.js:8 Uncaught ReferenceError: Cannot access 'typeNumber' before initialization
console.log(typeBoolean); //undefined
console.log(array); //undefined
//console.log(obiekty); //main.js:8 Uncaught ReferenceError: Cannot access 'typeNumber' before initialization
//console.log(funkcja); //main.js:8 Uncaught ReferenceError: Cannot access 'typeNumber' before initialization
console.log(funkcjaNazwana()); //funkcjaNazwana
//console.log(funkcjaConst()); //r: Cannot access 'funkcjaConst' before initialization
//console.log(funkcjaLet()); //ReferenceError: Cannot access 'funkcjaLet' before initialization
console.log(funkcjaVar()); //Uncaught TypeError: funkcjaVar is not a function bo undefined i nie da sie wywolac

const typeNumber = 42;
let typeString = "Hello World";
var typeBoolean = true;

var array = [1, 2, 3, 4, 5];
let obiekty = {};
const funkcja = function () {};

function funkcjaNazwana() {
  //FUNKCJA NAZWANA
  console.log("funkcjaNazwana");
}

const funkcjaConst = function () {
  //FUNKCJA BEZ NAZWY
  console.log("funkcjaConst");
};

let funkcjaLet = function () {
  //FUNKCJA BEZ NAZWY
  console.log("funkcjaLet");
};

var funkcjaVar = function () {
  //FUNKCJA BEZ NAZWY
  console.log("funkcjaVar");
};
