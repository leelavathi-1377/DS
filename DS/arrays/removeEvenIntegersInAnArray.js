const removeEvenIntInAnArray = (arr) => {
    return arr.filter(eachEle =>eachEle%2 !== 0)
}

const arr = [1, 2, 3, 4, 5, 6, 7]
console.log(removeEvenIntInAnArray(arr))