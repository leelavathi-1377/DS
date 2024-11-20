const fincMissingEle = (arr) => {
    const len = arr.length
    let missingEle = []
    for(let  i = 1 ; i <= len ; i++){
        if(!arr.includes(i)){
            missingEle.push(i)
        }
    }
    return missingEle
}

console.log(fincMissingEle([1, 2, 3, 4, 5, 7, 8]))