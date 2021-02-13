
//
//  cycles
//

let index = 0;
while (index < 5) {
    index++;
}

do {
    index--;
} while (index != 0)


for (let i = 0; i < 3; i++) {
    alert(i);
}


//
//  switch
//

switch (index) {
    case 0:
        alert('zero');
        break;
    case 1:
        alert('one');
        break;
    case 2:
        alert('two');
        break;
    default:
        alert('default');
        break;
}

//
//  functions
//


// Function Declaration

function sum(a, b) {
    return a + b;
}


// Function Expression

let sum = function (a, b) {
    return a + b;
};


// Functions Callbacks

function ask(question, yes, no) {
    if (confirm(question))
        yes();
    else
        no();
}

function showOk() {
    alert('You agree');
}

function showCancel() {
    alert('You canceled the execution');
}

ask('Are you agree?', showOk, showCancel);


// Lambda Expression

let test = (a, b) => a + b;
let twice = n => n * 2;
let sayHello = () => alert("Hello!");

let welcome = (age < 18) ?
    () => alert('Hi') :
    () => alert('Hello');
