// Question 1
var num1 = prompt("Enter a number");
var num2 = prompt("Enter another number");

var sum = parseFloat(num1) + parseFloat(num2);
document.write("The sum of " + num1 + " and " + num2 + " is " + sum);

// Question 2
var num1 = prompt("Enter a number");
var num2 = prompt("Enter another number");

var sub = parseFloat(num1) - parseFloat(num2);
var mul = parseFloat(num1) * parseFloat(num2);
var div = parseFloat(num1) / parseFloat(num2);
var mod = parseFloat(num1) % parseFloat(num2);
document.write("The difference of " + num1 + " and " + num2 + " is " + sub);
document.write("The product of " + num1 + " and " + num2 + " is " + mul);
document.write("The division of " + num1 + " and " + num2 + " is " + div);
document.write("The modulus of " + num1 + " and " + num2 + " is " + mod);

// Question 3
var num;
document.write("Value after variable declaration is: " + num);
num = 5;
document.write("Initial value: " + num);
num++;
document.write("Value after increment is: " + num);
num = num + 7;
document.write("Value after addition is: " + num);
num--;
document.write("Value after decrement is: " + num);
num %= 3;
document.write("The remainder is: " + num);

// Question 4
var ticketPrice = 600;
document.write(
  "Total cost to buy 5 tickets to a movie is " + ticketPrice * 5 + "PKR"
);

// Question 5
var num = 4;
document.write("Table of " + num);
document.write(num + " x 1 = " + num * 1);
document.write("<br>");
document.write(num + " x 2 = " + num * 2);
document.write("<br>");
document.write(num + " x 3 = " + num * 3);
document.write("<br>");
document.write(num + " x 4 = " + num * 4);
document.write("<br>");
document.write(num + " x 5 = " + num * 5);
document.write("<br>");
document.write(num + " x 6 = " + num * 6);
document.write("<br>");
document.write(num + " x 7 = " + num * 7);
document.write("<br>");
document.write(num + " x 8 = " + num * 8);
document.write("<br>");
document.write(num + " x 9 = " + num * 9);
document.write("<br>");
document.write(num + " x 10 = " + num * 10);
document.write("<br>");

// Question 6
var celsius = 25;
var fahrenheit = (celsius * 9) / 5 + 32;
document.write(celsius + "°C is " + fahrenheit + "°F");
fahrenheit = 70;
celsius = ((fahrenheit - 32) * 5) / 9;
document.write(fahrenheit + "°F is " + celsius + "°C");

// Question 7
var priceItem1 = 650;
var priceItem2 = 100;
var quantityItem1 = 3;
var quantityItem2 = 7;
var shippingCharges = 100;
document.write("Price of item 1 is " + priceItem1);
document.write("Quantity of item 1 is " + quantityItem1);
document.write("Price of item 2 is " + priceItem2);
document.write("Quantity of item 2 is " + quantityItem2);
document.write("Shipping Charges " + shippingCharges);
document.write(
  "Total cost of your order is " +
    (priceItem1 * quantityItem1 + priceItem2 * quantityItem2 + shippingCharges)
);

// Question 8
var totalMarks = 980;
var marksObtained = 804;
document.write("Total marks: " + totalMarks);
document.write("Marks obtained: " + marksObtained);
document.write("Percentage: " + (marksObtained / totalMarks) * 100 + "%");

// Question 9
var usDollars = 10;
var saudiRiyals = 25;
document.write(
  "Total Currency in PKR: " + usDollars * 104.8 + saudiRiyals * 28
);

// Question 10
var num = 5;
document.write((num + 5) * 10) / 2;

// Question 11
var currentYear = 2016;
var birthYear = 1992;

document.write("Current Year: " + currentYear);
document.write("Birth Year: " + birthYear);
document.write("Your Age is: " + (currentYear - birthYear));

// Question 12
var radius = 20;
var circumference = 2 * 3.142 * radius;
var area = 3.142 * radius * radius;
document.write("Radius of a circle: " + radius);
document.write("The circumference is: " + circumference);
document.write("The area is: " + area);

// Question 13
var snack = "chocolate chip";
var currentAge = 15;
var maximumAge = 65;
var amountPerDay = 3;
document.write("Favourite Snack: " + snack);
document.write("Current Age: " + currentAge);
document.write("Estimated Maximum Age: " + maximumAge);
document.write("Amount of snacks per day: " + amountPerDay);
document.write(
  "You will need " +
    (maximumAge - currentAge) * amountPerDay +
    " " +
    snack +
    " to last you until the ripe old age of " +
    maximumAge
);
