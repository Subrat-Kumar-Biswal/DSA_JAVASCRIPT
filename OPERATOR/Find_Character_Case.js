const findCharacter = function(c){
    if(c >= 'a' && c <= 'z' ){
        console.log(0);
    }else if(c >= 'A' && c <= 'Z'){
        console.log(1);
    }else{
        console.log(-1);
    }
}

findCharacter('q')
findCharacter('S')
findCharacter('#')