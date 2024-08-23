const largest = function(arr){
    let largest = arr[0];
    for(let i = 0; i < arr.length; i++ ){
        if(largest < arr[i+1]){
            largest = arr[i+1]
        }
    }
    console.log(largest); 
}
let arr = [4, 7, 8, 60, 70, 6]
largest(arr)