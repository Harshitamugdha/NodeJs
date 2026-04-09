//create a form and take input from user,fetch the input and apply middleware on it

var exp=require("express")
var obj=new exp()
obj.use(exp.urlencoded({ extended: true }))
var auth=(req,res,next)=>{
    if(req.body.f1=='admin'){
        console.log("authenticated");
        next();
    }
    else{
        console.log("wrong user");
        res.send("Access Denied ");
    }
}

obj.get('/',(req,res)=>{
    res.sendFile(__dirname+'/task4.html')
})
obj.post('/login',auth,(req,res)=>{
    res.send("Authenticated")
})
obj.listen(5000,()=>{
    console.log("Server running")
})