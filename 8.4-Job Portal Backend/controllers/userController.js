import userModel from "../models/userModel.js";

export const updateUserController = async (req, res, next) => {
    const { name, email, location, lastName } = req.body;
  
    if (!name || !email || !location) {
      return res.status(400).json({ message: "Provide all required fields: name, email, and location." });
    }
  
    try {
      const user = await userModel.findOne({ _id: req.user.userId });
      if (!user) {
        return res.status(404).json({ message: "User not found." });
      }
  
      // Update only the provided fields
      user.name = name;
      user.email = email;
      user.location = location;
      if (lastName !== undefined) {
        user.lastName = lastName;
      }
  
      await user.save();
      const token = user.createJWT();
  
      res.status(200).json({ user, token });
    } catch (error) {
      next(error);
    }
  };

  export const getUserController = async(req,res)=> {
    try {
      const user = await userModel.findById({ _id: req.body.user.userId });
      user.password = undefined;
      if (!user) {
        return res.status(200).send({
          message: "User Not Found",
          success: false,
        });
      } else {
        res.status(200).send({
          success: true,
          data: user,
        });
      }
    } catch (error) {
      console.log(error);
      res.status(500).send({
        message: "auth error",
        success: false,
        error: error.message,
      });
    }
  }
  