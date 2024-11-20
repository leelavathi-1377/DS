const fibanocci = (n) =>{
    if(n==0){
        return 0
    }
    else if(n==1){
        return 1
    }
    return fibanocci(n-1)+fibanocci(n-2)
}
console.log(fibanocci(3))


//display the fibanocci numebers:--
let result = []
let n = 5
if(n!=0){
    for(let i =0 ;i<n; i++){
        result.push(fibanocci(i))
    }
}
console.log(result)