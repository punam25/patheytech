
// console.log("welcome home");/
// there are 3 variable declaration var let const
var x = 10;
var y = 20;
var result = x + y;
console.log('result=>', result);
// use var the declartion and value allow to repeat

let a = 3;
let b = 5;
let z = 3 + 6;
console.log(z);
// Variables defined with let cannot be redeclared.but value should be redeclare

const d = 10;
//const is not declaring there declartion and value

//function declaration
function firstprogram() {
   console.log('hello world');
}
firstprogram();

// Function invocation from Button/Link
function displaymessage() {
   document.getElementById('msg').innerHTML = "the button has been clicked";
   //  alert('button clicked');
}

// string operation in javascript
//1.length
//The length property returns the length of a string
let test = "patheytechnology";
let length = test.length;
console.log(length);
//2.slice
//slice method extracts the part of string and returns a remaning part in new string
let product = "pathey technology";
let result1 = product.slice(4, 7);
console.log("product", result1);

//3.substring()
//substring is similar to slice
let str = "banana kiwi apple";
let fruits = str.substring(3, 9);
console.log(fruits);

//4.replace()
let text = "visit the pathey technology";
let newtext = text.replace("pathey technology", "accedemy");
console.log(newtext);

//4.uppercase()
//A string is converted to upper case with toUpperCase()
let text1 = "hello world";
let text2 = text1.toUpperCase();
console.log(text2);

//5.LowerCase()
//A string is converted to upper case with toLowerCase()
let text3 = "hello world";
let text4 = text1.toLowerCase();
console.log(text4);

//6.concat()
//concat a string join a two or more string

let code1 = "hello";
let code2 = "world";
let code3 = code1.concat(code2);
console.log(code3);
//7.trim
//The trim() method removes whitespace from both sides of a string
let text5 = "        hellow world    ";
let text6 = text5.trim();
console.log(text6);

//8.trimstart
let text7 = "     Hello World!     punam";
let text8 = text1.trimStart();
console.log("text8",text8);

//9.split
let char="a,b,c,d";
let char2=char.split(",");
console.log("split",char2);