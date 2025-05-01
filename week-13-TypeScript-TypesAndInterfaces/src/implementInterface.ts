
interface People{
    name:string;
    age:number;
    greet:() => string;   //// function definition,  body needs to be implemented inside the class, just like in Java 

    // greet(): string   //// Both are same
}


const person:People = {
    name:"Rajshree",
    age:21,
    greet:() => "Hello"
}

// let greeting = person.greet();
// console.log(greeting);


// / Like in Java, we can implement interfaces in TypeScript as well. We can create an interface and then implement it in a class
// // A single class can implement multiple interfaces


// // the class implementing an interface must have all the primitive properties of the interface

class Manager implements People{
    name:string;
    age:number;
    city:string;

    constructor(name:string, age:number, city:string){
        this.name = name;
        this.age = age;
        this.city = city;
    }
    
   greet() { return'Hi'};

}


let manager = new Manager("Dular Jee", 40, 'Patna');
console.log(manager);
console.log(manager.greet());



// // Abstract Classes in Typescript

//  The basic difference between abstract classes and interfaces is that abstract classes can have implementations of their methods body, while interfaces can't

abstract class Aadmi{
    name:string;
    age:number;
    constructor(name:string, age:number){
        this.name = name;
        this.age = age;
    }

    abstract greet(): string;    //// abstract method body needs to be implemented inside the class

    isLegal(): boolean{
        return this.age >= 18;
    }    //// we can't do this in an interface

}


class balak extends Aadmi{

    city:string
    
    constructor(name:string, age:number, city:string){
        super(name, age);
        this.city = city
    }

    greet() {
        return "Hello";
    }
}

const balak1 = new balak("Shivam Shree", 20, 'Samastipur');
console.log(balak1);
console.log(balak1.greet());
console.log(balak1.isLegal());