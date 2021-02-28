```javascript
//
//  Array destructuring
//

let arr = ['Ilya', 'Kantor'];

// destructuring assignment:
// let firstName = arr[0];
// let secondName = arr[1];
let [firstName, secondName] = arr;

let [name, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

title; // Consul

// It can be used with any ienumerable object or type
let [a, b, c] = "abc";
let [one, two, three] = new Set([1, 2, 3]);

let user = {
    name: 'John',
    age: 32
};

// for keys and values
for (let [key, value] of Object.entries(user)) {
    // alert(`${key} : ${value}`);
}

// rest parameters is an array of the rest elements
let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

name1; // Julius
name2; // Caesar

rest.length // 2
rest[0]; // Consul
rest[1]; // of the Roman Republic

let [any_value] = [];
any_value; // underfined

let [default_value = 'Guest'] = [];
default_value; // Guest


//
//  Object destructuring
//

let options = {
    option_title: 'Menu',
    width: 100,
    height: 200,
    size: 40,
};

// Properties option.title, option.width... set to assigned fields
// The order doesn't metter
// { sourceProperty: targetVariable }
// set the default value with '='
let { height: h, option_title, subtitle: st = 'test', ...rest_properties } = options;

// width  -> w     = 100
// height -> h     = 200
// option_title    = Menu
// st              = test
// rest_properties = new object with other properties

rest_properties.size // 40


//
//  Nested Destructuring
//

let options = {
    size: {
        width: 100,
        height: 200
    },

    items: ['Cake', 'Donut'],
    extra: true
};

//destructuring
let {
    size: {
        width,
        height
    },
    items: [item1, item2],
    description = 'Menu'
} = options;


//
//  Clever params in functions
//

function showMenu({ description = "untitled", width = 100, height = 200, items = [] }) {
    alert(description);
}

// destructuring properties to function
showMenu(options);

// use default values
showMenu({});
```