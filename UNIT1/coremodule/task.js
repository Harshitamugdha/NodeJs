var a=require('http')
a.createServer((req,res)=>{
    if(req.url=='/fact'){
        res.writeHead(200,{"content-type":"text/html"})
        res.write("Factorial Page <br>")
        res.write(`function calling ${fact(5)} <br>`)
        function fact(a){
            var fact=1
            for(var i=1;i<=a;i++){
                fact=fact*i
            }
            return fact
        }
        res.end()
    }
    else if(req.url=='/swap'){
        res.writeHead(200,{"content-type":"text/html"})
        res.write("SWAP PAGE <br>")
        res.write(`function calling ${swap(4,5)} <br>`)
        function swap(a,b){
            var temp=a
            a=b
            b=temp
            res.write("inside function <br>")
            return [a,b]
        }
        res.end()
    } 
    else{
        res.writeHead(200,{"content-type":"text/html"})
        res.write("Home Page <br>")
        res.write(`<a href="/fact">Factorial</a> <br>`)
        res.write(`<a href="/swap">Swap</a> <br>`)
        res.end()
    }  
}).listen(2000,()=>{console.log("Server running, Open Browser")}) 