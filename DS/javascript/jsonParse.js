
const jsonString = '{"name": "John", "age": 30, "city": "New York"}';

// Parsing the JSON string into a JavaScript object
const person = JSON.parse(jsonString);

console.log(person.name);  // Output: John
console.log(person.age);   // Output: 30
console.log(person.city);  // Output: New York