// Run by Node.js

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
const alphabet = 'abcdefghijklmnopqrstuvwxyz';

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  const a = input.shift().replace(/(\s*)/g, '').toLowerCase();
  const obj = {};
  for (let i = 0; i < alphabet.length; i++) {
    obj[alphabet[i]] = obj[alphabet[i]] ? 1 : 0;
  }

  for (let i = 0; i < a.length; i++) {
    obj[a[i]]++;
  }

  for (const key in obj) {
    console.log(`${key} : ${obj[key]}`);
  }

  process.exit();
});
