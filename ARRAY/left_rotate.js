let arr = [1, 2, 3, 4, 5];
let temp  = [];
function rotate1(arr){
    for (let i = 1; i <= arr.length; i++) {
         temp[i - 1] = arr[i];
    }
    temp[arr.length - 1] = arr[0]

    console.log(temp)
}
rotate1([1, 2, 3, 4, 5])





// Optimal solution
let rotate = function (arr) {
  let temp = arr[0];
  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr[arr.length - 1] = temp;
  console.log(arr);
};

rotate([1, 2, 3, 4, 5]);  // Time Complexity  = O(N) , Space(O(1))


