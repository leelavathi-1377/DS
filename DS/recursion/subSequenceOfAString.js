const findTheSubSequence = (str, ans, newArr) => {
    if (str.length === 0) {
        newArr.push(ans);
        return newArr;
    }
    
    newArr = findTheSubSequence(str.substring(1), ans + str.charAt(0), newArr);
    newArr = findTheSubSequence(str.substring(1), ans, newArr);

    return newArr;
}

const str = "abc";
const newArr = [];
const result = findTheSubSequence(str, "", newArr);
console.log(result);
