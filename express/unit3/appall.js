//In Express.js app.all() is used to handle all HTTP request methods for a specific route.
//app.app()='Run this code for every type of request(GET,POST,PUT,DELETE,...)
//Syntax- app.all(path,(req,res,next)=>{
//    //runs for all request methods})
//Example- app.all("/text",(req,res)=>{
//    res.send("Thiis works for all request types")})



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