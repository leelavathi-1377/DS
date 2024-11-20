const findMissingEleInRange = (array) => {
    let missedList = []
    const maxEle = Math.max(...array)
    const minEle = Math.min(...array)
    for(let i = minEle ; i< maxEle ;i++){
        if(!array.includes(i)){
            missedList.push(i)
        }
    }
    return missedList
}

const array = [1, 2, 3, 4, 5, 6, 6, 8, 9, 10]
console.log(findMissingEleInRange(array))