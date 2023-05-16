// switch = Statement that examines a value
//          for a match against many case clauses.
//          More efficient than many "else if" statements

// Variable declaration for grade.
let grade = "A";
let numberGrade = 95;
//let numberGrade = 0;
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

// Case clauses for the number grade variable.
switch(numberGrade){
    // Grade is A.
    case numberGrade >= 90:
        // Message given to user.
        console.log("You did great!");
        break;
    // Grade is B.
    case numberGrade >= 80:
        // Message given to user.
        console.log("You did good!");
        break;
    // Grade is C.
    case numberGrade >= 70:
        // Message given to user.
        console.log("You did okay!");
        break;
    // Grade is D.
    case numberGrade >= 60:
        // Message given to user.
        console.log("You passed...barely!");
        break;
    // Grade is F.
    case numberGrade > 60:
        // Message given to user.
        console.log("You failed!");
        break;
    // No matching number grade.
    default:
        // Message given to user.
        console.log(numberGrade, "is not a matching number grade!");
}
