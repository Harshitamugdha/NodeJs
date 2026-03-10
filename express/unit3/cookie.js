import express from 'express';
import cookie from 'cookie-parser';
import cookieParser from 'cookie-parser';

const app=express();
app.use(cookieParser());
app.get("/",(req,res)=>{
    res.cookie("name","Harshita");
    res.send("Cookie Created!")
});


app.get("/check",(req,res)=>{
    res.send(req.cookies);
})
app.listen(3000,()=>{
    console.log("Server running on port 3000")
})