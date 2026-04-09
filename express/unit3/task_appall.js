
//import
import express from "express"
const app=express()

//home route
app.get("/",(req,res)=>{
    res.send("Welcome To Home Page")
})

//Test
app.all("/test",(req,res)=>{
    res.send(`You made a request ${req.method} to the class /test`)
})

//LOCALHOST
app.listen(3000,()=>{
    console.log("server running on loaclhost:3000")
})