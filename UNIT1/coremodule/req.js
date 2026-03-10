var a=require('http')
a.createServer((req,res)=>{
    if(req.url=='/home'){
        res.writeHead(200,{"content-type":"text/html"})
        res.write("<h1> Hello Client <\h1>")
        res.end()
    }
    else if(req.url=='/profile'){
        res.writeHead(200,{"content-type":"text/html"})
        res.write("<h1> Profile Page </h1>")
        res.end()
    }
    else {
        res.write("Error Page")
        res.end()
    }
}).listen(4000,()=>{console.log("Server running, Open Browser")}) 