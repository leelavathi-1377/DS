const arr = [3 ,2 ,1 ,56 ,1000 ,167]

function findMaxAndMinEle(arr){
    const n = arr.length
    let minEle = arr[0]
    let maxEle = arr[0]
    for(let i = 0 ; i < n ; i++){
        if(arr[i] <  minEle){
            minEle  = arr[i]
        }
        else if(arr[i] > maxEle){
            maxEle = arr[i]
        }
    }
    return [minEle , maxEle]

}
console.log(findMaxAndMinEle(arr))