function findFirstKOccurrence(arr, k) {
    const obj  = {};
    for (const num of arr) {
        !obj[num] ? obj[num] = 1 : obj[num]++
        if(obj[num] === k){
            return num
        }
    }

    return -1;
}

const arr = [3, 1, 2, 2, 1, 3, 4, 5, 4];
const k = 2;
console.log(findFirstKOccurrence(arr, k))
