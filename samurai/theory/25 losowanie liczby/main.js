Math.random() * 7; // 0 - 6.999999999999999
Math.floor(Math.random() * 7); // 0 - 6
Math.floor(Math.random() * 7) + 1; // 1 - 7

const randomNumber = (min, max) => {
  return Math.random() * (max - min) + min;
};

const randomNumberInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

console.log(randomNumber(1, 10)); // 1 - 9.999999999999999
console.log(randomNumberInt(1, 10)); // 1 - 10
