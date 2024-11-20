const slidingWindow = (arr , k) => {
    let wSum = 0
    let mSum = Number.MIN_VALUE
    for(let i = 0 ; i < k ; i++){
        wSum += arr[i]
    }

    for(let i = k ; i < arr.length ; i++){
        wSum = wSum - arr[i-k]+arr[i]
        mSum = Math.max(mSum , wSum)
    }
    return mSum

}

const arr = [1,2 ,3 , 4, 5, 6, 7]
console.log(slidingWindow(arr , 3))