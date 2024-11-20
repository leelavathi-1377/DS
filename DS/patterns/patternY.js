const printY = (n) => {
    let str = ""
    for(let i =0 ; i< n ;i++){
        for(let j =0 ; j< n ; j++){
            if(i < Math.floor(n-1)/2){
                if(i == j || i+j == n-1){
                    str = str + "* "
                }
                else{
                    str = str + "  "
                }
            }
            else{
                if(j == Math.floor(n/2)){
                    str = str + "* "
                }
                else{
                    str = str + "  "
                }
            }
        }
        str = str + "\n"
    }
    console.log(str)
}

printY(9)