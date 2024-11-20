console.log("o(n^2)")
const simple = (arr1 , arr2) =>{
    if(arr1.length !== arr2.length){
        return 
    }
    for(let i = 0; i<arr1.length ; i++){
        let correctindex = arr2.indexOf(arr1[i] ** 2)
        if(correctindex === -1){
           return false
        }
        arr2.splice(correctindex , 1)
    }
    return true
}

console.time("test_timer")
const result = simple([1, 2, 3, 4] , [1, 4 , 9, 1])
console.timeEnd("test_timer")
console.log(result)


console.log("o(n)")
const freqCount = (arr1 , arr2) =>{
    const arr1Obj = {}
    const arr2Obj = {}
    if(arr1.length !== arr2.length){
        return false
    }
    for(let val of arr1){
        arr1Obj[val] = (arr1Obj[val] || 0) + 1
    }
    for(let val of arr2){
        arr2Obj[val] = (arr2Obj[val] || 0) + 1
    }
    for(let key in arr1Obj){
        if(!(key ** 2 in arr2Obj)){
            return false
        }
        if(arr2Obj[key ** 2] !== arr1Obj[key]){
            return false
        }
    }
    return true
}

console.time("test_timer")
const result1 = freqCount([1, 2, 3, 4] , [1, 9, 4, 16])
console.timeEnd("test_timer")
console.log(result1)