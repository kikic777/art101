//index.js - Working with your partner, experiment with JS events. This simple JavaScript/jQuery script gets a value from an input field and outputs a modified version.
//Requirements: jQuery must be loaded for this script to work.
//Author: Cynthia Ramirez
//Date: 5/20/2024

// Sorts the characters of a string in alphabetical order.
function sortString(inputString) {
    // We have to convert our string to an array and back again to sort it
    return inputString.split('').sort().join('');
}

//Sorts the characters of a string into an anagram.
function randomizeString(inputString) {
    return inputString.split('').sort(function() {
      return 0.5 - Math.random();
    }).join('');
}

// click listener for button
$("#submit").click(function(){
    console.log("Button clicked!");
    
    // get value of input field
    const userName = $("#user-name").val();
    console.log("User name: " + userName);
    
    // now let's sort it and append it to the output div
    const userNameSorted = sortString(userName);
    console.log("Sorted User Name: " + userNameSorted);

    $("#output").html('<div class="text"><p>' + userNameSorted + '</p></div>');
  
    // now let's randomize it and append it to the output div
    const userNameRandomized = randomizeString(userName);
    console.log("Randomized User Name: " + userNameRandomized);

    $("#output").html('<div class="text"><p>' + "Sorted Name: " + userNameSorted + "<br>" + "Anagram: " + userNameRandomized + '</p></div>');
});

// add button to challenge section
$(".minor-section").append("<button id='buttonChallenge'>Make Special</button>");

// add a click listener to the challenge button
$("#buttonChallenge").click(function(){
    // now add (or subtract) the "special" class to the section
    $("#challenge").toggleClass("special");
     console.log("Challenge button is clicked!")
});

// add button to problems section
// $(".minor-section").append("<button id='buttonProblems'>Make Special</button>");
$(".minor-section").append("<div id='centeredButton'><button id='buttonProblems'>Make Special</button></div>");

// add a click listener to the problems button
$("#buttonProblems").click(function(){
    // now add (or subtract) the "special" class to the section
    $("#problems").toggleClass("special");
     console.log("Problems button is clicked!")
});


$(".minor-section").append("<button id='buttonGlitch'>Make Special</button>");
   $("#buttonGlitch").click(function(){
        $(".minor-section").append("<button id='glitch'>Make Special</button>");
   });

document.addEventListener("DOMContentLoaded", function() {
  // Select all the elements with the "glitchit" class
  let glitchElements = document.querySelectorAll('.glitchit');

  // Loop through each element and apply the glitch effect
  glitchElements.forEach(function(element) {
    // Add a random amount of jitter to each element's position
    let jitterX = Math.floor(Math.random() * 3) - 1;
    let jitterY = Math.floor(Math.random() * 3) - 1;

     // Apply the animation to each element with added position jitters
     element.style.animation = 'glitchit .1s infinite alternate-reverse';
     element.style.transform = 'translate(' + jitterX + 'px, ' + jitterY + 'px)';
   });

   $("#buttonGlitch").click(function(){
        $(".minor-section .glitchit").toggleClass("makeSpecial");
     console.log("Glitch button is clicked!")
   });
});


// Trigger the glitch after 0.5 seconds
window.onload = function() {
setTimeout(() => {
  console.log("Set timeout")
  // Select all the elements with the "glitchit" class
  let glitchElements = document.querySelectorAll('.glitchit');

  // Loop through each element and apply the glitch effect
  glitchElements.forEach(function(element) {
    // Add a random amount of jitter to each element's position
    let jitterX = Math.floor(Math.random() * 3) - 1;
    let jitterY = Math.floor(Math.random() * 3) - 1;

     // Apply the animation to each element with added position jitters
     element.style.animation = 'glitchit .1s infinite alternate-reverse';
     element.style.transform = 'translate(' + jitterX + 'px, ' + jitterY + 'px)';
   });
  }, 5000);
}


