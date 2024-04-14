// 1. Display current date and time in browser
document.write(new Date() + "<br>");

// 2. Alert current month in words
var months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
var currentMonth = new Date().getMonth();
alert(months[currentMonth]);

// 3. Alert the first 3 letters of the current day
var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var currentDay = new Date().getDay();
alert(days[currentDay]);

// 4. Display "It’s Fun day" if it's Saturday or Sunday
var currentDay = new Date().getDay();
if (currentDay === 0 || currentDay === 6) {
  alert("It’s Fun day");
}

// 5. Display message based on date
var currentDate = new Date().getDate();
if (currentDate < 16) {
  alert("First fifteen days of the month");
} else {
  alert("Last days of the month");
}

// 6. Determine minutes since Jan. 1, 1970
var minutesSinceEpoch = Date.now() / (1000 * 60);
console.log("Minutes since Jan. 1, 1970: " + minutesSinceEpoch);

// 7. Test whether it's before noon or after
var currentHour = new Date().getHours();
if (currentHour < 12) {
  alert("It's AM");
} else {
  alert("It's PM");
}

// 8. Create Date object for last day of last month of 2020
var laterDate = new Date(2020, 11, 31);

// 9. Calculate days past since 1st Ramadan
var ramadanStartDate = new Date(2015, 5, 18); // June is 5 as months are zero-based
var currentDate = new Date();
var daysPassed = Math.floor(
  (currentDate - ramadanStartDate) / (1000 * 60 * 60 * 24)
);
alert("Days passed since 1st Ramadan: " + daysPassed);

// 10. Display seconds elapsed between reference date and beginning of 2015
var referenceDate = new Date("January 1, 1970");
var beginningOf2015 = new Date("January 1, 2015");
var secondsElapsed = (beginningOf2015 - referenceDate) / 1000;
document.write(
  "Seconds elapsed between reference date and beginning of 2015: " +
    secondsElapsed +
    "<br>"
);

// 11. Extract hours, reset date object an hour ahead, and display
var currentDate = new Date();
var currentHour = currentDate.getHours();
currentDate.setHours(currentHour + 1);
document.write("Date object an hour ahead: " + currentDate + "<br>");

// 12. Create date object reset to 100 years back
var currentDate = new Date();
currentDate.setFullYear(currentDate.getFullYear() - 100);
alert("Date 100 years back: " + currentDate);

// 13. Calculate and show birth year based on age
var age = prompt("Enter your age:");
var currentYear = new Date().getFullYear();
var birthYear = currentYear - age;
alert("Your birth year is: " + birthYear);
