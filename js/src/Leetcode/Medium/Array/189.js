/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotate = (nums, k) => {
  const stack = [];
  k %= nums.length;
  while (k) {
    stack.push(nums.pop());
    k--;
  }
  nums.unshift(...stack.reverse());
};

const nums = [1, 2, 3, 4, 5, 6, 7];
const k = 3;
console.log(rotate(nums, k));
