import express from "express"
const app = express();

app.get("/", (req,res)=>{
    res.send("Working")
})

const PORT = 8080
app.listen(PORT, ()=>{
    console.log("Server was listing!!")
})