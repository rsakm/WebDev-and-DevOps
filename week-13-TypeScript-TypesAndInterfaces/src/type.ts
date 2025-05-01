interface User{
    name:string;
    age:number;
}


type Users = {
    name:string;
    age:number;
}


// // The basic difference between type and interface is how they are defined.
// // type needs to be defined with 'type' keyword and assign it to a variable.
// // interface needs to be defined with 'interface' keyword and need not any assignment operator

// // type can't be implemented like interface
// // one thing u can't do in interface is unions and intersections


// type Student = {
//     name:string;
//     age:number;
//     department:string;
//     grade?:string;
// }

//// Student type has all the properties of User type and extra property 'grade' and department

type Student = User & {
    department:string;
}



// //// Intersection
// //// if u want to create a type that has every property of multiple types/interfaces

type Employee = {
    name:string;
    startDate:Date;
};

type Managerr ={
    name:string;
    department:string;
};

type teamLead = Employee & Managerr;

const lead: teamLead = {
    name: "Rajshree",
    startDate: new Date(),
    department: "Software Development",
}

// // lead must have all the properties of Employee and Managerr as it is of teamLead type which is intersection of Employee and Managerr

// // Unions
// // If u want to create a type that has either the properties of multiple types/interfaces or combination of all the properties of multiple types/interfaces


type GoodUser = {
    name:string;
    gift:string;
};

type BadUser = {
    name:string;
    punishment:string;
};


type User1 = GoodUser | BadUser;

const user1: User1 = {
    name: "Rajshree",
    gift: "Laptop",
    punishment: "None",   /// 
}

// // user1 may have all the properties of GoodUser and BadUser or it may have all the properties of either of them



const newUser: User1 = {
    name: "Rajshree",
    gift: "Laptop",
}

const newUser1: User1 = {
    name: "Rajshree",
    punishment: "None",
}

