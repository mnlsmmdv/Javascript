// toLocaleString() = Returns a string with a language
//                    sensitive representation of this number

// number.toLocaleString(locale, {option});

// 'locale' = Specify that language (undefined = default set in browser)
// 'options' = Object with formatting options

// Variables to store locale numbers.
let myNumberOne = 123456.789;
let myNumberTwo = 123456.789;

// US locale format.
myNumberOne = myNumberOne.toLocaleString("en-US");
// India locale format.
myNumberTwo = myNumberTwo.toLocaleString("hi-IN");

// Displaying US locale format (myNumberOne).
console.log(myNumberOne);
