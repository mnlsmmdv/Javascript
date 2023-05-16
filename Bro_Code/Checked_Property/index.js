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
}
