//for n elements (n-1) passes required
//no of comaparisions are required are:--O(n^2)
//no of swaps = o(n^2)
const insertionSort = (arr) => {
    for(let i=1 ; i < arr.length ; i++){
        let x;
        j = i - 1
        x = arr[i]
        while(arr[j]>x){
            arr[j+1] = arr[j]
            arr[j]=x
            j--
        }
    }
    return arr
}

const result = insertionSort([2, 5, 6, 3, 1, 0])
console.log(result)