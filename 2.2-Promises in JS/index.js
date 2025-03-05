const user ={
    name : "Rajshree",
    age:21
}

// these objects are different from the objects defined in classes
class Rectangle {
    constructor(width, height, color) {
         this.width = width;
         this.height = height;
         this.color = color;
 }
 area() {
    const area = this.width * this.height;
    return area;
 }
}
  
 const rect = new Rectangle(2,4)
 const area = rect.area()
 console.log(area); 



//  // Some more classes


// Date class in Js
const now = new Date();   //current date and time
console.log(now.toISOString()); // Outputs the date in ISO format.


//  Maps class in JS
const map = new Map();
map.set('name', 'Raj');
map.set('age', 21);
console.log(map.get('name'));


//  // The promise class

// A promise in JavaScript is in an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. 

function logName(){
    console.log('Rajshree');
}
setTimeout(logName, 1000);  // the settimeOut function promises to call the logName function after 1 sec






// ---------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<-----------------

// function waitFor3s(){
//     setTimeout(resolve,3000)
// }
// function setTimeoutPromise(){
//     return new Promise(waitFor3s)  /// This promise class takes a function as an input, the input function's first argument here is resolve 
// }
// function main(){
//     console.log("Main is called");
// }
// setTimeoutPromise().then(main); // Promise approach  ----> The promisified approach: whenever the argument resolve of the input function in the promise class is called, then main will be called.

// // // 1.e Promise class says, I will take one function as an input, and whatever will be the first argument of the function, whenever that will be called, I will call the .then function

// setTimeout(main,3000)          // callback approach






// ---------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<-----------------

function setTimeoutPromisified(ms){
    return new Promise(resolve => setTimeout(resolve,ms));
}
function callback(){
    console.log("3 seconds have passed...!");
}
setTimeoutPromisified(3000).then(callback);



// ---------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<-----------------
function random(resolve){   // resolve is also a function
// resolve();
setTimeout(resolve,3000)

}

let p = new Promise(random); // supposed to return u something eventually



//  // using the eventual value returned by the promise
function callback(){
    console.log("Promise succeeded");
}
p.then(callback);



// ---------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<-----------------
const fs = require("fs")
function readTheFile(resolve){
//  // do ur thing, whenever u have the final value, call resolve("finalVAlue");
fs.readFile("a.txt","utf-8", function(err,data){
    resolve(data)
})

}

function readFile(fileName){
    //// read the file and return its value
    return new Promise(readTheFile)
}
const pr = readFile();
function callbacks(){
    console.log(contents);
}
p.then(callbacks)