import express from "express"
const app = express();
import  mongoose  from "mongoose";
import dotenv from "dotenv"
import userRouter from "./router/user.router.js";
import authrRouter from "./router/auth.router.js";

dotenv.config();

mongoose.connect(process.env.MONGO_URL).then( ()=>{
    console.log("Connect db sucesfully")
})
.catch( (err)=>{
    console.log(err)
})

app.use(express.json());

const PORT = 8080
app.listen(PORT, ()=>{
    console.log("Server was listing!!")
})

app.use("/api/user", userRouter);

app.use("/api/auth",authrRouter)