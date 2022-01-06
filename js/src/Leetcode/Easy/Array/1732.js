/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
  let answer = [0];
  let sum = 0;
  for (let i = 0; i < gain.length; i++) {
    answer.push((sum += gain[i]));
  }
  return Math.max(...answer);
};

const gain = [-5, 1, 5, 0, -7];
console.log(largestAltitude(gain));
