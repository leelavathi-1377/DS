const secondMaxValue = (arr) => {
    let firstMax = arr[0];
    let secondMax = arr[1];
    
    if (secondMax > firstMax) {
        [firstMax, secondMax] = [secondMax, firstMax];
    }
    
    for (let i = 2; i < arr.length; i++) {
        if (arr[i] > firstMax) {
            secondMax = firstMax;
            firstMax = arr[i];
        } else if (arr[i] > secondMax && arr[i] !== firstMax) {
            secondMax = arr[i];
        }
    }
    
    return {secondMax, firstMax}
}

const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(secondMaxValue(arr)); 
