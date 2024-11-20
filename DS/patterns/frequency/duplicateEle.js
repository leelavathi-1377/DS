const duplicateEle = (arr) =>{
    let obj = {}
    for(let i =0 ; i< arr.length ; i++){
        let key = arr[i]
        obj[key] ? obj[key] +=1 : obj[key] = 1
    }
    for(let key in obj){
        if(obj[key] === 1){
            return key
        }
    }
}
const result = duplicateEle([1,2,3,4,5,2,3,4,5,2,3,4,5,4,4,4,5])
console.log("duplicate number",result)