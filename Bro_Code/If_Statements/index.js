// if statement = A basic form of decision making
//                if a condition is true, then do something
//                if not, then don't do it!

// Variable declarations.
let age = 21;
let ageTwo = 12;
let ageThree = -5;
let ageFour = 65;
let online = true;
let offline = true; 

// Displays message if user is over 18 years old.
if(age >= 18){
    console.log("You are an adult!");
}
else if(age < 0){
    console.log("You haven't been born yet!")
}
else{
    console.log("You are a child!");
}

// Displays message if user is below 18 years old.
if(ageTwo >= 18){
    console.log("You are an adult!");
}
else if(ageTwo < 0){
    console.log("You haven't been born yet!");
}
else{
    console.log("You are a child!");
}

// Displays message if user is below 0 years old.
if(ageThree >= 18){
    console.log("You are an adult!");
}
else if(ageThree < 0){
    console.log("You haven't been born yet!");
}
else{
    console.log("You are a child!")
}

// Displays message if user is above 65 years old.
if(ageFour >= 65){
    console.log("You are a senior citizen!");
}
if(ageFour >= 18){
    console.log("You are an adult!");
}
else if(ageFour < 0){
    console.log("You haven't been born yet!");
}
else{
    console.log("You are a child!");
}

// Displays message if user is online.
if(online){
    console.log("You are online!");
}
else{
    console.log("You are offline!");
}

// Displays message if user is offline.
if(offline){
    console.log("You are offline!");
}
else{
    console.log("You are online!");
}
 