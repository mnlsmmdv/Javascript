// while loop = Repeat some code
//              while some condition is true
//              potentially infinite

// Variable declaration to store username.
let userName = "";

// Validates if username is an empty string and asks to enter username.
while(userName == "" || userName == null){
    // Prompts to enter username.
    userName = window.prompt("Enter your username: ");
}

// Displays the username given by the user.
console.log("Hello", userName);
