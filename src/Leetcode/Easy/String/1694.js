/**
 * @param {string} number
 * @return {string}
 */
var reformatNumber = function (number) {
  if (number.length < 3) return number;
  let numArr = number.replace(/[ -]/g, '').split('');
  let answer = '';
  while (numArr.length >= 4) {
    numArr.length === 4
      ? (answer +=
          numArr.splice(0, 2).join('') + '-' + numArr.splice(0, 2).join(''))
      : (answer += numArr.splice(0, 3).join('') + '-');
  }
  answer += numArr.join('');
  return answer;
};

const number = '1-23-45 6';
console.log(reformatNumber(number));

// 모든 공백과 대시 삭제
// 4개라면 2개 - 2개
// 6개라면 3개 - 3개
