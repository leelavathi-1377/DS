const str1 = 'listen'
const str2 = 'nstlil'

const isAnagram = (str1, str2) => {
    const sorted1 = str1.split('').sort().join('')
    const sorted2 = str2.split('').sort().join('')
    if(sorted1 !== sorted2){
        return false
    }
    let objA = {}
    let objB = {}
    for(let i = 0; i < sorted1.length ; i++){
        !objA[sorted1[i]] ? objA[sorted1[i]] = 1 : objA[sorted1[i]]++
        !objB[sorted2[i]] ? objB[sorted2[i]] = 1 : objB[sorted2[i]]++
    }
    for(let char in objA){
        if(objA[char] !== objB[char]){
            return false
        }
    }
    return true
}


console.log(isAnagram(str1 , str2));