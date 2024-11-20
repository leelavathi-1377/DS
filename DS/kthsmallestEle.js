const countOfEleLessThanMid = (arr, mid) => {
    return arr.reduce((count, cur)=>{
        if(cur < mid){
            count++
        }
        return count
    } , 0)
}
const findKthSmallestEle = (arr , k) => {
    let lowValue = Number.MAX_VALUE;
    let highValue = Number.MIN_VALUE;

    for(let i = 0 ; i < arr.length ; i++){
      lowValue = Math.min(arr[i] , lowValue); 
      highValue = Math.max(arr[i] , highValue); 
    }

    while(lowValue < highValue){
        var mid = Math.floor(lowValue + ((highValue - lowValue) / 2));
        const count = countOfEleLessThanMid(arr, mid);
        if(count < k)
        lowValue = mid + 1;
          
     else
         highValue = mid;
    }
    return lowValue

}

var nums = [1, 4, 5, 3, 19, 3];
console.log(findKthSmallestEle(nums , 2))