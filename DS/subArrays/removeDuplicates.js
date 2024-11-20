// const removeDuplicates = (arr) => {
//     let obj = {}
//     let duplicates = []
//     for(let ele of arr){
//         if(!obj[ele]){
//             obj[ele] = 1
//         }else{
//             if(obj[ele] === 1){
//                 duplicates.push(ele)
//             }
//             obj[ele]++
//         }
//     }
//     return duplicates
// }

// const arr = [1, 2, 3, 3, 4, 4, 5, 5, 6, 2, 2, 5]
// console.log(removeDuplicates(arr))


// const removeDuplicates = (arr) => {
//     let obj = {}
//     let uniqueArray = []
//     for(let ele of arr){
//         if(uniqueArray.indexOf(ele) === -1){
//             uniqueArray.push(ele)
//         }
//     }
//     return uniqueArray
// }


// const arr = [1, 2, 3, 3, 4, 4, 5, 5, 6, 2, 2, 5]
// console.log(removeDuplicates(arr))