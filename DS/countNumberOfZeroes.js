const arr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0];

const findNumberOfZeroes = (arr) => {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let mid =  Math.floor((right + left) / 2);

        if (arr[mid] === 1) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return arr[left] === 0 ? arr.length - left : 0;
}

console.log(findNumberOfZeroes(arr));
