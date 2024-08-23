class Node{
    constructor (data) {
        this.data = data
        this.next = null
    }
}

class Linkedlist{
    constructor(){
        this.head = null;
    }

    addFirst(data){
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }


    addLast(data){
        const newNode = new Node(data)
        if(!this.head){
            this.head = newNode;
            return;
        }

        let current = this.head;
        while(current.next){
            current = current.next;
        }
        current.next = newNode;
    }

    addAt(index, value){
        
    }


    print(){
        let current = this.head
        while(current){
            console.log(current.data);
            current = current.next;
        }
    }

}


const li = new Linkedlist();
li.addFirst(10)
li.addLast(20)
li.addLast(30)
li.addFirst(100)

// Linkedlist.addFirst(450)
// Linkedlist.addFirst(4507)

li.print()
