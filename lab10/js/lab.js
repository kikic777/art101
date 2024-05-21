//index.js - Working with your partner, experiment with DOM manipulation. This simple JavaScript/jQuery script appends new elements to an output div\
//Requirements: jQuery must be loaded for this script to work.
//Author: Cynthia Ramirez
//Date: 5/20/2024

function generateRandomText() {
    const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    const min = 50;
    const max = 200;
    const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
    // Get a random starting index to slice the Lorem Ipsum text
    const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
    // Generate the random Lorem Ipsum-like text
    return text.slice(randStart, randStart + randLen);
  }
  

//   // click listener for button
//   $("#make-convo").click(function(){ 
//      // console.log("the button is clicked");
      
//      // Get new fake dialogue
//       const newText = generateRandomText();
//      // console.log("newText: " + newText);
  
//     // Append a new div to our output div
//       $("#output").append('<div class="text"><p>' + newText + '</p></div>');
//     });
  

// Click listener for button
$("#make-convo").click(function(){
    // Get new fake dialogue
    const newText = generateRandomText();
    
    
// Determine the class we should add based on whether this is an even or odd text message
let classToAdd = '';
    if ($("#output .text").length % 2 === 0) {
        classToAdd = 'left';
    } else {
        classToAdd = 'right';
}
    
    // Append a new div to our output div, with the appropriate classes added
$("#output").append('<div><p>' + newText + '</p></div>').children().last().addClass('text').addClass(classToAdd);
$('#output').append('<br>');
});


$("#send").click(function(){ 
    // Get the user's message
    const userMessage = $("#user-message").val();
         
    // Add it to the output div with the appropriate class so it will be styled correctly
    let classToAdd = '';
    if ($("#output .text").length % 2 === 0) {
         classToAdd = 'left';
    } else {
         classToAdd = 'right';
    }
         
$('#output').append('<div><p>' + userMessage + '</p></div>').children().last().addClass('text').addClass(classToAdd);
$('#output').append('<br>');
        
$("#user-message").val('');
 });


$(document).ready(function() {
    // Add a keyup handler to the input
    $("#user-message").keyup(function() {
        // Get the current length of the input value
        const charCount = $(this).val().length;
            
        // Update the character count element with the new count
        $("#char-count").text(charCount);
    });
});

