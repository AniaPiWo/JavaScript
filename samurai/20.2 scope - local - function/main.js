/* ZAKRES LOKALNY (FUNKCJA) */

// Przykład 1

// Jeśli zakres lokalny tworzony jest przez funkcje to sposób deklaracji nie ma znacznie (istniało przed ES6).

var varFun = "varFun globalny";
let letFun = "letFun globalny";
const constFun = "constFun globalny";

function variablesInFunction() {
  var inFunction = "jestem";
  let varFun = "varFun w funkcji";
  // varFun = 4;
  // console.log(varFun);
  // console.log(inFunction);
  let letFun = "let z variableInFunction";
  // const constFun = 6;
  // console.log(funInFun);//error
  console.log(varFun); //varFun w funkcji
  function showVariable() {
    // const constFun = "funkcja w funkcji";
    varFun = "nadpisuje wartość zmiennej z wyższego zakresu";
    let funInFun = "lokalny w lokalnym";
    console.log(varFun); //nadpisuje wartość zmiennej z wyższego zakresu
    console.log(letFun); //let z variableInFunction
    console.log(constFun); //constFun globalny
    //Zmienne zadeklarowane w zakresach wyżyszych są widoczne w zakresie zagnieżdzonym (również te zadeklarowane w zakresie globalnym), ale mogą być przysłonięte przez własny zakres (czy kolejny zakres nadrzędny).
  }
  showVariable();
}
variablesInFunction();

//showVariable();

// Funkcja tworzy zakres lokalny dla zmiennych zadeklarowanych za pomocą const var i let.

// PRZYKŁAD 2

function calculate(a, b) {
  // const a = a;
  // const b = b;
  let number1 = a;
  let number2 = b;

  function add(x, y) {
    x = 10;
    console.log(x + y);
  }
  add(number1, number2);
}

const firstNumber = 10;
calculate(firstNumber, 3);

// PRZYKŁAD 3

function calculate2(a, b) {
  // const a = a;
  // const b = b;
  let number1 = a;
  let number2 = b;
  function add2() {
    number2 = 10;
    //const number2 = 10;
    console.log("clg in add2 => ", number1 + number2);
  }
  console.log("clg outside of add2 => ", number1 + number2);
  add2();
  add3();
}

function add3() {
  //number2 = 10;
  const number2 = 10;
  console.log("clg in add3 in global => ", number1 + number2); //error number1 is not defined
}

calculate2(2, 3);
