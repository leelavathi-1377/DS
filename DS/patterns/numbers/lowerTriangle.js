// const printLowerTraingle = (n) => {
//     let str = ""
//     for(let i= 1; i <= n  ;i++){
//         for(let j=1 ; j <= n - i; j++){
//             str = str + j
//         }
//         str = str + "\n"
//     }
//     console.log(str)
// }

// printLowerTraingle(5)


// const printLowerTraingle = (n) => {
//     let str = ""
//     for(let  i = 1 ; i <= n ; i++){
//         for(let j = 1 ; j <= i ; j++){
//            str = str + ((i+j)%2 === 0 ? "0" : "1");
//         }
//         str = str + "\n"
//     }
//     console.log(str)
// }
// printLowerTraingle(5)


const printLowerTraingle = (n) => {
    let str = ""
    for(let  i = 1 ; i <= n ; i++){
        for(let j = 1 ; j <= i ; j++){
           str = str + (j%2 === 0 ? "0" : "1");
        }
        str = str + "\n"
    }
    console.log(str)
}
printLowerTraingle(5)


