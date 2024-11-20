const fizzbuzz = (num) =>{
    if(num/3===0){
        console.log("fizz") 
    }
    else if(num/3!==0){
        console.log("buzz")
    }
    else if(num/3===0  && num/5 ===0){
        console.log("fizzBuzz")
    }
}
fizzbuzz(3)