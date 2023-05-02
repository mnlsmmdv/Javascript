/*
    Random Number Generator
*/

// This function displays the generated random numbers.
document.getElementById("rollButton").onclick = function(){
    // Variable declarations.
    // Simulates a 06 sided dice.
    let numberOne = Math.floor(Math.random() * 6) + 1;
    let numberTwo = Math.floor(Math.random() * 6) + 1;
    let numberThree = Math.floor(Math.random() * 6) + 1;

    // Displays the numbers.
    document.getElementById("randomNumber1").innerHTML = numberOne;
    document.getElementById("randomNumber2").innerHTML = numberTwo;
    document.getElementById("randomNumber3").innerHTML = numberThree;
}

// This function resets the labels.
document.getElementById("resetButton").onclick = function(){
    document.getElementById("randomNumber1").innerHTML = "0";
    document.getElementById("randomNumber2").innerHTML = "0";
    document.getElementById("randomNumber3").innerHTML = "0";
}
