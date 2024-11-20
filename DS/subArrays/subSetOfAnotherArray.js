function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}



const findSubSetOfAnotherArray = (a1 , a2) => {
    let n = arr1.length
    let totalArray = []
    let isFound = false
    for(let i = 0 ; i < n ; i++){
        for(let j = i ; j < n ; j++){
            let subArray = a1.slice(i , j + 1)
            totalArray.push(subArray)
        }
    }
    for(let eachArr of totalArray){
        if(arraysEqual(eachArr, a2)){
            isFound = true
        }
    }
    if(isFound){
        return "Yes"
    }
    else{
        return "No"
    }
}
const arr1 = [13, 4, 5, 6, 7]
const arr2 = [13, 4, 7]
console.log(findSubSetOfAnotherArray(arr1 , arr2))


// function isSubset(a1, a2, n, m) {
//     const setA1 = new Set(a1);
//     const setA2 = new Set(a2);

//     for (let element of setA2) {
//         if (!setA1.has(element)) {
//             return "No";
//         }
//     }

//     return "Yes";
// }

// const a1 = [1, 2, 3, 4, 5];
// const a2 = [4, 3];
// const n = a1.length;
// const m = a2.length;

// console.log(isSubset(a1, a2, n, m)); // "Yes"


// function isSubset(a1, a2) {
//     for (const element of a2) {
//         if (!a1.includes(element)) {
//             return false;
//         }
//     }
//     return true;
// }

// const a1 = [1, 2, 3, 4, 5];
// const a2 = [3, 4, 5];
// const result = isSubset(a1, a2);
// console.log(result);  // true
