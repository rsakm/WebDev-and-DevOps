const jwt = require('jsonwebtoken')


// // generate, decode, verify

const value = {
    name:"Rajshree",
    rollNumber : 212103330141
}

// // generate 
const token = jwt.sign(value,"secret");

// // This token has been generated using this secret, so this can only be verified using this secret.
console.log(token);



// decode token using jwt.decode() method
const decodedValue = jwt.decode(token);

// print decoded value to console
console.log(decodedValue);

// verify token using jwt.verify() method
const verifiedValue = jwt.verify(token, "secret");

// print decoded value to console
console.log(verifiedValue);