// approach 1;

// function numPrint(a, n){
//     if(a<=n){
//         console.log(a);
//     }else return;
//     numPrint(a+1, n)
     
// }

// numPrint(1, 6)

//approah 2

// function numPrint(a, n){
//     if(a>n){
//         return;
//     }else{
//         console.log(a)
//     numPrint(a+1, n)
//     }
     
// }

// numPrint(1, 6)



// Reverse number

function numPrint(a, n){
    if(n>=a){
        console.log(n);
    }else return ;
    
    numPrint(a, n-1)
     
}

numPrint(1, 6)