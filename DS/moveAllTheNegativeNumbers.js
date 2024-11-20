// const moveAllTheNegativeNumbersToRightSide = (arr) =>{
//     let left = 0 
//     let right = arr.length - 1
//     while(left < right){
//         if(arr[left] < 0){
//             [arr[left] , arr[right]] = [arr[right] , arr[left]]
//             left++
//             right--
//         }
//         else{
//             if(arr[left]>0){
//                 left++
//             }
//             if(arr[right]<0){
//                 right++
//             }
//         }
//     }
//     return arr
// }

// console.log(moveAllTheNegativeNumbersToRightSide([1 ,-1 ,3 ,2 ,-7 ,-5 ,11, 6]))


const moveAllTheNegativeNumbersToRightSide = (arr) => {
    let negNumbers = []
    let posNumbers = []
    for(let  i = 0 ; i < arr.length ; i++){
        if(arr[i] < 0 ){
            negNumbers.push(arr[i])
        }else{
            posNumbers.push(arr[i])
        }
    }
    return posNumbers.concat(negNumbers)
}

console.log(moveAllTheNegativeNumbersToRightSide([1 ,-1 ,3 ,2 ,-7 ,-5 ,11, 6]))