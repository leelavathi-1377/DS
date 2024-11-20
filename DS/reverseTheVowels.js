//process -1
//108ms
// const reverseVowel = (s) => {
//     const vowels = ['a', 'e', 'i', 'o', 'u']
//     const arr = s.split('')
//     let vowelIndexObj = {}

//     for(let i = 0 ; i < arr.length ; i++){
//         if(vowels.includes(arr[i])){
//             vowelIndexObj[i] = arr[i]
//         }
//     }
//     let keys = Object.keys(vowelIndexObj)
//     for(let i = 0 ; i < keys.length ; i++){
//         let vowelIndex = keys[i]
//         let reverseVowel = vowelIndexObj[keys[keys.length-i-1]]
//         arr[vowelIndex] = reverseVowel
//     }

//     return arr.join('')
// }

// const reverseVowel = (s) => {
//     let arr = s.split('')
//     let start = 0
//     let end = arr.length - 1
//     const vowels  = ['a' , 'e' , 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

//     while(start <= end){
//         let startVowel = vowels.includes(arr[start])
//         let endVowel = vowels.includes(arr[end])
//         if(startVowel && endVowel){
//             [arr[start] , s[end]] = [s[end] , s[start]]
//             start++
//             end--
//         } 
//         else{
//             if(!startVowel){
//                 start++
//             }
//             if(!endVowel){
//                 end--
//             }
//         }
//     }
//     return arr.join('')
// }


var reverseVowels = function(s) {
    if(s.length == 0 || s.length == 1) return s;
    const vowels = ['a','e','i','o','u','A','E','I','O','U'];
    s = s.split('')
    let start = 0;
    let end = s.length - 1;
    while(start <= end){
      let isStartVowel = vowels.includes(s[start]);
      let isEndVowel = vowels.includes(s[end])
      if(isStartVowel && isEndVowel) {
        [s[start],s[end]] = [s[end],s[start]];
        start++;
        end--;
      }else {
        if(!isStartVowel){
          start++;
        }
        if(!isEndVowel){
          end--;
        }
      }
    }
  return s.join('')
};




const s = 'hello'
console.log(reverseVowels(s))