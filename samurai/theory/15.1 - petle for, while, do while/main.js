// LOOP
// Pętla umożliwia nam wykonanie kodu wielokrotnie
// Pętla wykonuje się tak długo, jak długo spełniony jest warunek

//FOR
//for (inicjalizacja iteratora; warunek; zwiekszenie iteratora) {
//  kod do wykonania
//}

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

//WHILE
//while (warunek) {
//  kod do wykonania
//}

let i = 1;
while (i <= 1) {
  console.log(i);
  i++;
}

let money = 10;
let candies = 0;
while (money >= 1) {
  candies++;
  money--;
  console.log("Candies = ", candies, "Money = ", money);
}

let money2 = 50;
while (money2 >= 8) {
  console.log("Mam jeszcze " + money2 + " złotych. To pijemy piwerko!");
  money2 -= 8;
  if (money2 < 8) {
    console.log("Nie mam już kasy, już nie kupię piwerka 😬");
  }
}

let gasoline = 50;
let km = 0;
while (--gasoline) {
  km += 18;
  console.log(
    "Przejechaliśmy " + km + " km. Zostało nam " + gasoline + "l paliwa"
  );
  if (gasoline <= 0) {
    console.log("Nie mamy już paliwa, musimy zatrzymać się na stacji");
  }
}

//DO WHILE
//do { kod do wykonania } while (warunek);
//wykonuje się zawsze przynajmniej raz
let j = 1;
do {
  console.log(j);
  j++;
} while (j <= 10);
