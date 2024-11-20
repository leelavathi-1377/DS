const str = "10100101"

const countStr = (str) => {
    let count = 0
    for(let i = 0 ; i < str.length ; i++){
        if(str[i] == '1'){
            for(let j = i + 1 ; j < str.length ; j++){
                if(str[j] == '1'){
                    count++
                    console.log(str.substring(i, j+1))
                }
            }
        } 
    }
    return count
}

console.log(countStr(str))