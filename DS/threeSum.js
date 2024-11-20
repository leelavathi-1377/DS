function threeSum(nums, target) {
    nums.sort((a, b) => a - b); // Sort the array in ascending order
    const result = [];
  
    for (let i = 0; i < nums.length - 2; i++) {
      if (i === 0 || (i > 0 && nums[i] !== nums[i - 1])) {
        let left = i + 1;
        let right = nums.length - 1;
        const targetSum = target - nums[i];
  
        while (left < right) {
          if (nums[left] + nums[right] === targetSum) {
            result.push([nums[i], nums[left], nums[right]]);
            while (left < right && nums[left] === nums[left + 1]) left++;
            while (left < right && nums[right] === nums[right - 1]) right--;
            left++;
            right--;
          } else if (nums[left] + nums[right] < targetSum) {
            left++;
          } else {
            right--;
          }
        }
      }
    }
  
    return result;
  }
  
  // Example usage:
  const nums = [-1, 0, 1, 2, -1, -4];
  const target = 0;
  
  const result = threeSum(nums, target);
  console.log("Unique triplets that add up to", target, ":", result);
  