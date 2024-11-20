const findMajorityOfElement = (arr) => {
    let frequency = {}
    let majorityElementsArray = []
    let n = Math.floor(arr.length/2);
    for(let i = 0 ; i < arr.length ; i++){
        !frequency[arr[i]] ? frequency[arr[i]] = 1 : frequency[arr[i]]++ 
    }
    for(let num in frequency){
        if(frequency[num] > n){
            majorityElementsArray.push(num)
        }
    }
    return majorityElementsArray
}

const arr = [3, 2, 3 , 2, 3]
console.log(findMajorityOfElement(arr))