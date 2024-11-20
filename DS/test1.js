
const funMin  = (n , q, gain, loss, query) =>{
    let ans = []
    for(let i = 0 ; i< n ; i++){
        let ele = query[i]
        for(let j=0;j< q ; j++){
            let s = gain[j]
            if(ele === s) {
                ans.push(j)
            }
            s = s + gain[j]
        }
    }
    return ans
}
const res = funMin(5, 5, [1,2,3,4,5] , [0,0,0,0,0] , [5, 9, 8, 11, 17])
console.log(res)
