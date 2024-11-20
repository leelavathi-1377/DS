const reverseSpiralForm = (matrix) => {
    let left = 0 
    let right = matrix[0].length  - 1
    let top = 0
    let bottom = matrix.length - 1

    while(left <= right && top <= bottom){
        for(let j = right ; j >= left ; j--){
            console.log(matrix[top][j])
        }
        top++

        for(let j = top ; j <= bottom ;j++){
            console.log(matrix[j][left])
        }

        left++

        if(top <= bottom){
            for(let j = left ; j <= right ; j++){
                console.log(matrix[bottom][j])
            }
        }

        bottom--

        if(left <= right){
            for(let j = bottom ; j >= top ;j--){
                console.log(matrix[j][right])
            }
        }

        right--
    }

}

const matrix = [
    [1, 2, 3, 0],
    [4, 5, 6, 0],
    [7, 8, 9, 0],
    [0, 0, 0, 0]
];


reverseSpiralForm(matrix)