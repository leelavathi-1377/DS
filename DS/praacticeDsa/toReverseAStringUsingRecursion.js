const programToReverseAStringUsingRecursion = (str , r , i) => {
    if(i < 0 ){
        return r
    }
    return programToReverseAStringUsingRecursion(str ,  r + str.charAt(i), i -1 )
}

const str = "leela"
console.log(programToReverseAStringUsingRecursion(str  , "" , str.length)) 