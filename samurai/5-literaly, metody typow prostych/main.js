//literał - zestaw znaków, który jest zapisany w kodzie programu i zostanie zinterpretowany przez interpreter jako wartość określonego typu
"tekst"; //literał string
55; //literał number
true; //literał boolean
null; //literał null
undefined; //literał undefined
{
} //literał obiektu
[]; //literał tablicy

//TYPY PROSTE nie sa obiektami, jednak mozemy na nich wykonywac metody i właściwości, ktore sa domena obiektow
//właściwość - informacje o stanie (wartości), np długosc stringa, liczba elementów w tablicy
//metoda - dzialanie na wartosci, ktore najczesciej zwraca nowa wartosc, np zamiana stringa na duze litery, dodanie elementu do tablicy

//właciwosci - pobieramy wartosc, nie wywolujemy
const txt = "tekst";
txt.length; //długość stringa   5
txt[0]; //pierwszy znak stringa   "t"
txt[txt.length - 1]; //ostatni znak stringa   "t"
txt[txt.length]; //undefined (bo nie ma 5 znaku, tylko 0,1,2,3,4)

//metody nie dokonuja zmiany wartosci, tylko zwracaja nowa wartosc, trzeba je wywołać (), wbudowane w JS, mozna tez tworzyc wlasne
txt.toUpperCase(); //zamiana na duze litery   "TEKST"
txt.indexOf("e"); //indeks pierwszego wystapienia znaku "e"   1

const score = 20;
score.toString(); //zamiana na stringa   "20"
score.toString(2); //zamiana na stringa w systemie binarnym   "10100"
score.toString(16); //zamiana na stringa w systemie szesnastkowym   "14"
score.toString(8); //zamiana na stringa w systemie osemkowym   "24"
score.toString(5); //zamiana na stringa w systemie piatkowym   "40"

const score2 = 20.67;
score2.toFixed(); //zaokraglenie do liczby calkowitej   "21"
score2.toFixed(1); //zaokraglenie do 1 miejsca po przecinku   "20.7"
score2.toFixed(2); //zaokraglenie do 2 miejsca po przecinku   "20.67"
score2.toFixed(3); //zaokraglenie do 3 miejsca po przecinku   "20.670"
score2.toFixed(4); //zaokraglenie do 4 miejsca po przecinku   "20.6700"

//typ prosty nie ma wlasciwosci i metod, ale JS automatycznie tworzy obiekt opakowujacy typ prosty, ktory ma wlasciwosci i metody
// 1 - tworzymy zmienna i wartosc string
const txt2 = "tekst";
txt2.length; //5
// 2 - JS automatycznie tworzy obiekt opakowujacy typ prosty String
// 3 - wywolujemy wlasciwosc length na obiekcie String
// 4 - JS automatycznie usuwa obiekt String
// 5 - zwraca wartosc wlasciwosci length
// 6 - zmienna txt2 jest typu string, nie obiektu String
