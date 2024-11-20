let str = ""
for(let i=0 ; i< 5 ; i++){
    for(let j=0 ;j <=i ; j++){
        str += "*"
    }
    str += "\n"
}
console.log(str)


let str1= ""
let n= 5
for(let i= 0 ; i<n;i++){
    for(let j= 0; j<n-1 ;j++){
        str1 += "*"
    }
    str1 +="\n"
}
console.log(str1)

let str2= ""
for(let i= 0 ; i<n; i++){
    for(let j= n; j<n-i ;j++){
        str2 += "*"
    }
    str2 +="\n"
}
console.log(str2)