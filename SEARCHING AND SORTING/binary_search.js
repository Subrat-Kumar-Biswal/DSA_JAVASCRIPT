let arr = [10, 20, 30, 40, 50, 60, 70, 80];
let target = 50;
let start = 0;
let end = arr.length -1 ;

while(start <= end){
    let mid = Math.floor((start + end)/2);
    if(target === arr[mid]){
        console.log("element found at",mid);
        break;
    }else if(target > arr[mid]){
        start = mid + 1;
    }else{
        end = mid - 1;
    }
  
}
