// const reverseOfAnArray = (arr) => {
//     return arr.reverse()
// }


const reverseOfAnArray = (arr) => {
    let left = 0
    let right = arr.length - 1
    while(left < right){
        let temp = arr[left]
        arr[left] = arr[right]
        arr[right] = temp
        left++
        right--
    }
    return arr
}

console.log(reverseOfAnArray([1, 2, 3, 4, 5]))

