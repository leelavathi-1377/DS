const emptyArray = (array) => {
    if(array.length === 0){
        return []
    }
    array.pop();
    return emptyArray(array)
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(emptyArray(array))