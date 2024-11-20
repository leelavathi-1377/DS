//Iterative Method:--
//pair of sum is zero
console.log("o(n2)")
const sumZero = (arr)=> {
    for(let i=0 ; i<arr.length ; i++){
        for(j=i+1 ; j< arr.length ; j++){
            if(arr[i] + arr[j] === 0){
                return [i , j]
            }
        }
    }
    return 
}
const result = sumZero([-3, 1, -2, -1, 9])
console.log(result)

console.log("o(n)")

const sumPairZero1 = (arr) =>{
    let left = 0
    let right = arr.length - 1
    while(left < right){
        let sum = (arr[left]+arr[right])
        if(sum === 0){
            return [left , right]
        }
        else if(sum>0){
            right--
        }
        else{
            left++
        }
    }
}
const result1 = sumPairZero1([-3, 1, -2, -1, 9])
console.log(result1)

 

