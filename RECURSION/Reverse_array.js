let arr = [10, 20, 30, 40, 50, 60, 550, 80]

var temp;

function revArray(arr, start, end){
    if(start <= end){
   // console.log(data);
   temp = arr[start];
   arr[start] = arr[end];
   arr[end] = temp;
   revArray(arr, start+1, end -1)
  console.log(arr)
   }
}
revArray(arr, 0, arr.length-1)


