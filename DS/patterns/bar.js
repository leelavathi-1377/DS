const printBar = (n) => {
    let str = ""
    for(let i = 0 ; i < n ; i++){
        for(j = 0 ; j < n ;j++){
            if(j == 1 || j == n-1){
                str = str +  "* "
            }
            else{
                str = str +  "  "
            } 
        }
        str = str +  "\n"
    }
    console.log(str)
}

printBar(5)