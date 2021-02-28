```javascript
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


// iterator by keys
recipeMap.keys();

// iterator by values
recipeMap.values()

// pair iterator
recipeMap


let obj = {
    name: "John",
    age: 30
};

// convert any object to the map
let mapFromObj = new Map(Object.entries(obj));


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
```