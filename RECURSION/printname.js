

// function numPrint(a, n){
//     if(a<=n){
//         console.log(`chandan ${a}`);
//     }else return;
//     numPrint(a+1, n)
     
// }

// numPrint(1, 6)

function numPrint(a, n){
    if(a>n){
        return;
    }else{
        console.log("hji")
    numPrint(a+1, n)
    }
     
}

numPrint(1, 6)