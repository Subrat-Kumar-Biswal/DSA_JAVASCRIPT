let arr = [];
let currentSize = arr.length;
let max = 5;

function push(newVal){
    arr[currentSize] = newVal;
    currentSize++
    if(currentSize >= max){
        alert("Stack is full")
    }
}

function pop(){
    if(currentSize > 0){
        currentSize -= 1;
        arr.length = currentSize;
    }
}
push(10);
push(20);
push(30);
push(40);
push(50);
push(60);
console.log(arr);
pop()
pop()

console.log(arr);