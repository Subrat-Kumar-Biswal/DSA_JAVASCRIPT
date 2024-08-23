// function rev_array(arr){
//     arr.reverse()
//     console.log(arr);
// }

// let arr = [3,5,6]
// rev_array(arr)

function revArr(arr, start, end){
    var temp ;
    if(start<=end ){
        temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
    }
    revArr(arr, start+1, end - 1)
    console.log(arr)
}
let arr1 = [12, 32, 5, 52]
revArr(arr1, arr1[0], arr.length - 1)