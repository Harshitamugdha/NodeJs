import express from 'express';
const app=express();

const myLogger=(req,res,next)=>{
    next();
    console.log("BEFORE LOGGED")
    console.log("AFTER LOGGED")
    //next();
}

app.use(myLogger)

app.get('/',(req,res)=>{
    console.log("WELCOME")
    res.send("WELCOME")
})

app.listen(5000,()=>{
    console.log("Server running on port 5000")
})