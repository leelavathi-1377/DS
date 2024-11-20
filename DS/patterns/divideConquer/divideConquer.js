//can tremoundously decrease the time complexity
//binary search 

const search = (arr, val ) =>{
    let min =0 ;
    let max = arr.length -1 
    while(min<=max){
        let middle = Math.floor((min+max)/2)
        let currentEle = arr[middle]
        if(arr[middle] < val){
            min = middle+1
        }
        else if(arr[middle] > val){
            max = middle -1
        }
        else{
            return middle
        }
    }
    return -1
}


const result = search([1,2, 3,6, 4, 1, 10,7,8,9], 9)
console.log(result)