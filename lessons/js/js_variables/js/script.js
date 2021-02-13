"use strict";

//initialize constant
const COLOR_RED = "#F00";
//initialize variable
let color = COLOR_ORANGE;

//
//  variable types
//

//number
let num = 123;
num = 12.345;

//big int - use n at the and
let bigInt = 1234256413425n;

//string
let str = "Hello";

//bool
let isActive = false;

//null (non-existent type)
let age = null;

//underfiend (uninitialized type)
let name;

//
//  typeof returns type of argument
//

//undefined
typeof undefined

//object
typeof null

//number
typeof 0

//bigint
typeof 10n

//boolean
typeof true

//string
typeof "foo"

//function
typeof alert

//
//  transformation
//

// transform to string
String(true);

//transform to number
let result = "6" / "2";

//transform to number
Number("123");
Number("123z"); //NaN

//transform to boolean
Boolean(1); //true
Boolean(0); //false

Boolean("Hello"); //true
Boolean(""); //false



