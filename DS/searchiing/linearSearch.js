const linearSearch = (arr , k) =>{
    let flag = false
    for(let i=0;i<arr.length ;i++){
        if(arr[i] === k){
            return i 
        }
    }
    return -1
}

const result = linearSearch([1,2 ,3 ,4, 5] , 4)
console.log(result)