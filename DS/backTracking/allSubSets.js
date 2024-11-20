const allSubSets = (arr) => {
    const subSets = []
    for(let i = 0 ; i< arr.length ; i++){
        for(let j = i ; j < arr.length ;j++){
            subSets.push(arr.slice(i , j+1))
        }
    }
    return subSets
}

const arr = [1, 2, 3, 4, 5]
console.log(allSubSets(arr))