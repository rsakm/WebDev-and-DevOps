const user1 = {
    name:"Raj",
    age:21
}


// user1 = {
//     name:"Raj",
//     age:21
// }

user1.name = "Rajshree";


console.log(user1);

const a = [1,2,3,45,6];
a[0]=4;
// a.push(4);

console.log(a);

const userName = "Rajshree";

// userName="Raj";    //// TypeScript throws an error when we try to change the value of const variable
// // But it doesn't throw an error when we try to change an array or object


// if.e We can always change the internal value of an array or object, i.e we are not changing the object itself  i.e we are not doing , a = [4,8,9,0]


// // But what if we want to force neither the internal value nor the object itself to be changed?


// // We can use Readonly<T> generic type

// // Readonly<T> generic type is used to make the properties of an object readonly

type UserObj ={
    readonly name :string;
    readonly age:number;
}

const user2 :UserObj = {
    name:"Rajshree",
    age:21
}

// user2.name = "Raj";   ////Error: cannot assign to 'name' because it is a read-only property

console.log(user2);


// // Use case of Readonly<T> generic type

// // Let's we have a config variable

interface Config{
    readonly endPoint:string;
    readonly apiKey:string;
}

const config :Config = {
    endPoint:"https://example.com/api",
    apiKey:"dgfadsfjh123"
}

// config.endPoint = "https://example.com/api2";   ////Error: cannot assign to 'endPoint' because it is a read-only property

console.log(config);

// // nOW even if by mistake we try to change the value of config.endPoint or apiKey, TypeScript will throw an error

