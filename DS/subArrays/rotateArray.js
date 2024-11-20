const rotateArray = (arr, d) =>{
    let n = arr.length 
    let rotateArray = []
    for(let i = 0 ; i < n ; i++){
        rotateArray[i] = arr[(i+d)%n]
    }
    return rotateArray
}
const arr = [1, 2, 3, 4, 5, 6]
console.log(rotateArray(arr, 2))