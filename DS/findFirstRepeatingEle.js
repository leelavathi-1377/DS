const findFirstRepeatingEle = (arr) => {
    let lastIndex = {}
    let firstRepeatingIndex = arr.length + 1
    for(let i = 0 ; i < arr.length ; i++){
        if(lastIndex[arr[i]] !== undefined){
            firstRepeatingIndex = Math.min(firstRepeatingIndex , lastIndex[arr[i]])
        }else{
            lastIndex[arr[i]] = i + 1
        }
    }
    if(firstRepeatingIndex !== arr.length + 1){
        return firstRepeatingIndex
    }
    else{
        return -1
    }

}

const arr = [1,5,5, 4, 5, 4]
console.log(findFirstRepeatingEle(arr))