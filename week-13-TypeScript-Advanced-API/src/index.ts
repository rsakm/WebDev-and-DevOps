interface User{
    id:string
    name:string
    age:number
    email:string
    password:string
}


// // Lets say we have to update the password, name, email of the user

// // We have to create a function that takes the password, name, email of the user as arguments, which is a bad practice because of too many arguments

// // Another way we can do is we would create a interface for Updations and pass the interface as an argument to the function. As:

interface UpdateProps{
    password?:string
    name?:string
    email?:string
}

function updateUser(updateProps: UpdateProps){
    // hit the database to update the user
}

// // But if the we change the data type of age to string from number, then we would have to change the interface as well. It is also a bad practice

// // To avoid this problem, we can use Pick API

// // Pick API: We can say that the updateProps is a subset of User interface to pick the properties that we want to update

type UpdatePropsPick = Pick<User, "password" | "name" | "email">
function updateUserPick(updateProps: UpdatePropsPick){
    // hit the database to update the user
}


const user:User = {
    id:"1",
    name:"Raj",
    age:21,
    email:"raj@example.com",
    password:"password"
}


function displayuser(user:UpdateProps){
    console.log(`Name: ${user.name},  Email: ${user.email}`);
};

displayuser(user)