/*This function validates the checkbox with button clicks*/
document.getElementById("myButton").onclick = function(){
    const myCheckBox = document.getElementById("myCheckBox")
    if(myCheckBox.checked){
        console.log("You Are Subscribed!");
    }
    else{
        console.log("You Are Not Subscribed!");
    }
}
