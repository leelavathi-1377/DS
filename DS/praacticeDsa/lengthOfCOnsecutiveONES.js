const lengthOfConsecutiveOnes = (num) => {
    if(num & (num << 1) !== 0){
        return true
    }
    else{
        return false
    }

}

const num = 1011
console.log(lengthOfConsecutiveOnes(num))