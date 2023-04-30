/*
    Type conversion = Changing the datatype of a value to another
    (strings, numbers, booleans)
*/

// User input example with type conversion.
/*
let age = window.prompt("How Old Are You?: ");
age = Number(age);
age += 1;
console.log("Happy Birthday! You are ", age, " years old.");
*/

// Type conversion example.
// Variable declarations.
let w;
let x;
let y;
let z;
// Converting a String to a Number.
x = Number("3.14");
// Converting a Number to a String.
y = String(3.14);
// Converting a value to a Boolean.
z = Boolean("");
// Displaying current type of converted values.
console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);
