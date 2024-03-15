//*************************Chapter 14*************************
//Question 1
var password = prompt("Enter your password");
if (password !== "") {
  if (password.length > 5) {
    alert("OK");
  } else {
    alert("Password must be greater than 5");
  }
}

//Question 2
if (a === 1) {
  if (c === "Max") {
    alert("OK");
  }
}

//Question 3
if (a === 1) {
  if (c === "Max") {
    alert("OK");
  }
}

// Question 4
var a = 5;
var b = 5;
if (a === b) {
  alert("OK");
}

//******************** Chapter 15 (array I)*****************************
// Question 1
var arr = [];

// Question 2
var arr = ["Book"];

// Question 3
var alphabet = ["h", "i", "j", "k"];

alert(alphabet[2]);

// Question 4
var alphabet = ["h", "i", "j", "k", "l", "m", "n", "o"];

console.log(alphabet.length);

// Question 5
var arr = ["Laptop"];
arr[1] = "Mobile";
alert(arr[1]);

//******************** Chapter 16 (array II)*****************************
// Question 1
var arr = ["Burger"];
arr.push("Pizza");
alert(arr);

// Question 2
var alphabet = ["h", "i", "j", "k", "l", "m", "n", "o"];
alphabet.pop();
alert(alphabet);

// Question 3
var alphabet = ["h", "i", "j", "k", "l", "m", "n", "o"];
alphabet.push(10);
console.log(alphabet);

//******************** Chapter 16 (array III)*****************************
// Question 1
var sizes = ["XL", "L", "M", "S"];
sizes.shift();
console.log(sizes);

// Question 2
var sizes = ["XL", "L", "M", "S"];
sizes.unshift("XXL", "XS", "XXS");
console.log(sizes);

// Question 3
var myArr = [1];
myArr.unshift(2, 3, 4);
alert(myArr);

// Question 4
var sizes = ["S", "M", "XL", "XXL", "XXXL"];
sizes.splice(2, 0, "L");
console.log(sizes);

// Question 5
var sizes = ["S", "M", "XL", "XXL", "XXXL"];
var newSizeArr = sizes.slice(0, 3);
console.log(newSizeArr);

// Question 6
var pets = ["dog", "cat", "ox", "duck", "frog"];
pets.splice(1, 3, "parrot", "fish");
console.log(pets);

// Question 7
var pets = ["dog", "cat", "ox", "duck", "frog"];
pets.splice(1, 1);
console.log(pets);

// Question 8
var pets = ["dog", "cat", "ox", "duck", "frog", "flea"];
var newpet = pets.slice(3, 5);
console.log(newpet);

// ************************Chapter 17 - 20*****************************
// Question 1
for (var i = 0; i <= 10; i++) {
  console.log(i);
}

// Question 2
for (var i = 0; i <= 12; i++) {
  console.log(i);
}

// Question 3
for (var i = 0; i <= 4; i++) {
  console.log(i);
}

// Question 4
for (var i = 0; i < 100; i++) {
  console.log(i);
}

// Question 5
for (var i = 3; i > 0; i--) {
  console.log(i);
}

// Question 6
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Question 7
var flag = false;

// Question 8
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var i = 0; i <= arr.length; i++) {
  console.log(arr[i]);
}

// Question 9
for (var i = 0; i < 10; i++) {
  if (i === 2) {
    alert(i);
    break;
  }
}

// Question 10
var matchFound = false;
for (var i = 0; i < list.length; i++) {
  if (userInput === list[i]) {
    alert("Match found");
    matchFound = true;
    break;
  } else {
    alert("Match not found");
  }
}

// Question 11
var firstArr = ["a", "b", "c", "d", "e", "f"];
var secondArr = [1, 2, 3, 4, 5, 6];
var newArr = [];
for (var i = 0; i < firstArr.length; i++) {
  newArr.push(firstArr[i] + secondArr[i]);
}
console.log(newArr);
