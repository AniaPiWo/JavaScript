// OPERATOR
//konstrukcja jezyka programowania, ktora wykonuje operacje na operandach (wartosciach argumentach) i zwraca jakas wartosc

//konkatenacja - dodawanie stringow
"2" + "2"; // "22"
2 + "2"; //"22"
2 + true; // 2+1 -> 3
2 + false; //2+0 -> 2
"2" + false; //"2false"
2 * "2"; //4

// operator moze byc znakiem, moze byc slowem (typeof, delete, new)

let result;
//Operator przypisania dwuargumentowy (binarny) - po jednym arg z jednej i drugiej strony operatora
result = 1;
//operator inkrementacji - dodaje 1 i ZWRACA
result++;

//OPERAROTY ARYTMETYCZNE
let position = 2;
//inkrementacja
position++; //zwraca 2, ale position = 3
//preinkrementacja
++position; //4  najpierw zwieksza, potem zwraca
//dekrementacja
position--; //4 zwraca 4, ale position = 3
//predekrementacja
--position; //2 najpierw zmniejsza, potem zwraca

//OPERATORY PRZYPISANIA
position += 2; //position = position + 2
position -= 2; //position = position - 2
position *= 2; //position = position * 2
position /= 2; //position = position / 2

//modulo - reszta z dzielenia
position %= 2; //position = position % 2

//potegowanie
2 ** 3; //8

//OPERATORY LOGICZNE
//porownanie (wieksze, mniejsze) true/false
2 > 3; //false
"tekst".length > 3; //true
20 <= 20; //true
"tekst".length >= 3; //true (bo 5 >= 3)
"2" == 2; //true    (bo nie sprawdza typu)
"2" === 2; //false      (bo sprawdza typ)

//różne od
100 != 100; //false (bo sa rowne)
100 !== 100; //false    (bo sa rowne i sa tego samego typu)
100 != "100"; //false   (bo sa rowne)
100 !== "100"; //true   (bo rozne typy)
100 != 10; //true       (bo rozne)
100 !== 10; //true      (bo rozne i rozne typy)

//negacja - logiczne zaprzeczenie, wykrzyknik zmienia na warość logiczną i odwraca
!"coś"; //false (bo negacja)
!!2; //true   (bo negacja negacji)
!!200; //true   (bo negacja negacji)

//suma logiczna - AND
true && true; //true    (bo oba są prawdziwe)
true && false; //false  (bo oba muszą być prawdziwe)
100 && 200; //200   (bo zwraca ostatnią prawdę)

//iloczyn logiczny - OR
true || true; //true    (bo oba są prawdziwe)
true || false; //true   (bo jeden jest prawdziwy)
false || false; //false (bo oba są fałszywe)
100 || 200; //100   (bo zwraca pierwszą prawdę)

//kolejnosc wykonywania operatorow
//1. nawiasy    ()
//2. potegowanie   **
//3. mnozenie, dzielenie, modulo   *, /, %
//4. dodawanie, odejmowanie    +, -
//5. porownanie   <, >, <=, >=, ==, !=, ===, !==
//6. suma logiczna   &&
//7. iloczyn logiczny    ||
//8. przypisanie   =, +=, -=, *=, /=, %=
//9. inkrementacja, dekrementacja   ++, --

//OPEARTOR WARUNKOWY (ternarny)
//warunek ? wartosc jesli prawda : wartosc jesli falsz
//zwraca wartosc w zaleznosci od warunku
2 > 3 ? "prawda" : "falsz"; //falsz
