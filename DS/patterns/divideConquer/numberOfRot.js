//number of rotations are equal to the number of elements before the minimum element
//so find minimum element in the array using binary search 

const binarySearch = (arr) =>{
    let start = 0
    let end = arr.length - 1
    let middle = Math.floor((start+end))/2
    while(start<= end){
        if(middle === ele){
            return middle
        }
        else if(ele < arr[middle]){
            end = middle - 1
        }
        else{
            start = middle + 1
        }        
    }
}

const result = binarySearch([8, 9, 10, 2, 5, 6])
console.log(result)
