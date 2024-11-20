const swapTwoNumbers = (a,b) =>{
    let c
    c = a 
    a = b
    b = c
    return [a , b]
}

const [a , b] = swapTwoNumbers(2, 3)
console.log(a,b)

//2nd method:--

const swapTwoNumbers2 = (c, d) =>{
    c = c+d
    d = c-d 
    c = c-d
    return [c ,d]
}

const [c, d ]= swapTwoNumbers2(4, 2)
console.log(c, d)


