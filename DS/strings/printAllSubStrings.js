
const printAllSubStrings = (str) => {
    let count = 0 
    for(let i = 0 ; i < str.length ; i++){
        for(let j = i + 1 ; j < str.length   ;j++){
            count++
            console.log(str.substring(i, j+1))
        }
    }
    return count
}
const str = "101101"
console.log(printAllSubStrings(str))