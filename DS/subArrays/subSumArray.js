// const findSumSubArrays = (arr) => {
//     let sumArray = []
//     for(let  i = 0 ; i < arr.length ; i++){
//         for(let j = i ; j < arr.length ; j++){
//             let sum = 0
//             for(let k = i ; k < j ; k++){
//                 sum+= arr[k]
//             }
//             sumArray.push(sum)
//         }
//     }
//     console.log(sumArray)
//     return Math.max(...sumArray)
// }

// const arr = [1, 2, 3, 4, 5]
// console.log(findSumSubArrays(arr))


// const findMaxSumOfSubArrays = (arr) => {
//     let sum = 0
//     let maxSum = Number.MIN_VALUE
//     for(let i = 0 ; i < arr.length ; i++){
//         for(let j = i ; j <arr.length ; j++){
//             sum  = sum + arr[j]
//             if(sum > maxSum){
//                 maxSum = sum
//             }
//         }
//     }
//     return maxSum
// }

// const arr = [1, 2, 3, 4, 5]
// console.log(findMaxSumOfSubArrays(arr))





function subarrayWithSumK(arr, K) {
    let sum = 0;
    const sumMap = new Map(); 
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        if (sum === K) {
            result.push([0, i]);
        }
        if (sumMap.has(sum - K)) {
            const startIndex = sumMap.get(sum - K) + 1;
            result.push([startIndex, i]);
        }
        sumMap.set(sum, i);
    }
    return result;
}

const arr = [1, 2, 3, 4, 5, 6];
const K = 9;
const subarrays = subarrayWithSumK(arr, K);
console.log(subarrays); 
