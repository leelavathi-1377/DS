//at front 


class Node  {
    constructor(data, next = null){
        this.data = data;
        this.next = next
    }
}

class LinkedList {
    constructor(){
        this.head = null
        this.size = 0
    }

    insertFirst(data){
        this.head = new Node(data , this.head)
    }
}

const insertNode = (new_data) => {
    let new_data = new Node(new_data)
    new_data.next = head
    head = new_node
}
