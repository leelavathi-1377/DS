function sortByFrequency(arr) {
    const count = {}
        for(let num of arr){
            if(!count.hasOwnProperty(num)){
                count[num] = 1
            }
            count[num]++
        }
       arr.sort((a,b )=>{
           if(count[a] === count[b]){
               return a-b
           }
           return count[b] - count[a]
       })
       return arr
  }
  
  const inputArray = [4, 2, 2, 8, 3, 3, 1];
  const sortedArray = sortByFrequency(inputArray);
  console.log(sortedArray);
  