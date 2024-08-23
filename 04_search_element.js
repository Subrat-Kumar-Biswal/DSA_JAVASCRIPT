let data = [10, 20, 30, 40, 50, 60, 70, 80];
let item = 66

for(let i = 0; i< data.length; i++){
    if(data[i] == item){
        console.log(`item ${item} was found at index ${i}`);
        break;
    }else{
        console.log("the element is not present in the array ");
        break;
    }
}
console.log(data);


// delete element in an array builltin function

data.splice(3,1)
console.log(data);