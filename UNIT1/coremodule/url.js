var url=require('url');
var http=require('http')
http.createServer((req,res)=>{
    var parsed=url.parse(req.url,true) //true to get the query in the form of an object
    console.log(parsed)
    var name=parsed.query.name 
    var age=parsed.query.age 
    res.end(`the fetched name and age from url is ${name} and ${age}`)
    
}).listen(3000,()=>{
    console.log("Port runniing")
})