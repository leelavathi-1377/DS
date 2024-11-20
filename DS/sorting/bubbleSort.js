const bubblesort = (arr) =>{
    for(let i=0 ;i<arr.length;i++){
        let flag = 0
        for(let j=0;j<arr.length-i-1;j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
                flag = 1
            }
        }
        if(flag == 0){
            break
        }
    }
    return arr
}
const result = bubblesort([3,5,7,1,0,5,6])
console.log(result)

