// *********************Chapter 6************************
// Question 1
var x = 6;
x++;
document.write(x);
document.write("<br>");

// Question 2
var x = 100;
--x;
document.write(x);
document.write("<br>");

// Question 3
var x = 50;
var y = x++;
document.write(y); //50
document.write("<br>");

// Question 4
var y = 50;
var z = --y;
document.write(z); //49
document.write("<br>");

// Question 5
var num = 10;
var newNum = num--;
document.write(newNum); //10
document.write("<br>");

// Question 6
var num = 10;
var newNum = num++;
document.write(newNum); //10
document.write("<br>");

// Question 7
var num = 10;
num++;
alert(num); //11

// *********************Chapter 7************************
// Question 1
var calculatedNum = 2 + 2 * 6;
console.log(calculatedNum); //14

// Question 2
var calculatedNum = (2 + 2) * 6;
console.log(calculatedNum); //24

// Question 3
var calculatedNum = (2 + 2) * (4 + 2);
console.log(calculatedNum); //24

// Question 4
var cost = (2 + 2) * (4 + 10);
console.log(cost); //56

// Question 5
var units = 2 + 2 * 4 + 10;
console.log(units); //20

// Question 6

var pressure = (4 / 2) * 4;
console.log(pressure); //8

// *********************Chapter 8************************
// Question 1
var num = "2" + "2";
document.write(num); //22

// Question 2
var message = "Hello," + "Dolly";
alert(message); //Hello,Dolly

// Question 3
alert("33" + 3); //333

// Question 4
alert("Pakistan" + "Zindabad"); //PakistanZindabad

// Question 5
var myName = "Sarim";
console("Hello " + myName + 3); //Hello Sarim3

// Question 6
var firstName = "Sarim";
var lastName = "Khan";
var fullName = firstName + lastName;
console.log(fullName); //SarimKhan

// *********************Chapter 9************************
// Question 1
var firstName = prompt("Enter your first name");
console.log(firstName);

// Question 2
var country = "china";
console.log(country);
var input = prompt("Country?");
var country = input;
console.log(country);

// Question 3
var yourName = prompt("Enter Your Name");

// Question 4
var num = prompt("Enter a number", "5");
console.log(num);

// Question 5

var firstName = "Sarim";
var lastName = "Khan";
var fullName = firstName + lastName;
console.log(fullName);
var input = prompt(firstName, lastName);
var fullName = input;
console.log(fullName);

// Question 6
var input = prompt("Enter a number", "5");
alert(input);


var phone_manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony" , "Haier"]

document.write("<select>Manufactures</select> <br> <option>phone_manufacturers[0]</option>
")
