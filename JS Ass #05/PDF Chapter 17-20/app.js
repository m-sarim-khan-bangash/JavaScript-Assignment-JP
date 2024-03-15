// Question #01
var arr = [[], [], []];

// Question #02
var arr = [
  [0, 1, 2, 3],
  [1, 0, 1, 2],
  [2, 1, 0, 1],
];

// Question #03
for (var i = 1; i <= 10; i++) {
  document.write(i + "<br>");
}

// Question #04
var table = +prompt("Enter a number to show its multiplication table");
var length = +prompt("Enter length of multiplication table");
document.write("Multiplication table of " + table + "<br>");

for (var i = 1; i <= length; i++) {
  document.write(table + " x " + i + " = " + table * i + "<br>");
}

// Question #05
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
for (var i = 0; i < fruits.length; i++) {
  document.write(fruits[i] + "<br>");
}

for (var i = 0; i < fruits.length; i++) {
  document.write("Element at index " + i + " is " + fruits[i] + "<br>");
}

// Question #06
document.write("<h2>Counting:</h2>");
for (var i = 1; i <= 15; i++) {
  document.write(i + ", ");
}

document.write("<h2>Reverse counting:</h2>");
for (var i = 10; i >= 1; i--) {
  document.write(i + ", ");
}

document.write("<h2>Even:</h2>");
for (var i = 0; i <= 20; i += 2) {
  document.write(i + ", ");
}

document.write("<h2>Odd:</h2>");
for (var i = 1; i <= 20; i += 2) {
  document.write(i + ", ");
}

document.write("<h2>Series:</h2>");
for (var i = 2; i <= 20; i += 2) {
  document.write(i + "k, ");
}

// Question #07
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var search = prompt(
  "Welcome to ABC Bakery. What do you want to order sir/ma'am?"
);
var flag = false;
for (var i = 0; i < A.length; i++) {
  if (search.toLowerCase() === A[i]) {
    flag = true;
    document.write(search + " is available at index " + i + " in our bakery");
    break;
  } else {
    flag = false;
    document.write(
      "We are sorry. " + search + " is not available in our bakery"
    );
  }
}

// Question #08
var A = [24, 53, 78, 91, 12];
var largest = A[0];
for (var i = 0; i < A.length; i++) {
  if (A[i] > largest) {
    largest = A[i];
  }
}
document.write("Array items: " + A + "<br>");
document.write("The largest number is " + largest);

// Question #09
var A = [24, 53, 78, 91, 12];
var smallest = A[0];
for (var i = 0; i < A.length; i++) {
  if (A[i] < smallest) {
    smallest = A[i];
  }
}
document.write("Array items: " + A + "<br>");
document.write("The smallest number is " + smallest);

// Question #10
for (var i = 1; i <= 20; i++) {
  document.write(i * 5 + ", ");
}
