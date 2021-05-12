const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// 두 수를 공백으로 구분지어 입력받아 합을 반환
let input = [];

rl.on('line', function (line) {
  input = line.split(' ').map((el) => parseInt(el));
  rl.close();
}).on('close', function () {
  console.log(input[0] + input[1]);
  process.exit();
});

// 여러줄 입력받기
let input2 = [];

rl.on('line', function (line) {
  input2.push(line);
}).on('close', function () {
  console.log(input);
  process.exit();
});
