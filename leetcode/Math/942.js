/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function (s) {
  let N = s.length;
  let lo = 0;
  let hi = N;
  let arr = new Array(N + 1).fill(0);
  for (let i = 0; i < N; i++) {
    if (s[i] === 'I') {
      arr[i] = lo++;
    } else {
      arr[i] = hi--;
    }
  }
  arr[N] = lo;
  return arr;
};

const s = 'IDID';
console.log(diStringMatch(s));
