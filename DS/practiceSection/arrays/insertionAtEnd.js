
//**************************/

const arr = [1,2,3,4,5,6]

// const insertionAtEnd = (key) => {
//     return arr.concat(key)
// }

// console.log(insertionAtEnd(7))

//*******************/

const insertion = (arr, key) => {
    const lastPos = arr.length
    arr[lastPos] = 7
    console.log(arr)
    return arr.length - 1
}

console.log(insertion(arr, 7))

// TC: O(1)
// SC: O(1)