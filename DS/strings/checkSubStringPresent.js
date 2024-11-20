// const checkIfTheSubStringPresent = (str, str2) => {
//     let ele
//     let isFound = false
//     for(let i = 0 ; i < str.length ; i++){
//         for(let j = i + 1; j < str.length ; j++){
//             ele = str.substring(i ,  j+1)
//             if(ele === str2){
//                 isFound = true
//             }
//         }
//     }
//     if(isFound){
//         return "Yes"
//     }else{
//         return "No"
//     }
// }



const checkIfTheSubStringPresent = (str, str2) => {
    for(let i = 0 ; i < str.length  - str2.length; i++){
        if(str.substring(i ,  i + str2.length) === str2){
            return "Yes"
        }
    }
    return "No"
}



const str = "GeeksForGeeks"
const str2 = "ForG"
console.log(checkIfTheSubStringPresent(str , str2))



