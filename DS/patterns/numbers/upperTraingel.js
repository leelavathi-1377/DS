// const upperTraingle = (n) => {
//     let str = ""
//     for(let i = 1 ; i<= n ; i++){
//         for(let j = 1 ; j <= i ; j++){
//             str = str + j
//         }
//         str = str + "\n"
//     }
//     console.log(str)
// }

// upperTraingle(5)



// const upperTraingle2 = (n) => {
//     let str = ""
//     for(let i = 1 ; i <= n ; i++){
//         for(let j = 1 ; j <= n - i ; j++){
//             str = str + "  "
//         }
//         for(let k = 0 ; k < i ; k ++ ){
//             str = str + " " + (k+1)
//         }
//         str = str + "\n"
//     }
//     console.log(str)
// }

// upperTraingle2(5)


const upperTraingle3 = (n) => {
    let str = ""
    let sum = 0
    for(let i = 1 ; i<= n ; i++){
        for(let j = 1; j <= n - i ; j++){
            str = str + "  "
        }
        for(let k = 0 ; k < i ; k++){
            str = str + " " + (sum+1)
            sum++
        }
        str = str + "\n"
    }
    console.log(str)
}

upperTraingle3(5)