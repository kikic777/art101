// index.js - Working with a partner, experiment with JavaScript arrays and objects!
// Author: Cynthia Ramirez
// Date: 4/29/2024

//Variables
let myTransport = ["Volkswagen Beetle", "yellow bike", "roller skates", "bus", "rides from family", "black scooter"]

// Objects for my Main Ride
let myMainRide = {
  make: "Volkswagen",
  model: "Beetle",
  color: "Dark Green",
  year: 1969,
  // we can efine a function within our object (called a method) that uses the value of year above (using this.year)
  age: function() {
  return 2024 - this.year;
  }
};

//Output
document.writeln("Transportation I Use: " + myTransport + "<br>");
//This trick allows us to write an object in the document
document.writeln("My Main Ride: <pre>", 
    JSON.stringify(myMainRide, null, '\t'), "</pre>");

// Constants

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();
