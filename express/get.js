var exp= require('express');
var obj=exp()
obj.get('/logedin',(req,res)=>{
    res.sendFile(__dirname+'/formget.html');
})
obj.get('/login',(req,res)=>{
    var name=req.query.n1;
    var pwd=req.query.n2;
    res.send(`username is ${name} and password is ${pwd}`)
})

obj.listen(3000,()=>{
    console.log("Server is running on port 3000")
})
