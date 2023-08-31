//DOM - Document Object Model
//nods - elementy html (tagi)

//Pobieranie elementów z DOM

//img na stronie
console.log(document.images); //pseudotablica HTMLCollection(2) [img, img]
const imgs = Array.from(document.images);
const imgs2 = [...document.images];
console.log(imgs);

//Metody pobierajace jeden element
const header = document.querySelector("header");
console.log(header.outerText);
document.querySelector("li:nth-child(2)");
document.getElementById("idek");
document.getElementsByClassName("list-item");
document.getElementsByTagName("li");
document.getElementsByName("list-item");
document.querySelector("li");

//Metody pobierajace wiele elementów
document.querySelectorAll("li");
document.getElementsByTagName("li");
document.getElementsByClassName("list-item");

const liList = document.querySelectorAll("li");
const liArray = Array.from(liList);
const liArray2 = [...liList];
console.log(liArray, liArray2);

const liList2 = [...document.getElementsByTagName("li")];
const liArray3 = Array.from(liList2);
const liArray4 = [...liList2];
console.log(liArray3, liArray4);

const h2 = document.querySelector("h2");
//console.log(h2.getAttribute("class"));
//console.log(h2.getAttribute("id")); //null

//MODYFIKACJA ELEMENTÓW
const firstLi = document.querySelector("li:nth-child(1)");
firstLi.textContent = "Pierwszy element listy";
firstLi.style.color = "hotpink";
firstLi.style.fontSize = "30px";
firstLi.style.fontWeight = "bold";
firstLi.style.textDecoration = "underline";
firstLi.style.textTransform = "uppercase";
firstLi.style.listStyle = "none";
firstLi.style.backgroundColor = "grey";
firstLi.classList.add("active");
firstLi.classList.remove("active");
firstLi.classList.toggle("active");
firstLi.className = "active test";
firstLi.setAttribute("class", "test"); //nadpisuje wszystkie klasy!

//dodanie klasy petla i forEach
/* for (let i = 0; liList.length; i++) {
  liList[i].style.color = "hotpink";
} */
/* 
liList.forEach(
  (li) => ((li.style.color = "hotpink"), li.classList.add("pink"))
);

liList2.forEach(
  (li) => ((li.style.color = "hotpink"), li.classList.add("pink"))
); */

//addEventListener  - dodanie eventu
const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  console.log("click");
  header.textContent = "kliknieto mnie";
  header.style.color = "hotpink";
});

window.addEventListener("dblclick", () => {
  console.log("dbl cilck");
});

const text = document.querySelector(".text");
console.log(text);
text.addEventListener("click", () => {
  console.log("click");
  text.textContent += " 💜 ";
  text.classList.toggle("pink");
});

//wiele elementow
const items = document.querySelectorAll("li");
console.log(items);

const addClassPink = (e) => {
  e.target.classList.toggle("pink");
};

items.forEach((item) => {
  item.addEventListener("click", addClassPink);
});

//dodawanie elementów na stronie za pomocą JS
const newLi = document.createElement("li");
newLi.textContent = "nowy element";
newLi.classList.add("pink");
document.querySelector("ul").appendChild(newLi);
