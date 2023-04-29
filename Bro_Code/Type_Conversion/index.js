// const = A variable that can not be changed.

// Variable declarations.
const pi = 3.141592653589793238462643383279502884197;
let radius;
let circleCircumference;

// This will ask for radius and check the circumference of a circle.
circleRadius = window.prompt("Enter The Radius: ");
circleRadius = Number(circleRadius);
circleCircumference = 2 * pi * circleRadius;
console.log("The Circumference of a Circle is: " + circleCircumference);
