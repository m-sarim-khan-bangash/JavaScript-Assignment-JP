// *****************************Chapter #04******************************
// Question #01
var name = "Ali",
  age = 20,
  gender = "M";

// Question #02
//  Legal
var $name;
var name;
var _name;
var name_;
var name$;

// Illegal
/*
var 4name;
var ^name;
var *name;
var (name;
var -name;
*/

// Question #03

document.write("<h1>Rules for nameing JS Variables</h1>");
document.write(
  "Variable names can only contain numbers, $ and _.For example $my_1stVariable"
);
document.write(
  "Variables must begin with a letter, $ and _ like name, $name, _name"
);
document.write("Variable names are case Sensitive");
document.write("Variable names should not be JS Keywords");
