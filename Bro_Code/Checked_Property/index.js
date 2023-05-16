/*This function validates the checkbox with button clicks*/
document.getElementById("myButton").onclick = function(){
    // Constants declared to retrieve element ID.
    const myCheckBox = document.getElementById("myCheckBox");
    const visaButton = document.getElementById("visaButton");
    const mastercardButton = document.getElementById("mastercardButton");
    const americanexpressButton = document.getElementById("americanexpressButton");

    // Validates checked state of check box and displays messages accordingly.
    if(myCheckBox.checked){
        // Displays the user is subscribed.
        console.log("You Are Subscribed!");
    }
    else{
        // Displays the user is not subscribed.
        console.log("You Are Not Subscribed!");
    }

    // Validates checked states of radio buttons and displays messages accordingly.
    if(visaButton.checked){
        // Displays the user is paying with Visa.
        console.log("You are paying with a Visa!");
    }
    else if(mastercardButton.checked){
        // Displays the user is paying with a Master Card.
        console.log("You are paying with a Master Card!");
    }
    else if(americanexpressButton.checked){
        // Displays the user is paying with a American Express.
        console.log("You are paying with a American Express");
    }
    else{
        // Displays the user has to select a payment type.
        console.log("You must select a payment type!");
    }
}
