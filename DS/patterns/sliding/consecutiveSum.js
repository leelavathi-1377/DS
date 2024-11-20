const consecutiveSum = (arr, n) => {
    if(arr.length< n){
        return null
    }
    let max = -Infinity
    for(let i =0 ; i< arr.length - n +1; i++){
        let sum = 0;
        for(let j = 0 ; j< n ; j++){
            sum += arr[i+j]
        }
        if(sum > max){
            max = sum
        }
    }
    return max
}

const result = consecutiveSum([1, 2, 3, 4, 5, 6, 7] , 3)
console.log(result)


console.log("o(n)")


const consecutiveSum1 = (arr , n )=>{
    if(arr.length < n ){
        return null
    }
    let maxSum = 0 
    let tempSum = 0
    for(let i =0 ; i< n ; i++){
        maxSum = maxSum + arr[i]
    }
    tempSum = maxSum
    console.log(tempSum)
    for(let i = n ; i< arr.length ;i++){
        tempSum = tempSum - arr[i - n] + arr[i]
        maxSum = Math.max(maxSum ,tempSum)
    }
    return maxSum
}


const result1 = consecutiveSum1([1,2,3,4,5,6,7] ,3)
console.log(result1)
