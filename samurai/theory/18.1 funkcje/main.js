//FUNKCJE
// - FUNKCJA TO OBIEKT
// - funkcj emozna wywowywac (jedyny obiekt ktory mozna wywolac)
// - o funkcji nalezy myslec jako malym programie, ktory robi cos z danymi lub cos zwraca lub to i to
// - funcka moze modyfikowac program (efekt uboczny) lub nie modyfikowac programu (czysta funkcja)
// - jesli funkcja tylko przetwarza dane i zwraca wynik to jest to czysta funkcja ((kluczowe slowo return)
// - funkcja jest wielokrotnego uzytku
// - first class object - mozna przypisac do zmiennej, mozna przekazac jako argument, mozna zwrocic z funkcji (funkcja wyzszego rzedu)

//1.WYRAZENIE FUNKCYJNE tworazymy zmienna i przypisujemy do niej funkcje
// const nazwaFunkcji = function () {}
const nazwaFunkcji = function (message) {
  console.log(message);
};
nazwaFunkcji("Hello World");

//2.DEKLARACJA FUNKCJI
// function nazwaFunkcji() {}
function addNumbers(a, b) {
  return a + b;
}
const sum = addNumbers(2, 3);
console.log(sum);
//podlega hoistingowi - jest dostepna w calym pliku
showCourseName();
function showCourseName() {
  console.log("Programowanie w JavaScript");
}

//3.KONSTRUKTOR FUNKCJI - prawie nigdy nie uzywamy
// const nazwaFunkcji = new Function();
const sayHello = new Function("console.log('Hello World')");
sayHello();

//4.FUNKCJA STRZALKOWA
// const nazwaFunkcji = () => {}
const sayHello2 = (message) => console.log(message);
sayHello2("Hello World vol 2");

//5. PRZYPISANIE FUNKCJI DO INNEJ ZMIENNEJ - referencja (link) do funkcji
const sayHello3 = sayHello2;
console.log(sayHello2, sayHello3);
sayHello3("Hello World vol 3");

//WYWOLANIE FUNKCJI
//1. nazwaFunkcji()
//2. nazwaFunkcji(argument)
//3. nazwaFunkcji(argument1, argument2)
//mozna wielokrotnie wywolywac funkcje

//ZWRAACANIE WARTOSCI Z FUNKCJI
// - funkcja moze cos robic i moze cos zwracac
// - DOMYŚLNIE FUNCJA ZWRACA UNDEFINED
// - mozemy to zmienic za pomoca slowa return
// - return konczy dzialanie funkcji
// - return moze zwrocic tylko jedna wartosc, ale moze to byc obiekt lub tablica

//Przyklad 1 - funkcja ktora wpływa na program (efekt uboczny) i nie zwraca wartosci (czyli zwraca undefined)
const dividedBy2 = function (number) {
  console.log(number / 2);
};
const result = dividedBy2(216);
console.log("RESULT =>", result); //undefined

let number = 0;
const add = function () {
  number++;
  console.log(number);
};
add(); //1
add(); //2

//Przykład 2 - funkcja. ktora tylko przetwarza dane i zwraca wynik (czysta funkcja)

const dividedBy3 = function (number) {
  return number / 3;
};
const result2 = dividedBy3(216);
console.log("RESULT2 =>", result2); //72

//Przykład 3 - funkcja z efektem ubocznym i zwracajaca wartosc
const dividedBy4 = function (number) {
  const result = number / 4;
  console.log(result);
  return result;
};
const result3 = dividedBy4(216);
console.log("RESULT3 =>", result3); //54

//PARAMETRY I ARGUMENTY
//parametr - element składowy funkcji na etapie jej tworzenia
//nieoboowiazkowy, mozna podac wiecej niz jeden

//argument - wartosc przekazana do funkcji podczas jej wywolania
//obowiazkowy, mozna podac wiecej niz jeden
//jesli nie podamy argumentu to parametr przyjmie wartosc undefined
//jesli podamy wiecej argumentow niz parametrow to nadmiarowe argumenty zostana zignorowane

//bez parametrow
const sayMyName = function () {
  console.log("Ania");
};
sayMyName();

//z jednym parametrem
const sayMyName2 = function (name) {
  console.log(`Witaj ${name}!`);
};
sayMyName2("Tomek");
sayMyName2(); //undefined

//mozemy spr ile parametrow ma funkcja
addNumbers.length; //2
