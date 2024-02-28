// Question 01
var char = prompt("Enter a character (number or string): ");

if (char >= "A" && char <= "Z") {
  alert(char + " is an uppercase letter");
} else if (char >= "a" && char <= "z") {
  alert(char + " is a lowercase letter");
} else if (char >= "0" && char <= "9") {
  alert(char + " is a number");
} else {
  alert("Invalid input");
}

// Question 02
var int1 = +prompt("Enter first integer: ");
var int2 = +prompt("Enter second integer: ");

if (int1 > int2) {
  alert(int1 + " is larger than " + int2);
} else if (int2 > int1) {
  alert(int2 + " is larger than " + int1);
} else if (int1 === int2) {
  alert("Both integers are equal");
} else {
  alert("Invalid input");
}

// Question 03
var num = +prompt("Enter a number: ");

if (num > 0) {
  alert(num + " is a positive number");
} else if (num < 0) {
  alert(num + " is a negative number");
} else if (num === 0) {
  alert(num + " is zero");
}

// Question 04
var char = prompt("Enter a character: ");

if (
  char === "a" ||
  char === "e" ||
  char === "i" ||
  char === "o" ||
  char === "u"
) {
  alert("True");
} else {
  alert("False");
}

// Question 05
var correctPassword = "abc123";
var password = prompt("Enter your password: ");

if (password === "") {
  alert("Please enter your password");
} else if (password === correctPassword) {
  alert("Correct! The password you entered matches the original password");
} else {
  alert("Incorrect password");
}

// Question 06
var greeting;
var hour = 13;
if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

// Question 07
var time = +prompt("Enter time in 24-hour format (e.g. 1900): ");

if (time >= 0o00 && time < 1200) {
  alert("Good morning!");
} else if (time >= 1200 && time < 1700) {
  alert("Good afternoon!");
} else if (time >= 1700 && time < 2100) {
  alert("Good evening!");
} else if (time >= 2100 && time <= 2359) {
  alert("Good night!");
} else {
  alert("Invalid input");
}
