const swap = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

const findPermutationsOfStr = (str, fi, permutationArray) => {
    if (fi === str.length - 1) {
        permutationArray.push(str.join(''));
    }

    for (let i = fi; i < str.length; i++) {
        swap(str, i, fi);
        findPermutationsOfStr(str, fi + 1, permutationArray);
        swap(str, i, fi); // Backtrack to the original array
    }

    return permutationArray;
}

const arr = ['A', 'B', 'C'];
const permutations = findPermutationsOfStr(arr, 0, []);
console.log(permutations);
