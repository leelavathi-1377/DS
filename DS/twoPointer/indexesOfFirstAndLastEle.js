const indexesOfTheFirstAndLastEle = (arr, ele) => {
    let i = 0 
    let j = arr.length - 1
    let firstIndex = -1
    let lastIndex = -1
    let result = []
    while( i <= j){
        // console.log(arr[i] , arr[j])
        if(arr[i] == ele && firstIndex == -1){
            firstIndex = i
        }
        if(arr[j] == ele && lastIndex=== -1){
            lastIndex = j
        }
        if(arr[i] !== ele){
            i++
        }
        if(arr[j] !== ele){
            j--
        }
    }
    result.push([firstIndex , lastIndex])
    console.log(result , ":::::::::")
    return result
}

const arr = [1, 3, 5, 5, 5, 5, 67, 123, 125]
const ele = 5
console.log(indexesOfTheFirstAndLastEle(arr, ele))