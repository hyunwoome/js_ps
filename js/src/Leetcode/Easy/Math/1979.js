/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function (nums) {
  const arr = nums.sort((a, b) => a - b);
  const min = arr[0];
  const max = arr[arr.length - 1];

  const GCD = (a, b) => {
    while (true) {
      let r = Math.floor(a % b);
      if (r === 0) return b;
      a = b;
      b = r;
    }
  };

  return GCD(min, max);
};

const nums = [2, 5, 6, 9, 10];
console.log(findGCD(nums));
