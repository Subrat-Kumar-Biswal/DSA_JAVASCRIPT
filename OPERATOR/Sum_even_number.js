const even = function(x){
    let sum = 0;
    for (let i = 0; i <= x; i++) {
       if(i % 2== 0){
        sum+=i;
       }
    }
    return sum;
}

console.log(even(16)); 