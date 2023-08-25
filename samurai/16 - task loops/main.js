/* Zadanie 1: Suma liczb parzystych
Napisz kod, który oblicza sumę wszystkich liczb parzystych od 1 do 100 (włącznie) korzystając z pętli for. Po obliczeniu sumy, wyświetl wynik w konsoli. */

let sum = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    sum += i;
  }
}
console.log("Suma liczb parzystych od 1 do 100 wynosi:", sum);

//Zadanie 2: Liczba gwiazdek
/* Napisz kod, który generuje i wyświetla w konsoli trójkąt prostokątny o wysokości "h" składający się z gwiazdek (*). Użyj pętli for do iteracji po kolejnych poziomach trójkąta, a następnie pętli for do generowania odpowiedniej liczby gwiazdek w każdym poziomie (wydrukuj w konsoli). Przyjmij wartość h równą 6. */
for (let i = 1; i <= 6; i++) {
  console.log("*".repeat(i));
}

let star = "";
for (let i = 1; i <= 6; i++) {
  star += "*";
  console.log(star);
}

const h = 5;
for (let i = 1; i <= h; i++) {
  let stars = "";

  for (let j = 1; j <= i; j++) {
    stars += "*";
  }

  console.log(stars);
}

//Zadanie 3: Licznik podzielnych przez 3
/* Napisz kod, który oblicza ilość liczb podzielnych przez 3 (nie zwracają reszty) w zakresie od 1 do 50 (włącznie) korzystając z pętli while. Po obliczeniu ilości liczb, wyświetl wynik w konsoli. */

let numbers = 0;
for (let i = 1; i <= 50; i++) {
  if (i % 3 === 0) {
    numbers += 1;
  }
}
console.log(numbers);

let counter = 0; //będzie zwiększany w pętli
let i = 1; //dla inicjalizacji pierwszej wartości, która wyniesie 1

while (i <= 50) {
  if (i % 3 === 0) {
    counter++;
  }
  i++;
}
console.log(
  "Ilość liczb podzielnych przez 3 w zakresie od 1 do 50 wynosi:",
  counter
);
