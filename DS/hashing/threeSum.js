//bruteForceAlgorithm:---


// const get3Sum = (arr ) =>{
//     for(let i = 0 ; i< arr.length ; i++){
//         for(let j =i + 1 ; j< arr.length ; j++){
//             for(let k = j + 1 ; k<arr.length ; k++){
//                 if(arr[i]+arr[j]+arr[k] === 0){
//                     return [i , j, k]
//                 }
//             }
//         }
//     }
// }
// console.log(get3Sum([-1, 0, 1, 2, -1, -4]))


console.log("time complexity O(N^2)");
const getThreeSum = (arr , sum) =>{
    for(let i =0 ; i< arr.length-2; i++){
        let l=i+1
        let r=arr.length - 1
        let result = []
        arr.sort((a,b) => a-b)
        while(l < r){
            if(arr[i] + arr[l] + arr[r] === sum){
                return [arr[i] , arr[l] , arr[r]]
            }
            else if(arr[i]+arr[l]+arr[r]< sum){
                l++
            }
            else{
                r--
            }
        }
    }
    return false
}

console.log(getThreeSum([-1, 0, 1, 2, -1, -4 ] , 0))

// console.log("hashing method")

// const getThreeSumByHash = (arr , sum) =>{
//     fo
// }
// console.log(getThreeSum(arr , sum))