console.log(window);
console.log(window.document);
console.log(document);

window.console.log("test");
console.log(window.innerHeight);
console.log(document.title);
console.log(document.URL);
console.log(document.domain);
console.log(document.head);
console.log(window.location);

window.setTimeout(() => {
  console.log("mineło 3 sek");
}, 3000);

const showTime = () => {
  time += 5;
  console.log(`Jestes tu od ${time} sekund`);
  setTimeout(showTime, 5000);
};
let time = 0;
setTimeout(showTime, 5000);

let timer = 0;
window.setInterval(() => {
  ++timer;
  console.log(`Timer: ${timer} sek`);
}, 1000);
