const hollowRightTraingle = (n) => {
    let str = ""
    for(let i = 0 ; i < n ; i++){
        for(let j =0 ; j< n; j++){
            if(i == n - 1 || j == n-1 || i+j == n-1){
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

hollowRightTraingle(5)
