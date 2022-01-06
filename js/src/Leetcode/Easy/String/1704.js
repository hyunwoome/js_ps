/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function (s) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let lowerStr = s.toLowerCase();
  const one = lowerStr.substring(0, lowerStr.length / 2);
  const two = lowerStr.substring(lowerStr.length / 2, s.length);

  function isValid(str) {
    let answer = 0;
    if (vowels.includes(str)) answer++;
    return answer;
  }
  let oneCount = 0;
  let twoCount = 0;
  for (let i = 0; i < one.length; i++) {
    oneCount += isValid(one[i]);
    twoCount += isValid(two[i]);
  }
  return oneCount === twoCount;
};

const s = 'Uo'; // even
console.log(halvesAreAlike(s));
