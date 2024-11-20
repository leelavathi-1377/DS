const sumOfNNaturalNumbers = ( i ,  n , sum) => {
    if( i == n){
        sum += i 
        console.log(sum)
        return;
    }
    sum = sum + i;
    sumOfNNaturalNumbers(i+1 , n , sum )
    
}

sumOfNNaturalNumbers(0 , 10 , 0)