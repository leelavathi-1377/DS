const getOddOccuredEle = (arr) => {
    let obj = {}
    let num 
    for(let i = 0 ; i < arr.length ; i++){
        !obj[arr[i]] ? obj[arr[i]] = 1 : obj[arr[i]]++
    }
    for(let ele of arr){
        if(obj[ele] !== 2){
            num = ele 
        }
    }
    return num
}

const arr = [8, 8, 7, 7, 6, 6, 1]
console.log(getOddOccuredEle(arr))