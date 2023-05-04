/*
    Useful String Methods
*/

// Displays the length of string.
let userName = "mnlsmmdv";
let nameLength = userName.length;
console.log("Length of Username: " + nameLength);

// Displays the index of a character in a given string.
let userNameTwo = "mnlsmmdv";
let nameIndex = userNameTwo.charAt(6);
console.log("Index of Character: " + nameIndex);

// Displays the index of first and last occuring character in a given string.
let userNameThree = "mnlsmmdv";
let nameFirstOccuringIndex = userNameThree.indexOf("m");
let nameLastOccuringIndex = userNameThree.lastIndexOf("m");
console.log("First occuring index of Character: " + nameFirstOccuringIndex);
console.log("Last occuring index of Character: " + nameLastOccuringIndex);
