/*
    Counter Program
*/
let count = 0;

// This function decreases the count.
document.getElementById("decreaseButton").onclick = function(){
    count -= 1;
    document.getElementById("countLabel").innerHTML = count;
}
