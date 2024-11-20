
const pritnHollowRhombus = (n) => {
    let str = ""
    for(let i = 1 ; i <= n ;i ++){
        for(let j = 1 ; j <= n -i ; j++){
            str = str + "  "
        }
        for(let k = 1 ; k <= n ; k++){
            if(k == 1 || k == n || i==1 || i == n){
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
let n = 5
pritnHollowRhombus(n)