```javascript
//initialize object

let sample_1 = new Object(); // object constructor

let sample_2 = {}; // object literal


let user = { // object
    name: 'Jhon', // key name with value 'Jhon'
    age: 30, // key age with value 30
    "likes birds": true // key "likes birds" with value true
};
user.surname = 'White'; // add property
delete user.age; // delete property

// call objects properties
user["likes birds"] = false;
user.name = 'Fred';

// checking the existence of properties
alert("age" in user);

function makeUser(name, age) {
    // return object with properties from function
    return {
        name: name,
        age: age
    };
}

let userFromFunc = makeUser('Tom', 16);

// cycle for...in
for (let key in user) {
    // keys
    alert(key);
    // values
    alert(user[key]);
}

// clone object
let clone = Object.assign({}, user);

// key word - this
let my_sample = {
    name: 'test',

    show() {
        //call the current name
        alert(this.name);
    }
}

// constructor function
function User(name, age) {
    this.name = name;
    this.age = age;

    this.sayHi = function () {
        alert("My name is " + this.name);
    };
}

// initialize new object
user = new User('Mary', 19);
user.sayHi();

// return undefined if property surname doesn't exist in user
alert(user?.surname);


// transform object

let sample_override = {
    name: 'test',
    value: 12,

    // override toString()
    toString() {
        return this.name;
    },

    // valueOf()
    valueOf() {
        return this.value;
    }
}

// string
alert(sample_override);

// number
alert(Number(sample_override));

// default (obj == string/number/symbol)
if (user == 1) { }


//
//  Symbol
//

// initialize empty symbol
let symb = Symbol();

// initialize symbol with description "id"
let id = Symbol("id");
alert(id.description); // return description
alert(id.toString()); // return "Symbol(id)"

//add id to user
user[id] = '10';
alert(user[id]);


let sym = Symbol.for("name"); // get symbol by name
alert(Symbol.keyFor(sym)); // get name by symbol
```