const missingNumberInAnArray = (arr) => {
    let list = []
    for(let i = 0; i < arr.length ; i++){
        list.push(arr[i])
    }

    for(let i = 0;i < arr.length ; i++){
        if(!list.includes(arr[i])){
            return list[i]
        }
    }
}

const arr = [1, 2, 3, 5]
console.log(missingNumberInAnArray(arr))