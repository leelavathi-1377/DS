console.log("Iterative mode")

const getSum = (n) => {
    let total = 0
    for(let i = 1 ; i <= n ;i++){
        total = total+i
    }
    return total
}

const result = getSum(10)
console.log(result)


console.log("recursion mode")
const getSumRec = (n) => {
    let total = 0
    if(n==0){
        return 0
    }
    return getSumRec(n-1)+n;
}


const result1 = getSumRec(10)
console.log(result1)
