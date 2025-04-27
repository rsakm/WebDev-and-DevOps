"use strict";
let x = 1; //// type inferencing
console.log(x);
let y = 2; /// y is number
console.log(y);
// x = "rajshree";   //// Error: type string is not assignable to type number
function greet(name) {
    console.log("Hello " + name);
}
function sum(a, b) {
    return a + b;
}
greet("Rajshree");
const add = sum(5, 6);
console.log(add);
let z = 1; /// any data type can be assigned, but it is not recommended
z = true;
z = "Rajshree";
function isAdult(age) {
    if (age > 18) {
        return true;
    }
    else {
        return false;
    }
}
const isAdult1 = isAdult(20);
console.log(isAdult1);
