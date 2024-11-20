const closestPair = (arr, x) => {
    let i = 0 
    let j = arr.length - 1
    let diff = Number.MAX_VALUE
    let result
    while(i < j){
        let curr_sum = arr[i] + arr[j]
        let curr_diff = abs(curr_sum - x)
        if(curr_diff < diff){
            result.push([arr[i] , arr[j]])
            diff = curr_diff
        } 

        if(curr_sum > x){
            j--
        }
        else{
            i++
        }
    }
    return

}

const arr = [1,2 , 3, 4, 5]
const x = 7
console.log(closestPair(arr, x))