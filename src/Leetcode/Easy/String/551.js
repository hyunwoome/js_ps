/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function (s) {
  let absent = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'A') absent++;
    if (s[i] === 'L' && s[i + 1] === 'L' && s[i + 2] === 'L') return false;
  }
  if (absent >= 2) return false;
  return true;
};

const s = 'AA';
console.log(checkRecord(s));

// 2일 미만 동안 결석
// 연속 3일 이상 지각 x
