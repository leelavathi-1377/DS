const pritnNumbersFromOneToFive = (n) => {
    if(n == 0){
        return 
    }
    console.log(n)
    pritnNumbersFromOneToFive(n - 1)

}

pritnNumbersFromOneToFive(5)