// const removeDuplicates = (arr) =>{
//     let out = []
//     for(let i = 0 ; i<arr.length ;i++){
//         if(!out.includes(arr[i])){
//             out.push(arr[i])
//         }
//     }
//     return out

// }





const removeDuplicates = (arr) => {
    let obj = {}
    for(let i = 0 ;i < arr.length ; i++){
        obj[arr[i]] ? obj[arr[i]] = 1 : obj[arr[i]]++
    }
    return Object.keys(obj)
}

const arr =  [1, 5, 2, 2, 3, 4, 4, 5]
console.log(removeDuplicates(arr))