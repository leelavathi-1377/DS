const numberOfOccurence = (arr , x) => {
    const obj = {}
    for(let i = 0 ; i< arr.length ; i++){
        !obj[arr[i]] ? obj[arr[i]] = 1: obj[arr[i]]++
    }
    for(let num in obj){
        if(num == x){
            return obj[num]
        }
    }
}

const arr = [1, 2, 3, 3, 1, 4, 5, 5]
console.log(numberOfOccurence(arr, 1))