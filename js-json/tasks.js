let person = {
    firstName: "John",
    lastName: "Doe",
    age: "45",
};

let personJSON = '{ "firstName": "John", "lastName": "Doe", "age": "45"}';

console.log(JSON.parse(personJSON));
console.log(JSON.stringify(person));

let range = (n) => [...Array(n).keys()];

let arr = range(10);
let arrJSON = "[0,1,2,3,4,5,6,7,8,9]";

console.log(JSON.stringify(arr));
console.log(JSON.parse(arrJSON));
JSON.parse(arrJSON).forEach((num) => console.log("num : " + num));
