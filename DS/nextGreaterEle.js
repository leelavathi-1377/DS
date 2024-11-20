function nextGreaterElements(arr) {
    const result = new Array(arr.length).fill(-1);
    const stack = [];
  
    for (let i = arr.length - 1; i >= 0; i--) {
      while (stack.length > 0 && arr[i] >= arr[stack[stack.length - 1]]) {
        stack.pop();
        
      }
      
      if (stack.length > 0) {
        result[i] = arr[stack[stack.length - 1]];
      }
  
      console.log(stack)
    }
  
    return result;
  }
  
  const arr = [4, 5, 2, 10, 8];
  const nextGreater = nextGreaterElements(arr);
  console.log("Next Greater Elements:", nextGreater);
  