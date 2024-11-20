
console.log("Downward right traingle")
let str = ""
const n = 5 ;
for(let i=1 ; i<=n ;i++){
    for(let j=0 ; j<i ;j++){
        if(i==n){
            str += "*"
        }
        else{
            if(j==0 || j== i-1){
                str +="*"
            }
            else{
                str += " "
            }
        }
    }
    str += "\n"
}
console.log(str)