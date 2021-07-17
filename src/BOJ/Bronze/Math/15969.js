const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input.push(line);
  // input = line.split('\n');
  rl.close();
}).on('close', function () {
  console.log(input);
  process.exit();
});
