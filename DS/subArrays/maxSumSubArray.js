const arr = [-1, 3, 4, -2]

const findMaxSumSubArray = (arr) => {
    let maxSum = 0
    for(let i = 0; i < arr.length ; i++){
        let sum = 0
        for(let j = i + 1 ; j< arr.length ; j++){
            sum = sum + arr[j]
            if(sum >  maxSum){
                maxSum = sum
            }
        }
    }
    return maxSum

}

console.log(findMaxSumSubArray(arr))