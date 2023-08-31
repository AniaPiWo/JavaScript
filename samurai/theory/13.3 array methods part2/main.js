//SLICE - nie wpływa na tablicę, zwraca nową tablicę - metoda NIEDESTRUKCYJNA
const animals = ["dog", "cat", "canary", "parrot", "goldfish"];
const animalsSlice1 = animals.slice(1);
console.log(animalsSlice1);
const animalsSlice2 = animals.slice(2, 4);
console.log(animalsSlice2);
const animalsSlice3 = animals.slice(-2);
console.log(animalsSlice3);
const animalsSlice4 = animals.slice(-3, -1);
console.log(animalsSlice4);

//SPLICE - wpływa na tablicę, zwraca usunięte elementy - metoda DESTRUKCYJNA
const rareStones = ["diamond", "emerald", "ruby", "sapphire", "topaz"];
const rareStonesSplice1 = rareStones.splice(2);
console.log(rareStonesSplice1); //usunięte elementy - ruby, sapphire, topaz
console.log(rareStones); //pozostałe elementy - diamond, emerald

const planets = ["Mercury", "Venus", "Earth", "Mars"];
const planetsSplice1 = planets.splice(2, 3); //usuwa od indeksu 2 do 3, ale nie włącznie
console.log(planetsSplice1); //usunięte elementy - Earth, Mars
console.log(planets); //pozostałe elementy - Mercury, Venus

const newPlanets = planets.splice(1, 0, "Jupiter", "Saturn"); //dodaje elementy od indeksu 1, ale nie usuwa żadnego
console.log(newPlanets); //usunięte elementy - []
console.log(planets); //pozostałe elementy - Mercury, Jupiter, Saturn, Venus

const newPlanets2 = planets.splice(2, 1, "Uranus", "Neptune"); //dodaje elementy od indeksu 4, usuwa jeden element
console.log(newPlanets2); //usunięte elementy - Venus
console.log(planets); //pozostałe elementy
// splice(0) - usuwa wszystkie elementy z tablicy

//SORT - sortuje tablicę - metoda DESTRUKCYJNA
//slabo sie zachowuje przy sortowaniu liczb - sortuje po pierwszej cyfrze
const numbers = [6, 10230, 0, 200, 75];
const numbersSorted = numbers.sort();
console.log(numbersSorted);
console.log(numbers);

const cars = ["Ford", "Fiat", "BMW", "Audi"];
const carsSorted = cars.sort();
console.log(carsSorted);
console.log(cars);

//indexOf - zwraca indeks elementu lub -1 jeśli nie znajdzie
const users = ["Janek", "Wiola", "Mateusz", "Kamila"];
const indexOfUser = users.indexOf("Mateusz");
console.log(indexOfUser); //2
const indexOfUser2 = users.indexOf("Kamila");
console.log(indexOfUser2); //3
const indexOfUser3 = users.indexOf("Kamil");
console.log(indexOfUser3); //-1

//lastIndexOf - zwraca indeks elementu lub -1 jeśli nie znajdzie
const users2 = ["Janek", "Wiola", "Mateusz", "Kamila", "Mateusz"];
const indexOfUser4 = users2.lastIndexOf("Mateusz");
console.log(indexOfUser4); //4
const indexOfUser5 = users2.lastIndexOf("Kamila");
console.log(indexOfUser5); //3
const indexOfUser6 = users2.lastIndexOf("Kamil");
console.log(indexOfUser6); //-1

//includes - zwraca true lub false
users.includes("Mateusz"); //true
users.includes("Kamil"); //false

//JOIN - łączy elementy tablicy w string - metoda NIEDESTRUKCYJNA
const colors = ["red", "green", "blue"];
const colorsJoined = colors.join(); //domyślnie separator to przecinek
const colorsJoined2 = colors.join(" "); //separator to spacja
const colorsJoined3 = colors.join("-"); //separator to -
const colorsJoined4 = colors.join(""); //separator to pusty string
const colorsJoined5 = colors.join(" - nazwa koloru \n "); //separator to |
console.log(colorsJoined); //red,green,blue
console.log(colorsJoined5);
console.log(colors);

//SPLIT - dzieli string na tablicę - metoda NIEDESTRUKCYJNA
const colors3 = "red green blue";
const colorsSplited = colors3.split();
const colorsSplited2 = colors3.split(" ");
const colorsSplited3 = colors3.split(",");
const colorsSplited4 = colors3.split("", 2); //drugi argument to limit elementów
console.log("colors splitted ->", colorsSplited);
console.log("colors splitted with space ->", colorsSplited2);

//REVERSE - odwraca kolejność elementów w tablicy - metoda DESTRUKCYJNA
const colors2 = ["red", "green", "blue"];
const colorsReversed = colors2.reverse();
console.log(colorsReversed); //["blue", "green", "red"]
console.log(colors2); //["blue", "green", "red"]
