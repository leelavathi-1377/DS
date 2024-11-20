const arr = [1, 0, 3, 2, 0, 0, 4, 0];

const swap = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
};

const moveAllZeroesToLast = (arr) => {
    let zeroIndex = 0;
    let nonZeroIndex = 0;
    while (nonZeroIndex < arr.length) {
        if (arr[nonZeroIndex] !== 0) {
            swap(arr, nonZeroIndex, zeroIndex);
            nonZeroIndex++;
            zeroIndex++;
        } else {
            nonZeroIndex++;
        }
    }
};

moveAllZeroesToLast(arr);
console.log(arr);
