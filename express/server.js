var exp=require('express');
var obj=exp();
obj.get('/',(req,res)=>{     //home,/about will be written in get function as first parameter
    res.send("Hello this is express server");   //send can be used to send response to client it can only be used once in a function
    //res.send("Hello this is express server");  //it will give error because send can only be used once in a function
})    
obj.get('/home',(req,res)=>{
    res.sendFile(__dirname+"/home.html");   //it will send the home.html file to client when client request for /home
})


obj.listen(4000,()=>{
    console.log("server is running on port 4000");
})