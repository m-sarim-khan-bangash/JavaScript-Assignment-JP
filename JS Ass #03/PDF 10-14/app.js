// *****************************Chapter 10*****************************
//  Question 01
var city = "Karachi";
if (city === "Karachi") {
  console.log("Welcome to city of lights");
}

// Question 02
var x = 10;
var y = 10;

if ("x" === "y") {
  var input = prompt("enter the value of z");
}
console.log(input);

// Question 03
var zipcode = "10010";
if (zipcode === "10010") {
  console.log("Welcome to Karachi");
} else {
  console.log("Please enter a valid zipcode");
}

// Question 04
var x = 1;
if (x === 1) {
  x = 2;
  console.log(x);
}

// *****************************Chapter 11*****************************
// Question 01
var num1 = 10;
var num2 = 20;

if (num1 !== num2) {
  console.log("Not Equal");
}

// Question 02
var value1 = 10;
var value2 = 5;

if (value1 >= value2) {
  console.log("value1 is greater than or equal to value2");
} else {
  console.log("value1 is less than value2");
}

// Question 03
var myVariable = 15;
var particularNumber = 42;

if (myVariable !== particularNumber) {
  myVariable = 10;
}
console.log(myVariable);

// Question 04
var num1 = 10;
var num2 = 20;

if (num1 !== num2) {
  alert("Congratulations!!");
}

// Question 05
var name = "Sarim";
var input = prompt("Enter your name");

if (name !== input) {
  console.log("No match");
}

// *****************************Chapter 12*****************************

// Question 01
var value1 = 10;
var value2 = 5;

if (value1 >= value2) {
  console.log("value1 is greater than or equal to value2");
} else {
  console.log("value1 is less than value2");
}

// Question 02
var sub1 = +prompt("Enter marks of first subject");
var sub2 = +prompt("Enter marks of second subject");
var sub3 = +prompt("Enter marks of third subject");

var total = 300;
var percentage = ((sub1 + sub2 + sub3) / total) * 100;

if (percentage >= 80) {
  document.write("Total marks: " + total + "<br>");
  document.write("Marks obtained: " + (sub1 + sub2 + sub3) + "<br>");
  document.write("Percentage: " + percentage + "%" + "<br>");
  document.write("Grade: A-one" + "<br>");
  document.write("Remarks: Excellent" + "<br>");
} else if (percentage >= 70) {
  document.write("Total marks: " + total + "<br>");
  document.write("Marks obtained: " + (sub1 + sub2 + sub3) + "<br>");
  document.write("Percentage: " + percentage + "%" + "<br>");
  document.write("Grade: A" + "<br>");
  document.write("Remarks: Good" + "<br>");
} else if (percentage >= 60) {
  document.write("Total marks: " + total + "<br>");
  document.write("Marks obtained: " + (sub1 + sub2 + sub3) + "<br>");
  document.write("Percentage: " + percentage + "%" + "<br>");
  document.write("Grade: B" + "<br>");
  document.write("Remarks: You need to improve" + "<br>");
} else {
  document.write("Total marks: " + total + "<br>");
  document.write("Marks obtained: " + (sub1 + sub2 + sub3) + "<br>");
  document.write("Percentage: " + percentage + "%" + "<br>");
  document.write("Grade: Fail" + "<br>");
  document.write("Remarks: Sorry" + "<br>");
}

// Question 03
var a = 11;
if (a === 10) {
  alert("a is 10");
} else if (a !== 10) {
  alert("the corect value of a is" + a);
}

// Question 04
var city = prompt("Enter your city name");

if (city === "Karachi") {
  console.log("Welcome to city of lights");
} else if (city === "Lahore") {
  console.log("Welcome to Lahore");
} else {
  console.log("Invalid");
}

// *****************************Chapter 13*****************************
// Question 01
var a = 10;
var b = 10;
var c = 20;
var d = 20;

if (a === b && c === d) {
  console.log("The condition is true");
}

// Question 02
var a = 10;
var b = 10;
var c = 20;
var d = 25;

if (a === b || c !== d) {
  console.log("The condition is true");
}

// Question 03
var myName = "Hamza";
var age = 50;

if ((myName === "Hamza" || myName === "Arsalan") && age < 60) {
  console.log("The condition is true");
}

// Question 04
var num1 = 10;
var num2 = 20;

if (num1 > num2 || num1 < num2) {
  console.log("The condition is true");
} else {
  console.log("The condition is false");
}

// Question 05
var firsName = "Sarim";
var lastName = "Khan";

var fName = prompt("Enter your first name");
var lName = prompt("Enter your last name");

if (firsName === fName && lastName === lName) {
  console.log("The condition is true");
} else {
  console.log("The condition is false");
}

// ******************************Chapter 14******************************
// Question 01
var password = prompt("Enter your password");

if (password !== "") {
  if (password.length <= 5) {
    alert("Password must be greater than 5 characters");
  } else {
    alert("OK");
  }
} else {
  alert("Password cannot be empty");
}

// Question 02
if (a === 1) {
  if (c === "Max") {
    alert("OK");
  }
}

// Question 03
if (a === 1) {
  if (c === "Max") {
    alert("OK");
  }
}

// Question 04
var firstVariable = 10;
var secondVariable = 10;

if (firstVariable === secondVariable) {
  if (firstVariable <= secondVariable) {
    alert(
      "Conditions passed! The first variable is equal to and less than or equal to the second variable."
    );
  }
}
