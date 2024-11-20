// const getRecursive =(n)=>{
//     if(n>0){
//         console.log(n)
//         getRecursive(n-1)
//     }
// }

// const getRecursiveOutput2 = (n) =>{
//     if(n>0){
//         getRecursiveOutput2(n-1)
//         console.log(n)
//     }
// }

// const recursiveOutput = getRecursive(10)
// console.log("#############")
// const recursiveOutput2 = getRecursiveOutput2(10)
// console.log("static variables")

//static and gloabal values in recursion



let x = 0
const getStaticRecursionResult = (n) =>{
    if(n>0){
        x++
        return getStaticRecursionResult(n-1)+x
    }
    return 0;
}

const output = getStaticRecursionResult(5)
console.log(output)


//sum of first natural numbers:--

const getSumOfnNumbers = (n) =>{
    if(n==0){
        return 0
    }
    return getSumOfnNumbers(n-1) + n
}
const result = getSumOfnNumbers(10)
console.log("sum of n natural numbers",result)


//factorial recursion


const getFactorial = (n) =>{
    if(n==1){
        return 1
    }
    return getFactorial(n-1)*n
}

 const factorial = getFactorial(5)
 console.log("factorial of natural numbers",factorial)


 //power of a function
 
 const getPower = (m , n) =>{
    if(n==0){
        return 1
    }
    return getPower(m, n-1)*m
 }

 const power = getPower(5 , 3) 
 console.log("power of given values",power)

 //power function with less number of multiplications

 const getPower2 = (m , n) =>{
    if(n==0){
        return 1
    }
    if(n%2 == 0){
        return getPower2(m*m , n%2)
    }
    return m*getPower2(m*m,(n-1)%2)
 }

 const result2 = getPower2(5, 3)
 console.log("power with less multiplications are", result2)

 //Taylors series using recursion

 const getTaylorResult = (x , n) =>{
    let p = 1 , f =1 
    let r;
    if(n == 0){
        return 1
    }
    r = getTaylorResult(x , n-1)
    p = p*x
    f = f*n
    return r+p+f
 }

 const taylorResult = getTaylorResult(1 ,10 )
 console.log(taylorResult)



