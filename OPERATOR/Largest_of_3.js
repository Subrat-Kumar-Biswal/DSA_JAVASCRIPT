let x = -41;
let y = -85;
let z = 7;

function largest(x, y, z){
    if(x>y && x>z){
        return x;
    }else if(y>x && y>z){
        return y
    }else{
        return z
    }
}

console.log(largest(-4 ,0 ,5))

