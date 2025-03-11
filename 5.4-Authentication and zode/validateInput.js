
// // if this is array of string with at least one input, return true else false


const zod = require('zod')
const schema = zod.array(zod.string()).min(1)
function validateInput(arr){
    const response = schema.safeParse(arr)
    console.log(response);
}
validateInput([1,2,3,4]);
validateInput(["ram","shyam"])
validateInput([])
validateInput([""])






// const zod = require('zod');

// const schema = zod.array(zod.string().min(1)).min(1);
// // zod.string().min(1) ensures strings are non-empty
// // zod.array().min(1) ensures at least one element

// function validateInput(arr) {
//     const response = schema.safeParse(arr);
//     console.log(response);
// }
// // Test Cases
// validateInput([1, 2, 3, 4]); // ❌ Invalid (numbers instead of strings)
// validateInput(["ram", "shyam"]); // ✅ Valid
// validateInput([]); // ❌ Invalid (empty array)
// validateInput([""]); // ❌ Invalid (empty string inside array)
// validateInput(["Hello"]); // ✅ Valid
// validateInput([" ", "shyam"]); // ✅ Valid (space is still considered a string)






const schema2 = zod.object({
    email: zod.string().email(),
    password : z.string().min(8),
    country: z.literal("IN").or(z.literal("US")),
    kidneys : z.array((z.number()))
})

