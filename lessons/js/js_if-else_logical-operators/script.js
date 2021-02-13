"use strict";

let age = prompt("How old are you?", 18);

if (age < 18) {
    alert('Hi!');
} else if (age <= 18) {
    alert('Hello!');
} else {
    alert('Yo!');
}

//Conditional operator '?'
let accessAllowed = (age > 18) ? true : false;


//
//  logical operators
//

// OR - ||

true || true   // true
false || true  // true
true || false  // true
false || false // false

//if all values are false returns last value
result = value1 || value2 || value3;

// AND - &&

true && true   // true
false && true  // false
true && false  // false
false && false // false

//if all values are true returns last value
result = value1 && value2 && value3;

// NOT - !

!true //false


//
//  The null coalescing operator '??'
//

//if user is undefined returns 'Anon'
//if user defined returns user
user ?? 'Anon';

//returns first defined value
firstName ?? lastName ?? nickName ?? 'Anon';
