const arrangeEvenOddIndices = (arr) => {
    let evenIndex = 0
    let oddIndex = 0
    for(let i = 0 ; i  <arr.length ; i++){
        if(arr[i] %2 === 0){
            [arr[i] , arr[evenIndex]] = [arr[evenIndex] , arr[i]]
            evenIndex+2
        }
        else{
            [arr[i] , arr[oddIndex]] = [arr[oddIndex] , arr[i]]
            oddIndex+2
        }
    }
    return arr
}

const arr  = [2, 1, 4, 3, 6, 5]
console.log(arrangeEvenOddIndices(arr))