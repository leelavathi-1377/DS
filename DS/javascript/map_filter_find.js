
//map returns array with same size
const performing = (item) =>{
	item = item + 1;
	return item
}
const array = ['1' ,'2' , '3']; 
const newArray = array.map(item => performing(item));
console.log(newArray)

//filter return array with less size

const newFilter = array.filter(item => item === '2');
console.log(newFilter)

//find returns the first occurance of the element
const newFind = array.find(item => item === '2');
console.log(newFind)


