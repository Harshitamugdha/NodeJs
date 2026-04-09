//IMPLEMENT THE MIDDLEWARE USING APP.USE
//IMPORT
import express from "express";
const app=express();

//MIDDLEWARE

app.use((req,res,next)=>{
    console.log(`req method: ${req.method}`);
    console.log(`req url: ${req.url}`);
    next();
});

//ROUTE
app.get("/",(req,res)=>{
    res.send("HELLO APP USE IS WORKING");
});

//LOCAL HOST
app.listen(3000,()=>{
    console.log("server is running on localhost-3000")
})