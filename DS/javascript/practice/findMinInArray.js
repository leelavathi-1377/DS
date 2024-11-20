const array = [1, 2, 3, 4, 5]
const minEle = array[0]

const findMinInArray = array.reduce((minEle , cur) => {
    if(cur < minEle){
        minEle = cur
    }
    return minEle
} , minEle)

console.log(findMinInArray)