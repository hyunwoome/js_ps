const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input = line.split(' ').map((el) => Number(el));
  let day = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  let dates = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  let month = input[0];
  let date = input[1];

  let sum = date;
  for (let i = 0; i < month - 1; i++) {
    sum += dates[i];
  }

  console.log(day[sum % 7]);

  rl.close();
}).on('close', function () {
  process.exit();
});
