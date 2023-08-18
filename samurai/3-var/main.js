//zmienna - sposob na zapisanie danych, "pudełko"

//ATRYBUTY ZMIENNEJ W JS
//1 - nazwa
//2 - miejsce (prowadzi do niego identyfikator - nazwa)
//3 - wartosc
// mozna jeszcze dodac czas zycia - zalezny od tego gdzie jest sstworzona (globalna lokalna)

//sama zmienna w js nie ma typu
//typ ma wartosc przechowywana w zmiennej
//PUDELKO NIE MA TYPU, TO CO W NIM JEST MA TYP
//TYPY ISTNIEJA, ale nadawane sa dynamicznie (w procesie wykonywania kodu)

//NAZWA ZMIENNEJ
//po ang
//czym jest / do czego jest / czym sie zajmuje
//camelCase
//bez spacji, myslnika, cyfry na poczatku
//moze byc z duzej litery, podkreslnika, $

//DEKLARACJA
let userName; //undefined

//PRZYPISANIE WARTOSCI
userName = "Ania";

//DEKLARACJA + PRZYPISANIE WARTOSSCI
const userName2 = "ania";

//DEKLARACJA + PRZYPISANIE ZE STWORZENIEM FUNKCJI
let showUserName = function () {
  console.log(userName);
};
showUserName();

//DEKLARACJA WIELU ZMIENNYCH
let name, age, address;
let position = [200, 100],
  score = null,
  time = 20.2,
  ipAdress;
const firtsUser = "ania",
  secondUser = "asia";

let example1 = 200;
console.log(example1); //200
example1 = example1 + 1; //kasujemy 200 i przypisujemy nowe miejsce w pamieci 201
console.log(example1); //201

const example2 = 200;
console.log(example2); //200
//example2 = example2 + 1; //error - Assignment to constant variable.

//kopiowana wartosc - tworzy sie NOWA, identyczna
let example3 = example2;

//OBIEKT TABLICY
const arrayExample = [1];
//przypisanie nowego obiektu nie jest mozliwe
//arrayExample = [1, 2] //error - Assignment to constant variable.
//MODYFIKACJE w obiekcie przypisanym - s amozliwe
arrayExample[1] = 2;
console.log(arrayExample);

//obiekt globalny z var - tak, z let i const - nie!
var globalProp1 = "za pomoca var";
let globalProp2 = "za pomoca let";
const globalProp3 = "za pomoca const";
//window.globalProp1 <- tylko to dziala!dzialanie niepozadane!

//HOISTOWANIE
console.log(varVariable); //undefined
//console.log(letVariable); //error  ReferenceError: Cannot access 'letVariable' before initialization
//console.log(constVariable); //error - ReferenceError: Cannot access 'constVariable' before initialization

var varVariable = 1;
let letVariable = 1;
const constVariable = 1;

// LISTA SŁÓW ZAREZERWOWANYCH (nie można używać jako nazwy zmiennych)
/* 
await
abstract
boolean
byte
break
char
class
case
catch
continue
const
debugger
double
default
delete
do
enum
export
extends
else
final
float
false
finally
for
function
goto
implements
import
int
interface
if
in
instanceof
long
native
new
null
package
private
protected
public
return
short
static
super
synchronized
switch
throws
transient
this
throw
true
try
typeof
volatile
var
void
while
with
yield
 */
