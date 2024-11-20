//naive approach
// const isPairSum = (arr , x) => {
//     let pairSumList = []
//     if(arr.length === 1){
//         return 0
//     }
//     let isFound = false
//     for(let i = 0 ; i <= arr.length - 1 ; i++){
//         for(let j = i + 1 ; j <= arr.length; j++){
//             console.log(arr[i] , arr[j] , x)
//             if(arr[i] + arr[j] === x){
//                 pairSumList.push([arr[i] , arr[j]])
//             }
//         }
//     }
//     if(pairSumList.length > 0 ){
//         return pairSumList
//     }else{
//         return -1
//     }

// }


const arr = [1, 2, 3, 4, 5, 6]
// console.log(isPairSum(arr , 5))
//two-pointer 


//for sorted array
const twoPointerPairSum = (arr, x) => {
    console.log(arr)
    let i = 0 
    let j = arr.length - 1
    let pairSumList = []
    while(i < j){
        if(arr[i] + arr[j] === x){
            return true
        }
        else if(arr[i] + arr[j] < x){
            i++
        }else{
            j--
        }
    }
    return false
}

console.log(twoPointerPairSum(arr ,5))