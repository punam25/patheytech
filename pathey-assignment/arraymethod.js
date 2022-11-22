//array declaration
var arraydata = ['punam', 3455663, null, undefined, false];
console.log(arraydata);

//1.join() method join the all array in string format you can also append..with special char
var arraydata = ["punam", "patil", "yesno", "varnull", "undefined", "false"];
var joinarray = arraydata.join("");
console.log(joinarray);

//2.find
let ages = [4, 12, 16, 20];

function checkAge(age) {
    return age > document.getElementById("ageToCheck").value;
}

function myFunction() {
    document.getElementById("demo").innerHTML = ages.find(checkAge);
}

//3.map()
let num1=[4,9,16,25];
let newmap=num1.map(Math.sqrt);
console.log(newmap);
//append special charecter from every words using map 
var arraydata = ["punam", "patil", "yesno", "varnull", "undefined", "false"];
var newarray=arraydata.map(res=>res+"test");
console.log(newarray);

//4.includes method is used to check the array element is available or not in array
var arraydata = ["punam", "patil", "yesno", "varnull", "undefined", "false"];
var newarray=arraydata.includes("sumit");
console.log("includes method",newarray);

//5.push() method push the new element in last position
var arraydata = ["punam", "patil", "yesno", "varnull", "undefined", "false"];
arraydata.push("newvalue");
console.log("push the element",arraydata);

//6.pop() remove the last element from array
var arraydata = ["punam", "patil", "yesno", "varnull", "undefined", "false"];
arraydata.pop();
 console.log("pop the last element",arraydata);

 //7.reverse() reverse the array
 var arraydata = ["punam", "patil", "yesno", "varnull", "undefined", "false"];
 arraydata.reverse();
  console.log("reverse",arraydata);

  //8.shift() remove the first element from array
  var arraydata = ["punam", "patil", "yesno", "varnull", "undefined", "false"];
    arraydata.shift();
 console.log("shift",arraydata);

 //9.unshift() add the new element in array
 var arraydata = ["punam", "patil", "yesno", "varnull", "undefined", "false"];
 arraydata.unshift("delhi");
console.log("unshift",arraydata);

//10.slice

var arraydata = ["punam", "patil", "yesno", "varnull", "undefined", "false"];
var slicearray=arraydata.slice(2);
console.log("slice",slicearray);

//11.sort() the value is showing assending and desending order
var fruits1 = ["banana","litchi","orange" ,"apple"];
var fruits2=fruits1.sort();
console.log("fruits",fruits2);

// array filter method

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result5 = words.filter(word => word.length > 6);

console.log("filter method=>",result5);
