// 1
console.log("////1////");

let arr1 = [5, 25, 89, 120, 36];

arr1.push("javascript", "python");

arr1.unshift("html", "css");

console.log(arr1.length);

arr1.shift();
arr1.pop();

console.log(arr1);

// 2
console.log("////2////");

let arr2 = ["orange", "banana", "pear"];

console.log(arr2.length);

arr2.push("apple", "pineapple");

arr2.unshift("watermelon");

console.log(arr2.length);

arr2.splice(2, 0, "mango");

arr2.shift();
arr2.pop();

console.log(arr2.length);

// 3
console.log("////3////");

let arr3 = [1, 2, 3, 4, 5];

arr3.splice(3, 0, "a", "b", "c");
console.log(arr3);

// 4
console.log("////4////");

let arr4 = [1, 2, 3, 4, 5];

let arr4Sum = 0;

arr4.forEach((element) => (arr4Sum += element));

console.log(arr4Sum);

// 5
console.log("////5////");

for (i = 100; i > 0; i--) {
  console.log(i);
}

// 6
console.log("////6////");
let arr6 = [2, 15, 10, 24];

arr6.splice(2, 1);

console.log(arr6);

// 7
console.log("////7////");
let arr7 = [12, 25, 3, 6, 8, 14, 7, 23];

let arr7Map = arr7.map((element) => element / 3);

console.log(arr7Map);

// 8
console.log("////8////");

let languages = ["html", "css", "javascript", "python", "php"];

console.log(languages.filter((word) => word.length > 3));

// 9
console.log("////9////");

let words = ["madrid", "rome", "milan", "berlin"];

console.log(words.filter((word) => word.includes("m") || word.includes("n")));

// 10
console.log("////10////");

let arr10_1 = [1, 2];
let arr10_2 = [3, 4];
let arr10_3 = [5, 6];

let arr10_4 = arr10_1.concat(arr10_2, arr10_3);

console.log(arr10_4);

// 11
console.log("////11////");
let arr11 = [-1, -2, -3, 4];

// const positive = (element) => element > 0;
const positive = arr11.some((element) => element > 0);

console.log(positive);

// 12
console.log("////12////");
let arr12 = [23, 45, 32, 5, 87, 7, 3, 98];

arr12.sort((a, b) => a - b);

arr12.shift();

console.log(arr12);

// 13
console.log("////13////");
function getinfo() {
  let nameuser = "anna";
  console.log(nameuser); //დაბეჭდავს nameuser ცვლადის მნიშვნელობას ("anna")

  function userinfo() {
    let info = `user name is ${nameuser}`;
    console.log(info); //დაბეჭდავს სტრინგ 'user name is '-ს დამატებულ nameuser ცვლადის მნიშვნელობას ("anna"), ანუ 'user name is anna'
  }
  userinfo();
  console.log(info); // ერორს ამოაგდებს, info ცვლადი გამოცხადებულია ფუნქციის შიგნით
}

console.log(nameuser); // ერორს ამოაგდებს, nameuser ცვლადი გამოცხადებულია ფუნქციის შიგნით
getinfo();
