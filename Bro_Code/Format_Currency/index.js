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
