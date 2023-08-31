// OBIEKTY

//nieuporzadkowana lista danych w formie klucz:wartość
// jesli wartosc jest funkcja to nazywamy to metoda

//tworzenie obiektu

//1. operator new
const cat = new Object();
console.log("CAT => ", cat); //{}

//przypisuwanie wartosci
cat.name = "Mruczek";
cat.age = 3;
cat.color = "white";
cat.meow = function () {
  console.log("Meow!");
};
console.log("CAT => ", cat);
console.log(cat.name.length);
cat.meow();

//2. literał obiektowy
const dog = {
  name: "Azor",
  age: 5,
  color: "brown",
  bark: function () {
    console.log("Woof!");
  },
  drinking: function (water) {
    console.log(`${this.name} is drinking ${water}`);
  },
};
console.log("DOG => ", dog);
dog.bark();
dog.drinking("water");

//mozemy dynamicznie dodawac nowe wlasciwosci i zmieniac wartosci
dog.castration = true;
dog.name = "Burek";
dog.age = 6;
console.log("DOG => ", dog);
dog.drinking("water");

delete dog.castration;
console.log("DOG => ", dog);

const result = {
  value: 1,
};

function addOne() {
  result.value++;
  console.log(result.value);
}
addOne();

const counter = {
  score: 0,
  increment: function () {
    this.score++;
    console.log(this.score);
  },
};

counter.increment();
counter.increment();
counter.increment();
