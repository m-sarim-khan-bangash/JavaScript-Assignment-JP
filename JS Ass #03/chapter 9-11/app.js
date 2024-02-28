// Question 01
var city = prompt("Enter your city name: ");

if (city === "Karachi") {
  console.log("Welcome to city of lights");
} else {
  console.log("Welcome to " + city);
}

// Question 02
var gender = prompt("Enter your gender");

if (gender == "male") {
  console.log("Good Morning Sir");
} else if (gender == "female") {
  console.log("Good Morning Ma'am");
}

// Question 03
var color = prompt("Enter the color of traffic signal");

if (color === "red") {
  console.log("Must Stop");
} else if (color === "yellow") {
  console.log("Ready to move");
} else if (color === "green") {
  console.log("Move now");
}

// Question 04
var fuel = prompt("Enter the remaining fuel in car (in litres)");

if (fuel < 0.25) {
  console.log("Please refill the fuel in your car");
}

// Question 05
var a = 4;
if (++a === 5) {
  alert("given condition for variable a is true");
} // Output: Alert will be shown

var b = 82;
if (b++ === 83) {
  alert("given condition for variable b is true");
} // Output: Alert will not be shown

var c = 12;
if (c++ === 13) {
  alert("condition 1 is true");
} // Output: Alert will not be shown

if (c === 13) {
  alert("condition 2 is true");
} // Output: Alert will be shown

if (++c < 14) {
  alert("condition 3 is true");
} // Output: Alert will not be shown

if (c === 14) {
  alert("condition 4 is true");
} // Output: Alert will be shown

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
  alert("The cost equals");
} // Output: Alert will be shown

if (true) {
  alert("True");
} // Output: Alert will be shown

if (false) {
  alert("False");
} // Output: Alert will not be shown

if ("car" < "cat") {
  alert("car is smaller than cat");
} // Output: Alert will be shown

// Question 06
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

// Question 07
var secretNumber = 7;
var guess = +prompt("Guess the secret number");

if (guess === secretNumber) {
  console.log("Bingo! Correct answer");
}
if (guess === secretNumber + 1) {
  console.log("Close enough to the correct answer");
}

// Question 08
var num = +prompt("Enter a number");

if (num % 3 === 0) {
  console.log(num + " is divisible by 3");
} else {
  console.log(num + " is not divisible by 3");
}

// Question 09
var temp = +prompt("Enter the temperature");

if (temp > 40) {
  console.log("It is too hot outside");
} else if (temp > 30) {
  console.log("The Weather today is Normal");
} else if (temp > 20) {
  console.log("Today’s Weather is cool");
} else if (temp > 10) {
  console.log("OMG! Today’s weather is so Cool");
}

// Question 10
var num1 = +prompt("Enter first number");
var num2 = +prompt("Enter second number");
var operator = prompt("Enter operator");

if (operator === "+") {
  console.log(num1 + num2);
} else if (operator === "-") {
  console.log(num1 - num2);
} else if (operator === "*") {
  console.log(num1 * num2);
} else if (operator === "/") {
  console.log(num1 / num2);
} else if (operator === "%") {
  console.log(num1 % num2);
} else {
  console.log("Invalid operator");
}
