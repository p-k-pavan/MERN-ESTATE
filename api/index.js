import express from "express"
const app = express();
import  mongoose  from "mongoose";
import dotenv from "dotenv"
dotenv.config();

mongoose.connect(process.env.MONGO_URL).then( ()=>{
    console.log("Connect db sucesfully")
})
.catch( (err)=>{
    console.log(err)
})
   

app.get("/", (req,res)=>{
    res.send("Working")
})

const PORT = 8080
app.listen(PORT, ()=>{
    console.log("Server was listing!!")
})