class Node{
    constructor(data , next = null){
        this.data = data
        this.next = next
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0
    }

    insertFirst(data){
        this.head = new Node(data , this.head)
    }

    insertLast(data){
        let node = new Node(data)
        let current

        if(!this.head){
            this.head = node
        }
        else{
            current = this.head

            while(current.next){
                current = current.next
            }

            current.next = node
        }

    }

    printListData(){
        let current = this.head

        while(current){
            console.log(current.data)
            current = current.next
        }
    }
}

const li = new LinkedList()

li.insertFirst(100);
li.insertFirst(200);
// li.insertFirst(300);
// li.insertFirst(400);
console.log(li)

li.printListData()