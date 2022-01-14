const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', function (line) {
  let newStr = '';
  for (let i = 0; i < line.length; i++) {
    if (line[i] === '9') newStr += '6';
    else newStr += line[i];
  }

  let obj = {};
  let max = 0;
  for (let i = 0; i < newStr.length; i++) {
    obj[newStr[i]] = obj[newStr[i]] ? obj[newStr[i]] + 1 : 1;
  }

  for (let [key, value] of Object.entries(obj)) {
    if (key === '6') {
      value = Math.ceil(value / 2);
    }
    max = Math.max(max, value);
  }
  console.log(max);
  rl.close();
}).on('close', function () {
  process.exit();
});
