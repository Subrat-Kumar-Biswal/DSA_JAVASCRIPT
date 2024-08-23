class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class Linkedlist{
    constructor(){
        this.head = null;
    }

    pallindrom(data){
        let current = this.head;
        let string=""
        let string1 = "";
        while(current !== null){
            string = `${string}${node.val}`
            string1 = `${node.val}${string1}`
            node = node.next;
        }
        return stringuu===string1

    }
}

const list = new Linkedlist([1, 2, 2,1]);
list.pallindrom()