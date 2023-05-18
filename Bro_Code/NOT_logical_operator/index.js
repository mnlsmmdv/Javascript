// ! NOT logical operator
// typically used to reverse a condition's boolean value
// true -> false false -> true

// Variable declaration for temperature and sunny weather.
let temperature = 15;
let sunny = true;

// Validates temperature is not above 0°C.
if(!(temperature > 0)){
    // Message given to the user.
    console.log("It is cold outside!");
}
else{
    // Message given to the user.
    console.log("It is warm outside!");
}
