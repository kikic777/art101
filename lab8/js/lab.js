//index.js - Working with a partner, experiment with anonymous functions and callbacks!
//Author: Cynthia Ramirez
//Date: 5/13/2024

function isEven(x){
    return (x % 2 == 0);
}

// test function
console.log("Is 1 even? ", isEven(1));
console.log("Is 2 even? ", isEven(2));

var array = [22, 3, 15, 94, 777, 522, 86, 48]
// should return (8) [22, 3, 15, 94, 777, 522, 86, 48]
console.log("My Array: " + array);

let resultNum  = array.map(isEven)
// should return (8) [true, false, false, true, false, true, true, true]
console.log("Eveness of Array: " + resultNum);

let resultMultiply  = array.map(function(x){
    return x * 0.5;
})
// should return (8) [11, 1.5, 7.5, 47, 388.5, 261, 43, 24]
console.log("Half of Array:" + resultMultiply);

// Your map results data
let mapResults = "Your map results here";

//Use jQuery to select the elemnts by its ID and set the HTML content
$("#output").html(mapResults);


const mapResults = `isEven: ${resultNumb.join(', ')} <br> half of Array: ${resultMultiply.join(', ')}`;
