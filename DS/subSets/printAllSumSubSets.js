// const printAllSubSets = (arr) => {
//     const result = []
//     const length = Math.pow(2, arr.length);
//     for(let i = 0 ; i < length ; i++){
//         const binaryString = i.toString(2).padStart(arr.length , "0")
//         const subsets = []
//         for(let j = 0 ; j < binaryString.length ; j++){
//             if(binaryString[j] === '1'){
//                 subsets.push(arr[j])
//             }
//         }
//         result.push(subsets)
//     }
//     return result
// }


const printAllSubSetsOfAnArray = (arr, sum, i, currentSum) => {
    if (sum === 0) {
        return 1;
    }

    if (i === arr.length || sum < 0) {
        return 0;
    }

    const includeCurrent = printAllSubSetsOfAnArray(arr, sum - arr[i], i + 1, currentSum + arr[i]);
    const excludeCurrent = printAllSubSetsOfAnArray(arr, sum, i + 1, currentSum);

    return includeCurrent + excludeCurrent;
};
 
const arr = [1, 2, 3];
const targetSum = 2;
console.log(printAllSubSetsOfAnArray(arr, targetSum, 0, 0));
