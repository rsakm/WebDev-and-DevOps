/**
 * Assignment #3 - Write a function that takes a jwt as input and returns
 * true if the jwt can be VERIFIED. Return false otherewise
 */

// Import jwt 
const jwt = require("jsonwebtoken");

const jwtSecret = "secret";

function verifyJwt(token){
    let ans = true;
    try{
        jwt.verify(token,jwtSecret)
        return true;
    }catch(error){
        ans = false;
    }
    return ans;
}


console.log(verifyJwt('egeigftrghetg'));