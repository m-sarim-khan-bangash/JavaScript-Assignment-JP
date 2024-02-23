// Question 1
var a = 10;
document.write("Result: ");
document.write("<br>");
document.write("The value of a is: " + a);
document.write("<br>");
document.write("...............................................");
document.write("<br>");

++a;
document.write("The value of ++a is: " + a);
document.write("<br>");
document.write("Now the value of a is: " + a);
document.write("<br>");
document.write("<br>");

document.write("The value of a++ is: " + a);
a++;
document.write("<br>");
document.write("Now the value of a is: " + a);
document.write("<br>");
document.write("<br>");

a--;
document.write("The value of --a is: " + a);
document.write("<br>");
document.write("Now the value of a is: " + a);
document.write("<br>");
document.write("<br>");

document.write("The value of a-- is: " + a);
a--;
document.write("<br>");
document.write("Now the value of a is: " + a);
document.write("<br>");
document.write("<br>");

// Question 2
var a = 2,
  b = 1;
var result = --a - --b + ++b + b--;
// --a; 1
// --a - --b; 1 - 0
// --a - --b + ++b; 1 - 0 + 1
// --a - --b + ++b + b--; 1 - 0 + 1 + 1
document.write("a is: " + a);
document.write("<br>");
document.write("b is: " + b);
document.write("<br>");
document.write("result is: " + result);

// Question 3
var name = prompt("Enter your name");
document.write("Welcome " + name);

// Question 5
var num = prompt("Enter a number");
if (num === "") {
  num = 5;
}
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
var sub1 = prompt("Enter subject 1");
var sub2 = prompt("Enter subject 2");
var sub3 = prompt("Enter subject 3");
var totalMarks = 100;
var marks1 = prompt("Enter marks of " + sub1);
var marks2 = prompt("Enter marks of " + sub2);
var marks3 = prompt("Enter marks of " + sub3);
document.write("<table>");
document.write("<tr>");
document.write("<th>Subject</th>");
document.write("<th>Total Marks</th>");
document.write("<th>Obtained Marks</th>");
document.write("<th>Percentage</th>");
document.write("</tr>");
document.write("<tr>");
document.write("<td>" + sub1 + "</td>");
document.write("<td>" + totalMarks + "</td>");
document.write("<td>" + marks1 + "</td>");
document.write("<td>" + (marks1 / totalMarks) * 100 + "%" + "</td>");
document.write("</tr>");
document.write("<tr>");
document.write("<td>" + sub2 + "</td>");
document.write("<td>" + totalMarks + "</td>");
document.write("<td>" + marks2 + "</td>");
document.write("<td>" + (marks2 / totalMarks) * 100 + "%" + "</td>");
document.write("</tr>");
document.write("<tr>");
document.write("<td>" + sub3 + "</td>");
document.write("<td>" + totalMarks + "</td>");
document.write("<td>" + marks3 + "</td>");
document.write("<td>" + (marks3 / totalMarks) * 100 + "%" + "</td>");
document.write("</tr>");
document.write("<tr>");
document.write("<td></td>");
document.write("<td>" + totalMarks * 3 + "</td>");
document.write("<td>" + (marks1 + marks2 + marks3) + "</td>");
document.write(
  "<td>" + ((marks1 + marks2 + marks3) / (totalMarks * 3)) * 100 + "%" + "</td>"
);
document.write("</tr>");
document.write("</table>");
