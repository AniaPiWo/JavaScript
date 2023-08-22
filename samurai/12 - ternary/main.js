//TERNARY OPERATOR
//warunek ? wartosc1 : wartosc2
//zwraca wartosc1 jesli warunek jest prawdziwy, jesli nie to wartosc2

const age = 18;
const isAdult =
  age >= 18 ? console.log("pełnoletni") : console.log("pełnoletni");

let gameResult = 0;
let killedMonsters = 10;
let score = killedMonsters > 10 ? 1 : 0;

const playerName = "Mieszko";
console.log(playerName ? `Witaj ${playerName}` : "Witaj nieznajomy");
