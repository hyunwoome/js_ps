/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = function (encoded, first) {
  let answer = [first, first ^ encoded[0]];
  for (let i = 1; i < encoded.length; i++) {
    answer.push(answer[i] ^ encoded[i]);
  }
  return answer;
};

const encoded = [6, 2, 7, 3];
const first = 4;
console.log(decode(encoded, first));
