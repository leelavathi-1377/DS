const duplicatesInArray = (a) => {
    const duplicateList = []
    const obj = {}
    for(let i = 0 ; i< a.length ; i++){
        !obj[a[i]] ? obj[a[i]] = 1 : obj[a[i]]++
    }
    for(let num in obj){
        if(obj[num] > 1){
            duplicateList.push(num)
        }
    }
    if(duplicateList.length > 0){
        return duplicateList
    }
    else{
        return [-1]
    }
}
console.log(duplicatesInArray([1, 2, 2, 3, 4, 4, 5]))