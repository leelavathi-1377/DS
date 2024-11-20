function rotateArray(arr, positions) {
    const n = arr.length;
    if (n <= 1) {
        return arr;
    }
    const normalizedPositions = ((positions % n) + n) % n;

    if (normalizedPositions === 0) {
        return arr;
    }

    const rotatedArr = [];
    for (let i = 0; i < n; i++) {
        rotatedArr[i] = arr[(i + normalizedPositions) % n];
    }

    return rotatedArr;
}

const myArray = [1, 2, 3, 4, 5];
const rotatedArray = rotateArray(myArray, 2);
console.log(rotatedArray); 
