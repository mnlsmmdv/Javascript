// toLocaleString() = Returns a string with a language
//                    sensitive representation of this number

// number.toLocaleString(locale, {option});

// 'locale' = Specify that language (undefined = default set in browser)
// 'options' = Object with formatting options

// Variable to store locale number.
let myNumber = 123567.789;

// US locale format.
myNumber = toLocaleString("en-US");

// Displaying US locale format (myNumber).
console.log(myNumber);
