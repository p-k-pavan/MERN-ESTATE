import User from "../models/user.models.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt  from "jsonwebtoken";

export const signup = async (req, res, next) => {
  let { username, email, password } = req.body;
  const hashPassword = bcryptjs.hashSync(password, 10);
  let newUser = new User({ username, email, password: hashPassword });
  try {
    await newUser.save();
    res.status(201).json("saved sucessfully!");
  } catch (err) {
    next(err);
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) return next(errorHandler(404, "User not exist!"));

    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) return next(errorHandler(401, "Invalid credential!"));

    const token = jwt.sign(
      { id: validUser._id },
      process.env.screct_jwt
    );
    const {password:pass,...rest} =validUser._doc
    res
      .cookie("access-token", token, { httpOnly: true })
      .status(200)
      .json(rest);
  } catch (error) {
    next(error);
  }
};
