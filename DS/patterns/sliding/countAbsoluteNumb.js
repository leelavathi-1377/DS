const countAbsolute = (arr) =>{
    let s = new Set()
    for(let i=0;i<arr.length ;i++){
        s.add(Math.abs(arr[i]))
    }
    return s.size
}
const result = countAbsolute([-1,-1,-1,0,0,0,1,1,1])
console.log(result)