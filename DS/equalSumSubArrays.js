/*
this is O(n)
*/
// const findSubArraysOfEqualSum = (arr) => {
//     let leftSum = 0
//     for(let  i = 0 ; i <arr.length ; i++){
//         leftSum =leftSum +  arr[i]
//         let rightSum = 0
//         for(let j = i+1; j < arr.length ; j++){
//             rightSum =rightSum +  arr[j]
//         }
//         console.log(leftSum , rightSum)
//         if(leftSum === rightSum){
//             return i + 1
//         }
//     }
//     return -1
// }

// const arr = [2, 3, 5]
// const splitPoint = findSubArraysOfEqualSum(arr)
// if(splitPoint === -1 || splitPoint === arr.length){
//     console.log("not possible")
// }
// else{
//     const firstArr = arr.splice(0 , splitPoint)
//     const lastArr = arr
//     console.log(firstArr, lastArr)
// }

/*
this is O(n^2)
*/

const findSubArraysOfEqualSum = (arr) => {
    const totalSum = arr.reduce((sum , cur) => {
       return sum = sum + cur
    }, 0)
    let rightSum = 0
    for(let i = arr.length-1 ; i >0; i--){
        rightSum = rightSum + arr[i]
        leftSum = totalSum - rightSum
        if(leftSum === rightSum){
            return i
        }
    }
    return -1
}

const arr = [2, 3, 5]
const splitIndex = findSubArraysOfEqualSum(arr)
if(splitIndex === -1 || splitIndex === arr.length){
    console.log("not possible")
}
else{
    const firstArr = arr.splice(0 , splitIndex)
    const lastArr = arr
    console.log(firstArr, lastArr)
}