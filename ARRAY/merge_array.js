let data = [10, 20, 30, 40, 50, 60, 70, 80];
let arr = [14, 20, 30, 47, 65, 85]
let mergeArray = [];

for(let i = 0; i< data.length; i++){
    mergeArray[i] = data[i]
}

for(let i = 0; i< arr.length ; i++){
    mergeArray[data.length + i] = arr[i]
}

console.log(mergeArray);


// data.push(arr)
// console.log(data);

const newarr= [...data, ...arr]     // spread operator
console.log(newarr);



// reverse array

let arr1 = [14, 20, 30, 47, 65, 85]

console.log(arr1.reverse())


arr1.sort((a,b) => b-a)
console.log(arr1);

//  Merge array by while loop


