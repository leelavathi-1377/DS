const trailingZeroes = (num) => {
    let count = 0 
    while(num > 0){
        let digit = num % 10
        console.log(digit)
        if(digit !== 0){
            return count
        }
        count++
        num = Math.floor(num / 10)
    }
    return count

}

console.log(trailingZeroes(12340))