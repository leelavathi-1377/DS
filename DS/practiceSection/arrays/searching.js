const arr = [1, 3, 6, 7, 2]

const searching = (arr, key) => {
    for(let i = 0; i< arr.length ;i++){
        if(arr[i] === key){
            return i
        }
    }
}

console.log(searching(arr, 3))

// TC: O(N)
// SC: O(1)