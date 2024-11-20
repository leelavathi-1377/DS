const largestSumSubArray = (arr) => {
    let maxSum  = arr[0]
    let currentSum = arr[0]
    for(let i = 1 ; i < arr.length ; i++){
        currentSum =  Math.max(arr[i] , arr[i] + currentSum)
        if(currentSum > maxSum){
            maxSum = currentSum
        }
    }
    return maxSum
}

const arr = [1, 2, 3, -2, 5];
console.log(largestSumSubArray(arr))