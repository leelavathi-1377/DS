//Iterative mode:-

console.log("Iterative mode")

const reverse = (str) => {
    let newStr = ""
    for (let i = str.length -1  ; i>=0 ; i--){
        newStr = newStr + str[i]
    }
    return newStr
}

const result = reverse("Leela")
console.log(result)

console.log("recursion mode")

const reverseRec = (str) =>{
    if(str.length === 0){
        return ""
    }
    return reverseRec(str.substr(1)) + str.charAt(0); 
}


const result1 = reverseRec("Leelavathi")
console.log(result1)


