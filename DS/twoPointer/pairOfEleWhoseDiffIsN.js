const pairOfArrWhoseDiffIsN = (arr, n) => {
    let i = 0 
    let j = arr.length - 1
    let result = []
    while(i < j){
        let curr_diff = arr[i]  - arr[j]
        if(Math.abs(curr_diff) === n){
            result.push([arr[i] , arr[j]])
            j--
            i++
        }
        else if(curr_diff > n){
            i++
        }
        else{
            j--
        }
    }
    return result

}

const arr = [1, 2, 3, 4, 5, 6, 7]
const n = 4
console.log(pairOfArrWhoseDiffIsN(arr, n))