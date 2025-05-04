

// // the partial api of typescript makes all properties of a type / interface optional, creating a type with the same properties, but each marked as optional

interface User{
    id:string;
    name:string;
    age:number;
    email:string;
    password:string;
}

type partialProps={
    password?:string;
    name?:string;
    email?:string;
}

// // or u can use the Partial<T> generic type

// // u need to first select the properties that u want to make optional
// type partialProps=Partial<Pick<User,"password"|"name"|"email">>
// // then u can use the Partial<T> generic type


type selectedProperties = Pick<User, "name" | "email" | "password">;

type PartialUser = Partial<selectedProperties>;
function updatdeUser(user: PartialUser) {
    // hit the database to update the user
}


// app.put(route, (req,res)=>{
//     const updatedProps = req.body;
// })
