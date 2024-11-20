const str = "hello"

const nonRepeatedCharacters = (str) => {
    let obj = {}
    for(let i = 0 ; i< str.length ; i++){
        !obj[str[i]] ? obj[str[i]] = 1: obj[str]++
    }
    console.log(obj)
    for(let char in obj){
        if(obj[char] > 1){
            return char
        }
    }
    return "$"
}

console.log(nonRepeatedCharacters(str))