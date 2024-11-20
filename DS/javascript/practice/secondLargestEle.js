const array = [1, 2, 3, 4, 5]

const secondLargestEle = (array) => {
    const firstLargest = Math.max(...array)
    index = array.indexOf(firstLargest)
    array.splice(index, 1)
    const secondLargestEle = Math.max(...array)
    return secondLargestEle
}

const result = secondLargestEle(array)
console.log(result)