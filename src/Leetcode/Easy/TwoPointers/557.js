/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let splitArr = s.split(' ');
  let answer = '';
  splitArr.forEach((arr) => {
    let newArr = arr.split('');
    let rev = newArr.reverse();
    let str = rev.join('');
    answer += str + ' ';
  });
  return answer.trim();
};

const s = "Let's take LeetCode contest";
console.log(reverseWords(s));
