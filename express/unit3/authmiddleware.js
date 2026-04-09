// if the role is admin, them only open website
//otherwise print wrong user and do not oprn the website

var exp=require("express")
var obj=new exp()
var fake={
    id:1,
    name:"harshita",
    role:'admin'
}
var auth=(req,res,next)=>{
    if(fake.role=='admin1'){
        console.log("authenticated");
        next();
    }
    else{
        console.log("wrong user");
        res.send("Access Denied ❌");
    }
}
obj.get('/',auth,(req,res)=>{
    res.sendFile(__dirname+'/task2.html')
})
obj.listen(5000,()=>{
    console.log("Server running")
})