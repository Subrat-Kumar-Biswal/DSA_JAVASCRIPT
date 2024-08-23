let arr = [32, 43, 5, 2, 55, 54, 56, 89, 8];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 != 0) {
    console.log(arr[i]);
  }
}


// filter method
let odd = arr.filter((e) => e % 2 != 0);
console.log(odd);
