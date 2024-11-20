const lonelyInteger = (arr) => {
    let  obj = {}
    for(let i = 0 ; i < arr.length ; i++){
        !obj[arr[i]]  ? obj[arr[i]] = 1 : obj[arr[i]]++
    }
    for(let ele in obj){
        if(obj[ele] === 1){
            return parseInt(ele)
        }
    }
}

console.log(lonelyInteger([1,2,3, 4, 3, 2,1]))
