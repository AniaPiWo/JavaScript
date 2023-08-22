//Tablice - metody - ZMIENIAJA ORYGINALNA TABLICE

const italianUsers = ["Giovanni", "Giacomo", "Luigi"];

//PUSH - dodaje element na koniec tablicy i zwraca jej długość
const popArrayLength = italianUsers.push("Gianmarco");
console.log(italianUsers);
console.log("Pop Array Lenght ->", popArrayLength);

//UNSHIFT - dodaje element na początek tablicy
const unshiftedArrayLength = italianUsers.unshift("Giuseppe");
console.log(italianUsers);
console.log("Unshifted Array Length ->", unshiftedArrayLength); //TEST -> 5

//POP - usuwa ostatni element z tablicy i zwraca go
const deletedUser = italianUsers.pop();
console.log(italianUsers);
console.log("DELETED USER ->", deletedUser); //USER  Gianmarco

//SHIFT - usuwa pierwszy element z tablicy
const firstUser = italianUsers.shift();
console.log(italianUsers);
console.log("FIRST USER ->", firstUser);

//CONCAT - łączy dwie tablice i daje nową tablicę
const spanishUsers = ["Antonio", "Juan", "Pedro"];
const allUsers = italianUsers.concat(spanishUsers);
console.log(allUsers);

//OPERATOR SPREAD - rozpakowuje tablice
const colors = ["red", "green", "blue"];
const newColors = ["black", "white", "yellow"];

const allColors = [...colors, ...newColors];
console.log(allColors);
