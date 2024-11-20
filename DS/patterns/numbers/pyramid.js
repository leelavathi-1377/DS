const numberPyramid = (n) =>{
    let str = ""
    for(let i =1 ; i <= n ;i++){
        for(let j=1 ; j <= n-i;j++){
            str = str + "  "
        }
        for(let k=1; k<= 2*i-1 ;k++){
            str = str + " " + k
        }

        str = str + "\n"
    }
    console.log(str)
}

numberPyramid(5)