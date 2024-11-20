// const missingNumberInAnArray = (arr, n) => {
//     let list = []
//     for(let i = 1; i < n ; i++){
//         list.push(i)
//     }

//     for(let i = 0;i < arr.length ; i++){
//         if(!list.includes(arr[i])){
//             return list[i]
//         }
//     }
// }



const missingNumberInAnArray = (arr, n) => {
    const totalSum = (n*(n+1))/2
    const givenSum = arr.reduce((acc, cur) => {
        return acc+cur
    })
    return Math.abs(totalSum  - givenSum)
}


const arr = [1, 2, 3, 5]
console.log(missingNumberInAnArray(arr, 5))