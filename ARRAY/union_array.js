let arr1 = [1,2,3,4,5]  
let arr2 = [2,3,4,4,5]

let arr3 = arr1.concat(arr2);
console.log(arr3);

let set = new Set(arr3);
let set1 = Array.from(set)
console.log(set);
console.log(set1);
