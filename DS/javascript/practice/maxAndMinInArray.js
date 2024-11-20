const array = [1, 2, 3, -1,5]
const maxEle = array[0]
const findMax = array.reduce((maxEle, cur) => {
    if(cur > maxEle){
        maxEle = cur
    }
    return maxEle
} , maxEle)

console.log(findMax)
