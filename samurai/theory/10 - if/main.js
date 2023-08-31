//INSTRUKCJA WARUNKOWA IF
//Instrukcja warunkowa if sprawdza czy warunek jest prawdziwy, jeśli tak to wykonuje kod wewnątrz bloku if, jeśli nie to kod wewnątrz bloku if jest pomijany.
const condition = 2;
if (condition) {
  console.log("Wykonałem się!");
}

const userName = "Benedykt";

if (userName !== "") {
  console.log("Witaj " + userName + "!");
}

//INSTRUKCJA WARUNKOWA IF ELSE
const hasTicket = true;
const moreThen15YearsOld = true;
const bossFamily = false;

if (hasTicket && moreThen15YearsOld) {
  console.log("Możesz wejść na pokład!");
} else {
  console.log("Nie możesz wejść na pokład!");
}

if ((hasTicket && moreThen15YearsOld) || bossFamily) {
  console.log("Możesz wejść na pokład!");
} else {
  console.log("Nie możesz wejść na pokład!");
}

//KLAUZULA ELSE IF
const age = 9;

if (age <= 9) {
  console.log("jestes bebikiem");
} else if (age > 9 && age <= 18) {
  console.log("jestes młodzikiem");
} else if (age > 18 && age <= 70) {
  console.log("jestes doroslym");
} else {
  console.log("jestes starym");
}

//ZAGNIEŻDŻONE INSTRUKCJE WARUNKOWE
const guestName = "";
const guestAge = 2;

if (guestName) {
  if (guestAge >= 18) {
    console.log("Witaj " + guestName + "!");
  } else {
    console.log("Nie możesz wejść na pokład!");
  }
} else {
  console.log("Podaj imię!");
}
