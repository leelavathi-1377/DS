// const str = "leela"
// console.log(str.split('').reverse().join(''))


// const str = "hello mister"
// const arr = str.split(' ')
// for(let i = 0 ; i < arr.length ; i++){
//     var maxLen = 0 
//     if(arr[i].length > maxLen){
//         maxLen = arr[i].length
//     }
// }
// console.log(maxLen)


// const str = "mada"
// console.log(str.split('').reverse().join('') === str)


// const findDuplicate = (str) => {
//     let dup = {}
//     let dupArrayList = []
//     for(let i = 0 ; i < str.length ; i++){
//         !dup[str[i]] ? dup[str[i]] = 1 : dup[str[i]]++
//     }
//     for(let char in dup){
//         if(dup[char] > 1){
//             dupArrayList.push(char)
//         }
//     }
//     return dupArrayList
// }
// const str = "madam"
// console.log(findDuplicate(str))


// const removeDuplicate = (str) => {
//     let obj = {}
//     let duplicateRemovedList = []
//     for(let i = 0 ; i < str.length ; i++){
//         if(!obj[str[i]]){
//             duplicateRemovedList.push(str[i])
//         }
//         obj[str[i]]  =1

//     }
//     return duplicateRemovedList
// }

// const str = "madam"
// console.log(removeDuplicate(str))


// const numberOfVowels = (str)=> {
//     const vowels = ['a', 'e' , 'i', 'o', 'u']
//     let count = 0
//     for(let i = 0 ; i < str.length ; i++){
//         if(vowels.includes(str[i])){
//             count++
//         }
//     }
//     return count
// }

// const str = "leela"
// console.log(numberOfVowels(str))


// const findLargestNumber = (arr) => {
//     let max = Number.MIN_VALUE
//     return arr.reduce((acc , cur) => {
//         if(cur > acc){
//             return max = cur
//         }
//     },max)
// }


// const arr = [1, 2,3, 4, 5]
// console.log(findLargestNumber(arr))


// const primeOrNot = (num) => {
//     if(num <= 1) return false
//     if(num <=3 )return true
//     if(num%2 === 0 || num%3 ===0) return false
//     for(let i = 5 ; i * i <= num ; i += 6){
//         if(num % i === 0 || num % (i+2) === 0) return false
//     }
// }

// const num = 3
// console.log(primeOrNot(num))


// const num = 5

// const factOfNumber = (num) =>{
//     if( num === 0 || num === 1){
//         return 1
//     }
//     return factOfNumber(num-1)*num
// }

// console.log(factOfNumber(num))


// const str = "hii leela how are you"
// console.log(str.split(' ').join(''))


// console.log(typeof(42.1))


str();

const res = () => {
    console.log("hiii")
}

function str(){
    console.log("hiii")
}

// const str = () => {
//     console.log("hiii")
// }
