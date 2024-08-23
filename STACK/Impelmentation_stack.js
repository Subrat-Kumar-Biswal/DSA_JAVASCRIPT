class Stack{
    constructor(){
        this.stack = [];
    }
    push(element){
        this.stack.push(element)
    }

    pop(){
        if(this.isEmpty){
            return "stack is empty"
        }
        return this.stack.pop()
    }

    isEmpty(){
        return this.size === 0;
    }

    peek(){
        if(this.isEmpty){
            return "stack is empty"
        }
        return this.stack [this.size]
    }

    size(){
        return this.stack.length;
    }
    print(){
        for(let i = 0; i<this.size;i++){
            console.log(stack[i]);
        }
        return stack
    }
}


const stack = new Stack();
stack.push(120)
stack.push(120)
stack.push(10)
stack.push(120)
stack.pop()



console.log(stack.print());