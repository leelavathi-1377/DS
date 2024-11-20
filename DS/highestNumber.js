function findHighestElement(arr) {
    const n = arr.length;
  
    if (n === 0) {
      return null; // Empty array
    }
  
    let left = 0;
    let right = n - 1;
  
    while (left < right) {
      const mid = Math.floor(left + (right - left) / 2);
  
      if (arr[mid] > arr[mid + 1]) {
        // The highest element is in the left half
        right = mid;
      } else {
        // The highest element is in the right half
        left = mid + 1;
      }
    }
  
    return arr[left]; // The highest element
  }
  
  // Example usage:
  const arr = [1 ,2 ,3 ,4 ,5 ,6 ,5 ,4 ,3 ,2 ,1 ];
  const highestElement = findHighestElement(arr);
  console.log(highestElement); // Output should be 5
  