const print2DInZigZag = (matrix) => {
    const result = []
    for(let i = 0 ; i < matrix.length ; i++){
        if(i%2 === 0){
            for(let j = 0 ; j < matrix.length ; j++){
                result.push(matrix[i][j])
            }
        }
        else{
            for(let j = matrix.length - 1 ; j >= 0 ; j--){
                result.push(matrix[i][j])
            }
        } 
    }
    return result
}

const matrix = [[1, 2, 3, 4],[5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]
console.log(print2DInZigZag(matrix))