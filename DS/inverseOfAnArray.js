
findInverseArray = (arr) => {
    const emptyArray = []
    for(let i = 0 ; i < arr.length ; i++){
        const v = arr[i]
        emptyArray[v]  = i
    }
    return emptyArray
}

const arr  = [2, 3, 1, 0, 4]
console.log(findInverseArray(arr))

