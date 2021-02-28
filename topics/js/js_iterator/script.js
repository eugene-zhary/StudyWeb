"use strict";

// implementation of iterator
let range = {
    from: 1,
    to: 5,

    [Symbol.iterator]() {
        this.current = this.from;
        return this;
    },

    next() {
        if (this.current <= this.to) {
            return { done: false, value: this.current++ };
        } else {
            return { done: true };
        }
    }
};

for (let num of range) {
    alert(num);
}


// create an array from the object
let arr = Array.from(range);

// an array where each number squared
let squared_arr = Array.from(range, num => num * num);