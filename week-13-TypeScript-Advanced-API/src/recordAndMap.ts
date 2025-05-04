
// Record : An easier way to deal with objects

// Let's say we want to create an object like:

const users :Users = {
    "1" : {
        id: "1",
        name : "Rajshree",
        age : 21
    },
    "2" : {
        id: "2",
        name : "P Jha",
        age : 23
    }
}

// // for this we can create a type:

type UserType = {
    id: string;
    name: string;
    age: number;
}

type Users={
    [key:string]:UserType
}


// // But instead of the above ugly syntax, we can use Record<key, value> 

type Usersrecord = Record<string,{age:number; name:string}>    //// key is string and value is number

const usersRecord :Usersrecord = {
    "raj@qd1" : {age:21, name:"Rajshree"},
    "raj@qd2" : {age:23, name:"P Jha"}
}

console.log(usersRecord["raj@qd1"].age);

// // Now it's very complex and ugly to do useRecord["raj@qd1"].age, instead we can use map

// // Map: It is a function that takes an array and returns a new array. It is a more complex version of forEach

const persons = new Map();

persons.set("raj@qd1", {age:21, name:"Rajshree"});
persons.set("raj@qd2", {age:23, name:"P Jha"});


const person = persons.get("raj@qd1");
console.log(person?.age);

// // We can also enforce the return type pf keys and values in map

const people = new Map<string, People>();

interface People {
    name: string;
    age: number;
}

people.set("raj@qd1", {name:"Rajshree", age:21});
people.set("raj@qd2", {name:"P Jha", age:23});

console.log(people.get("raj@qd1")?.age);