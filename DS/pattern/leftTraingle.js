console.log("left angle traingle")
let str = ""
const n = 5
for(let i=1 ;i<=n;i++){
    let j =1 
    for(j=1;j<=i ; j++){
        str +="*"
    }
    for(let k=j+1 ; k<n ;k++){
        str += " "
    }
    str += "\n"
}
console.log(str)

// console.log("left traingel second method")
// let str = ""
// const n = 5
// for(let i=1 ;i<=n;i++){
//     for(let j=0;j<i ; j++){
//         str += "*"
//     }
//     str +="\n"
// }
// console.log(str)