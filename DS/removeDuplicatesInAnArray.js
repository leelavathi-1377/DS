const removeDuplicatesInAnArray=  (arr)=> {
    let uniqueList  = []
    for(let i = 0 ; i < arr.length ; i++){
        if(!uniqueList.includes(arr[i])){
            uniqueList.push(arr[i])
        }
    }
    return uniqueList
}

console.log(removeDuplicatesInAnArray([1, 2,2 , 3, 4,  5, 5, 5]))