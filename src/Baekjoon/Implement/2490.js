// /dev/stdin

const input = require('fs')
  .readFileSync('src/baekjoon/implement/input', 'utf8')
  .trim()
  .split('\n');

// 배 (0)
// 등 (1)

input.forEach((nums) => {
  nums.split(' ');
  let oneCount = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === '0') oneCount++;
  }
  if (oneCount === 0) console.log('E');
  if (oneCount === 1) console.log('A');
  if (oneCount === 2) console.log('B');
  if (oneCount === 3) console.log('C');
  if (oneCount === 4) console.log('D');
});
