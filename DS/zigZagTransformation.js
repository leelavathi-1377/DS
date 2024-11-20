const findZigZagTransformation = (arr) => {
    const n = arr.length

    if( n <= 1){
        return arr
    }

    for(let i = 0 ; i< n - 1 ; i++){
        if(i%2 === 0){
            if(arr[i] > arr[i+1]){
                [arr[i] , arr[i+1]] = [arr[i+1] , arr[i]]
            }
        }
        else{
            if(arr[i] < arr[i+1]){
                [arr[i] , arr[i+1]] = [arr[i+1] , arr[i]]
            }
        }
    }

    for(let i =0 ; i< n - 1; i++){
        if(i%2 === 0){
            if(arr[i] > arr[i+1]){
                return 0
            }
        }
        else{
            if(arr[i] < arr[i+1]){
                return 0
            }
        }
    }
    return 1
}


const arr = [4, 3, 7, 8, 6, 2, 1];

const result = findZigZagTransformation(arr)
console.log(result)