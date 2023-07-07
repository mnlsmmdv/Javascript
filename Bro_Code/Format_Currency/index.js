// toLocaleString() = Returns a string with a language
//                    sensitive representation of this number

// number.toLocaleString(locale, {option});

// 'locale' = Specify that language (undefined = default set in browser)
// 'options' = Object with formatting options

// Variable to store locale numbers.
let myNumberOne = 123567.789;

// US locale format.
myNumberOne = myNumberOne.toLocaleString("en-US");

// Displaying US locale format (myNumberOne).
console.log(myNumberOne);
