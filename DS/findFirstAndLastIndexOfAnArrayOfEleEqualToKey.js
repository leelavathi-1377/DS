const  findIndex = (a,n,key) => {
    let indexArray = []
    let isFound = false
   for(let i = 0 ; i< n ; i++){
       if(a[i] === key){
           isFound = true
           indexArray.push(i)
       }
   }
   if(isFound){
       const min =Math.min(...indexArray)
       const max = Math.max(...indexArray)
       return [min, max]
   }
   else{
       return -1
   }
}

const a = [1 ,2, 3, 4 ,5, 5 , 4, 5]
const n = a.length
console.log(findIndex(a,  n , 5))