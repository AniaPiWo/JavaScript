// system dziesietny
const hexNumber = 0xff; //255

//system binarny (ósemkowy)
const binaryNumber = 0b1010; //10

//notacja naukowa
const scientificNumber = 1e3; //1000

//system szesnastkowy
const hexNumber2 = 0xff; //255

//metody, które mozemy wykonywac na liczbach

//zaokraglenie toFixed() - UWAGA - zwraca stringa, nie liczbe!
const score = 20.67;
score.toFixed(); //zaokraglenie zwyczajne do liczby calkowitej   "21"
score.toFixed(1); //zaokraglenie do 1 miejsca po przecinku   "20.7"
score.toFixed(2); //zaokraglenie do 2 miejsca po przecinku   "20.67"
score.toFixed(3); //zaokraglenie do 3 miejsca po przecinku   "20.670"

// 123.toFixed(1); // blad, bo 123. to nie liczba, tylko literał (jest kropka, wiec interpretuje jako liczba z ułamkiem)
(123).toFixed(1); //123.0 bez bledu
// 123.0.toFixed(1); //123.0 bez bledu (zakomentowane, bo vsc zmienia na (123).toFixed(1);)
// 123..toFixed(1); //123.0 bez bledu (zakomentowane, bo vsc zmienia na (123).toFixed(1);)

//metoda toString() - jawna konwersja na stringa
const score2 = 25;
score2.toString(); //"25"
score2.toString(2); //"11001" - zamiana na stringa w systemie binarnym
score2.toString(5); //"40" - zamiana na stringa w systemie piatkowym
score2.toString(8); //"31" - zamiana na stringa w systemie osemkowym
score2.toString(16); //"19" - zamiana na stringa w systemie szesnastkowym

//metoda toExponential() - zapis w notacji naukowej - UWAGA - zwraca stringa, nie liczbe!
const score3 = 123456;
score3.toExponential(); //"1.23456e+5"
score3.toExponential(1); //"1.2e+5"
score3.toExponential(2); //"1.23e+5"
score3.toExponential(3); //"1.235e+5"
//itd

// FUNKCJE, które pozwalaja zrobic rozne zadania z liczbami (nie sa metodami, tylko funkcjami)
const score6 = 25.5;
//sprawdzenie czy jest liczba calkowita
Number.isInteger(123); //true
Number.isInteger(123.0); //true
Number.isInteger(123.1); //false
Number.isInteger(score6); //false
Number.isInteger("tekst"); //false

//sprawdzenie czy liczba jest NaN
Number.isNaN(123); //false
Number.isNaN(123.0); //false
Number.isNaN(123.1); //false
Number.isNaN(score6); //false
Number.isNaN("tekst"); //false
Number.isNaN(NaN); //true

//sprawdzenie czy liczba jest skonczona
Number.isFinite(123); //true
Number.isFinite(123.0); //true
Number.isFinite(123.1); //true
Number.isFinite(score6); //true
Number.isFinite("tekst"); //false
Number.isFinite(NaN); //false
Number.isFinite(Infinity); //false

//Infinity - nieskonczonosc, gdy dzielimy przez 0 i gdy przekroczymy zakres liczb min i max
// rodzaj błędu, nie jest to liczba, ale typ number
// min  = -1e308 i max = 1e308

//NaN - not a number, np gdy liczbę pomnożymy przez stringa lub 0 dzielimy przez 0
// UWAGA - typeof NaN zwraca number

//tworzenie obiektu instancji Number
const score7 = new Number(); //bez podania wartosci da 0
const score8 = new Number(123); //123
const score9 = new Number(123.45); //123.45
const score10 = new Number("coś"); //NaN

//Konwersja jawna na typ number
Number("123"); //123
Number("123.45"); //123.45
Number("123.45abc"); //NaN
Number("tekst"); //NaN
Number(true); //1
Number(false); //0
Number(null); //0
Number(undefined); //NaN
Number(Infinity); //Infinity
Number(-Infinity); //-Infinity
Number(NaN); //NaN
Number(""); //0

//Konwersja niejawna na typ number
+"123"; //123
"123" * 1; //123
"123" / 1; //123
"123" - 0; //123
"123" + 0; //"1230"
"123" - ""; //123
"123" * ""; //0
"123" / ""; //Infinity
"123" + ""; //"123"

// ParseInt - konwersja na liczbe calkowita
//Najpierw sprawdza czy jest liczba calkowita, jesli nie to zwraca NaN
//drugi argument to system liczbowy, domyslnie 10
parseInt("123", 10); //123
parseInt("123.45", 10); //123
parseInt("123.45abc", 10); //123
parseInt("tekst", 10); //NaN
parseInt(true, 10); //NaN
parseInt(false, 10); //NaN
parseInt(null, 10); //NaN
parseInt(undefined, 10); //NaN
parseInt(Infinity, 10); //NaN
parseInt(-Infinity, 10); //NaN
parseInt(NaN, 10); //NaN
parseInt("", 10); //NaN
parseInt("200") + parseInt("3"); //203

//ParseFloat - konwersja na liczbe zmiennoprzecinkowa
//Najpierw sprawdza czy jest liczba zmiennoprzecinkowa, jesli nie to zwraca NaN
parseFloat("123"); //123
parseFloat("123.45"); //123.45
parseFloat("123.45abc"); //123.45
parseFloat("tekst"); //NaN
parseFloat(true); //NaN
parseFloat(false); //NaN
parseFloat(null); //NaN
parseFloat(undefined); //NaN
parseFloat(Infinity); //Infinity
parseFloat(-Infinity); //-Infinity
parseFloat(NaN); //NaN
parseFloat(""); //NaN

//Math - obiekt, który zawiera metody matematyczne
Math.round(123.15); //123   - ucina czesc dziesietna
Math.round(123.55); //124   - zaokragla w gore
Math.floor(123.55); //123   - ucina czesc dziesietna
Math.ceil(123.15); //124    - zaokragla w gore
Math.ceil(123.55); //124    - zaokragla w gore
Math.trunc(123.55); //123   - ucina czesc dziesietna
Math.trunc(123.15); //123   - ucina czesc dziesietna
Math.trunc(-123.55); //-123 - ucina czesc dziesietna
Math.trunc(-123.15); //-123 - ucina czesc dziesietna

//Ciekawostki
undefined + NaN; //NaN
null + NaN; //NaN
Infinity + NaN; //NaN
-Infinity + NaN; //NaN
NaN + NaN; //NaN
undefined + undefined; //NaN
null + null; //0
Infinity + Infinity; //Infinity
-Infinity + Infinity; //NaN
-Infinity + -Infinity; //-Infinity
-Infinity + Infinity; //NaN
-Infinity + null; //-Infinity
-Infinity + undefined; //NaN
-Infinity + NaN; //NaN
-Infinity + 123; //-Infinity
-Infinity + 123.45; //-Infinity
-Infinity + "123"; //-Infinity
-Infinity + "123.45"; //-Infinity
-Infinity + true; //-Infinity
-Infinity + false; //-Infinity
-Infinity + NaN; //NaN
-Infinity + Infinity; //NaN
-Infinity + -Infinity; //-Infinity
-Infinity + -123; //-Infinity
-Infinity + -123.45; //-Infinity
-Infinity + "-123"; //-Infinity
0 + null; //0
0 + undefined; //NaN
0 + NaN; //NaN
0 + Infinity; //Infinity
0 + -Infinity; //-Infinity
