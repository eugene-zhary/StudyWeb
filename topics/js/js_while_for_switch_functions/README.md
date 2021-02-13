```javascript
let index = 0;

//  while
while (index < 5) {
    index++;
}

//  do while
do {
    index--;
} while (index != 0)

//  for
for (let i = 0; i < 3; i++) {
    alert(i);
}


//  switch
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


// Function Declaration
function sum(a, b) {
    return a + b;
}

// Function Expression
let sum = function (a, b) {
    return a + b;
};

// Lambda Expression
let test = (a, b) => a + b;
let twice = n => n * 2;
let sayHello = () => alert("Hello!");
```