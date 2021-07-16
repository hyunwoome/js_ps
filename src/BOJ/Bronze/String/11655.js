// boj 11655 (106) ('/dev/stdin')
// ! 출력형식 오류
// const input = require('fs').readFileSync('string/input', 'utf8').trim();

// let result = [];

// for (let i = 0; i < input.length; i++) {
//   if (input[i] >= 'A' && input[i] <= 'Z') {
//     let inputNums = input[i].charCodeAt(0);
//     let upper = inputNums + 13;
//     if (upper > 90) {
//       result.push(inputNums - 90 - 13 + 90);
//     } else {
//       result.push(upper);
//     }
//   } else if (input[i] >= 'a' && input[i] <= 'z') {
//     let inputNums = input[i].charCodeAt(0);
//     let lower = inputNums + 13;
//     if (lower > 122) {
//       result.push(inputNums - 122 - 13 + 122);
//     } else {
//       result.push(lower);
//     }
//   } else if (input[i] === ' ') {
//     result.push(' ');
//   } else if (typeof input[i] === 'string') {
//     result.push(input[i]);
//   }
// }

// let nums = '';

// for (let i = 0; i < result.length; i++) {
//   if (result[i] === ' ') {
//     nums += ' ';
//   } else if (typeof result[i] === 'string') {
//     nums += result[i];
//   } else {
//     nums += String.fromCharCode(result[i]);
//   }
// }

// console.log(nums);
// 출력형식 잘못
const input = require('fs')
  .readFileSync('string/input', 'utf8')
  .trim()
  .split('');

function ROT13(ch) {
  let chCode = ch.charCodeAt(0);
  if (65 <= chCode && chCode <= 90) {
    chCode = (((chCode % 65) + 13) % 26) + 65;
  } else if (97 <= chCode && chCode <= 122) {
    chCode = (((chCode % 97) + 13) % 26) + 97;
  }
  return String.fromCharCode(chCode);
}

let out = '';
input.forEach((ch) => {
  out += ROT13(ch);
});

console.log(out);
