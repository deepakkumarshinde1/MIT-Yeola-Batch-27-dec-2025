let text;
const Text = 10;

function fun() {
  console.log(Text, text);
} // function definition
// fun();

if (false === 0) console.log("Yes");
else console.log("No");

// switch (key) {
//   case value:
//     break;

//   default:
//     break;
// }

// array
let array = [10, "deepak", false, null, [10, 20, 30, 40]];
// console.log(array);
// console.log(array.length);

// loops

// for (let i = 0; i < 10000; i++) {
//   console.log("for loop ");
// }
// console.log("hi");
// let index = 0;
// while (index < array.length) {
//   console.log("While loop ", index);
//   index++;
// }

// do{

// }while()
// array methods
// forEach

function fun1() {}

// function expression (arrow function)
// let fun2 = (a) => {
//   console.log(a);
// };

let fun2 = function (a) {
  console.log(a);
};

fun2(10);

// array.forEach();
array.forEach((value, index) => {});
// map

array.map((value, index) => {});
// join()
//  filter

const students = [
  "Amit Patil",
  "Sneha Kulkarni",
  "Rahul Deshmukh",
  "Pooja Jadhav",
  "Sanket Shinde",
  "Neha More",
  "Rohit Pawar",
  "Kavita Sawant",
  "Akash Chavan",
  "Priya Joshi",
];

let newArray = students.map((value, index) => {
  return `<li>Hi, ${value} and welcome to MIT collage</li>`;
});

// convert array to string => join()
newArray = newArray.join("");
console.log(newArray);
document.querySelector("ul").innerHTML = newArray;
