//SCOPE - zakres widoczności zmiennych
//mowi gdzie dana zmienna jest dostepna i gdzie mozna ja wykorzystac

//GLOBAL SCOPE - zmienna jest dostepna WSZEDZIE w programie (pliku)
// poza blokami i funkcjami
// przestrzen najwyzszego rzedu

console.log(userName); //undefined
//console.log(age);//error
//console.log(height);//error

var userName = "Ania";
const age = 20;
let height = 170;

console.log(userName);
console.log(age);
console.log(height);

const showName = function () {
  //userName = "Tomek"; //
  //const userName = "Tomek"; //zmienna lokalna "Tomek"
  console.log("SHOW NAME =>", userName);
};

showName();
