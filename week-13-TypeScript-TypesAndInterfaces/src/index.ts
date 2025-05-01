const sayHello = (name: string): string => {
    return `Hello, ${name}!`;
  };
  
  console.log(sayHello("Rajshree"));
  
  const isEven = (num: number):boolean=> num%2 == 0;

  console.log(isEven(4));


//   Interfaces and Types

// let user = {
//     name: "Rajshree",
//     age:21,
//     gender:"male",
//     address:{
//         city:"Samastipur",
//         state:"Bihar",
//         country:"India"
//     }
// }

let user : User = {
    name: "Rajshree",
    age:21,
    gender:"male",
    address:{
        city:"Samastipur",
        state:"Bihar",
        country:"India"
    }
}

interface User{
    name:string;
    age:number;
    gender:string;
    address?:{
        city?:string;   //// Made each property optional as there should not be an error if an object has address property but it doesn't have each address' property
        state?:string;
        country?:string;
    }
}

function isLegal(user:User):boolean{    //// Here we r passing user as a parameter, but what should be it's type, as TS needs to know that.
    return user.age >= 18;
}

isLegal(user);

//// Now I want that the address in the the User interface should be optional, i.e if an object doesn't have address property then it should not be an error in TypeScript. Then ? is used.

// // Optional Parameters

let user2 :User={
    name: "Priyaranjana",
    age:21,
    gender:"female",
}



// // Now let's there is another interface having address property, and it has also city, state and country property.
// So we need to define same property in this interface as well.
//// Instead we can define Address interface separately, and use it in any interface


/**    Interface inside interface */

interface Address{
    city?:string;
    state?:string;
    country?:string;
}

interface Office{
    name:string;
    address:Address;
}

interface UserInterface{
    name:string;
    age:number;
    gender:string;
    address?:Address;
}

// // Types

