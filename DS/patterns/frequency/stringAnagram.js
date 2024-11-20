

const stringAnagram = (str1, str2) => {
    if(str1.length !== str2.length){
        return "two strings does not match "
    }
    const lookUp = {}
    for(let i=0 ; i< str1.length ; i++){
        let letter = str1[i]
        lookUp[letter] ? lookUp[letter]+= 1 : lookUp[letter] = 1; 
    }
    console.log(lookUp)
    for(let i=0 ; i<str2.length ; i++){
        let letter = str2[i]
        if(!lookUp[letter]){
            return false
        }
        lookUp[letter]-1
    }
    return true
}



const result = stringAnagram("Leela" , "eela")
console.log(result)