// const printSubArrays = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i; j < arr.length; j++) {
//             let subarray = ''
//             for (let k = i; k <= j; k++) {
//                 subarray += arr[k]
//             }
//             console.log(subarray.split(''))
//         }
//     }
// }
// const arr = [1,2, 3, 4]
// printSubArrays(arr)

function printAllSubarrays(arr) {
    const n = arr.length;
    for (let i  = 0; i  < n; i++) {
        for (let j = i; j < n; j++) {
            let subarray = arr.slice(i, j + 1);
            console.log(subarray);
        }
    }
}

const arr = [1, 2, 3];
printAllSubarrays(arr);
