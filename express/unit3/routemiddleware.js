//to remove the drawback of application leavel middleware we use router level middleware; 
// drawback is for everypage, all the security checks will be passed

var exp=require('express');
var obj=new exp();
var router=exp.Router();

var rou1=(req,res,next)=>{
    console.log("running for home page only.")
    next();
}

var rou2=(req,res,next)=>{
    console.log("running for profile page only.")
    next();
}
router.get("/home",rou1,(req,res,next)=>{
    res.send(`<h2>Welcome to Home Page</h2>`)
})
router.get("/profile",rou2,(req,res,next)=>{
    res.send(`<h2>Welcome to Profile Page</h2>`)
})
obj.use('/admin',router); //Mounting the router
obj.listen(4000,()=>{
    console.log("Server is running on port 4000")
})