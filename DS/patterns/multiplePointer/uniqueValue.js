
console.log("o(n)")
const findUniqueEle = (arr) =>{
    let countObj = {}
    for(let i = 0 ;i <arr.length ; i++){
        countObj[arr[i]] ? countObj[arr[i]]+1 : countObj[arr[i]] = 1
    }
    return Object.keys(countObj).length
}

const result = findUniqueEle([1,1, 2, 2, 3, 3, 4, 4, 5, 5,6,6,6,6])
console.log(result)

//through arrays


const findUnique = (arr) => {
    let output = []
    for(let i = 0 ; i< arr.length ; i++){
        output.includes(arr[i]) ? undefined : output.push(arr[i])
    }
    console.log(output)
    return output.length
}


const result1 = findUnique([1,2, 3, 4, 5, 5])
console.log(result1)

