let arr = "as adfasdf qer rqwerq  rqwa"
function largestNum(arr){
   let res =  arr.split(" ")
    let max = res[0]
    for(let i =0; i<res.length; i++){
        if(max.length < res[i].length){
            max = res[i]
        }
    }
    return max
}
console.log(largestNum(arr))
