class Stack{
    constructor(maxSize = 10){
        this.items = []
        this.maxSize = maxSize
        this.top = -1
    }

    isEmpty(){
        return this.items.length === 0
    }

    push(element){
        if(this.top > this.items.length - 1){
            return "Overflow"
        }
        this.top++
        this.items[this.top] = element
    }

    pop(){
        if(this.top === -1){
            return "Underflow"
        }
        const poppedItem = this.items[this.top]
        delete this.items[this.top]
        this.top--
        return poppedItem
    }

    peek(){
        if(this.top === -1){
            return "Underflow"
        }
        const poppedItem = this.items[this.top]
        return poppedItem
    }

    isFull(){
        if(this.items.length === this.maxSize){
            return true
        }
    }

    print(){
        for(let i = 0 ;i < this.items.length ; i++ ){
            console.log(this.items[i])
        }
    }

}

const s = new Stack()

s.push('1')
s.push('2')
s.push('3')

console.log(s)

s.pop()

s.push('4')

console.log(s)
s.peek()

s.isEmpty()

console.log(s)
s.isFull()


console.log(s)
