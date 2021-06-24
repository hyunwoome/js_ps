/**
 * @param {number} n
 * @return {string}
 */
var generateTheString = function (n) {
  let answer = '';
  if (!(n % 2)) {
    for (let i = 0; i < n - 1; i++) {
      answer += 'a';
    }
    answer += 'b';
  } else {
    for (let i = 0; i < n; i++) {
      answer += 'a';
    }
  }
  return answer;
};

const n = 4;
console.log(generateTheString(n));
