
console.log("hallow square")
let n=5
let str1 = ""
for(let i= 0 ; i<n ; i++){
    for(let j=0; j<n ;j++){
        if(i==0 || i==n-1){
            str1 += "*"
        }
        else{
            if(j==0 || j==n-1){
                str1 += "*"
            }
            else{
                str1 += " "
            }
        }
    }
    str1 +="\n"
}
console.log(str1)
