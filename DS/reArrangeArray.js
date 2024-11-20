const reArrangeArray = (arr) => {
    const result = []
    arr.sort((a, b) => a-b)
      let left = 0
      let right = arr.length -1
      while(left <= right){
          result.push(arr[left])
          left++
          result.push(arr[right])
          right--
      }
      if(!result.includes(arr[left]) && left === right){
          result.push(arr[left])
      }
      return result
}

console.log(reArrangeArray([1, 2, 3, 4, 5, 6,7 ,8]))