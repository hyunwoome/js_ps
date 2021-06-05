/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function (s1, s2) {
  const splittedS1 = s1.split(' ');
  const splittedS2 = s2.split(' ');
  const combinationArr = [...splittedS1, ...splittedS2];
  const obj = {};
  for (const str of combinationArr) {
    obj[str] = obj[str] ? obj[str] + 1 : 1;
  }
  const answer = [];
  for (const [key, value] of Object.entries(obj)) {
    if (value < 2) answer.push(key);
  }
  return answer;
};

const s1 = 'apple apple';
const s2 = 'banana';
console.log(uncommonFromSentences(s1, s2));
