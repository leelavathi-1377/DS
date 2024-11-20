
// //naive approach o(n^2)
// const findLeader = (arr) => {
//     const leaderArray = []
//     for(let i = 0 ; i < arr.length ; i++){
//         let isLeader = true
//         for(let j = i+1 ; j < arr.length ; j++){
//             if(arr[j] > arr[i] || arr[i] === arr[j]){
//                 isLeader = false
//                 break
//             }
//         }
//         if(isLeader){
//             leaderArray.push(arr[i])
//         }
//     }
//     return leaderArray
// }


//o(n)
const findLeader = (arr) => {
    const leaderBoard = []
    let leader = arr[arr.length - 1]
    for(let i = arr.length - 2 ; i >= 0 ; i--){
        if(arr[i] > leader){
            leader = arr[i]
            leaderBoard.push(leader)
        }
    }
    leaderBoard.push(arr[arr.length - 1])
    return leaderBoard
}


// const arr = [8, 9, 11, 10]
const arr = [16, 17, 4, 3, 5, 2]
console.log(findLeader(arr))