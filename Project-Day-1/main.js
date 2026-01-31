// variables
// let count = 0;
// count = "Deepak";

// console.log(count);

// add of 2 number
let numberOne = null;
let numberTwo;
let result = numberOne + numberTwo;
console.log(result);

// arrays
let numbers = [1, 2, 3, 4];
// let num2 = [...numbers];

let num2 = JSON.stringify(numbers);
num2 = JSON.parse(num2);

numbers[0] = 10000;

console.log(numbers, num2);

let text = "Deepakkumar";

let output = `My Name is ${text}`;

let student = ["Deepakkumar", 30, 36, 46];

// object
let student1 = {
  name: "Deeepakkumar",
  marks: 30,
  age: 36,
  rollNumber: 46,
};

console.log(student1.name);
console.log(student1["name"]);

let key = "name";
console.log(student1[key]);

let data = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496",
    },
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets",
  },
};
