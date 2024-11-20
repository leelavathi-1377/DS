const array = [1, 2, 2, 4, 5]

const findDupliates = (array) => {
    let obj = {}
    const duplicateList = []
    for(let i =0 ; i< array.length ; i++){
        if(!obj.hasOwnProperty(array[i])){
            obj[array[i]]  = 1
        }
        else{
            obj[array[i]]++
        }
    }
    console.log(obj)
    for(let ele in obj){
        console.log(obj[ele])
        if(obj[ele] > 1){
            duplicateList.push(ele)
        }
    }
    return duplicateList
}

console.log(findDupliates(array))