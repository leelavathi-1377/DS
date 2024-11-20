//brute force algorithm:--

// const getSumPairToTarget = (arr, target) =>{
//     let pairOfValues = []
//     for(let i=0 ;i<arr.length ; i++){
//         for(let j=i+1 ;j< arr.length;j++){
//             arr[i]+arr[j]===target ? pairOfValues.push([arr[i] , arr[j]]) : null
//         }
//     }
//     return pairOfValues
// }
// const result = getSumPairToTarget([-5 ,1, 40, 20, 6, 8 ,7],15)
// console.log(result)

//binarySearch Algorithm:--

const binarySearch = (arr , k) =>{
    let start = 0 ;
    let end = arr.length - 1
    while(start <= end){
        let middle = Math.floor((start+end)/2)
        if(middle === k){
            return true
        }
        else if(middle < k){
            end = middle - 1 
        }
        else{
            start = middle + 1
        }
    }
    return false
}


const getSumPairToTargetBS = (arr , target) =>{
    let sortedArray = arr.sort()
    for(let i =0 ;i <arr.length ; i++){
        let k = binarySearch(sortedArray , target-arr[i])
        if(k === true){
            return true
        }
    }
    return false
}

const result1 = getSumPairToTargetBS([-5 ,1, 40, 20, 6, 8 ,7],15)
console.log(result1)


//hashing algorithm:---


















