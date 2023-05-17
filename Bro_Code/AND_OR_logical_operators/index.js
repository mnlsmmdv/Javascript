// Gives us the ability to check more than 1 condition concurrently
// && AND (BOTH conditions must be true)
// || OR (Either condition can be true)

// Variable declaration for temperate.
let temperature = 15;
//let temperature = -10;
let temperatureTwo = 50;
//let temperatureTwo = 15;

// Validates temperature if temperature is between 0°C-30°C.
if(temperature > 0 && temperature < 30){
    // Message given to the user.
    console.log("The weather is good!");
}
else{
    // Message given to the user.
    console.log("The weather is bad!");
}
