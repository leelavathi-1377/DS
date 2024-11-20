 const swap = (arr , i , j) =>{
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
 }

 const partition = (arr, l , h) =>{
    let pivot = arr[Math.floor((l+h)/2)]
    i = l , j = h
    while(i <= j){
        while(arr[i]<pivot){
            i++
        }
        while(arr[j]>pivot){
            j++
        }
        if(i<=j){
            swap(arr , i , j)
            i++
            j--
        }
    }
    return i
 }


 const quickSort = (arr , left , right) => {
    let index 
    if(arr.length>1){
        index = partition(arr , left , right)
        if(left < index -1 ){
            quickSort(arr , left , index - 1)
        }
        if(index < right){
            quickSort(arr , index ,right)
        }
    }
    return arr
 }


 const arr = [3,4, 2, 5, 1, 6] 
 const result = quickSort(arr, 0 , arr.length - 1 )
 console.log(result)