// function = Define code once, and use it many times.
//            To perform some code, call the function name.

// Variables to store users name and age.
let userName = "Affaan";
let userAge = 24;

// Function called to display birthday message once.
happyBirthday();

// This function displays the Happy Birthday song in three iterations.
function happyBirthday(){
    // Displays birthday message.
    console.log("Happy birthday to you!");
    console.log("Happy birthday to you!");
    console.log("Happy birthday dear ", userName);
    console.log("Happy birthday to you!");
    console.log("You are", userAge,"years old!");
}
