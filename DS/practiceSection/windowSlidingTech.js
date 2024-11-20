const windowSliding = (arr, k) => {
    let windSum = 0
    let mSum = 0
    for(let i = 0 ; i < k ; i++){
        windSum = windSum + arr[i]
    }
    for(let i = k ; i<= arr.length - 1; i++){
        windSum = windSum - arr[i - k] + arr[i]
        mSum = Math.max(mSum , windSum)
    }
    return mSum
    
}

const arr = [1, 2, 3, 4, 5, 6, 7]
console.log(windowSliding(arr, 3))