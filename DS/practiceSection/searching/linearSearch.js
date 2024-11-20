const arr = [18, 12, 9, 14, 77, 50]

const linearSearch = (arr, ele) => {
    for(let i = 0; i< arr.length -1 ;i++){
        if(arr[i] === ele){
            return i
        }
    }
    return -1
}

console.log(linearSearch(arr, 51))