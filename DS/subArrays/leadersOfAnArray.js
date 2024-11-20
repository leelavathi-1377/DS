const leaderOfArray = (arr) => {
    let list = []
    let rightMax = arr[arr.length - 1]
    list.push(rightMax)
    for(let i = arr.length - 2 ; i >= 0  ; i--){
        if(arr[i] > rightMax){
            rightMax = arr[i]
            list.push(arr[i])
        }
    }
    return list

}

const arr = [1, 23, 25, 4, 5, 6, 8, 9]
console.log(leaderOfArray(arr))