
function range(start, end){
    if(end <= start){
        return []
    }else{
    let numbers  = range(start, end - 1);
    numbers.push(end)
    return numbers
    }
}
// range(1, 5)
// range(1, 4)
// range(1, 3) 
// range(1, 2) = [0, 1]
// range(1, 1) = [0, ]
// range(1, 0) = []


console.log(range(0, 5))