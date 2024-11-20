const sumOfInnerArrayElements = (array) => {
    let total = 0
    for(let item of array){
        if(Array.isArray(item)){
            total = total +  sumOfInnerArrayElements(item)
        }else{
            total = total + item
        }
    }
    return total
}

const result = sumOfInnerArrayElements([1 , [2 , 3], 3, [4], 5])
const result2 = sumOfInnerArrayElements([1,[2], [3, 4, 5],[[[[[[[[[[[[[[[[[[6]]]]]]]]]]]]]]]]]]]);
console.log(result2)
console.log(result)