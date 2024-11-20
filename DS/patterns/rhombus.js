const printRhombus = (n) => {
    let str = ""
    for(let i=1 ; i <= n ; i++){
        for(let j=1; j<= n - i; j++){
            str = str + "  "
        }
        for(let k=1; k<=n; k++){
            str = str + "* "
        }
        str = str + "\n"
    }
    console.log(str)
}

printRhombus(5)