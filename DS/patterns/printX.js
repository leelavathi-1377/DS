let n = 5 
const printX = (n) => {
    let str = " "
    for(let  i =0 ; i < n ;i++){
        for(let j=0 ; j < n ;j++){
            if(i==j || (i+j) == (n-1)){
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

printX(5)