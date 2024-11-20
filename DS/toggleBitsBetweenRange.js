const num = 17

const toggleNumber = (num, left , right) => {
    const binary = num.toString(2).split('')
    for(let i = left ; i <= right ; i++){
        console.log(binary[i])
        if(binary[i] === 1){
            binary[i] = 0
        }else{
            binary[i] = 1
        }
    }
    const str = binary.join('')
    return parseInt(str, 2)
}

console.log(toggleNumber(num, 0, 2))