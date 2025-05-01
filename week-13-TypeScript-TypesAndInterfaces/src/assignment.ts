// // interface Vs type
// // Create two types called User and Admin
// // Create a function that takes in a User or Admin type as an input and returns a string saying welcome [name] 

interface Admin{
    name:string;
    role:string;
}

interface User{
    name:string;
    age:number;
}


// function sayWelcome(user:Admin|User){
//     return `Hello, ${user.name}!`;
// }



/*    OR        */

type userOrAdmin = User|Admin;

function sayWelcome(user:userOrAdmin){

    // console.log(user.age);  //// Error as user may or may not have age

    // console.log(user.role);  //// Error as user may or may not have role


    return `Hello, ${user.name}!`;

}

console.log(sayWelcome({name:"Rajshree", role:"Admin"}));



// // We cannot use union and intersection of interfaces, but we can use union and intersection of properties of interfaces


interface Engineer{
    name: string;
    department: string | number;
}