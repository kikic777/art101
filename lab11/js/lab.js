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