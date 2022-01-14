/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function (nums) {
  let subsets = [[]];
  for (const num of nums) {
    let last = subsets.length - 1;
    for (let i = 0; i <= last; i++) {
      subsets.push([...subsets[i], num]);
    }
  }
  let sum = 0;
  for (let i = 0; i < subsets.length; i++) {
    if (subsets[i].length === 0) sum += 0;
    else if (subsets[i].length === 1) sum += parseInt(subsets[i]);
    else sum += parseInt(subsets[i].reduce((acc, cur) => acc ^ cur));
  }
  return sum;
};

const nums = [1, 3];
console.log(subsetXORSum(nums));
