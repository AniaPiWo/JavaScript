const button = document.querySelector("button");
const text = document.querySelector(".text");

const names = [
  "Karol",
  "Mateusz",
  "Michał",
  "Kamil",
  "Maciej",
  "Jan",
  "Paweł",
  "Adam",
  "Tomasz",
  "Jakub",
  "Marek",
  "Łukasz",
  "Marcin",
  "Piotr",
  "Robert",
  "Wojciech",
  "Krzysztof",
  "Sebastian",
  "Grzegorz",
  "Patryk",
  "Andrzej",
  "Oskar",
  "Igor",
  "Filip",
  "Szymon",
  "Damian",
  "Rafał",
  "Daniel",
  "Bartosz",
  "Stanisław",
  "Mariusz",
  "Anna",
  "Maria",
  "Katarzyna",
  "Agnieszka",
  "Barbara",
  "Ewa",
  "Małgorzata",
  "Magdalena",
  "Natalia",
  "Aleksandra",
  "Monika",
  "Karolina",
  "Dorota",
  "Zuzanna",
  "Jadwiga",
  "Weronika",
  "Marta",
  "Klaudia",
  "Izabela",
  "Joanna",
  "Beata",
  "Aneta",
  "Julia",
  "Paulina",
  "Kamila",
  "Olga",
  "Elena",
  "Kasia",
  "Justyna",
  "Kinga",
  "Oliwia",
];

const nameGenerator = () => {
  const index = Math.floor(Math.random() * names.length);
  console.log(Math.floor(Math.random() * names.length));
  text.textContent = `Wylosowane imię to: ${names[index]}`;
};

button.addEventListener("click", () => {
  nameGenerator();
});
