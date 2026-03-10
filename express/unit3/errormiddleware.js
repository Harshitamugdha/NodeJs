import express from 'express';
const app=express();

app.use((req,res,next)=>{
    console.log("Request Recieved");
    next();
});

app.get("/",(req,res,next)=>{
    const error=new Error("Route Error");
    error.statusCode=400;
    next(error);
})

//Error Handling Middleware
app.use((err,req,res,next)=>{
    console.error(err.message);

    res.status(err.statusCode || 500).json({
        message:err.message
    });
});

app.listen(8080,()=>{
    console.log("Server running on port 8080")
})