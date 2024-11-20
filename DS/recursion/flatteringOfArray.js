let resultArr = []
let arr = [2,[3,12,24],17,[54,[24,3],8]];
const flatteringOfArray = (arr , i) => {
    if(i>=arr.length){
        return;
    }
    if(Array.isArray(arr[i])){
        flatteringOfArray(arr[i] , 0)
    }
    else{
        resultArr.push(arr[i])
    }
    flatteringOfArray(arr , i+1)
}
const res = flatteringOfArray(arr, 0)
console.log(resultArr)



