// const checkPalindrome = (str) =>{
//     const reverseOfStr = str.split('').reverse()
//     return str === reverseOfStr.join('')
// }


// const checkPalindrome = (str) => {
//     const givenStr = str
//     let left = 0
//     let right = str.length - 1
//     let strArray = str.split('')
//     while(left < right){
//         let temp = strArray[left]
//         strArray[left] = strArray[right]
//         strArray[right] = temp
//         left++
//         right-- 
//     }
//     return givenStr === strArray.join('')
// }


const checkPalindrome = (str) => {
    for(let i = 0 ; i < str.length/2 ; i++){
        if(str[i] !== str[str.length - i - 1]){
            return false
        }
    }
    return true
}

console.log(checkPalindrome("madam"))