// variable scope = where a variable is accessible
 
// let = variables are limited to block scope {}
// var = variables are limited to a function(){}

// global variable = is declared outside any function
// (if global, var will CHANGE browser's window properties)

/*
// This For loop counts up to 03.
// let - Example.
for(let i = 1; i <= 3; i += 1){
    // Displaying the count.
    console.log(i);
}
*/

// This function counts up to 04.
function doSomething(){
    for(let i = 1; i <= 3; i += 1){
        // Displaying the count.
        console.log(i);
    }
}
