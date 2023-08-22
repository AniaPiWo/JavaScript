//ARRAY
//obiekt wbudowany
//ma metody i wlasciwosci

//TWORZENIE TABLICY

//literał tablicy - najcześciej stosowany
const nameList = ["Ania", "Tomek", "Kasia"]; //["Ania", "Tomek", "Kasia"]

//literał pustej tablicy i uzupelnienie jej wartosciami
const nameList2 = []; //pusta tablica []
nameList2[0] = "Ania";
nameList2[1] = "Tomek";
nameList2[2] = "Kasia";

//konstruktor tablicy pusta tablica
const nameList3 = new Array(); //pusta tablica []

//konstruktor tablicy z wartosciami
const nameList4 = new Array("Ania", "Tomek", "Kasia"); //["Ania", "Tomek", "Kasia"]

//konstruktor tablicy z podaniem dlugosci
const nameList5 = new Array(3); //pusta tablica o dlugosci 3 [empty x 3]
