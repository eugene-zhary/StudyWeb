"use strict";

// initialize array
let arr_1 = new Array();
let arr_2 = new Array(3); // length 3
let arr_3 = [];

let fruits = ['apple', 'lemon', 'banana'];

// call each element of array
fruits[0]; // apple
fruits[1]; // lemon
fruits[2]; // banana

// change element
fruits[1] = 'orange';

// add new element
fruits[3] = 'pear';

// array length
fruits.length;

// toString - returns all element of the arrya
fruits // apple,orange,banana,pear

// delete elements (returns removed elements)
fruits.splice(1, 1); // start position, count

// delete elements and insert new elements (returns removed elements)
fruits.splice(0, 2, 'avacado', 'apricots'); // start position, count, elements to insert

// returns copy elements
fruits.slice(0, 2); // start postion, end position

// returns new array that copies data from other arrays
fruits.concat(['cherry', 'coconut']);

// calls alert for each element
fruits.forEach(alert);

// forEach args: value, index, array
fruits.forEach((item, index, array) => {
    alert(`${item} has ${index} position in ${array}`);
});

// returns first element that fit
// args: value, index, array
fruits.find(item => item == 'pear');

// returns first elements that fit
// args - value, index, array
fruits.filter((item, index) => index < 2);

// transforms each element to smthing else and return
// args: value, index, array
fruits.map(item => item.length);

// sorts the array
// bad for numeric
fruits.sort();

// good for numeric
let arr_num = [3, 4, 51, 12, 2];
arr_num.sort((a, b) => {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
});

// reverse the array
arr_num.reverse();

// args: previousValue, item, index, array
arr_num.reduce((previous, current) => previous + current); // sum of arrya

let names = 'Jhon, Tom, Fred';

// returns the array
let splited = names.split(', '); // ['Jhon', 'Tom', 'Fred'];

// returns the string
splited.join(';'); // Jhon;Tom;Fred


// returns index number of element in the array. -1 if element doesn't exist.
fruits.indexOf('pear');

// returns true if element exists in the array
fruits.includes('avacado');



fruits.pop(); // delete last element of the array
fruits.push('pear'); // add new element to the end of the array

fruits.shift(); // delete first element of the array
fruits.unshift('apple'); // add an element to the begin of the array


// array can contains different types
let arr = ['Apple', { name: 'Jhon' }, true, function () { alert('Hello'); }];

// returns true or false
Array.isArray(arr);

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

matrix[1][1]; // 5
