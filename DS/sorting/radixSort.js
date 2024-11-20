const digitCount = (num) =>{
    if(num === 0){
        return 1
    }else{
        return Math.ceil(Math.log10(Math.abs(num)))
    }

}


const mostDigits = (num) =>{
    let maxDigits = 0
    for(let  i =0 ; i< num.length ; i++){
        maxDigits = Math.max(maxDigits , digitCount(num[i]))
    }
    return maxDigits 
}

const getDigit = (num , i) =>{
    return Math.floor(Math.abs(num) / Math.pow(10 , i)) %10

}

const radixSort = (nums) =>{
    let maxCount = mostDigits(nums)
    for(let k = 0; k<maxCount ; k++){
        let digitBuckets = Array.from({length :10},()=>[])
        for(let i=0;i<nums.length ; i++){
           digitBuckets[getDigit(nums[i] , k)].push(nums[i])
        }
        nums = [].concat(...digitBuckets)
    }
    return nums
}

const result = radixSort([23 , 345, 5467 , 12 , 2345 , 9852])
console.log(result)