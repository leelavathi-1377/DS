function findSubarrayWithGivenSum(arr, sum) {
    let map = new Map();
    let currSum = 0;
    const arrayList = [];
    for (let i = 0; i < arr.length; i++) {
        currSum += arr[i]
        if (map.has(currSum - sum)) {
            arrayList.push(arr.slice(map.get(currSum - sum) + 1, i + 1));
        }
        map.set(currSum, i);
    }

    return arrayList;
}

let arr = [1, 2, 3, 4, 5];
let subarrays = findSubarrayWithGivenSum(arr, 9);
if (subarrays.length === 0) {
    console.log("No subarray with the given sum found");
} else {
    console.log("Subarrays:", subarrays);
}
