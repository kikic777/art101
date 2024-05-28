//index.js - Working with your partner, experiment with JS events. This simple JavaScript/jQuery script gets a value from an input field and outputs a modified version.
//Requirements: jQuery must be loaded for this script to work.
//Author: Cynthia Ramirez
//Date: 5/20/2024

// Sorts the characters of a string in alphabetical order.
function sortString(inputString) {
    // We have to convert our string to an array and back again to sort it
    return inputString.split('').sort().join('');
}

// click listener for button
$("#submit").click(function(){
    // get value of input field
    const userName = $("#user-name").val();
    
  
    // now let's sort it and append it to the output div
    userNameSorted = sortString(userName);
    
    // append a new div to our output div
   $("#output").html('<div class="text"><p>' + userNameSorted + '</p></div>');
});
