/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function (s, k) {
  let sum = '';
  for (let i = 0; i < s.length; i++) {
    sum += String(s[i].charCodeAt(0) - 96);
  }

  let convert = sum;
  while (k) {
    let tmp = 0;
    for (let i = 0; i < convert.length; i++) {
      tmp += +convert[i];
    }
    convert = String(tmp);
    k--;
  }
  return convert;
};

const s = 'iiii';
const k = 1;
console.log(getLucky(s, k));
