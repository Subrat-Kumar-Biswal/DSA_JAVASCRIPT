let arr = [10, 20, 30, 40, 50, 60, 70, 80];
// let item = prompt("enter a number form the array")
let item = 30;
let position ;
for (let i = 0; i < arr.length; i++) {
  if (item == arr[i]) {
    position = i;
    break;
  }
}
// console.log(position);
if (!position) {
 console.log("element not found");
}else{
    console.log("element position is " + position)
}
