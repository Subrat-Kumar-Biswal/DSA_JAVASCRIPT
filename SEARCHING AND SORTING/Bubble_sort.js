const Bubble = function (array){
    for(let i = array.length; i>0; i--){
        for(let j = 0; j<i; j++){
            if(array[j] > array[j+1]){
                [array[j],array[j+1]] = [array[j+1],array[j]]
            }
        }
    }
    return array;

}

console.log(Bubble([7, 5, 3, 1, 6, 4]))

// Time Complexity = O(N) * O(N) = O(N)^2