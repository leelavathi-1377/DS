const digitSum = (num) =>{
    if(num === 0){
        return 0
    }
    return num%10 + Math.floor(digitSum(num/10))
}
console.log(digitSum(34567))