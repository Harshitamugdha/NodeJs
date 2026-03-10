import chalk from "chalk"
//chalk is from esm so if you want to use chalk use import statement
console.log(chalk.blue("Hello World in blue color"));
console.log(chalk.red("WARNING!"));
console.log(chalk.green("Success!"));
//Display "Warning Low Disk Space" with yellow background and black text;
console.log(chalk.bgYellow.black("Warning Low Disk Space"));
//Dsiplay default error red vold,rest white --- nested styling
console.log(chalk.red.bold("Error ")+chalk.white("Valid Input"));
//Dynamic data styling----- if else or switch useade in different colors based on value
