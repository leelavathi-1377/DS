const printHollowSquare = (n) => {
    let str = ""
    for(let i = 0 ; i < n ; i++){
        for(let j = 0 ; j < n ; j ++){
            if(i == 0 || j == 0 || i == n-1 || j == n-1){
                str = str + "* "
            }
            else{
                str = str + "  "
            }
        }
        str = str + "\n"
    }
    console.log(str)
}

printHollowSquare(5)