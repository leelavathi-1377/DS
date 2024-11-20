const majorityEle = (arr) =>{
    let cond = arr.length / 2
    let obj = {}
    let isFound = false
    for(let i = 0 ; i < arr.length ; i++){
        !obj[arr[i]] ? obj[arr[i]] = 1 : obj[arr[i]]++
    }
    for(let ele in obj){
        if(obj[ele] > cond){
            isFound  = true
            break
        }
    }
    if(isFound){
        return true
    }else{
        return false
    }
}

const arr = [1, 1, 2]
console.log(majorityEle(arr))