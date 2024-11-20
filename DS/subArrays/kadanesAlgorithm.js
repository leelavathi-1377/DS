const findMaxArrOfSum = (arr) => {
    let max  = Number.MIN_VALUE
    let sum = 0
    for(let i = 0 ; i < arr.length ;i++){
        sum = sum + arr[i]

        max = Math.max(sum , max)

        if(sum < 0){
            sum = 0
        }
    }
    return max
}

const arr = [-1, 3, 4, -2]

console.log(findMaxArrOfSum(arr))
