/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {
  let steps = 0;
  while (num) {
    if (!(num % 2)) {
      num /= 2;
      steps++;
    } else {
      num -= 1;
      steps++;
    }
  }
  return steps;
};

const num = 14;
console.log(numberOfSteps(num));
