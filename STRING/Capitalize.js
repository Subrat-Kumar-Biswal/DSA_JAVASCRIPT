let x = "I love programming"
console.log(x.split(0,5)+"...");

let t = x.split(" ")

for(let i of t ){
//   let j = i.charAt(0).toUpperCase();
//   let s = i.substr(1)
//     // console.log(s);
//     let n = j.concat(s)
//     console.log(n);
    console.log(i[0].toUpperCase() +
        i.slice(1))
}


let s = "hello";

function sm(s,n){
    let x = s.substr(0, n)
    return x+"...."
}
console.log(sm(s,5));


function rev(s){
    if(s === ""){
        return ""
    }else{
    return rev(s.substr(1)+s.charAt(0))
    }
}
console.log(rev(s))