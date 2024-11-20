const str = "geeks for geeks"

const reverAlt = (str) => {
    const split = str.split(' ')
    console.log(split)
    let reversedStr = []
    for(let  i = 0 ; i < split.length ; i++){
        if(i%2 === 1){
            reversedStr.push(split[i].split('').reverse().join(''))
        }
        else{
            reversedStr.push(split[i])
        }
    }
    return reversedStr.join(' ')
}

console.log(reverAlt(str))


