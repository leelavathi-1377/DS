const paranthesisChecker = (exp) => {
    const openingBrackets = "([{"
    const closedBrackets = ")]}"
    let stack = []
    for(let char of exp){
        if(openingBrackets.includes(char)){
            stack.push(char)
        }else if(closedBrackets.includes(char)){
            const lastOpenedIndex = stack.pop()
            if(openingBrackets.indexOf(lastOpenedIndex) !== closedBrackets.indexOf(char)){
                return false
            }
        }
    }
    return stack.length === 0
}


const expression = "([{}])"
console.log(paranthesisChecker(expression))