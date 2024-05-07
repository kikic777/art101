// index.js - Working with a partner, write functions that take user input!
// Author: Cynthia Ramirez
// Date: 5/3/2024

// sortUserName - A function rhar takes user inpur and sorts the letters of their name
function sortUserName() {
let userName = window.prompt ("Hi! Please tell me your name so I can fix it.");
//console.log("userName =", userName);

//split string into array
let nameArray = userName.split('');
//console.log("nameArray = ", nameArray);

//sort the array
let nameArraySort = nameArray.sort();
//console.log("nameArraySort =", nameArraySort);

//join array back into string
let nameSorted = nameArraySort.join('');
//console.log("nameSorted =", nameSorted);

// Note that i could ahve done the abive lines as a single line:
//  username.toLower().split("").sort().join("")
// return nameSorted;
return "Oh hey, I've fixed your name: " +  sortUserName();
}

document.writeln(sortUserName(), "</br>");

//Output
document.writeln("Oh hey, I've fixed your name: ", sortUserName(), "</br>");
// Constants

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
//function myFunction(param1, param2) {
  // some code here
  // return results;
//}

//function main() {
  //console.log("Main function started.");
  // the code that makes everything happen
//}

// let's get this party started
//main();
