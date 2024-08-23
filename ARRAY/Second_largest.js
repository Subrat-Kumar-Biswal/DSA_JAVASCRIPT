let arr4 = [14, 20, 30, 47, 65, 85]

const newarr = sortx(arr4);
console.log(newarr);
console.log("Second largest element is ", newarr[newarr.length - 2]);

function sortx(arr){
    let p = arr[0]
    if(arr.length <= 1){
        return arr
    }
    let left = []
    let right = []

    for(let i= 1; i<arr.length; i++){
        if(arr[i] < p){
            left.push(arr[i])
        }
        else{
            right.push(arr[i])
        }
    }
    return [...sortx(left), p, ...sortx(right)]
}
