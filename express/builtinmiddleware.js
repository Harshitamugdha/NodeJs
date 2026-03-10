var exp=require("express");
var obj=exp();
var path=require("path");
var filepath=path.join(__dirname+"/public");
//static middleware-part of the express class 
obj.use(exp.static(filepath)); //to combine 2 folders we use path.join     first middleware
obj.use(exp.urlencoded({extended:true}))  //second middleware  for encoded url(to avoid writing it again and again for various post methods)
obj.use(exp.json())  //for fetching data at once from form in json format
obj.post('/register',(req,res)=>{
    var data=req.body;
    res.send(data);
})
obj.listen(3000,()=>{
    console.log("Server ruunging on port 3000")
})

//Make sure index.html is present in the foldr for example public folder, otherwise this wont work.  