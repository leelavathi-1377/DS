let n = 5 ;
function printZ (n){
    let str = ""
    for(let i = 0 ; i< n ; i++){
        for(let j =0 ; j < n ; j++){
            if(i == 0 || i == n-1 || (i+j) == n){
                str = str + "*"
            }
            str = str + " "
        }
        str = str + "\n"
    }
    console.log(str)
}
printZ(5);