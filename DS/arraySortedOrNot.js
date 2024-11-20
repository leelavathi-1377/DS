const arr = [10, 20, 30, 50, 40]

const findArraySortedOrNot = (arr) => {
    for(let i = 0 ; i < arr.length - 1; i++){
        if(arr[i] > arr[i+1]){
            return 0
        }
    }
    return 1
}

console.log(findArraySortedOrNot(arr))