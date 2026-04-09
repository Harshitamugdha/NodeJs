//middleware-application level middleware
// important for viva and will come for implementation too

var exp=require('express');
var obj=new exp();
//first way
var log=(req,res,next)=>{
    console.log("first security check")
    console.log(req.method)
    next()
}
obj.use(log)


//2nd way
obj.use((req,res,next)=>{
    console.log("Second security check")
    console.log(req.url)
    next()
})
obj.get('/',(req,res)=>{
    res.send(`<h1>application level middleware</h1>`)
})
obj.get('/home',(req,res)=>{
    res.send(`<h1>application level middleware</h1>`)
})
obj.listen(3002,()=>{
    console.log("Server is running on port 3002")
})