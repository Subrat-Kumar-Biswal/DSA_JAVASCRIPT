// let x = prompt("enter the value of n ")

function fact(x){
    if(x == 0){
        return 1
    }
    return x * fact(x-1)
}

console.log(`factorail of a number is :- ${fact(5)}`)