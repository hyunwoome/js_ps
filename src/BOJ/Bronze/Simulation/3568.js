// const input = require('fs')
//   .readFileSync('src/baekjoon/simulation/input', 'utf8')
//   .toString()
//   .trim()
//   .split(' ');

// let commonType = input.shift();

// input.forEach((str) => {
//   let variable = '';
//   let type = '';
//   for (let i = 0; i < str.length; i++) {
//     if (('a' <= str[i] && str[i] <= 'z') || ('A' <= str[i] && str[i] <= 'Z')) {
//       variable += str[i];
//     } else if (str[i] !== ',' && str[i] !== ';') {
//       type += str[i];
//     }
//   }
//   let reverseType = '';
//   for (let i = type.length - 1; i >= 0; i--) {
//     if (type[i] === '[') reverseType += ']';
//     else if (type[i] === ']') reverseType += '[';
//     else reverseType += type[i];
//   }

//   console.log(`${commonType}${reverseType} ${variable};`);
// });

const fs = require('fs');

function solution() {
  const input = fs
    .readFileSync('src/baekjoon/simulation/input', 'utf8')
    .toString()
    .trim();
}

solution();
