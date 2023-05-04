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

// Displays string after trimming excess space.
let userNameFour = "   mnlsmmdv   ";
let userNameTrim = userNameFour.trim();
console.log("Username after trimming: " + userNameTrim);

// Displays string after converting to uppercase and lowercase letters.
let userNameFive = "mnlsmmdv";
let userNameUpper = userNameFive.toUpperCase();
let userNameLower = userNameFive.toLowerCase();
console.log("Strings converted to Uppercase: " + userNameUpper);
console.log("Strings converted to Lowercase: " + userNameLower);

// Displays string after replacing certain characters.
let userPhoneNumber = "123-456-7890";
let numberCharReplace = userPhoneNumber.replaceAll("-", "");
console.log("Phone Number cleanup: " + numberCharReplace);
