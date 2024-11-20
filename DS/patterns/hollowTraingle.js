const hollowTraingle = (n) => {
    let str = ""
    for(let i =0 ; i< n ;i++){
        for(let j =0 ; j < n ; j++){
            if(j == 0 || i == n -1 || i == j){
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

hollowTraingle(5)