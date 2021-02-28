"use strict";

let student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    wife: null
};

//serialize to JSON
let json = JSON.stringify(student);

typeof json; // string
json; // {"name":"John","age":30,"isAdmin":false,"courses":["html","css","js"],"wife":null}

//JSON.stringify(...); supports:
//-Objects
//-Arrays
//-Primitives: string, number, boolean, null

// override toJSON method
let room = {
    number: 23,
    toJSON() {
        return this.number;
    }
}
JSON.stringify(room); // 23


// JSON.parse

let json_str = '{"name":"John","age":30,"isAdmin":false,"courses":["html","css","js"],"wife":null}';

let json_student = JSON.parse(json_str);


json_str = '{"date":"2017-11-30T12:00:00.000Z"}';

let meetup = JSON.parse(json_str, (key, value) => {
    if (key == 'date')
        return new Date(value);
    return value;
});

meetup.date.getDate(); // 30