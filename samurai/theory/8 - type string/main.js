//literał tekstowy
const userName = "Janek";
const secondLetter = userName[1]; //a

//tworzenie instancji String
const objUserName = new String(userName);
const primitiveUserName = userName;

console.log(objUserName); //String {"Janek"}String 0:"J" 1: "a" 2:"n" 3:"e" 4:"k"
console.log(primitiveUserName); //Janek

//typ prosty
const emptyString = ""; //bez podania wartosci da pusty string

//obiekt bedacy instancja String
const emptyObjString = new String(); //bez podania wartosci da pusty string
const emptyObjString2 = new String(""); //bez podania wartosci da pusty string
const emptyObjString3 = new Object(""); //bez podania wartosci da pusty string
console.log(emptyObjString, emptyObjString2, emptyObjString3); //String {""}String {""}String {""}

const stringExample = new String("tekst");
const stringExample2 = new String(200);
console.log(stringExample, stringExample2); //String {"tekst"}String {"200"}

//METODY dla typu string - nie zmieniaja orginalnej wartosci, trzeba je przypisac do zmiennej
//WŁAŚCIWOŚCI dla typu string - nie wywolujemy, tylko pobieramy wartosc

userName.toUpperCase(); //JANEK
userName.toLowerCase(); //janek1

userName.length; //5 - dlugosc stringa, notacja kropkowa
userName["length"]; //5 - dlugosc stringa, notacja tablicowa

//pobieranie znaku na podstawie indeksu
userName.charAt(0); //J
userName[0]; //J

//pobieranie indeksu na podstawie znaku
userName.indexOf("a"); //1 - pierwsze wystapienie, jesli nie ma to -1
userName.indexOf("ne"); //2
userName.lastIndexOf("a"); //3 - to samo tylko od konca
userName.indexOf(" "); //-1 - nie ma spacji

//łączenie stringów
userName.concat(" Kowalski"); //Janek Kowalski
userName + " Kowalski"; //Janek Kowalski - konkatenacja
`${userName} Kowalski`; //Janek Kowalski - interpolacja - literał szablonowy

//czy dany znak znajduje sie w stringu - boolean
userName.includes("a"); //true
userName.includes("A"); //false - uwaga na wielkosc liter
userName.includes("f"); //false - nie ma takiego znaku
userName.includes("ne"); //true

//usuwanie bialych znakow na poczatku i koncu stringa
const exampleString = "   Janek Kowalski   ";
exampleString.trim(); //"Janek Kowalski"

//kopioawnie stringa tyle razy ile w argumencie, bez spacji
const repeatString = "Janek".repeat(3); //"JanekJanekJanek"

//wyciaganie fragmentu stringa
userName.slice(1); //"anek" - od indeksu 1 do konca
userName.slice(1, 3); //"an" - od indeksu 1 do 3 (bez 3)

//cudzysłów w stringu
const slash = "ktos\\cos"; //ktos\cos
const singleQuote = "ktos'cos"; //ktos'cos
const longText = "tekst \n tekst \n tekst"; //tekst - nowa linia

//konwersja innych typow na string
String(123); //"123"
String(123.45); //"123.45"
String(true); //"true"
String(false); //"false"
String(null); //"null"
String(undefined); //"undefined"
String(Infinity); //"Infinity"
String(-Infinity); //"-Infinity"
String(NaN); //"NaN"
String(""); //""
