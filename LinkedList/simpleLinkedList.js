class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
// creating nodes
let a = new Node(1);
let b = new Node(2);
let c = new Node(3);

// linking nodes
a.next = b;
b.next = c;

// assigning head to variable, inorder to traverse the list
let current =  a;
while(current){
    console.log('current node value is',current.data);
    current = current.next;
}



