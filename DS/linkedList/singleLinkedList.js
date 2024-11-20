class Node{
    constructor(val){
        this.val = val 
        this.next= null
    }
}

class singleLinkedList{
    constructor(){
        this.head = null
        this.tail = null 
        this.lenght = 0 
    }
    push(val){
        var newNode = new Node(val)
        if(!this.head){
            this.head = newNode 
            this.tail = this.head
        }
        else{
            this.tail.next = newNode
            this.tail = newNode
        }
        this.lenght++
        return 
    }
    traverse(){
        var current = this.head
        while(current){
            console.log(current.log)
            current = current.next
        }
    }
    pop(){
        if(!this.head){
            return undefined
        }
        var current = this.head
        var newTail = current
        while(current.next){
            newTail = current
            current = current.next
        }
        this.tail = newTail 
        this.tail.next = null
        this.length--
        if(this.length == 0){
            this.head = null
            this.tail = null
        } 
        return current
    }
}


var list = new singleLinkedList()
list.push("hiii")
list.push("there")
console.log(list)
list.traverse()
