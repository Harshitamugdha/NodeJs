var a=require('http')

a.createServer((req,res)=>{
    res.writeHead(200,{"content-type":"text/html"})
    res.write("hello node server <br>")
    res.write("okayy <br>")
    res.write("this is third line<br>")
    var b=10;
    res.write(`the number is ${b} <br>`)
    res.write(`<h1> Hello from server <\h1>`)
    //You can write multiple write statement but only one end statement/function
    function swap(a,b){
        var temp=a
        a=b
        b=temp
        res.write("inside function <br>")
        return [a,b]
    }
    function fact(a){
        var f=1
        for(var i=1;i<=a;i++){
            f=f*i
        }
        return f
    }
    res.write(`fucntion calling ${swap(4,5)} <br>`)
    res.write(`function calling factorial of 5 is ${fact(5)} <br>`)
    res.end()
}).listen(3000,()=>{console.log("Server running, Open Browser")}) 

//localhost:3000 or 1727.0.0.1:3000
//3000 is the port number mentioned in listen function
//nodemon is used to autosave changes. Without nodemon you need to stop server after changes and refresh to see changes