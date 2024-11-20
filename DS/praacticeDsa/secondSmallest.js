const secondSmallest = (arr) => {
    let min1 = Math.min(arr[0] , arr[1])
    let min2 = Math.max(arr[0] , arr[1])
    for(let i = 2; i<arr.length ; i++){
        if(arr[i] < min1){
            min2 = min1
            min1 = arr[i]
        }
        else if (arr[i] < min2){
            min2 = arr[i]
        }
    }
    return min2
}

const arr = [ 1, 2, 3 ,4]

console.log(secondSmallest(arr))