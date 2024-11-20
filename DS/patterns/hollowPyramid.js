// // const hollowPyramid = (n) => {
// //     let str = ""
// //     for(let i = 0 ; i < n ;i ++){
// //         for(let j =0 ; j < n ; j++){
// //             if( i > Math.floor((n-1)/2)){
// //                 if( i== j || i+j == n-1 || i == n-1){
// //                     str = str + "* "
// //                 }
// //                 else{
// //                     str = str + "  "
// //                 }
// //             }
// //             else{
// //                 str = str+ ""
// //             }
            
// //         }
// //         str = str + "\n"
// //     }
// //     console.log(str)
// // }


const hollowPyramid = (n) => {
    let str = ""
    for(let i = 1 ; i <= n ; i++){
        for(let j = 1 ; j <= n - i ; j++){
            str = str + "  "
        }
        for(let  k = 0 ; k < 2*i -1 ; k++){
            if( i== 1 || i == n){
                str = str + "* "
            }
            else{
                if(k== 0 || k == 2*i -2){
                    str = str + "* "
                }else{
                    str = str + "  "
                }
            }
        }
        str = str + "\n"
    }
    console.log(str)
}


// const hollowPyramid = (n) => {
//     let str = ""
//     for(let i = 1 ; i <= n ; i++){
//         for(let j = n - i ; j <=  1 ; j--){
//             str = str + "  "
//         }
//         for(let  k = 2*i - 1 ; k < 0 ; k--){
//             str = str + "* "
//         }
//         str = str + "\n"
//     }
//     console.log(str)
// }

hollowPyramid(5)


