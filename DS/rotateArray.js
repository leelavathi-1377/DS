// const rotateArray = (arr) => {
//     const n = arr.length
//     let lastEle = arr[n-1]
//     for(let i = n - 1 ; i > 0 ; i--){
//         console.log(arr[i-1], arr[i])
//         arr[i] = arr[i-1]
//     }
//     arr[0] = lastEle
//     return arr
// }

// console.log(rotateArray([3, 2, 3, 4, 5, 6, 6, 7]))


function rotateArray(arr, positions) {
    const n = arr.length;
    if (n <= 1) {
        return arr;
    }
    const normalizedPositions = ((positions % n) + n) % n;
    if (normalizedPositions === 0) {
        return arr;
    }
    const rotatedArr = [];
    for (let i = 0; i < n; i++) {
        rotatedArr[i] = arr[(i + normalizedPositions) % n];
    }
    return rotatedArr;
}
const myArray = [1, 2, 3, 4, 5];
const rotatedArray = rotateArray(myArray, 2); 
console.log(rotatedArray); 

