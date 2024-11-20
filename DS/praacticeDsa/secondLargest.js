const arr = [20, 42, 6, 25, 30, 88]

const secondLargest = (arr) => {
    let max1 = arr[0]
    let max2 = arr[1]
    max1 = Math.max(max1, max2)
    max2 = Math.min(max1, max2)
    for(let i = 2 ;i < arr.length ; i++){
        if(arr[i]> max1){
            max2 = max1
            max1 = arr[i]
        }
        else if(arr[i]> max2){
            max2 = arr[i]
        }
    }
    return  max2
}

console.log(secondLargest(arr))