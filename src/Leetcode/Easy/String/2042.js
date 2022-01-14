/**
 * @param {string} s
 * @return {boolean}
 */
var areNumbersAscending = function (s) {
  const tmpArr = s.split(' ');
  const nums = [];
  for (const i of tmpArr) {
    if (+i >= 0 || i <= 9) nums.push(+i);
  }
  const origin = [...nums];
  const set = new Set(nums).size;
  const increase = nums.sort((a, b) => a - b);
  if (set !== nums.length) return false;
  for (let i = 0; i < origin.length; i++) {
    if (increase[i] !== origin[i]) return false;
  }
  return true;
};

const s = '4 5 11 26';
console.log(areNumbersAscending(s));
