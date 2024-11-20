const unsortedSubArray = (arr, k, target) => {
    let wSum = 0;
    let i;
    for(i = 0 ;i < k ;i++){
        wSum = wSum + arr[i]
    }
    if(wSum === target){
        return [i+1, i+2]
    }
    for(let i = k ; i <= arr.length ; i++){
        wSum = wSum - arr[i-k] + arr[i]
        if(wSum === target){
            return [i, i+1]
        }
    }
    return [-1, -1]
}


const arr= [1, 2, 3, 7, 5]
console.log(unsortedSubArray(arr, 2, 12))