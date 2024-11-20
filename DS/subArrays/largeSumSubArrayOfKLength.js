const findLargeSumSubArrayOfKLength = (arr , k) => {
    let maxSum = Number.MIN_VALUE;
    for(let i = 0 ; i <= arr.length - k ; i++){
        let curSum = 0
        for(let j = i ; j< i+k ; j++){
            curSum = curSum + arr[j]
        }
        console.log(curSum)
        if(curSum > maxSum){
            maxSum = curSum
        }
    }
    return maxSum
}

const arr = [ 1, 2, 3, 4, 5, -6];
console.log(findLargeSumSubArrayOfKLength(arr , 3))