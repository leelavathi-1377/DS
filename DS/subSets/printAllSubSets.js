const printAllSubSetsOfAnArray = (arr, sum, i, currentSum, currentSubset) => {
    if (sum === currentSum) {
        console.log(currentSubset);
    }

    if (i === arr.length || currentSum >= sum) {
        return;
    }
    const newSubsetInclude = [...currentSubset, arr[i]];
    printAllSubSetsOfAnArray(arr, sum, i + 1, currentSum + arr[i], newSubsetInclude);
    printAllSubSetsOfAnArray(arr, sum, i + 1, currentSum, currentSubset);
};

const arr = [1, 2, 3];
const targetSum = 2;
console.log("Subarrays with sum", targetSum, ":");
printAllSubSetsOfAnArray(arr, targetSum, 0, 0, []);
