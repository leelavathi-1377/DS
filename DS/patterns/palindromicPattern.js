const printPalindromicPattern = (n) => {
    let str = ""
    for(let i = 0 ; i <= n ; i++){
        for(let j=0 ; j <= n ; j++){
            str = str + "  "
        }
        for(let  k = 0 ; k <= n ; k++){
            str = str + "* "
        }
    }
}

printPalindromicPattern(5)