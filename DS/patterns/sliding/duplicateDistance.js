//iteratice method
//find the duplicate distance between two elements in an array
// const duplicateDistance = (arr) =>{
//     let duplicateEle = []
//     for(let i = 0; i< arr.length ; i++){
//         for(let j=i+1; j<arr.length ; j++){
//             if(arr[i] === arr[j]){
//                 duplicateEle.push(`${arr[i]} with distance  ${j - i}`)
//             }
//         }
//     } 
//     return duplicateEle   
// }

// const result = duplicateDistance([1,3,2,4,5,1,2])
// console.log(result)

//find the duplicate distance between two elements is the distance is greater than the given k value
const getDuplicateDistance = (arr , k )=>{
    let duplciatesArray = []
    for(let i =0 ; i<arr.length ; i++){
        for(let j =i+1 ; j<arr.length; j++){
            if(arr[i] === arr[j] && j-i<k){
                duplciatesArray.push(`duplicate element ${arr[i]}  with distance ${j-i}`)
            }
        }
    }
    if(duplciatesArray.length){
        return duplciatesArray
    }
    return -1
}

const result1 = getDuplicateDistance([1,3,2,4,5,1,2,3] , 3)
console.log(result1)