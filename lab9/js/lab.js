//index.js - Working with a partner, experiment with JQuery. This simple JavaScript/jQuery script uses buttons to modify some elements on the page
// Requirements: jQuery must be loaded for this script to work.
//Author: Cynthia Ramirez
//Date: 5/17/2024


// add button to challenge section
$("#challenge").append("<button id='buttonChallenge'>Make Special</button>");

// add a click listener to the challenge button
$("#buttonChallenge").click(function(){
    // now add (or subtract) the "special" class to the section
    $("#challenge").toggleClass("special");
});


// add button to problems section
$("#problems").append("<button id='buttonProblems'>Make Special</button>");

// add a click listener to the problems button
$("#buttonProblems").click(function(){
    // now add (or subtract) the "special" class to the section
    $("#problems").toggleClass("special");
});


// add button to results section
$("#results").append("<button id='buttonResults'>Make Special</button>");

// add a click listener to the results button
$("#buttonResults").click(function(){
    // now add (or subtract) the "special" class to the section
    $("#results").toggleClass("special");
});
