//iterative method :---
const binarySearch =(arr , elem) => {
    let start = 0;
    let end = arr.length-1
    while(start<=end){
        let middle = Math.floor((start+end)/2)
        if(arr[middle] === elem ){
            return middle
        }
        else if(elem < arr[middle]){
            end = middle -1 
        }
        else{
            start = middle +1
        }
    }
    return -1
}
const result = binarySearch([1,2, 3,4,5] , 3)
console.log(result)



