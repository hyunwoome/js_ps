/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function (s) {
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    let lastIdx = s.lastIndexOf(s[i]);
    if (lastIdx !== i) {
      result = Math.max(result, lastIdx - i);
    }
  }
  return result - 1;
};

// const s = 'cbzxy';
const s = 'ojdncpvyneq';
console.log(maxLengthBetweenEqualCharacters(s));

// 0 1 2 3 4 5 6 7 8 9 10
// 0 1 2 8 4 5 6 7 8 9 10
//  Idx !== i
