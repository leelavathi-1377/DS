const factorial = (n) => {
    if(n ==0 || n== 1){
        return 1
    }
    return factorial(n-1) * n
}

const n = 5
console.log(factorial(n))


//for loop

const factorialLoop = (n) => {
    let res = 1
    for(let i = 1 ; i <= n ; i++){
        res = res*i
    }
    return res
}

console.log(factorialLoop(5))