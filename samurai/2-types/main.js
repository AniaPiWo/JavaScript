//7 typow wbudowanych:

//6 z nich to typy Proste - string, number, null, undefined, boolean, symbol
//1 z nich to typy Refrencyje (Obiekty: obiekt, funkcja, tablica.. )

//typ to zbiór cech i zachowan przypisany do wartosci zaliczanej do danego typu

//typeof - operator, zwraca typ

//typ prosty string
typeof "tekst";
typeof "222.22";
typeof `grawis`;
let userName = "Ania";
typeof userName;

//Konwersja jawna
const a = 2 + "2";
console.log(a); //"22"

//typ prosty number - liczba (bez podzialu na integer, float, decimal)
typeof 222;
typeof 1000.2;
typeof 3.2e10;
typeof NaN; //number

//typ prosty boolean
typeof true;
typeof false;
typeof (2 == 3);

//undefined - niezidentyfikowany (jedna wartość)
//najczesciej tworzony przez jezyk
typeof undefined;
let date; //deklaracja bez przypisania
console.log(typeof date); //undefined

//null - nie posiada (jedna wartość)
//tworzone przez programiste
let userSecondName = null;
typeof userSecondName; //object - blednie okreslony typ!

//symbol (od ES6)
typeof Symbol();

//Obiekty
typeof {};
typeof [];
typeof function () {};

//przypisanie wartosci do typow prostych
let primitiveType1 = 20;
let primitiveType2 = primitiveType1; //20 pobierana jest wartosc, KOPIA!
//na tym etapie dwie zmienne z wartoscia 20
primitiveType1 = 30;
console.log(primitiveType1);
console.log(primitiveType2);

//przypisanie referencji do obiektu
let referenceValue1 = [1, 2, 3];
let referenceValue2 = referenceValue1;
//ttlko jeden obiekt z dwoma linkami do niego!
referenceValue1[3] = 4;
console.log(referenceValue1);
console.log(referenceValue2);
//obiekt nie zostal skopiowany a zostal przypisany link do miejsca w pamieci
