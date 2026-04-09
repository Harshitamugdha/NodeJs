var fs=require("fs");
var exp=require("express");
var app=exp();
function generate(){
    return Math.floor(Math.random()*1000);
}
var encoded=exp.urlencoded({extended:true});
app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/caprac.html");
})
app.post('/login',encoded,(req,res)=>{
    var name=req.body.n1;
    var email=req.body.n2;
    var id=generate();
    fs.readFile("student.json","utf-8",(err,data)=>{
        if(err){
            res.send(err);
            return;
        }
    var students=data?JSON.parse(data):[];
    var exists=students.find(b=>b.email===email)
    if(exists){
        res.send("User already exists");
    }
    else{
        students.push({name:name,email:email,id:id});
        fs.writeFileSync("student.json",JSON.stringify(students,null,2));
        res.send("Registered Succesfully");
    }
    })
})


app.listen(3000,()=>{
    console.log("Server running");
})