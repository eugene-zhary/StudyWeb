"use strict";

//
//  MAP
//

// Map, key - value collection where key and value can be any type
let map = new Map();

// set the new element key, value
map.set('1', 'str value');
map.set(1, 'number value');
map.set(true, 'boolean value');

// get value by key
map.get(true); // returns 'boolean value'

// returns size of the collection
map.size;

// returns true if map contains the key
map.has(1);

// delete element by key
map.delete('1');

// clear the collection
map.clear();


let recipeMap = new Map([
    ['apple', 20],
    ['banana', 30],
    ['orange', 35],
]);

// create an object from the map
let fruitObj = Object.fromEntries(recipeMap);

fruitObj.apple // 20


// .keys() - iterator by keys
for (let fruit of recipeMap.keys()) {
    //fruit - apple banana orange
}

// .values() - iterator by values
for (let amount of recipeMap.values()) {
    //amount - 20 30 35
}

// pair iterator
for (let entry of recipeMap) {
    //entry - apple,20 banana,30 orange,35
}


let obj = {
    name: "John",
    age: 30
};

// convert any object to the map
let mapFromObj = new Map(Object.entries(obj));

for (let item of mapFromObj) {
    // item - name,John age,30
}


//
//  SET
//

// a set values without keys, where each element is unique
let set = new Set();

// add a new element(if element already exists do nothing)
set.add("value");

// delete the element returns true if element was in the set, otherwise false
set.delete("value");

// returns true if element exists in the collection, otherwise false
set.has("value");

// clear the set
set.clear();

// returns size of the set
set.size;


let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

set.size // 3

for (let person of set) {
    // person - John, Pete, Mary
}


//
//  WeakMap
//

// each key must be the object
let weakMap = new WeakMap();

// WeakMap methods:
//  get(key)
//  set(key, value)
//  delete(key)
//  has(key)

john = { name: 'John' };
weakMap.set(john, '...');

john = null;
weakMap.has(john); //false


//
//  WeakSet
//

let weakSet = new WeakSet();

// WeakMap methods:
//  get(key)
//  add(value)
//  delete(key)
//  has(key)

john = { name: "John" };
weakSet.add(john);

weakSet.has(john); // true
john = null

weakSet.has(john); // false