const downPyramis = (n) => {
    let str = ""
    for(let i = 1 ; i<= n-1 ; i++){
        for(let j = 0 ; j < i ;j++){
            str = str + "  "
        }
        for(let k = (n-i)*2 - 1;k>0; k--){
            str = str + "* "
        }
        str = str + "\n"
    }
    console.log(str)
}

downPyramis(5);