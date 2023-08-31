//1. WARTOSCI DOMYSLNE ARGUMENTOW ES6
// jesli nie podamy argumentu to parametr przyjmie wartosc undefined
// jesli podamy wiecej argumentow niz parametrow to nadmiarowe argumenty zostana zignorowane

const addTwoNumbers = (x, y) => {
  const result = x + y;
  console.log(result);
  return result;
};
addTwoNumbers(4, 5); //9
addTwoNumbers(4); //NaN bo 2 + undefined
addTwoNumbers(4, 5, 6); //9 bo 6 zostalo zignorowane

// ES6 - mozemy podac wartosci domyslne parametrow
const addTwoNumbers2 = (x = 0, y = 0) => {
  const result = x + y;
  console.log(result);
  return result;
};
addTwoNumbers2(4, 5); //9
addTwoNumbers2(4); //4 bo 4 + 0
addTwoNumbers2(); //0 bo 0 + 0
addTwoNumbers2(4, 5, 6); //9 bo 6 zostalo zignorowane

//2. CALLBACK - funkcja przekazana jako argument do innej funkcji (funkcji wyzszego rzedu)
console.log("CALLBACK:");

function count(x, callback) {
  return callback(x);
}

function addOne(number) {
  number++;
  console.log("ADD ONE => ", number);
  return number;
}

function subtractOne(number) {
  number--;
  console.log("SUBSTRACT ONE => ", number);
  return number;
}

function multiplyByTwo(number) {
  number *= 2;
  console.log("MULTIPLY BY TWO => ", number);
  return number;
}

function dividedBy2(number) {
  number /= 2;
  console.log("DIVIDED BY TWO => ", number);
  return number;
}

count(10, addOne); //5
count(10, subtractOne); //3
count(10, multiplyByTwo); //8
count(10, dividedBy2); //2

count(4, addOne); //5
count(4, subtractOne); //3
count(4, multiplyByTwo); //8
count(4, dividedBy2); //2

//PRZYKLAD 2
console.log("CALLBACK2: ");
const showClick = function () {
  console.log("click");
};
window.addEventListener("click", showClick);

//PRZYKLAD 3
console.log("CALLBACK3: ");
const showTime = () => console.log("mineły 2 sek");
//setInterval(showTime, 2000);

//PRZYKLAD 4
console.log("CALLBACK4: ");
const usersAge = [20, 15, 18, 30, 25, 14];
const showAge = (age) => console.log(`wiek uzytkownika to ${age}`);
usersAge.forEach(showAge);

//ARGUMENTS - obiekt ktory zawiera wszystkie argumenty przekazane do funkcji

const showArguments = function () {
  console.log("ARGUMENTS => ", arguments);
  console.log("ARGUMENTS LENGTH => ", arguments.length);
  console.log("ARGUMENTS[0] => ", arguments[0]);
  console.log("ARGUMENTS[1] => ", arguments[1]);
  console.log("ARGUMENTS[2] => ", arguments[2]);
  console.log(Array.isArray(arguments)); //false
};

showArguments(1, 2, 3); //Arguments(3) [1, 2, 3, callee: ƒ, Symbol(Symbol.iterator): ƒ]

const addAllNumbers = function () {
  let result = 0;
  for (let i = 0; i < arguments.length; i++) {
    result += arguments[i];
    console.log(result);
  }
  return result;
};
addAllNumbers(1, 2, 3); //6

function showInfoAboutUser(age, name, height) {
  if (arguments.length === 0) {
    console.log("nie ma zadnych informacji o uzytkowniku");
  } else if (arguments.length === 1) {
    console.log(`uzytkownik ma ${age} lat, nic wiecej nie wiemy`);
  } else if (arguments.length === 2) {
    console.log(`uzytkownik ma ${age} lat i ma na imie ${name}`);
  } else {
    console.log(
      `uzytkownik ma ${age} lat, ma na imie ${name} i ma ${height} cm wzrostu`
    );
  }
}

showInfoAboutUser();
showInfoAboutUser(18);
showInfoAboutUser(18, "Tomek");
showInfoAboutUser(18, "Tomek", 180);
