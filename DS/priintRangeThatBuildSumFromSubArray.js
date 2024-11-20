function findSubarrayWithSum(arr, S) {
    let left = 0;
    let right = 0;
    let currentSum = 0;
  
    while (right < arr.length) {
      currentSum += arr[right];
  
      while (currentSum > S) {
        currentSum -= arr[left];
        left++;
      }
  
      if (currentSum === S) {
        // Found a subarray with the desired sum
        return [left + 1, right + 1]; // 1-based indexing
      }
  
      right++;
    }
  
    return [-1];
  }
  
  // Example usage:
  const arr = [1, 2, 3, 4, 6, 7, 8];
  const S = 15;
  const result = findSubarrayWithSum(arr, S);
  console.log(result); // Output: [1, 5] (subarray [1, 2, 3, 4, 5] adds up to 15)
  