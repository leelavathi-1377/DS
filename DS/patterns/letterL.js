const printLetterL = (n) => {
    let str = ""
    for(let  i =0 ; i< n ;i ++){
        for(let j =0 ; j< n ; j++){
            if(j ==0 || i== n -1 ){
                str = str + "* "
            }
            else{
                str = str + "  "
            }
        }
        str = str + "  "
        for(let j =0 ; j< n ; j++){
            if(i == 0 || i == n-1 || j == 0 || i == (n-1)/2){
                str = str + "* "
            }
            else{
                str = str + "  "
            }
        }
        str = str + "  "
        for(let j =0 ; j< n ; j++){
            if(i == 0 || i == n-1 || j == 0 || i == (n-1)/2){
                str = str + "* "
            }
            else{
                str = str + "  "
            }
        }
        str = str + "  "
        for(let j =0 ; j< n ; j++){
            if(j ==0 || i== n -1 ){
                str = str + "* "
            }
            else{
                str = str + "  "
            }
        }
        str = str + "  "
        for(let j = 0 ; j <= n - i ; j++){
            str = str + "  "
        }
        for(let  k = 0 ; k < 2*i -1 ; k++){
            if( i== 1 || i == Math.ceil(n/2)){
                str = str + "* "
            }
            else{
                if(k== 0 || k== 2*i -2){
                    str = str + "* "
                }else{
                    str = str + "  "
                }
            }
        }
        str = str + "  "
        str = str + "\n"
    }

    console.log(str)
}

printLetterL(5)