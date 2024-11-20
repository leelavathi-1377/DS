const printAlternativeEle = (arr) => {
    let alterEle = []
    for(let i = 0 ; i < arr.length ; i++){
        if(i%2 === 0){
            alterEle.push(arr[i])
        }
    }
    return alterEle
}

const arr = [1, 2, 3, 3, 4, 4, 5, 5, 6, 2, 2, 5, 2];
console.log(printAlternativeEle(arr))