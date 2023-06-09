// nested loop = A loop inside of an other loop.

// Asking for user inputs.
let rows = window.prompt("Enter # of rows: ");
let columns = window.prompt("Enter # of columns: ");

/*
// Counts from 01-03.
for(let i = 1; i <= 3; i += 1){
    // Displays the count 01-03.
    console.log(i);
}
*/

/*
// Counts from 01-03 (nested).
// First For loop iterates three times.
for(let i = 1; i <= 3; i += 1){
    for(let j = 1; j <= 3; j += 1){
        // Displays the count from 01-03.
        console.log(j);
    }
}
*/

// Counts from 01-03 (nested).
// First For loop iterates three times.
// Uses user inputs to display count.
for(let i = 1; i <= rows; i += 1){
    for(let j = 1; j <= columns; j += 1){
        // Displays the count from 01-03.
        // Changes the inner HTML to display on the label.
        document.getElementById("myRectangle").innerHTML += j;
    }
    // Line break.
    document.getElementById("myRectangle").innerHTML += "<br>";
}
