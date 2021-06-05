/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
  let arr = [0];
  let tmp = 0;
  for (let i = 0; i < gain.length; i++) {
    tmp += gain[i];
    arr.push(tmp);
  }
  return Math.max(...arr);
};

const gain = [-4, -3, -2, -1, 4, 3, 2];
console.log(largestAltitude(gain));
