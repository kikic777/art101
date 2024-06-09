//index.js - Working with your partner, experiment with loops.
//Requirements: jQuery must be loaded for this script to work.
//Author: Cynthia Ramirez
//Date: 6/8/2024

// give a number and an object that looks like this (3: Fuzz, 5: Buzz, 7: Boom)

for (let i = 1; i <= 200; i++) {
    let str = "";
    if (i % 3 == 0) {
      str += "Fizz";
    }
    if (i % 5 == 0) {
      str += "Buzz";
    }  
    if (i % 7 == 0) {
      str += "Boom";
    }
    if (i % 9 == 0) {
        str += "Bang";
    }    
  
    if (str == "") {
      console.log(i);
      $("#output").append("<p class='num'>" + i);
    } else {
      console.log(str + '!');
      $("#output").append("<p class='text'>" + i + " - " + str + '!');
    }
}    