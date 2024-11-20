const arr = [1, 2, 3, 4, 5]

// const sortedSumArray = (arr, target) => {
//     let left = 0;
//     let right = arr.length -1
//     while(left < right){
//         const sum = arr[left] + arr[right]
//         console.log(sum)
//         if(sum === target) return [left , right]
//         else if(sum < target){
//             left ++
//         }
//         else{
//             right --
//         }
//     }
// }

// console.log(sortedSumArray(arr, 7))


const sortedSubArray = (arr, target) => {
    let left = 0
    let right = 0
    let sum = 0 
    while(right < arr.length){
        sum = sum + arr[right]

        while(sum > target) {
            sum = sum - arr[left]
            left++
        }
        
        if(sum === target){
            return [left + 1, right + 1]
        }

        right++ 
    }

    return [-1, -1]
}

console.log(sortedSubArray(arr, 7))