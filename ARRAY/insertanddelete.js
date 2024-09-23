function insert(arr, index, el){
    for(let i = index; i<arr.length; i++){
        arr[i] = el;
        break;
    }
    return arr
}

console.log(insert([10, 20, 30, 40, 50, 60], 5, 55));



// Function.prototype()