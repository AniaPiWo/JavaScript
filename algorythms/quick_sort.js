const elements = [];

for (let i = 0; i < 500; i++) {
  const randomNumber = Math.floor(Math.random() * 10000);
  elements.push(randomNumber);
}

let counter = 0;

const swap = (arr, first, second) => {
  const temp = arr[first];
  arr[first] = arr[second];
  arr[second] = temp;
};

const quicksort = (arr, low, high) => {
  if (low < high) {
    const pivotIndex = partition(arr, low, high);
    quicksort(arr, low, pivotIndex - 1);
    quicksort(arr, pivotIndex + 1, high);
  }
};

const partition = (arr, low, high) => {
  const pivotValue = arr[high]; //pierwsze wywolanie ustali jako pivota ostatni element
  let j = low;
  counter++;
  console.log(`func partition => ${counter}`);
  for (let i = low; i < high; i++) {
    if (arr[i] < pivotValue) {
      swap(arr, j, i);
      j++;
    }
  }
  swap(arr, j, high);
  return j;
};

quicksort(elements, 0, elements.length - 1);
console.log(elements);
