// Accepting user input using a Javascript window prompt.
let username = window.prompt("Enter Your Username: ");
console.log(username);

// Accepting user input using an HTML text box and button.
let usernameTwo;
document.getElementById("myButton").onclick = function(){
    usernameTwo = document.getElementById("myText").value;
    console.log("Your Username: " + usernameTwo);
    document.getElementById("myLabel").innerHTML = "Hello " + usernameTwo;
}
