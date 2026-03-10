const os=require('os');
console.log("OS platform is",os.platform());    
console.log("OS type:", os.type());
console.log(`The architecture is ${os.arch()} `);
console.log(`The Memory is ${os.totalmem()} `);
console.log(`The free Memory is ${os.freemem()} `);
console.log("Release version is",os.release()); 
console.log("OS temperory directory:",os.tempdir()); 
console.log("Hostname is",os.hostname());
console.log("Uptime is",os.uptime());

//User Info
console.log("User Info is",os.userInfo());
console.log("User name is",os.userInfo().username);
console.log("Home directory is",os.userInfo().homedir);     
console.log("Current OS version is",os.version());
console.log("CPU Info is",os.cpus());
console.log("Number of CPU cores is",os.cpus().length);