let n = 5
const numberPyramid = (n) => {
    let str = ""
    for(let i = 1 ; i <= n ; i++){
        for(let j = 1 ; j <= n - i ; j++){
            str = str + "  "
        }
        for(let  k = 1 ; k < 2*i - 1;k++){
            if(i == 1 || i == n){
                str = str + " " + 1
            }
            else{
                if(k == 1 || k == 2*i - 2){
                    str = str + " " + 1
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

numberPyramid(n)













