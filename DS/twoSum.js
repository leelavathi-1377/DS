// const towSum = (array , target) => {
//     if(array.length !==2){
//         return 
//     }
//     for(let i =0 ; i<array.length ; i++){
//         const complement = target - array[i];
//         if(array.includes(complement)){


//         }
//     }

// }

// console.log(towSum([1, 2, 3 , 4, 5] ,  5))


function twoSum(nums, target) {
    const numIndexMap = {}; 
  
    for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i];
      console.log(complement , "????")
  
      if (numIndexMap.hasOwnProperty(complement)) {
        return [numIndexMap[complement], i];
      }

      numIndexMap[nums[i]] = i;
      console.log(numIndexMap)
    }
    return [];
  }
  

  const nums = [2, 11, 7, 15];
  const target = 9;
  
  const result = twoSum(nums, target);
  if (result.length === 2) {
    console.log(`Indices of two numbers that add up to ${target}: ${result}`);
  } else {
    console.log("No solution found.");
  }
  