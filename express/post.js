// var exp= require('express');
// var obj=exp()
// var encoded=exp.urlencoded({extended:true}) 
// obj.get('/',(req,res)=>{
//     res.send(`<h1> GET and POST methods </h1>
//         <a href="/login"> Get Form </a>
//         <a href="loginpost"> POST Form </a>`)
// })
// obj.get('/login', (req, res) => {
//     res.sendFile(__dirname + '/formget.html');
// })
// obj.get('/logedin',(req,res)=>{
//     res.sendFile(__dirname+'/formpost.html');
// })
// obj.post('/logedpost',encoded,(req,res)=>{
//  gin   var name=req.body.n1;
//     var pwd=req.body.n2;
//     res.send(`{username is ${name} and password is ${pwd}}`)
// })
// obj.listen(4000,()=>{
//     console.log("Server is running on port 4000")
// })

var exp=require('express');
var obj=exp();
obj.get('/',(req,res)=>{
    res.write(`<h1>POST METHOD</h1>`)
})
obj.get('/login',(req,res)=>{
    res.sendFile(__dirname+'/formpost.html')
})
obj.post('/logedpost',exp.urlencoded({extended:true}),(req,res)=>{
    var name=req.body.n1;
    var pwd=req.body.n2;
    res.send(`{username is ${name} and password is ${pwd}}`)
})
obj.listen(4000,()=>{
    console.log("Server is running on port 4000")
})