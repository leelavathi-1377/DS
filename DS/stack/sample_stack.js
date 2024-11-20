class Stack{
    constructor(){
        this.items = []
        this.count = 0
    }

    push(element){
        this.items[this.count] = element
        console.log(`${element} added to ${this.count}`)
        this.count++
        return this.count - 1
    }

    pop(){
        if(this.count === 0) {
            return undefined
        }
        let deleteItem = this.items[this.count-1]
        this.count--
        console.log(`${deleteItem} removed`)
        return deleteItem
    }

    peek(){
        console.log(`The top element is ${this.items[this.count - 1]}`)
        return this.items[this.count - 1]
    }

    isEmpty(){
        console.log(this.count === 0 ? `Stack is Empty` : `Stack is not empty`)
        return this.count === 0
    }

    size(){
        console.log(`${this.count} elements present in the stack`)
        return this.count
    }


    print(){
        let str = ''
        for(let i = 0 ; i < this.count ; i++){
            str = str + this.items[i] + ' ' 
        }
        return str
    }


    clear(){
        this.items = []
        this.count = 0
        console.log(`item cleared`)
        return this.items
    }
}

const stack = new Stack()


stack.push(100)
stack.push(200)

stack.pop()
stack.peek()

stack.isEmpty()
stack.size()
console.log(stack.print())
stack.clear()