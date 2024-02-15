const arr = [5,2,3,1,4]

//pierwsza iteracja [2,3,1,4,5]
//druga iteracja    [2,1,3,4,5]
//trzecia iteracja  [1,2,3,4,5]
//czwarta iteracja  [1,2,3,4,5]

let counter = 0 //wyjsciowo  16 porownan bo 4 do kwadratu (4 bo arr.length-1)

for (let j=0; j<arr.length-1; j++) {//odejmujemy jeden zeby nie przekroczyc zakresu
    for (let i=0; i<arr.length-1-j; i++) { //odejmujemy jeden zeby nie przekroczyc zakresu oraz zmniejszamy liczbe petli(bo po pierwszym przejsciu ostatnia cyfra bedzie juz na prawidlowym miejscu i nie trzeba jej sprawdzac itd zmiejszaona counter wyszukan do 10)
    counter++
        if (arr[i] > arr[i+1]) {
            //jesli warunek spelniony zamieniamy miejscami
            const temp = arr[i] 
            arr[i] = arr[i+1]
            arr[i+1] =temp
        }
    }   
}

console.log(arr) // [1,2,3,4,5]
console.log(arr.length)
console.log(counter)
