// return = Returns a value back to the place
//          where you invoked a function

// Variables declared to values of store area, width and height.
let rectangleArea;
let rectangleWidth;
let rectangleHeight;

// User prompts to enter width and height.
rectangleWidth = window.prompt("Enter Width: ");
rectangleHeight = window.prompt("Enter Height: ");

// Function call assigned to variable.
rectangleArea = calculateArea(rectangleWidth, rectangleHeight);

// Displays the area inside of a rectangle.
console.log("Area inside of Rectangle: ", rectangleArea);

// This function calculates the area inside of a rectangle.
function calculateArea(rectangleWidth, rectangleHeight){
    // Calculates the area.
    return rectangleWidth * rectangleHeight;
}
