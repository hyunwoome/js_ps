/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function (s) {
  const arr = [];
  let count = 1;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) {
      count++;
    } else {
      arr.push(count);
      count = 1;
    }
  }
  return Math.max(...arr);
};

const s = 'abbcccddddeeeeedcba';
console.log(maxPower(s));
