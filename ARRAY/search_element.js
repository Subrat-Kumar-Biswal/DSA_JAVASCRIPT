// linear search 

let arr = [14, 20, 30, 47, 65, 85]
let search = 85;

for(let i = 0; i < arr.length; i++){
    if(arr[i] === search){
        console.log(`Element found at index ${i}`);
    }
}


console.log(arr.indexOf(search));