/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function (items, ruleKey, ruleValue) {
  let answer = 0;
  for (let i = 0; i < items.length; i++) {
    if (ruleKey === 'type') {
      if (items[i][0] === ruleValue) answer++;
    } else if (ruleKey === 'color') {
      if (items[i][1] === ruleValue) answer++;
    } else if (ruleKey === 'name') {
      if (items[i][2] === ruleValue) answer++;
    }
  }
  return answer;
};

const items = [
  ['phone', 'blue', 'pixel'],
  ['computer', 'silver', 'lenovo'],
  ['phone', 'gold', 'iphone'],
];
const ruleKey = 'color';
const ruleValue = 'silver';
console.log(countMatches(items, ruleKey, ruleValue));
