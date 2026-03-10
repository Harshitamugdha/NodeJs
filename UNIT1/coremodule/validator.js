import validator from 'validator';
const res=validator.isEmail("harshita@gmail.com");
console.log(res)

// add chalk package
import chalk from 'chalk';
console.log(res?chalk.green.inverse(res):chalk.red.inverse(res));