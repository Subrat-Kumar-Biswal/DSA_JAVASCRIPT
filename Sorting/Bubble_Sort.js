let arr = [2,0,2,1,1,0]


const BubbleSort = (arr) =>{
    let n = arr.length;
    for(let i = 0; i<n; i++){
        for(let j = 0; j< n-i-1; j++){
            if(arr[j] > arr[j + 1]){
               let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                // arr[j]  = arr[j + 1];
                // arr[j+1] = arr[j];

                // [arr[j],arr[j+1]] = [arr[j+1], arr[j]]
            }
        }
    }
    return arr
};

console.log(BubbleSort(arr))