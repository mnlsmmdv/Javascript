// ternary operator = Shortcut for an 'if/ else statement'
//                    Takes 3 operands
                     
//                    1. a condition with ?
//                    2. expression if True .
//                    3. expression if False

// condition ? exprIfTrue : exprIfFaIse

// Function assigned to variable.
let adult = checkAge(21);

/*
// Displays the age after checking.
console.log("Users Age:", adult);
*/

// Invoking function to display message.
// User has won.
checkWinner(true);
// User has lost.
checkWinner(false);

/*
// This function will check a users age.
// If-Else statement example.
function checkAge(age){
    // Checks if age is 18 and above.
    if(age >= 18){
        // User is 18 and above.
        return true;
    }
    else{
        // User is below 18.
        return false;
    }
}
*/

// This function will check a users age.
// Ternary operator example.
function checkAge(age){
    // Returns age by checking with Ternary operator.
    return age >= 18 ? true : false;
}

// This function checks if user has won a game.
function checkWinner(win){
    // Displays upon invoking function with boolean values.
    win ? console.log("YOU WIN!") : console.log("YOU LOSE!");
}
