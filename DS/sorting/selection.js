const selectionSort = (arr) =>{
    for(let i=0 ; i<arr.length - 1; i++){  //no of passes so (n-1)
        let temp 
        for(let j= k = i; j<arr.length; j++){
            if(arr[j] < arr[k]){
                k=j
            }
        }
        temp = arr[i]
        arr[i] = arr[k]
        arr[k] = temp
    }
    return arr
}
const result = selectionSort([2, 4, 5, 6, 3, 1])
console.log(result)

//no of comparisions are:--o(n^2)
//no of swaps :-- o(n)
//