/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function (s, indices) {
  let obj = {};
  for (let i = 0; i < indices.length; i++) {
    obj[indices[i]] = s[i];
  }
  console.log(obj);
  return Object.values(obj).join('');
};

const s = 'aiohn';
const indices = [3, 1, 4, 2, 0];
console.log(restoreString(s, indices));
