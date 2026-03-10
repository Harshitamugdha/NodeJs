const path=require("path");
console.log(__filename);
//keyword starting with __ double underscore are magic keywords
console.log(__dirname);
//path features
//student informsation
const pathfile=path.join("folder","studnets","data.txt")
console.log(pathfile);
const parasetdata=path.parse(pathfile);
const resolvePath=path.resolve(pathFile);
const extname=path.extname(pathfile);