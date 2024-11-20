const missingNumberInAnArray = (arr) => {
    const n  = Math.max(...arr)
    const expectedResult = (n * (n  + 1)) / 2
    console.log(expectedResult)
    const result = arr.reduce((acc, cur)=>{
        return acc+cur
    }, 0)
    return  expectedResult - result

}

const arr = [1, 2, 4, 5, 6,7]
console.log(missingNumberInAnArray(arr))