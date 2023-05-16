// switch = Statement that examines a value
//          for a match against many case clauses.
//          More efficient than many "else if" statements

// Variable declaration for grade.
let grade = "A";
//let grade = "E";

// Case clauses for the grade variable.
switch(grade){
    // Grade is A.
    case "A":
        // Message given to user.
        console.log("You did great!");
        break;
    // Grade is B.
    case "B":
        // Message given to user.
        console.log("You did good!");
        break;
    // Grade is C.
    case "C":
        // Message given to user.
        console.log("You did okay!");
        break;
    // Grade is D.
    case "D":
        // Message given to user.
        console.log("You passed...barely!");
        break;
    // Grade is F.
    case "F":
        // Message given to user.
        console.log("You failed!");
        break;
    // No matching grade.
    default:
        // Message given to user.
        console.log(grade, "is not a letter grade!");
}
