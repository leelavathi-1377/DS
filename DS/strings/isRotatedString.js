const isRotatedString = (str1 ,str2) => {
    const arr = str1.split('')
        let rotateArr = []
        for(let i = 0 ; i < arr.length ; i++){
            rotateArr[i] = arr[(i+2)%str1.length]
        }
        let rotatedStr = rotateArr.join('')
        if(rotatedStr === str2){
            return 1
        }else{
            return 0
    }
}

const a = "amazon"
const b = "azonam"
console.log(isRotatedString(a, b))