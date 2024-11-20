const printTraingle = (n) => {
    let str = ""
    for(let i = 0 ; i < n ; i++){
        for(let  j = 0 ; j <= i ; j++){
            str = str + "* "
        }
        str = str + "\n"
    }
    console.log(str)

}

const n = 5
printTraingle(n)