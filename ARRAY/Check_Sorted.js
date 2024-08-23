const arr1 = [33, 39, 48, 56];
// let x = arr1.sort((a,b) => a-b); 
// console.log(x);
function Sorted (arr1){
for(let i = 0; i<arr1.length; i++){
    if(arr1[i] < arr1[i+1]){
      return true;
    }else{
        return false;
    }
 }
}

console.log(Sorted(arr1));