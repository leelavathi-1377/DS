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

const matchBrackets = (str) => {

    const s = new Stack()
    for(let i = 0 ; i <= str.length - 1 ;i++){
        if(str[i] === '(' || str[i] === '{' || str[i] === '['){
            s.push(str[i])
        }
        else{
            if(s.isEmpty()){
                return false
            }else{
                const char = s.pop()
                if((char == '(' && str[i] == ')') ||
                    (char == '[' && str[i] == ']') ||
                    (char == '{' && str[i] == '}')){
                        continue
                }else{
                    return false
                }
            }
        }
    }
    return s.isEmpty()
}

const str = "{{}"


console.log(matchBrackets(str))