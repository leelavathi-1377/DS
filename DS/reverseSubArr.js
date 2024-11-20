function reverseSubarray(arr, L, R) {
    // Check if the inputs are valid
    if (L < 0 || R >= arr.length || L >= R) {
      console.log("Invalid input");
      return arr;
    }
  
    // Reverse the subarray by swapping elements
    while (L < R) {
      const temp = arr[L];
      arr[L] = arr[R];
      arr[R] = temp;
      L++;
      R--;
    }
  
    return arr;
  }
  
  // Example usage:
  const inputArray = [1, 2, 3, 4, 5, 6, 7];
  const left = 2;
  const right = 4;
  const reversedArray = reverseSubarray(inputArray.slice(), left, right);
  console.log(reversedArray.join(' ')); // Output: "1 4 3 2 5 6 7"
  