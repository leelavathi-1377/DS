// const matrix = [[1, 2, 3, 4] , [5, 6, 7, 8] , [9, 10, 11, 12],[13, 14, 15, 16]]

// findTheBoundaryElements = (matrix) => {
//     for(let i = 0 ; i < matrix.length ; i++){
//         for(let  j = 0 ; j < matrix.length ; j++){
//             if( i== 0 || i == matrix.length -1  || j == 0 || j == matrix.length - 1){
//                 console.log(matrix[i][j])
//             }
//         }
//     }
// }
// findTheBoundaryElements(matrix)


findTheBoundaryElements = (matrix) => {
    let i = 0 
    let j = 0
    const newArr = []
    for(let j = 0 ; j < matrix.length ; j++){
        newArr.push(matrix[i][j])
    }
    j = matrix.length - 1
    for(let i = 0 ; i < matrix.length ; i++){
        newArr.push(matrix[i][j])
    }
    i = matrix.length - 1
    for(let j = 0 ; j < matrix.length ; j++){
        newArr.push(matrix[i][j])
    }
    j =  0 
    for(let i = 0 ; i< matrix.length ; i++){
        newArr.push(matrix[i][j])
    }
    return newArr
}

const matrix = [[1,2,3,4] , [5,6,7,8] ,[9,10,11,12],[13,14,15,16]]
console.log(findTheBoundaryElements(matrix))