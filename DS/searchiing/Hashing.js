// class HashTable{
//     constructor(){
//         this.table = new Array(10)
//         this.size = 0
//     }

//     _setKey(key){
//         return key%10
//     }

//     insert(value){
//         const index = this._setKey(value)
//         this.table[index] = value
//         this.size++
//     }

//     search(value){
//         const index = this._setKey(value)
//         if(this.table[index] === value){
//             console.log("ele found", index)
//         }else{
//             console.log("ele not found")
//         }
//     }

//     delete(value){
//         const index = this._setKey(value)
//         if(this.table[index]){
//             this.table[index] = []
//             this.size--
//             return true
//         }else{
//             return false
//         }
//     }

// }

// const hashTable = new HashTable()
// hashTable.insert(100);
// hashTable.insert(87);
// hashTable.insert(86);
// hashTable.insert(12);
// hashTable.insert(64);
// hashTable.insert(9);
// hashTable.insert(84);
// console.log(hashTable)

// hashTable.search(87);
// hashTable.search(64);

// hashTable.delete(12);
// console.log(hashTable)


const hash = (string) =>{
    let hash = 0
    if(string.length === 0){
        return 0
    }
    for(let i=0 ; i<string.length ; i++){
        ch = string.charCodeAt(i)
        hash = ((hash <<5) - hash) + ch
        hash = hash & hash
    }
    return hash
}

console.log(hash("Leela"))


