const vowelsList  = ['a' , 'e' , 'i' , 'o' , 'u']
const array = 'leela'

const countVowelsInList = (array , vowelsList) => {
    let count = 0
    for(let letter of array.toLowerCase()){
        console.log(letter)
        if(vowelsList.includes(letter)){
            count++
        }
    }
    return count
}


console.log(countVowelsInList(array , vowelsList))

