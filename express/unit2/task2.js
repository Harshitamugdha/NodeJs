var fs=require("fs")
var exp=require("express")
var obj=exp()
var encoded=exp.urlencoded({extended:true})
obj.get('/input',(req,res)=>{
    res.sendFile(__dirname+'/task2.html')
})
obj.post('/login',encoded,(req,res)=>{
    var file1=req.body.f1;
    fs.copyFileSync(file1,'duplicate.txt')
    res.send('File copied successfully, check folder')
})
obj.listen(3000,()=>{
    console.log('Server is running on port 3000')
})