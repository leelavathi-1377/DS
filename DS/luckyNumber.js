const n = 13 
findLuckyNumber = (n , counter) => {
    if( n < counter){
        return true
    }
    if(n%counter == 0){
        return false
    }
    return findLuckyNumber((n-(n/counter)) , counter+1)

}
console.log(findLuckyNumber(7 , 2))