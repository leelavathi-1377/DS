const findNegativeNumber = (arr) => {
    for(let ele of arr){
        if(ele < 0){
            return ele
        }
    }
    return 0
}


const negativeNumberInSubArray = (arr,  k) => {
    let list = []
    let windowArrList = []
    for(let i = 0 ; i < arr.length ; i++){
        const windowArr = arr.slice(i, i + k)
        windowArrList.push(windowArr)
        const result = findNegativeNumber(windowArr)
        list.push(result) 
    }
    console.log(windowArrList)
    return list
}


const arr = [-8,2, 3, -6, 10]
console.log(negativeNumberInSubArray(arr , 2))