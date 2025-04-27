// Define a custom user type
type userType = {   
    name: string;
    age: number;
}

// Create an object of userType
let user2: userType = {
    name: "Rajshree",
    age: 21
}

// Function that accepts a userType and logs a greeting
function greeting(user: userType): void {
    console.log(`Hello ${user.name}, you are ${user.age} years old`);
}

// Call the greeting function
greeting(user2);

// ----------------------------------------------------

// Union Type using 'type'
type StringOrNumber = string | number;

// Function that accepts two values which can be either string or number


// function add(a: StringOrNumber, b: StringOrNumber): StringOrNumber {
//     return a + b;    ///// Error (a + b) — but if a or b are strings, it will concatenate them./*

/*If they are numbers, it will mathematically add them.

This works in JavaScript, but TypeScript wants you to handle different types properly.*/

// }


function add(a: StringOrNumber, b: StringOrNumber): StringOrNumber {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b; // number addition
    } else if (typeof a === 'string' && typeof b === 'string') {
        return a + b; // string concatenation
    } else {
        throw new Error('Parameters must be both numbers or both strings');
    }
}

// Example usage
console.log(add(5, 10));         // 15
console.log(add('Hello ', 'World')); // Hello World

// ----------------------------------------------------

// Intersection Type using 'type'
// Extending userType to create teamLead type
type teamLead = userType & { 
    title: string;
}

// Example teamLead
const lead: teamLead = {
    name: "Priyaranjana",
    age: 30,
    title: "Frontend Lead"
}

// ----------------------------------------------------

// Defining interfaces
interface manager {
    name: string;
    age: number;
}

interface Employee {
    department: string;
}

// Using intersection to combine manager and Employee into developer
type developer = manager & Employee;

// Example developer
const dev: developer = {
    name: "Rajshree",
    age: 26,
    department: "Software Engineering"
}
