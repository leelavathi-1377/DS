const printNumberOfDigits = (num) => {
    if( num === 0){
        return 0
    }
    return printNumberOfDigits(Math.floor(num/10)) + 1
}

const number = 12345
console.log(printNumberOfDigits(number))