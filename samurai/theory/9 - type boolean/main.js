//boolean - wartość logiczna, true lub false

Boolean(123); //true
Boolean("coś"); //true
Boolean("cos", 2, false); //true (bo sprawdza tylko pierwszy argument
Boolean(-123); //true
Boolean(123.45); //true
Boolean({}); //true
Boolean([]); //true
Boolean(function () {}); //true
Boolean(true); //true
Boolean(new Date()); //true
Boolean(Infinity); //true
Boolean(-Infinity); //true

Boolean(0); //false
Boolean(-0); //false
Boolean(""); //false
Boolean(null); //false
Boolean(undefined); //false
Boolean(NaN); //false
Boolean(false); //false

//OPERATORY ZWRACAJĄCE WARTOŚĆ BOOLEAN
2 > 1; //true
2 >= 1; //true
2 < 1; //false
2 <= 1; //false
2 == 1; //false
2 != 1; //true
2 === 1; //false
2 !== 1; //true
"1" == 1; //true
"1" === 1; //false - bo inny typ
"1" == true; //true
"1" === true; //false - bo inny typ

//NEGAJA LOGICZNA
// ! - zamien na typ boolean lub odwroc jesli jest typem boolean
// !! - zamien na typ boolean i odwroc - prawdziwa wartosc
!true; //false
!false; //true

!!true; //true
!!false; //false

!0; //true
!1; //false
!!0; //false
!!1; //true

//LOGICZNE I - oba musza  byc prawdziwe zeby bylo true
// && - zwraca pierwsza falszywa wartosc lub ostatnia prawdziwa
true && true; //true    - bo oba są prawdziwe
true && false; //false  - bo zwraca pierwsza falszywa wartosc
false && true; //false  - bo zwraca pierwsza falszywa wartosc
false && false; //false - bo zwraca pierwsza falszywa wartosc
1 && 2; //2 (bo 2 jest prawdziwe)
1 && 0; //0     (bo 0 jest falszywe)
"string" && 2; //2  (bo 2 jest prawdziwe)
"string" && ""; //""    (bo "" jest falszywe)
"string" && "string2"; //"string2" (bo "string2" jest prawdziwe)
"string" && null; //null    (bo null jest falszywe)
"string" && undefined; //undefined    (bo undefined jest falszywe)
"string" && NaN; //NaN  (bo NaN jest falszywe)
true && "string"; //"string" (bo "string" jest prawdziwe)

//LOGICZNE LUB jeden z operandow musi byc prawdziwy zeby bylo true
// || - zwraca pierwsza prawdziwa wartosc lub ostatnia falszywa
const userConnections = "syn głownej księgowej";
const userExp = 0;
Boolean(userConnections) || Boolean(userExp); //true
