/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let newArr = s.split(' ').map((el) => el.split(''));
  let arr = [];
  for (let i = 0; i < newArr.length; i++) {
    arr.push(newArr[i].reverse());
  }
  let answer = arr.map((el) => el.join('') + ' ').join('');
  return answer.slice(0, -1);
};

const s = "Let's take LeetCode contest";
console.log(reverseWords(s));
