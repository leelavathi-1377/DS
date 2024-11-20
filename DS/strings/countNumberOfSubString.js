const findNumberOfSubString = (str) => {
    let count = 0 
    for(let i = 0 ; i< str.length ; i++){
        count = str.length - i
    }
    return count
}

const str = "abc"
console.log(findNumberOfSubString(str))