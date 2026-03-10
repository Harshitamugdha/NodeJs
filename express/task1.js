var exp=require("express");
var obj=exp();
var fun=(num)=>{
        if(num<=1) return 1;
        return num*fun(num-1);
    }
var encoded=exp.urlencoded({extended:true})
obj.get('/calc',(req,res)=>{
    res.sendFile(__dirname+'/task1.html')
})
obj.post('/logedpost',encoded,(req,res)=>{
    var num=req.body.n1;
    const ans=fun(num)
    res.send(`the factorial of ${num} is ${ans}`)
})
obj.listen(5000,()=>{
    console.log('Server is running on port 5000')
})