note Link :
https://www.notion.so/Tokens-vs-JWTs-1ae4d460fff381bea103f3d4e18cdb53


JWT stands for Json Web Tokens.
There is a problem with using `stateful` tokens.

## Stateful

By stateful here, we mean that we need to store these tokens in a variable right now (and eventually in a database). 

## like -->

const user = users.find((user)=>user.token === token)

So on every request we will have to hit the database
which generates so many db calls.

## Problem

The problem is that we need to `send a request to the database` every time the user wants to hit an `authenticated endpoint`


## Solution

JWTs


JWTs, or JSON Web Tokens, are a compact and self-contained way to represent information between two parties. They are commonly used for authentication and information exchange in web applications.

**JWTs are Stateless**: JWTs contain all the information needed to authenticate a request, so the server doesn’t need to store session data. All the `data` is stored in the token itself.



**npm install jsonwebtoken**



