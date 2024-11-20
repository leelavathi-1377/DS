const str = "Hi Leela How are u"
const vowels = "aeiou"
const getVowelsAndWords = (str , v) =>{
    let vowelsCount = str.match(/[aeiou]/gi).length
    let words = str.split(" ").length
    return {vowelsCount , words}
}

const {vowelsCount , words} = getVowelsAndWords(str , vowels)
console.log(vowelsCount , words)