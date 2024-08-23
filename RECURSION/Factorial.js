// let x = prompt("enter the value of n ")

function fact1(x){
    if(x == 0){
        return 1
    }
    return x * fact1(x-1)
}

console.log(`factorail of a number is :- ${fact1(5)}`)