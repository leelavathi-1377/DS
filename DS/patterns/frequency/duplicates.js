const duplicates = (arr) =>{
    let obj = {}
    let duplicateArray = []
    for(let i of arr){
        obj[i] ? obj[i]+=1 : obj[i]=1
    }
    console.log(obj)
    for(let key in obj){
        if(obj[key] > 1){
            duplicateArray.push(key)
        }
    }
    return duplicateArray
}
const resutlt = duplicates([1,2,3,4,5,3,2,4,5])
console.log(resutlt)