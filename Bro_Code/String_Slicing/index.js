// slice() extracts a section of a string
//         and returns it as a new string,
//         without modifying the original string

// Variable declaration.
let fullName = "Ahmed Affaan";
let firstName;
let lastName;

// Assigning character strings to variable.
/*
firstName = fullName.slice(0, 5);
lastName = fullName.slice(6, 12);
*/

// Displays sliced string from specific indexes.
firstName = fullName.slice(0, fullName.indexOf(" "));
lastName = fullName.slice(fullName.indexOf(" ") + 1);

// Displays sliced character values.
/*
console.log("First Name: " + firstName);
console.log("Last Name: " + lastName);
*/
