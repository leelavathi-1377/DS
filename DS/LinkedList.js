class LinkedList{
    constructor(head = null){
        this.head = head 
    }
}

class Node{
    constructor(data){
        this.data = data;
        this.next = null
    }
}

const appendNode = (newNode) => {
    let node = this.head;
    if(node === null){
        this.head = newNode;
        return;
    }
    while(node.next){
        node = node.next
    }
    node.next = newNode;
}


const linkedList = new LinkedList();
const node =  new Node(5);
const a = new Node('a');
const b = new Node('b');
const c = new Node('c');

a.next = b;
b.next = c;


// const printLinkedList = (head) =>{
//     let current = head;
//     while(current !== null){
//         console.log(current.data)
//         current = current.next;
//     }
// }


// recursive mode

// const printLinkedList = (current) =>{
//     if(current === null) return 
//     console.log(current.val)
//     printLinkedList(current.next);
// }
// linkedList.appendNode(node);
printLinkedList(a);
console.log(linkedList);


//time complexity : ---O(n)
//spcae complexity : ---O(n)
//where n is the number of nodes




