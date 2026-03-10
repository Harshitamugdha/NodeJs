const fs=require("fs")
const filename='file.txt'
const writefile=fs.writeFileSync(filename,'Welcome');
console.log(writefile)

//read the file
// const readfile=fs.readFileSync(filename,"UTF-8");  //first method using encoding
// console.log(readfile)

//Second method
const readfile=fs.readFileSync(filename); 
console.log(readfile.toString())
const appendfile =fs.appendFileSync(filename,"\n Hello World");
console.log(appendfile)
const readfile2=fs.readFileSync(filename); 
console.log(readfile2.toString())
//delete file ----unlink
