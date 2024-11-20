const countCommonElements = (arr1, arr2) => {
    let uniqueEle = new Set(arr1)
    let count = 0 
    let commonEleList = []
    for(let num of arr2){
        if(uniqueEle.has(num)){
            count++
            commonEleList.push(num)
            uniqueEle.delete(num)
        }
    }
    return {count, commonEleList}
}
const arr1 = [1, 2,3 ,1, 2, 3]
const arr2 = [1, 2, 3]
console.log(countCommonElements(arr1, arr2))