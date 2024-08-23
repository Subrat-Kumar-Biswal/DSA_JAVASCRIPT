const selectionSort = (arr) => {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        let minEl = i;
        for(let j = i+1;j<n;j++){
            if(arr[j] < arr[minEl]){
                minEl = j;
            }
        }
        [arr[i],arr[minEl]]  = [arr[minEl],arr[i]]
    }
    return arr;
}

console.log(selectionSort([20, 12, 53, 3]))