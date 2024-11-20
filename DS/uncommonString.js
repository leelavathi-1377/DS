const str1 = "geekforgeeks"
const str2 = "geekgeeksquizs"

const findCommonStrings = (str1, str2) => {
    const setA = new Set(str1)
    const setB = new Set(str2)

    const unCommonSet = new Set([...str1 , ...str2].filter(char => !(setA.has(char) && setB.has(char))));

    const unCommonCharacters = Array.from(unCommonSet).sort().join('')
    if(unCommonCharacters.length){
        return unCommonCharacters
    }else{
        return -1
    }
}

console.log(findCommonStrings(str1, str2))


