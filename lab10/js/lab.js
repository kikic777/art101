//index.js - Working with your partner, experiment with DOM manipulation. This simple JavaScript/jQuery script appends new elements to an output div\
//Requirements: jQuery must be loaded for this script to work.
//Author: Cynthia Ramirez
//Date: 5/20/2024

function generateRandomText() {
    const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    const min = 20;
    const max = 100;
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
      // console.log("the button is clicked");
    
      // Get new fake dialogue
      const newText = generateRandomText();
      // console.log("newText: " + newText);
  
      // Determine the class we should add based on whether this is an even or odd text message
      let classToAdd = '';
      if ($("#output .text").length % 2 === 0) {
          classToAdd = 'left';
      } else {
          classToAdd = 'right';
      }
  
     // Append a new div to our output div, with the appropriate class added
     $("#output").append('<div class="text ' + classToAdd + '"><p>' + newText + '</p></div>');
  });