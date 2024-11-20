const array  = [1, 2, 3, 4, 5];

// const reduceExample = array.reduce((max, cur) =>{
//     if(cur > max){
//         max = cur
//     }
//     return max

// } , 0)
// console.log(reduceExample)



// const sumReduce = array.reduce((sum , curr) => {
//     return sum + curr
// }, 0)

// console.log(sumReduce)

// const turnIntoString = array.reduce((sum, curr) => {
//     return sum + curr
// },"")

// console.log(turnIntoString)

var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

const voterList = voters.reduce((acc, curr) =>{
    if(!acc[curr.age]){
        acc[curr.age] = 1
    } 
    else{
        acc[curr.age]++
    }
    return acc
} , {})

console.log(voterList)


// const voterCount = voters.reduce((totalCount , curr) => {
//     if(curr.voted === true){
//         totalCount = totalCount + 1
//     }
//     return totalCount
// } , 0)

// console.log(voterCount)

// var wishlist = [
//     { title: "Tesla Model S", price: 90000 },
//     { title: "4 carat diamond ring", price: 45000 },
//     { title: "Fancy hacky Sack", price: 5 },
//     { title: "Gold fidgit spinner", price: 2000 },
//     { title: "A second Tesla Model S", price: 90000 }
// ];

// const totalPrice = wishlist.reduce((totalPrice ,  curr) => {
//     return totalPrice + curr.price
// } , 0 )

// console.log(totalPrice)

// var arrays = [
//     ["1", "2", "3"],
//     [true],
//     [4, 5, 6]
// ];


// const flattenArray = arrays.reduce((array , cur) =>{
//     return array.concat(cur)
// } , [])


// console.log(flattenArray)