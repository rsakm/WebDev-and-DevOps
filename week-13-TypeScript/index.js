var x = 1; //// type inferencing
console.log(x);
var y = 2; /// y is number
console.log(y);
// x = "rajshree";   //// Error: type string is not assignable to type number
function greet(name) {
    console.log("Hello " + name);
}
function sum(a, b) {
    return a + b; //// implicitly return type is number known as inferred return type
}
greet("Rajshree");
var add = sum(5, 6);
console.log(add);
var z = 1; /// any data type can be assigned, but it is not recommended
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
var isAdult1 = isAdult(20);
console.log(isAdult1);
// // we can define the return type of a function explicitly as well
function plus(a, b) {
    return a + b;
}
var ans = plus(5, 6);
console.log(ans);
function isLegal(age) {
    if (age > 18) {
        return true;
    }
    else {
        return false;
    }
}
var isLegal1 = isLegal(20);
console.log(isLegal1);
// const add = plus("4",5);  ///Error: Argument of type 'string' is not assignable to parameter of type 'number'.
// let add : string = plus(5, 6);   /// error: Type 'number' is not assignable to type 'string'.
function delayedCall(fn) {
    setTimeout(fn, 1000);
} //// void is return type so the function passed when calling delayedCall will not return anything and have no arguments
delayedCall(function () {
    console.log("Hello");
});
var fn = function () { return console.log("Hi Rajshree here!"); };
fn();
