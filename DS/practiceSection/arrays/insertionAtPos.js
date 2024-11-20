const arr = [1, 2,3 ,4, 5]

// const insertAtPos = (arr, pos, ele) => {
//     if(arr.length < pos){
//         return arr.concat(ele)
//     }
//     arr.push(arr[arr.length - 1])
//     for(let i = arr.length - 2 ; i >= pos ;i--){
//         arr[i+1] = arr[i]
//     }
//     arr[pos] = ele
//     return arr

// }
// console.log(insertAtPos(arr,  2 , 10))

console.log(arr.splice(2, 0, 10))    //gives empty array as because the result gives the removed elements from the array. 
//so no remove at the time of insertion gives the empty result.
arr.splice(2, 0 , 10)       // insert element
console.log(arr)

arr.splice(2, 1, 9)      //remove element
console.log(arr)


// TC: O(N)
// SC: O(1)