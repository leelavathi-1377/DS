// const moveAllZeroesToEndOfAnArray = (arr) => {
//     let count = 0
//     let list = []
//     for(let i = 0 ; i < arr.length ; i++){
//         if(arr[i] !== 0){
//             list.push(arr[i])
//         }
//         else{
//             count++
//         }
//     }
//     for(let  i = 0 ; i < count ; i++){
//         list.push(0)
//     }
//     return list
// }


const moveAllZeroesToEndOfAnArray = (arr) => {
    let  j = 0
    for (let i = 0 ; i <= arr.length - 1 ; i++){
        if(arr[i] !== 0 && arr[j] === 0){
            let temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
        }
        if(arr[j] !== 0){
            j++
        }
    }
    return arr
}

const arr = [0, 0, 1, 0, 3, 0, 0, 4, 2, 0, 9, 0, 0]
console.log(moveAllZeroesToEndOfAnArray(arr))
