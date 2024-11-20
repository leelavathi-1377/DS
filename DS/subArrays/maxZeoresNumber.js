const maxZeroesNumber = (arr) => {
    let maxZeroesNumber = -1 
    let maxZeroes = -1
    for(let i = 0 ;i < arr.length ; i++){
        let num  = arr[i]
        let zeroresCount = 0
        while(num > 0){
            if(num%10 === 0){
                zeroresCount++
            }
            num = Math.floor(num/10)
        }

        if(zeroresCount > maxZeroes){
            maxZeroes = zeroresCount
            maxZeroesNumber = arr[i]
        }
    }
    return maxZeroes > 0 ? maxZeroesNumber : -1

}

const arr = [10, 20, 3000, 9999, 200]
console.log(maxZeroesNumber(arr)) 