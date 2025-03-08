
// Assignment #1 - Write a function that takes in a username and password and returns a JWT token with the username encoded inside an object. Should return null if the username is not a valid email or if the password is less than 6 characters. Try using the zod library here





const jwt = require('jsonwebtoken');
const jwtSecret = "secret";
const zod = require('zod');

const emailSchema = zod.string().email();
const passwordSchema = zod.string().min(6);


function signJwt(username,password){

    const usernameResponse = emailSchema.safeParse(username);
    const passwordResponse = passwordSchema.safeParse(password);

    if(!usernameResponse.success || passwordResponse.success ){
        return null
    }
    const signature = jwt.sign({
        username
    },jwtSecret)
    return signature;
}



console.log(signJwt('rajshreek','Priyaranjana')); 
// // null as email is not correct