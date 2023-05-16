/*This function validates the checkbox with button clicks*/
document.getElementById("myButton").onclick = function(){
    const myCheckBox = document.getElementById("myCheckBox")
    if(myCheckBox.checked){
        // Displays the user is subscribed.
        console.log("You Are Subscribed!");
    }
    else{
        // Displays the user is not subscribed.
        console.log("You Are Not Subscribed!");
    }
}
