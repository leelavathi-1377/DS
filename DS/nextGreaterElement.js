// //brute force 
// const findNextGreaterElement = (arr) => {
//     const resultArray = []
//     for(let i = 0 ; i < arr.length ; i++){
//         let isGreaterFound = false
//         for(let j = i + 1 ; j <=arr.length ; j++){
//             if(arr[j] > arr[i]){
//                 isGreaterFound = true
//                 resultArray.push(arr[j])
//                 break
//             }
//         }
//         if(!isGreaterFound){
//             resultArray.push(-1)
//         }
//     }
//     return resultArray
// }

// // const arr = [1, 2, 3]
// const arr = [4, 12, 5, 3, 1,2, 5, 3, 1, 2, 4, 6]
// console.log(findNextGreaterElement(arr))

//using stack 

function nextGreaterElement(arr) {
    const n = arr.length;
    const result = new Array(n).fill(-1); // Initialize the result array with -1.
    const stack = [];

    for (let i = 0; i < n; i++) {
        console.log(arr)
        while (stack.length > 0 && arr[i] > arr[stack[stack.length - 1]]) {
            // While the stack is not empty and the current element is greater than the element at the top of the stack,
            // update the result for the element at the top of the stack and pop it.
            result[stack.pop()] = arr[i];
        }

        // Push the current element's index onto the stack.
        stack.push(i);
    }

    return result;
}

// Example usage:
const arr = [4, 5, 2, 10, 8];
const nextGreater = nextGreaterElement(arr);
console.log(nextGreater); // Output: [5, 10, 10, -1, -1]
