import express from "express"
const app = express();
import  mongoose  from "mongoose";
import dotenv from "dotenv"
import userRouter from "./router/user.router.js";

dotenv.config();

mongoose.connect(process.env.MONGO_URL).then( ()=>{
    console.log("Connect db sucesfully")
})
.catch( (err)=>{
    console.log(err)
})
   

const PORT = 8080
app.listen(PORT, ()=>{
    console.log("Server was listing!!")
})

app.use("/api/user", userRouter);