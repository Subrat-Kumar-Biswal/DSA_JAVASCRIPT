function selectoin(arr){
    for(let i=0; i<arr.length; i++){
        let min= i;
        for(let j= i+1; j<arr.length;j++){
            if(arr[j] < arr[min]){
                min=j;
            }
        }
        [arr[i],arr[min]]=[arr[min],arr[i]]
    }
    return arr
}

console.log(selectoin([5,41,52, 1, 9]));
