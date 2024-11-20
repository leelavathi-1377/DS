const expression = "258*+8-"

const postPreFix = (expression) => {
    let stack = []
    for(let i = 0 ; i < expression.length ; i++){
        let c = expression[i]
        if(!isNaN(c)){
            stack.push(c)
        }
        else{
            let val1 = stack.pop()
            let val2 = stack.pop()
            if(val1 == "Underflow" || val2 == "Underflow"){
                return `Cant perform postfix operation`
            }
            switch(c){
                case '+':
                    stack.push(val1 + val2)
                    break
                case '-':
                    stack.push(val1 - val2)
                    break
                case '*':
                    stack.push(val1 * val2)
                    break
                case '/':
                    stack.push(val1 / val2)
            }

        }
    }
    return stack.pop()

}

console.log(postPreFix(expression))




