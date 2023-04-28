/*
    Arithmetic expressions is a combination of...
    operands (values, variables, etc.)
    operators (+ - * / %)
    that can be evaluated to a value.
    ex. y = x + 5;
*/

// Variable declaration.
let students = 23;
let studentsTwo = 20;
let extraStudents = students % 3;

// Addition.
addition = students + 1;
console.log("Addition: " + addition);

// Subtraction.
subtraction = students - 1;
console.log("Subtraction: " + subtraction);

// Multiplication.
multiplication = students * 2;
console.log("Multiplication: " + multiplication);

// Division.
division = students / 2;
console.log("Division: " + division);

// Remainder (Modulus Operator).
console.log("Remainder: " + extraStudents)

// Augmented Assignment Operator examples.
console.log("Augmented Operator Addition: " + (studentsTwo += 1))
console.log("Augmented Operator Subtraction: " + (studentsTwo -= 1))
console.log("Augmented Operator Multiplication: " + (studentsTwo *= 2))
console.log("Augmented Operator Division: " + (studentsTwo /= 2))
console.log("Augmented Operator Remainder: " + (studentsTwo %= 3))
