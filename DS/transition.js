const transition = (arr) => {
    let left = 0 
    let right = arr.length - 1
    let transitionInd = -1
    while(left < right){
        let mid = Math.floor((left + right)/2)
        // console.log(mid)
        if(arr[mid] === 1){
            transitionInd = mid
            right  = mid - 1
        }
        else{
            left = mid + 1
        }
    }
    return transitionInd
}

const arr = [0, 0, 0, 1,1]
console.log(transition(arr))