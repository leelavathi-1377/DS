const printElements = (arr , i) =>{
    if(i>=arr.length){
        return;
    }
    console.log(`the element present in the array is ${arr[i]}`)
    printElements(arr , i+1)

}
printElements([1,2,3,4,5] , 0)

