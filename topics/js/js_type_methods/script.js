"use strict";

//
//  string
//

let str = "hello";

str.toUpperCase(); // to upper case
str.toLowerCase(); // to lower case

str.length; // return string length

// return char by index
str[0];
str.charAt(0);

str[0].toUpperCase(); // char to upper case
str[0].toLowerCase(); // char to lower case

str.indexOf("lo"); // index of substr in str. -1 if no matches
str.indexOf("l", 3); // infex of from position number

str.includes("ell"); // returns true if str includes substr
str.includes("ell", 3); // returns true if str includes substr from position number

str.startsWith("he"); // return true if str starts with
str.endsWith("lo"); // retrun true if str ends with

str.slice(0, 3); // start, end. return substr "hel"
str.slice(3); // start. returns substr from position number to end

str.slice(-4, -1) // start at position 4 on the right and end at position 1 on the right

//returns the substr between start and end
str.substring(1, 3);
str.substring(3, 1);

str.substr(2, 2); // postion from, length.

str.codePointAt(0); // returns code of symbol at position number
String.fromCodePoint(90); // returns symbol from number


//
//  number
//

let num = 1.23456;

num.toFixed(2); // round up to a number after the decimal point

Math.floor(num); // round down
Math.ceil(num); // round up
Math.round(num); // round to the nearest integer
Math.trunc(num); // remove fractional part without round


//NaN === NaN - false
isNaN("str"); // converts to number and check for NaN
isFinite("12"); // converts to number and check for number

parseInt('12.3'); // parse to int
parseFloat('1.23'); // parse to float


Math.random(); // random from 0 to 1
Math.max(3, 4, 5, 6); // returns max value
Math.min(3, 4, 5, 6); // returns min value
Math.pow(2, 10); // raise a number
