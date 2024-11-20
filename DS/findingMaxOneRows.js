const findMaxOneRows = (matrix) => {
    let maxOnesInRow = 0;
    let maxOnesRow = -1;
    let row = matrix.length;
    let col = matrix[0].length;
    for (let i = 0; i < row; i++) {
        let left = 0;
        let right = col - 1;
        let onesCountInRow = 0;
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            console.log(mid , "???")
            if (matrix[i][mid] === 1) {
                onesCountInRow += mid - left + 1;
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        if (onesCountInRow > maxOnesInRow) {
            maxOnesInRow = onesCountInRow;
            maxOnesRow = i;
        }
    }
    return maxOnesRow;
};

const matrix = [
    [0, 1, 1, 1],
    [0, 0, 1, 1],
    [1, 1, 1, 1],
    [0, 0, 0, 0],
];

console.log(findMaxOneRows(matrix)); // Output: 2 (the row with the maximum number of ones)
