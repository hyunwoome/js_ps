// Run by Node.js

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', function (line) {
  let result = '';
  for (const str of line) {
    if (str === str.toLocaleLowerCase()) result += str.toUpperCase();
    else result += str.toLocaleLowerCase();
  }
  console.log(result);
}).on('close', function () {
  process.exit();
});
