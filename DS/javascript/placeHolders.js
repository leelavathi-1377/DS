const placeHolders = (ele) => {
    let out = []
    for(let num of ele){
        let res = {}
        let placeHolderValue = 1
        while(num > 0){
            let digit = Math.floor(num % 10) 
            res[digit] = placeHolderValue * 1
            placeHolderValue *= 10
            num = Math.floor(num /10)
        }
        out.push(res)
    }
    return out
    
}

const num = [1234]
console.log(placeHolders(num))