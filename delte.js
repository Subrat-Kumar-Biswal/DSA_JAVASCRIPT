function DeleteEl(){

    let data = [10, 20, 30, 40, 50, 60, 70, 80];
    let position = 2;
    // position = parseInt(position);
    for(let i = position; i < data.length -1; i++){
        data[i] = data[i + 1];
    }

    console.log(data);
}

DeleteEl()