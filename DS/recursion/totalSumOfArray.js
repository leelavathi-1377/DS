const totalSumOfAnArray = (arr , i) =>{
    if(i>=arr.length){
        return;
    }
    return arr[i] + totalSumOfAnArray(arr , i+1)
}
let arr= [1,2,3,4,5]
console.log(totalSumOfAnArray(arr , 0))