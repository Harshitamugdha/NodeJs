var http=require('http');
var fs=require('fs');

http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/plain"})
    fs.readFile("os.js","UTF-8",(err,data)=>{
        if(err){
            res.end(err)
        }
        else{
            res.end(data)
        }
})
}).listen(3000,()=>{
    console.log("server is running on port 3000")})