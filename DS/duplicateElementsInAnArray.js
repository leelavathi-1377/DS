const findDuplicateElemenets = (arr) => {
    let duplicateList  = []
    let obj = {}
    for(let i = 0 ; i < arr.length ;i ++){
        !obj[arr[i]] ? obj[arr[i]] = 1 : obj[arr[i]]++
    }

    for(let ele in obj){
        if(obj[ele] > 1){
            duplicateList.push(parseInt(ele))
        }
    }
    return duplicateList
}

console.log(findDuplicateElemenets([1, 2,3 , 4, 5, 5]))