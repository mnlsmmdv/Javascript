// Calculates the Hypotenuse of a right-angle triangle.
let a;
let b;
let c;

/*
a = window.prompt("Enter side A: "); // Asking for user input side A.
a = Number(a); // Type conversion to a Number.

b = window.prompt("Enter side B: "); // Asking for user input side B.
b = Number(b); // Type conversion to a number.
*/

/* Longer version.
c = Math.pow(a, 2) + Math.pow(b, 2);
c = Math.sqrt(c);
*/

/*
c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2)); // Shorter version to calculate Hypotenuse.
console.log("Side C is: ", c); // Displaying the result.
*/

/*Calculates and displays the Hypotenuse value on Submit button click*/
document.getElementById("submitButton").onclick = function() {
    // Gets values from elements and type converts it.
    a = document.getElementById("aTextBox").value;
    a = Number(a);
    b = document.getElementById("bTextBox").value;
    b = Number(b);
    
    // Calculates the Hypotenuse.
    c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
    document.getElementById("cLabel").innerHTML = "Side C: " + c;
}
