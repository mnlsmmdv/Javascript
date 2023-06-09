// A variable is a container for storing data
// A variable behaves as if it was the value it contains

// Two steps:
// 1. Declaration (var, let, const)
// 2. Assignment (= assignment operator)

// Declaring variables + displaying value.
let age;
age = 21;
let secondAge = 23;
console.log("Your age is: " + age);
console.log("Your second age is: " + secondAge);

// Incrementing to a variable + displaying value.
let thirdAge = 50;
fourthAge = thirdAge + 1;
console.log("Your fourth age is: " + fourthAge);

// Displaying a series of characters (String).
let firstName = "Ahmed";
let secondName = "Affaan";
console.log("Your name is: " + firstName + " " + secondName);

// Displaying a boolean value (True or False).
let enrolledStatusOne = true;
let enrolledStatusTwo = false;
console.log("Student Status: " + enrolledStatusOne);
console.log("Student Status: " + enrolledStatusTwo);

// Displays all Variable type values.
console.log("Your name is: " + firstName + " " + secondName + ", Your age is: " + secondAge + ", Student Status: " + enrolledStatusOne)

// Changing innner HTML of document.
document.getElementById("p1").innerHTML = "Your Name is: " + firstName + " " + secondName;
document.getElementById("p2").innerHTML = "Your Age is: " + secondAge;
document.getElementById("p3").innerHTML = "Student Status: " + enrolledStatusOne;
