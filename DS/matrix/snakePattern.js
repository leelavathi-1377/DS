const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];


const snakePattern = (matrix) => {
    const row = matrix.length;
    const col = matrix[0].length;
    for (let i = 0; i < row; i++) {
        if (i % 2 === 0) {
            for (let j = 0; j < col; j++) {
                console.log(matrix[i][j]);
            }
        } else {
            for (let j = col - 1; j >= 0; j--) {  
                console.log(matrix[i][j]);
            }
        }
    }
}


const result = snakePattern(matrix)