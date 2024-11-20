const n = 5;

const printPlus = (n) => {
    let str = ""
    for(let i = 0 ; i< n ;i++){
        for(let j = 0 ; j < n ; j++){
            if(i== Math.floor(n/2) || j == Math.floor(n/2)){
                str = str + " *"
            }
            else{
                str = str + "  "
            }
        }
        str = str + "\n"
    }
    console.log(str)
}

printPlus(5)
