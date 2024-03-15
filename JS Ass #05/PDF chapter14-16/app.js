// Question 01
var student = [];

// Question 03
var stringArray = ["Book", "Pen", "Pencil", "Eraser"];

// Question 04
var numberArray = [1, 2, 3, 4, 5];

// Question 05
var booleanArray = [true, false];

// Question 06
var mixedArray = ["Book", 1, true];

// Question 07
var qualification = [
  "SSC",
  "HSC",
  "BCS",
  "BS",
  "BCOM",
  "MS",
  "M. Phil.",
  "PhD",
];
document.write("<h1>Qualifications:</h1>");
document.write("1) " + qualification[0] + "<br>");
document.write("2) " + qualification[1] + "<br>");
document.write("3) " + qualification[2] + "<br>");
document.write("4) " + qualification[3] + "<br>");
document.write("5) " + qualification[4] + "<br>");
document.write("6) " + qualification[5] + "<br>");
document.write("7) " + qualification[6] + "<br>");
document.write("8) " + qualification[7] + "<br>");

// Question 08
var studentName = ["Michael", "John", "Tony"];
var studentScore = [320, 230, 480];

var totalMarks = 500;

document.write(
  "<br>Score of " +
    studentName[0] +
    " is " +
    studentScore[0] +
    ". Percentage: " +
    (studentScore[0] / totalMarks) * 100 +
    "%"
);
document.write(
  "<br>Score of " +
    studentName[1] +
    " is " +
    studentScore[1] +
    ". Percentage: " +
    (studentScore[1] / totalMarks) * 100 +
    "%"
);
document.write(
  "<br>Score of " +
    studentName[2] +
    " is " +
    studentScore[2] +
    ". Percentage: " +
    (studentScore[2] / totalMarks) * 100 +
    "%"
);

// Question 09
var color = ["Red", "Green", "Blue"];
document.write("<br>Initial Array: " + color);

var inputColor = prompt("Enter color you want to add in the beginning");
color.unshift(inputColor);
document.write("<br>Array after adding color in the beginning: " + color);

inputColor = prompt("Enter color you want to add in the end");
color.push(inputColor);
document.write("<br>Array after adding color in the end: " + color);

color.unshift("Purple", "Black");
document.write(
  "<br>Array after adding two more colors in the beginning: " + color
);

color.shift();
document.write("<br>Array after deleting first color: " + color);

color.pop();
document.write("<br>Array after deleting last color: " + color);

var index = +prompt("Enter index where you want to add color");
inputColor = prompt("Enter color you want to add");
color.splice(index, 0, inputColor);
document.write("<br>Array after adding color at specific index: " + color);

index = +prompt("Enter index where you want to delete color");
var deleteCount = +prompt("Enter how many colors you want to delete");
color.splice(index, deleteCount);
document.write("<br>Array after deleting color at specific index: " + color);

// Question 10
var studentScore = [320, 230, 480, 120];
document.write("<br>Scores of Students: " + studentScore);
document.write("<br>Ordered Scores of Students: " + studentScore.sort());

// Question 11
var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
var selectedCities = cities.slice(2, 4);

document.write("<br><br>Cities list: <br>" + cities);
document.write("<br>Selected cities list: <br>" + selectedCities);

// Question 12
var arr = ["This", "is", "my", "cat"];

document.write("<b> Array: </b> <br>" + arr + "<br>");
document.write("<b>String: </b> <br>" + arr.join(" "));

// Question 13
var devices = [];
devices.push("keyboard");
devices.push("mouse");
devices.push("printer");
devices.push("monitor");

document.write("<b>Devices: </b> <br>" + devices);
document.write("<br><br>Out: <br>" + devices.shift());
document.write("<br>Out: <br>" + devices.shift());
document.write("<br>Out: <br>" + devices.shift());
document.write("<br>Out: <br>" + devices.shift());

// Question 14
var devices = [];
devices.push("keyboard");
devices.push("mouse");
devices.push("printer");
devices.push("monitor");

document.write("<b>Devices: </b> <br>" + devices);
document.write("<br><br>Out: <br>" + devices.pop());
document.write("<br>Out: <br>" + devices.pop());
document.write("<br>Out: <br>" + devices.pop());
document.write("<br>Out: <br>" + devices.pop());

// Question 15
var phone_manufacturers = [
  "Apple",
  "Samsung",
  "Motorola",
  "Nokia",
  "Sony",
  "Haier",
];

document.write(
  "<select><br> <option>" +
    phone_manufacturers[0] +
    "</option><option>" +
    phone_manufacturers[1] +
    "</option><option>" +
    phone_manufacturers[2] +
    "</option><option>" +
    phone_manufacturers[3] +
    "</option><option>" +
    phone_manufacturers[4] +
    "</option><option>" +
    phone_manufacturers[5] +
    "</option></select> "
);
