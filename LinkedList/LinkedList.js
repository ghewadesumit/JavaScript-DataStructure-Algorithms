class Node{
    constructor(data){
        this.data= data;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
    }

    addEndOfList(nodeValue){
        let newNode = new Node(nodeValue);

        let current = this.head;

        if(current){
            while(current.next){
                    current = current.next;
            }
            current.next = newNode;
        }
        else{
            this.head = newNode;
        }
    }

    display(){
        let current = this.head;

        while(current){
            console.log('Current node is ',current.data);
            current = current.next;
        }
    }
}


let obj = new LinkedList();
obj.addEndOfList(1);
obj.addEndOfList(2);
obj.addEndOfList(3);
obj.addEndOfList(4);

obj.display()

