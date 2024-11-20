const sumOfNumbersInArray = (str) => {
    const numbers = str.match(/\d+/g)
    let sum = 0
    if(numbers){
        for(const number of numbers){
            sum = sum + parseInt(number)
        }
    }
    return sum
}

const str = "1abc23"
console.log(sumOfNumbersInArray(str))
