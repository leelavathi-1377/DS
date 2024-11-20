const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];

// const spiralMatrix = (matrix) => {
//     let top = 0 
//     let bottom = matrix.length - 1
//     let left = 0
//     let right = matrix[0].length - 1
//     while(top <= bottom && left <= right){
//         for(let j = 0 ; j <= right ; j++){
//             console.log(matrix[top][j])
//         }
//         top++

//         for(let j = top ; j <= bottom ; j++){
//             console.log(matrix[j][right])
//         }
//         right--

//         if(top <= right){
//             for(let j = right ; j >= left ; j--){
//                 console.log(matrix[bottom][j])
//             }
//         }

//         bottom--

//         if(left <= right){
//             for(let j = bottom ; j>= top ;j--){
//                 console.log(matrix[j][left])
//             }
//         }

//         left++
//     }

// }

// const result = spiralMatrix(matrix);





const findSpiralMatrix = (matrix) => {
    let left = 0 
    let right = matrix.length - 1 
    let top = 0
    let bottom = matrix[0].length - 1
    while(left <= right && top <= bottom){
        for(let j = left ; j <= right ; j++ ){
            console.log(matrix[top][j])
        }
        top++

        for(let j=top ; j<= bottom ;j++){
            console.log(matrix[j][right])
        }

        right--

        if(left <= right){
            for(let j =right ; j >= left ; j--){
                console.log(matrix[bottom][j])
            }
        }

        bottom--

        if(top <= bottom){
            for(let j = bottom ;j>=top ;j-- ){
                console.log(matrix[j][left])
            }
        }

        left++
    }

}

findSpiralMatrix(matrix)