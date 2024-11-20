//Iterative mode:--
//counting Down The numbers:--

for(let i = 3 ;i>0 ; i--){
    console.log(i)
}

//recursion mode:--

console.log("recursion mode")
const countDown = (n) =>{
    if(n==0){
        return 0
    }
    console.log(n)
    countDown(n-1)
}
const result = countDown(3)