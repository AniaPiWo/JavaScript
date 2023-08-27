//Zadanie 1: Obliczanie średniej

const calculateAverage = function (ages) {
  let sum = 0;
  for (let age of ages) {
    sum += age;
    console.log(sum);
  }
  let average = sum / ages.length;
  console.log("Sum:", sum);
  console.log("Average:", average);
  return average;
};
calculateAverage([1, 2, 3, 4, 5]);

//Zadanie 2: Filtracja liczb parzystych

const filterEvenNumbers = function (numbers) {
  let evenNumbers = [];
  for (let number of numbers) {
    if (number % 2 === 0) {
      evenNumbers.push(number);
    }
  }
  console.log("Even numbers:", evenNumbers);
  return evenNumbers;
};

const evenNums = filterEvenNumbers([1, 2, 3, 4, 5, 6]);
console.log("evenNums", evenNums);

//Zadanie 3: Liczba wystąpień elementu w tablicy

const countOccurrences = function (array, element) {
  let count = 0;
  for (let item of array) {
    if (item === element) {
      count++;
    }
  }
  console.log("Count:", count);
  return count;
};

countOccurrences(["apple", "banana", "apple", "orange", "banana"], "banana");
