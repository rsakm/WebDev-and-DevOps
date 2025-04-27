

///nInterfaces in TS are used to define the structure of an object. They are custom types that can be used to describe the shape of an object.

interface userInterface {   
    name: string,
    age: number
}

let user1: userInterface = {
    name: "Rajshree",
    age: 21
}

function greetings(user: userInterface) {
    console.log(`Hello ${user.name} you are ${user.age} years old`);
}