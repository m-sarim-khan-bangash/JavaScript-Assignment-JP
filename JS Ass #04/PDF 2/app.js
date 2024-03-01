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
