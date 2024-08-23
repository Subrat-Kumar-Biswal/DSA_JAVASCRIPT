class Stack{
    item = [];
    currentSize;
    maxSize;
    constructor(size){
       this.maxSize = size;
       this.currentSize = this.item.length; 
    }
    push(newVal){
        if(this.currentSize >= this.maxSize){
            alert("stack is full");
        }else{
            this.item[this.currentSize] = newVal;
            this.currentSize++;
        }
    }

    pop(){
        if(this.currentSize > 0){
            this.currentSize--;
            this.item.length = this.currentSize;
        }else{
            alert("stack is already empty")
        }
    }

    display(){
        console.log(this.item);
    }
}

st1 = new Stack(3);
st1.push(7)
st1.display()
