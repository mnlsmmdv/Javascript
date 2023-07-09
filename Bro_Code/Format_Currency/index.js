// toLocaleString() = Returns a string with a language
//                    sensitive representation of this number

// number.toLocaleString(locale, {option});

// 'locale' = Specify that language (undefined = default set in browser)
// 'options' = Object with formatting options

// Variables to store locale numbers.
let myNumberOne = 123456.789;
let myNumberTwo = 123456.789;
let myNumberThree = 123456.789;
let myCurrencyOne = 123456.789;
let myCurrencyTwo = 123456.789;
let myCurrencyThree = 123456.789;
let myPercentOne = 123456.789;
let myPercentTwo = 100;
let myPercentThree = .5;
let myPercentFour = .01;
let myUnitOne = 30;
let myUnitTwo = 72;
let myUnitThree = 6;
let myUnitFour = 5;
let myUnitFive = 100;

// US locale format (US English).
myNumberOne = myNumberOne.toLocaleString("en-US");
// India locale format (Hindi).
myNumberTwo = myNumberTwo.toLocaleString("hi-IN");
// German locale format (Standard German).
myNumberThree = myNumberThree.toLocaleString("de-DE");

// US currency locale format (US Dollar).
myCurrencyOne = myCurrencyOne.toLocaleString("en-US", {style: "currency", currency: "USD"});
// India currency locale format (Indian Rupee).
myCurrencyTwo = myCurrencyTwo.toLocaleString("hi-IN", {style: "currency", currency: "INR"});
// German currency locale format (German Euro).
myCurrencyThree = myCurrencyThree.toLocaleString("de-DE", {style: "currency", currency: "EUR"});

// Assigning Percent locale (myPercentOne).
myPercentOne = myPercentOne.toLocaleString(undefined, {style: "percent"});
// Assigning Percent locale (myPercentTwo).
myPercentTwo = myPercentTwo.toLocaleString(undefined, {style: "percent"});
// Assigning Percent locale (myPercentThree).
myPercentThree = myPercentThree.toLocaleString(undefined, {style: "percent"});
// Assigning Percent locale (myPercentFour).
myPercentFour = myPercentFour.toLocaleString(undefined, {style: "percent"});

// Assigning Unit locale (myUnitOne).
myUnitOne = myUnitOne.toLocaleString(undefined, {style: "unit", unit: "celsius"});
// Assigning Unit locale (myUnitTwo).
myUnitTwo = myUnitTwo.toLocaleString(undefined, {style: "unit", unit: "fahrenheit"});
// Assigning Unit locale (myUnitThree).
myUnitThree = myUnitThree.toLocaleString(undefined, {style: "unit", unit: "mile"});
// Assigning Unit locale (myUnitFour).
myUnitFour = myUnitFour.toLocaleString(undefined, {style: "unit", unit: "kilometer"});
// Assigning Unit locale (myUnitFive).
myUnitFive = myUnitFive.toLocaleString(undefined, {style: "unit", unit: "kilogram"});

// Displaying US locale format (myNumberOne).
console.log(myNumberOne);
// Displaying India locale format (myNumberTwo).
console.log(myNumberTwo);
// Displaying German locale format (myNumberThree).
console.log(myNumberThree);

// Displaying US currency locale format (US Dollar).
console.log(myCurrencyOne);
// Displaying India currency locale format (Indian Rupee).
console.log(myCurrencyTwo);
// Displaying German currency locale format (German Euro).
console.log(myCurrencyThree);

// Displaying Percent locale (myPercentOne).
console.log(myPercentOne);
// Displaying Percent locale (myPercentTwo).
console.log(myPercentTwo);
// Displaying Percent locale (myPercentThree).
console.log(myPercentThree);
// Displaying Percent locale (myPercentFour).
console.log(myPercentFour);

// Displaying Unit locale (myUnitOne).
console.log(myUnitOne);
// Displaying Unit locale (myUnitTwo).
console.log(myUnitTwo);
// Displaying Unit locale (myUnitThree).
console.log(myUnitThree);
// Displaying Unit locale (myUnitFour).
console.log(myUnitFour);
// Displaying Unit locale (myUnitFive).
console.log(myUnitFive);
