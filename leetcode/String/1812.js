/**
 * @param {string} coordinates
 * @return {boolean}
 */

// a = 97 (홀수)
// 1 = (홀수)

// 홀수 && 홀수 = 검정
// 짝수 && 짝수 = 검정

// 홀수 && 짝수 = 흰색
// 짝수 && 홀수 = 흰색

var squareIsWhite = function (coordinates) {
  let ascii = coordinates[0].charCodeAt(0);
  let num = coordinates[1];

  if (ascii % 2 !== 0 && num % 2 !== 0) {
    return false;
  } else if (ascii % 2 === 0 && num % 2 === 0) {
    return false;
  } else if (ascii % 2 !== 0 && num % 2 === 0) {
    return true;
  } else return true;
};

const coordinates = 'c2'; // 홀짝 // 99, 2
console.log(squareIsWhite(coordinates));
