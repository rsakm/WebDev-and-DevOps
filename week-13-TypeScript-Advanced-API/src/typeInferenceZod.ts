import {z} from "zod";
import express from "express";

const app = express();

// // Define the schema for profile update

const userProfileSchema = z.object({
    name: z.string().min(3, {message:"Name must be at least 3 characters long"}),
    email: z.string().email({message:"Invalid email format"}),
    // password: z.string().min(8),
    // country: z.enum(["IN", "US"]),
    age: z.number().min(18,{message:"Age must be greater than 18"}).max(60).optional(),
});


// type finalProfileType = {
//     name:string,
//     email:string,
//     age?:number
// }



    // // Instead of defining the type for finalProfileType, which is also on the basis of userProfileSchema, we can infer the type using zod

    // i.e

    // const finalProfileType = z.infer<typeof userProfileSchema>;

export type finalProfileType = z.infer<typeof userProfileSchema>;

//// We need to export it as we require it on frontend side to validate data

app.put("/profile", (req, res) => {
    const {success} = userProfileSchema.safeParse(req.body);


    // const updateBody:{
    //     name:string,
    //     email:string,
    //     age?:number
    // } = req.body;   //// how to assign type to req.body


    //////// OR//////////

    const updateBody :finalProfileType = req.body 


    if (!success) {
        res.status(400).json({
            message: "Invalid data format",
            // error: success.error,
        }   );
        return;
    }

    res.status(200).json({
        message: "Profile updated successfully",
        data: updateBody,
    });
})

app.listen(3000);