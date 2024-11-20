const printUniquelyAppearedEle = (arr) => {
    let obj = {}
    let uniquelyAppearedEle = []
    for(let ele of arr){
        !obj[ele] ? obj[ele] = 1 : obj[ele]++
    }
    for(let ele in obj){
        if(obj[ele] === 1){
            uniquelyAppearedEle.push(parseInt(ele))
        }
    }
    return uniquelyAppearedEle
}

const arr =  [1, 2, 3, 3, 4, 4, 5, 5, 6, 2, 2, 5];
console.log(printUniquelyAppearedEle(arr))