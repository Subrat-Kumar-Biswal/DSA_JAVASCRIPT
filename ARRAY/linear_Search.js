function linear(arr, k) {

    for(let i =0; i<arr.length;i++){
        if(arr[i] === k){
            return i;
        }
    }
    return -1;
}

console.log(linear([2,4,53,51,5], 50));