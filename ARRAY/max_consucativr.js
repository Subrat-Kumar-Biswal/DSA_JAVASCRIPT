function max(arr) {
    let count = 0;
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] != 0){
            count++;
            // console.log(count);
            max = Math.max(max, count);
            // console.log(max);
        }else{
            count === 0;
        }
    }
    return max;    
      
}

console.log(max([1,1,0,1,1,1]));