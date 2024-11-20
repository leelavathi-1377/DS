function kthLargestElement(arr, k) {
    // Helper function to count elements greater than or equal to mid
    function countGreaterThanOrEqual(mid) {
      let count = 0;
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= mid) {
          count++;
        }
      }
      return count;
    }
  
    let low = Math.min(...arr);
    let high = Math.max(...arr);
  
    while (low < high) {
      const mid =  Math.floor((high + low) / 2);
      const count = countGreaterThanOrEqual(mid);
  
      if (count < k) {
        high = mid;
      } else {
        low = mid + 1;
      }
    }
  
    return low - 1;
  }
  
  // Example usage:



  const arr = [3, 1, 4, 1, 5, 9, 2, 6];
  const k = 3;
  const result = kthLargestElement(arr, k);
  console.log(result); // Output: 4
  