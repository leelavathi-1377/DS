const findMaxSubLengthArray = (arr) => {
    const n = arr.length 
    const sumToIndex = {}
    let maxLen = 0
    let sum = 0

    for(let i = 0 ; i < n; i++){
        sum += arr[i]
        if(sum === 0 ){
            maxLen = i + 1
        }
        else if(sumToIndex[sum] !== undefined){
            maxLen = Math.max(maxLen , i - sumToIndex[sum])
        }
        else{
            sumToIndex[sum] = i
        }
    }
    console.log(sumToIndex , "???")
    return maxLen
}

const arr = [15, -2, 2, -8, 1, 7, 10, 23]
console.log(findMaxSubLengthArray(arr))