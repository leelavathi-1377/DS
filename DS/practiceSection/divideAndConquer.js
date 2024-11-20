const findMinAndMax = (arr , left , right) => {
    if(left === right){
        return {
            min : arr[left],
            max : arr[right]
        }
    }
    if(right - left === 1){
        return {
            min : Math.min(arr[left], arr[right]),
            max : Math.max(arr[left], arr[right])
        }
    }
    const mid = Math.floor((left + right) / 2)
    console.log(mid)
    let leftMinMax = findMinAndMax(arr, left, mid )
    console.log(leftMinMax , "????")
    let rightMinMax = findMinAndMax(arr, mid + 1, right)
    console.log(rightMinMax , ":::::")

    return {
        min: Math.min(leftMinMax.min, rightMinMax.min),
        max: Math.max(leftMinMax.max, rightMinMax.max)
    };
}

const arr = [1, 2, 3, 4, 5, 6]
console.log(findMinAndMax(arr, 0, arr.length - 1)) 



// [1, 2,3 , 4, 5, 6]

// [1, 2, 3, 5]   [4, 5,6, 7]

// [1, 2]  [3, 5]   [4, 5] [6, 7]