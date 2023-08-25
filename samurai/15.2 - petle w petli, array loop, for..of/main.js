//petla w petli
for (let i = 0; i < 3; i++) {
  console.log("💀 Zewnętrzna pętla nr " + i);
  for (let j = 0; j < 5; j++) {
    console.log("💜Wewnętrzna pętla nr " + j);
  }
}

//petla na tablicy
const userAge = [18, 12, 15, 42, 55, 14, 21];

for (let i = 0; i < userAge.length; i++) {
  console.log(`👤 Wiek użytkownika ${i + 1} to ${userAge[i]}`);
}

const usersBirthYear = [1982, 1999, 2001, 1985, 1976, 2005, 1995];
const currentYear = 2023;
for (let i = 0; i < usersBirthYear.length; i++) {
  const userAge = currentYear - usersBirthYear[i];
  console.log(`🐕 Użytkownik ${i + 1} ma ${userAge} lat`);
}

//petla for..of plus instrukcja warunkowa

const guest = [
  "programista",
  "nauczyciel",
  "lekarz",
  "kierowca",
  "listonosz",
  "polityk",
  "emeryt",
];

for (let i = 0; i < guest.length; i++) {
  if (guest[i] === "polityk") {
    console.log("🍄 Nie wpuszczamy polityków, żegnamy!");
    continue;
  } else if (guest[i] === "programista") {
    console.log("🦖 Witamy kolege z branzy!");
    continue;
  }
  console.log("🐝 Zapraszamy " + guest[i]);
}

//for..of es6
const colors = ["red", "green", "blue", "yellow", "pink", "purple", "orange"];

for (const color of colors) {
  console.log(color);
}
