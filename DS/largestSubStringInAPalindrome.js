const str = "frMadaMFro"

for(let i = 0 ; i < str.length ; i++){
    let left = 0 
    let right = str.length - 1
    while(left < 0 && right >= str.length && str[left] === str[right]){
        left--
        right++
    }
    return str.slice(str , left, right)
    
}

