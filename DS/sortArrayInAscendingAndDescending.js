const sortArrayInAscendingAndDecending = (arr) => {
    let left = 0 
    let right = arr.length - 1
    let mid = Math.floor((left+right)/2);
    const firstHalf = arr.slice(0, mid)
    const secondHalf = arr.slice(mid)
    firstHalf.sort((a, b) => a-b)
    secondHalf.sort((a, b) => a -b).reverse()
    const finalArray = firstHalf.concat(secondHalf)
    return finalArray
}

const arr = [1, 4, 3, 5, 5, 7, 8, 9, 10]
console.log(sortArrayInAscendingAndDecending(arr))