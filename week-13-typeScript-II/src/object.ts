
function greetUser(user: {name: string, age: number}) {
    console.log(`Hello ${user.name} you are ${user.age} years old`);
}

greetUser({
    name: "Rajshree",
    age: 21
});


let user: {name: string, age: number} = {
    name: "Rajshree",
    age: 21
}    //// Explicit type

// or we can write like this

let obj = {
    name: "Rajshree",
    age: 21
}    //// implicitly typed  name is string and age is number

greetUser(obj);
greetUser(user);