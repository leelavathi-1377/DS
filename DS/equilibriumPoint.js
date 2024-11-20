const findEquilibriumPoint = (arr) => {
    const n = arr.length
    let totalSum = 0
    let leftSum = 0
    for(let i = 0 ; i < n ; i++){
        totalSum += arr[i]
    }

    for(let i = 0 ; i < n ; i++){
        totalSum = totalSum - arr[i]
        if(leftSum === totalSum){
            return i + 1
        }
        leftSum += arr[i]
    }
    return -1

}
const arr = [1, 3 , 5, 2, 2]
console.log(findEquilibriumPoint(arr))