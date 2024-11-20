const target = 9
const arr = [7,2,3,1]

const getTwoSum = (arr, n) =>{
    const map = {}
    for(let  i = 0; i< arr.length ; i++){
        map[arr[i]] ? map[arr[i]] += 1 : map[arr[i]] = 1
    }
    console.log(map)
    for(let i =0 ;i <arr.length ; i++){
        pair = target - arr[i]
        if(map[pair]){
            return [map[pair] , i]
        }
    }
}
console.log(getTwoSum(arr ,  target)
)


//iterative method:--


const get2Sum = (arr , target) =>{
    for(let i =0 ; i <arr.length ; i++){
        for(j = i+1 ; j<arr.length ; j++){
            if(arr[i] + arr[j] === target){
                return [i , j]
            }
        }
    }
}
console.log(get2Sum(arr , target))

