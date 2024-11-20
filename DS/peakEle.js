const findPeakElement = (arr) => {
    let n = arr.length
    let index = -1
    if(arr.length === 0){
        return 0
    }
    if(arr[0] > arr[1]){
        index = 0
    }

    if(arr[n-1] < arr[n-2]){
        index = n -1
    }

    for(let i = 1 ; i< n -1 ; i++){
        if(arr[i] > arr[i-1] && arr[i] < arr[i+1]){
            index = i
            break
        }
    }
    if(index !== -1){
        return index
    }
    else{
        return 0
    }

}
const arr = [1, 2, 3]
console.log(findPeakElement(arr))