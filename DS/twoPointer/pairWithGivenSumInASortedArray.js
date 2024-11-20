const pairWithGivenSumInASortedArray = (arr, x) => {
    let  i = 0
    let j = arr.length - 1
    let result = []
    while(i < j ){
        let curr_sum = arr[i] + arr[j]
        if(curr_sum === x){
            result.push([arr[i] , arr[j]])
            i++
            j--
        }
        else if(curr_sum  > x){
            j--
        }
        else{
            i++
        }
    }
    return result

}

const arr = [1, 2, 3, 4, 5, 6, 7]
const x = 7
console.log(pairWithGivenSumInASortedArray(arr, x))