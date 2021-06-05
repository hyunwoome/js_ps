/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  const sToObject = {};
  for (const char of s) {
    sToObject[char] = sToObject[char] ? sToObject[char] + 1 : 1;
  }
  const tToObject = {};
  for (const char of t) {
    tToObject[char] = tToObject[char] ? tToObject[char] + 1 : 1;
  }

  const ordered_s = Object.keys(sToObject)
    .sort()
    .reduce((obj, key) => {
      obj[key] = sToObject[key];
      return obj;
    }, {});

  const ordered_t = Object.keys(tToObject)
    .sort()
    .reduce((obj, key) => {
      obj[key] = tToObject[key];
      return obj;
    }, {});
  return JSON.stringify(ordered_s) === JSON.stringify(ordered_t);
};

const s = 'anagram';
const t = 'nagaram';
console.log(isAnagram(s, t));
