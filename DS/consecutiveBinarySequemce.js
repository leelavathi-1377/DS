const findConsecutiveBinarySequence = (arr) => {
    let count = 0
    while(arr > 0){
        arr = (arr & (arr << 1))
        count++
    }
    return count
}

const arr  = [1, 0 , 1 , 1] 
console.log(findConsecutiveBinarySequence(arr))