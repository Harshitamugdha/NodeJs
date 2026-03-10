var util=require("util");
 var str=`my name is %s and id is %d`;
 var frmstr=util.format(str,`Harshita`,405000); //for formatted string
 console.log(frmstr);

 //to log a message with a timestamp and print it to the console
 //util.log(`virus detected`)

 //console.log(util.isArray([])) //old function
//console.log(Array.isArray([])) //new function
 console.log(util.isArray({price: 0}));
console.log(Array.isArray({price : 0}));

//console.log(util.isDate(new Date())); 
//console.log((new Date())instanceof Date)

//console.log(util.isDate(new Date({"":""}))); //old method
console.log(({"":""})instanceof Date) //new method

// //console.log(util.isError(new Error("Error occured")));
//console.log((new Error("Error occurred"))instanceof Error);

//console.log(util.isError({errmsg: "Error occured"}));
console.log(({errmsg:"error occured"})instanceof Error)

// console.log(util.isRegExp(/regecpl/));
// console.log((/regexpl/)instanceof RegExp)

console.log(util.isRegExp(new RegExp(`my regexp`)));
console.log(new RegExp(`(my regexp/)`)instanceof RegExp)

// //console.log(util.isRegExp({}));
//console.log(({})isntanceof RegExp)