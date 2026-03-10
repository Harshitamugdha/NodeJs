var a=require('os');
var b=require('http')
b.createServer((req,res)=>{
    res.write(`The architecture is ${a.arch()} \n`)
    res.write(`The Memory is ${a.totalmem()} \n`)
    res.write(`The free Memory is ${a.freemem()} \n`)
    res.end()
}).listen(3000,()=>{console.log("Server running")})