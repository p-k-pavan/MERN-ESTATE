import User from "../models/user.models.js";
import bcryptjs from "bcryptjs"

export const signup = async(req,res)=>{
  let {username,email,password}= req.body;
  const hashPassword = bcryptjs.hashSync(password,10);
  let newUser = new User({username,email,password:hashPassword})
 try{
    await newUser.save()
    res.status(201).json("saved sucessfully!")
 }catch(err){
    res.status(501).json(err.message)
 }
}