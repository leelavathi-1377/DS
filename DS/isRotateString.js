const str1 = "dylsebxjwlmpamjneoehhlgayxtgs"
const str2 = "lsebxjwlmpamjneoehhlgayxfgsdy"

const rotateString = (str1, str2) => {
    if(str1.length !== str2.length){
        return 0
    }
    const concatenatedString = str1 + str2
    console.log(concatenatedString)
    if(concatenatedString.includes(str2) || concatenatedString.includes(str2.split('').reverse().join(''))){
        return 1
    }
    else{
        return 0
    }
}

console.log(rotateString(str1, str2))