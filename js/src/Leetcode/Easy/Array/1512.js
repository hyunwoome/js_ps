/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
  let counterObj = {},
    counter = 0;
  nums.forEach((n) => {
    if (counterObj[n]) {
      counter += counterObj[n]++;
    } else {
      counterObj[n] = 1;
    }
  });)
  return counter;
};

const nums = [1, 2, 3, 1, 1, 3];
console.log(numIdenticalPairs(nums));

// ceil 소수점 올림
