/*This function validates the checkbox with button clicks*/
document.getElementById("myButton").onclick = function(){
    if(document.getElementById("myCheckBox").checked){
        console.log("You Are Subscribed!");
    }
    else{
        console.log("You Are Not Subscribed!");
    }
}
