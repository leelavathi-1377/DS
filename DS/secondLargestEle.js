const secondLargestEle = (arr) => {
    let max1;
    let max2;
    if(arr[0] > arr[1]){
        max1 = arr[0]
        max2 = arr[1]
    }else{
        max1 = arr[1]
        max2 = arr[0]
    }
    for(let i = 2 ; i <= arr.length ; i++){
        if(arr[i] > max1){
            max2 = max1
            max1 = arr[i]
        }
        else if(arr[i]>max2){
            max2 = arr[i]
        }
    }
    return max2
}

const arr = [ 1, 2,3 ,4]
console.log(secondLargestEle(arr))