const sameSquared = (arr1 , arr2) =>{
    if(arr1.length != arr2.length){
        return false
    }
    let obj = {}
    for (let i of arr1){
        obj[i*i] ? obj[i*i]+=1 : obj[i*i] = 1
    }
    for(let key of  arr2){
        if(!obj[key] || obj.key < 0){
            return false
        }
        obj[key] -=1
    }
    return true
}
const result = sameSquared([1,2,3] , [1,4,4])
console.log(result)