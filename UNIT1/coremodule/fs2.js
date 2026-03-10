//Can come in CA and ETP(70 marks) and also in viva
//Synchronoues

 var fs=require("fs")
// console.log("sync reading started")

//need to be called explicitely
// const data1=fs.readFileSync("file.txt","UTF-8")
// console.log(data1)
// console.log("sync reading done")

//async reading
//console.log("async reading started")

//requires a callback function
// fs.readFile("file.txt","UTF-8",(err,data2)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log(data2)
//     }
// })
// console.log("async reading done")




//var data="hi node js class"

//sync
//fs.writeFileSync("file.txt",data)

//async
// fs.writeFile("file.txt",data,(err)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log("async writting done")
//     }
// })


var daata={name:"arwin"}

//to convert an object to a string we use JSON.stringify
// to coovert string to an object we use JSON.parse

// var parsed=JSON.stringify(daata)
// fs.writeFileSync("file.txt",parsed)
// console.log("sync writing done")

// fs.writeFile("file.txt",parsed,(err)=>{
//     if(err){
//         console.log(err)}
//     else{
//         console.log("async writting done,check folder")
//     }
// })


// //sync copy
// console.log("sync copying started")
// fs.copyFileSync("file.txt","datasyncopy.txt")
// console.log("sync copying done")

// //async copy
// console.log("async copying started")
// fs.copyFile("file.txt","data.txt",(err)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log("async copying done")
//     }
// })

//SYNC RENAME
// console.log("sync renaming started")
// fs.renameSync("datasyncopy.txt","datasyncrename.txt")
// console.log("sync renaming done")

//ASYNC RENAME
// console.log("async renaming started")   
// fs.rename("data.txt","datarename.txt",(err)=>{ 
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log("async renaming done")
//     }
// })

//SYNC UNLINK
console.log("sync unlink started");
fs.unlinkSync('datasyncrename.txt');
console.log("sync unlink done");
 
//ASYNC UNLINK
console.log("async unlink started");
fs.unlink('datarename.txt',(err)=>{
    if(err)console.log(err);
    else console.log("async unlink done");    
})