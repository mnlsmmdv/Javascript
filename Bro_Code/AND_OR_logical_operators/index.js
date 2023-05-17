// Gives us the ability to check more than 1 condition concurrently
// && AND (BOTH conditions must be true)
// || OR (Either condition can be true)

// Variable declaration for temperate.
let temperature = 15;
//let temperature = -10;
let temperatureTwo = 50;
//let temperatureTwo = 15;
let sunny = true;
//let sunny = false;

// Validates temperature if temperature is between 0°C-30°C (AND Operator).
if(temperature > 0 && temperature < 30){
    // Message given to the user.
    console.log("The weather is good!");
}
else{
    // Message given to the user.
    console.log("The weather is bad!");
}

// Validates temperature if temperature is below 0°C or above 30°C (OR Operator).
if(temperatureTwo){
    // Message given to the user.
    console.log("The weather is bad!");
}
else{
    // Message given to the user.
    console.log("The weather is good!");
}

// Validates temperature if temperature is between 0°C-30°C and it is sunny (AND Operator).
if(temperature > 0 && temperature < 30 && sunny){
    // Message given to the user.
    console.log("The weather is good!");
}
else{
    // Message given to the user.
    console.log("The weather is bad!");
}
