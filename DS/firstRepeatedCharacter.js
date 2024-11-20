const findFirstRepeatedCharacter = (str) => {
    let charCount = {}
    for(let i = 0 ; i < str.length ; i++){
        let char = str[i]
        if(charCount[char] !== undefined){
            return i
        }
        charCount[char] = i
    }
}

const str = "abcdefgchijklmnopqabcdefgh"
console.log(findFirstRepeatedCharacter(str))