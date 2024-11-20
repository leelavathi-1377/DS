const twoPointerTechnique = (arr, target) => {
    let left = 0 
    let right = arr.length - 1;
    let cSum = 0;
    while(left < right){
        cSum = arr[left] + arr[right]
        console.log(cSum,  "???")

        if(cSum === target){
            return [left + 1, right + 1]
        }

        else if(cSum < target){
            left ++ 
        }

        else{
            right --
        }
    }
}


const arr = [1,2,3,4,5]
console.log(twoPointerTechnique(arr, 7))