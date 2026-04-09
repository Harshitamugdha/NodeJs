//Create a form with post method, form should have input type file, read the file using asynchornous
//reading and write the content in some other file named filewritten.txt and send the content on the servers use express and asynchronous method only


//SIMILAR QUESTION WILL COME IN CA
var fs=require("fs");
var exp=require("express");
var obj=exp()
var encoded=exp.urlencoded({extended:true})
obj.get('/upload',(req,res)=>{
    res.sendFile(__dirname+'/task2.html')
})
obj.post('/login',encoded,(req,res)=>{   //write what you wrote in action field in html file to fecth
    var file=req.body.f1
    fs.readFile(file,(err,data)=>{
        if(err) {res.send(err)}
        else{
            fs.writeFile('filewritten.txt',data,(err)=>{
                if(err){res.send(err)}
                else{
                    res.send(`file is written and the content is 
                        <br><br> ${data}`)
                }
            })
        }
    })
})                                   
    
obj.listen(3001,()=>{console.log("Server Running")})