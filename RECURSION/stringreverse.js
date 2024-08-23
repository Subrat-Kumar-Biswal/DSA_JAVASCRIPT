function stringRev(str) {
    if(str === ""){
        return ""
    }else{
    return stringRev(str.substr(1)) + str.charAt(0);
    }
}
// stringRev("hello") => stringRev("ello") + h
// stringRev("ello") => stringRev("llo") + e
// stringRev("llo") => stringRev("lo") + l
// stringRev("lo") => stringRev("o") + l
// stringRev("o") => stringRev(" ") + o
// stringRev(" ") => " "


let x = stringRev("hello")
console.log(x)