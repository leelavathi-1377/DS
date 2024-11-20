const anagramCheck = (word1 , word2) =>{
    let obj = {}
    for(let i =0 ;i <word1.length ; i++){
        let key = word1[i]
        obj[key] ? obj[key]+=1 : obj[key] = 1
    }
    console.log(obj)
    for(let i= 0 ; i<word2.length ; i++){
        let key = word2[i]
        obj[key] ? obj[key]-=1 : obj[key] = 1
    }
    console.log(obj)
    for(let key in obj){
        if(obj[key] !== 0){
            return false
        }
    }
    return true
}
const result = anagramCheck("leela" , "eelaL")
console.log(result)