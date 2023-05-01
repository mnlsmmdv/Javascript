/*
    Counter Program
*/
let count = 0;

// This function decreases the count.
document.getElementById("decreaseButton").onclick = function(){
    count -= 1;
    document.getElementById("countLabel").innerHTML = count;
}
// This function resets the count.
document.getElementById("resetButton").onclick = function(){
    count = 0;
    document.getElementById("countLabel").innerHTML = count;
}
// This function increases the count.
document.getElementById("increaseButton").onclick = function(){
    count += 1;
    document.getElementById("countLabel").innerHTML = count;
}
