/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  let obj = {};
  for (let i = 0; i < s.length; i++) {
    obj[s[i]] = obj[s[i]] ? obj[s[i]] + 1 : 1;
  }
  let unique = '';
  for (const [key, value] of Object.entries(obj)) {
    if (value === 1) {
      unique += key;
      break;
    }
  }
  if (unique.length) return s.indexOf(unique);
  else return -1;
};

const s = 'aabb';
console.log(firstUniqChar(s));
