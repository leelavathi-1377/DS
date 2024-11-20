const arr = [4, 7, 3, 4, 8, 1]

class Stack{
    constructor(maxSize = 5){
        this.maxSize = maxSize
        this.top = -1
        this.items = []
    }

    push(ele){
        if(this.items.length === this.maxSize){
            return "Overflow"
        }
        else{
            this.top++
            this.items[this.top] = ele
        }
    }

    pop(){
        if(this.top === -1){
            return "Underflow"
        }else{
            const poppedItem = this.items[this.top]
            delete this.items[this.top]
            this.top--
            return poppedItem
        }
    }

    peek(){
        if(this.top === -1){
            return "Underflow"
        }else{
            const poppedItem = this.items[this.top]
            return poppedItem
        }
    }

    isEmpty(){
        return this.top === -1
    }
}

const findNextGreaterElement = (arr) =>{

    const result = []
    const s = new Stack() 
    for(let i = arr.length - 1; i >= 0 ; i--){
        if(!s.isEmpty()){
            while(!s.isEmpty() && s.peek() <= arr[i]){
                s.pop()
            }
        }
        if(s.isEmpty()){
            result[i] = -1
        }
        else{
            result[i] = s.peek()
        }
        s.push(arr[i])
    }
    return result

}



console.log(findNextGreaterElement(arr))