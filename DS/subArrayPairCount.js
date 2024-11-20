function countPairsWithSum(arr, K) {
    const numCount = {}; // A hash map to store the count of each number
  
    let count = 0; // Initialize the count of pairs to 0
  
    for (let i = 0; i < arr.length; i++) {
      const complement = K - arr[i]; // Calculate the complement needed for the current element
  
      if (numCount[complement] !== undefined) {
        // If the complement exists in the hash map, increment the count
        count += numCount[complement];
      }
  
      // Increment the count for the current element in the hash map
      if (numCount[arr[i]] === undefined) {
        numCount[arr[i]] = 1;
      } else {
        numCount[arr[i]]++;
      }
    }
  
    console.log(count);
  }
  